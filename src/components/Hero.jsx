import { profile, pipelineStages } from "../data/resumeData";

function PipelineDiagram() {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="min-w-[880px] lg:min-w-0 flex items-stretch justify-between gap-1 lg:gap-0 relative px-2">
        {pipelineStages.map((stage, i) => (
          <div key={stage.id} className="relative flex-1 flex flex-col items-center">
            {i > 0 && (
              <svg
                className="absolute right-1/2 top-6 w-full h-4 -z-0 hidden lg:block"
                style={{ left: "-50%" }}
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <line
                  x1="0" y1="5" x2="100" y2="5"
                  stroke="#1E2A44" strokeWidth="1.5"
                />
                <line
                  x1="0" y1="5" x2="100" y2="5"
                  stroke="#31D6C0" strokeWidth="1.5"
                  strokeDasharray="6 6"
                  className="animate-flow"
                  opacity="0.85"
                />
              </svg>
            )}
            <div
              className="relative z-10 w-12 h-12 rounded-xl border flex items-center justify-center font-mono text-[10px]"
              style={{
                background: i === pipelineStages.length - 1 ? "rgba(232,184,75,0.12)" : "rgba(49,214,192,0.08)",
                borderColor: i === pipelineStages.length - 1 ? "#E8B84B" : "#1E2A44",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulsedot"
                style={{
                  background: i === pipelineStages.length - 1 ? "#E8B84B" : "#31D6C0",
                  animationDelay: `${i * 0.18}s`,
                }}
              />
            </div>
            <div className="mt-3 text-center px-1">
              <div className="font-display text-[12px] leading-tight text-mist-bright whitespace-nowrap">
                {stage.label}
              </div>
              {stage.sub && (
                <div className="font-mono text-[10px] text-mist-faint mt-0.5 whitespace-nowrap">{stage.sub}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 grid-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/40 to-ink-900 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl animate-rise">
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-teal-bright border border-teal-dim/40 bg-teal/5 rounded-full px-3 py-1 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulsedot" />
            Open to Data Engineering / Analytics Engineering / BI roles
          </div>

          <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-semibold tracking-tight text-mist-bright">
            {profile.name}
          </h1>
          <p className="font-display text-xl sm:text-2xl text-gradient font-medium mt-3">
            {profile.headline}
          </p>
          <p className="mt-6 text-lg text-mist max-w-xl leading-relaxed">
            {profile.valueProp}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-teal text-ink-950 font-medium px-6 py-3 rounded-lg hover:bg-teal-bright transition-colors"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-panel-border text-mist-bright font-medium px-6 py-3 rounded-lg hover:border-amber hover:text-amber-bright transition-colors"
            >
              Resume / Contact
            </a>
          </div>
        </div>

        <div className="mt-20 lg:mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] text-mist-faint uppercase tracking-wider">
              How I move data
            </span>
            <span className="h-px flex-1 bg-panel-border" />
          </div>
          <PipelineDiagram />
        </div>
      </div>
    </section>
  );
}
