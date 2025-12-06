import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function EmailSignup() {
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
    <section className="py-12 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Subscribe to receive updates when new content and features are added to the website.
                </p>
                
                {isSubscribed ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 py-2">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">You're subscribed!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                      data-testid="input-email-signup"
                    />
                    <Button 
                      type="submit" 
                      disabled={subscribeMutation.isPending}
                      data-testid="button-subscribe"
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
                  </form>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
