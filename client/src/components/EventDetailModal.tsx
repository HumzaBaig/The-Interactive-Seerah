import { SeerahEvent } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Mountain } from "lucide-react";

interface EventDetailModalProps {
  event: SeerahEvent | null;
  onClose: () => void;
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

function EventVisualHeader() {
  return (
    <div className="h-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden flex items-center justify-center -mx-6 -mt-6 mb-6">
      <Mountain className="w-16 h-16 text-slate-300" />
    </div>
  );
}

export default function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  if (!event) return null;

  return (
    <Dialog open={!!event} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto p-0" data-testid="modal-event-detail">
        <EventVisualHeader />
        <DialogHeader className="px-6 pt-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl font-semibold mb-2">
                {event.title}
              </DialogTitle>
            </div>
            <Badge className={categoryColors[event.category]}>
              {categoryLabels[event.category]}
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </DialogHeader>

        <Separator className="mx-6" />

        <DialogDescription asChild>
          <div className="px-6 pb-6 text-base md:text-lg leading-loose text-foreground font-serif">
            {event.description}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
