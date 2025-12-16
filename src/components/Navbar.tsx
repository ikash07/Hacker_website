import { useState, useEffect } from "react";
import { Terminal, Wifi, Shield, Skull, Activity } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemTime, setSystemTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "#about", label: "/about" },
    { href: "#skills", label: "/skills" },
    { href: "#projects", label: "/projects" },
    { href: "#contact", label: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-primary text-glow font-display text-xl group">
            <Terminal className="w-6 h-6 group-hover:animate-pulse" />
            <span className="hidden sm:inline">[CYBER_PORTFOLIO]</span>
          </a>

          {/* Status indicators */}
          <div className="hidden lg:flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2 text-primary/70">
              <Wifi className="w-3 h-3" />
              <span>SECURE</span>
            </div>
            <div className="flex items-center gap-2 text-primary/70">
              <Shield className="w-3 h-3" />
              <span>ENCRYPTED</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Activity className="w-3 h-3 animate-pulse" />
              <span className="font-mono">{systemTime}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary hover:text-glow transition-all duration-200 hover:scale-105 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-primary hover:text-glow"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
