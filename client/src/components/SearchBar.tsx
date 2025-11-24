import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SeerahEvent } from "@shared/schema";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SearchBarProps {
  events: SeerahEvent[];
  onEventSelect: (event: SeerahEvent) => void;
}

export default function SearchBar({ events, onEventSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
  };

  return (
    <Popover open={isOpen && filteredEvents.length > 0} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search events, battles, revelations..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
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
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <div className="max-h-80 overflow-y-auto">
          {filteredEvents.map(event => (
            <button
              key={event.id}
              onClick={() => handleSelect(event)}
              className="w-full text-left px-4 py-3 hover-elevate border-b last:border-b-0"
              data-testid={`search-result-${event.id}`}
            >
              <div className="font-medium text-sm">{event.title}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {event.location} • {event.date}
              </div>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
