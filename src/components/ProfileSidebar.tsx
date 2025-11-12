import { MapPin, Briefcase, ExternalLink } from "lucide-react";

interface ProfileSidebarProps {
  name: string;
  username: string;
  location: string;
  role: string;
  experience: string;
  currentRole?: string;
  openToWork?: boolean;
  companies?: { name: string; logo?: string }[];
}

export const ProfileSidebar = ({
  name,
  username,
  location,
  role,
  experience,
  currentRole,
  openToWork = true,
  companies = [],
}: ProfileSidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border overflow-y-auto hidden lg:block">
      <div className="p-6 space-y-6">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto border-2 border-border overflow-hidden">
            <span className="text-5xl font-bold text-foreground">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          {openToWork && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <Briefcase className="w-3 h-3" />
              Open to Work
            </div>
          )}
        </div>

        {/* Name & Info */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold text-foreground">{name}</h2>
          <p className="text-sm text-muted-foreground">@{username}</p>
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
          <p className="text-sm font-medium text-foreground pt-2">{role}</p>
        </div>

        {/* Experience */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{experience}</p>
          {currentRole && (
            <div className="pt-2">
              <p className="text-xs font-semibold text-primary mb-1">Current Role</p>
              <p className="text-sm text-foreground">{currentRole}</p>
            </div>
          )}
          
          {companies.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3">Experience Includes:</p>
              <div className="flex flex-wrap gap-2">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center"
                    title={company.name}
                  >
                    {company.logo ? (
                      <img src={company.logo} alt={company.name} className="w-6 h-6 object-contain" />
                    ) : (
                      <span className="text-xs font-bold text-muted-foreground">
                        {company.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2 pt-4 border-t border-border">
          <a
            href="#profile"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            Profile
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm bg-foreground text-background font-medium"
          >
            Portfolio
          </a>
        </nav>

        {/* Social Links */}
        <div className="pt-4 border-t border-border">
          <a
            href="https://github.com/mohannaidu2004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </aside>
  );
};