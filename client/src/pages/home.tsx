import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import TimelineViewer from "@/components/TimelineViewer";
import FilterSidebar from "@/components/FilterSidebar";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { seerahEvents, timelinePeriods } from "@/data/seerah-events";
import { SeerahEvent } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              data-testid="button-toggle-sidebar"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <h1 className="text-xl md:text-2xl font-bold font-display">The Interactive Seerah</h1>
          </div>
          
          <SearchBar 
            events={seerahEvents}
            onEventSelect={handleEventSelect}
          />
          
          <ThemeToggle />
        </div>
      </header>

      <HeroSection />

      <div className="flex flex-1" ref={timelineRef}>
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block fixed md:relative inset-0 z-40 bg-background/80 md:bg-transparent backdrop-blur md:backdrop-blur-none`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsSidebarOpen(false);
          }}
        >
          <div className="h-full md:h-auto">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedPeriod={selectedPeriod}
              onPeriodChange={setSelectedPeriod}
            />
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
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
                  Explore the Timeline
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Use the interactive timeline above to explore major events in the life of Prophet Muhammad ﷺ. 
                  Click on any event node to view detailed information. Filter by time period or event category 
                  using the sidebar, or search for specific events.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
