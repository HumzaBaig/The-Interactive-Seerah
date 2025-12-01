import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SeerahEvent } from "@shared/schema";
import { wivesData } from "@/data/wives-data";
import { childrenData } from "@/data/children-data";
import { familyData } from "@/data/family-data";
import { tenPromisedData } from "@/data/ten-promised-data";
import { companionsData } from "@/data/companions-data";
import { characterData } from "@/data/character-data";

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: "event" | "wife" | "child" | "family" | "promised" | "companion" | "character";
}

interface SearchBarProps {
  events: SeerahEvent[];
  onEventSelect: (event: SeerahEvent) => void;
}

function getAllSearchableItems(events: SeerahEvent[]): SearchResult[] {
  const results: SearchResult[] = [];

  events.forEach(event => {
    results.push({
      id: `event-${event.id}`,
      title: event.title,
      subtitle: `${event.location} • ${event.date}`,
      category: "Timeline Event",
      type: "event"
    });
  });

  wivesData.forEach(wife => {
    results.push({
      id: `wife-${wife.id}`,
      title: wife.name,
      subtitle: wife.title,
      category: "Mother of the Believers",
      type: "wife"
    });
  });

  childrenData.forEach(child => {
    results.push({
      id: `child-${child.id}`,
      title: child.name,
      subtitle: `Mother: ${child.mother}`,
      category: "Children of the Prophet",
      type: "child"
    });
  });

  familyData.forEach(member => {
    results.push({
      id: `family-${member.id}`,
      title: member.name,
      subtitle: member.relation,
      category: "Close Family",
      type: "family"
    });
  });

  tenPromisedData.forEach(companion => {
    results.push({
      id: `promised-${companion.id}`,
      title: companion.name,
      subtitle: companion.title,
      category: "Ten Promised Paradise",
      type: "promised"
    });
  });

  companionsData.forEach(companion => {
    results.push({
      id: `companion-${companion.id}`,
      title: companion.name,
      subtitle: companion.title,
      category: "Notable Companion",
      type: "companion"
    });
  });

  characterData.forEach(trait => {
    results.push({
      id: `character-${trait.id}`,
      title: trait.trait,
      subtitle: `${trait.narrations.length} narrations`,
      category: "Character Trait",
      type: "character"
    });
  });

  return results;
}

export default function SearchBar({ events, onEventSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const allItems = getAllSearchableItems(events);

  const filteredResults = query.trim() 
    ? allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 10)
    : [];

  const handleSelect = (result: SearchResult) => {
    if (result.type === "event") {
      const eventId = result.id.replace("event-", "");
      const event = events.find(e => String(e.id) === eventId);
      if (event) {
        onEventSelect(event);
      }
    } else {
      const sectionMap: Record<string, string> = {
        wife: "mothers-section",
        child: "children-section",
        family: "family-section",
        promised: "promised-section",
        companion: "companions-section",
        character: "character-section"
      };
      const sectionId = sectionMap[result.type];
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setQuery("");
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const showResults = isOpen && filteredResults.length > 0;

  const getCategoryColor = (type: string) => {
    switch (type) {
      case "event": return "text-blue-600 dark:text-blue-400";
      case "wife": return "text-pink-600 dark:text-pink-400";
      case "child": return "text-violet-600 dark:text-violet-400";
      case "family": return "text-sky-600 dark:text-sky-400";
      case "promised": return "text-amber-600 dark:text-amber-400";
      case "companion": return "text-teal-600 dark:text-teal-400";
      case "character": return "text-emerald-600 dark:text-emerald-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="relative w-full max-w-xl flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search events, companions, family..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={(e) => {
            if (!e.relatedTarget?.closest('[data-search-results]')) {
              setTimeout(() => setIsOpen(false), 150);
            }
          }}
          className="pl-10 pr-3"
          data-testid="input-search"
        />
      </div>
      {query && (
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 shrink-0"
          onClick={handleClear}
          data-testid="button-clear-search"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
      {showResults && (
        <div 
          data-search-results
          className="absolute top-full left-0 right-0 mt-1 bg-popover border rounded-md shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          {filteredResults.map(result => (
            <button
              key={result.id}
              onClick={() => handleSelect(result)}
              className="w-full text-left px-4 py-3 hover:bg-accent border-b last:border-b-0"
              data-testid={`search-result-${result.id}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="font-medium text-sm">{result.title}</div>
                <div className={`text-xs ${getCategoryColor(result.type)}`}>{result.category}</div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {result.subtitle}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
