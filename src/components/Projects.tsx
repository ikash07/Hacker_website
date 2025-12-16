const projects = [
  {
    title: "Corporate Network Breach",
    status: "CLASSIFIED",
    statusColor: "text-red-400",
    description: "Simulated advanced persistent threat attack on enterprise infrastructure",
    techStack: ["Metasploit", "Nmap", "Wireshark", "Burp Suite"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
  },
  {
    title: "Zero-Day Exploit Discovery",
    status: "DISCLOSED",
    statusColor: "text-yellow-400",
    description: "Identified critical vulnerability in popular web framework",
    techStack: ["Python", "Assembly", "Reverse Engineering", "Fuzzing"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
  },
  {
    title: "IoT Device Compromise",
    status: "PATCHED",
    statusColor: "text-primary",
    description: "Demonstrated security flaws in smart home ecosystem",
    techStack: ["Hardware Hacking", "UART", "Firmware Analysis", "Radio Frequency"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="cyber-heading text-4xl md:text-5xl text-center text-primary text-glow mb-16">
          [PROJECTS]
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cyber-border bg-card overflow-hidden hover:border-primary/60 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <span
                  className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold bg-background/80 ${project.statusColor}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="cyber-heading text-xl text-primary">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>

                <div>
                  <p className="text-xs text-muted-foreground mb-2">TECH_STACK:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-primary border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
