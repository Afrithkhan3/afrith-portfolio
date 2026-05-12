import { motion } from "framer-motion";
import { personal, stats } from "../data/portfolio";
import afrithPhoto from "../assets/afrith.webp";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── FULL-BLEED BACKGROUND PHOTO ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={afrithPhoto}
          alt="Mohamed Afrith Khan"
          className="w-full h-full object-cover object-top"
          style={{ objectPosition: "center 20%" }}
        />
        {/* Multi-layer darkening so text is always readable */}
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(5,5,8,0.75) 55%, rgba(5,5,8,0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,5,8,1) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* ── GRID OVERLAY ── */}
      <div className="absolute inset-0 z-0 grid-bg opacity-40" />

      {/* ── GLOWING ORBS ── */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,110,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "orbFloat 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(79,127,255,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "orbFloat2 10s ease-in-out infinite",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        {/* Left — main content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-20 pt-32 pb-16">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-10">
            <span
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase border px-4 py-2"
              style={{
                color: "var(--text2)",
                borderColor: "var(--border2)",
                background: "var(--gold4)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#4caf82",
                  boxShadow: "0 0 8px #4caf82",
                  animation: "pulse2 2s ease-in-out infinite",
                }}
              />
              Open to Gulf opportunities
            </span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-cormorant font-light leading-none"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Mohamed
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              className="font-cormorant font-light leading-none"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Afrith
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="font-cormorant italic font-light leading-none"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                letterSpacing: "-0.03em",
                color: "var(--gold)",
              }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Khan
            </motion.h1>
          </div>

          {/* Role chips */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-2 mb-8">
            {["PHP / Laravel", "MERN Stack", "IT Support", "BSc IT — SLIIT"].map((r) => (
              <span
                key={r}
                className="font-mono text-[10px] tracking-[0.1em] uppercase border px-3 py-1.5"
                style={{
                  color: "var(--gold)",
                  borderColor: "rgba(200,169,110,0.3)",
                  background: "rgba(200,169,110,0.06)",
                }}
              >
                {r}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.65)}
            className="text-text2 font-light leading-relaxed mb-10 max-w-lg"
            style={{ fontSize: "15px" }}
          >
            {personal.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.75)} className="flex gap-6 items-center">
            <a
              href="#contact"
              className="font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-normal transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--gold)", color: "#050508" }}
            >
              Let's talk →
            </a>
            <a
              href="#experience"
              className="font-mono text-[10px] tracking-[0.15em] uppercase flex items-center gap-2 transition-colors duration-200"
              style={{ color: "var(--text2)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text2)")
              }
            >
              View experience ↓
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            {...fadeUp(1.0)}
            className="flex items-center gap-4 mt-16"
          >
            <div
              className="w-12 h-px relative overflow-hidden"
              style={{ background: "var(--border2)" }}
            >
              <div
                className="absolute top-0 h-full"
                style={{
                  width: "100%",
                  background: "var(--gold)",
                  left: "-100%",
                  animation: "scrollLine 2s ease infinite",
                }}
              />
            </div>
            <span
              className="font-mono text-[9px] tracking-[0.2em] uppercase"
              style={{ color: "var(--text3)" }}
            >
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* Right — stats panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex flex-col justify-center w-80 border-l px-10 py-16"
          style={{ borderColor: "var(--border)", background: "rgba(5,5,8,0.6)", backdropFilter: "blur(20px)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="py-6 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="font-cormorant font-light leading-none mb-2"
                style={{ fontSize: "3.5rem", letterSpacing: "-0.04em" }}
              >
                {s.num.replace("+", "")}
                <span style={{ color: "var(--gold)", fontSize: "1.8rem" }}>
                  {s.num.includes("+") ? "+" : ""}
                </span>
              </div>
              <div
                className="font-mono text-[8px] tracking-[0.18em] uppercase mb-1"
                style={{ color: "var(--text3)" }}
              >
                {s.label}
              </div>
              <div className="text-xs font-light" style={{ color: "var(--text2)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}