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
  { id: "timeline-section", label: "Timeline" },
  { id: "graphics-section", label: "Notable Events" },
  { id: "character-section", label: "The Noble Character" },
  { id: "wives-section", label: "The Mothers of the Believers" },
  { id: "children-section", label: "The Children of the Prophet ﷺ" },
  { id: "promised-section", label: "The Ten Promised Paradise" },
  { id: "family-section", label: "The Close Family" },
  { id: "companions-section", label: "Notable Companions" },
  { id: "about-section", label: "About This Project" },
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
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
