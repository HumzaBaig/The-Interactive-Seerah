export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden border-b">
      {/* Rising Full Moon Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 120%, rgba(251, 191, 36, 0.25) 0%, rgba(251, 191, 36, 0.15) 20%, rgba(245, 158, 11, 0.08) 40%, transparent 70%),
            radial-gradient(ellipse 100% 80% at 50% 130%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at center, hsl(var(--accent) / 0.1) 0%, hsl(var(--background)) 70%)
          `
        }}
      />
      
      {/* Moon glow effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(251, 191, 36, 0.08) 30%, rgba(245, 158, 11, 0.03) 50%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

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
