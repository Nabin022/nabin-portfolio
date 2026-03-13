import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    title: "Introduction to Engineering Mechanics",
    platform: "Coursera",
    year: "2024",
    link: "https://www.coursera.org/learn/engineering-mechanics-statics",
  },
  {
    title: "Introduction to Thermodynamics: Transferring Energy from Here to There",
    platform: "Coursera",
    year: "2025",
    link: "https://www.coursera.org/learn/thermodynamics-intro",
  },
  {
    title: "Introduction to Additive Manufacturing Processes",
    platform: "Coursera",
    year: "2026",
    link: "https://www.coursera.org/learn/additive-manufacturing",
  },
  {
    title: "AutoCAD for Beginners",
    platform: "Coursera",
    year: "2026",
    link: "https://www.coursera.org/learn/autocad",
  },
  {
    title: "Mastering Programming with MATLAB",
    platform: "Coursera",
    year: "2026",
    link: "https://www.coursera.org/learn/matlab",
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-12 md:py-16 bg-muted/30 relative z-10">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary">Certifications</span> & Courses
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Continuous learning through industry-recognized courses and certifications.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`group border hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm leading-snug text-foreground mb-1">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {cert.platform}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    View Course
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
