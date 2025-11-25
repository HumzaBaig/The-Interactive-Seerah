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
import { MapPin, Calendar, BookOpen } from "lucide-react";

interface EventDetailModalProps {
  event: SeerahEvent | null;
  onClose: () => void;
}

const categoryLabels = {
  revelation: "Revelation",
  battle: "Battle",
  treaty: "Treaty",
  migration: "Migration",
  "social-reform": "Social Reform",
  "companion-story": "Companion Story",
  spiritual: "Spiritual Event",
  family: "Family"
};

const categoryColors = {
  revelation: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  battle: "bg-red-500/10 text-red-700 dark:text-red-300",
  treaty: "bg-purple-500/10 text-purple-700 dark:text-purple-300",
  migration: "bg-green-500/10 text-green-700 dark:text-green-300",
  "social-reform": "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  "companion-story": "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  spiritual: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  family: "bg-pink-500/10 text-pink-700 dark:text-pink-300"
};

export default function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  if (!event) return null;

  return (
    <Dialog open={!!event} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto" data-testid="modal-event-detail">
        <DialogHeader>
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

        <Separator className="my-4" />

        <DialogDescription asChild>
          <div className="space-y-6">
            <div className="text-base md:text-lg leading-loose text-foreground font-serif">
              {event.description}
            </div>

            {event.sealedNectarReference && (
              <div className="bg-accent/20 border border-accent rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-accent-foreground mb-1">
                      Reference from The Sealed Nectar
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {event.sealedNectarReference}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
