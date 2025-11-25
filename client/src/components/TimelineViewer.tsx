import { useState, useRef, useEffect } from "react";
import { SeerahEvent, TimelinePeriod } from "@shared/schema";
import EventNode from "@/components/EventNode";
import EventDetailModal from "@/components/EventDetailModal";
import { TIMELINE_START, TIMELINE_END } from "@/data/seerah-events";

interface TimelineViewerProps {
  events: SeerahEvent[];
  periods: TimelinePeriod[];
  selectedPeriod?: string;
  selectedCategory?: string;
}

const FIXED_PIXELS_PER_YEAR = 80;

export default function TimelineViewer({ 
  events, 
  periods, 
  selectedPeriod,
  selectedCategory 
}: TimelineViewerProps) {
  const [selectedEvent, setSelectedEvent] = useState<SeerahEvent | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredEvents = events.filter(event => {
    const periodMatch = !selectedPeriod || event.period === selectedPeriod;
    const categoryMatch = !selectedCategory || event.category === selectedCategory;
    return periodMatch && categoryMatch;
  });

  const totalYears = TIMELINE_END - TIMELINE_START;
  const timelineWidthPx = totalYears * FIXED_PIXELS_PER_YEAR + 120;

  const yearToPixels = (year: number) => {
    const clampedYear = Math.max(TIMELINE_START, Math.min(TIMELINE_END, year));
    return 60 + (clampedYear - TIMELINE_START) * FIXED_PIXELS_PER_YEAR;
  };

  const getPeriodColor = (periodId: string) => {
    const period = periods.find(p => p.id === periodId);
    return period?.color || "hsl(var(--primary))";
  };

  useEffect(() => {
    if (selectedPeriod && scrollRef.current) {
      const period = periods.find(p => p.id === selectedPeriod);
      if (period) {
        const position = yearToPixels(period.startYear);
        const scrollPosition = position - 100;
        scrollRef.current.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'smooth' });
      }
    }
  }, [selectedPeriod]);

  return (
    <div className="relative bg-card border-y">
      {/* Timeline Container */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden"
        style={{ height: '400px' }}
      >
        <div 
          className="relative h-full"
          style={{ 
            width: `${timelineWidthPx}px`,
            minWidth: '100%'
          }}
        >
          {/* Period Background Blocks */}
          {periods.map(period => {
            const startPx = yearToPixels(period.startYear) - 60;
            const endPx = yearToPixels(period.endYear + 1) - 60;
            const widthPx = endPx - startPx;

            return (
              <div
                key={period.id}
                className="absolute top-0 bottom-0"
                style={{
                  left: `${startPx + 60}px`,
                  width: `${widthPx}px`,
                  backgroundColor: period.color,
                  opacity: 0.12
                }}
                data-testid={`period-${period.id}`}
              >
                {/* Period Label */}
                <div 
                  className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm px-4 py-2.5 rounded-lg border shadow-sm"
                >
                  <div className="text-base font-semibold" style={{ color: period.color }}>
                    {period.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    {period.startYear}—{period.endYear} CE
                  </div>
                </div>
              </div>
            );
          })}

          {/* Timeline Axis Line */}
          <div 
            className="absolute h-1 rounded-full"
            style={{ 
              top: '55%', 
              left: '60px',
              right: '60px',
              background: 'linear-gradient(to right, hsl(25, 100%, 50%), hsl(25, 100%, 50%) 82%, hsl(140, 70%, 40%) 82%, hsl(140, 70%, 40%))'
            }}
          />

          {/* Event Nodes */}
          <div 
            className="absolute inset-x-0" 
            style={{ top: '55%', transform: 'translateY(-50%)' }}
          >
            {filteredEvents.map((event, index) => {
              // Count how many events share the same year and find this event's position among them
              const sameYearEvents = filteredEvents.filter(e => e.year === event.year);
              const indexInYear = sameYearEvents.findIndex(e => e.id === event.id);
              const offsetPx = sameYearEvents.length > 1 ? (indexInYear * 50) : 0;
              
              const positionPx = yearToPixels(event.year) + offsetPx;
              const periodColor = getPeriodColor(event.period);
              
              return (
                <EventNode
                  key={event.id}
                  event={event}
                  positionPx={positionPx}
                  periodColor={periodColor}
                  onClick={() => setSelectedEvent(event)}
                />
              );
            })}
          </div>

          {/* Year Markers */}
          <div className="absolute inset-x-0" style={{ top: '75%' }}>
            {Array.from({ length: Math.floor(totalYears / 10) + 1 }, (_, i) => {
              const year = TIMELINE_START + (i * 10);
              if (year > TIMELINE_END) return null;
              
              const position = yearToPixels(year);
              
              return (
                <div
                  key={year}
                  className="absolute flex flex-col items-center"
                  style={{ left: `${position}px`, transform: 'translateX(-50%)' }}
                >
                  <div className="w-px h-3 bg-foreground/30 mb-1" />
                  <span className="text-xs text-muted-foreground font-medium">
                    {year} CE
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Timeline Info Footer */}
      <div className="bg-muted/30 py-3 px-8 flex items-center justify-between text-sm border-t">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(25, 100%, 50%)' }} />
            <span className="text-muted-foreground">Makkan Period</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(140, 70%, 40%)' }} />
            <span className="text-muted-foreground">Madinan Period</span>
          </div>
        </div>
        <span className="font-medium">{filteredEvents.length} events</span>
      </div>
      <EventDetailModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
