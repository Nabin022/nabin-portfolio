import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MotionSection, staggerContainer, staggerItem } from "@/components/MotionSection";

const experience = [
  {
    title: "Industrial Training",
    company: "Mejia Thermal Power Station (DVC)",
    duration: "15 days",
    description:
      "Gained hands-on exposure to thermal power generation, boiler operations, and turbine systems.",
  },
  {
    title: "Industrial Training",
    company: "Railway Workshop under RKVY",
    duration: "18 days",
    description:
      "Learned about railway workshop manufacturing processes and maintenance operations.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Practical industry exposure and training experiences.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Industry Training</h3>
            </div>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {experience.map((exp, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-primary font-medium mt-2">
                        Duration: {exp.duration}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default Experience;
