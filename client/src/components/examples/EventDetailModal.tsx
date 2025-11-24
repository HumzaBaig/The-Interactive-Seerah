import { useState } from 'react';
import EventDetailModal from '../EventDetailModal';
import { Button } from '@/components/ui/button';
import { seerahEvents } from '@/data/seerah-events';

export default function EventDetailModalExample() {
  const [selectedEvent, setSelectedEvent] = useState(seerahEvents[2]);

  return (
    <div className="p-8">
      <Button onClick={() => setSelectedEvent(seerahEvents[2])} data-testid="button-open-modal">
        View First Revelation Event
      </Button>
      <EventDetailModal 
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
