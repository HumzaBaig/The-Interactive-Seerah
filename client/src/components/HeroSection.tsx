export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden border-b">
      {/* Sunrise Gradient - concentrated at bottom horizon */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 40% at 50% 140%, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.1) 30%, transparent 60%),
            radial-gradient(ellipse 120% 30% at 50% 150%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at center, hsl(var(--accent) / 0.03) 0%, hsl(var(--background)) 60%)
          `
        }}
      />
      
      {/* Sunrise glow at horizon */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3 w-[600px] h-[300px] md:w-[900px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(251, 191, 36, 0.12) 0%, rgba(251, 191, 36, 0.05) 40%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold font-display"
              style={{
                letterSpacing: '0.02em',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              The Interactive Seerah
            </h1>
            
            {/* Gold light streak underline */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Blur glow behind */}
                <div 
                  className="absolute inset-0 -inset-y-1"
                  style={{
                    background: 'linear-gradient(90deg, transparent 10%, #fbbf24 35%, #fbbf24 65%, transparent 90%)',
                    filter: 'blur(8px)',
                    opacity: 0.25
                  }}
                />
                {/* Main gradient bar - natural fade at ends */}
                <div 
                  className="relative w-36 h-[5px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, #d97706 20%, #f59e0b 35%, #fbbf24 50%, #f59e0b 65%, #d97706 80%, transparent 100%)',
                    maskImage: 'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground/80 mx-auto leading-relaxed text-center"
            style={{ maxWidth: '32ch' }}
          >
            An interactive journey through the life of<br />
            Prophet Muhammad{' '}
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
