import { useState } from 'react';
import FilterSidebar from '../FilterSidebar';

export default function FilterSidebarExample() {
  const [category, setCategory] = useState<string | null>(null);
  const [period, setPeriod] = useState<string | null>(null);

  return (
    <div className="h-screen">
      <FilterSidebar
        selectedCategory={category}
        onCategoryChange={(cat) => {
          setCategory(cat);
          console.log('Category changed to:', cat);
        }}
        selectedPeriod={period}
        onPeriodChange={(per) => {
          setPeriod(per);
          console.log('Period changed to:', per);
        }}
      />
    </div>
  );
}
