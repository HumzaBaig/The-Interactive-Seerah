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
  const [headerVisible, setHeaderVisible] = useState(false);
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

  // Mobile header delay animation
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const timer = setTimeout(() => {
        setHeaderVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHeaderVisible(true);
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
      <header 
        className={`sticky top-0 z-50 bg-card border-b transition-transform duration-500 ease-out ${
          headerVisible ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
        }`}
      >
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
              <div className="text-center space-y-4 relative">
                {/* Sandal image with radial glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Radial glow behind sandal */}
                  <div 
                    className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(217, 119, 6, 0.08) 40%, transparent 70%)',
                      filter: 'blur(20px)'
                    }}
                  />
                  <img 
                    src="/attached_assets/image_1765501494569.png" 
                    alt="Prophet's Sandal"
                    className="w-32 h-32 md:w-44 md:h-44 object-contain opacity-20"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold font-display relative z-10" style={{ letterSpacing: '0.02em' }}>
                  Explore the Seerah
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed relative z-10">Use the interactive timeline below to explore major events in the life of Prophet Muhammad <span className="text-amber-600 dark:text-amber-400" style={{ textShadow: '0 0 6px rgba(217, 119, 6, 0.3)' }}>ﷺ</span>. Click any event node for details, or filter by time period and event category.</p>
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
