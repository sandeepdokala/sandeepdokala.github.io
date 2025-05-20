
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sandeep Dokala. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
