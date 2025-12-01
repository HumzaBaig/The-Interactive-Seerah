import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { eventGraphicsData } from "@/data/event-graphics-data";
import { ArrowRight, Sparkles, Navigation, Swords } from "lucide-react";

function IsraMirajVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 relative overflow-hidden flex items-center justify-center">
      <Sparkles className="w-16 h-16 text-indigo-300" />
    </div>
  );
}

function HijrahVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden flex items-center justify-center">
      <Navigation className="w-16 h-16 text-green-300" />
    </div>
  );
}

function BattleVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-red-900 via-red-800 to-red-700 relative overflow-hidden flex items-center justify-center">
      <Swords className="w-16 h-16 text-red-300" />
    </div>
  );
}

function SpiritualVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 relative overflow-hidden flex items-center justify-center">
      <Sparkles className="w-16 h-16 text-indigo-300" />
    </div>
  );
}

function getEventVisual(eventId: string) {
  switch (eventId) {
    case "isra-miraj":
      return <IsraMirajVisual />;
    case "hijrah":
      return <HijrahVisual />;
    case "battle-of-badr":
    case "battle-of-uhud":
    case "battle-of-trench":
    case "battle-of-khaybar":
    case "battle-of-mutah":
    case "conquest-of-makkah":
    case "battle-of-hunayn":
    case "expedition-of-tabuk":
      return <BattleVisual />;
    case "farewell-pilgrimage":
      return <SpiritualVisual />;
    default:
      return <IsraMirajVisual />;
  }
}

export default function EventGraphicsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Notable Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
              Explore interactive visual journeys through major events in the Prophet's ﷺ life.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {eventGraphicsData.map((event) => (
              <Link 
                key={event.id} 
                href={event.available ? event.route : "#"}
                className={event.available ? "cursor-pointer" : "cursor-not-allowed"}
              >
                <Card 
                  className={`w-full sm:w-80 overflow-hidden transition-all duration-300 ${
                    event.available 
                      ? "hover:shadow-xl hover:scale-[1.02] hover:border-amber-500/50" 
                      : "opacity-50"
                  }`}
                  data-testid={`card-event-${event.id}`}
                >
                  {getEventVisual(event.id)}
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      {event.available && (
                        <ArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      )}
                    </div>
                    {!event.available && (
                      <span className="text-xs text-muted-foreground mt-2 block">Coming soon</span>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
