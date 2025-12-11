import { useState, useRef, useEffect, useMemo } from "react";
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

interface EventLayoutData {
  positionPx: number;
  labelPosition: "above" | "below";
  verticalOffset: number;
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

  // Generate axis markers (every 5 years)
  const axisMarkers = useMemo(() => {
    const markers: { year: number; positionPx: number }[] = [];
    for (let year = TIMELINE_START; year <= TIMELINE_END; year += 5) {
      markers.push({
        year,
        positionPx: 60 + (year - TIMELINE_START) * FIXED_PIXELS_PER_YEAR
      });
    }
    // Add the final year if not already included
    if ((TIMELINE_END - TIMELINE_START) % 5 !== 0) {
      markers.push({
        year: TIMELINE_END,
        positionPx: 60 + (TIMELINE_END - TIMELINE_START) * FIXED_PIXELS_PER_YEAR
      });
    }
    return markers;
  }, []);

  const formatAxisLabel = (year: number) => {
    return `${year} CE`;
  };

  const yearToPixels = (year: number) => {
    const clampedYear = Math.max(TIMELINE_START, Math.min(TIMELINE_END, year));
    return 60 + (clampedYear - TIMELINE_START) * FIXED_PIXELS_PER_YEAR;
  };

  // Precompute stable layout for ALL events (not affected by filters)
  const eventLayoutMap = useMemo(() => {
    const layoutMap: Record<string, EventLayoutData> = {};
    
    // Calculate positions for all events
    const eventPositions = events.map(event => {
      const sameYearEvents = events.filter(e => e.year === event.year);
      const indexInYear = sameYearEvents.findIndex(e => e.id === event.id);
      const offsetPx = sameYearEvents.length > 1 ? (indexInYear * 70) : 0;
      return {
        event,
        positionPx: yearToPixels(event.year) + offsetPx
      };
    }).sort((a, b) => a.positionPx - b.positionPx);

    // Calculate label positions and vertical offsets
    const MIN_SPACING = 100;
    
    eventPositions.forEach((item, index) => {
      let position: "above" | "below" = index % 2 === 0 ? "above" : "below";
      let offset = 0;
      
      let aboveCount = 0;
      let belowCount = 0;
      let aboveOffsets: number[] = [];
      let belowOffsets: number[] = [];
      
      for (let i = index - 1; i >= 0 && i >= index - 6; i--) {
        const prevItem = eventPositions[i];
        const prevLayout = layoutMap[prevItem.event.id];
        const distance = item.positionPx - prevItem.positionPx;
        
        if (distance < MIN_SPACING && prevLayout) {
          if (prevLayout.labelPosition === "above") {
            aboveCount++;
            aboveOffsets.push(prevLayout.verticalOffset);
          } else {
            belowCount++;
            belowOffsets.push(prevLayout.verticalOffset);
          }
        }
      }
      
      if (aboveCount < belowCount) {
        position = "above";
      } else if (belowCount < aboveCount) {
        position = "below";
      }
      
      const usedOffsets = position === "above" ? aboveOffsets : belowOffsets;
      if (usedOffsets.length > 0) {
        const offsetLevels = [0, 30, 60, 90];
        for (const level of offsetLevels) {
          if (!usedOffsets.includes(level)) {
            offset = level;
            break;
          }
        }
        if (usedOffsets.includes(offset)) {
          offset = Math.max(...usedOffsets) + 30;
        }
      }
      
      layoutMap[item.event.id] = {
        positionPx: item.positionPx,
        labelPosition: position,
        verticalOffset: offset
      };
    });
    
    return layoutMap;
  }, [events]);

  // Filter events for display (positions come from precomputed map)
  const filteredEvents = events.filter(event => {
    const periodMatch = !selectedPeriod || event.period === selectedPeriod;
    const categoryMatch = !selectedCategory || event.category === selectedCategory;
    return periodMatch && categoryMatch;
  });

  // Calculate maximum event position from all events
  const maxEventPosition = useMemo(() => {
    let maxPos = yearToPixels(TIMELINE_END);
    Object.values(eventLayoutMap).forEach(layout => {
      if (layout.positionPx > maxPos) {
        maxPos = layout.positionPx;
      }
    });
    return maxPos;
  }, [eventLayoutMap]);

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
          {/* Period background overlays - transition at hijrah event position */}
          {(() => {
            const hijrahPosition = eventLayoutMap['hijrah']?.positionPx || yearToPixels(622);
            const showMakkan = !selectedPeriod || selectedPeriod === 'makkan';
            const showMadinan = !selectedPeriod || selectedPeriod === 'madinan';
            return (
              <>
                <div 
                  className="absolute inset-y-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    left: '0px',
                    width: `${hijrahPosition}px`,
                    backgroundColor: 'hsl(25, 100%, 50%)',
                    opacity: showMakkan ? 0.2 : 0
                  }}
                />
                <div 
                  className="absolute inset-y-0 pointer-events-none transition-opacity duration-300"
                  style={{
                    left: `${hijrahPosition}px`,
                    right: '0px',
                    backgroundColor: 'hsl(140, 70%, 40%)',
                    opacity: showMadinan ? 0.2 : 0
                  }}
                />
              </>
            );
          })()}
          
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

          {/* Axis Markers - positioned at bottom */}
          {axisMarkers.map((marker) => (
            <div
              key={marker.year}
              className="absolute flex flex-col items-center"
              style={{
                left: `${marker.positionPx}px`,
                bottom: '16px',
                transform: 'translateX(-50%)'
              }}
            >
              {/* Label */}
              <div className="text-xs text-muted-foreground whitespace-nowrap">
                {formatAxisLabel(marker.year)}
              </div>
            </div>
          ))}

          {/* Event Nodes - uses precomputed positions from eventLayoutMap */}
          <div 
            className="absolute inset-x-0" 
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            {filteredEvents.map(event => {
              const layout = eventLayoutMap[event.id];
              if (!layout) return null;
              
              const periodColor = getPeriodColor(event.period);
              return (
                <EventNode
                  key={event.id}
                  event={event}
                  positionPx={layout.positionPx}
                  periodColor={periodColor}
                  onClick={() => setSelectedEvent(event)}
                  labelPosition={layout.labelPosition}
                  verticalOffset={layout.verticalOffset}
                />
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
    <div className="relative bg-card border-y overflow-hidden">
      {timelineContent}
    </div>
  );
}
