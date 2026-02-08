import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="about" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          
          <Card className="max-w-3xl mx-auto border-2">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-center">I am a final-year Mechanical Engineering student at Cooch Behar Government Engineering College with a strong passion for learning, problem-solving, and applying engineering knowledge in practical environments. I have built a solid foundation in core mechanical engineering subjects and remain open and enthusiastic about working across diverse mechanical engineering roles, including design, analysis, manufacturing, maintenance, and operations.
I have gained hands-on industrial exposure through training at thermal power plants and railway workshops, which provided valuable insight into real-world engineering systems, safety practices, and industrial workflows. I am proficient in AutoCAD, SolidWorks, and ANSYS, with experience in 3D modeling, simulation-based analysis, and design optimization. I am keen to apply these skills across various mechanical domains while continuously expanding my technical expertise.
Alongside engineering, I have a strong interest in creative and digital skills, including graphic design, UI/UX design, and video editing. I have worked on creative and promotional content for college clubs, technical and cultural fests, and other academic and extracurricular programs, which has strengthened my visual communication, creativity, and teamwork skills. This multidisciplinary background enables me to approach problems with both technical understanding and creative thinking. I am actively seeking entry-level opportunities where I can learn, contribute, and grow in mechanical as well as hybrid technical–creative roles.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;