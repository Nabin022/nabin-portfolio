import { Wrench, Monitor, Thermometer, PenTool, Factory, Flame, Sparkles, Layout, PenLine, Image, Video } from "lucide-react";
import { motion } from "framer-motion";
import { MotionSection, staggerContainer, staggerItem } from "@/components/MotionSection";

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
import skillsBg from "@/assets/skills-bg.jpg";
import mechanicalCardBg from "@/assets/mechanical-card-bg.jpg";
import softwareCardBg from "@/assets/software-card-bg.jpg";
import autocadIcon from "@/assets/autocad-icon.jpg";
import solidworksIcon from "@/assets/solidworks-icon.jpg";
import ansysIcon from "@/assets/ansys-icon.jpg";
import matlabIcon from "@/assets/matlab-icon.jpg";

const mechanicalSkills = [
  { name: "Thermal Engineering", icon: Thermometer, description: "Heat transfer & thermal analysis" },
  { name: "Engineering Drawing", icon: PenTool, description: "CAD & technical blueprints" },
  { name: "Manufacturing Engineering", icon: Factory, description: "Production processes" },
  { name: "Basic Welding", icon: Flame, description: "Joining techniques" },
];

const softwareSkills = [
  { name: "AutoCAD", image: autocadIcon, description: "2D/3D drafting & design" },
  { name: "SolidWorks", image: solidworksIcon, description: "3D CAD modeling" },
  { name: "ANSYS", image: ansysIcon, description: "FEA & simulation" },
  { name: "MATLAB", image: matlabIcon, description: "Numerical computing" },
];

const designSkills = [
  { name: "UI/UX Design", icon: Layout, description: "Interface layout & usability" },
  { name: "Wireframing & Prototyping", icon: PenLine, description: "Low & high-fidelity flows" },
  { name: "Graphic Design", icon: Image, description: "Posters & visual layouts" },
  { name: "Video Editing", icon: Video, description: "Timelines & motion edits" },
  { name: "Prompt Engineering & AI", icon: Sparkles, description: "ChatGPT & workflow automation" },
];

const Skills = () => {
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
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />

      <div className="section-container relative z-10">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            A blend of core mechanical engineering competencies, modern CAD/CAE
            software proficiency, and creative design skills.
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Mechanical Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative rounded-2xl p-8 md:p-10 shadow-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden min-h-[320px]"
              style={{
                backgroundImage: `url(${mechanicalCardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[80px] rounded-tr-2xl z-10" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-colors" />
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20">
                      <Wrench className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Core Mechanical Skills</h3>
                    <p className="text-sm text-muted-foreground">Engineering fundamentals</p>
                  </div>
                </div>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {mechanicalSkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={staggerItem}
                        className="group/skill flex flex-col items-center p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 text-primary mb-3 group-hover/skill:bg-primary/20 group-hover/skill:scale-110 transition-all duration-300">
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <h4 className="text-sm font-semibold text-foreground text-center mb-1">{skill.name}</h4>
                        <p className="text-xs text-muted-foreground text-center">{skill.description}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>

            {/* Software Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
              className="group relative rounded-2xl p-8 md:p-10 shadow-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 overflow-hidden min-h-[320px]"
              style={{
                backgroundImage: `url(${softwareCardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-[80px] rounded-tr-2xl z-10" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-xl blur-lg group-hover:bg-accent/30 transition-colors" />
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent border border-accent/20">
                      <Monitor className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Software & Tools</h3>
                    <p className="text-sm text-muted-foreground">CAD/CAE proficiency</p>
                  </div>
                </div>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {softwareSkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      className="group/skill flex flex-col items-center p-5 rounded-xl bg-background/50 border border-border/50 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden mb-3 grayscale group-hover/skill:grayscale-0 opacity-80 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300">
                        <img src={skill.image} alt={skill.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground text-center mb-1">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground text-center">{skill.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Design, Media & AI Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
              className="group relative rounded-2xl p-8 md:p-10 shadow-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden min-h-[320px] bg-card"
            >
              <div className="absolute inset-0 bg-background/60 dark:bg-background/80" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[80px] rounded-tr-2xl z-10" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-colors" />
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20">
                      <Sparkles className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Design, Media & AI Skills</h3>
                    <p className="text-sm text-muted-foreground">Creative + AI-assisted productivity</p>
                  </div>
                </div>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-5 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {designSkills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={staggerItem}
                        className="group/skill flex flex-col items-center p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      >
                        <div className="p-3 rounded-lg bg-primary/10 text-primary mb-3 group-hover/skill:bg-primary/20 group-hover/skill:scale-110 transition-all duration-300">
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <h4 className="text-sm font-semibold text-foreground text-center mb-1">{skill.name}</h4>
                        <p className="text-xs text-muted-foreground text-center">{skill.description}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default Skills;
