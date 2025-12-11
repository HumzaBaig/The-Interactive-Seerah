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
            <pattern id="islamic-weave" x="0" y="0" width="48" height="42" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="hsl(var(--accent))" strokeWidth="0.4">
                <polygon points="24,3 28,6 28,12 24,15 20,12 20,6" />
                <polygon points="12,12 16,15 16,21 12,24 8,21 8,15" />
                <polygon points="36,12 40,15 40,21 36,24 32,21 32,15" />
                <polygon points="24,21 28,24 28,30 24,33 20,30 20,24" />
                <polygon points="0,12 4,15 4,21 0,24 -4,21 -4,15" />
                <polygon points="48,12 52,15 52,21 48,24 44,21 44,15" />
                <polygon points="12,30 16,33 16,39 12,42 8,39 8,33" />
                <polygon points="36,30 40,33 40,39 36,42 32,39 32,33" />
                <polygon points="0,30 4,33 4,39 0,42 -4,39 -4,33" />
                <polygon points="48,30 52,33 52,39 48,42 44,39 44,33" />
                <polygon points="24,7 26,8.5 26,10.5 24,12 22,10.5 22,8.5" />
                <polygon points="12,16 14,17.5 14,19.5 12,21 10,19.5 10,17.5" />
                <polygon points="36,16 38,17.5 38,19.5 36,21 34,19.5 34,17.5" />
                <polygon points="24,25 26,26.5 26,28.5 24,30 22,28.5 22,26.5" />
                <path d="M24,3 L24,0 M24,15 L24,21 M24,33 L24,42" />
                <path d="M12,12 L12,0 M12,24 L12,30 M12,42 L12,48" />
                <path d="M36,12 L36,0 M36,24 L36,30 M36,42 L36,48" />
                <path d="M0,12 L0,0 M0,24 L0,30 M0,42 L0,48" />
                <path d="M48,12 L48,0 M48,24 L48,30 M48,42 L48,48" />
                <path d="M20,6 L16,9 M28,6 L32,9" />
                <path d="M8,15 L4,12 M16,15 L20,12" />
                <path d="M32,15 L28,12 M40,15 L44,12" />
                <path d="M20,24 L16,21 M28,24 L32,21" />
                <path d="M8,33 L4,30 M16,33 L20,30" />
                <path d="M32,33 L28,30 M40,33 L44,30" />
                <path d="M20,12 L12,12 M28,12 L36,12" />
                <path d="M8,21 L0,21 M16,21 L20,21 M28,21 L32,21 M40,21 L48,21" />
                <path d="M20,30 L12,30 M28,30 L36,30" />
                <path d="M8,39 L0,39 M16,39 L20,39 M28,39 L32,39 M40,39 L48,39" />
                <polygon points="24,9 25.5,10 25.5,11.5 24,12.5 22.5,11.5 22.5,10" />
                <polygon points="12,18 13.5,19 13.5,20.5 12,21.5 10.5,20.5 10.5,19" />
                <polygon points="36,18 37.5,19 37.5,20.5 36,21.5 34.5,20.5 34.5,19" />
                <polygon points="24,27 25.5,28 25.5,29.5 24,30.5 22.5,29.5 22.5,28" />
                <polygon points="0,18 1.5,19 1.5,20.5 0,21.5 -1.5,20.5 -1.5,19" />
                <polygon points="48,18 49.5,19 49.5,20.5 48,21.5 46.5,20.5 46.5,19" />
                <polygon points="12,36 13.5,37 13.5,38.5 12,39.5 10.5,38.5 10.5,37" />
                <polygon points="36,36 37.5,37 37.5,38.5 36,39.5 34.5,38.5 34.5,37" />
                <circle cx="24" cy="18" r="1" />
                <circle cx="6" cy="18" r="0.8" />
                <circle cx="42" cy="18" r="0.8" />
                <circle cx="18" cy="9" r="0.8" />
                <circle cx="30" cy="9" r="0.8" />
                <circle cx="18" cy="27" r="0.8" />
                <circle cx="30" cy="27" r="0.8" />
                <circle cx="6" cy="36" r="0.8" />
                <circle cx="42" cy="36" r="0.8" />
                <circle cx="24" cy="36" r="1" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-weave)" />
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
