import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            An interactive educational timeline based on authentic sources.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>The Sealed Nectar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
