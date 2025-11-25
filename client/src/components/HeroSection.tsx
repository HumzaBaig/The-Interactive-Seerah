export default function HeroSection() {
  return (
    <section className="relative py-16 flex items-center justify-center bg-gradient-to-b from-background to-accent/10 border-b">
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display">
            Seerah Timeline
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif text-muted-foreground">
            السيرة النبوية
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An Interactive Journey Through the Life of Prophet Muhammad ﷺ
          </p>
        </div>
      </div>
    </section>
  );
}
