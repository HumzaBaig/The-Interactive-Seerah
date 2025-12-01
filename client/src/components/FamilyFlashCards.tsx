import { useState } from "react";
import { familyData, FamilyCard } from "@/data/family-data";
import { Card } from "@/components/ui/card";

function FlashCard({ member }: { member: FamilyCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 cursor-pointer h-64"
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid={`family-card-${member.id}`}
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
          className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-sky-500/10 to-sky-600/15 border-sky-500/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.relation}</p>
            <p className="text-xs text-sky-600 dark:text-sky-400 mt-4">Click to read bio</p>
          </div>
        </Card>

        <Card
          className="absolute inset-0 backface-hidden flex flex-col p-5 bg-card overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="font-semibold text-sm mb-2">{member.name}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {member.bio}
          </p>
          <p className="text-xs text-sky-600 dark:text-sky-400 mt-3">Click to flip back</p>
        </Card>
      </div>
    </div>
  );
}

export default function FamilyFlashCards() {
  return (
    <section id="family-section" className="py-12 bg-muted/30 border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Close Family
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about the beloved family members of Prophet Muhammad ﷺ. Click on each card to reveal their biography.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {familyData.map((member) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <FlashCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
