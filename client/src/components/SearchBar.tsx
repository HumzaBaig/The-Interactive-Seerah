import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SeerahEvent } from "@shared/schema";

interface SearchBarProps {
  events: SeerahEvent[];
  onEventSelect: (event: SeerahEvent) => void;
}

export default function SearchBar({ events, onEventSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredEvents = query.trim() 
    ? events.filter(event => 
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.description.toLowerCase().includes(query.toLowerCase()) ||
        event.location.toLowerCase().includes(query.toLowerCase()) ||
        event.titleArabic?.includes(query)
      ).slice(0, 8)
    : [];

  const handleSelect = (event: SeerahEvent) => {
    onEventSelect(event);
    setQuery("");
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const showResults = isOpen && filteredEvents.length > 0;

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search events, battles, revelations..."
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
          className="pl-10 pr-10"
          data-testid="input-search"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={handleClear}
            data-testid="button-clear-search"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      {showResults && (
        <div 
          data-search-results
          className="absolute top-full left-0 right-0 mt-1 bg-popover border rounded-md shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          {filteredEvents.map(event => (
            <button
              key={event.id}
              onClick={() => handleSelect(event)}
              className="w-full text-left px-4 py-3 hover:bg-accent border-b last:border-b-0"
              data-testid={`search-result-${event.id}`}
            >
              <div className="font-medium text-sm">{event.title}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {event.location} • {event.date}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
