import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, Linkedin, Instagram, Twitter, Github, Send, Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MotionSection, staggerContainer, staggerItem } from "@/components/MotionSection";

const EMAILJS_SERVICE_ID = "service_v5irr2l";
const EMAILJS_TEMPLATE_ID = "template_9tpaztn";
const EMAILJS_PUBLIC_KEY = "EIO93XYjSAcBvwM7m";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Cooch Behar, West Bengal, India", href: "https://www.google.com/maps/place/Cooch+Behar,+West+Bengal,+India" },
  { icon: Phone, label: "Phone", value: "+91 9083334064", href: "tel:+919083334064" },
  { icon: Mail, label: "Email", value: "nabin00032@gmail.com", href: "mailto:nabin00032@gmail.com" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nabin-sarkar-3b8665252", color: "hover:text-[#0077B5]" },
  { icon: Github, label: "GitHub", href: "https://github.com/Nabin022", color: "hover:text-foreground" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nabin.js", color: "hover:text-[#E4405F]" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/Nabin_2022", color: "hover:text-foreground" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name, from_email: formData.email, message: formData.message, to_name: "Nabin",
      }, EMAILJS_PUBLIC_KEY);
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Error", description: "Failed to send message. Please try again or email me directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 relative z-10">
      <div className="section-container">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {contactInfo.map((info, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="border-l-4 border-l-primary">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div variants={staggerItem} className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-muted hover:bg-primary/10 transition-all ${social.color}`} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message..." rows={4} value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                    </div>
                    <Button type="submit" className="w-full group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</>
                      ) : (
                        <>Send Message<Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default Contact;
