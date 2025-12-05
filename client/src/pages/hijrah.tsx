import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Moon, Mountain, Navigation, Home, Landmark, Users, ChevronUp } from "lucide-react";

interface Companion {
  name: string;
  role: string;
}

const keyCompanions: Companion[] = [
  { name: "Abu Bakr as-Siddiq (RA)", role: "Accompanied the Prophet ﷺ throughout the entire journey, providing provisions and camels." },
  { name: "Ali ibn Abi Talib (RA)", role: "Slept in the Prophet's ﷺ bed on the night of emigration, risking his life to facilitate the escape." },
  { name: "Asma bint Abi Bakr (RA)", role: "Brought food to the cave and tore her belt to tie the provisions, earning the title 'She of the Two Belts'." },
  { name: "Abdullah ibn Abi Bakr (RA)", role: "Gathered intelligence in Makkah and reported news to them each night at the cave." },
  { name: "Amir ibn Fuhayrah (RA)", role: "Abu Bakr's freed slave who tended sheep near the cave to provide milk and cover their tracks." },
  { name: "Abdullah ibn Urayqit", role: "Expert guide hired to lead them through the lesser-known coastal route to Madinah." },
];

const journeyStages = [
  {
    id: "plot",
    title: "The Plot Against the Prophet",
    location: "Dar an-Nadwah, Makkah",
    description: "The Quraysh leaders gathered at Dar an-Nadwah and decided to select one young man from each tribe to simultaneously strike the Prophet ﷺ. This way, the responsibility for his blood would be divided among all tribes, making retaliation impossible for Banu Hashim.",
    icon: Moon
  },
  {
    id: "escape",
    title: "The Night of Escape",
    location: "The Prophet's House, Makkah",
    description: "Allah revealed the plot to His Messenger ﷺ. That night, the Prophet ﷺ asked Ali (RA) to sleep in his bed wearing his green cloak. As the assassins surrounded the house, the Prophet ﷺ walked out reciting Surah Ya-Sin, and Allah veiled their eyes so they could not see him.",
    icon: Moon
  },
  {
    id: "cave",
    title: "Cave of Thawr",
    location: "Mount Thawr, South of Makkah",
    description: "The Prophet ﷺ and Abu Bakr (RA) hid in the Cave of Thawr for three nights. When the Quraysh trackers reached the cave entrance, Abu Bakr feared for the Prophet ﷺ. The Prophet ﷺ consoled him: 'What do you think of two when Allah is their third?'",
    icon: Mountain
  },
  {
    id: "journey",
    title: "The Desert Journey",
    location: "The Coastal Route",
    description: "After three days, they began the journey along the lesser-known coastal route with their guide Abdullah ibn Urayqit. The journey covered approximately 400 kilometers through harsh desert terrain, taking about eight days.",
    icon: Navigation
  },
  {
    id: "quba",
    title: "Arrival at Quba",
    location: "Quba, outskirts of Madinah",
    description: "The Prophet ﷺ arrived at Quba on Monday, 8th of Rabi' al-Awwal. He stayed for four days and established Masjid Quba - the first mosque built in Islam. The Prophet ﷺ later said that whoever purifies himself at his home, and then prays two rak'ahs in Quba will have the reward equal of an Umrah.",
    icon: Landmark
  },
  {
    id: "madinah",
    title: "Entry into Madinah",
    location: "Madinah al-Munawwarah",
    description: "The Prophet ﷺ entered Madinah on Friday, 12th of Rabi' al-Awwal. The Ansar came out singing 'Tala'al-Badru Alayna'. His camel, al-Qaswa, knelt at the spot where Masjid an-Nabawi would be built. This day marks the beginning of the Islamic calendar.",
    icon: Home
  }
];

export default function Hijrah() {
  const [currentStage, setCurrentStage] = useState(0);
  const [showCompanions, setShowCompanions] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState<number | null>(null);

  const nextStage = () => {
    if (currentStage < journeyStages.length - 1) {
      setCurrentStage(currentStage + 1);
      setShowCompanions(false);
      setSelectedCompanion(null);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      setShowCompanions(false);
      setSelectedCompanion(null);
    }
  };

  const stage = journeyStages[currentStage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-emerald-950 to-teal-950 text-white overflow-hidden">

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
            <h1 className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200 bg-clip-text text-transparent pb-3">
              The Hijrah
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The Migration from Makkah to Madinah - A Journey That Changed History
          </p>
          <p className="text-sm text-emerald-300/80 mt-2">1 AH (After Hijrah)</p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {journeyStages.map((s, index) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentStage(index);
                setShowCompanions(false);
                setSelectedCompanion(null);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStage
                  ? "bg-emerald-400 scale-125"
                  : index < currentStage
                  ? "bg-emerald-400/50"
                  : "bg-white/30"
              }`}
              data-testid={`button-stage-${index}`}
            />
          ))}
        </div>

        <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <stage.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
                <p className="text-emerald-300/80 text-sm">{stage.location}</p>
              </div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {stage.description}
            </p>

            {currentStage === 3 && (
              <div className="mt-6">
                <Button
                  onClick={() => setShowCompanions(!showCompanions)}
                  variant="outline"
                  className="w-full bg-emerald-500/20 border-emerald-400/50 text-emerald-200 hover:bg-emerald-500/30 hover:text-emerald-100"
                  data-testid="button-toggle-companions"
                >
                  <Users className="w-4 h-4 mr-2" />
                  {showCompanions ? "Hide" : "View"} Key Companions of the Hijrah
                  <ChevronUp className={`w-4 h-4 ml-2 transition-transform ${showCompanions ? "rotate-180" : ""}`} />
                </Button>

                {showCompanions && (
                  <div className="mt-6 space-y-3">
                    {keyCompanions.map((companion, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCompanion(selectedCompanion === index ? null : index)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedCompanion === index
                            ? "bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border border-emerald-400/50"
                            : "bg-white/5 hover:bg-white/10 border border-transparent"
                        }`}
                        data-testid={`button-companion-${index}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">{companion.name}</h4>
                            {selectedCompanion === index && (
                              <p className="text-white/70 text-sm mt-2">{companion.role}</p>
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
