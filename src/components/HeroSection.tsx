import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="section-container text-center z-10">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
            <AvatarImage src={profilePhoto} alt="Nabin Sarkar" className="object-cover" />
            <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">
              NS
            </AvatarFallback>
          </Avatar>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Nabin</span>{" "}
            <span className="text-primary">Sarkar</span>
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl text-primary font-medium mb-6">
            Mechanical Engineering Student
          </p>

          {/* Bio */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Final-year Mechanical Engineering student with hands-on exposure to
            thermal power plants and experience in design and analysis using
            tools like ANSYS and AutoCAD. Seeking an entry-level mechanical
            engineering role to apply core engineering knowledge and develop
            skills in plant operations, design, maintenance, and other core
            mechanical engineering domains.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="group"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
