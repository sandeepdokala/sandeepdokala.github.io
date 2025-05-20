import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/meojgwlo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset(); // Reset form after successful submission
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-12">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Contact Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="flex gap-4 mb-8">
              <a 
                href="https://github.com/sandeepdokala" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sdokala/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/sdp_do/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Email: <a href="mailto:sandeepdokala@gmail.com" className="text-white hover:text-primary">sandeepdokala@gmail.com</a>
            </p>
            <p className="text-sm text-muted-foreground">
              Based in Pune, Maharashtra, India
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <form 
              onSubmit={handleSubmit} 
              action="https://formspree.io/f/meojgwlo" 
              method="POST" 
              className="space-y-4"
            >
              <div>
                <Input 
                  type="text" 
                  name="name" // Add name attribute for Formspree
                  placeholder="Your Name" 
                  required
                  className="bg-background/50 border-white/10"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  name="email" // Add name attribute for Formspree
                  placeholder="Email Address" 
                  required
                  className="bg-background/50 border-white/10"
                />
              </div>
              <div>
                <Input 
                  type="text" 
                  name="subject" // Add name attribute for Formspree
                  placeholder="Subject" 
                  required
                  className="bg-background/50 border-white/10"
                />
              </div>
              <div>
                <Textarea 
                  name="message" // Add name attribute for Formspree
                  placeholder="Your Message" 
                  rows={5} 
                  required
                  className="bg-background/50 border-white/10 resize-none"
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};