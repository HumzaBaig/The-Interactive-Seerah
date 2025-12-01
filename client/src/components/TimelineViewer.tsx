import { useState, useRef, useEffect } from "react";
import { SeerahEvent, TimelinePeriod } from "@shared/schema";
import EventNode from "@/components/EventNode";
import EventDetailModal from "@/components/EventDetailModal";
import { TIMELINE_START, TIMELINE_END } from "@/data/seerah-events";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, X } from "lucide-react";

interface TimelineViewerProps {
  events: SeerahEvent[];
  periods: TimelinePeriod[];
  selectedPeriod?: string;
  selectedCategory?: string;
}

const FIXED_PIXELS_PER_YEAR = 120;

export default function TimelineViewer({ 
  events, 
  periods, 
  selectedPeriod,
  selectedCategory 
}: TimelineViewerProps) {
  const [selectedEvent, setSelectedEvent] = useState<SeerahEvent | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredEvents = events.filter(event => {
    const periodMatch = !selectedPeriod || event.period === selectedPeriod;
    const categoryMatch = !selectedCategory || event.category === selectedCategory;
    return periodMatch && categoryMatch;
  });

  const totalYears = TIMELINE_END - TIMELINE_START;
  
  const yearToPixels = (year: number) => {
    const clampedYear = Math.max(TIMELINE_START, Math.min(TIMELINE_END, year));
    return 60 + (clampedYear - TIMELINE_START) * FIXED_PIXELS_PER_YEAR;
  };

  // Calculate maximum event position (including same-year offsets)
  const getMaxEventPosition = () => {
    let maxPosition = yearToPixels(TIMELINE_END);
    events.forEach(event => {
      const sameYearEvents = events.filter(e => e.year === event.year);
      const indexInYear = sameYearEvents.findIndex(e => e.id === event.id);
      const offsetPx = sameYearEvents.length > 1 ? (indexInYear * 70) : 0;
      const position = yearToPixels(event.year) + offsetPx;
      if (position > maxPosition) {
        maxPosition = position;
      }
    });
    return maxPosition;
  };

  const maxEventPosition = getMaxEventPosition();
  const timelineWidthPx = maxEventPosition + 100;

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

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  // Prevent body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  const timelineContent = (
    <>
      {/* Timeline Container */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden flex-1"
        style={{ height: isFullscreen ? 'calc(100% - 56px)' : '400px' }}
      >
        <div 
          className="relative h-full"
          style={{ 
            width: `${timelineWidthPx}px`,
            minWidth: '100%'
          }}
        >
          {/* Timeline Axis Line - extends to the last event (Death of Prophet ﷺ) */}
          <div 
            className="absolute h-1 rounded-full"
            style={{ 
              top: '50%', 
              left: '60px',
              width: `${maxEventPosition - 60 + 12}px`,
              background: 'linear-gradient(to right, hsl(25, 100%, 50%), hsl(25, 100%, 50%) 84%, hsl(140, 70%, 40%) 84%, hsl(140, 70%, 40%))'
            }}
          />

          {/* Event Nodes */}
          <div 
            className="absolute inset-x-0" 
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            {(() => {
              // Calculate positions for all events first
              const eventPositions = filteredEvents.map(event => {
                const sameYearEvents = filteredEvents.filter(e => e.year === event.year);
                const indexInYear = sameYearEvents.findIndex(e => e.id === event.id);
                const offsetPx = sameYearEvents.length > 1 ? (indexInYear * 70) : 0;
                return {
                  event,
                  positionPx: yearToPixels(event.year) + offsetPx
                };
              }).sort((a, b) => a.positionPx - b.positionPx);

              // Calculate label positions and vertical offsets to prevent overlap
              const labelData: { position: "above" | "below"; offset: number }[] = [];
              const MIN_SPACING = 130; // Minimum horizontal spacing before staggering
              
              eventPositions.forEach((item, index) => {
                // Check nearby events on same side
                let position: "above" | "below" = index % 2 === 0 ? "above" : "below";
                let offset = 0;
                
                // Look at previous events with same position (above/below)
                for (let i = index - 1; i >= 0 && i >= index - 4; i--) {
                  const prevItem = eventPositions[i];
                  const prevLabel = labelData[i];
                  const distance = item.positionPx - prevItem.positionPx;
                  
                  if (distance < MIN_SPACING && prevLabel.position === position) {
                    // Too close, either switch sides or add offset
                    const otherPosition = position === "above" ? "below" : "above";
                    
                    // Check if other side is also crowded
                    let otherSideCrowded = false;
                    for (let j = index - 1; j >= 0 && j >= index - 4; j--) {
                      const checkItem = eventPositions[j];
                      const checkLabel = labelData[j];
                      const checkDist = item.positionPx - checkItem.positionPx;
                      if (checkDist < MIN_SPACING && checkLabel.position === otherPosition) {
                        otherSideCrowded = true;
                        break;
                      }
                    }
                    
                    if (!otherSideCrowded) {
                      position = otherPosition;
                    } else {
                      // Both sides crowded, add vertical offset
                      offset = 35;
                    }
                  }
                }
                
                labelData.push({ position, offset });
              });

              return eventPositions.map((item, index) => {
                const periodColor = getPeriodColor(item.event.period);
                return (
                  <EventNode
                    key={item.event.id}
                    event={item.event}
                    positionPx={item.positionPx}
                    periodColor={periodColor}
                    onClick={() => setSelectedEvent(item.event)}
                    labelPosition={labelData[index].position}
                    verticalOffset={labelData[index].offset}
                  />
                );
              });
            })()}
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
        <div className="flex items-center gap-4">
          <span className="font-medium">{filteredEvents.length} events</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFullscreen(!isFullscreen)}
            data-testid="button-fullscreen-toggle"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-4 h-4 mr-2" />
                Exit Fullscreen
              </>
            ) : (
              <>
                <Maximize2 className="w-4 h-4 mr-2" />
                Fullscreen
              </>
            )}
          </Button>
        </div>
      </div>
      <EventDetailModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex flex-col">
        {/* Fullscreen Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b bg-card">
          <h2 className="text-lg font-semibold">Timeline View</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreen(false)}
            data-testid="button-close-fullscreen"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex-1 flex flex-col">
          {timelineContent}
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-card border-y">
      {timelineContent}
    </div>
  );
}
