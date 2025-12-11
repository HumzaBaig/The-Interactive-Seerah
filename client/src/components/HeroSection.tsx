export default function HeroSection() {
  return (
    <section className="relative py-16 flex items-center justify-center bg-background border-b overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="islamic-star" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#f97316" strokeWidth="0.8">
                <polygon points="40,5 47,20 63,20 50,30 55,47 40,37 25,47 30,30 17,20 33,20" />
                <polygon points="40,5 47,20 63,20 50,30 55,47 40,37 25,47 30,30 17,20 33,20" transform="rotate(45 40 40)" />
                <circle cx="40" cy="40" r="8" />
                <circle cx="40" cy="40" r="25" />
                <line x1="0" y1="40" x2="15" y2="40" />
                <line x1="65" y1="40" x2="80" y2="40" />
                <line x1="40" y1="0" x2="40" y2="15" />
                <line x1="40" y1="65" x2="40" y2="80" />
                <line x1="5" y1="5" x2="17" y2="17" />
                <line x1="63" y1="5" x2="75" y2="17" />
                <line x1="5" y1="75" x2="17" y2="63" />
                <line x1="63" y1="75" x2="75" y2="63" />
              </g>
            </pattern>
            <pattern id="arabesque" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#f97316" strokeWidth="0.6">
                <path d="M60,10 Q80,30 60,60 Q40,30 60,10" />
                <path d="M60,10 Q80,30 60,60 Q40,30 60,10" transform="rotate(90 60 60)" />
                <path d="M60,10 Q80,30 60,60 Q40,30 60,10" transform="rotate(180 60 60)" />
                <path d="M60,10 Q80,30 60,60 Q40,30 60,10" transform="rotate(270 60 60)" />
                <circle cx="60" cy="60" r="15" />
                <circle cx="60" cy="60" r="5" />
                <path d="M20,20 Q60,0 100,20 Q120,60 100,100 Q60,120 20,100 Q0,60 20,20" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-star)" />
          <rect width="100%" height="100%" fill="url(#arabesque)" opacity="0.4" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display">The Interactive Seerah</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An Interactive Journey Through the Life of Prophet Muhammad ﷺ
          </p>
        </div>
      </div>
    </section>
  );
}
