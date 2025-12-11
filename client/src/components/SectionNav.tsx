import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sections = [
  { id: "timeline-section", label: "Timeline", hasSaw: false },
  { id: "graphics-section", label: "Notable Events", hasSaw: false },
  { id: "character-section", label: "The Noble Character", hasSaw: false },
  { id: "wives-section", label: "The Mothers of the Believers", hasSaw: false },
  { id: "children-section", label: "The Children of the Prophet", hasSaw: true },
  { id: "promised-section", label: "The Ten Promised Paradise", hasSaw: false },
  { id: "family-section", label: "The Close Family", hasSaw: false },
  { id: "companions-section", label: "Notable Companions", hasSaw: false },
  { id: "about-section", label: "About This Project", hasSaw: false },
];

export default function SectionNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 350);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          data-testid="button-menu-toggle"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left">Navigate</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-6" data-testid="section-nav">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex items-center px-3 py-2.5 text-sm font-medium text-foreground/80 rounded-md hover-elevate active-elevate-2 text-left"
              data-testid={`nav-${section.id}`}
            >
              {section.label}
              {section.hasSaw && (
                <span 
                  className="ml-1 text-amber-600 dark:text-amber-400"
                  style={{ textShadow: '0 0 8px rgba(217, 119, 6, 0.4), 0 0 12px rgba(217, 119, 6, 0.2)' }}
                >
                  ﷺ
                </span>
              )}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
