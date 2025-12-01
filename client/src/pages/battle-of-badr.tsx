import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Swords, Shield, Flag } from "lucide-react";

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
  const [showFigures, setShowFigures] = useState(false);

  const phase = battlePhases[currentPhase];

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
          <div className="relative h-[420px] md:h-[480px] overflow-hidden">
            {/* Parchment/Map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200" />
            
            {/* Map texture overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(139, 115, 85, 0.1) 2px,
                rgba(139, 115, 85, 0.1) 4px
              )`
            }} />

            {/* Topographic contour lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <ellipse cx="15" cy="20" rx="12" ry="8" fill="none" stroke="#8B7355" strokeWidth="0.3" opacity="0.4" />
              <ellipse cx="15" cy="20" rx="8" ry="5" fill="none" stroke="#8B7355" strokeWidth="0.3" opacity="0.3" />
              <ellipse cx="85" cy="15" rx="10" ry="6" fill="none" stroke="#8B7355" strokeWidth="0.3" opacity="0.4" />
              <ellipse cx="10" cy="75" rx="8" ry="5" fill="none" stroke="#8B7355" strokeWidth="0.3" opacity="0.3" />
            </svg>

            {/* Hill labels */}
            <div className="absolute top-[12%] left-[8%] text-[9px] text-amber-800/60 font-medium italic">Hills</div>
            <div className="absolute top-[8%] right-[12%] text-[9px] text-amber-800/60 font-medium italic">Dunes</div>

            {/* Main road/caravan route */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M -5 55 Q 20 52, 50 50 Q 80 48, 105 45" 
                stroke="#A0826D" 
                strokeWidth="1.5" 
                fill="none" 
                strokeDasharray="4 2"
                opacity="0.6"
              />
              <text x="92" y="42" fontSize="2.5" fill="#8B7355" opacity="0.7">To Makkah</text>
              <text x="2" y="58" fontSize="2.5" fill="#8B7355" opacity="0.7">To Madinah</text>
            </svg>

            {/* Wells of Badr - Central Feature */}
            <div className="absolute left-[48%] top-[48%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={`flex flex-col items-center transition-all duration-500 ${
                phase.highlight === "wells" ? "scale-110" : ""
              }`}>
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  phase.highlight === "wells" 
                    ? "bg-blue-400 border-blue-600" 
                    : "bg-blue-300/80 border-blue-500/60"
                }`}>
                  <div className="w-5 h-5 rounded-full bg-blue-600/60" />
                </div>
                <span className="text-[10px] text-amber-900 font-bold mt-1 bg-amber-100/80 px-1.5 rounded">Wells of Badr</span>
              </div>
            </div>

            {/* Secondary wells */}
            <div className="absolute left-[42%] top-[52%] z-5">
              <div className="w-4 h-4 rounded-full bg-blue-300/60 border border-blue-400/50" />
            </div>
            <div className="absolute left-[54%] top-[46%] z-5">
              <div className="w-3 h-3 rounded-full bg-blue-300/60 border border-blue-400/50" />
            </div>

            {/* Muslim Encampment Area */}
            <div 
              className={`absolute transition-all duration-1000 ease-in-out z-20 ${
                phase.highlight === "muslim" ? "scale-105" : ""
              }`}
              style={{ 
                left: `${phase.muslimPosition.x}%`, 
                top: `${phase.muslimPosition.y}%`,
                transform: "translate(-50%, -50%)"
              }}
            >
              <div className="flex flex-col items-center">
                {/* Encampment shape */}
                <div className={`relative px-4 py-2 rounded-lg border-2 shadow-md ${
                  phase.highlight === "muslim" 
                    ? "bg-emerald-500 border-emerald-700 ring-2 ring-emerald-300" 
                    : "bg-emerald-600/90 border-emerald-700/80"
                }`}>
                  <Flag className="w-5 h-5 text-white" />
                  {/* Tent indicators */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-emerald-300 rounded-full" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full" />
                </div>
                <div className="mt-1 bg-white/90 px-2 py-0.5 rounded shadow-sm">
                  <span className="text-[10px] text-emerald-800 font-bold block">Muslim Army</span>
                  <span className="text-[9px] text-emerald-700 block text-center">313 men</span>
                </div>
              </div>
            </div>

            {/* Quraysh Encampment Area */}
            <div 
              className={`absolute transition-all duration-1000 ease-in-out z-20 ${
                phase.highlight === "quraish" ? "scale-105" : ""
              }`}
              style={{ 
                left: `${phase.quraishPosition.x}%`, 
                top: `${phase.quraishPosition.y}%`,
                transform: "translate(-50%, -50%)"
              }}
            >
              <div className="flex flex-col items-center">
                {/* Larger encampment */}
                <div className={`relative px-5 py-2.5 rounded-lg border-2 shadow-md ${
                  phase.highlight === "quraish" 
                    ? "bg-red-500 border-red-700 ring-2 ring-red-300" 
                    : "bg-red-600/90 border-red-700/80"
                }`}>
                  <Flag className="w-6 h-6 text-white" />
                  {/* More tent indicators for larger army */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-300 rounded-full" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-300 rounded-full" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-300 rounded-full" />
                </div>
                <div className="mt-1 bg-white/90 px-2 py-0.5 rounded shadow-sm">
                  <span className="text-[10px] text-red-800 font-bold block">Quraysh Army</span>
                  <span className="text-[9px] text-red-700 block text-center">~1000 men</span>
                </div>
              </div>
            </div>

            {/* Movement arrows */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-15" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <marker id="arrowGreen" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                  <path d="M0,0 L4,2 L0,4 Z" fill="#059669" />
                </marker>
                <marker id="arrowRed" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                  <path d="M0,0 L4,2 L0,4 Z" fill="#DC2626" />
                </marker>
              </defs>
              
              {phase.id === "march" && (
                <path d="M 25 68 Q 35 62, 45 58" stroke="#059669" strokeWidth="0.8" fill="none" markerEnd="url(#arrowGreen)" strokeDasharray="2 1" />
              )}
              {phase.id === "arrival" && (
                <path d="M 72 28 Q 62 35, 55 40" stroke="#DC2626" strokeWidth="0.8" fill="none" markerEnd="url(#arrowRed)" strokeDasharray="2 1" />
              )}
              {(phase.id === "duels" || phase.id === "battle") && (
                <>
                  <path d="M 48 52 L 48 42" stroke="#059669" strokeWidth="0.8" fill="none" markerEnd="url(#arrowGreen)" />
                  <path d="M 52 32 L 52 42" stroke="#DC2626" strokeWidth="0.8" fill="none" markerEnd="url(#arrowRed)" />
                </>
              )}
              {phase.id === "victory" && (
                <path d="M 55 35 Q 70 28, 82 18" stroke="#DC2626" strokeWidth="0.8" fill="none" markerEnd="url(#arrowRed)" strokeDasharray="3 1" opacity="0.7" />
              )}
            </svg>

            {/* Combat Zone indicator */}
            {(phase.highlight === "duels" || phase.highlight === "battle") && (
              <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-25">
                <div className="flex flex-col items-center">
                  <Swords className="w-8 h-8 text-amber-700" />
                  <span className="text-[9px] text-amber-900 font-bold bg-amber-200/80 px-1.5 rounded mt-0.5">Combat</span>
                </div>
              </div>
            )}

            {/* Victory overlay */}
            {phase.highlight === "victory" && (
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/30 to-transparent pointer-events-none" />
            )}

            {/* Map Legend */}
            <div className="absolute bottom-2 right-2 bg-white/90 rounded p-2 shadow-sm text-[8px] z-30">
              <div className="font-bold text-amber-900 mb-1">Legend</div>
              <div className="flex items-center gap-1 mb-0.5">
                <div className="w-3 h-3 bg-emerald-500 rounded" />
                <span className="text-amber-800">Muslims</span>
              </div>
              <div className="flex items-center gap-1 mb-0.5">
                <div className="w-3 h-3 bg-red-500 rounded" />
                <span className="text-amber-800">Quraysh</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-400 rounded-full" />
                <span className="text-amber-800">Wells</span>
              </div>
            </div>

            {/* Map title cartouche */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-amber-100/95 border-2 border-amber-400 rounded-lg px-4 py-1 shadow-md z-30">
              <span className="text-sm font-bold text-amber-900">Valley of Badr</span>
            </div>
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
