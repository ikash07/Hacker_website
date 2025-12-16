import { ExternalLink, Lock, Eye, Cpu, Github } from "lucide-react";

const projects = [
  {
    title: "Corporate Network Breach",
    status: "CLASSIFIED",
    statusColor: "text-red-400",
    bgStatus: "bg-red-400/10",
    description: "Simulated APT attack on enterprise infrastructure",
    techStack: ["Metasploit", "Nmap", "Wireshark"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    icon: Lock,
  },
  {
    title: "Zero-Day Discovery",
    status: "DISCLOSED",
    statusColor: "text-yellow-400",
    bgStatus: "bg-yellow-400/10",
    description: "Critical vulnerability in popular web framework",
    techStack: ["Python", "Fuzzing", "Reverse Eng"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    icon: Eye,
  },
  {
    title: "IoT Compromise",
    status: "PATCHED",
    statusColor: "text-primary",
    bgStatus: "bg-primary/10",
    description: "Security flaws in smart home ecosystem",
    techStack: ["Hardware", "Firmware", "RF"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    icon: Cpu,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background code snippets - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 hidden lg:block">
        <pre className="absolute top-10 left-10 text-xs text-primary/30 transform -rotate-12">
          {`def exploit():
  payload = craft()
  return shell()`}
        </pre>
        <pre className="absolute bottom-20 right-10 text-xs text-primary/30 transform rotate-6">
          {`nmap -sS -sV
192.168.1.0/24`}
        </pre>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="cyber-heading text-3xl sm:text-4xl md:text-5xl text-primary text-glow mb-4">
            [PROJECTS]
          </h2>
          <p className="text-muted-foreground text-sm">
            DECRYPTING FILES... <span className="text-primary">ACCESS_GRANTED</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cyber-border bg-card overflow-hidden hover:border-primary/60 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover scan effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 sm:h-44 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                <span
                  className={`absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-1 text-[10px] sm:text-xs font-bold ${project.bgStatus} ${project.statusColor} flex items-center gap-1 border border-current/30 rounded-sm`}
                >
                  <project.icon className="w-3 h-3" />
                  <span className="hidden xs:inline">{project.status}</span>
                </span>
              </div>

              <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 relative">
                <h3 className="cyber-heading text-base sm:text-lg lg:text-xl text-primary group-hover:text-glow transition-all line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                  {project.description}
                </p>

                <div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 font-mono">
                    {">"} TECH:
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-secondary text-primary border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-border flex items-center justify-between">
                  <button className="text-primary text-xs sm:text-sm flex items-center gap-1.5 hover:text-glow transition-all group/btn">
                    <span>[VIEW]</span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                  <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
