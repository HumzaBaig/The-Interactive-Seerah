import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { BookOpen, Mail, CheckCircle, Loader2, Video, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function AboutSection() {
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
    <section id="about-section" className="py-12 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">About This Project</h2>
          </div>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6 text-center">
                <p className="text-muted-foreground leading-relaxed">The Interactive Seerah is designed to help people become familiar with the life of Prophet Muhammad ﷺ and his companions in an engaging and accessible way. This website serves as an introductory resource to spark interest and provide a foundational understanding of the Seerah.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Please note that this platform is not intended to replace comprehensive academic study, scholarly books, or traditional lectures. For a deeper understanding, we encourage you to explore detailed works and attend classes with qualified teachers.
                </p>
                <div className="pt-2 space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="font-medium text-foreground text-sm">Sources</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><span className="italic">The Sealed Nectar (Ar-Raheeq Al-Makhtum)</span> by Sheikh Safi-ur-Rahman al-Mubarakpuri</p>
                    <p className="text-xs text-muted-foreground/80">
                      Ṣaḥīḥ al-Bukhārī · Ṣaḥīḥ Muslim · Jāmiʿ at-Tirmidhī · Sunan Abī Dāwūd · Sunan Ibn Mājah · Musnad Aḥmad · Shamāʾil at-Tirmidhī
                    </p>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Video className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="font-medium text-foreground text-sm">Additional Learning</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a 
                      href="https://www.youtube.com/playlist?list=PLAEA99D24CA2F9A8F" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400 hover:underline"
                      data-testid="link-seerah-series"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Seerah of the Prophet
                    </a>
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to receive updates as new content and features are added.
                  </p>
                  
                  {isSubscribed ? (
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 py-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">You're subscribed!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
