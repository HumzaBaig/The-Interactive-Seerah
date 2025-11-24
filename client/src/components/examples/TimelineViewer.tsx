import TimelineViewer from '../TimelineViewer';
import { seerahEvents, timelinePeriods } from '@/data/seerah-events';

export default function TimelineViewerExample() {
  return (
    <TimelineViewer 
      events={seerahEvents}
      periods={timelinePeriods}
    />
  );
}
