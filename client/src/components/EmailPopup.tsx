import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import EmailCaptureForm from "./EmailCaptureForm";

interface EmailPopupProps {
  triggerElementId: string;
}

const POPUP_DISMISSED_KEY = "email_popup_dismissed";
const POPUP_COOLDOWN_HOURS = 24;

export default function EmailPopup({ triggerElementId }: EmailPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const dismissedTime = localStorage.getItem(POPUP_DISMISSED_KEY);
    if (dismissedTime) {
      const hoursSinceDismissed = (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60);
      if (hoursSinceDismissed < POPUP_COOLDOWN_HOURS) {
        setHasTriggered(true);
        return;
      }
    }

    const handleScroll = () => {
      if (hasTriggered) return;

      const triggerElement = document.getElementById(triggerElementId);
      if (!triggerElement) return;

      const rect = triggerElement.getBoundingClientRect();
      const isFullyScrolledPast = rect.bottom < 0;

      if (isFullyScrolledPast) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerElementId, hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(POPUP_DISMISSED_KEY, Date.now().toString());
  };

  const handleSuccess = () => {
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem(POPUP_DISMISSED_KEY, Date.now().toString());
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md" data-testid="modal-email-popup">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={handleClose}
          data-testid="button-close-popup"
        >
          <X className="w-4 h-4" />
        </Button>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            Stay Connected
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Subscribe to receive updates on new content and features for The Interactive Seerah.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <EmailCaptureForm onSuccess={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
