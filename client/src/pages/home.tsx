import { useState, useRef } from "react";
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
import { seerahEvents, timelinePeriods } from "@/data/seerah-events";
import { SeerahEvent } from "@shared/schema";

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
          
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Explore the Seerah
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Use the interactive timeline above to explore major events in the life of Prophet Muhammad ﷺ. 
                  Click on any event node to view detailed information. Filter by time period or event category 
                  using the sidebar, or search for events, companions, family members, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EventGraphicsSection />

      <CharacterFlashCards />

      <WivesFlashCards />

      <ChildrenFlashCards />

      <TenPromisedFlashCards />

      <FamilyFlashCards />

      <CompanionsFlashCards />

      <Footer />
    </div>
  );
}
