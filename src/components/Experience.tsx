import { useReveal } from "../hooks/useReveal";
import { experiences } from "../data/portfolio";

function ExpCard({ exp }: { exp: typeof experiences[0] }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal group grid md:grid-cols-[260px_1fr] border-t relative overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "var(--gold4)" }}
      />
      <div className="relative z-10 py-10 md:pr-8">
        <div
          className="font-cormorant font-light leading-none mb-4"
          style={{ fontSize: "3.5rem", letterSpacing: "-0.04em", color: "var(--border2)" }}
        >
          {exp.year}
        </div>
        <div className="font-mono text-[9px] tracking-[0.12em] uppercase mb-2" style={{ color: "var(--gold)" }}>
          {exp.period}
        </div>
        <div className="text-xs font-light flex items-center gap-2" style={{ color: "var(--text3)" }}>
          <span style={{ color: "var(--gold)", fontSize: "10px" }}>◉</span>
          {exp.location}
        </div>
      </div>
      <div className="relative z-10 py-10 md:pl-10 border-t md:border-t-0 md:border-l" style={{ borderColor: "var(--border)" }}>
        <div className="font-cormorant font-light leading-tight mb-3" style={{ fontSize: "1.8rem", letterSpacing: "-0.02em" }}>
          {exp.company}
        </div>
        <span className="inline-block font-mono text-[9px] tracking-[0.12em] uppercase px-3 py-1 mb-5" style={{ background: "var(--gold)", color: "#050508" }}>
          {exp.role}
        </span>
        <ul className="space-y-1">
          {exp.bullets.map((b, j) => (
            <li key={j} className="relative pl-5 text-xs font-light leading-relaxed" style={{ color: "var(--text2)" }}>
              <span className="absolute left-0 top-2 w-2 h-px" style={{ background: "var(--gold)" }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-border px-8 md:px-20 py-28" style={{ background: "#050508" }}>
      <div className="flex items-center gap-3 mb-3 font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
        <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        02 — Work Experience
      </div>
      <h2 className="font-cormorant font-light leading-tight mb-16" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}>
        Where I've <em className="italic" style={{ color: "var(--gold)" }}>worked</em>
      </h2>
      <div>
        {experiences.map((exp, i) => <ExpCard key={i} exp={exp} />)}
        <div className="border-t" style={{ borderColor: "var(--border)" }} />
      </div>
    </section>
  );
}