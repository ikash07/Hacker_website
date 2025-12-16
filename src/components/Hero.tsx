import { useState, useEffect } from "react";

const terminalLines = [
  { text: "root@cyberspace:~$ whoami", delay: 0, type: "command" },
  { text: "elite_hacker", delay: 800, type: "output" },
  { text: "root@cyberspace:~$ nmap -sV 192.168.1.0/24", delay: 1500, type: "command" },
  { text: "Starting Nmap 7.94 ( https://nmap.org )", delay: 2300, type: "output" },
  { text: "Scanning 256 hosts...", delay: 2800, type: "output" },
  { text: "[████████████████████] 100% complete", delay: 3500, type: "success" },
  { text: "Found 42 open ports on 15 hosts", delay: 4200, type: "success" },
  { text: "root@cyberspace:~$ ./exploit.py --target vuln_server", delay: 5000, type: "command" },
  { text: "[*] Initializing exploit framework...", delay: 5800, type: "output" },
  { text: "[*] Payload: reverse_shell/tcp", delay: 6300, type: "output" },
  { text: "[*] Target: 192.168.1.105:443", delay: 6800, type: "output" },
  { text: "[+] EXPLOIT SUCCESSFUL", delay: 7500, type: "success" },
  { text: "[+] Shell session 1 opened", delay: 8000, type: "success" },
  { text: "root@cyberspace:~$ cat /etc/shadow", delay: 8800, type: "command" },
  { text: "root:$6$xyz...REDACTED...:19000:0:99999:7:::", delay: 9500, type: "warning" },
  { text: "root@cyberspace:~$ _", delay: 10200, type: "command" },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState<typeof terminalLines>([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    terminalLines.forEach((line, index) => {
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
      case "command":
        return "text-primary";
      case "success":
        return "text-green-400";
      case "warning":
        return "text-yellow-400";
      case "error":
        return "text-red-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating hex codes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 text-xs font-mono animate-float"
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

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <p className="text-muted-foreground glitch-text" data-text="[INITIALIZING...]">
                [INITIALIZING...]
              </p>
            </div>

            <h1 className="cyber-heading text-5xl md:text-7xl font-bold">
              <span className="text-foreground glitch-hover">ELITE</span>
              <span className="text-primary text-glow neon-flicker">HACKER</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl typing-effect">
              Penetration Tester | Security Researcher | Digital Forensics Expert
            </p>

            <div className="space-y-2">
              {[
                { label: "System Status", value: "ONLINE" },
                { label: "Security Level", value: "MAXIMUM" },
                { label: "Access", value: "AUTHORIZED" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <span className="status-dot" />
                  <span className="text-primary">
                    {item.label}: <span className="text-glow">{item.value}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="cyber-button px-6 py-3 bg-primary text-primary-foreground font-bold relative overflow-hidden group"
              >
                <span className="relative z-10">[HIRE_ME]</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                [VIEW_WORK]
              </a>
            </div>
          </div>

          {/* Enhanced Terminal Window */}
          <div
            className="terminal-window p-1 animate-fade-in-up relative"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-sm">
              <div className="scanline-animation" />
            </div>

            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-cyber-darker">
              <span className="w-3 h-3 rounded-full bg-red-500 hover:brightness-150 transition-all cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-150 transition-all cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-green-500 hover:brightness-150 transition-all cursor-pointer" />
              <span className="ml-4 text-muted-foreground text-sm">
                terminal — bash — 80×24
              </span>
              <span className="ml-auto text-xs text-primary animate-pulse">● LIVE</span>
            </div>

            <div className="p-4 min-h-[350px] font-mono text-sm overflow-hidden relative">
              <div className="space-y-1">
                {visibleLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${getLineColor(line.type)} animate-fade-in`}
                  >
                    {line.text}
                  </div>
                ))}
                {visibleLines.length === terminalLines.length && (
                  <span
                    className={`inline-block w-2 h-4 bg-primary ${
                      showCursor ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </div>

              {/* Glitch overlay */}
              <div className="absolute inset-0 pointer-events-none glitch-overlay" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
