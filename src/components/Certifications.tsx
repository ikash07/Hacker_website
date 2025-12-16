import { Award } from "lucide-react";

const certifications = [
  { abbr: "OSCP", full: "Offensive Security Certified Professional" },
  { abbr: "CEH", full: "Certified Ethical Hacker" },
  { abbr: "CISSP", full: "Certified Information Systems Security Professional" },
  { abbr: "GCIH", full: "GIAC Certified Incident Handler" },
  { abbr: "CISM", full: "Certified Information Security Manager" },
];

const Certifications = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="cyber-heading text-4xl md:text-5xl text-center text-primary text-glow mb-16">
          [CERTIFICATIONS]
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.abbr}
              className="flex items-center gap-4 p-4 cyber-border bg-card hover:bg-secondary/30 transition-all animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Award className="w-8 h-8 text-primary flex-shrink-0 group-hover:animate-pulse-glow" />
              <div>
                <p className="text-primary font-bold">{cert.abbr}</p>
                <p className="text-muted-foreground text-sm">{cert.full}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
