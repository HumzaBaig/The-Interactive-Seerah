import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, MapPin } from "lucide-react";

interface HeroSectionProps {
  onNavigateToPeriod: (period: string) => void;
}

export default function HeroSection({ onNavigateToPeriod }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background to-accent/10 border-b">
      <div className="container mx-auto px-6 py-12 relative z-10 text-center max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display">
            Seerah Timeline
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif text-muted-foreground">
            السيرة النبوية
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An Interactive Journey Through the Life of Prophet Muhammad ﷺ
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Based on <span className="font-semibold">The Sealed Nectar</span> (Ar-Raheeq Al-Makhtum)
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => onNavigateToPeriod("pre-prophethood")}
            data-testid="button-period-pre-prophethood"
            className="gap-2"
          >
            <Calendar className="w-5 h-5" />
            Pre-Prophethood
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => onNavigateToPeriod("makkah")}
            data-testid="button-period-makkah"
            className="gap-2"
          >
            <MapPin className="w-5 h-5" />
            Makkah Period
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => onNavigateToPeriod("madinah")}
            data-testid="button-period-madinah"
            className="gap-2"
          >
            <BookOpen className="w-5 h-5" />
            Madinah Period
          </Button>
        </div>
      </div>
    </section>
  );
}
