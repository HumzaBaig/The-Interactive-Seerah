import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Mountain, Shield, Users, Swords, AlertTriangle, Heart, ChevronUp } from "lucide-react";

interface KeyFigure {
  name: string;
  role: string;
  side: "muslim" | "quraysh";
}

const keyFigures: KeyFigure[] = [
  { name: "Prophet Muhammad ﷺ", role: "Commander - was injured in the battle", side: "muslim" },
  { name: "Hamza ibn Abdul-Muttalib", role: "Lion of Allah - martyred by Wahshi", side: "muslim" },
  { name: "Mus'ab ibn Umayr", role: "Standard bearer - martyred defending the Prophet", side: "muslim" },
  { name: "Abu Dujana", role: "Wielded the Prophet's sword with great valor", side: "muslim" },
  { name: "Abu Sufyan", role: "Commander of the Quraysh army", side: "quraysh" },
  { name: "Khalid ibn al-Walid", role: "Led the cavalry flanking maneuver", side: "quraysh" },
  { name: "Hind bint Utbah", role: "Mutilated Hamza's body in revenge", side: "quraysh" },
];

const battleStages = [
  {
    id: "preparation",
    title: "Quraysh March for Revenge",
    location: "From Makkah",
    description: "Seeking revenge for Badr, the Quraysh assembled an army of 3,000 warriors with 200 cavalry and 700 armored soldiers. Led by Abu Sufyan, they marched towards Madinah. When news reached the Prophet ﷺ, he consulted his companions about whether to defend from within the city or meet them outside.",
    icon: Users
  },
  {
    id: "decision",
    title: "The Decision to Fight",
    location: "Madinah",
    description: "Though the Prophet ﷺ preferred defending from within Madinah, the younger companions who had missed Badr urged him to go out. He donned his armor and led 1,000 men towards Uhud. On the way, Abdullah ibn Ubayy defected with 300 hypocrites, leaving only 700 Muslims to face the Quraysh.",
    icon: Shield
  },
  {
    id: "positioning",
    title: "Strategic Positioning",
    location: "Mount Uhud",
    description: "The Prophet ﷺ positioned 50 archers on the mountain pass under Abdullah ibn Jubayr's command with strict orders: 'Do not leave your positions even if you see us being killed or victorious.' The Muslim army was positioned with Mount Uhud behind them and the archers protecting their flank.",
    icon: Mountain
  },
  {
    id: "initial",
    title: "Initial Muslim Victory",
    location: "The Battlefield",
    description: "The battle began with single combats and the Muslims fought fiercely. Abu Dujana cut through enemy ranks with the Prophet's sword. Hamza displayed legendary bravery until Wahshi struck him with his spear. The Muslims pushed the Quraysh back in what seemed like a decisive victory.",
    icon: Swords
  },
  {
    id: "turning",
    title: "The Turning Point",
    location: "Archers' Hill",
    description: "Seeing the Quraysh retreat, most archers abandoned their positions to collect spoils despite orders. Khalid ibn al-Walid saw the opening and led his cavalry around the mountain, attacking the Muslims from behind. The remaining archers were overwhelmed and the tide of battle reversed dramatically.",
    icon: AlertTriangle
  },
  {
    id: "aftermath",
    title: "Lessons and Steadfastness",
    location: "Return to Madinah",
    description: "The Prophet ﷺ was injured when he fell into a pit, losing a tooth and having his helmet rings pierce his cheek. Seventy Muslims were martyred including Hamza. Despite the setback, Allah revealed: 'Do not weaken or grieve, for you will be superior if you are true believers.' (3:139)",
    icon: Heart
  }
];

export default function BattleOfUhud() {
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
            Back to Timeline
          </Button>
        </Link>
      </header>

      <main className="relative z-10 container mx-auto px-6 pb-12">
        <div className="text-center mb-8">
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              Battle of Uhud
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A crucial lesson in obedience and perseverance - The cost of disobeying orders
          </p>
          <p className="text-sm text-amber-300/80 mt-2">7th Shawwal, 3 AH</p>
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
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
              <p className="text-amber-300/80 text-sm">{stage.location}</p>
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
                  <p className="text-2xl font-bold text-emerald-400">700</p>
                  <p className="text-xs text-white/60">Muslim Fighters</p>
                </div>
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-400">3,000</p>
                  <p className="text-xs text-white/60">Quraysh Army</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-400">70</p>
                  <p className="text-xs text-white/60">Muslim Martyrs</p>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-400">22</p>
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
