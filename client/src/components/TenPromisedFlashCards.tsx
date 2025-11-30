import { useState } from "react";
import { tenPromisedData, CompanionCard } from "@/data/ten-promised-data";
import { Card } from "@/components/ui/card";

function FlashCard({ companion }: { companion: CompanionCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 cursor-pointer h-64"
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid={`companion-card-${companion.id}`}
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
          className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-amber-500/10 to-amber-600/15 border-amber-500/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold">{companion.name}</h3>
            <p className="text-sm text-muted-foreground">{companion.title}</p>
            <p className="text-xs text-amber-600 dark:text-amber-400 mt-4">Click to read bio</p>
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
          <p className="text-xs text-amber-600 dark:text-amber-400 mt-3">Click to flip back</p>
        </Card>
      </div>
    </div>
  );
}

export default function TenPromisedFlashCards() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Ten Promised Paradise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about the blessed companions whom the Prophet ﷺ gave glad tidings of Paradise. Click on each card to reveal their biography.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {tenPromisedData.map((companion) => (
              <div key={companion.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)]">
                <FlashCard companion={companion} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
