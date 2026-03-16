import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MotionSection, staggerContainer, staggerItem } from "@/components/MotionSection";

const education = [
  {
    degree: "B.Tech – Mechanical Engineering",
    institution: "Cooch Behar Government Engineering College, MAKAUT",
    year: "Final Year",
    score: "CGPA: 6.77",
  },
  {
    degree: "Class XII",
    institution: "Putimari High School",
    year: "2021",
    score: "73.2%",
  },
  {
    degree: "Class X",
    institution: "Bamanhat High School",
    year: "2019",
    score: "74.85%",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 md:py-16 bg-muted/30 relative z-10">
      <div className="section-container">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            My academic journey in science and engineering.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Academic Background</h3>
            </div>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-primary font-medium">{edu.year}</span>
                        <span className="text-muted-foreground">{edu.score}</span>
                      </div>
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

export default Education;
