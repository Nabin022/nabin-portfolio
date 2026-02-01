import { Cog, Palette, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cog,
    title: "Engineering & Technical Solutions",
    items: [
      "Mechanical Design & 3D Modeling",
      "FEA/CFD Analysis",
      "Technical Documentation",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Palette,
    title: "Digital Product & UI/UX Design",
    items: [
      "UI/UX Design in Figma",
      "Interactive Prototyping",
      "Dashboard Design",
    ],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Video,
    title: "Brand Identity & Visual Media",
    items: [
      "Graphic Design & Branding",
      "Video Production & Editing",
      "Presentation Design",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Offering a unique blend of engineering expertise and creative design
          capabilities.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30"
            >
              <CardHeader className="text-center pb-2">
                <div
                  className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
