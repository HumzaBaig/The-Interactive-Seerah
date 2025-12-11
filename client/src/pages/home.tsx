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
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-3">
          <SectionNav />
          
          <h1 className="text-lg md:text-xl font-bold font-display whitespace-nowrap">
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
          <div className="container mx-auto px-6 py-8">
            <div className="explore-card fade-up" data-testid="card-explore-seerah">
              <h2 className="explore-title font-display" data-testid="text-explore-title">
                Explore the Seerah
              </h2>
              <p className="explore-description" data-testid="text-explore-description">
                Use the interactive timeline below to explore major events in the life of Prophet Muhammad <span className="salawat-glow">ﷺ</span>. Click any event node for details, or filter by time period and event category.
              </p>
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
