import { useReveal } from "../hooks/useReveal";
import { personal } from "../data/portfolio";

export default function About() {
  const ref1 = useReveal();
  const ref2 = useReveal();

  return (
    <section
      id="about"
      className="section-border px-8 md:px-20 py-28"
      style={{ background: "#050508" }}
    >
      {/* Label */}
      <div
        className="flex items-center gap-3 mb-3 font-mono text-[9px] tracking-[0.2em] uppercase"
        style={{ color: "var(--gold)" }}
      >
        <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        01 — Profile
      </div>

      <h2
        className="font-cormorant font-light leading-tight mb-16"
        style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}
      >
        Building things that{" "}
        <em className="italic" style={{ color: "var(--gold)" }}>
          matter
        </em>
      </h2>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Text */}
        <div ref={ref1} className="reveal space-y-5">
          {[
            <>
              I'm a <strong className="font-normal text-text1">Software Engineer</strong> with a BSc (Hons) in Information Technology from SLIIT, combining hands-on web development experience at Bohar Solutions with international remote IT support for a Dubai-based company.
            </>,
            <>
              My stack spans the full cycle — from crafting performant <strong className="font-normal text-text1">Laravel & PHP</strong> backends to building reactive <strong className="font-normal text-text1">React.js</strong> frontends, with strong database architecture across MySQL, MongoDB, and Firebase.
            </>,
            <>
              I've also operated on the infrastructure side — diagnosing networks, administering <strong className="font-normal text-text1">Microsoft 365</strong> environments, and keeping business-critical systems running remotely for UAE clients. This dual perspective makes me a more complete engineer.
            </>,
          ].map((para, i) => (
            <p
              key={i}
              className="leading-relaxed font-light"
              style={{ fontSize: "15px", color: "var(--text2)" }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Details table */}
        <div ref={ref2} className="reveal reveal-delay-2">
          {[
            ["Location", personal.location + " · Open to Gulf"],
            ["Education", "BSc (Hons) IT — SLIIT, 2020–2025"],
            ["Date of Birth", personal.dob],
            ["Nationality", personal.nationality],
            ["Email", personal.email],
            ["Phone", personal.phone],
            ["GitHub", "Afrithkhan3"],
            ["LinkedIn", "mohamedafrith-khan"],
          ].map(([key, val]) => (
            <div
              key={key}
              className="flex justify-between items-center py-4 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="font-mono text-[9px] tracking-[0.15em] uppercase"
                style={{ color: "var(--text3)" }}
              >
                {key}
              </span>
              <span
                className="text-xs font-light text-right"
                style={{ color: "var(--text2)" }}
              >
                {key === "Email" ? (
                  <a href={`mailto:${val}`} style={{ color: "var(--gold)" }}>
                    {val}
                  </a>
                ) : key === "GitHub" ? (
                  <a
                    href={personal.github}
                    target="_blank"
                    style={{ color: "var(--gold)" }}
                  >
                    {val}
                  </a>
                ) : key === "LinkedIn" ? (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    style={{ color: "var(--gold)" }}
                  >
                    {val}
                  </a>
                ) : (
                  val
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}