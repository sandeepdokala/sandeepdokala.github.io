
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen relative flex items-center justify-center pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(67,43,122,0.15),transparent_50%)]"></div>
      <div className="section-container flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-primary font-mono mb-3 animate-fade-in">Hello, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in delay-100">
          <span className="text-gradient">Sandeep Dokala</span>
        </h1>
        <div className="typing-container mb-6">
          <h2 className="typing-text text-xl md:text-2xl text-muted-foreground font-semibold">
            Full Stack Developer • SAP Specialist • AI Engineer
          </h2>
        </div>
        <p className="text-muted-foreground max-w-lg mb-8 animate-fade-in delay-200">
          I'm a versatile developer specializing in building exceptional digital experiences. 
          With expertise in full-stack development, SAP systems, and AI engineering, I bring 
          a unique blend of technical skills and entrepreneurial mindset to solve complex problems.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in delay-300">
          <Button asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      <a 
        href="#experience" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
};
