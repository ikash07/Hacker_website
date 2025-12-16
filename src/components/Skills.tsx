import { useEffect, useState, useRef } from "react";
import { Zap } from "lucide-react";

const skills = [
  { name: "Penetration Testing", level: 95 },
  { name: "Network Security", level: 90 },
  { name: "Digital Forensics", level: 85 },
  { name: "Malware Analysis", level: 88 },
  { name: "Social Engineering", level: 92 },
  { name: "Cryptography", level: 87 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hackingSkill, setHackingSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="cyber-heading text-4xl md:text-5xl text-primary text-glow mb-4">
            [SKILLS]
          </h2>
          <p className="text-muted-foreground text-sm">
            LOADING SKILL_MATRIX... <span className="text-primary">COMPLETE</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="space-y-3 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHackingSkill(index)}
              onMouseLeave={() => setHackingSkill(null)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-primary font-semibold flex items-center gap-2">
                  {hackingSkill === index && (
                    <Zap className="w-4 h-4 animate-pulse text-yellow-400" />
                  )}
                  {skill.name}
                </h3>
                <span className="text-muted-foreground text-sm font-mono">
                  <span className="text-primary">{skill.level}</span>%
                </span>
              </div>
              <div className="progress-bar relative">
                <div
                  className="progress-fill"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                />
                {/* Glitch effect on hover */}
                {hackingSkill === index && (
                  <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                )}
              </div>
              {/* Binary decoration */}
              <div className="text-[10px] text-primary/30 font-mono overflow-hidden h-4">
                {hackingSkill === index && (
                  <span className="animate-typing inline-block whitespace-nowrap">
                    01100101 01111000 01110000 01100101 01110010 01110100
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "VULNERABILITIES_FOUND", value: "2,847" },
            { label: "SYSTEMS_SECURED", value: "500+" },
            { label: "CVE_CREDITS", value: "12" },
            { label: "UPTIME", value: "99.9%" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-4 cyber-border bg-card/50 animate-fade-in-up"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <p className="text-2xl md:text-3xl text-primary text-glow font-bold cyber-heading">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
