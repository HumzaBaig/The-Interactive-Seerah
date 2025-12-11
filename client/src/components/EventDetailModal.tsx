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
import { MapPin, Calendar } from "lucide-react";
import { StyledText } from "@/components/StyledText";

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

export default function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  if (!event) return null;

  return (
    <Dialog open={!!event} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto" data-testid="modal-event-detail">
        <DialogHeader className="text-left">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl font-semibold mb-2 text-left">
                <StyledText>{event.title}</StyledText>
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
          <div className="text-base md:text-lg leading-loose text-foreground font-serif">
            <StyledText>{event.description}</StyledText>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
