import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { eventGraphicsData } from "@/data/event-graphics-data";
import { 
  ArrowRight, 
  Sparkles, 
  Navigation, 
  Swords, 
  Trophy, 
  Mountain, 
  Shield, 
  Castle, 
  Flag, 
  Crown, 
  Compass,
  Target
} from "lucide-react";

function EventVisual({ icon: Icon }: { icon: typeof Sparkles }) {
  return (
    <div className="h-40 bg-[hsl(var(--event-card))] relative overflow-hidden flex items-center justify-center">
      <Icon className="w-16 h-16 text-[hsl(var(--event-accent))]" />
    </div>
  );
}

function getEventVisual(eventId: string) {
  const iconMap: Record<string, typeof Sparkles> = {
    "isra-miraj": Sparkles,
    "hijrah": Navigation,
    "battle-of-badr": Trophy,
    "battle-of-uhud": Mountain,
    "battle-of-trench": Shield,
    "battle-of-khaybar": Castle,
    "battle-of-mutah": Target,
    "conquest-of-makkah": Crown,
    "battle-of-hunayn": Swords,
    "expedition-of-tabuk": Compass,
    "farewell-pilgrimage": Flag,
  };
  
  const Icon = iconMap[eventId] || Sparkles;
  return <EventVisual icon={Icon} />;
}

export default function EventGraphicsSection() {
  return (
    <section id="graphics-section" className="py-16 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Notable Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
              Explore interactive visual journeys through major events in the Prophet's life.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {eventGraphicsData.map((event) => (
              <div key={event.id} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                <Link 
                  href={event.available ? event.route : "#"}
                  className={event.available ? "cursor-pointer" : "cursor-not-allowed"}
                >
                  <Card 
                    className={`w-full overflow-hidden transition-all duration-300 ${
                      event.available 
                        ? "hover:shadow-xl hover:scale-[1.02] hover:border-[hsl(var(--event-accent))]/50" 
                        : "opacity-50"
                    }`}
                    data-testid={`card-event-${event.id}`}
                  >
                    {getEventVisual(event.id)}
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-base mb-1 truncate">{event.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                        </div>
                        {event.available && (
                          <ArrowRight className="w-5 h-5 text-[hsl(var(--event-accent))] flex-shrink-0" />
                        )}
                      </div>
                      {!event.available && (
                        <span className="text-xs text-muted-foreground mt-2 block">Coming soon</span>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
