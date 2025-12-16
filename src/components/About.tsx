import { User, Shield, Clock, MapPin, Key } from "lucide-react";

const About = () => {
  const profileData = [
    { icon: User, label: "Name", value: 'Alex "Cipher" Rodriguez' },
    { icon: Shield, label: "Specialization", value: "Offensive Security" },
    { icon: Clock, label: "Experience", value: "8+ Years" },
    { icon: MapPin, label: "Location", value: "Cyberspace" },
    { icon: Key, label: "Clearance", value: "Top Secret" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="cyber-heading text-4xl md:text-5xl text-center text-primary text-glow mb-16">
          [ABOUT]
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 transform rotate-3 group-hover:rotate-6 transition-transform" />
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=500&fit=crop"
              alt="Cybersecurity Expert"
              className="relative w-full h-[400px] object-cover cyber-border"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* Profile Data */}
          <div className="space-y-8">
            <h3 className="cyber-heading text-2xl text-primary">[PROFILE_DATA]</h3>

            <div className="space-y-4">
              {profileData.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-3 bg-secondary/30 border border-border hover:border-primary/50 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="text-primary">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Elite cybersecurity professional with extensive experience in penetration
                testing, vulnerability research, and digital forensics. Specialized in
                identifying and exploiting security weaknesses to help organizations
                strengthen their defenses against real-world threats.
              </p>
              <p>
                Passionate about staying ahead of emerging threats and developing
                innovative security solutions. Committed to ethical hacking practices
                and responsible disclosure of vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
