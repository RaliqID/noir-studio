import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        mono: ['"Space Grotesk"', "monospace"],
      },
      colors: {
        noir: {
          bg: "#08080a",
          surface: "#0f0f13",
          card: "#141419",
          border: "#23232b",
          muted: "#7e7e8d",
          light: "#eaebee",
          accent: "#34d399",
          accentDim: "#064e3b",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.25em",
        widest3: "0.35em",
      },
      keyframes: {
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "ping-slow": "ping-slow 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
