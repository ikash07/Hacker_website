import { useState, useEffect } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "root@cyberspace:~$ whoami\nelite_hacker\nroot@cyberspace:~$ ls -la skills/";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden scanline">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-muted-foreground">[INITIALIZING...]</p>
            
            <h1 className="cyber-heading text-5xl md:text-7xl font-bold">
              <span className="text-foreground">ELITE</span>
              <span className="text-primary text-glow">HACKER</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl">
              Penetration Tester | Security Researcher | Digital Forensics Expert
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="status-dot" />
                <span className="text-primary">System Status: ONLINE</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="status-dot" />
                <span className="text-primary">Security Level: MAXIMUM</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="status-dot" />
                <span className="text-primary">Access: AUTHORIZED</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground font-bold hover:animate-pulse-glow transition-all"
              >
                [HIRE_ME]
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-all"
              >
                [VIEW_WORK]
              </a>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="terminal-window p-1 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-muted-foreground text-sm">terminal</span>
            </div>
            <div className="p-6 min-h-[300px] font-mono">
              <pre className="text-primary whitespace-pre-wrap">
                {typedText}
                <span
                  className={`inline-block w-2 h-4 bg-primary ml-1 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
