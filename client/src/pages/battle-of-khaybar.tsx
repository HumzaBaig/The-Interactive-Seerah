import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Map, Castle, Flag, Swords, Shield, Scroll, ChevronUp } from "lucide-react";

interface KeyFigure {
  name: string;
  role: string;
  side: "muslim" | "jewish";
}

const keyFigures: KeyFigure[] = [
  { name: "Prophet Muhammad ﷺ", role: "Commander of the Muslim forces", side: "muslim" },
  { name: "Ali ibn Abi Talib", role: "Given the banner - conquered the main fortress", side: "muslim" },
  { name: "Abu Bakr as-Siddiq", role: "Led an assault but was repelled", side: "muslim" },
  { name: "Umar ibn al-Khattab", role: "Led an assault but was repelled", side: "muslim" },
  { name: "Marhab", role: "Jewish champion - killed by Ali in single combat", side: "jewish" },
  { name: "Kinanah ibn al-Rabi", role: "Custodian of Banu Nadir's treasure", side: "jewish" },
  { name: "Safiyya bint Huyayy", role: "Became a Mother of the Believers", side: "muslim" },
];

const battleStages = [
  {
    id: "march",
    title: "March to Khaybar",
    location: "From Madinah",
    description: "In Muharram of 7 AH, the Prophet ﷺ led 1,400 Muslims (200 cavalry) towards Khaybar, a fortified Jewish settlement 150 km north of Madinah. The inhabitants had been inciting Arab tribes against the Muslims and were responsible for organizing the Confederate forces at the Trench.",
    icon: Map
  },
  {
    id: "fortresses",
    title: "The Fortresses of Khaybar",
    location: "Khaybar Oasis",
    description: "Khaybar consisted of several heavily fortified settlements with eight major fortresses, including Na'im, As-Sa'b, Qulla, Watih, and Qamus. The Muslims laid siege to the fortresses one by one. The inhabitants were confident their defenses were impenetrable and had ample supplies.",
    icon: Castle
  },
  {
    id: "banner",
    title: "The Banner of Victory",
    location: "Muslim Camp",
    description: "After initial assaults by Abu Bakr and Umar were repelled, the Prophet ﷺ announced: 'Tomorrow I shall give the banner to a man who loves Allah and His Messenger, and whom Allah and His Messenger love. Allah will grant victory through him.' The next morning, he called for Ali, cured his eye ailment with his saliva, and gave him the banner.",
    icon: Flag
  },
  {
    id: "conquest",
    title: "Ali's Conquest",
    location: "Fortress of Qamus",
    description: "Ali marched to the fortress of Qamus, the strongest of all. Marhab, the Jewish champion, came out for single combat, boasting of his prowess. Ali killed him and continued fighting until he reached the fortress gate, using it as a shield. The fortress fell, and other fortifications followed in succession.",
    icon: Swords
  },
  {
    id: "surrender",
    title: "The Surrender",
    location: "Khaybar",
    description: "After the fall of their main fortresses, the remaining inhabitants surrendered. They requested to remain on their land to cultivate it, giving half their produce to the Muslims. The Prophet ﷺ agreed, establishing an important precedent for treatment of conquered peoples. Safiyya bint Huyayy chose Islam and married the Prophet ﷺ.",
    icon: Shield
  },
  {
    id: "legacy",
    title: "The Legacy of Khaybar",
    location: "Return to Madinah",
    description: "The conquest neutralized a major threat to Madinah and secured vital resources for the Muslim community. The Abyssinian migrants returned to Madinah during this time. The Prophet ﷺ also survived a poisoning attempt by a Jewish woman, which affected his health for years. This victory significantly strengthened Islam's position in Arabia.",
    icon: Scroll
  }
];

export default function BattleOfKhaybar() {
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
              Conquest of Khaybar
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The fall of the Jewish fortresses - Ali ibn Abi Talib earns the banner of victory
          </p>
          <p className="text-sm text-amber-300/80 mt-2">Muharram, 7 AH</p>
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
                  <p className="text-2xl font-bold text-emerald-400">1,400</p>
                  <p className="text-xs text-white/60">Muslim Fighters</p>
                </div>
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-400">10,000</p>
                  <p className="text-xs text-white/60">Jewish Inhabitants</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-400">15</p>
                  <p className="text-xs text-white/60">Muslim Martyrs</p>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-400">8</p>
                  <p className="text-xs text-white/60">Fortresses Conquered</p>
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
