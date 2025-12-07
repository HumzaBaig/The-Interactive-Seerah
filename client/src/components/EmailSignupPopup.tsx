import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface EmailSignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailSignupPopup({ isOpen, onClose }: EmailSignupPopupProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/subscribe", { email });
      return response.json();
    },
    onSuccess: () => {
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about new features and content.",
      });
      setTimeout(() => {
        onClose();
      }, 2000);
    },
    onError: (error: Error) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email.trim());
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-amber-500" />
            </div>
          </div>
          <DialogTitle className="text-xl font-bold text-center">Stay Updated</DialogTitle>
          <DialogDescription className="text-center">
            Subscribe to receive updates as new content and features are added.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 py-4">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">You're subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-popup-email"
              />
              <div className="flex flex-col gap-2">
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={subscribeMutation.isPending}
                  data-testid="button-popup-subscribe"
                >
                  {subscribeMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="w-full"
                  onClick={onClose}
                  data-testid="button-popup-dismiss"
                >
                  Maybe Later
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
