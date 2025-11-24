import { useState, useRef, useEffect } from "react";
import { SeerahEvent, TimelinePeriod } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import EventNode from "@/components/EventNode";
import EventDetailModal from "@/components/EventDetailModal";

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
  const [zoom, setZoom] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState<SeerahEvent | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredEvents = events.filter(event => {
    const periodMatch = !selectedPeriod || event.period === selectedPeriod;
    const categoryMatch = !selectedCategory || event.category === selectedCategory;
    return periodMatch && categoryMatch;
  });

  const minYear = Math.min(...events.map(e => e.year));
  const maxYear = Math.max(...events.map(e => e.year));
  const totalYears = maxYear - minYear;

  const getEventPosition = (year: number) => {
    return ((year - minYear) / totalYears) * 100;
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoom(1);

  useEffect(() => {
    if (selectedPeriod && scrollRef.current) {
      const period = periods.find(p => p.id === selectedPeriod);
      if (period) {
        const position = getEventPosition(period.startYear);
        const scrollPosition = (position / 100) * scrollRef.current.scrollWidth - (scrollRef.current.clientWidth / 2);
        scrollRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  }, [selectedPeriod]);

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
          className="relative mx-auto px-8"
          style={{ 
            width: `${100 * zoom}%`,
            minWidth: '100%',
            height: '100%'
          }}
        >
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-border" />

          {filteredEvents.map(event => {
            const position = getEventPosition(event.year);
            return (
              <EventNode
                key={event.id}
                event={event}
                position={position}
                onClick={() => setSelectedEvent(event)}
              />
            );
          })}
        </div>
      </div>

      <div className="bg-muted/30 py-2 px-8 flex items-center justify-between text-sm text-muted-foreground">
        <span>{minYear} CE</span>
        <span>Timeline: {totalYears} years</span>
        <span>{maxYear} CE</span>
      </div>

      <EventDetailModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
