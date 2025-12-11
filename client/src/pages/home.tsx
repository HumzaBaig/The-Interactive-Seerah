import { useState, useRef, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import TimelineViewer from "@/components/TimelineViewer";
import FilterSidebar from "@/components/FilterSidebar";
import MobileFilters from "@/components/MobileFilters";
import SectionNav from "@/components/SectionNav";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import EventGraphicsSection from "@/components/EventGraphicsSection";
import WivesFlashCards from "@/components/WivesFlashCards";
import ChildrenFlashCards from "@/components/ChildrenFlashCards";
import FamilyFlashCards from "@/components/FamilyFlashCards";
import CompanionsFlashCards from "@/components/CompanionsFlashCards";
import TenPromisedFlashCards from "@/components/TenPromisedFlashCards";
import CharacterFlashCards from "@/components/CharacterFlashCards";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import EmailPopup from "@/components/EmailPopup";
import { seerahEvents, timelinePeriods } from "@/data/seerah-events";
import { SeerahEvent } from "@shared/schema";

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleEventSelect = (event: SeerahEvent) => {
    setSelectedPeriod(event.period);
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToPeriod = (period: string) => {
    setSelectedPeriod(period);
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-3">
          <SectionNav />
          
          <h1 className="text-lg md:text-xl font-semibold font-display whitespace-nowrap" style={{ letterSpacing: '0.02em' }}>
            The Interactive Seerah
          </h1>
          
          <div className="flex-1 flex justify-end">
            <SearchBar 
              events={seerahEvents}
              onEventSelect={handleEventSelect}
            />
          </div>
          
          <ThemeToggle />
        </div>
      </header>
      <HeroSection />
      <div id="timeline-section" className="flex flex-1" ref={timelineRef}>
        <div className="hidden md:block">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-semibold" style={{ letterSpacing: '0.02em' }}>
                    Explore the Seerah
                  </h2>
                  {/* Gold light streak underline */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div 
                        className="absolute inset-0 -inset-y-1"
                        style={{
                          background: 'linear-gradient(90deg, transparent 10%, #fbbf24 35%, #fbbf24 65%, transparent 90%)',
                          filter: 'blur(8px)',
                          opacity: 0.25
                        }}
                      />
                      <div 
                        className="relative w-32 h-[4px] rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, #d97706 20%, #f59e0b 35%, #fbbf24 50%, #f59e0b 65%, #d97706 80%, transparent 100%)',
                          maskImage: 'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">Use the interactive timeline below to explore major events in the life of Prophet Muhammad <span className="text-amber-600 dark:text-amber-400" style={{ textShadow: '0 0 6px rgba(217, 119, 6, 0.3)' }}>ﷺ</span>. Click any event node for details, or filter by time period and event category.</p>
              </div>
            </div>
          </div>
          
          <MobileFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />
          <TimelineViewer
            events={seerahEvents}
            periods={timelinePeriods}
            selectedPeriod={selectedPeriod || undefined}
            selectedCategory={selectedCategory || undefined}
          />
        </div>
      </div>
      <EventGraphicsSection />
      <CharacterFlashCards />
      <WivesFlashCards />
      <ChildrenFlashCards />
      <TenPromisedFlashCards />
      <FamilyFlashCards />
      <CompanionsFlashCards />
      <AboutSection />
      <Footer />
      <EmailPopup triggerElementId="character-section" delayMs={60000} />
    </div>
  );
}
