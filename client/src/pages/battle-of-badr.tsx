import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Footprints, 
  Droplets, 
  Users, 
  Swords, 
  Flame, 
  Trophy,
  Flag,
  ChevronRight
} from "lucide-react";

interface BattlePhase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Footprints;
  color: string;
  bgColor: string;
  muslimPosition: { x: number; y: number };
  quraishPosition: { x: number; y: number };
  showWells?: boolean;
  showCombat?: boolean;
  showVictory?: boolean;
  keyPoint: string;
}

const battlePhases: BattlePhase[] = [
  {
    id: "march",
    title: "The March",
    subtitle: "Muslims depart Madinah",
    description: "The Muslim army of 313 men marched from Madinah towards Badr to intercept the Quraysh caravan. The Prophet ﷺ consulted with his companions, and the Ansar pledged their full support for the mission.",
    icon: Footprints,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500",
    muslimPosition: { x: 15, y: 75 },
    quraishPosition: { x: 85, y: 15 },
    keyPoint: "313 believers set out with firm faith"
  },
  {
    id: "wells",
    title: "The Wells",
    subtitle: "Strategic positioning",
    description: "Following the advice of Al-Hubab ibn al-Mundhir, the Muslims positioned themselves near the wells of Badr, denying the Quraysh access to water - a crucial strategic advantage that would prove decisive.",
    icon: Droplets,
    color: "text-blue-400",
    bgColor: "bg-blue-500",
    muslimPosition: { x: 45, y: 55 },
    quraishPosition: { x: 80, y: 20 },
    showWells: true,
    keyPoint: "Control of water secured"
  },
  {
    id: "arrival",
    title: "Armies Meet",
    subtitle: "Quraysh arrives at Badr",
    description: "The Quraysh army of approximately 1,000 warriors arrived at Badr. Despite being outnumbered 3 to 1, the Muslims held firm with their faith in Allah and prepared for the confrontation.",
    icon: Users,
    color: "text-orange-400",
    bgColor: "bg-orange-500",
    muslimPosition: { x: 45, y: 60 },
    quraishPosition: { x: 55, y: 25 },
    showWells: true,
    keyPoint: "Outnumbered but not outmatched"
  },
  {
    id: "duels",
    title: "Single Combat",
    subtitle: "Champions clash",
    description: "Three champions from each side met in single combat. Hamza, Ali, and Ubaydah faced Utbah, Shaybah, and al-Walid. The Muslim champions were victorious, boosting the morale of the believers.",
    icon: Swords,
    color: "text-amber-400",
    bgColor: "bg-amber-500",
    muslimPosition: { x: 45, y: 55 },
    quraishPosition: { x: 55, y: 30 },
    showCombat: true,
    keyPoint: "Muslim champions triumph"
  },
  {
    id: "battle",
    title: "The Battle",
    subtitle: "Divine assistance arrives",
    description: "The Prophet ﷺ threw a handful of pebbles towards the enemy, and the battle commenced. Allah sent angels to aid the believers, as mentioned in the Quran: 'You did not throw when you threw, but it was Allah who threw.'",
    icon: Flame,
    color: "text-red-400",
    bgColor: "bg-red-500",
    muslimPosition: { x: 48, y: 50 },
    quraishPosition: { x: 52, y: 35 },
    showCombat: true,
    keyPoint: "Angels descend to aid believers"
  },
  {
    id: "victory",
    title: "Victory",
    subtitle: "Islam's triumph",
    description: "The Muslims achieved a decisive victory. 70 Quraysh were killed including Abu Jahl, and 70 were captured. Only 14 Muslims were martyred. This victory established Islam's strength and changed history forever.",
    icon: Trophy,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500",
    muslimPosition: { x: 50, y: 45 },
    quraishPosition: { x: 90, y: 10 },
    showVictory: true,
    keyPoint: "A turning point in Islamic history"
  }
];

const keyFigures = {
  muslim: [
    { name: "Prophet Muhammad ﷺ", role: "Commander" },
    { name: "Hamza ibn Abdul-Muttalib", role: "Champion" },
    { name: "Ali ibn Abi Talib", role: "Champion" },
    { name: "Abu Bakr al-Siddiq", role: "Advisor" },
  ],
  quraysh: [
    { name: "Abu Jahl", role: "Leader (killed)" },
    { name: "Utbah ibn Rabi'ah", role: "Champion (killed)" },
    { name: "Umayyah ibn Khalaf", role: "Leader (killed)" },
  ]
};

export default function BattleOfBadr() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const phase = battlePhases[selectedPhase];
  const PhaseIcon = phase.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="p-4 md:p-6">
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

      <main className="container mx-auto px-4 pb-12">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 via-orange-300 to-amber-200 bg-clip-text text-transparent mb-2">
            Battle of Badr
          </h1>
          <p className="text-amber-300/80 text-sm">17th Ramadan, 2 AH</p>
        </div>

        {/* Main Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-7xl mx-auto">
          
          {/* Left Panel - Clickable Phase Icons */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Card className="bg-white/5 backdrop-blur border-white/10 p-3">
              <h3 className="text-sm font-semibold text-white/70 mb-3 px-2">Battle Phases</h3>
              <div className="space-y-2">
                {battlePhases.map((p, index) => {
                  const Icon = p.icon;
                  const isSelected = index === selectedPhase;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPhase(index)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-left group ${
                        isSelected 
                          ? `${p.bgColor} text-white shadow-lg` 
                          : "bg-white/5 hover:bg-white/10 text-white/80"
                      }`}
                      data-testid={`button-phase-${p.id}`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isSelected ? "bg-white/20" : "bg-white/10 group-hover:bg-white/15"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{p.title}</p>
                        <p className={`text-xs truncate ${isSelected ? "text-white/80" : "text-white/50"}`}>
                          {p.subtitle}
                        </p>
                      </div>
                      {isSelected && (
                        <ChevronRight className="w-4 h-4 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Center - Interactive Battlefield */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Card className="bg-white/5 backdrop-blur border-white/10 overflow-hidden">
              {/* Battlefield Canvas */}
              <div className="relative h-[350px] md:h-[400px] bg-gradient-to-b from-slate-700 via-slate-600 to-slate-700">
                {/* Grid overlay for tactical feel */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Direction indicators */}
                <div className="absolute top-3 right-3 text-xs text-white/40 font-medium">
                  Makkah →
                </div>
                <div className="absolute bottom-3 left-3 text-xs text-white/40 font-medium">
                  ← Madinah
                </div>

                {/* Wells indicator */}
                {phase.showWells && (
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer"
                    data-testid="button-wells"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-500/30 border-2 border-blue-400/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Droplets className="w-6 h-6 text-blue-300" />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-blue-300 whitespace-nowrap font-medium">
                      Wells of Badr
                    </span>
                  </button>
                )}

                {/* Combat indicator */}
                {phase.showCombat && (
                  <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-14 h-14 rounded-full bg-orange-500/40 border-2 border-orange-400 flex items-center justify-center animate-pulse">
                      <Swords className="w-7 h-7 text-orange-200" />
                    </div>
                  </div>
                )}

                {/* Victory glow */}
                {phase.showVictory && (
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 via-transparent to-transparent pointer-events-none" />
                )}

                {/* Muslim Army - Clickable */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="absolute transition-all duration-700 ease-out z-20 group cursor-pointer"
                  style={{ 
                    left: `${phase.muslimPosition.x}%`, 
                    top: `${phase.muslimPosition.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                  data-testid="button-muslim-army"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-emerald-300 shadow-lg shadow-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Flag className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-2 bg-emerald-500/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-white">Muslims</span>
                    </div>
                    <span className="text-[10px] text-emerald-300 mt-0.5">313</span>
                  </div>
                </button>

                {/* Quraysh Army - Clickable */}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="absolute transition-all duration-700 ease-out z-20 group cursor-pointer"
                  style={{ 
                    left: `${phase.quraishPosition.x}%`, 
                    top: `${phase.quraishPosition.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                  data-testid="button-quraysh-army"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-400 to-red-600 border-2 border-red-300 shadow-lg shadow-red-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Flag className="w-7 h-7 text-white" />
                    </div>
                    <div className="mt-2 bg-red-500/90 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-white">Quraysh</span>
                    </div>
                    <span className="text-[10px] text-red-300 mt-0.5">~1000</span>
                  </div>
                </button>

                {/* Current Phase Badge */}
                <div className={`absolute top-3 left-3 ${phase.bgColor} px-3 py-1.5 rounded-full flex items-center gap-2`}>
                  <PhaseIcon className="w-4 h-4 text-white" />
                  <span className="text-sm font-semibold text-white">{phase.title}</span>
                </div>
              </div>

              {/* Phase Info Bar */}
              <div className="p-4 bg-white/5 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full ${phase.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <PhaseIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{phase.title}</h3>
                    <p className="text-sm text-white/60">{phase.keyPoint}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Panel - Details */}
          <div className="lg:col-span-3 order-3">
            <Card className="bg-white/5 backdrop-blur border-white/10 p-4">
              <div className={`w-12 h-12 rounded-xl ${phase.bgColor} flex items-center justify-center mb-4`}>
                <PhaseIcon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-1">{phase.title}</h3>
              <p className={`text-sm ${phase.color} mb-3`}>{phase.subtitle}</p>
              
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                {phase.description}
              </p>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-white/50 mb-1">Key Insight</p>
                <p className={`text-sm font-medium ${phase.color}`}>{phase.keyPoint}</p>
              </div>

              {/* Key Figures Toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full mt-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors"
                data-testid="button-toggle-figures"
              >
                <span className="text-sm font-medium text-white">
                  {showDetails ? "Hide" : "View"} Key Figures
                </span>
              </button>

              {showDetails && (
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs text-emerald-400 font-semibold mb-2">Muslim Leaders</p>
                    <div className="space-y-1.5">
                      {keyFigures.muslim.map((f) => (
                        <div key={f.name} className="flex justify-between items-center p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
                          <span className="text-xs text-white">{f.name}</span>
                          <span className="text-[10px] text-emerald-400">{f.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-red-400 font-semibold mb-2">Quraysh Leaders</p>
                    <div className="space-y-1.5">
                      {keyFigures.quraysh.map((f) => (
                        <div key={f.name} className="flex justify-between items-center p-2 rounded bg-red-500/10 border border-red-500/20">
                          <span className="text-xs text-white">{f.name}</span>
                          <span className="text-[10px] text-red-400">{f.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => setSelectedPhase(0)}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-colors cursor-pointer"
              data-testid="stat-muslim-fighters"
            >
              <p className="text-2xl font-bold text-emerald-400">313</p>
              <p className="text-xs text-white/60">Muslim Fighters</p>
            </button>
            <button
              onClick={() => setSelectedPhase(2)}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center hover:bg-red-500/20 hover:border-red-500/30 transition-colors cursor-pointer"
              data-testid="stat-quraysh-army"
            >
              <p className="text-2xl font-bold text-red-400">~1000</p>
              <p className="text-xs text-white/60">Quraysh Army</p>
            </button>
            <button
              onClick={() => setSelectedPhase(5)}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center hover:bg-amber-500/20 hover:border-amber-500/30 transition-colors cursor-pointer"
              data-testid="stat-martyrs"
            >
              <p className="text-2xl font-bold text-amber-400">14</p>
              <p className="text-xs text-white/60">Muslim Martyrs</p>
            </button>
            <button
              onClick={() => setSelectedPhase(5)}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center hover:bg-yellow-500/20 hover:border-yellow-500/30 transition-colors cursor-pointer"
              data-testid="stat-quraysh-killed"
            >
              <p className="text-2xl font-bold text-yellow-400">70</p>
              <p className="text-xs text-white/60">Quraysh Killed</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
