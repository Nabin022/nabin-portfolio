import { Progress } from "@/components/ui/progress";
import { Wrench, Monitor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mechanicalSkills = [
  { name: "Thermal Engineering", level: 80 },
  { name: "Manufacturing Engineering", level: 75 },
  { name: "Engineering Drawing", level: 85 },
  { name: "Basic Welding", level: 70 },
];

const softwareSkills = [
  { name: "AutoCAD", level: 85 },
  { name: "SolidWorks", level: 60 },
  { name: "ANSYS", level: 75 },
  { name: "MATLAB", level: 55 },
];

const SkillBar = ({
  name,
  level,
  delay,
  isVisible,
}: {
  name: string;
  level: number;
  delay: number;
  isVisible: boolean;
}) => (
  <div
    className={`mb-4 transition-all duration-500 ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-sm text-primary font-medium">{level}%</span>
    </div>
    <Progress value={isVisible ? level : 0} className="h-2 transition-all duration-1000" />
  </div>
);

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            A blend of core mechanical engineering competencies and modern CAD/CAE
            software proficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
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
                  isVisible={isVisible}
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
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
