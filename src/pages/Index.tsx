import { Github, Twitter, Linkedin, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import MatrixRain from "@/components/MatrixRain";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />

        {/* Footer */}
        <footer className="py-8 sm:py-12 border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 relative">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center gap-2 text-primary">
                <Shield className="w-5 h-5" />
                <span className="font-display text-sm sm:text-base">[ELITEHACKER]</span>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-right">
                &copy; {new Date().getFullYear()} All systems secured
              </p>
            </div>

            {/* Status bar */}
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-[10px] sm:text-xs text-muted-foreground/50 text-center font-mono">
                CONNECTION: <span className="text-primary">ENCRYPTED</span> | 
                PROTOCOL: <span className="text-primary">TLS 1.3</span> | 
                STATUS: <span className="text-green-400">OPERATIONAL</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
