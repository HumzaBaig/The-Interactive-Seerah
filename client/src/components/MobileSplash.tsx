interface MobileSplashProps {
  isVisible: boolean;
}

export default function MobileSplash({ isVisible }: MobileSplashProps) {
  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center md:hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Sunrise Gradient Background */}
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
      
      {/* Sunrise glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(251, 191, 36, 0.12) 0%, rgba(251, 191, 36, 0.05) 40%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />

      <div className="relative z-10 text-center px-6 space-y-6">
        <h1 
          className={`text-4xl font-semibold font-display transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{
            letterSpacing: '0.02em',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
        >
          The Interactive Seerah
        </h1>
        
        {/* Gold light streak underline */}
        <div className={`flex justify-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="relative">
            <div 
              className="absolute inset-0 -inset-y-1"
              style={{
                background: 'linear-gradient(90deg, transparent 10%, #fbbf24 35%, #fbbf24 65%, transparent 90%)',
                filter: 'blur(8px)',
                opacity: 0.25
              }}
            />
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
        
        <p 
          className={`text-lg text-muted-foreground/80 leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
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
  );
}
