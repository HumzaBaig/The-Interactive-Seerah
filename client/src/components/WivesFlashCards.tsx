import { useState } from "react";
import { wivesData, WifeCard } from "@/data/wives-data";
import { Card } from "@/components/ui/card";

function FlashCard({ wife }: { wife: WifeCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 cursor-pointer h-64"
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid={`flashcard-${wife.id}`}
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
          className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/15 border-pink-500/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold">{wife.name}</h3>
            <p className="text-sm text-muted-foreground">{wife.title}</p>
            <p className="text-xs text-muted-foreground">Married: {wife.yearMarried}</p>
            <p className="text-xs text-pink-600 dark:text-pink-400 mt-4">Click to read bio</p>
          </div>
        </Card>

        <Card
          className="absolute inset-0 backface-hidden flex flex-col p-5 bg-card overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="font-semibold text-sm mb-2">{wife.name}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {wife.bio}
          </p>
          <p className="text-xs text-pink-600 dark:text-pink-400 mt-3">Click to flip back</p>
        </Card>
      </div>
    </div>
  );
}

export default function WivesFlashCards() {
  return (
    <section id="wives-section" className="py-12 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Mothers of the Believers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about the blessed wives of Prophet Muhammad ﷺ. Click on each card to reveal their biography.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {wivesData.map((wife) => (
              <div key={wife.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                <FlashCard wife={wife} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
