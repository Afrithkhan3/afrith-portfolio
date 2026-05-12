import { useEffect, useRef } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Languages />
        <Contact />
      </main>
    </div>
  );
}