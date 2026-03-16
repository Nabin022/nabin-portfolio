import { ArrowDown, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";
import engineeringSolutions from "@/assets/engineering-solutions.jpg";
import digitalProductDesign from "@/assets/digital-product-design.jpg";
import brandIdentity from "@/assets/brand-identity.jpg";
import pistonThermalAnalysis from "@/assets/piston-thermal-analysis.jpg";
import { staggerContainer, staggerItem } from "@/components/MotionSection";

const serviceShowcase = [
  { title: "Engineering & Technical Solutions", image: engineeringSolutions, accent: "from-blue-500/20 to-cyan-500/20" },
  { title: "Digital Product & UI/UX Design", image: digitalProductDesign, accent: "from-purple-500/20 to-pink-500/20" },
  { title: "Brand Identity & Visual Media", image: brandIdentity, accent: "from-emerald-500/20 to-teal-500/20" },
  { title: "Piston Thermal Analysis", image: pistonThermalAnalysis, accent: "from-orange-500/20 to-red-500/20" },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="section-container z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12">
          {/* Left - Text */}
          <motion.div
            className="text-center lg:text-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Open to opportunities</span>
            </div>

            <div className="lg:hidden mb-6">
              <Avatar className="w-28 h-28 mx-auto ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl">
                <AvatarImage src={profilePhoto} alt="Nabin Sarkar" className="object-cover" />
                <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">NS</AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary relative">
                Nabin
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q25,0 50,8 T100,8" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">Mechanical Engineer</p>

            <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg max-w-xl">
              Final-year Mechanical Engineering student with hands-on exposure to thermal power plants and experience in design and analysis using tools like ANSYS and AutoCAD.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
              <Button size="lg" className="group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Get in Touch
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View Projects
              </Button>
              <Button variant="secondary" size="lg" className="group" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right - Profile Photo (Desktop) */}
          <motion.div
            className="hidden lg:flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <Avatar className="w-44 h-44 ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-2xl">
                <AvatarImage src={profilePhoto} alt="Nabin Sarkar" className="object-cover" />
                <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">NS</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>

        {/* Service Showcase */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {serviceShowcase.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-xl bg-card border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="aspect-square overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-xs font-medium text-foreground leading-tight">{service.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
