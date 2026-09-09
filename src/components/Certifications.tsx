import { useReveal } from "../hooks/useReveal";
import { certifications, coreSkills } from "../data/portfolio";

function CoreSkillBar({ name, pct }: { name: string; pct: number }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-light" style={{ color: "var(--text2)" }}>{name}</span>
        <span className="text-[9px] tracking-[0.1em]" style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--gold)" }}>{pct}%</span>
      </div>
      <div className="h-px relative" style={{ background: "var(--border2)" }}>
        <div className="h-px absolute top-0 left-0 transition-all duration-[1.5s] ease-out"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, var(--gold), var(--gold2))` }} />
      </div>
    </div>
  );
}

export default function Certifications() {
  const ref = useReveal();

  return (
    <section className="section-border px-8 md:px-20 py-28" style={{ background: "#0d0d14" }}>
      <div className="flex items-center gap-3 mb-3 text-[9px] tracking-[0.2em] uppercase"
        style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--gold)" }}>
        <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        04 — Certifications & Core Skills
      </div>
      <h2 className="font-cormorant font-light leading-tight mb-16"
        style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}>
        My <em className="italic" style={{ color: "var(--gold)" }}>credentials</em>
      </h2>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Certifications */}
        <div ref={ref} className="reveal">
          <div className="text-[9px] tracking-[0.18em] uppercase mb-6"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--gold)" }}>
            Certificates
          </div>
          <div className="space-y-1" style={{ border: "1px solid var(--border)", background: "var(--border)", gap: "1px", display: "flex", flexDirection: "column" }}>
            {certifications.map((cert) => (
              <a key={cert.id} href={cert.url} target="_blank" rel="noreferrer"
                className="group flex items-start justify-between p-5 transition-all duration-300 relative overflow-hidden"
                style={{ background: "#0d0d14", textDecoration: "none" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "var(--gold4)" }} />
                <div className="absolute top-0 left-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: cert.color }} />
                <div className="relative z-10 flex-1">
                  <div className="text-sm font-light mb-1 transition-colors duration-200 group-hover:text-white"
                    style={{ color: "var(--text1)" }}>
                    {cert.title}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] tracking-[0.1em] uppercase"
                      style={{ fontFamily: "'JetBrains Mono',monospace", color: cert.color }}>
                      {cert.issuer}
                    </span>
                    <span className="text-[9px]" style={{ color: "var(--text3)" }}>·</span>
                    <span className="text-[9px] tracking-[0.08em]"
                      style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--text3)" }}>
                      {cert.date}
                    </span>
                  </div>
                </div>
                <span className="relative z-10 text-xs opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 ml-4 mt-1"
                  style={{ color: "var(--gold)" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div>
          <div className="text-[9px] tracking-[0.18em] uppercase mb-6"
            style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--gold)" }}>
            Core Competencies
          </div>
          <div className="space-y-6">
            {coreSkills.map((s) => (
              <CoreSkillBar key={s.name} name={s.name} pct={s.pct} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}