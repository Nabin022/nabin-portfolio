import { ExternalLink, Thermometer, Box, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Design, Thermal Analysis and Optimization of a Piston using ANSYS",
    description:
      "Comprehensive study involving 3D piston modeling, thermal analysis for temperature distribution, stress and deformation analysis, and design optimization for improved performance and reliability.",
    tags: ["ANSYS", "Thermal Analysis", "3D Modeling", "Optimization"],
    highlights: [
      {
        icon: Box,
        text: "Designed piston model using ANSYS",
      },
      {
        icon: Thermometer,
        text: "Thermal analysis for temperature distribution, stress, deformation",
      },
      {
        icon: TrendingUp,
        text: "Optimized design for performance & reliability",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30 relative z-10">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Showcasing my engineering projects and technical accomplishments.
        </p>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-background/80 flex items-center justify-center">
                      <Thermometer className="h-16 w-16 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Piston Thermal Analysis
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mb-4">
                      {project.highlights.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="p-1.5 rounded bg-primary/10 text-primary mt-0.5">
                            <highlight.icon className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-muted-foreground">
                            {highlight.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="group">
                      View Details
                      <ExternalLink className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
