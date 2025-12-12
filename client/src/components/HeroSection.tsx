import { ChevronDown } from "lucide-react";
import islamicPattern from "@assets/image_1765500336350.png";

export default function HeroSection() {
  const scrollToTimeline = () => {
    const element = document.getElementById('timeline-section');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-56px)] md:min-h-0 md:py-32 py-24 flex items-center justify-center overflow-hidden border-b">
      {/* Islamic geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.4]"
        style={{
          backgroundImage: `url(${islamicPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Light mode: invert the pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] dark:opacity-0"
        style={{
          backgroundImage: `url(${islamicPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'invert(1)'
        }}
      />
      
      {/* Sunrise Gradient - concentrated at bottom, reaching up to title */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% 120%, rgba(180, 130, 20, 0.15) 0%, rgba(160, 110, 15, 0.08) 40%, transparent 70%),
            radial-gradient(ellipse 120% 50% at 50% 130%, rgba(140, 100, 10, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at center, hsl(var(--accent) / 0.02) 0%, hsl(var(--background)) 60%)
          `
        }}
      />
      
      {/* Dark amber glow radiating from bottom to title */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-[800px] h-[500px] md:w-[1200px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 90% at 50% 70%, rgba(160, 110, 20, 0.08) 0%, rgba(140, 90, 15, 0.04) 50%, transparent 80%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl flex flex-col items-center justify-center md:block">
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
      
      {/* Mobile-only explore button */}
      <button
        onClick={scrollToTimeline}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 md:hidden"
        data-testid="button-explore-timeline"
      >
        <span 
          className="text-sm font-medium text-amber-700 dark:text-amber-500 text-center"
          style={{ letterSpacing: '0.05em' }}
        >
          Explore the Timeline & More
        </span>
        <ChevronDown className="w-5 h-5 text-amber-700 dark:text-amber-500 animate-bounce" />
      </button>
    </section>
  );
}
