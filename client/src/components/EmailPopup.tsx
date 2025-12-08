import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import EmailCaptureForm from "./EmailCaptureForm";

interface EmailPopupProps {
  triggerElementId: string;
  delayMs?: number;
}

const POPUP_DISMISSED_KEY = "email_popup_dismissed";
const POPUP_COOLDOWN_HOURS = 24;

export default function EmailPopup({ triggerElementId, delayMs = 60000 }: EmailPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const dismissedTime = localStorage.getItem(POPUP_DISMISSED_KEY);
    if (dismissedTime) {
      const hoursSinceDismissed = (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60);
      if (hoursSinceDismissed < POPUP_COOLDOWN_HOURS) {
        setHasTriggered(true);
        return;
      }
    }

    const triggerPopup = () => {
      if (hasTriggered) return;
      setIsOpen(true);
      setHasTriggered(true);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

    timerRef.current = setTimeout(triggerPopup, delayMs);

    const handleScroll = () => {
      if (hasTriggered) return;

      const triggerElement = document.getElementById(triggerElementId);
      if (!triggerElement) return;

      const rect = triggerElement.getBoundingClientRect();
      const isFullyScrolledPast = rect.bottom < 0;

      if (isFullyScrolledPast) {
        triggerPopup();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [triggerElementId, delayMs, hasTriggered]);

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
