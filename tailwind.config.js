/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#050508",
        dark: "#0d0d14",
        dark2: "#13131e",
        dark3: "#1a1a28",
        gold: "#c8a96e",
        gold2: "#e8cc9a",
        text1: "#f0ede8",
        text2: "#9a9898",
        text3: "#5a585e",
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"],
        outfit: ["Outfit", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
        orbFloat: "orbFloat 8s ease-in-out infinite",
        orbFloat2: "orbFloat2 10s ease-in-out infinite",
        scrollLine: "scrollLine 2s ease infinite",
        fadeUp: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse2: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
        orbFloat: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(40px,-40px)" },
        },
        orbFloat2: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-30px,30px)" },
        },
        scrollLine: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(60px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};