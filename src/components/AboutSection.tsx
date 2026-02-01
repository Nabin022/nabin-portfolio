import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const experience = [
  {
    title: "Industrial Training",
    company: "Mejia Thermal Power Station (DVC)",
    duration: "15 days",
  },
  {
    title: "Industrial Training",
    company: "Railway Workshop under RKVY",
    duration: "18 days",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A passionate mechanical engineering student with practical industry
          exposure and a keen interest in thermal systems and CAD/CAE tools.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-primary hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-primary font-medium">
                        {edu.year}
                      </span>
                      <span className="text-muted-foreground">{edu.score}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-accent hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-sm text-primary font-medium mt-2">
                      Duration: {exp.duration}
                    </p>
                  </CardContent>
                </Card>
              ))}

              {/* Summary Card */}
              <Card className="bg-muted/50 border-dashed">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gained practical exposure to thermal power generation,
                    boiler operations, turbine systems, and railway workshop
                    manufacturing processes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
