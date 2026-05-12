import { marqueeItems } from "../data/portfolio";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="py-4 overflow-hidden border-t border-b"
      style={{ background: "var(--gold)", borderColor: "var(--border)" }}
    >
      <div className="flex gap-10 w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[10px] tracking-[0.2em] uppercase flex items-center gap-4 whitespace-nowrap"
            style={{ color: "#050508" }}
          >
            {item}
            <span style={{ fontSize: "8px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}