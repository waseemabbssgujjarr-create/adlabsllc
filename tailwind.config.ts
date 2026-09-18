import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#160B17",
        inkSoft: "#4A3F4C",
        muted: "#726780",
        surface: "#FFFFFF",
        cream: "#FDF7F9",
        blush: "#FBEAF2",
        rule: "#160B1714",
        brand: {
          50: "#FDF1F6",
          100: "#FCE2EE",
          200: "#F8C1DB",
          300: "#F191BE",
          400: "#E7549A",
          500: "#D42A7C",
          600: "#B61568",
          700: "#960F57",
          800: "#780D47",
          900: "#520A32",
        },
        gold: "#C99A46",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      maxWidth: {
        container: "76rem",
        narrow: "42rem",
      },
      borderRadius: {
        std: "14px",
        lg2: "22px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(22,11,23,0.04), 0 12px 32px -12px rgba(22,11,23,0.12)",
        lift: "0 20px 45px -18px rgba(212,42,124,0.35)",
        card: "0 1px 1px rgba(22,11,23,0.03), 0 8px 24px -12px rgba(22,11,23,0.10)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        blobMove: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.08)" },
          "66%": { transform: "translate(-20px,18px) scale(0.96)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.8" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) both",
        floatSlow: "floatSlow 7s ease-in-out infinite",
        blobMove: "blobMove 16s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        pulseRing: "pulseRing 2.2s cubic-bezier(0,0,0.2,1) infinite",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
