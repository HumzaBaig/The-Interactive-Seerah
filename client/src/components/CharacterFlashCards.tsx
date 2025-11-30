import { useState } from "react";
import { characterData, CharacterTrait } from "@/data/character-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FlashCard({ trait }: { trait: CharacterTrait }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentNarration, setCurrentNarration] = useState(0);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentNarration(prev => 
      prev === 0 ? trait.narrations.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentNarration(prev => 
      prev === trait.narrations.length - 1 ? 0 : prev + 1
    );
  };

  const narration = trait.narrations[currentNarration];

  return (
    <div
      className="perspective-1000 cursor-pointer h-80"
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid={`character-card-${trait.id}`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <Card
          className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-violet-500/10 to-violet-600/15 border-violet-500/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">{trait.trait}</h3>
            <p className="text-sm text-muted-foreground">
              {trait.narrations.length} narrations
            </p>
            <p className="text-xs text-violet-600 dark:text-violet-400 mt-4">Click to read narrations</p>
          </div>
        </Card>

        <Card
          className="absolute inset-0 backface-hidden flex flex-col p-5 bg-card"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="font-semibold text-sm mb-3 text-center">{trait.trait}</h4>
          
          <div className="flex-1 overflow-y-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              "{narration.text}"
            </p>
            <p className="text-xs text-violet-600 dark:text-violet-400 mt-3 italic">
              — {narration.source}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handlePrevious}
              data-testid={`prev-narration-${trait.id}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <span className="text-xs text-muted-foreground">
              {currentNarration + 1} / {trait.narrations.length}
            </span>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleNext}
              data-testid={`next-narration-${trait.id}`}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function CharacterFlashCards() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Noble Character
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the beautiful character traits of Prophet Muhammad ﷺ through authentic narrations. Click on each card and use the arrows to explore multiple narrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characterData.map((trait) => (
              <FlashCard key={trait.id} trait={trait} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
