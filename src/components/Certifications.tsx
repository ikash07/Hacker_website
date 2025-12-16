import { Award, CheckCircle, Shield } from "lucide-react";

const certifications = [
  { abbr: "OSCP", full: "Offensive Security Certified Professional", verified: true },
  { abbr: "CEH", full: "Certified Ethical Hacker", verified: true },
  { abbr: "CISSP", full: "Certified Information Systems Security Professional", verified: true },
  { abbr: "GCIH", full: "GIAC Certified Incident Handler", verified: true },
  { abbr: "CISM", full: "Certified Information Security Manager", verified: false },
];

const Certifications = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="cyber-heading text-3xl sm:text-4xl md:text-5xl text-primary text-glow mb-4">
            [CERTIFICATIONS]
          </h2>
          <p className="text-muted-foreground text-sm">
            VERIFYING CREDENTIALS... <span className="text-primary">VALIDATED</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.abbr}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 cyber-border bg-card hover:bg-secondary/30 transition-all animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 group-hover:animate-pulse" />
                {cert.verified && (
                  <CheckCircle className="w-3 h-3 text-green-400 absolute -bottom-1 -right-1" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-primary font-bold text-sm sm:text-base">{cert.abbr}</p>
                  {cert.verified && (
                    <Shield className="w-3 h-3 text-green-400" />
                  )}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm truncate">
                  {cert.full}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span>Verified Credentials</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Background Checked</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-400" />
            <span>Industry Recognized</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
