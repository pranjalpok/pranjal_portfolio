/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "rgb(var(--c-ink-900) / <alpha-value>)",
          950: "rgb(var(--c-ink-950) / <alpha-value>)",
          900: "rgb(var(--c-ink-900) / <alpha-value>)",
          800: "rgb(var(--c-ink-800) / <alpha-value>)",
          700: "rgb(var(--c-ink-700) / <alpha-value>)",
          600: "rgb(var(--c-ink-600) / <alpha-value>)",
          500: "rgb(var(--c-ink-500) / <alpha-value>)",
        },
        panel: {
          DEFAULT: "rgb(var(--c-panel) / <alpha-value>)",
          border: "rgb(var(--c-panel-border) / <alpha-value>)",
          hover: "rgb(var(--c-panel-hover) / <alpha-value>)",
        },
        mist: {
          DEFAULT: "rgb(var(--c-mist) / <alpha-value>)",
          bright: "rgb(var(--c-mist-bright) / <alpha-value>)",
          dim: "rgb(var(--c-mist-dim) / <alpha-value>)",
          faint: "rgb(var(--c-mist-faint) / <alpha-value>)",
        },
        amber: {
          DEFAULT: "rgb(var(--c-amber) / <alpha-value>)",
          bright: "rgb(var(--c-amber-bright) / <alpha-value>)",
          dim: "rgb(var(--c-amber-dim) / <alpha-value>)",
        },
        teal: {
          DEFAULT: "rgb(var(--c-teal) / <alpha-value>)",
          bright: "rgb(var(--c-teal-bright) / <alpha-value>)",
          dim: "rgb(var(--c-teal-dim) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        pulsedot: {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
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
