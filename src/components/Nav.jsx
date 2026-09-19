import { useEffect, useState } from "react";
import { profile, stafftransit } from "../data/resumeData";
import useTheme from "../hooks/useTheme";
import Duck from "./Duck";

const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#dashboards", label: "Dashboards" },
  { href: "#skills", label: "Skills" },
  { href: "#sdlc", label: "SDLC" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full border border-panel-border text-ink-soft hover:text-mallard-deep hover:border-mallard transition-colors"
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8 1.2v1.6M8 13.2v1.6M14.8 8h-1.6M2.8 8H1.2M12.7 3.3l-1.1 1.1M4.4 11.6l-1.1 1.1M12.7 12.7l-1.1-1.1M4.4 4.4L3.3 3.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.5 9.3A5.8 5.8 0 016.7 2.5a5.8 5.8 0 106.8 6.8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-page/90 backdrop-blur-md border-b border-panel-border" : ""}`}>
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg text-ink tracking-tight">
          <Duck />
          {profile.name.split(" ")[0]}
        </a>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-ink-soft">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-mallard-deep transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={stafftransit.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-mallard text-white hover:bg-mallard-deep transition-colors"
          >
            StaffTransit <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="text-ink p-2">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-2 text-sm text-ink-soft">
            {LINKS.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
            <li><a href={stafftransit.url} target="_blank" rel="noreferrer" className="text-mallard-deep font-medium">StaffTransit ↗</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
