import { User, Shield, Clock, MapPin, Key, Code, Bug, Server } from "lucide-react";

const profileData = [
  { icon: User, label: "Name", value: 'Alex "Cipher" Rodriguez' },
  { icon: Shield, label: "Specialization", value: "Offensive Security" },
  { icon: Clock, label: "Experience", value: "8+ Years" },
  { icon: MapPin, label: "Location", value: "Cyberspace" },
  { icon: Key, label: "Clearance", value: "Top Secret" },
];

const tools = [
  { icon: Bug, name: "Metasploit" },
  { icon: Server, name: "Burp Suite" },
  { icon: Code, name: "Nmap" },
  { icon: Shield, name: "Wireshark" },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="cyber-heading text-3xl sm:text-4xl md:text-5xl text-primary text-glow mb-4">
            [ABOUT]
          </h2>
          <p className="text-muted-foreground text-sm">
            LOADING PROFILE_DATA... <span className="text-primary">COMPLETE</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/20 transform rotate-3 group-hover:rotate-6 transition-transform rounded-sm" />
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=500&fit=crop"
              alt="Cybersecurity Expert"
              className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover cyber-border"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Tools overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-1 px-2 py-1 bg-background/90 border border-primary/30 text-xs text-primary animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <tool.icon className="w-3 h-3" />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Data */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <h3 className="cyber-heading text-xl sm:text-2xl text-primary text-center lg:text-left">
              [PROFILE_DATA]
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {profileData.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 bg-secondary/30 border border-border hover:border-primary/50 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item.label}:</span>
                  <span className="text-primary text-sm sm:text-base">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Elite cybersecurity professional with extensive experience in penetration
                testing, vulnerability research, and digital forensics.
              </p>
              <p className="hidden sm:block">
                Passionate about staying ahead of emerging threats and developing
                innovative security solutions. Committed to ethical hacking practices.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-border">
              {[
                { value: "500+", label: "Systems" },
                { value: "12", label: "CVEs" },
                { value: "8+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl sm:text-2xl text-primary text-glow font-bold cyber-heading">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
