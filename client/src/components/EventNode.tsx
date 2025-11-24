import { SeerahEvent } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
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

const categoryIcons = {
  revelation: "📖",
  battle: "⚔️",
  treaty: "📜",
  migration: "🧭",
  "social-reform": "⚖️",
  "companion-story": "👥",
  spiritual: "✨",
  family: "👨‍👩‍👧‍👦"
};

export default function EventNode({ event, positionPx, onClick }: EventNodeProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className="absolute top-1/2 -translate-y-1/2 group z-10 p-0"
          style={{ left: `${positionPx}px`, transform: 'translateY(-50%)' }}
          data-testid={`event-node-${event.id}`}
        >
          <div className="w-5 h-5 rounded-full bg-primary border-2 border-primary-foreground transition-transform group-hover:scale-125" />
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
