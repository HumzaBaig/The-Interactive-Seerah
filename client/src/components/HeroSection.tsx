export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden border-b">
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(var(--accent) / 0.15) 0%, hsl(var(--background)) 70%)'
        }}
      />
      
      <div className="absolute inset-0 opacity-[0.05]">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="islamic-weave" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="#d97706" strokeWidth="1.5">
                <polygon points="100,10 115,30 140,30 150,50 140,70 115,70 100,90 85,70 60,70 50,50 60,30 85,30" />
                <polygon points="100,10 115,30 140,30 150,50 140,70 115,70 100,90 85,70 60,70 50,50 60,30 85,30" transform="rotate(30 100 50)" />
                <polygon points="100,10 115,30 140,30 150,50 140,70 115,70 100,90 85,70 60,70 50,50 60,30 85,30" transform="rotate(60 100 50)" />
                
                <polygon points="100,110 115,130 140,130 150,150 140,170 115,170 100,190 85,170 60,170 50,150 60,130 85,130" />
                <polygon points="100,110 115,130 140,130 150,150 140,170 115,170 100,190 85,170 60,170 50,150 60,130 85,130" transform="rotate(30 100 150)" />
                <polygon points="100,110 115,130 140,130 150,150 140,170 115,170 100,190 85,170 60,170 50,150 60,130 85,130" transform="rotate(60 100 150)" />
                
                <line x1="50" y1="50" x2="50" y2="150" />
                <line x1="150" y1="50" x2="150" y2="150" />
                <line x1="50" y1="50" x2="0" y2="0" />
                <line x1="150" y1="50" x2="200" y2="0" />
                <line x1="50" y1="150" x2="0" y2="200" />
                <line x1="150" y1="150" x2="200" y2="200" />
                
                <polygon points="0,100 15,85 35,85 50,100 35,115 15,115" />
                <polygon points="0,100 15,85 35,85 50,100 35,115 15,115" transform="rotate(45 25 100)" />
                
                <polygon points="150,100 165,85 185,85 200,100 185,115 165,115" />
                <polygon points="150,100 165,85 185,85 200,100 185,115 165,115" transform="rotate(45 175 100)" />
                
                <polygon points="100,0 108,8 108,18 100,25 92,18 92,8" />
                <polygon points="100,175 108,183 108,193 100,200 92,193 92,183" />
                
                <line x1="50" y1="50" x2="100" y2="0" />
                <line x1="150" y1="50" x2="100" y2="0" />
                <line x1="50" y1="150" x2="100" y2="200" />
                <line x1="150" y1="150" x2="100" y2="200" />
                
                <line x1="0" y1="100" x2="50" y2="50" />
                <line x1="0" y1="100" x2="50" y2="150" />
                <line x1="200" y1="100" x2="150" y2="50" />
                <line x1="200" y1="100" x2="150" y2="150" />
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
