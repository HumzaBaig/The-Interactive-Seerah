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

function IsraMirajVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Sparkles className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function HijrahVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Navigation className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function BadrVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Trophy className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function UhudVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Mountain className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function TrenchVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Shield className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function KhaybarVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Castle className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function MutahVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Target className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function MakkahConquestVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Crown className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function HunaynVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Swords className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function TabukVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Compass className="w-16 h-16 text-slate-600 dark:text-slate-300" />
    </div>
  );
}

function FarewellVisual() {
  return (
    <div className="h-40 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 relative overflow-hidden flex items-center justify-center">
      <Flag className="w-16 h-16 text-slate-600 dark:text-slate-300" />
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
      return <BadrVisual />;
    case "battle-of-uhud":
      return <UhudVisual />;
    case "battle-of-trench":
      return <TrenchVisual />;
    case "battle-of-khaybar":
      return <KhaybarVisual />;
    case "battle-of-mutah":
      return <MutahVisual />;
    case "conquest-of-makkah":
      return <MakkahConquestVisual />;
    case "battle-of-hunayn":
      return <HunaynVisual />;
    case "expedition-of-tabuk":
      return <TabukVisual />;
    case "farewell-pilgrimage":
      return <FarewellVisual />;
    default:
      return <IsraMirajVisual />;
  }
}

export default function EventGraphicsSection() {
  return (
    <section id="graphics-section" className="py-16 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold font-display" style={{ letterSpacing: '0.02em' }}>Notable Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
              Explore interactive visual journeys through major events in the Prophet's <span className="text-amber-600 dark:text-amber-400" style={{ textShadow: '0 0 6px rgba(217, 119, 6, 0.3)' }}>&#xFDFA;</span> life.
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
                        ? "hover:shadow-xl hover:scale-[1.02] hover:border-amber-500/50" 
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
                          <ArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0" />
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
