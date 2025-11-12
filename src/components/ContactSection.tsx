import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ContactSectionProps {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export const ContactSection = ({ email, phone, linkedin, github }: ContactSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
    phone && { icon: Phone, label: "Phone", value: phone, href: `tel:${phone}` },
    linkedin && { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: linkedin },
    github && { icon: Github, label: "GitHub", value: "GitHub Profile", href: github },
  ].filter(Boolean) as Array<{ icon: any; label: string; value: string; href: string }>;

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl lg:text-5xl font-black text-foreground mb-12 uppercase transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover-lift transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {link.value}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};