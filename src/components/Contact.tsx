import { useReveal } from "../hooks/useReveal";
import { personal } from "../data/portfolio";

const links = [
  { type: "Email", val: personal.email, href: `mailto:${personal.email}` },
  { type: "Phone", val: personal.phone, href: `tel:${personal.phone}` },
  { type: "LinkedIn", val: "mohamedafrith-khan", href: personal.linkedin },
  { type: "GitHub", val: "github.com/Afrithkhan3", href: personal.github },
];

export default function Contact() {
  const ref1 = useReveal();
  const ref2 = useReveal();

  return (
    <section
      id="contact"
      className="section-border px-8 md:px-20 py-28"
      style={{ background: "#0d0d14" }}
    >
      <div
        className="flex items-center gap-3 mb-3 font-mono text-[9px] tracking-[0.2em] uppercase"
        style={{ color: "var(--gold)" }}
      >
        <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        06 — Contact
      </div>

      <div
        className="grid md:grid-cols-2 gap-16 md:gap-24 pb-20 border-b mb-10"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Left */}
        <div ref={ref1} className="reveal">
          <h2
            className="font-cormorant font-light leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.03em" }}
          >
            Let's build something{" "}
            <em className="italic" style={{ color: "var(--gold)" }}>
              great
            </em>{" "}
            together
          </h2>
          <p
            className="font-light leading-relaxed mb-10"
            style={{ fontSize: "14px", color: "var(--text2)" }}
          >
            I'm actively seeking Software Engineering and IT Support roles in
            the Gulf region. If you have an opportunity that fits, I'd love to
            hear from you.
          </p>

          {/* Relocate chips */}
          <div
            className="font-mono text-[9px] tracking-[0.18em] uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Willing to relocate to
          </div>
          <div className="flex flex-wrap gap-2">
            {personal.relocate.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Right — links */}
        <div ref={ref2} className="reveal reveal-delay-2">
          {links.map((l) => (
            <a
              key={l.type}
              href={l.href}
              target={l.type === "LinkedIn" || l.type === "GitHub" ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center justify-between py-5 border-b relative overflow-hidden transition-colors duration-200"
              style={{ borderColor: "var(--border)", color: "var(--text1)" }}
            >
              {/* hover sweep */}
              <div
                className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 pointer-events-none"
                style={{ background: "var(--gold4)" }}
              />
              <div className="flex items-center gap-6 relative z-10">
                <span
                  className="font-mono text-[8px] tracking-[0.2em] uppercase w-16"
                  style={{ color: "var(--text3)" }}
                >
                  {l.type}
                </span>
                <span
                  className="text-sm font-light group-hover:text-gold transition-colors duration-200"
                  style={{ color: "var(--text2)" }}
                >
                  {l.val}
                </span>
              </div>
              <span
                className="relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                style={{ color: "var(--gold)", fontSize: "16px" }}
              >
                ↗
              </span>
            </a>
          ))}
          {/* top border for first item */}
          <style>{`.reveal a:first-of-type { border-top: 1px solid var(--border); }`}</style>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div
          className="font-cormorant font-light tracking-wide"
          style={{ fontSize: "1rem", color: "var(--text2)" }}
        >
          Mohamed Afrith Khan
          <span style={{ color: "var(--gold)" }}>.</span>
        </div>
        <div
          className="font-mono text-[9px] tracking-[0.12em] uppercase"
          style={{ color: "var(--text3)" }}
        >
          BSc (Hons) IT · SLIIT · 2025 · All rights reserved
        </div>
      </div>
    </section>
  );
}