import { skillLanes } from "../data/resumeData";

const TONES = {
  mallard: { bar: "bg-mallard", chip: "bg-mallard/10 text-mallard-deep border-mallard/25" },
  wing: { bar: "bg-wing", chip: "bg-wing/10 text-wing-deep border-wing/25" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow">Skills</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-2 mb-10">Two lanes, one stack</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillLanes.map((lane) => {
            const t = TONES[lane.color];
            return (
              <div key={lane.title} className="rounded-2xl border border-panel-border bg-panel p-6 shadow-panel">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-1.5 h-6 rounded ${t.bar}`} />
                  <h3 className="font-display text-xl font-semibold text-ink">{lane.title}</h3>
                </div>
                <div className="space-y-4">
                  {lane.groups.map((g) => (
                    <div key={g.name}>
                      <div className="text-[11px] uppercase tracking-wider font-mono text-ink-dim mb-2">{g.name}</div>
                      <div className="flex flex-wrap gap-2">
                        {g.items.map((i) => (
                          <span key={i} className={`text-sm px-3 py-1 rounded-full border ${t.chip}`}>{i}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
