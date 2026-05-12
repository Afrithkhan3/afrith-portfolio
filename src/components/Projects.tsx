import { useReveal } from "../hooks/useReveal";
import { projects, research, personal } from "../data/portfolio";

export default function Projects() {
  const gridRef = useReveal();
  const researchRef = useReveal();

  return (
    <section
      id="projects"
      className="section-border px-8 md:px-20 py-28"
      style={{ background: "#050508" }}
    >
      <div
        className="flex items-center gap-3 mb-3 font-mono text-[9px] tracking-[0.2em] uppercase"
        style={{ color: "var(--gold)" }}
      >
        <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        04 — Projects
      </div>

      <h2
        className="font-cormorant font-light leading-tight mb-16"
        style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}
      >
        Things I've{" "}
        <em className="italic" style={{ color: "var(--gold)" }}>
          built
        </em>
      </h2>

      {/* Project grid */}
      <div
        ref={gridRef}
        className="reveal grid md:grid-cols-3 border"
        style={{
          borderColor: "var(--border)",
          background: "var(--border)",
          gap: "1px",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.num}
            className="group relative overflow-hidden p-8 transition-colors duration-300"
            style={{ background: "#050508" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#13131e")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#050508")
            }
            data-hover
          >
            {/* Top gold line */}
            <div
              className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{ background: "var(--gold)" }}
            />
            <div
              className="font-cormorant font-light leading-none mb-5"
              style={{
                fontSize: "3rem",
                color: "var(--border)",
                letterSpacing: "-0.03em",
                transition: "color 0.3s",
              }}
            >
              {p.num}
            </div>
            <div
              className="font-cormorant font-light leading-snug mb-2"
              style={{ fontSize: "1.2rem", letterSpacing: "-0.01em" }}
            >
              {p.title}
            </div>
            <div
              className="font-mono text-[9px] tracking-[0.12em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              {p.stack}
            </div>
            <div
              className="text-xs font-light leading-relaxed"
              style={{ color: "var(--text2)" }}
            >
              {p.desc}
            </div>
          </div>
        ))}

        {/* GitHub CTA card */}
        <a
          href={personal.github}
          target="_blank"
          className="group relative overflow-hidden p-8 transition-colors duration-300"
          style={{ background: "#0d0d14" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#13131e")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#0d0d14")
          }
        >
          <div
            className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
            style={{ background: "var(--gold)" }}
          />
          <div
            className="font-cormorant font-light leading-none mb-5"
            style={{ fontSize: "3rem", color: "var(--gold)", letterSpacing: "-0.03em" }}
          >
            ↗
          </div>
          <div
            className="font-cormorant font-light leading-snug mb-2"
            style={{ fontSize: "1.2rem", letterSpacing: "-0.01em", color: "var(--text2)" }}
          >
            View All on GitHub
          </div>
          <div
            className="font-mono text-[9px] tracking-[0.12em] uppercase mb-4"
            style={{ color: "var(--text3)" }}
          >
            github.com/Afrithkhan3
          </div>
          <div
            className="text-xs font-light leading-relaxed"
            style={{ color: "var(--text3)" }}
          >
            Explore source code, commit history, and ongoing personal projects.
          </div>
        </a>
      </div>

      {/* Research block */}
      <div
        ref={researchRef}
        className="reveal mt-4 border grid md:grid-cols-2 overflow-hidden relative"
        style={{ borderColor: "var(--border2)", background: "#13131e" }}
      >
        {/* Gold left accent */}
        <div
          className="absolute top-0 left-0 bottom-0 w-1"
          style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
        />

        <div
          className="p-10 md:p-14 border-b md:border-b-0 md:border-r"
          style={{ borderColor: "var(--border)", paddingLeft: "3.5rem" }}
        >
          <div
            className="flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] uppercase mb-5"
            style={{ color: "var(--gold)" }}
          >
            <span className="w-5 h-px" style={{ background: "var(--gold)" }} />
            {research.tag}
          </div>
          <div
            className="font-cormorant font-light leading-tight mb-5"
            style={{ fontSize: "1.8rem", letterSpacing: "-0.02em" }}
          >
            {research.title}
          </div>
          <p
            className="text-xs font-light leading-relaxed"
            style={{ color: "var(--text2)" }}
          >
            {research.desc}
          </p>
        </div>

        <div className="p-10 flex flex-col justify-between">
          <div>
            <div
              className="font-mono text-[9px] tracking-[0.18em] uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Technologies Used
            </div>
            <div>
              {research.tech.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.1em] py-3 border-b transition-colors duration-200 hover:text-gold"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text3)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text3)")
                  }
                >
                  <span
                    className="w-1.5 h-1.5 border flex-shrink-0"
                    style={{ borderColor: "var(--gold)" }}
                  />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div
            className="font-mono text-[9px] tracking-[0.12em] uppercase mt-6"
            style={{ color: "var(--text3)" }}
          >
            Dataset split: {research.dataset}
          </div>
        </div>
      </div>
    </section>
  );
}