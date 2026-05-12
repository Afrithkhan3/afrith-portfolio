import { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import { languages } from "../data/portfolio";

function LangBar({ pct }: { pct: number }) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && fillRef.current) {
          fillRef.current.style.width = pct + "%";
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (fillRef.current) observer.observe(fillRef.current.parentElement!);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="h-px mt-5 relative" style={{ background: "var(--border2)" }}>
      <div
        ref={fillRef}
        className="h-px absolute top-0 left-0 transition-all duration-[1.5s] ease-out"
        style={{ width: "0%", background: "var(--gold)" }}
      >
        <div
          className="absolute -right-1 -top-1.5 w-3 h-3 rounded-full"
          style={{ background: "var(--gold)" }}
        />
      </div>
    </div>
  );
}

export default function Languages() {
  const ref = useReveal();

  return (
    <section
      className="section-border px-8 md:px-20 py-28"
      style={{ background: "#0d0d14" }}
    >
      <div
        className="flex items-center gap-3 mb-3 font-mono text-[9px] tracking-[0.2em] uppercase"
        style={{ color: "var(--gold)" }}
      >
        <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
        05 — Languages
      </div>

      <h2
        className="font-cormorant font-light leading-tight mb-16"
        style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}
      >
        I{" "}
        <em className="italic" style={{ color: "var(--gold)" }}>
          communicate
        </em>{" "}
        in
      </h2>

      <div
        ref={ref}
        className="reveal grid grid-cols-2 md:grid-cols-4"
        style={{
          borderTop: "1px solid var(--border)",
          borderLeft: "1px solid var(--border)",
        }}
      >
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="group p-8 relative overflow-hidden transition-all duration-300"
            style={{
              borderBottom: "1px solid var(--border)",
              borderRight: "1px solid var(--border)",
            }}
            data-hover
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
              style={{ background: "var(--gold4)" }}
            />
            <div
              className="font-cormorant font-light leading-none mb-2 relative z-10"
              style={{ fontSize: "2.2rem", letterSpacing: "-0.02em" }}
            >
              {lang.name}
            </div>
            <div
              className="font-mono text-[9px] tracking-[0.15em] uppercase relative z-10"
              style={{ color: "var(--text3)" }}
            >
              {lang.level}
            </div>
            <div className="relative z-10">
              <LangBar pct={lang.pct} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}