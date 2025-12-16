import { useEffect, useState, useRef } from "react";
import { Zap, TrendingUp } from "lucide-react";

const skills = [
  { name: "Penetration Testing", level: 95, icon: "🔓" },
  { name: "Network Security", level: 90, icon: "🌐" },
  { name: "Digital Forensics", level: 85, icon: "🔍" },
  { name: "Malware Analysis", level: 88, icon: "🦠" },
  { name: "Social Engineering", level: 92, icon: "🎭" },
  { name: "Cryptography", level: 87, icon: "🔐" },
];

const stats = [
  { label: "VULNERABILITIES", value: "2,847" },
  { label: "SYSTEMS", value: "500+" },
  { label: "CVE_CREDITS", value: "12" },
  { label: "UPTIME", value: "99.9%" },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="cyber-heading text-3xl sm:text-4xl md:text-5xl text-primary text-glow mb-4">
            [SKILLS]
          </h2>
          <p className="text-muted-foreground text-sm">
            ANALYZING SKILL_MATRIX... <span className="text-primary">COMPLETE</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="space-y-2 sm:space-y-3 animate-fade-in-up group p-3 sm:p-4 bg-card/30 rounded-sm cyber-border hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-primary font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-base sm:text-lg">{skill.icon}</span>
                  {skill.name}
                  {hoveredSkill === index && (
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse text-yellow-400" />
                  )}
                </h3>
                <span className="text-primary font-mono text-sm sm:text-base font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="progress-bar h-2 sm:h-3 relative">
                <div
                  className="progress-fill"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                />
                {hoveredSkill === index && (
                  <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-3 sm:p-4 cyber-border bg-card/50 animate-fade-in-up group hover:bg-primary/5 transition-colors"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-xl sm:text-2xl md:text-3xl text-primary text-glow font-bold cyber-heading">
                  {stat.value}
                </p>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
