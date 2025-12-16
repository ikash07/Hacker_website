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
    <div className="min-h-screen bg-background relative">
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
        <footer className="py-8 border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
          <div className="container mx-auto px-6 text-center relative">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} <span className="text-primary">ELITEHACKER</span>. All systems secured.
            </p>
            <p className="text-xs text-muted-foreground/50 mt-2 font-mono">
              Connection: ENCRYPTED | Protocol: TLS 1.3 | Status: OPERATIONAL
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
