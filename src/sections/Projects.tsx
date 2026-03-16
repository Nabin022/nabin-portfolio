import { Thermometer, Box, TrendingUp, Cpu, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionSection } from "@/components/MotionSection";
import pistonImage from "@/assets/piston-thermal-analysis.jpg";

const projects = [
  {
    title: "Design, Thermal Analysis and Optimization of a Piston using ANSYS",
    description:
      "Comprehensive study involving 3D piston modeling in ANSYS Workbench, steady-state thermal analysis to evaluate temperature distribution across the piston crown, ring grooves, and skirt. Structural analysis was performed to assess von Mises stress and total deformation under combustion loading. The design was iteratively optimized by modifying material properties and geometric parameters to improve thermal resistance, reduce stress concentration, and enhance overall piston reliability and performance.",
    tags: ["ANSYS", "Thermal Analysis", "3D Modeling", "Optimization"],
    image: pistonImage,
    highlights: [
      {
        icon: Box,
        text: "3D piston model created using ANSYS Design Modeler with precise geometric parameters",
      },
      {
        icon: Thermometer,
        text: "Steady-state thermal analysis revealing temperature distribution from crown (300°C+) to skirt",
      },
      {
        icon: Cpu,
        text: "Structural FEA for von Mises stress and total deformation under combustion pressure",
      },
      {
        icon: BarChart3,
        text: "Mesh sensitivity study to ensure result accuracy and convergence",
      },
      {
        icon: TrendingUp,
        text: "Design optimization through material and geometry modifications for improved reliability",
      },
    ],
    links: {
      ansys: "https://www.ansys.com/products/structures/ansys-mechanical",
      thermalAnalysis: "https://www.ansys.com/products/fluids/ansys-fluent",
      modeling: "https://www.ansys.com/products/3d-design/ansys-spaceclaim",
      optimization: "https://www.ansys.com/products/structures/topology-optimization",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 bg-muted/30 relative z-10">
      <div className="section-container">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Showcasing my engineering projects and technical accomplishments.
          </p>

          <div className="max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover min-h-[280px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-sm font-medium text-foreground">Piston Thermal Analysis</p>
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
                          <div key={hIndex} className="flex items-start gap-3 text-sm">
                            <div className="p-1.5 rounded bg-primary/10 text-primary mt-0.5">
                              <highlight.icon className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-muted-foreground">{highlight.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags as links */}
                      <div className="flex flex-wrap gap-2">
                        <a href={project.links.ansys} target="_blank" rel="noopener noreferrer">
                          <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors">
                            ANSYS
                          </Badge>
                        </a>
                        <a href={project.links.thermalAnalysis} target="_blank" rel="noopener noreferrer">
                          <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors">
                            Thermal Analysis
                          </Badge>
                        </a>
                        <a href={project.links.modeling} target="_blank" rel="noopener noreferrer">
                          <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors">
                            3D Modeling
                          </Badge>
                        </a>
                        <a href={project.links.optimization} target="_blank" rel="noopener noreferrer">
                          <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors">
                            Optimization
                          </Badge>
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default Projects;
