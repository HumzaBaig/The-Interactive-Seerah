import { SeerahEvent } from "@shared/schema";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Star } from "lucide-react";

interface EventNodeProps {
  event: SeerahEvent;
  positionPx: number;
  periodColor: string;
  onClick: () => void;
}

export default function EventNode({ event, positionPx, periodColor, onClick }: EventNodeProps) {
  const isBirthEvent = event.id === "birth";

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
          {/* Event Node Circle */}
          <div 
            className={`${isBirthEvent ? 'w-8 h-8' : 'w-6 h-6'} rounded-full border-[3px] border-background shadow-md transition-all duration-200 group-hover:scale-125 group-hover:shadow-lg cursor-pointer flex items-center justify-center`}
            style={{ backgroundColor: periodColor }}
          >
            {isBirthEvent && (
              <Star className="w-4 h-4 text-white fill-white" />
            )}
          </div>
          
          {/* Year Label on Hover */}
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
            <div className="bg-popover text-popover-foreground px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap border shadow-lg">
              {event.year} CE
            </div>
          </div>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs z-50">
        <div className="space-y-1.5">
          <div className="font-semibold text-sm">{event.title}</div>
          <div className="text-xs text-muted-foreground">{event.date}</div>
          <div className="text-xs text-muted-foreground">{event.location}</div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
