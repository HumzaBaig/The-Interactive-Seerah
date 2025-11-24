import { SeerahEvent } from "@shared/schema";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EventNodeProps {
  event: SeerahEvent;
  positionPx: number;
  onClick: () => void;
}

export default function EventNode({ event, positionPx, onClick }: EventNodeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className="absolute group"
          style={{ 
            left: `${positionPx}px`,
            top: '0',
            transform: 'translate(-50%, -50%)'
          }}
          data-testid={`event-node-${event.id}`}
          aria-label={event.title}
        >
          {/* Event Dot - Uniform Size */}
          <div 
            className="w-6 h-6 rounded-full border-4 border-background transition-all duration-200 group-hover:scale-150 group-hover:z-10"
            style={{
              backgroundColor: event.significance === "critical" ? "hsl(var(--primary))" :
                             event.significance === "high" ? "hsl(var(--chart-2))" :
                             event.significance === "medium" ? "hsl(var(--chart-3))" :
                             "hsl(var(--chart-4))"
            }}
          />
          
          {/* Year Label on Hover */}
          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-popover text-popover-foreground px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap border shadow-md">
              {event.year} CE
            </div>
          </div>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs">
        <div className="space-y-1">
          <div className="font-semibold">{event.title}</div>
          {event.titleArabic && (
            <div className="text-xs text-muted-foreground">{event.titleArabic}</div>
          )}
          <div className="text-xs text-muted-foreground">{event.date}</div>
          <div className="text-xs text-muted-foreground">{event.location}</div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
