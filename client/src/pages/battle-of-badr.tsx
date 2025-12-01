import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Play, Pause, RotateCcw, Swords, Shield, Flag } from "lucide-react";

interface BattlePhase {
  id: string;
  title: string;
  description: string;
  muslimPosition: { x: number; y: number };
  quraishPosition: { x: number; y: number };
  arrows?: { from: string; to: string }[];
  highlight?: string;
}

const battlePhases: BattlePhase[] = [
  {
    id: "march",
    title: "The March to Badr",
    description: "The Muslim army of 313 men marched from Madinah towards Badr to intercept the Quraysh caravan. The Prophet ﷺ consulted with his companions, and the Ansar pledged their full support.",
    muslimPosition: { x: 20, y: 70 },
    quraishPosition: { x: 80, y: 20 },
    highlight: "muslim"
  },
  {
    id: "wells",
    title: "Securing the Wells",
    description: "Following the advice of Al-Hubab ibn al-Mundhir, the Muslims positioned themselves near the wells of Badr, denying the Quraysh access to water - a crucial strategic advantage.",
    muslimPosition: { x: 50, y: 55 },
    quraishPosition: { x: 75, y: 25 },
    highlight: "wells"
  },
  {
    id: "arrival",
    title: "Quraysh Army Arrives",
    description: "The Quraysh army of approximately 1,000 warriors arrived at Badr. Despite being outnumbered 3 to 1, the Muslims held firm with their faith in Allah.",
    muslimPosition: { x: 50, y: 55 },
    quraishPosition: { x: 50, y: 25 },
    highlight: "quraish"
  },
  {
    id: "duels",
    title: "The Single Combat",
    description: "Three champions from each side met in single combat. Hamza, Ali, and Ubaydah faced Utbah, Shaybah, and al-Walid. The Muslim champions were victorious, boosting morale.",
    muslimPosition: { x: 50, y: 55 },
    quraishPosition: { x: 50, y: 25 },
    arrows: [{ from: "muslim", to: "center" }, { from: "quraish", to: "center" }],
    highlight: "duels"
  },
  {
    id: "battle",
    title: "The Battle Begins",
    description: "The Prophet ﷺ threw a handful of pebbles towards the enemy, and the battle commenced. Allah sent angels to aid the believers as mentioned in the Quran.",
    muslimPosition: { x: 50, y: 50 },
    quraishPosition: { x: 50, y: 30 },
    arrows: [{ from: "muslim", to: "quraish" }],
    highlight: "battle"
  },
  {
    id: "victory",
    title: "Divine Victory",
    description: "The Muslims achieved a decisive victory. 70 Quraysh were killed including Abu Jahl, and 70 were captured. Only 14 Muslims were martyred. This victory established Islam's strength.",
    muslimPosition: { x: 50, y: 40 },
    quraishPosition: { x: 85, y: 15 },
    arrows: [{ from: "muslim", to: "quraish" }],
    highlight: "victory"
  }
];

const keyFigures = [
  { name: "Prophet Muhammad ﷺ", role: "Commander", side: "muslim" },
  { name: "Hamza ibn Abdul-Muttalib", role: "Champion", side: "muslim" },
  { name: "Ali ibn Abi Talib", role: "Champion", side: "muslim" },
  { name: "Abu Bakr al-Siddiq", role: "Advisor", side: "muslim" },
  { name: "Abu Jahl", role: "Leader", side: "quraish" },
  { name: "Utbah ibn Rabi'ah", role: "Champion", side: "quraish" },
];

export default function BattleOfBadr() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFigures, setShowFigures] = useState(false);

  const phase = battlePhases[currentPhase];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPhase((prev) => {
          if (prev >= battlePhases.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextPhase = () => {
    if (currentPhase < battlePhases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const prevPhase = () => {
    if (currentPhase > 0) {
      setCurrentPhase(currentPhase - 1);
    }
  };

  const reset = () => {
    setCurrentPhase(0);
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-orange-950 to-red-950 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
          <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent mb-4">
            Battle of Badr
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The first major battle between the Muslims and the Quraysh - A decisive victory that changed history
          </p>
          <p className="text-sm text-amber-300/80 mt-2">17th Ramadan, 2 AH</p>
        </div>

        <div className="flex justify-center gap-2 mb-4">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="outline"
            size="sm"
            className="bg-amber-500/20 border-amber-400/50 text-amber-200 hover:bg-amber-500/30"
            data-testid="button-play-pause"
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            size="sm"
            className="bg-amber-500/20 border-amber-400/50 text-amber-200 hover:bg-amber-500/30"
            data-testid="button-reset"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {battlePhases.map((p, index) => (
            <button
              key={p.id}
              onClick={() => setCurrentPhase(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPhase
                  ? "bg-amber-400 scale-125"
                  : index < currentPhase
                  ? "bg-amber-400/50"
                  : "bg-white/30"
              }`}
              data-testid={`button-phase-${index}`}
            />
          ))}
        </div>

        <Card className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
          <div className="relative h-80 md:h-96 bg-gradient-to-b from-amber-900/30 to-orange-900/30 overflow-hidden">
            <div className="absolute top-2 left-4 text-xs text-white/50">Makkah Direction</div>
            <div className="absolute bottom-2 left-4 text-xs text-white/50">Madinah Direction</div>
            
            {phase.highlight === "wells" && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-500/30 border-2 border-blue-400/50 flex items-center justify-center animate-pulse">
                <span className="text-xs text-blue-300">Wells</span>
              </div>
            )}

            {phase.highlight === "duels" && (
              <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
                <Swords className="w-10 h-10 text-amber-400 animate-pulse" />
              </div>
            )}

            <div 
              className={`absolute transition-all duration-1000 ease-in-out flex flex-col items-center ${
                phase.highlight === "muslim" ? "scale-110" : ""
              }`}
              style={{ 
                left: `${phase.muslimPosition.x}%`, 
                top: `${phase.muslimPosition.y}%`,
                transform: "translate(-50%, -50%)"
              }}
            >
              <div className="flex gap-1 mb-1">
                {[...Array(3)].map((_, i) => (
                  <Shield key={i} className="w-4 h-4 text-emerald-400" />
                ))}
              </div>
              <div className={`w-20 h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 ${
                phase.highlight === "muslim" ? "animate-pulse" : ""
              }`}>
                <Flag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-emerald-300 mt-1 font-semibold">Muslims</span>
              <span className="text-xs text-emerald-300/70">313 men</span>
            </div>

            <div 
              className={`absolute transition-all duration-1000 ease-in-out flex flex-col items-center ${
                phase.highlight === "quraish" ? "scale-110" : ""
              }`}
              style={{ 
                left: `${phase.quraishPosition.x}%`, 
                top: `${phase.quraishPosition.y}%`,
                transform: "translate(-50%, -50%)"
              }}
            >
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Shield key={i} className="w-4 h-4 text-red-400" />
                ))}
              </div>
              <div className={`w-24 h-14 rounded-lg bg-gradient-to-br from-red-700 to-red-900 border-2 border-red-500 flex items-center justify-center shadow-lg shadow-red-500/30 ${
                phase.highlight === "quraish" ? "animate-pulse" : ""
              }`}>
                <Flag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs text-red-300 mt-1 font-semibold">Quraysh</span>
              <span className="text-xs text-red-300/70">~1000 men</span>
            </div>

            {phase.arrows && phase.arrows.map((arrow, i) => (
              <div 
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className={`w-1 h-16 bg-gradient-to-b ${
                  arrow.from === "muslim" ? "from-emerald-400 to-transparent" : "from-red-400 to-transparent"
                } animate-pulse`} />
              </div>
            ))}

            {phase.highlight === "victory" && (
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent animate-pulse" />
            )}
          </div>

          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                <Swords className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{phase.title}</h2>
                <p className="text-amber-300/80 text-sm">Phase {currentPhase + 1} of {battlePhases.length}</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              {phase.description}
            </p>

            <Button
              onClick={() => setShowFigures(!showFigures)}
              variant="outline"
              className="w-full bg-amber-500/20 border-amber-400/50 text-amber-200 hover:bg-amber-500/30 mb-4"
              data-testid="button-toggle-figures"
            >
              {showFigures ? "Hide" : "Show"} Key Figures
            </Button>

            {showFigures && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {keyFigures.map((figure) => (
                  <div 
                    key={figure.name}
                    className={`p-3 rounded-lg ${
                      figure.side === "muslim" 
                        ? "bg-emerald-500/20 border border-emerald-400/30" 
                        : "bg-red-500/20 border border-red-400/30"
                    }`}
                  >
                    <p className={`font-semibold text-sm ${
                      figure.side === "muslim" ? "text-emerald-300" : "text-red-300"
                    }`}>{figure.name}</p>
                    <p className="text-xs text-white/60">{figure.role}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between pt-4 border-t border-white/10">
              <Button
                onClick={prevPhase}
                disabled={currentPhase === 0}
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30"
                data-testid="button-prev-phase"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={nextPhase}
                disabled={currentPhase === battlePhases.length - 1}
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30"
                data-testid="button-next-phase"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="max-w-5xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-white/5 backdrop-blur border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-emerald-400">313</p>
            <p className="text-xs text-white/60">Muslim Fighters</p>
          </Card>
          <Card className="bg-white/5 backdrop-blur border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-red-400">~1000</p>
            <p className="text-xs text-white/60">Quraysh Army</p>
          </Card>
          <Card className="bg-white/5 backdrop-blur border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">14</p>
            <p className="text-xs text-white/60">Muslim Martyrs</p>
          </Card>
          <Card className="bg-white/5 backdrop-blur border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">70</p>
            <p className="text-xs text-white/60">Quraysh Killed</p>
          </Card>
        </div>
      </main>
    </div>
  );
}
