export default function HeroSection() {
  return (
    <section className="relative py-16 flex items-center justify-center bg-gradient-to-b from-background to-accent/10 border-b overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="mosaic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="none" stroke="#f97316" strokeWidth="1" />
              <path d="M25 25 L75 25 L75 75 L25 75 Z" fill="none" stroke="#f97316" strokeWidth="0.5" />
              <path d="M50 0 L50 100" fill="none" stroke="#f97316" strokeWidth="0.5" />
              <path d="M0 50 L100 50" fill="none" stroke="#f97316" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="#f97316" strokeWidth="0.5" />
              <path d="M0 0 L25 25 M75 25 L100 0 M100 100 L75 75 M25 75 L0 100" fill="none" stroke="#f97316" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mosaic)" />
          <path d="M0 200 Q200 100 400 200 T800 200" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.5" />
          <path d="M0 150 Q200 250 400 150 T800 150" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
          <path d="M0 250 Q200 150 400 250 T800 250" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
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
