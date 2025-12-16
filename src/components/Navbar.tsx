import { useState, useEffect } from "react";
import { Terminal, Wifi, Shield, Menu, X, Activity } from "lucide-react";

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
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 sm:gap-3 text-primary text-glow font-display text-base sm:text-xl group">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
            <span className="hidden xs:inline">[CYBER]</span>
            <span className="hidden sm:inline">[CYBER_PORTFOLIO]</span>
          </a>

          {/* Status indicators - hidden on mobile, shown on lg+ */}
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
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary text-sm lg:text-base hover:text-glow transition-all duration-200 hover:scale-105 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2 hover:bg-primary/10 rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border mt-4 space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-primary hover:bg-primary/10 rounded transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile status */}
            <div className="flex items-center gap-4 px-4 pt-4 border-t border-border mt-2 text-xs">
              <span className="text-primary flex items-center gap-1">
                <Activity className="w-3 h-3 animate-pulse" />
                {systemTime}
              </span>
              <span className="text-primary/70">SECURE</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
