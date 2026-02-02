import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.jpg";
import engineeringSolutions from "@/assets/engineering-solutions.jpg";
import digitalProductDesign from "@/assets/digital-product-design.jpg";
import brandIdentity from "@/assets/brand-identity.jpg";
import pistonThermalAnalysis from "@/assets/piston-thermal-analysis.jpg";
const serviceShowcase = [{
  title: "Engineering & Technical Solutions",
  image: engineeringSolutions,
  accent: "from-blue-500/20 to-cyan-500/20"
}, {
  title: "Digital Product & UI/UX Design",
  image: digitalProductDesign,
  accent: "from-purple-500/20 to-pink-500/20"
}, {
  title: "Brand Identity & Visual Media",
  image: brandIdentity,
  accent: "from-emerald-500/20 to-teal-500/20"
}, {
  title: "Piston Thermal Analysis",
  image: pistonThermalAnalysis,
  accent: "from-orange-500/20 to-red-500/20"
}];
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="section-container z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Available for opportunities</span>
            </div>

            {/* Profile Picture - Mobile only */}
            <div className="lg:hidden mb-6">
              <Avatar className="w-28 h-28 mx-auto ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl">
                <AvatarImage src={profilePhoto} alt="Nabin Sarkar" className="object-cover" />
                <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">
                  NS
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary relative">
                Nabin
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q25,0 50,8 T100,8" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">Mechanical Engineer</p>

            {/* Bio */}
            <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
              Final-year Mechanical Engineering student with hands-on exposure to
              thermal power plants and experience in design and analysis using
              tools like ANSYS and AutoCAD.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" onClick={() => document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Get in Touch
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group" onClick={() => document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth"
            })}>
                View Projects
              </Button>
            </div>
          </div>

          {/* Right side - Profile & Service Showcase */}
          <div className="hidden lg:block relative animate-fade-in">
            {/* Large Profile Picture */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <Avatar className="w-40 h-40 ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-2xl">
                  <AvatarImage src={profilePhoto} alt="Nabin Sarkar" className="object-cover" />
                  <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
                    NS
                  </AvatarFallback>
                </Avatar>
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
              </div>
            </div>

            {/* Service Showcase Grid */}
            <div className="grid grid-cols-2 gap-4">
              {serviceShowcase.map((service, index) => <div key={index} className="group relative overflow-hidden rounded-xl bg-card border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="aspect-square overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs font-medium text-foreground leading-tight">
                      {service.title}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Mobile Service Showcase */}
        <div className="lg:hidden mt-12 animate-fade-in">
          <div className="grid grid-cols-2 gap-3">
            {serviceShowcase.map((service, index) => <div key={index} className="group relative overflow-hidden rounded-xl bg-card border shadow-sm">
                <div className="aspect-square overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="text-xs font-medium text-foreground leading-tight">
                    {service.title}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>;
};
export default HeroSection;