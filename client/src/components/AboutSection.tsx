import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
              <div className="space-y-4 text-center">
                <p className="text-muted-foreground leading-relaxed">The Interactive Seerah is designed to help people become familiar with the life of Prophet Muhammad ﷺ and his companions in an engaging and accessible way. This website serves as an introductory resource to spark interest and provide a foundational understanding of the Seerah.</p>
                <p className="text-muted-foreground leading-relaxed">
                  Please note that this platform is not intended to replace comprehensive academic study, scholarly books, or traditional lectures. For a deeper understanding, we encourage you to explore detailed works and attend classes with qualified teachers.
                </p>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <BookOpen className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Sources:</span> <span className="italic">The Sealed Nectar (Ar-Raheeq Al-Makhtum)</span> by Sheikh Safi-ur-Rahman al-Mubarakpuri
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
