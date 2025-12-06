import { 
  Clock, 
  Image, 
  Heart, 
  Users, 
  Baby, 
  Star, 
  Home as HomeIcon,
  Sparkles
} from "lucide-react";

interface SectionNavProps {
  className?: string;
}

const sections = [
  { id: "timeline-section", label: "Timeline", icon: Clock },
  { id: "graphics-section", label: "Events", icon: Image },
  { id: "character-section", label: "Character", icon: Sparkles },
  { id: "wives-section", label: "Wives", icon: Heart },
  { id: "children-section", label: "Children", icon: Baby },
  { id: "promised-section", label: "Ten Promised", icon: Star },
  { id: "family-section", label: "Family", icon: HomeIcon },
  { id: "companions-section", label: "Companions", icon: Users },
];

export default function SectionNav({ className }: SectionNavProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`md:hidden bg-card/95 backdrop-blur border-b ${className || ''}`}>
      <nav 
        className="flex overflow-x-auto scrollbar-hide gap-1 px-4 py-2"
        data-testid="section-nav"
      >
        {sections.map(section => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground whitespace-nowrap rounded-md hover-elevate active-elevate-2"
              data-testid={`nav-${section.id}`}
            >
              <Icon className="w-4 h-4" />
              {section.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
