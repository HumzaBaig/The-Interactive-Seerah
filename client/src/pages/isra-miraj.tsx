import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Star, Moon, ChevronUp } from "lucide-react";

interface HeavenLevel {
  level: number;
  prophet: string;
  description: string;
}

const heavenLevels: HeavenLevel[] = [
  { level: 1, prophet: "Adam (AS)", description: "The father of humanity greeted Prophet Muhammad ﷺ and welcomed him to the first heaven." },
  { level: 2, prophet: "Isa & Yahya (AS)", description: "Jesus and John the Baptist, the two cousins, welcomed the Prophet ﷺ in the second heaven." },
  { level: 3, prophet: "Yusuf (AS)", description: "Joseph, given half of all beauty, greeted the Prophet ﷺ in the third heaven." },
  { level: 4, prophet: "Idris (AS)", description: "Enoch, raised to a high station by Allah, welcomed the Prophet ﷺ in the fourth heaven." },
  { level: 5, prophet: "Harun (AS)", description: "Aaron, the brother of Musa, greeted the Prophet ﷺ in the fifth heaven." },
  { level: 6, prophet: "Musa (AS)", description: "Moses wept upon meeting the Prophet ﷺ, knowing his nation would surpass his own in Paradise." },
  { level: 7, prophet: "Ibrahim (AS)", description: "Abraham, leaning against Al-Bayt al-Ma'mur, welcomed his descendant to the seventh heaven." },
];

const journeyStages = [
  {
    id: "makkah",
    title: "Makkah - The Beginning",
    location: "Al-Masjid al-Haram",
    description: "The journey began when Jibreel (AS) came to Prophet Muhammad ﷺ while he was resting near the Kaaba. His chest was opened and his heart was washed with Zamzam water, then filled with faith and wisdom.",
    icon: Moon
  },
  {
    id: "buraq",
    title: "The Buraq",
    location: "The Heavenly Mount",
    description: "Prophet Muhammad ﷺ was given the Buraq, a white creature larger than a donkey but smaller than a mule, whose stride reached as far as the eye could see.",
    icon: Star
  },
  {
    id: "jerusalem",
    title: "Jerusalem",
    location: "Al-Masjid al-Aqsa",
    description: "The Prophet ﷺ led all the previous prophets in prayer at Al-Masjid al-Aqsa, uniting the legacy of prophethood in a single congregation.",
    icon: Star
  },
  {
    id: "heavens",
    title: "Ascension Through the Heavens",
    location: "The Seven Heavens",
    description: "From Jerusalem, Prophet Muhammad ﷺ ascended through each of the seven heavens, meeting previous prophets at each level.",
    icon: ChevronUp
  },
  {
    id: "sidra",
    title: "Sidrat al-Muntaha",
    location: "The Lote Tree of the Utmost Boundary",
    description: "At this point, even Jibreel (AS) could not proceed further. The Prophet ﷺ continued alone to the Divine Presence.",
    icon: Star
  },
  {
    id: "divine",
    title: "The Divine Presence",
    location: "Beyond Description",
    description: "In the presence of Allah, the five daily prayers were prescribed. Originally fifty, they were reduced to five through the Prophet's ﷺ repeated intercession, advised by Musa (AS).",
    icon: Star
  }
];

export default function IsraMiraj() {
  const [currentStage, setCurrentStage] = useState(0);
  const [showHeavens, setShowHeavens] = useState(false);
  const [selectedHeaven, setSelectedHeaven] = useState<number | null>(null);

  const nextStage = () => {
    if (currentStage < journeyStages.length - 1) {
      setCurrentStage(currentStage + 1);
      setShowHeavens(false);
      setSelectedHeaven(null);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      setShowHeavens(false);
      setSelectedHeaven(null);
    }
  };

  const stage = journeyStages[currentStage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-950 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

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
            <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">
              Al-Isra wal Mi'raj
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The Night Journey from Makkah to Jerusalem, and the Ascension through the Seven Heavens
          </p>
          <p className="text-sm text-amber-300/80 mt-2">10th year of Prophethood</p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {journeyStages.map((s, index) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentStage(index);
                setShowHeavens(false);
                setSelectedHeaven(null);
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
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
                  onClick={() => setShowHeavens(!showHeavens)}
                  variant="outline"
                  className="w-full bg-amber-500/20 border-amber-400/50 text-amber-200 hover:bg-amber-500/30 hover:text-amber-100"
                  data-testid="button-toggle-heavens"
                >
                  {showHeavens ? "Hide" : "Explore"} the Seven Heavens
                  <ChevronUp className={`w-4 h-4 ml-2 transition-transform ${showHeavens ? "rotate-180" : ""}`} />
                </Button>

                {showHeavens && (
                  <div className="mt-6 space-y-3">
                    {heavenLevels.map((heaven) => (
                      <button
                        key={heaven.level}
                        onClick={() => setSelectedHeaven(selectedHeaven === heaven.level ? null : heaven.level)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedHeaven === heaven.level
                            ? "bg-gradient-to-r from-amber-500/30 to-purple-500/30 border border-amber-400/50"
                            : "bg-white/5 hover:bg-white/10 border border-transparent"
                        }`}
                        data-testid={`button-heaven-${heaven.level}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            selectedHeaven === heaven.level
                              ? "bg-amber-400 text-slate-900"
                              : "bg-white/20 text-white"
                          }`}>
                            {heaven.level}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">{heaven.prophet}</h4>
                            {selectedHeaven === heaven.level && (
                              <p className="text-white/70 text-sm mt-2">{heaven.description}</p>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
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
                disabled={currentStage === journeyStages.length - 1}
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
          Stage {currentStage + 1} of {journeyStages.length}
        </div>
      </main>
    </div>
  );
}
