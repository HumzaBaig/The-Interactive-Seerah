import EventNode from '../EventNode';
import { seerahEvents } from '@/data/seerah-events';

export default function EventNodeExample() {
  return (
    <div className="relative h-32 bg-card border rounded-md p-4">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-border" />
      <EventNode 
        event={seerahEvents[2]}
        position={50}
        onClick={() => console.log('Event clicked')}
      />
    </div>
  );
}
