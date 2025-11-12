import { Award, FileText, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  type: string;
  year: string;
}

export const AchievementsSection = () => {
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

  const achievements: Achievement[] = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Published Research Paper",
      description: "Sentiment Analysis using BERT - Published research focusing on advanced NLP techniques for sentiment classification and analysis.",
      type: "Research Publication",
      year: "2024",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI-Driven Automated Triage System",
      description: "Patent holder for an innovative AI-powered system that automates patient triage processes using machine learning algorithms.",
      type: "Patent",
      year: "2024",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Maintaining 8.0 CGPA in B.Tech AI & ML program at NRI Institute of Technology, demonstrating consistent academic performance.",
      type: "Academic Achievement",
      year: "Ongoing",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-20 px-6 lg:px-12 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 uppercase">
          Certifications & Achievements
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Recognitions and accomplishments that showcase my commitment to innovation and excellence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative bg-card border-2 border-border rounded-2xl p-8 transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="mb-6 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {achievement.icon}
              </div>

              {/* Type Badge */}
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-primary mb-4">
                {achievement.type} • {achievement.year}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10 transition-all duration-300 group-hover:w-32 group-hover:h-32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
