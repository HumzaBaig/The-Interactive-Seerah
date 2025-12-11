import { useState, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Navigation, Users, Mountain, Scroll, Star, Heart, ChevronUp } from "lucide-react";
import { StyledText } from "@/components/StyledText";

interface SermonPoint {
  title: string;
  content: string;
}

const sermonPoints: SermonPoint[] = [
  { title: "Sanctity of Life", content: "Your blood and property are sacred until you meet your Lord." },
  { title: "Abolition of Usury", content: "All usury is abolished. You shall have your capital sums." },
  { title: "Rights of Women", content: "Treat women well, for they are your partners and helpers." },
  { title: "Equality of Humanity", content: "An Arab has no superiority over a non-Arab except by piety." },
  { title: "Brotherhood", content: "All Muslims are brothers. Nothing of a brother is lawful except what he gives willingly." },
  { title: "Trust in Quran & Sunnah", content: "I leave you the Book of Allah and my Sunnah. Hold fast to them." },
];

const pilgrimageStages = [
  {
    id: "departure",
    title: "Departure from Madinah",
    location: "Madinah",
    description: "On 25th Dhul Qa'dah, 10 AH, the Prophet ﷺ set out for Hajj. News spread throughout Arabia, and people came from every direction to perform Hajj with him. This was to be his first and only Hajj after the Migration, and over 100,000 Muslims would accompany him on this momentous journey.",
    icon: Navigation
  },
  {
    id: "makkah",
    title: "Arrival in Makkah",
    location: "Makkah",
    description: "The Prophet ﷺ entered Makkah on Sunday, 4th Dhul Hijjah. He performed Tawaf around the Ka'bah and Sa'i between Safa and Marwa. He taught every ritual of Hajj by example, saying: 'Take your rituals from me, for I do not know whether I will perform Hajj after this year.' Every action became a teaching for generations.",
    icon: Users
  },
  {
    id: "arafat",
    title: "The Day of Arafat",
    location: "Mount Arafat",
    description: "On 9th Dhul Hijjah, over 100,000 Muslims gathered at Arafat. After Dhuhr, the Prophet ﷺ delivered his historic Farewell Sermon from atop his camel. His voice echoed across the valley as he addressed all of humanity with fundamental principles of justice, equality, and human rights that would resonate through the ages.",
    icon: Mountain
  },
  {
    id: "sermon",
    title: "The Farewell Sermon",
    location: "Mount Arafat",
    description: "The Prophet ﷺ proclaimed the sanctity of life, property, and honor. He abolished usury and blood feuds, established women's rights, declared all humans equal regardless of race, and commanded holding fast to the Quran and Sunnah. He asked: 'Have I conveyed the message?' The crowd roared: 'Yes!' He said: 'O Allah, bear witness!'",
    icon: Scroll
  },
  {
    id: "perfection",
    title: "Perfection of the Religion",
    location: "Arafat",
    description: "On this day, Allah revealed: 'Today I have perfected your religion for you, completed My favor upon you, and have chosen Islam as your religion.' (5:3) When Umar heard this verse, he wept, understanding it signaled the end was near. The mission that began in Cave Hira was now complete.",
    icon: Star
  },
  {
    id: "completion",
    title: "Completion of the Rites",
    location: "Mina and Makkah",
    description: "The Prophet ﷺ completed all the rites: staying at Muzdalifah, stoning the Jamarat at Mina, sacrificing animals, and performing the farewell Tawaf. He said: 'Let those present convey to those absent.' This Hajj established the rituals that billions of Muslims would follow for all time, and it was his final public address to the Ummah.",
    icon: Heart
  }
];

export default function FarewellPilgrimage() {
  const [currentStage, setCurrentStage] = useState(0);
  const [showSermon, setShowSermon] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

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
    if (currentStage < pilgrimageStages.length - 1) {
      setCurrentStage(currentStage + 1);
      setShowSermon(false);
      setSelectedPoint(null);
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      setShowSermon(false);
      setSelectedPoint(null);
    }
  };

  const stage = pilgrimageStages[currentStage];

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
              The Farewell Pilgrimage
            </h1>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The completion of the mission - The final sermon and perfection of the religion
          </p>
          <p className="text-sm text-slate-300/80 mt-2">Dhul Hijjah, 10 AH</p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {pilgrimageStages.map((s, index) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentStage(index);
                setShowSermon(false);
                setSelectedPoint(null);
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
              <StyledText>{stage.description}</StyledText>
            </p>

            {currentStage === 3 && (
              <div className="mt-6">
                <Button
                  onClick={() => setShowSermon(!showSermon)}
                  variant="outline"
                  className="w-full bg-purple-500/20 border-purple-400/50 text-purple-200 hover:bg-purple-500/30 hover:text-purple-100"
                  data-testid="button-toggle-sermon"
                >
                  {showSermon ? "Hide" : "Explore"} Key Points of the Sermon
                  <ChevronUp className={`w-4 h-4 ml-2 transition-transform ${showSermon ? "rotate-180" : ""}`} />
                </Button>

                {showSermon && (
                  <div className="mt-6 space-y-3">
                    {sermonPoints.map((point) => (
                      <button
                        key={point.title}
                        onClick={() => setSelectedPoint(selectedPoint === point.title ? null : point.title)}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedPoint === point.title
                            ? "bg-gradient-to-r from-purple-500/30 to-purple-600/20 border border-purple-400/50"
                            : "bg-white/5 hover:bg-white/10 border border-transparent"
                        }`}
                        data-testid={`button-point-${point.title}`}
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-purple-200">
                            {point.title}
                          </h4>
                          {selectedPoint === point.title && (
                            <p className="text-white/70 text-sm mt-2 italic">"{point.content}"</p>
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
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-purple-400">100,000+</p>
                  <p className="text-xs text-white/60">Pilgrims</p>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-purple-400">10 AH</p>
                  <p className="text-xs text-white/60">Year</p>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-purple-400">1</p>
                  <p className="text-xs text-white/60">Only Hajj</p>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-purple-400">5:3</p>
                  <p className="text-xs text-white/60">Final Verse</p>
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
                disabled={currentStage === pilgrimageStages.length - 1}
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
          Stage {currentStage + 1} of {pilgrimageStages.length}
        </div>
      </main>
    </div>
  );
}
