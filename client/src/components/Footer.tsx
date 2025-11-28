import { BookOpen, Github, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An interactive educational timeline exploring the life and teachings of Prophet Muhammad ﷺ based on authentic sources.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Sources</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                The Sealed Nectar (Ar-Raheeq Al-Makhtum)
              </li>
              <li>Authentic Hadith Collections</li>
              <li>Classical Islamic Scholars</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Acknowledgments</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built with respect and reverence for authentic Islamic scholarship.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500" />
              <span>For the sake of Allah</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Seerah Timeline. Educational purposes only.</p>
          <p className="font-serif">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        </div>
      </div>
    </footer>
  );
}
