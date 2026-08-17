import { useEffect, useState } from "react";
import { profile } from "../data/resumeData";
import useTheme from "../hooks/useTheme";

const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#numbers", label: "Numbers" },
  { href: "#capability", label: "Capabilities" },
  { href: "#dashboards", label: "Dashboards" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-full border border-panel-border text-mist-dim hover:text-teal-bright hover:border-teal transition-colors ${className}`}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M8 1.2v1.6M8 13.2v1.6M14.8 8h-1.6M2.8 8H1.2M12.7 3.3l-1.1 1.1M4.4 11.6l-1.1 1.1M12.7 12.7l-1.1-1.1M4.4 4.4L3.3 3.3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M13.5 9.3A5.8 5.8 0 016.7 2.5a5.8 5.8 0 106.8 6.8z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-900/90 backdrop-blur-md border-b border-panel-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-mist-bright tracking-tight text-lg">
          {profile.name.split(" ")[0]}
          <span className="text-teal">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-mono text-[13px] text-mist-dim">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-teal-bright transition-colors flex items-center gap-1.5"
              >
                <span className="text-mist-faint">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13px] font-mono px-4 py-2 rounded-full border border-panel-border text-mist-bright hover:border-teal hover:text-teal-bright transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="text-mist-bright p-2"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink-900 border-b border-panel-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-2 font-mono text-sm text-mist-dim">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-teal-bright">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
