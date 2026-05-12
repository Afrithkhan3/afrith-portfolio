import { useEffect, useState } from "react";
import { personal } from "../data/portfolio";

const links = ["About", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-500 ${
        scrolled
          ? "py-4 border-b backdrop-blur-xl bg-black/80"
          : "py-6"
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      <a
        href="#home"
        className="font-cormorant text-lg font-light tracking-widest text-text1"
      >
        {personal.initials}
        <span style={{ color: "var(--gold)" }}>.</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-text2 hover:text-gold transition-colors duration-200 relative group"
            >
              {l}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:afrith.arf@gmail.com"
        className="hidden md:inline-block font-mono text-[10px] tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-200"
        style={{
          color: "var(--gold)",
          borderColor: "rgba(200,169,110,0.4)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--gold)";
          (e.currentTarget as HTMLElement).style.color = "#050508";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = "var(--gold)";
        }}
      >
        Hire Me
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ cursor: "none" }}
      >
        <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark2 border-b md:hidden"
          style={{ borderColor: "var(--border)" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-4 font-mono text-[10px] tracking-[0.15em] uppercase text-text2 hover:text-gold border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}