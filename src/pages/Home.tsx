import Navbar from "@/components/Navbar";
import MechanicalBackground from "@/components/MechanicalBackground";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
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
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
