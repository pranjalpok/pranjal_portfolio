import { stafftransit as st, projects } from "../data/resumeData";

function Chip({ children, tone = "sand" }) {
  const tones = {
    sand: "bg-sand text-ink-soft border-panel-border",
    mallard: "bg-mallard/10 text-mallard-deep border-mallard/30",
  };
  return <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${tones[tone]}`}>{children}</span>;
}

function StaffTransitCard() {
  return (
    <article className="rounded-3xl border border-mallard/40 bg-panel shadow-panel overflow-hidden">
      <div className="bg-mallard text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-wider">Featured · B2B SaaS · {st.since} – Present</span>
        <a href={st.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 bg-bill-tint text-[rgb(43_33_24)] text-sm font-medium px-4 py-1.5 rounded-full hover:brightness-95 transition">
          stafftransit.com <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="p-6 sm:p-8 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <h3 className="font-display text-3xl font-semibold text-ink">{st.name}</h3>
          <p className="text-ink-soft mt-2 text-lg">{st.tagline}</p>
          <p className="text-ink-dim mt-3 text-[15px] leading-relaxed">{st.problem}</p>
          <ul className="mt-5 space-y-2">
            {st.built.map((b) => (
              <li key={b} className="flex gap-2.5 text-[15px] text-ink-soft">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-bill-tint flex-shrink-0" />{b}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {st.tech.map((t) => <Chip key={t}>{t}</Chip>)}
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-3 content-start">
          {st.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl bg-sand border border-panel-border p-4">
              <div className="font-display text-3xl font-semibold text-mallard-deep">{h.value}</div>
              <div className="text-xs text-ink-soft mt-1 leading-snug">{h.label}</div>
            </div>
          ))}
          <a href="#dashboards" className="col-span-2 text-sm text-mallard-deep font-medium hover:underline mt-1">
            See the route-optimization dashboard ↓
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="rounded-2xl border border-panel-border bg-panel p-6 shadow-panel flex flex-col">
      <h3 className="font-display text-lg font-semibold text-ink leading-snug">{p.name}</h3>
      <p className="text-sm text-ink-soft mt-2 leading-relaxed">{p.summary}</p>
      <ol className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-mono text-ink-dim" aria-label="Flow">
        {p.flow.map((f, i) => (
          <li key={f} className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-sand border border-panel-border">{f}</span>
            {i < p.flow.length - 1 && <span className="text-mallard" aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm font-medium text-wing-deep">{p.impact}</p>
      <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
        {p.tech.map((t) => <Chip key={t}>{t}</Chip>)}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow">Projects</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-2 mb-10">Things I've built</h2>
        <StaffTransitCard />
        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
