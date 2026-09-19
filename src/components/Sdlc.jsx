import { sdlc } from "../data/resumeData";

export default function Sdlc() {
  return (
    <section id="sdlc" className="py-20 lg:py-24 border-t border-panel-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow">Software lifecycle</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-2 mb-10">I own every phase, not just the code</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sdlc.map((s, i) => (
            <li key={s.phase} className="rounded-2xl bg-panel border border-panel-border p-5 relative">
              <span className="font-mono text-xs text-bill-deep">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-lg font-semibold text-ink mt-1">{s.phase}</h3>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">{s.proof}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
