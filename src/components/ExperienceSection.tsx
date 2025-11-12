import { Briefcase, Cloud, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl lg:text-7xl font-black text-foreground uppercase tracking-tight">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building cloud solutions and driving data innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Role */}
          <div
            className={`relative pl-8 pb-12 border-l-4 border-primary transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-14px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />
            
            {/* Status badge */}
            <div className="absolute left-8 -top-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Current Role
              </span>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 mt-6 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Cloud className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    Azure Cloud & Data Engineering Intern
                  </h3>
                  <div className="flex items-center gap-3 text-muted-foreground mb-4">
                    <span className="font-semibold text-primary">PCS Solutions</span>
                    <span className="text-sm">•</span>
                    <span>Pune, India</span>
                    <span className="text-sm">•</span>
                    <span className="text-sm">Present</span>
                  </div>
                  
                  <div className="space-y-3 text-foreground/90">
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>Developing and deploying cloud-native solutions on Microsoft Azure platform</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>Building data engineering pipelines for analytics and insights</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>Focusing on scalable cloud architectures and automation workflows</span>
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                      Azure Cloud
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                      Data Engineering
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                      Python
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                      SQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Focus */}
          <div
            className={`relative pl-8 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-14px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-background" />
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Career Focus
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Building expertise in <span className="text-primary font-semibold">Cloud Computing</span> and 
                    <span className="text-primary font-semibold"> Data Engineering</span>, with a focus on creating 
                    scalable, efficient solutions that leverage modern cloud technologies and data-driven insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};