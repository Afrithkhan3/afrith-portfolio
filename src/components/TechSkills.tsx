import { useReveal } from "../hooks/useReveal";
import { techSkills } from "../data/portfolio";

export default function TechSkills() {
  const ref = useReveal();

  return (
    <section className="section-border px-8 md:px-20 py-28" style={{ background: "#050508" }}>
      <div className="flex items-center gap-3 mb-3 text-[9px] tracking-[0.2em] uppercase"
        style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--gold)" }}>
        <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        03B — Technologies
      </div>
      <h2 className="font-cormorant font-light leading-tight mb-16"
        style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}>
        Tools I <em className="italic" style={{ color: "var(--gold)" }}>work with</em>
      </h2>

      <div ref={ref} className="reveal grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-1"
        style={{ border: "1px solid var(--border)", background: "var(--border)" }}>
        {techSkills.map((skill) => (
          <div key={skill.name}
            className="group flex flex-col items-center justify-center gap-3 p-5 transition-all duration-300"
            style={{ background: "#050508" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#13131e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#050508")}
            data-hover>
            <div className="relative">
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--gold4)", filter: "blur(8px)", transform: "scale(1.5)" }} />
              <img src={skill.icon} alt={skill.name} className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>
            <span className="text-[9px] tracking-[0.1em] uppercase text-center"
              style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--text3)" }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}