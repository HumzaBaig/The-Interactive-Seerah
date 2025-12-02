import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Footprints, Droplets, Users, Swords, Flame, Trophy, ChevronUp } from "lucide-react";

interface KeyFigure {
  name: string;
  role: string;
  side: "muslim" | "quraysh";
}

const keyFigures: KeyFigure[] = [
  { name: "Prophet Muhammad ﷺ", role: "Commander of the Muslims", side: "muslim" },
  { name: "Hamza ibn Abdul-Muttalib", role: "Champion - slew Utbah", side: "muslim" },
  { name: "Ali ibn Abi Talib", role: "Champion - slew al-Walid", side: "muslim" },
  { name: "Ubayda ibn al-Harith", role: "Champion - engaged Shaybah", side: "muslim" },
  { name: "Abu Jahl", role: "Quraysh Leader - killed", side: "quraysh" },
  { name: "Utbah ibn Rabi'ah", role: "Champion - killed by Hamza", side: "quraysh" },
  { name: "Umayyah ibn Khalaf", role: "Leader - killed by Bilal", side: "quraysh" },
];

const battleStages = [
  {
    id: "march",
    title: "The March to Badr",
    location: "From Madinah",
    description: "The Muslim army of 313 men marched from Madinah towards Badr to intercept the Quraysh caravan. The Prophet ﷺ consulted with his companions, and the Ansar pledged their full support. Sa'd ibn Mu'adh declared: 'We believe in you and we bear witness that what you have brought is the truth.'",
    icon: Footprints
  },
  {
    id: "wells",
    title: "Securing the Wells",
    location: "Wells of Badr",
    description: "Following the advice of Al-Hubab ibn al-Mundhir, the Muslims positioned themselves near the wells of Badr, denying the Quraysh access to water. They built a cistern for their own use and blocked the other wells - a crucial strategic advantage that would prove decisive in the battle.",
    icon: Droplets
  },
  {
    id: "arrival",
    title: "Quraysh Army Arrives",
    location: "Valley of Badr",
    description: "The Quraysh army of approximately 1,000 warriors arrived at Badr. Despite being outnumbered more than 3 to 1, the Muslims held firm with their faith in Allah. The Prophet ﷺ spent the night in prayer, seeking Allah's help for the believers.",
    icon: Users
  },
  {
    id: "duels",
    title: "The Single Combat",
    location: "The Battlefield",
    description: "Three champions from each side met in single combat. Hamza, Ali, and Ubaydah faced Utbah, Shaybah, and al-Walid. Hamza killed Utbah, Ali killed al-Walid, and Ubaydah engaged Shaybah. The Muslim champions were victorious, boosting the morale of the believers.",
    icon: Swords
  },
  {
    id: "battle",
    title: "The Battle",
    location: "Divine Assistance",
    description: "The Prophet ﷺ threw a handful of pebbles towards the enemy saying 'Confusion seize their faces!' and the battle commenced. Allah sent angels to aid the believers, as mentioned in the Quran: 'You did not throw when you threw, but it was Allah who threw.' (8:17)",
    icon: Flame
  },
  {
    id: "victory",
    title: "The Victory",
    location: "Triumph of Truth",
    description: "The Muslims achieved a decisive victory. 70 Quraysh were killed including Abu Jahl, and 70 were captured. Only 14 Muslims were martyred. This victory, against all odds, established Islam's strength and proved that Allah's help comes to those who believe.",
    icon: Trophy
  }
];

export default function BattleOfBadr() {
  const [currentStage, setCurrentStage] = useState(0);
  const [showFigures, setShowFigures] = useState(false);
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null);

  const nextStage = () => {
    if (currentStage < battleStages.length - 1) {
      setCurrentStage(currentStage + 1);
      setShowFigures(false);
      setSelectedFigure(null);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      setShowFigures(false);
      setSelectedFigure(null);
    }
  };

  const stage = battleStages[currentStage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-orange-950 to-red-950 text-white overflow-hidden">

      <header className="relative z-10 p-6">
        <Link href="/">
          <Button 
            variant="ghost" 
            className="text-white/80 hover:text-white hover:bg-white/10"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </header>

      <main className="relative z-10 container mx-auto px-6 pb-12">
        <div className="text-center mb-8">
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent pb-2">
              Battle of Badr
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The first major battle between the Muslims and the Quraysh - A decisive victory that changed history
          </p>
          <p className="text-sm text-amber-300/80 mt-2">17th Ramadan, 2 AH</p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {battleStages.map((s, index) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentStage(index);
                setShowFigures(false);
                setSelectedFigure(null);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStage
                  ? "bg-amber-400 scale-125"
                  : index < currentStage
                  ? "bg-amber-400/50"
                  : "bg-white/30"
              }`}
              data-testid={`button-stage-${index}`}
            />
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                <stage.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
                <p className="text-amber-300/80 text-sm">{stage.location}</p>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {stage.description}
            </p>

            {currentStage === 3 && (
              <div className="mt-6">
                <Button
                  onClick={() => setShowFigures(!showFigures)}
                  variant="outline"
                  className="w-full bg-amber-500/20 border-amber-400/50 text-amber-200 hover:bg-amber-500/30 hover:text-amber-100"
                  data-testid="button-toggle-figures"
                >
                  {showFigures ? "Hide" : "Explore"} Key Figures
                  <ChevronUp className={`w-4 h-4 ml-2 transition-transform ${showFigures ? "rotate-180" : ""}`} />
                </Button>

                {showFigures && (
                  <div className="mt-6 space-y-3">
                    {keyFigures.map((figure) => (
                      <button
                        key={figure.name}
                        onClick={() => setSelectedFigure(selectedFigure === figure.name ? null : figure.name)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedFigure === figure.name
                            ? figure.side === "muslim"
                              ? "bg-gradient-to-r from-emerald-500/30 to-emerald-600/20 border border-emerald-400/50"
                              : "bg-gradient-to-r from-red-500/30 to-red-600/20 border border-red-400/50"
                            : "bg-white/5 hover:bg-white/10 border border-transparent"
                        }`}
                        data-testid={`button-figure-${figure.name}`}
                      >
                        <div className="flex-1">
                          <h4 className={`font-semibold ${figure.side === "muslim" ? "text-emerald-200" : "text-red-200"}`}>
                            {figure.name}
                          </h4>
                          {selectedFigure === figure.name && (
                            <p className="text-white/70 text-sm mt-2">{figure.role}</p>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {currentStage === 5 && (
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-400">313</p>
                  <p className="text-xs text-white/60">Muslim Fighters</p>
                </div>
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-400">~1000</p>
                  <p className="text-xs text-white/60">Quraysh Army</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-400">14</p>
                  <p className="text-xs text-white/60">Muslim Martyrs</p>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-400">70</p>
                  <p className="text-xs text-white/60">Quraysh Killed</p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
              <Button
                onClick={prevStage}
                disabled={currentStage === 0}
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30"
                data-testid="button-prev-stage"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={nextStage}
                disabled={currentStage === battleStages.length - 1}
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30"
                data-testid="button-next-stage"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8 text-white/50 text-sm">
          Stage {currentStage + 1} of {battleStages.length}
        </div>
      </main>
    </div>
  );
}
