import { Card, CardContent } from "@/components/ui/card";
import { MotionSection } from "@/components/MotionSection";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Prof. Rajesh Sharma",
    role: "Faculty Advisor, Mechanical Engineering",
    text: "Nabin demonstrates exceptional analytical skills and a strong work ethic. His ability to bridge mechanical engineering with modern software tools sets him apart from his peers.",
    rating: 5,
  },
  {
    name: "Amit Das",
    role: "Senior Engineer, Industrial Training Supervisor",
    text: "During his industrial training, Nabin showed remarkable initiative and eagerness to learn. He quickly grasped complex manufacturing processes and contributed meaningful insights to our team.",
    rating: 5,
  },
  {
    name: "Dr. Suman Roy",
    role: "Project Guide, B.Tech Department",
    text: "Nabin's dedication to his projects is commendable. His technical reports are thorough, well-researched, and demonstrate a deep understanding of mechanical engineering principles.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Testimonials & <span className="text-primary">Recommendations</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            What mentors and colleagues say about working with me
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="border-2 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/60 transition-colors mb-3 shrink-0" />

                  <p className="text-muted-foreground text-sm leading-relaxed italic flex-1 mb-4">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default Testimonials;
