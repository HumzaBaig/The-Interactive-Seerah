import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Users, Shovel, Shield, Wind, Gavel, Trophy, ChevronUp } from "lucide-react";

interface KeyFigure {
  name: string;
  role: string;
  side: "muslim" | "confederate";
}

const keyFigures: KeyFigure[] = [
  { name: "Prophet Muhammad ﷺ", role: "Commander - worked alongside companions digging", side: "muslim" },
  { name: "Salman al-Farsi", role: "Suggested the trench strategy from Persian warfare", side: "muslim" },
  { name: "Nu'aym ibn Mas'ud", role: "Secret Muslim who sowed discord among enemies", side: "muslim" },
  { name: "Sa'd ibn Mu'adh", role: "Chief of Aws - wounded during the siege", side: "muslim" },
  { name: "Abu Sufyan", role: "Leader of the Quraysh contingent", side: "confederate" },
  { name: "Huyayy ibn Akhtab", role: "Banu Nadir leader - convinced Banu Qurayza to betray", side: "confederate" },
  { name: "Ka'b ibn Asad", role: "Chief of Banu Qurayza - broke the treaty", side: "confederate" },
];

const battleStages = [
  {
    id: "coalition",
    title: "The Confederate Forces Gather",
    location: "Arabia",
    description: "The exiled Banu Nadir, led by Huyayy ibn Akhtab, traveled throughout Arabia uniting tribes against the Muslims. They assembled a coalition of 10,000 warriors: 4,000 Quraysh, 6,000 from Ghatafan and other tribes. This was the largest army Arabia had ever seen march against Madinah.",
    icon: Users
  },
  {
    id: "trench",
    title: "Digging the Trench",
    location: "Northern Madinah",
    description: "Salman al-Farsi suggested a defensive trench - a tactic unknown to Arabs. For six days, the Prophet ﷺ worked alongside 3,000 Muslims digging a trench 5.5 km long, 4.6m wide, and 3m deep. During this difficult work, miracles occurred as the Prophet ﷺ multiplied their food and split a large rock, emitting light.",
    icon: Shovel
  },
  {
    id: "siege",
    title: "The Siege Begins",
    location: "Madinah",
    description: "The confederates arrived and were shocked by the trench. Unable to cross, they laid siege to Madinah. Several warriors attempted to jump across but failed. One, Amr ibn Wudd, managed to cross and challenged the Muslims to single combat. Ali ibn Abi Talib killed him, causing the others to flee back.",
    icon: Shield
  },
  {
    id: "betrayal",
    title: "Banu Qurayza's Betrayal",
    location: "Southern Madinah",
    description: "Huyayy ibn Akhtab convinced Banu Qurayza to break their treaty with the Muslims, threatening the unprotected southern side of Madinah where the women and children sheltered. The Muslims now faced enemies from all directions. The situation became extremely dire as the siege stretched on.",
    icon: Users
  },
  {
    id: "nuaym",
    title: "Nu'aym's Mission",
    location: "Enemy Camps",
    description: "Nu'aym ibn Mas'ud, a secret Muslim from Ghatafan, asked the Prophet ﷺ for permission to sow discord. He convinced Banu Qurayza to demand hostages from Quraysh, then told Quraysh that Banu Qurayza would betray them. When Quraysh requested coordination, Banu Qurayza's demand confirmed his story, shattering their alliance.",
    icon: Gavel
  },
  {
    id: "victory",
    title: "Divine Victory",
    location: "The Withdrawal",
    description: "After nearly a month of siege, Allah sent a fierce cold wind that uprooted their tents, extinguished their fires, and terrified the confederates. Abu Sufyan called for retreat. The Quran declared: 'O you who believe, remember Allah's favor when armies came against you, and We sent upon them a wind and forces you did not see.' (33:9)",
    icon: Wind
  }
];

export default function BattleOfTrench() {
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
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-800 text-white overflow-hidden">

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
            <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200 bg-clip-text text-transparent pb-2">
              Battle of the Trench
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The siege of Madinah by 10,000 confederates - Victory through faith and divine intervention
          </p>
          <p className="text-sm text-stone-300/80 mt-2">Shawwal-Dhul Qa'dah, 5 AH</p>
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
                  ? "bg-stone-400 scale-125"
                  : index < currentStage
                  ? "bg-stone-400/50"
                  : "bg-white/30"
              }`}
              data-testid={`button-stage-${index}`}
            />
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-400 to-stone-600 flex items-center justify-center">
                <stage.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
                <p className="text-stone-300/80 text-sm">{stage.location}</p>
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
                  className="w-full bg-stone-500/20 border-stone-400/50 text-stone-200 hover:bg-stone-500/30 hover:text-stone-100"
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
                  <p className="text-2xl font-bold text-emerald-400">3,000</p>
                  <p className="text-xs text-white/60">Muslim Defenders</p>
                </div>
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-400">10,000</p>
                  <p className="text-xs text-white/60">Confederate Army</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-400">6</p>
                  <p className="text-xs text-white/60">Muslim Martyrs</p>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-400">~27</p>
                  <p className="text-xs text-white/60">Days of Siege</p>
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
