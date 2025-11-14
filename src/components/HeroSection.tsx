import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  name: string;
  role: string;
  stats: { value: string; label: string }[];
  profileImageUrl?: string;
}

export const HeroSection = ({ name, role, stats, profileImageUrl }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content with parallax */}
        <div 
          className="space-y-8 lg:order-1 order-2"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div>
            <h1 className="text-6xl lg:text-8xl font-black text-foreground leading-tight tracking-tight uppercase">
              HEY, I'M{" "}
              <span className="block text-7xl lg:text-9xl mt-2 text-foreground">{name.split(' ')[0]}</span>
              <span className="block text-7xl lg:text-9xl text-foreground">{name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-5xl lg:text-6xl font-signature text-primary mt-6 animate-fade-in drop-shadow-lg">
              {role}
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="text-5xl lg:text-6xl font-black text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image with Badge and parallax */}
        <div 
          className="relative flex justify-center lg:justify-end lg:order-2 order-1"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="relative">
            <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-3xl overflow-hidden border-4 border-primary/30 bg-gradient-to-br from-secondary to-muted shadow-2xl transform hover:scale-105 transition-transform duration-500 hover:shadow-[var(--shadow-glow)]">
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt={name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-9xl font-bold text-muted-foreground/20">
                    {name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>
            
            {/* Good Vibes Badge */}
            <div className="absolute -bottom-8 -left-8 lg:-left-12">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow drop-shadow-2xl">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <circle cx="100" cy="100" r="85" fill="hsl(280, 70%, 60%)" />
                  <text className="text-xs font-bold uppercase tracking-widest" fill="#ffffff">
                    <textPath href="#circlePath" startOffset="0">
                      • GOOD VIBES • GOOD VIBES • GOOD VIBES •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-12 h-12 rounded-full border-2 border-primary bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group animate-bounce shadow-[var(--shadow-elegant)]"
        >
          <ArrowDown className="w-5 h-5 text-primary group-hover:text-white" />
        </button>
      </div>
    </section>
  );
};