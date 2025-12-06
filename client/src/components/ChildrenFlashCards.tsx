import { useState } from "react";
import { childrenData, ChildCard } from "@/data/children-data";
import { Card } from "@/components/ui/card";

function FlashCard({ child }: { child: ChildCard }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isGrandchild = child.relation === "grandchild";
  
  const cardGradient = isGrandchild 
    ? "bg-gradient-to-br from-emerald-500/10 to-emerald-600/15 border-emerald-500/20"
    : "bg-gradient-to-br from-violet-500/10 to-violet-600/15 border-violet-500/20";
  
  const accentColor = isGrandchild
    ? "text-emerald-600 dark:text-emerald-400"
    : "text-violet-600 dark:text-violet-400";

  return (
    <div
      className="perspective-1000 cursor-pointer h-64"
      onClick={() => setIsFlipped(!isFlipped)}
      data-testid={`child-card-${child.id}`}
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
          className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 ${cardGradient}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold">{child.name}</h3>
            <p className="text-sm text-muted-foreground">
              {isGrandchild ? "Grandson of the Prophet ﷺ" : "Child of the Prophet ﷺ"}
            </p>
            {isGrandchild && child.father ? (
              <div className="text-xs text-muted-foreground space-y-0.5">
                <p>Father: {child.father}</p>
                <p>Mother: {child.mother}</p>
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">Mother: {child.mother}</p>
            )}
            <p className={`text-xs ${accentColor} mt-4`}>Click to read bio</p>
          </div>
        </Card>

        <Card
          className="absolute inset-0 backface-hidden flex flex-col p-5 bg-card overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="font-semibold text-sm mb-2">{child.name}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {child.bio}
          </p>
          <p className={`text-xs ${accentColor} mt-3`}>Click to flip back</p>
        </Card>
      </div>
    </div>
  );
}

export default function ChildrenFlashCards() {
  return (
    <section id="children-section" className="py-12 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">The Children of the Prophet ﷺ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about the blessed children of Prophet Muhammad ﷺ. Click on each card to reveal their biography.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:flex-wrap md:justify-center md:overflow-visible md:pb-0 md:gap-6">
            {childrenData.map((child) => (
              <div key={child.id} className="w-[260px] flex-shrink-0 snap-center md:w-[calc(50%-12px)] md:flex-shrink lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                <FlashCard child={child} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
