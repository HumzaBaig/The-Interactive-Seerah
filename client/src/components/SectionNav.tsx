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
  { id: "graphics-section", label: "Events" },
  { id: "character-section", label: "Character" },
  { id: "wives-section", label: "Wives" },
  { id: "children-section", label: "Children" },
  { id: "promised-section", label: "Ten Promised" },
  { id: "family-section", label: "Family" },
  { id: "companions-section", label: "Companions" },
];

export default function SectionNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
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
    setIsOpen(false);
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
