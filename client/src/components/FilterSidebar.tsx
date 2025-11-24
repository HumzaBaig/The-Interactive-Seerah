import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Swords, 
  ScrollText, 
  Navigation, 
  Scale, 
  Users, 
  Sparkles,
  X
} from "lucide-react";

interface FilterSidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  selectedPeriod: string | null;
  onPeriodChange: (period: string | null) => void;
}

const categories = [
  { id: "revelation", label: "Revelations", icon: BookOpen, color: "bg-blue-500/10 text-blue-700 dark:text-blue-300" },
  { id: "battle", label: "Battles", icon: Swords, color: "bg-red-500/10 text-red-700 dark:text-red-300" },
  { id: "treaty", label: "Treaties", icon: ScrollText, color: "bg-purple-500/10 text-purple-700 dark:text-purple-300" },
  { id: "migration", label: "Migrations", icon: Navigation, color: "bg-green-500/10 text-green-700 dark:text-green-300" },
  { id: "social-reform", label: "Social Reforms", icon: Scale, color: "bg-amber-500/10 text-amber-700 dark:text-amber-300" },
  { id: "companion-story", label: "Companions", icon: Users, color: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300" },
  { id: "spiritual", label: "Spiritual Events", icon: Sparkles, color: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300" },
];

const periods = [
  { id: "pre-prophethood", label: "Pre-Prophethood", labelArabic: "قبل النبوة" },
  { id: "makkah", label: "Makkah Period", labelArabic: "الفترة المكية" },
  { id: "madinah", label: "Madinah Period", labelArabic: "الفترة المدنية" },
];

export default function FilterSidebar({ 
  selectedCategory, 
  onCategoryChange,
  selectedPeriod,
  onPeriodChange 
}: FilterSidebarProps) {
  const hasActiveFilters = selectedCategory || selectedPeriod;

  return (
    <div className="w-full md:w-72 bg-card border-r p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => {
              onCategoryChange(null);
              onPeriodChange(null);
            }}
            data-testid="button-clear-filters"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <Separator />

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Time Period
        </h4>
        <div className="space-y-2">
          {periods.map(period => (
            <button
              key={period.id}
              onClick={() => onPeriodChange(selectedPeriod === period.id ? null : period.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors hover-elevate ${
                selectedPeriod === period.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/50'
              }`}
              data-testid={`filter-period-${period.id}`}
            >
              <div className="font-medium">{period.label}</div>
              <div className="text-sm font-serif opacity-70">{period.labelArabic}</div>
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Event Category
        </h4>
        <div className="space-y-2">
          {categories.map(category => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(isSelected ? null : category.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover-elevate ${
                  isSelected 
                    ? category.color + ' font-medium'
                    : 'bg-secondary/50'
                }`}
                data-testid={`filter-category-${category.id}`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
