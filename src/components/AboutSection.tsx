import { useEffect, useRef, useState } from "react";

interface AboutSectionProps {
  content: string;
  skills?: string[];
}

export const AboutSection = ({ content, skills = [] }: AboutSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 lg:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-8 uppercase">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content}
            </p>
          </div>

          {skills.length > 0 && (
            <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-default"
                    style={{
                      transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};