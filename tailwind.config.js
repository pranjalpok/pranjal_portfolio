/** @type {import('tailwindcss').Config} */
// Mallard-duck palette. Semantic tokens map to CSS variables in src/index.css
// (light is the default; dark lives under [data-theme="dark"]).
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: token("page"),
        sand: { DEFAULT: token("sand"), deep: token("sand-deep") },
        panel: { DEFAULT: token("panel"), border: token("panel-border") },
        ink: { DEFAULT: token("ink"), soft: token("ink-soft"), dim: token("ink-dim") },
        mallard: { DEFAULT: token("mallard"), deep: token("mallard-deep"), tint: token("mallard-tint") },
        bill: { DEFAULT: token("bill"), deep: token("bill-deep"), tint: token("bill-tint") },
        wing: { DEFAULT: token("wing"), deep: token("wing-deep"), tint: token("wing-tint") },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        panel: "0 1px 2px rgb(var(--c-shadow) / 0.06), 0 12px 28px -16px rgb(var(--c-shadow) / 0.18)",
      },
      keyframes: {
        flow: { "0%": { strokeDashoffset: "24" }, "100%": { strokeDashoffset: "0" } },
        pulsedot: {
          "0%, 100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.4)" },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        flow: "flow 1s linear infinite",
        pulsedot: "pulsedot 2.4s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
