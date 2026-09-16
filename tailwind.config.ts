import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12161C",
        inkSoft: "#3A3F47",
        parchment: "#EFECE3",
        parchmentDeep: "#E2DDCE",
        paper: "#FFFFFF",
        green: "#1F6F5C",
        greenDeep: "#164F42",
        gold: "#B98B3E",
        muted: "#63645C",
        rule: "#12161C1F",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-plex-sans)", "-apple-system", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        container: "68rem", // ~1088px — a deliberately tightened, standards-style reading measure
        narrow: "42rem",
      },
      borderRadius: {
        std: "10px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease both",
        floatSlow: "floatSlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
