import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="about" className="min-h-screen py-12 md:py-16 relative z-10 flex items-center justify-center">
      <div className="section-container">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          
          <Card className="max-w-3xl mx-auto border-2">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg text-justify font-serif">I am a final-year Mechanical Engineering student at Cooch Behar Government Engineering College with a strong interest in learning and working across diverse mechanical engineering roles, including design, analysis, manufacturing, maintenance, and operations. I have gained hands-on industrial exposure through training at thermal power plants and railway workshops, which strengthened my understanding of real-world engineering systems and industrial practices. I am proficient in AutoCAD, SolidWorks, and ANSYS, with experience in 3D modeling, simulation-based analysis, and design optimization.
Alongside my technical background, I also have a strong interest in creative and digital domains, including graphic design, UI/UX design, and video editing. I have worked on creative content for college clubs, technical and cultural fests, and other academic programs, enhancing my communication, creativity, and teamwork skills. I am actively seeking entry-level opportunities where I can contribute, learn, and grow in mechanical as well as multidisciplinary roles.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;