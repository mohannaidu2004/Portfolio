import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
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
    <section ref={sectionRef} id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-12 uppercase">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-black text-muted-foreground/20 group-hover:scale-110 transition-transform duration-500">
                      {project.title.substring(0, 2)}
                    </span>
                  </div>
                )}
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-primary z-10"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary border border-border rounded-full text-xs font-medium text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};