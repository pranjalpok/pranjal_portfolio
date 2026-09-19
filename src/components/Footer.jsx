import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="border-t border-panel-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-dim">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="hover:text-mallard-deep transition-colors">Back to top &uarr;</a>
      </div>
    </footer>
  );
}
