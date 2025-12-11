import { SeerahEvent } from "@shared/schema";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { StyledText } from "@/components/StyledText";

interface EventNodeProps {
  event: SeerahEvent;
  positionPx: number;
  periodColor: string;
  onClick: () => void;
  labelPosition: "above" | "below";
  verticalOffset: number;
}

const categoryLabels: Record<string, string> = {
  revelation: "Revelation",
  battle: "Battle",
  migration: "Migration",
  civic: "Society & Governance",
  people: "Family & Companions",
  spiritual: "Spiritual Event"
};

const categoryColors: Record<string, string> = {
  revelation: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  battle: "bg-red-500/10 text-red-700 dark:text-red-300",
  migration: "bg-green-500/10 text-green-700 dark:text-green-300",
  civic: "bg-purple-500/10 text-purple-700 dark:text-purple-300",
  people: "bg-pink-500/10 text-pink-700 dark:text-pink-300",
  spiritual: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"
};

export default function EventNode({ event, positionPx, periodColor, onClick, labelPosition, verticalOffset }: EventNodeProps) {
  const isAbove = labelPosition === "above";
  
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
          {/* Connecting Line */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-px bg-foreground/20"
            style={{
              [isAbove ? 'bottom' : 'top']: '100%',
              height: `${20 + verticalOffset}px`
            }}
          />
          
          {/* Event Node Circle */}
          <div 
            className="w-6 h-6 rounded-full border-[3px] border-background shadow-md transition-all duration-200 group-hover:scale-125 group-hover:shadow-lg cursor-pointer relative z-10"
            style={{ backgroundColor: periodColor }}
          />
          
          {/* Title Label */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-20"
            style={{
              [isAbove ? 'bottom' : 'top']: `calc(100% + ${24 + verticalOffset}px)`,
              maxWidth: '120px'
            }}
          >
            <div className="text-xs font-medium text-center leading-tight text-foreground/80 group-hover:text-foreground transition-colors">
              <StyledText>{event.title}</StyledText>
            </div>
          </div>
        </button>
      </TooltipTrigger>
      <TooltipContent side={isAbove ? "bottom" : "top"} className="max-w-xs z-50">
        <div className="space-y-1.5">
          <div className="font-semibold text-sm"><StyledText>{event.title}</StyledText></div>
          <div className="text-xs text-muted-foreground">{event.location}</div>
          <Badge className={`text-xs ${categoryColors[event.category]}`}>
            {categoryLabels[event.category]}
          </Badge>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
