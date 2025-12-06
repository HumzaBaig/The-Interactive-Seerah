import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Swords, 
  Navigation, 
  Users, 
  Sparkles,
  Landmark,
  X,
  Filter
} from "lucide-react";
import { useState } from "react";

interface MobileFiltersProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  selectedPeriod: string | null;
  onPeriodChange: (period: string | null) => void;
}

const categories = [
  { id: "revelation", label: "Revelations", icon: BookOpen },
  { id: "battle", label: "Battles", icon: Swords },
  { id: "migration", label: "Migrations", icon: Navigation },
  { id: "civic", label: "Society", icon: Landmark },
  { id: "people", label: "People", icon: Users },
  { id: "spiritual", label: "Spiritual", icon: Sparkles },
];

const periods = [
  { id: "makkan", label: "Makkan" },
  { id: "madinan", label: "Madinan" },
];

export default function MobileFilters({ 
  selectedCategory, 
  onCategoryChange,
  selectedPeriod,
  onPeriodChange 
}: MobileFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const hasActiveFilters = selectedCategory || selectedPeriod;
  const activeCount = (selectedCategory ? 1 : 0) + (selectedPeriod ? 1 : 0);

  return (
    <div className="md:hidden bg-card/95 backdrop-blur border-b px-4 py-3">
      <div className="flex items-center gap-2 mb-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2"
          data-testid="button-toggle-mobile-filters"
        >
          <Filter className="w-4 h-4" />
          Filters
          {activeCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
              {activeCount}
            </Badge>
          )}
        </Button>
        
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => {
              onCategoryChange(null);
              onPeriodChange(null);
            }}
            data-testid="button-clear-mobile-filters"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>
      
      {showFilters && (
        <div className="space-y-3 pt-2">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Period</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {periods.map(period => (
                <Button
                  key={period.id}
                  variant={selectedPeriod === period.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPeriodChange(selectedPeriod === period.id ? null : period.id)}
                  className="flex-shrink-0"
                  data-testid={`mobile-filter-period-${period.id}`}
                >
                  {period.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Category</p>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map(category => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                
                return (
                  <Button
                    key={category.id}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => onCategoryChange(isSelected ? null : category.id)}
                    className="flex-shrink-0 gap-1.5"
                    data-testid={`mobile-filter-category-${category.id}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
