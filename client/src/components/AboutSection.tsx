import { BookOpen, Video, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import EmailCaptureForm from "./EmailCaptureForm";

export default function AboutSection() {
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
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <a 
                      href="https://www.youtube.com/playlist?list=PLAEA99D24CA2F9A8F" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400 hover:underline"
                      data-testid="link-seerah-series-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Seerah of the Prophet
                    </a>
                    <a 
                      href="https://www.youtube.com/playlist?list=PLQ02IYL5pmhHFl7j6wPcFTZmlQvRhsejp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400 hover:underline"
                      data-testid="link-seerah-series-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Lives of the Sahaba
                    </a>
                    <a 
                      href="https://www.youtube.com/playlist?list=PLQ02IYL5pmhHvZ02LKQVeey8H-2XBKMGb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-amber-600 dark:text-amber-400 hover:underline"
                      data-testid="link-seerah-series-3"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Meeting Muhammad ﷺ
                    </a>
                  </div>
                </div>

                <Separator className="my-6" />

                <EmailCaptureForm variant="card" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
