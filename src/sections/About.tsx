import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="section-container">
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
    </section>
  );
};

export default About;
