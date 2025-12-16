import { useEffect, useState, useRef } from "react";

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
    <section id="skills" ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="cyber-heading text-4xl md:text-5xl text-center text-primary text-glow mb-16">
          [SKILLS]
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="space-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-primary font-semibold">{skill.name}</h3>
                <span className="text-muted-foreground text-sm">
                  Proficiency{" "}
                  <span className="text-primary">{skill.level}%</span>
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
