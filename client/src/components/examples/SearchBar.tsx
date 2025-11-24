import SearchBar from '../SearchBar';
import { seerahEvents } from '@/data/seerah-events';

export default function SearchBarExample() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <SearchBar 
        events={seerahEvents}
        onEventSelect={(event) => console.log('Selected event:', event)}
      />
    </div>
  );
}
