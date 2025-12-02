import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Mountain, AlertTriangle, Shield, Swords, Castle, Gift, ChevronUp } from "lucide-react";

interface KeyFigure {
  name: string;
  role: string;
  side: "muslim" | "hawazin";
}

const keyFigures: KeyFigure[] = [
  { name: "Prophet Muhammad ﷺ", role: "Commander - stood firm when army fled", side: "muslim" },
  { name: "Abu Sufyan ibn Harith", role: "Held the Prophet's stirrup, recited poetry", side: "muslim" },
  { name: "Abbas ibn Abdul-Muttalib", role: "Called retreating Muslims to return", side: "muslim" },
  { name: "Khalid ibn al-Walid", role: "Wounded while fighting valiantly", side: "muslim" },
  { name: "Abu Qatada", role: "Killed the enemy who nearly killed his companion", side: "muslim" },
  { name: "Malik ibn Awf", role: "Commander of Hawazin and Thaqif", side: "hawazin" },
  { name: "Duraid ibn al-Simma", role: "Elderly strategist whose advice was ignored", side: "hawazin" },
];

const battleStages = [
  {
    id: "threat",
    title: "Hawazin's Mobilization",
    location: "Arabian Tribes",
    description: "Shortly after the Conquest of Makkah, the tribes of Hawazin and Thaqif gathered 20,000 warriors under Malik ibn Awf to attack the Muslims. They brought their families and livestock to prevent retreat. The elderly advisor Duraid warned against this, but was ignored. They positioned themselves in the valley of Hunayn.",
    icon: Mountain
  },
  {
    id: "ambush",
    title: "The Ambush",
    location: "Valley of Hunayn",
    description: "The Muslim army of 12,000 marched confidently - some even saying 'We cannot be defeated today due to our numbers.' As they entered the narrow valley at dawn, Hawazin's archers attacked from hidden positions. Panic spread, and the army broke and fled. This was a lesson that victory comes from Allah, not numbers.",
    icon: AlertTriangle
  },
  {
    id: "firmness",
    title: "The Prophet's Steadfastness",
    location: "The Battlefield",
    description: "While the army fled, the Prophet ﷺ spurred his mule forward, declaring: 'I am the Prophet, no lie! I am the son of Abdul-Muttalib!' Abbas called out with his powerful voice to the Ansar and Muhajirun. The companions began returning, rallying around the Prophet ﷺ who stood firm like a rock.",
    icon: Shield
  },
  {
    id: "victory",
    title: "Victory at Hunayn",
    location: "Valley of Hunayn",
    description: "As the Muslims regrouped, the tide turned. Allah sent tranquility (sakinah) upon the believers and unseen forces against the enemy. The Hawazin were routed. The Quran mentions: 'Allah has already given you victory at Hunayn when your numbers pleased you, but they did not avail you... then He sent down His tranquility upon His Messenger and the believers.' (9:25-26)",
    icon: Swords
  },
  {
    id: "taif",
    title: "The Siege of Ta'if",
    location: "Ta'if",
    description: "The fleeing Hawazin took refuge in Ta'if's fortresses. The Prophet ﷺ laid siege for about 20 days but the fortifications were too strong. He lifted the siege and withdrew, praying for the people of Ta'if. They would accept Islam the following year. Malik ibn Awf later came to the Prophet ﷺ and accepted Islam.",
    icon: Castle
  },
  {
    id: "distribution",
    title: "The Distribution of Spoils",
    location: "Ji'ranah",
    description: "The war booty was immense: 24,000 camels, 40,000 sheep, 4,000 ounces of silver. The Prophet ﷺ gave generously to the new Muslims from Quraysh to win their hearts. When the Ansar felt overlooked, he reminded them: 'Are you not satisfied that people take sheep and camels while you return with Allah's Messenger?' They wept with joy.",
    icon: Gift
  }
];

export default function BattleOfHunayn() {
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
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-orange-900 to-orange-800 text-white overflow-hidden">

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
            <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 bg-clip-text text-transparent pb-1">
              Battle of Hunayn
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Victory comes from Allah alone - The lesson of overconfidence and divine support
          </p>
          <p className="text-sm text-orange-300/80 mt-2">Shawwal, 8 AH</p>
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
                  ? "bg-orange-400 scale-125"
                  : index < currentStage
                  ? "bg-orange-400/50"
                  : "bg-white/30"
              }`}
              data-testid={`button-stage-${index}`}
            />
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <stage.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
                <p className="text-orange-300/80 text-sm">{stage.location}</p>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {stage.description}
            </p>

            {currentStage === 2 && (
              <div className="mt-6">
                <Button
                  onClick={() => setShowFigures(!showFigures)}
                  variant="outline"
                  className="w-full bg-orange-500/20 border-orange-400/50 text-orange-200 hover:bg-orange-500/30 hover:text-orange-100"
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
                  <p className="text-2xl font-bold text-emerald-400">12,000</p>
                  <p className="text-xs text-white/60">Muslim Army</p>
                </div>
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-400">20,000</p>
                  <p className="text-xs text-white/60">Hawazin Warriors</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-400">24,000</p>
                  <p className="text-xs text-white/60">Camels Captured</p>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-400">6,000</p>
                  <p className="text-xs text-white/60">Captives Released</p>
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
