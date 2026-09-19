import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-24 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-6">
        <p className="eyebrow">Experience</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-2 mb-10">Where I've worked</h2>
        <ol className="relative border-l-2 border-panel-border ml-2 space-y-9">
          {experience.map((e, i) => (
            <li key={e.id} className="pl-7 relative">
              <span className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-page ${i === 0 ? "bg-bill-tint" : "bg-mallard"}`} />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {e.role} <span className="text-ink-dim font-normal">· {e.org}</span>
                </h3>
                <span className="font-mono text-xs text-ink-dim">{e.dates}</span>
              </div>
              <ul className="mt-2 space-y-1.5">
                {e.bullets.map((b) => (
                  <li key={b} className="text-[15px] text-ink-soft leading-relaxed">{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {e.tech.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-sand border border-panel-border text-ink-dim">{t}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
