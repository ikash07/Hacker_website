import { ExternalLink, Lock, Eye } from "lucide-react";

const projects = [
  {
    title: "Corporate Network Breach",
    status: "CLASSIFIED",
    statusColor: "text-red-400",
    description: "Simulated advanced persistent threat attack on enterprise infrastructure",
    techStack: ["Metasploit", "Nmap", "Wireshark", "Burp Suite"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    icon: Lock,
  },
  {
    title: "Zero-Day Exploit Discovery",
    status: "DISCLOSED",
    statusColor: "text-yellow-400",
    description: "Identified critical vulnerability in popular web framework",
    techStack: ["Python", "Assembly", "Reverse Engineering", "Fuzzing"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    icon: Eye,
  },
  {
    title: "IoT Device Compromise",
    status: "PATCHED",
    statusColor: "text-primary",
    description: "Demonstrated security flaws in smart home ecosystem",
    techStack: ["Hardware Hacking", "UART", "Firmware Analysis", "Radio Frequency"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    icon: ExternalLink,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Floating code snippets background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <pre className="absolute top-10 left-10 text-xs text-primary/30 transform -rotate-12">
          {`def exploit():
    payload = craft_payload()
    send(target, payload)
    return shell.connect()`}
        </pre>
        <pre className="absolute bottom-20 right-10 text-xs text-primary/30 transform rotate-6">
          {`nmap -sS -sV -O
192.168.1.0/24
--script vuln`}
        </pre>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="cyber-heading text-4xl md:text-5xl text-primary text-glow mb-4">
            [PROJECTS]
          </h2>
          <p className="text-muted-foreground text-sm">
            DECRYPTING PROJECT_FILES... <span className="text-primary">ACCESS_GRANTED</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cyber-border bg-card overflow-hidden hover:border-primary/60 transition-all duration-300 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover scan effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Status badge */}
                <span
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold bg-background/90 ${project.statusColor} flex items-center gap-1 border border-current/30`}
                >
                  <project.icon className="w-3 h-3" />
                  {project.status}
                </span>

                {/* Scan lines on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]" />
                </div>
              </div>

              <div className="p-6 space-y-4 relative">
                <h3 className="cyber-heading text-xl text-primary group-hover:text-glow transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>

                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-mono">
                    {">"} TECH_STACK:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-primary border border-border hover:border-primary/50 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View project link */}
                <div className="pt-2 border-t border-border">
                  <button className="text-primary text-sm flex items-center gap-2 hover:text-glow transition-all group/btn">
                    <span>[VIEW_DETAILS]</span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
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
