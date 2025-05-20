
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const navToResume = () => {
    window.open('https://drive.google.com/file/d/1TTTwa3aXqEI1tMc5_B2WY22EKlQHDdEE/view?usp=sharing', '_blank'); 
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'neo-blur py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gradient">Sandeep Dokala</a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={navToResume} variant="outline" className="border-primary text-white hover:bg-primary/20 hover:text-white">Resume</Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden neo-blur p-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button onClick={navToResume} variant="outline" className="border-primary text-white hover:bg-primary/20 hover:text-white w-full">
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
