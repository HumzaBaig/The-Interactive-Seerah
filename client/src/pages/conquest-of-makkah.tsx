import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Scale, Users, Moon, Heart, Trash2, Star, ChevronUp } from "lucide-react";

interface KeyFigure {
  name: string;
  role: string;
  side: "muslim" | "quraysh";
}

const keyFigures: KeyFigure[] = [
  { name: "Prophet Muhammad ﷺ", role: "Commander - entered humbly with head bowed", side: "muslim" },
  { name: "Abu Sufyan", role: "Quraysh leader - accepted Islam before the conquest", side: "muslim" },
  { name: "Khalid ibn al-Walid", role: "Led the right flank - faced brief resistance", side: "muslim" },
  { name: "Zubayr ibn al-Awwam", role: "Led the left flank entering Makkah", side: "muslim" },
  { name: "Abbas ibn Abdul-Muttalib", role: "Interceded for Abu Sufyan's safety", side: "muslim" },
  { name: "Abu Bakr as-Siddiq", role: "His father Abu Quhafa accepted Islam", side: "muslim" },
  { name: "Hind bint Utbah", role: "Wife of Abu Sufyan - accepted Islam", side: "muslim" },
];

const battleStages = [
  {
    id: "violation",
    title: "Treaty Violation",
    location: "Makkah",
    description: "The Quraysh and their allies Banu Bakr attacked Banu Khuza'ah, who were allied with the Muslims, killing members who had sought refuge in the Sacred Sanctuary. This was a clear violation of the Treaty of Hudaybiyyah. Banu Khuza'ah sent a delegation to the Prophet ﷺ seeking help.",
    icon: Scale
  },
  {
    id: "preparation",
    title: "The Secret March",
    location: "From Madinah",
    description: "The Prophet ﷺ secretly prepared an army of 10,000 - the largest Muslim force ever assembled. He asked Allah to blind the Quraysh from any news until the Muslims arrived. When Abu Sufyan came to renew the treaty, he was not received. The army marched during Ramadan, with each tribe lighting fires at night.",
    icon: Users
  },
  {
    id: "abusufyan",
    title: "Abu Sufyan's Conversion",
    location: "Marr al-Zahran",
    description: "At Marr al-Zahran, the Prophet's uncle Abbas brought Abu Sufyan to the Muslim camp. Seeing the 10,000 campfires, Abu Sufyan realized resistance was futile. The Prophet ﷺ offered amnesty: 'Whoever enters Abu Sufyan's house is safe, whoever closes their door is safe, whoever enters the Haram is safe.'",
    icon: Moon
  },
  {
    id: "entry",
    title: "The Peaceful Entry",
    location: "Makkah",
    description: "The Prophet ﷺ entered Makkah on 20th Ramadan, 8 AH, with his head bowed so low in humility that his beard nearly touched his camel. He recited Surah Al-Fath (The Victory). There was minimal resistance except at Khandama where Khalid's force killed 12 opponents. The city was taken with almost no bloodshed.",
    icon: Heart
  },
  {
    id: "purification",
    title: "Purifying the Ka'bah",
    location: "Sacred Mosque",
    description: "The Prophet ﷺ entered the Ka'bah and destroyed 360 idols, reciting: 'Truth has come and falsehood has vanished. Verily, falsehood is bound to vanish.' (17:81). He ordered all images erased except, reportedly, one of Ibrahim and Ismail. Bilal climbed atop the Ka'bah to give the first adhan in the Sacred Mosque.",
    icon: Trash2
  },
  {
    id: "amnesty",
    title: "General Amnesty",
    location: "Makkah",
    description: "Standing at the Ka'bah door, the Prophet ﷺ addressed the Quraysh who feared retribution. He asked: 'What do you think I will do with you?' They replied: 'Good, a noble brother and nephew.' He declared: 'I say as Yusuf said to his brothers - no blame on you today. Go, you are free.' Even Hind, who had mutilated Hamza, was forgiven.",
    icon: Star
  }
];

export default function ConquestOfMakkah() {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

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
            <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-clip-text text-transparent pb-3">
              Conquest of Makkah
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The peaceful liberation of the Sacred City - Truth triumphs and idols fall
          </p>
          <p className="text-sm text-slate-300/80 mt-2">20th Ramadan, 8 AH</p>
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
                  ? "bg-slate-400 scale-125"
                  : index < currentStage
                  ? "bg-slate-400/50"
                  : "bg-white/30"
              }`}
              data-testid={`button-stage-${index}`}
            />
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
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

            {currentStage === 3 && (
              <div className="mt-6">
                <Button
                  onClick={() => setShowFigures(!showFigures)}
                  variant="outline"
                  className="w-full bg-yellow-500/20 border-yellow-400/50 text-yellow-200 hover:bg-yellow-500/30 hover:text-yellow-100"
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
                            ? "bg-gradient-to-r from-emerald-500/30 to-emerald-600/20 border border-emerald-400/50"
                            : "bg-white/5 hover:bg-white/10 border border-transparent"
                        }`}
                        data-testid={`button-figure-${figure.name}`}
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-emerald-200">
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
                  <p className="text-2xl font-bold text-emerald-400">10,000</p>
                  <p className="text-xs text-white/60">Muslim Army</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-400">360</p>
                  <p className="text-xs text-white/60">Idols Destroyed</p>
                </div>
                <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-400">2</p>
                  <p className="text-xs text-white/60">Muslim Casualties</p>
                </div>
                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-400">12</p>
                  <p className="text-xs text-white/60">Quraysh Casualties</p>
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
