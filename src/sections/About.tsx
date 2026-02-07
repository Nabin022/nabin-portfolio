import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          
          <Card className="max-w-3xl mx-auto border-2">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-center">
                I am a passionate Mechanical Engineering student in my final year at 
                Cooch Behar Government Engineering College. With hands-on experience in 
                thermal power plants and railway workshops, I have developed strong 
                practical skills alongside my theoretical knowledge. I am proficient in 
                CAD/CAE tools including AutoCAD, SolidWorks, and ANSYS, with a particular 
                interest in thermal analysis and design optimization. I'm seeking 
                opportunities to apply my engineering skills and contribute to innovative 
                projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
