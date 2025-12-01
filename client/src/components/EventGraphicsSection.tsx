import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { eventGraphicsData } from "@/data/event-graphics-data";
import { ArrowRight, Star } from "lucide-react";

export default function EventGraphicsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Notable Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <div className="h-40 bg-gradient-to-br from-indigo-900 via-purple-900 to-amber-900 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="flex justify-center gap-1 mb-2">
                          {[...Array(7)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-2 h-2 rounded-full bg-amber-300/80 animate-pulse"
                              style={{ animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </div>
                        <Star className="w-12 h-12 text-amber-300 mx-auto animate-pulse" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
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
