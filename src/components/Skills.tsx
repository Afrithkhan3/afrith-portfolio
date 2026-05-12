import { useReveal } from "../hooks/useReveal";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      className="section-border px-8 md:px-20 py-28"
      style={{ background: "#0d0d14" }}
    >
      <div
        className="flex items-center gap-3 mb-3 font-mono text-[9px] tracking-[0.2em] uppercase"
        style={{ color: "var(--gold)" }}
      >
        <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        03 — Skills
      </div>

      <h2
        className="font-cormorant font-light leading-tight mb-16"
        style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}
      >
        My{" "}
        <em className="italic" style={{ color: "var(--gold)" }}>
          toolkit
        </em>
      </h2>

      <div ref={ref} className="reveal grid md:grid-cols-[300px_1fr] gap-16 md:gap-24">
        <p
          className="font-light leading-relaxed"
          style={{ fontSize: "15px", color: "var(--text2)" }}
        >
          A versatile stack built through academic projects, a software engineering internship, and real-world international IT support — covering the full cycle from architecture to deployment and infrastructure.
        </p>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div
                className="font-mono text-[9px] tracking-[0.18em] uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`chip ${group.highlight.includes(skill) ? "active" : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}