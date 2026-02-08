import { Wrench, Monitor, Cpu, Cog } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import skillsBg from "@/assets/skills-bg.jpg";
const mechanicalSkills = [
  { name: "Thermal Engineering", level: 80, icon: Cog },
  { name: "Manufacturing Engineering", level: 75, icon: Wrench },
  { name: "Engineering Drawing", level: 85, icon: Cpu },
  { name: "Basic Welding", level: 70, icon: Wrench },
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
  variant = "primary",
}: {
  name: string;
  level: number;
  delay: number;
  isVisible: boolean;
  variant?: "primary" | "accent";
}) => (
  <div
    className={`mb-5 transition-all duration-500 ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className={`text-sm font-bold ${variant === "primary" ? "text-primary" : "text-accent"}`}>
        {level}%
      </span>
    </div>
    <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary/50 backdrop-blur-sm">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${
          variant === "primary"
            ? "bg-gradient-to-r from-primary via-primary to-primary/70"
            : "bg-gradient-to-r from-accent via-accent to-accent/70"
        }`}
        style={{
          width: isVisible ? `${level}%` : "0%",
          boxShadow: isVisible
            ? variant === "primary"
              ? "0 0 20px hsl(var(--primary) / 0.4)"
              : "0 0 20px hsl(var(--accent) / 0.4)"
            : "none",
        }}
      />
      {/* Animated shine effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
          isVisible ? "translate-x-full" : "-translate-x-full"
        }`}
        style={{ transitionDelay: `${delay + 500}ms` }}
      />
    </div>
  </div>
);

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      className="min-h-screen py-16 md:py-24 relative z-10 flex items-center"
      style={{
        backgroundImage: `url(${skillsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      
      <div className="section-container relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            A blend of core mechanical engineering competencies and modern CAD/CAE
            software proficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mechanical Skills Card */}
            <div className="group relative bg-gradient-to-br from-card via-card to-card/80 rounded-2xl p-6 shadow-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[60px] rounded-tr-2xl" />
              
              <div className="flex items-center gap-4 mb-8 relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-colors" />
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20">
                    <Wrench className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Core Mechanical Skills</h3>
                  <p className="text-xs text-muted-foreground">Engineering fundamentals</p>
                </div>
              </div>

              <div className="space-y-1">
                {mechanicalSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 100}
                    isVisible={isVisible}
                    variant="primary"
                  />
                ))}
              </div>
            </div>

            {/* Software Skills Card */}
            <div className="group relative bg-gradient-to-br from-card via-card to-card/80 rounded-2xl p-6 shadow-xl border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-[60px] rounded-tr-2xl" />
              
              <div className="flex items-center gap-4 mb-8 relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-xl blur-lg group-hover:bg-accent/30 transition-colors" />
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent border border-accent/20">
                    <Monitor className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Software & Tools</h3>
                  <p className="text-xs text-muted-foreground">CAD/CAE proficiency</p>
                </div>
              </div>

              <div className="space-y-1">
                {softwareSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 100}
                    isVisible={isVisible}
                    variant="accent"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
