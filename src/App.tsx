import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import TechSkills from "./components/TechSkills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <TechSkills />
        <Certifications />
        <Projects />
        <Languages />
        <Contact />
      </main>
    </div>
  );
}