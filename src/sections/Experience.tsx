import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
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

            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className={`border-l-4 border-l-accent hover:shadow-md transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
