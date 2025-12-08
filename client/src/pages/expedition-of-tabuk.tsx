import { useState, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, AlertCircle, Sun, Map, Users, ScrollText, Trophy, ChevronUp } from "lucide-react";

interface KeyFigure {
  name: string;
  role: string;
  status: "heroic" | "sinful" | "hypocrite";
}

const keyFigures: KeyFigure[] = [
  { name: "Prophet Muhammad ﷺ", role: "Commander of the 30,000-strong army", status: "heroic" },
  { name: "Abu Bakr as-Siddiq", role: "Donated all his wealth for the expedition", status: "heroic" },
  { name: "Uthman ibn Affan", role: "Financed one-third of the army", status: "heroic" },
  { name: "Umar ibn al-Khattab", role: "Donated half his wealth", status: "heroic" },
  { name: "Ka'b ibn Malik", role: "One of three sincere believers who stayed behind", status: "sinful" },
  { name: "Abdullah ibn Ubayy", role: "Chief hypocrite who returned with 300 men", status: "hypocrite" },
  { name: "Abu Khaythama", role: "Caught up with army after initially staying", status: "heroic" },
];

const expeditionStages = [
  {
    id: "threat",
    title: "The Byzantine Threat",
    location: "Roman Empire",
    description: "Reports reached Madinah that the Byzantine Emperor Heraclius was amassing a large army at Tabuk to invade Arabia. The threat was serious - the Byzantines had the largest military power in the world. Despite it being harvest season during extreme summer heat, the Prophet ﷺ called for mobilization.",
    icon: AlertCircle
  },
  {
    id: "hardship",
    title: "The Army of Hardship",
    location: "Madinah",
    description: "This expedition was called 'Jaysh al-Usra' (Army of Hardship). The heat was intense, the journey long (over 700 km), and it was harvest time. Resources were scarce - sometimes many men shares a single camel. The hypocrites made excuses and tried to discourage others. Despite this, 30,000 Muslims responded to the call.",
    icon: Sun
  },
  {
    id: "generosity",
    title: "Unprecedented Generosity",
    location: "Madinah",
    description: "The companions showed extraordinary sacrifice. Uthman equipped one-third of the army (300 camels, 50 horses, and 1,000 dinars). Abu Bakr brought everything he owned. When asked what he left for his family, he said: 'Allah and His Messenger.' Umar brought half his wealth. Women donated their jewelry.",
    icon: Users
  },
  {
    id: "march",
    title: "The Long March",
    location: "To Tabuk",
    description: "The massive army marched through the burning desert. Water was so scarce that some camels were slaughtered for the water in their stomachs. At one point, the Muslims prayed for rain and Allah sent clouds that quenched their thirst. The Prophet ﷺ warned them about passing through the ruins of Thamud.",
    icon: Map
  },
  {
    id: "arrival",
    title: "Arrival at Tabuk",
    location: "Tabuk",
    description: "When the Muslim army reached Tabuk, they found no Byzantine army - the Romans had withdrawn upon hearing of the Muslim advance. The Prophet ﷺ stayed for 20 days, during which several Christian and Jewish communities in the region came and agreed to pay jizyah in exchange for protection. Islam's influence reached the Byzantine border.",
    icon: ScrollText
  },
  {
    id: "return",
    title: "Return and Reckoning",
    location: "Madinah",
    description: "Upon return, those who stayed behind without excuse were boycotted. Ka'b ibn Malik and two others who honestly admitted their fault were ostracized for 50 days until Allah revealed their forgiveness. The hypocrites' mosque (Masjid al-Dirar) was demolished. This expedition demonstrated Muslim resolve and extended Islam's reach to Arabia's northern frontier.",
    icon: Trophy
  }
];

export default function ExpeditionOfTabuk() {
  const [currentStage, setCurrentStage] = useState(0);
  const [showFigures, setShowFigures] = useState(false);
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        nextStage();
      } else {
        prevStage();
      }
    }
  };

  const nextStage = () => {
    if (currentStage < expeditionStages.length - 1) {
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

  const stage = expeditionStages[currentStage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

      <header className="relative z-10 p-6">
        <Link href="/#graphics-section">
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
            <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-clip-text text-transparent pb-3">
              Expedition of Tabuk
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The Army of Hardship - Testing faith in the most difficult conditions
          </p>
          <p className="text-sm text-slate-300/80 mt-2">Rajab, 9 AH</p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {expeditionStages.map((s, index) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentStage(index);
                setShowFigures(false);
                setSelectedFigure(null);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStage
                  ? "bg-slate-400 scale-125"
                  : index < currentStage
                  ? "bg-slate-400/50"
                  : "bg-white/30"
              }`}
              data-testid={`button-stage-${index}`}
            />
          ))}
        </div>

        <Card 
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center">
                <stage.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
                <p className="text-slate-300/80 text-sm">{stage.location}</p>
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
                  className="w-full bg-cyan-500/20 border-cyan-400/50 text-cyan-200 hover:bg-cyan-500/30 hover:text-cyan-100"
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
                            ? figure.status === "heroic"
                              ? "bg-gradient-to-r from-emerald-500/30 to-emerald-600/20 border border-emerald-400/50"
                              : figure.status === "sinful"
                              ? "bg-gradient-to-r from-amber-500/30 to-amber-600/20 border border-amber-400/50"
                              : "bg-gradient-to-r from-red-500/30 to-red-600/20 border border-red-400/50"
                            : "bg-white/5 hover:bg-white/10 border border-transparent"
                        }`}
                        data-testid={`button-figure-${figure.name}`}
                      >
                        <div className="flex-1">
                          <h4 className={`font-semibold ${
                            figure.status === "heroic" ? "text-emerald-200" : 
                            figure.status === "sinful" ? "text-amber-200" : "text-red-200"
                          }`}>
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
                  <p className="text-2xl font-bold text-emerald-400">30,000</p>
                  <p className="text-xs text-white/60">Muslim Army</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-400">700+</p>
                  <p className="text-xs text-white/60">km Distance</p>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-400">20</p>
                  <p className="text-xs text-white/60">Days at Tabuk</p>
                </div>
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-400">0</p>
                  <p className="text-xs text-white/60">Battles Fought</p>
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
                disabled={currentStage === expeditionStages.length - 1}
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
          Stage {currentStage + 1} of {expeditionStages.length}
        </div>
      </main>
    </div>
  );
}
