import { SeerahEvent } from "@shared/schema";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Star, 
  Heart,
  BookOpen, 
  Plane, 
  Users, 
  Scroll, 
  Sparkles,
  Landmark,
  Swords,
  Handshake,
  Building,
  Moon,
  Crown,
  Shield,
  Flag,
  MapPin,
  Home,
  FileText,
  type LucideIcon
} from "lucide-react";

const eventIconMap: Record<string, LucideIcon> = {
  "birth": Star,
  "death": Moon,
  "death-aminah": Heart,
  "death-abdul-muttalib": Heart,
  "marriage-khadijah": Heart,
  "first-revelation": BookOpen,
  "public-dawah": Scroll,
  "first-abyssinia": Plane,
  "second-abyssinia": Plane,
  "umar-conversion": Users,
  "boycott": Shield,
  "year-of-sorrow": Heart,
  "taif": MapPin,
  "isra-miraj": Sparkles,
  "first-aqabah": Handshake,
  "second-aqabah": Handshake,
  "hijrah": Plane,
  "masjid-nabawi": Building,
  "brotherhood": Users,
  "constitution": FileText,
  "badr": Swords,
  "uhud": Swords,
  "khandaq": Shield,
  "hudaybiyyah": Handshake,
  "khaybar": Flag,
  "makkah-conquest": Crown,
  "hunayn": Swords,
  "tabuk": Flag,
  "farewell-pilgrimage": Landmark,
};

const categoryIconMap: Record<string, LucideIcon> = {
  "family": Heart,
  "revelation": BookOpen,
  "migration": Plane,
  "companion-story": Users,
  "social-reform": Home,
  "spiritual": Sparkles,
  "political": Landmark,
  "battle": Swords,
  "treaty": Handshake,
};

function getEventIcon(event: SeerahEvent): LucideIcon {
  if (eventIconMap[event.id]) {
    return eventIconMap[event.id];
  }
  if (categoryIconMap[event.category]) {
    return categoryIconMap[event.category];
  }
  return Star;
}

interface EventNodeProps {
  event: SeerahEvent;
  positionPx: number;
  periodColor: string;
  onClick: () => void;
}

export default function EventNode({ event, positionPx, periodColor, onClick }: EventNodeProps) {
  const isSpecialEvent = event.id === "birth" || event.id === "death";
  const IconComponent = getEventIcon(event);

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
            className={`${isSpecialEvent ? 'w-8 h-8' : 'w-7 h-7'} rounded-full border-[3px] border-background shadow-md transition-all duration-200 group-hover:scale-125 group-hover:shadow-lg cursor-pointer flex items-center justify-center`}
            style={{ backgroundColor: periodColor }}
          >
            <IconComponent className={`${isSpecialEvent ? 'w-4 h-4' : 'w-3.5 h-3.5'} text-white`} />
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
