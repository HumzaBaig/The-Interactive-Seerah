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
  const [pixelsPerYear, setPixelsPerYear] = useState(48);
  const [selectedEvent, setSelectedEvent] = useState<SeerahEvent | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredEvents = events.filter(event => {
    const periodMatch = !selectedPeriod || event.period === selectedPeriod;
    const categoryMatch = !selectedCategory || event.category === selectedCategory;
    return periodMatch && categoryMatch;
  });

  // Calculate timeline dimensions in pixels
  const totalYears = TIMELINE_END - TIMELINE_START;
  const timelineWidthPx = totalYears * pixelsPerYear;

  // Convert year to pixel position (no offset - pure pixel positioning)
  const yearToPixels = (year: number) => {
    // Clamp to timeline range
    const clampedYear = Math.max(TIMELINE_START, Math.min(TIMELINE_END, year));
    return (clampedYear - TIMELINE_START) * pixelsPerYear;
  };

  const handleZoomIn = () => setPixelsPerYear(prev => Math.min(prev + 12, 144));
  const handleZoomOut = () => setPixelsPerYear(prev => Math.max(prev - 12, 24));
  const handleResetZoom = () => setPixelsPerYear(48);

  useEffect(() => {
    if (selectedPeriod && scrollRef.current) {
      const period = periods.find(p => p.id === selectedPeriod);
      if (period) {
        const position = yearToPixels(period.startYear);
        const scrollPosition = position - (scrollRef.current.clientWidth / 2);
        scrollRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  }, [selectedPeriod, pixelsPerYear]);

  return (
    <div className="relative bg-card border-y">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
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

      <div 
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden py-16"
        style={{ height: '60vh' }}
      >
        <div 
          className="relative mx-auto"
          style={{ 
            width: `${timelineWidthPx}px`,
            minWidth: '100%',
            height: '100%'
          }}
        >
          {/* Render period segments */}
          {periods.map(period => {
            const startPx = yearToPixels(period.startYear);
            const endPx = yearToPixels(period.endYear);
            const widthPx = endPx - startPx;

            return (
              <div
                key={`timeline-${period.id}`}
                className="absolute top-1/2 -translate-y-1/2 h-1"
                style={{
                  left: `${startPx}px`,
                  width: `${widthPx}px`,
                  backgroundColor: period.color
                }}
              />
            );
          })}

          {/* Render events on main timeline (≤622 CE) */}
          {filteredEvents.filter(event => event.year <= TIMELINE_END).map(event => {
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
      </div>

      <div className="bg-muted/30 py-2 px-8 flex items-center justify-between text-sm text-muted-foreground">
        <span>{TIMELINE_START} CE</span>
        <span>Timeline: {totalYears} years</span>
        <span>{TIMELINE_END} CE</span>
      </div>

      <EventDetailModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
