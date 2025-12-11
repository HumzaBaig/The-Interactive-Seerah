export default function HeroSection() {
  return (
    <section className="hero-section" data-testid="section-hero">
      <div className="hero-content fade-up">
        <h1 className="hero-title font-display" data-testid="text-hero-title">
          The Interactive Seerah
        </h1>
        <div className="gold-accent-line" aria-hidden="true"></div>
        <p className="hero-subtitle" data-testid="text-hero-subtitle">
          An interactive journey through the life of Prophet Muhammad <span className="salawat-glow">ﷺ</span>
        </p>
      </div>
    </section>
  );
}
