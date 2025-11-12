import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavLink {
  label: string;
  href: string;
}

interface TopNavProps {
  logo?: string;
  links: NavLink[];
  onResumeClick?: () => void;
}

export const TopNav = ({ logo = "AMR", links, onResumeClick }: TopNavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 lg:left-64 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Only visible on mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-white">{logo}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Resume Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={onResumeClick}
              className="px-6 py-2 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/90 transition-colors"
            >
              Resume
            </button>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-border space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onResumeClick?.();
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/90 transition-colors"
            >
              Resume
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};