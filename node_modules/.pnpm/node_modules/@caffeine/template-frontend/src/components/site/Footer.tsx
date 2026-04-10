import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          © {currentYear}. Built with{" "}
          <Heart className="h-4 w-4 fill-current text-red-500" /> using{" "}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-foreground"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
