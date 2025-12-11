export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden border-b">
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--accent) / 0.15) 0%, hsl(var(--background)) 70%)'
        }}
      />
      
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="islamic-tessellation" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="currentColor" strokeWidth="0.6">
                <polygon points="60,10 75,20 75,40 60,50 45,40 45,20" />
                <polygon points="60,70 75,80 75,100 60,110 45,100 45,80" />
                <polygon points="30,40 45,50 45,70 30,80 15,70 15,50" />
                <polygon points="90,40 105,50 105,70 90,80 75,70 75,50" />
                <polygon points="0,40 15,50 15,70 0,80 -15,70 -15,50" />
                <polygon points="120,40 135,50 135,70 120,80 105,70 105,50" />
                <polygon points="60,40 68,45 68,55 60,60 52,55 52,45" />
                <path d="M60,10 L75,20 M60,10 L45,20" />
                <path d="M75,40 L75,80 M45,40 L45,80" />
                <path d="M60,50 L30,40 M60,50 L90,40" />
                <path d="M60,70 L30,80 M60,70 L90,80" />
                <path d="M45,20 L15,50 M75,20 L105,50" />
                <path d="M45,100 L15,70 M75,100 L105,70" />
                <path d="M0,80 L30,80 M90,80 L120,80" />
                <path d="M0,40 L30,40 M90,40 L120,40" />
                <circle cx="60" cy="60" r="3" />
                <circle cx="30" cy="60" r="2" />
                <circle cx="90" cy="60" r="2" />
                <circle cx="60" cy="30" r="2" />
                <circle cx="60" cy="90" r="2" />
                <circle cx="0" cy="60" r="2" />
                <circle cx="120" cy="60" r="2" />
                <circle cx="15" cy="35" r="1.5" />
                <circle cx="105" cy="35" r="1.5" />
                <circle cx="15" cy="85" r="1.5" />
                <circle cx="105" cy="85" r="1.5" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-tessellation)" className="text-foreground" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display">
              The Interactive Seerah
            </h1>
            <div className="flex justify-center">
              <div 
                className="w-20 h-[3px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, #d97706, #f59e0b, #fbbf24, #f59e0b, #d97706, transparent)',
                  boxShadow: '0 0 12px rgba(251, 191, 36, 0.5), 0 0 24px rgba(251, 191, 36, 0.3), 0 4px 16px rgba(251, 191, 36, 0.2)'
                }}
              />
            </div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/75 max-w-2xl mx-auto leading-relaxed">
            An interactive journey through the life of Prophet Muhammad{' '}
            <span 
              className="inline-block text-amber-600 dark:text-amber-400"
              style={{
                textShadow: '0 0 8px rgba(217, 119, 6, 0.4), 0 0 12px rgba(217, 119, 6, 0.2)'
              }}
            >
              ﷺ
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
