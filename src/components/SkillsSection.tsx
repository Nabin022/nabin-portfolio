import { Progress } from "@/components/ui/progress";
import { Wrench, Monitor } from "lucide-react";

const mechanicalSkills = [
  { name: "Engineering Drawing", level: 85 },
  { name: "Thermal Engineering", level: 80 },
  { name: "Basic Manufacturing Processes", level: 75 },
  { name: "Basic Welding", level: 70 },
];

const softwareSkills = [
  { name: "AutoCAD", level: 85 },
  { name: "SolidWorks", level: 60 },
  { name: "ANSYS (Thermal Analysis)", level: 75 },
  { name: "MATLAB", level: 55 },
];

const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => (
  <div className="mb-4" style={{ animationDelay: `${delay}ms` }}>
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-sm text-primary font-medium">{level}%</span>
    </div>
    <Progress value={level} className="h-2" />
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative z-10">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A blend of core mechanical engineering competencies and modern CAD/CAE
          software proficiency.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mechanical Skills */}
          <div className="bg-card rounded-xl p-6 shadow-lg border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Core Mechanical Skills</h3>
            </div>

            {mechanicalSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Software Skills */}
          <div className="bg-card rounded-xl p-6 shadow-lg border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Software & Tools</h3>
            </div>

            {softwareSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
