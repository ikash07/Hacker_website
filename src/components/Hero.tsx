import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const terminalLines = [
  { text: "root@cyberspace:~$ whoami", delay: 0, type: "command" },
  { text: "elite_hacker", delay: 600, type: "output" },
  { text: "root@cyberspace:~$ nmap -sV target", delay: 1200, type: "command" },
  { text: "Scanning...", delay: 1800, type: "output" },
  { text: "[████████████████] 100%", delay: 2400, type: "success" },
  { text: "Found 42 open ports", delay: 2800, type: "success" },
  { text: "root@cyberspace:~$ ./exploit.py", delay: 3400, type: "command" },
  { text: "[*] Initializing...", delay: 4000, type: "output" },
  { text: "[+] EXPLOIT SUCCESS", delay: 4600, type: "success" },
  { text: "[+] Shell opened", delay: 5000, type: "success" },
  { text: "root@cyberspace:~$ _", delay: 5600, type: "command" },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState<typeof terminalLines>([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    terminalLines.forEach((line) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, line.delay);
    });
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command": return "text-primary";
      case "success": return "text-green-400";
      case "warning": return "text-yellow-400";
      case "error": return "text-red-400";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-0">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px sm:50px sm:50px",
          }}
        />
      </div>

      {/* Floating hex codes - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 text-[10px] sm:text-xs font-mono animate-float hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            0x{Math.random().toString(16).substr(2, 8).toUpperCase()}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left">
            <p className="text-muted-foreground text-sm sm:text-base glitch-text" data-text="[INITIALIZING...]">
              [INITIALIZING...]
            </p>

            <h1 className="cyber-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground glitch-hover block sm:inline">ELITE</span>
              <span className="text-primary text-glow neon-flicker block sm:inline">HACKER</span>
            </h1>

            <p className="text-muted-foreground text-sm sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
              Penetration Tester | Security Researcher | Digital Forensics Expert
            </p>

            <div className="space-y-2 inline-block">
              {[
                { label: "System Status", value: "ONLINE" },
                { label: "Security Level", value: "MAXIMUM" },
                { label: "Access", value: "AUTHORIZED" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 sm:gap-3 animate-fade-in-up justify-center lg:justify-start"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <span className="status-dot" />
                  <span className="text-primary text-sm sm:text-base">
                    {item.label}: <span className="text-glow">{item.value}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="cyber-button px-6 py-3 bg-primary text-primary-foreground font-bold relative overflow-hidden group text-center"
              >
                <span className="relative z-10">[HIRE_ME]</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 text-center"
              >
                [VIEW_WORK]
              </a>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="terminal-window p-1 animate-fade-in-up relative order-first lg:order-last" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm">
              <div className="scanline-animation" />
            </div>

            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-border bg-cyber-darker">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              <span className="ml-2 sm:ml-4 text-muted-foreground text-xs sm:text-sm truncate">
                terminal — bash
              </span>
              <span className="ml-auto text-[10px] sm:text-xs text-primary animate-pulse">● LIVE</span>
            </div>

            <div className="p-3 sm:p-4 min-h-[200px] sm:min-h-[280px] lg:min-h-[350px] font-mono text-xs sm:text-sm overflow-hidden relative">
              <div className="space-y-1">
                {visibleLines.map((line, index) => (
                  <div key={index} className={`${getLineColor(line.type)} animate-fade-in`}>
                    {line.text}
                  </div>
                ))}
                {visibleLines.length === terminalLines.length && (
                  <span className={`inline-block w-2 h-4 bg-primary ${showCursor ? "opacity-100" : "opacity-0"}`} />
                )}
              </div>
              <div className="absolute inset-0 pointer-events-none glitch-overlay" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
