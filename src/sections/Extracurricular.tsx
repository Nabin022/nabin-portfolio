import { Heart, PartyPopper, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const activities = [
  {
    icon: PartyPopper,
    title: "College Fest & Fresher's Event Organizer",
    description:
      "Core organizer member of the college annual fest and fresher's welcome event, coordinating logistics, planning activities, and ensuring smooth execution.",
  },
  {
    icon: Users,
    title: "NSS Volunteer",
    description:
      "Actively volunteered with the National Service Scheme (NSS), participating in community outreach programmes and social awareness campaigns.",
  },
  {
    icon: Heart,
    title: "Blood Donation Camp Volunteer",
    description:
      "Volunteered at blood donation camps organized by the college, helping with coordination, donor registration, and awareness drives.",
  },
];

const Extracurricular = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="extracurricular" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Extra-Curricular <span className="text-primary">Activities</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Beyond academics — leadership, volunteering, and community involvement.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className={`group border hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-5 text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary w-fit">
                    <activity.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 text-foreground">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
