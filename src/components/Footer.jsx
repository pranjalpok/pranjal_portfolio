import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="border-t border-panel-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[12px] text-mist-faint">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, Tailwind &amp; Recharts.
        </p>
        <a href="#top" className="font-mono text-[12px] text-mist-faint hover:text-teal-bright transition-colors">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
