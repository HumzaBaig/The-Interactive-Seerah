import { useState } from "react";
import { companionsData, NotableCompanion } from "@/data/companions-data";
import { Card } from "@/components/ui/card";

function FlashCard({ companion }: { companion: NotableCompanion }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 cursor-pointer h-64"
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid={`notable-companion-card-${companion.id}`}
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
          className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-teal-500/10 to-teal-600/15 border-teal-500/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold">{companion.name}</h3>
            <p className="text-sm text-muted-foreground">{companion.title}</p>
            <p className="text-xs text-teal-600 dark:text-teal-400 mt-4">Click to read bio</p>
          </div>
        </Card>

        <Card
          className="absolute inset-0 backface-hidden flex flex-col p-5 bg-card overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="font-semibold text-sm mb-2">{companion.name}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {companion.bio}
          </p>
          <p className="text-xs text-teal-600 dark:text-teal-400 mt-3">Click to flip back</p>
        </Card>
      </div>
    </div>
  );
}

export default function CompanionsFlashCards() {
  const styledSaw = <span className="text-amber-600 dark:text-amber-400" style={{ textShadow: '0 0 6px rgba(217, 119, 6, 0.3)' }}>&#xFDFA;</span>;

  return (
    <section id="companions-section" className="py-12 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Notable Companions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about the distinguished companions of Prophet Muhammad {styledSaw} who shaped Islamic history. Click on each card to reveal their biography.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {companionsData.map((companion) => (
              <div key={companion.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                <FlashCard companion={companion} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
