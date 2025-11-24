import { useState, useRef, useEffect } from "react";
import { SeerahEvent, TimelinePeriod } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import EventNode from "@/components/EventNode";
import EventDetailModal from "@/components/EventDetailModal";
import { TIMELINE_START, TIMELINE_END } from "@/data/seerah-events";

interface TimelineViewerProps {
  events: SeerahEvent[];
  periods: TimelinePeriod[];
  selectedPeriod?: string;
  selectedCategory?: string;
}

export default function TimelineViewer({ 
  events, 
  periods, 
  selectedPeriod,
  selectedCategory 
}: TimelineViewerProps) {
  const [pixelsPerYear, setPixelsPerYear] = useState(60);
  const [selectedEvent, setSelectedEvent] = useState<SeerahEvent | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredEvents = events.filter(event => {
    const periodMatch = !selectedPeriod || event.period === selectedPeriod;
    const categoryMatch = !selectedCategory || event.category === selectedCategory;
    return periodMatch && categoryMatch;
  });

  const totalYears = TIMELINE_END - TIMELINE_START;
  const timelineWidthPx = totalYears * pixelsPerYear;

  const yearToPixels = (year: number) => {
    const clampedYear = Math.max(TIMELINE_START, Math.min(TIMELINE_END, year));
    return (clampedYear - TIMELINE_START) * pixelsPerYear;
  };

  const handleZoomIn = () => setPixelsPerYear(prev => Math.min(prev + 15, 120));
  const handleZoomOut = () => setPixelsPerYear(prev => Math.max(prev - 15, 30));
  const handleResetZoom = () => setPixelsPerYear(60);

  useEffect(() => {
    if (selectedPeriod && scrollRef.current) {
      const period = periods.find(p => p.id === selectedPeriod);
      if (period) {
        const position = yearToPixels(period.startYear);
        const scrollPosition = position - (scrollRef.current.clientWidth / 2);
        scrollRef.current.scrollTo({ left: Math.max(0, scrollPosition), behavior: 'smooth' });
      }
    }
  }, [selectedPeriod, pixelsPerYear]);

  return (
    <div className="relative bg-card border-y">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <Button 
          size="icon" 
          variant="secondary" 
          onClick={handleZoomIn}
          data-testid="button-zoom-in"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button 
          size="icon" 
          variant="secondary" 
          onClick={handleZoomOut}
          data-testid="button-zoom-out"
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button 
          size="icon" 
          variant="secondary" 
          onClick={handleResetZoom}
          data-testid="button-reset-zoom"
        >
          <Maximize2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Timeline Container */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden py-20"
        style={{ height: '70vh' }}
      >
        <div 
          className="relative"
          style={{ 
            width: `${timelineWidthPx}px`,
            minWidth: '100%',
            height: '100%'
          }}
        >
          {/* Period Background Blocks */}
          <div className="absolute inset-0 flex">
            {periods.map(period => {
              const startPx = yearToPixels(period.startYear);
              // Make endYear inclusive by adding 1 year to the calculation
              const endPx = yearToPixels(period.endYear + 1);
              const widthPx = endPx - startPx;

              return (
                <div
                  key={period.id}
                  className="absolute top-0 bottom-0 border-r-2 border-border/50"
                  style={{
                    left: `${startPx}px`,
                    width: `${widthPx}px`,
                    backgroundColor: period.color,
                    opacity: 0.15
                  }}
                  data-testid={`period-${period.id}`}
                >
                  {/* Period Label */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1.5 rounded-md border">
                    <div className="text-sm font-semibold">{period.name}</div>
                    <div className="text-xs text-muted-foreground">{period.nameArabic}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {period.startYear}—{period.endYear} CE
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline Axis Line */}
          <div 
            className="absolute left-0 right-0 h-1 bg-foreground/20"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          />

          {/* Event Nodes - All Aligned on Same Line */}
          <div className="absolute inset-0" style={{ top: '50%', transform: 'translateY(-50%)' }}>
            {filteredEvents.map(event => {
              const positionPx = yearToPixels(event.year);
              
              return (
                <EventNode
                  key={event.id}
                  event={event}
                  positionPx={positionPx}
                  onClick={() => setSelectedEvent(event)}
                />
              );
            })}
          </div>

          {/* Year Markers */}
          <div className="absolute inset-x-0 bottom-8">
            {Array.from({ length: Math.floor(totalYears / 10) + 1 }, (_, i) => {
              const year = TIMELINE_START + (i * 10);
              if (year > TIMELINE_END) return null;
              
              const position = yearToPixels(year);
              
              return (
                <div
                  key={year}
                  className="absolute text-xs text-muted-foreground font-medium"
                  style={{ left: `${position}px`, transform: 'translateX(-50%)' }}
                >
                  {year} CE
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Info Footer */}
      <div className="bg-muted/30 py-2 px-8 flex items-center justify-between text-sm text-muted-foreground">
        <span>{TIMELINE_START} CE</span>
        <span>{filteredEvents.length} events displayed</span>
        <span>{TIMELINE_END} CE</span>
      </div>

      <EventDetailModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
