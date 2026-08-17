import { projects } from "../data/resumeData";

function MiniPipeline({ stages }) {
  return (
    <div className="flex items-center gap-0 overflow-x-auto py-1">
      {stages.map((s, i) => (
        <div key={s} className="flex items-center flex-shrink-0">
          <span className="font-mono text-[11px] px-3 py-1.5 rounded-md border border-panel-border bg-ink-800/80 text-mist whitespace-nowrap">
            {s}
          </span>
          {i < stages.length - 1 && (
            <svg width="22" height="10" viewBox="0 0 22 10" className="mx-1 flex-shrink-0">
              <line x1="0" y1="5" x2="22" y2="5" stroke="#31D6C0" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M17 1l5 4-5 4" fill="none" stroke="#31D6C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const hasPipeline = project.architecture === "hasPipeline: true";
  return (
    <article className="rounded-2xl border border-panel-border bg-panel shadow-panel overflow-hidden">
      <div className="p-7 lg:p-9">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <span className="font-mono text-[11px] text-amber-bright uppercase tracking-wider">
              {project.inProgress ? "In Progress" : `Case Study ${String(index + 1).padStart(2, "0")}`}
            </span>
            <h3 className="font-display text-2xl font-semibold text-mist-bright mt-2">{project.name}</h3>
            <p className="text-mist-dim text-sm mt-2 max-w-2xl">{project.tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-panel-border text-teal-bright bg-teal/5">
              {t}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-mist-faint mb-2">Business problem</h4>
            <p className="text-mist text-[14px] leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-mist-faint mb-2">What I built</h4>
            <ul className="space-y-2">
              {project.built.map((b) => (
                <li key={b} className="text-mist text-[14px] leading-relaxed flex gap-2">
                  <span className="text-teal mt-1.5 w-1 h-1 rounded-full bg-teal flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-mist-faint mb-2">
              {project.inProgress ? "Status" : "Quantified impact"}
            </h4>
            <ul className="space-y-2">
              {project.impact.map((b) => (
                <li key={b} className="text-mist-bright text-[14px] leading-relaxed flex gap-2">
                  <span className="text-amber mt-1.5 w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {hasPipeline && project.pipelineStages && (
          <div className="mt-8 pt-6 border-t border-panel-border/70">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-mist-faint mb-3">Architecture / process</h4>
            <MiniPipeline stages={project.pipelineStages} />
          </div>
        )}

        <div className="mt-7 pt-6 border-t border-panel-border/70">
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-mist-faint mb-2">Key takeaway</h4>
          <p className="text-mist text-[14px] leading-relaxed italic">{project.takeaway}</p>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-panel-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Featured projects</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
            Systems, end to end
          </h2>
        </div>
        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
