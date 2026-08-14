/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080B14",
          950: "#050710",
          900: "#080B14",
          800: "#0D1220",
          700: "#121A2C",
          600: "#1A2438",
          500: "#243250",
        },
        panel: {
          DEFAULT: "#0E1424",
          border: "#1E2A44",
          hover: "#141C33",
        },
        mist: {
          DEFAULT: "#C4CAD9",
          bright: "#EDEFF5",
          dim: "#7C859C",
          faint: "#4B5468",
        },
        amber: {
          DEFAULT: "#E8B84B",
          bright: "#F5CC6E",
          dim: "#B8923A",
        },
        teal: {
          DEFAULT: "#31D6C0",
          bright: "#5CE9D6",
          dim: "#1E9C8C",
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
