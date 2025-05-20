
import { Folder, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "Enhanced Traffic Management using YOLOv7",
      description: "This project optimizes traffic flow at junctions by using real-time vehicle detection with a YOLOv7 model. Trained on thousands of images, it adjusts signal timings based on traffic density and prioritizes emergency vehicles. Developed by a team of four, this system ensures efficient traffic management and faster emergency response.",
      image: "/yoloproject1.png",
      tech: ["YOLOv7", "Python", "OpenCV", "Deep Learning"],
    },
    {
      title: "SQuiLL - Web Based Database Management",
      description:
        "SQUILL is a web-based database modifier designed for users with no SQL knowledge. By entering database login details and selecting the appropriate driver, users can connect to databases like MySQL and Oracle 19c. Once connected, they can create, delete, insert, update, and alter tables through an intuitive interface, making database management accessible to everyone.",
      image: "/squill.png",
      tech: ["React", "Node.js", "MySQL", "Oracle 19c"],
    },
    {
      title: "SonoShift - Noise Cancellation in Audio",
      description:
        "Noise interference is a persistent issue in video and audio applications, affecting recording, telecommunication, and speech recognition. Our project, SonoShift, aims to develop a noise cancellation system using artificial intelligence and machine learning (AIML). This system analyzes audio data to efficiently remove unwanted noise, providing clear and enhanced audio output.",
      image: "/sonoshift.jpg",
      tech: ["AIML", "Python", "Audio Processing", "Deep Learning"],
    },
    ];

  return (
    <section id="projects">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-12">
          <Folder className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card flex flex-col h-full border-none hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/50">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                {/* <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
