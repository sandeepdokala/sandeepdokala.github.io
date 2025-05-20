
import { Code } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React / React Native", proficiency: 90 },
        { name: "JavaScript / TypeScript", proficiency: 95 },
        { name: "HTML / CSS / Tailwind", proficiency: 85 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Python / Django", proficiency: 75 },
        { name: "SQL / NoSQL Databases", proficiency: 80 },
        { name: "Node.js / Express", proficiency: 85 }
      ]
    },
    {
      category: "SAP Development",
      skills: [
        { name: "SAP Fiori", proficiency: 85 },
        { name: "SAP HANA", proficiency: 80 },
        { name: "SAP UI5", proficiency: 75 }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Natural Language Processing", proficiency: 85 },
        { name: "Computer Vision", proficiency: 75 },
        { name: "Data Analysis / Image Processing", proficiency: 90 }
      ]
    },
  ];

  return (
    <section id="skills" className="bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center gap-2 mb-12">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <Card key={i} className="glass-card border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-2 bg-secondary" />
                    </div>
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
