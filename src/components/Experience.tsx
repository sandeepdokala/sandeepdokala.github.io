
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      title: "Jr Engineer - Automation",
      company: "TruGlobal Sofware Pvt Ltd",
      period: "Aug 2024 - Present",
      description: "In my role, I develop automation scripts for various projects using machine learning techniques. I have worked on several exciting projects, gaining valuable hands-on experience in the field of automation.",
      skills: ["SAP", "FICO", "SAP HANA", "AI/ML", "Computer Vision", "JavaScript", "Java"]
    },
    {
      title: "SAP Developer - Intern",
      company: "RobustSys GmbH",
      period: "Jan 2023 - Jun 2023",
      description: "My role involves developing and maintaining SAP applications using JavaScript, Google Firebase, and SAPUI5 frameworks. I've worked on several interesting projects, gaining valuable hands-on experience in the SAP field.",
      skills: ["JavaScript", "Firebase", "SAPUI5", "SAP FICO", "HTML/CSS"]
    }
  ];

  return (
    <section id="experience" className="bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-12">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card overflow-hidden border-none">
              <CardHeader className="pb-2">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-primary font-medium">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/20 text-white">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
