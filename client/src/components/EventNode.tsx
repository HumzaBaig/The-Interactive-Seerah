import { SeerahEvent } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EventNodeProps {
  event: SeerahEvent;
  position: number;
  onClick: () => void;
}

const significanceSize = {
  low: "w-3 h-3",
  medium: "w-4 h-4",
  high: "w-5 h-5",
  critical: "w-6 h-6"
};

const categoryIcons = {
  revelation: "📖",
  battle: "⚔️",
  treaty: "📜",
  migration: "🧭",
  "social-reform": "⚖️",
  "companion-story": "👥",
  spiritual: "✨"
};

export default function EventNode({ event, position, onClick }: EventNodeProps) {
  const size = significanceSize[event.significance];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 hover-elevate active-elevate-2 group"
          style={{ left: `${position}%` }}
          data-testid={`event-node-${event.id}`}
        >
          <div className={`${size} rounded-full bg-primary border-2 border-primary-foreground transition-transform group-hover:scale-125`} />
          <div className="absolute top-full mt-2 text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            {event.year} CE
          </div>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-base">{categoryIcons[event.category]}</span>
            <p className="font-semibold">{event.title}</p>
          </div>
          {event.titleArabic && (
            <p className="text-sm font-serif text-muted-foreground">{event.titleArabic}</p>
          )}
          <p className="text-xs text-muted-foreground">{event.location} - {event.date}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}
