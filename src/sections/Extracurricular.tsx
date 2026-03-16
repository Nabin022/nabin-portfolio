import { Heart, PartyPopper, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MotionSection, staggerContainer, staggerItem } from "@/components/MotionSection";

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
  return (
    <section id="extracurricular" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Extra-Curricular <span className="text-primary">Activities</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Beyond academics — leadership, volunteering, and community involvement.
          </p>

          <motion.div
            className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {activities.map((activity, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="group border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
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
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </div>
    </section>
  );
};

export default Extracurricular;
