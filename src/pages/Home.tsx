import Navbar from "@/components/Navbar";
import MechanicalBackground from "@/components/MechanicalBackground";
import BackToTop from "@/components/BackToTop";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <MechanicalBackground />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
