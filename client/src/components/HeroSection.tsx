export default function HeroSection() {
  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden border-b">
      {/* Cinematic radial glow behind title */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 45%, rgba(251, 191, 36, 0.12) 0%, rgba(251, 191, 36, 0.06) 30%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at center, hsl(var(--accent) / 0.05) 0%, hsl(var(--background)) 70%)
          `
        }}
      />
      
      {/* Soft ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[800px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, rgba(251, 191, 36, 0.04) 40%, transparent 70%)',
          filter: 'blur(60px)'
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
              <div className="relative group">
                {/* Blur glow behind */}
                <div 
                  className="absolute inset-0 -inset-y-2"
                  style={{
                    background: 'linear-gradient(90deg, transparent 5%, #fbbf24 30%, #fbbf24 70%, transparent 95%)',
                    filter: 'blur(12px)',
                    opacity: 0.5
                  }}
                />
                {/* Main gradient bar */}
                <div 
                  className="relative w-36 h-[5px] rounded-full overflow-hidden"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, #d97706 15%, #f59e0b 35%, #fbbf24 50%, #f59e0b 65%, #d97706 85%, transparent 100%)'
                  }}
                >
                  {/* Shimmer animation */}
                  <div 
                    className="absolute inset-0 animate-shimmer"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                      backgroundSize: '200% 100%'
                    }}
                  />
                </div>
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
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
