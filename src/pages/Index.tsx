import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import profileImage from "@/assets/profile.jpg";
import projectDepartment from "@/assets/project-department.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAutomation from "@/assets/project-automation.jpg";

const Index = () => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const heroStats = [
    { value: "4+", label: "Projects" },
    { value: "8.0", label: "CGPA in AI & ML" },
  ];

  const projects = [
    {
      title: "Department Website",
      description: "A responsive and animated React-Django website for departmental updates with faculty and student profiles.",
      tags: ["React.js", "Django", "Responsive Design"],
      image: projectDepartment,
    },
    {
      title: "SQL Sales Dashboard",
      description: "Interactive Power BI dashboard connected to SQL for real-time sales insights and KPI tracking.",
      tags: ["Power BI", "SQL", "Data Analytics"],
      image: projectDashboard,
    },
    {
      title: "E-commerce Platform (GM Cart)",
      description: "Multi-vendor e-commerce platform with Django, Bootstrap 5, featuring seller and customer dashboards.",
      tags: ["Django", "Bootstrap 5", "PostgreSQL"],
      image: projectEcommerce,
    },
    {
      title: "Workflow Automation",
      description: "Automated smart job referral emails, WhatsApp alerts, Telegram notifications using n8n workflows.",
      tags: ["n8n", "Automation", "API Integration"],
      image: projectAutomation,
    },
  ];

  const aboutContent = 
    "Aspiring Python Developer with a strong foundation in Core Python, Django, and SQL, along with hands-on experience in Computer Vision and Machine Learning integration. Currently working as an Azure Cloud Intern at PCS Solution, Pune, where I'm expanding my expertise in cloud technologies and Azure services. Pursuing B.Tech in AI & ML with 8.0 CGPA at NRI Institute of Technology. Published researcher with a paper on Sentiment Analysis using BERT and patent holder for an AI-Driven Automated Triage System. Passionate about delivering scalable backend solutions, insightful data analytics, and innovative automation workflows.";

  const skills = [
    "Python",
    "Django",
    "Flask",
    "React.js",
    "SQL",
    "PostgreSQL",
    "Azure Cloud",
    "Power BI",
    "Machine Learning",
    "Computer Vision",
    "n8n Automation",
    "Git & GitHub",
    "AI Tools & Prompting",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <TopNav
        links={navLinks}
        onResumeClick={() => {
          window.open('mailto:mohanraoappikatla@gmail.com?subject=Request for Resume', '_blank');
        }}
      />

      {/* Content with top padding for fixed nav */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          name="Mohan Rao"
          role="a Python Developer"
          stats={heroStats}
          profileImageUrl={profileImage}
        />

        {/* About Section */}
        <AboutSection content={aboutContent} skills={skills} />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Grid */}
        <ProjectsGrid projects={projects} />

        {/* Certifications & Achievements */}
        <AchievementsSection />

        {/* Contact Section */}
        <ContactSection
          email="mohanraoappikatla@gmail.com"
          phone="+91 9701231548"
          linkedin="http://www.linkedin.com/in/mohan-rao-appikatla-198375269"
          github="https://github.com/mohannaidu2004"
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Appikatla Mohan Rao. All rights reserved.</p>
          <p className="mt-2">
            Built with passion • Published Researcher • Patent Holder
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;