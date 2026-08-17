import { useState } from "react";
import { profile, pipelineStages } from "../data/resumeData";

function PhotoFrame() {
  const [errored, setErrored] = useState(false);

  if (!errored) {
    return (
      <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl border border-panel-border overflow-hidden bg-panel flex-shrink-0">
        <img
          src={import.meta.env.BASE_URL + profile.photo}
          alt={profile.name}
          className="w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl border border-dashed border-panel-border flex flex-col items-center justify-center gap-2 flex-shrink-0 bg-panel/40">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4B5468" strokeWidth="1.4">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20c1.5-4 4.5-6 7.5-6s6 2 7.5 6" strokeLinecap="round" />
      </svg>
      <span className="font-mono text-[10px] text-mist-faint text-center px-2 leading-tight">
        Add photo
      </span>
    </div>
  );
}

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
                  stroke="rgb(var(--c-panel-border))" strokeWidth="1.5"
                />
                <line
                  x1="0" y1="5" x2="100" y2="5"
                  stroke="rgb(var(--c-teal))" strokeWidth="1.5"
                  strokeDasharray="6 6"
                  className="animate-flow"
                  opacity="0.85"
                />
              </svg>
            )}
            <div
              className="relative z-10 w-12 h-12 rounded-xl border flex items-center justify-center font-mono text-[10px]"
              style={{
                background: i === pipelineStages.length - 1 ? "rgb(var(--c-amber) / 0.12)" : "rgb(var(--c-teal) / 0.08)",
                borderColor: i === pipelineStages.length - 1 ? "rgb(var(--c-amber))" : "rgb(var(--c-panel-border))",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulsedot"
                style={{
                  background: i === pipelineStages.length - 1 ? "rgb(var(--c-amber))" : "rgb(var(--c-teal))",
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
        <div className="max-w-4xl animate-rise">
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-teal-bright border border-teal-dim/40 bg-teal/5 rounded-full px-3 py-1 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulsedot" />
            Open to Data Engineering / Analytics Engineering / BI roles
          </div>

          <div className="flex flex-row items-center justify-between gap-6 sm:gap-10">
            <h1 className="font-display text-[2.4rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-semibold tracking-tight text-mist-bright">
              {profile.name}
            </h1>
            <PhotoFrame />
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-sm text-mist-dim hover:text-teal-bright transition-colors mt-2 inline-block"
          >
            {profile.email}
          </a>
          <p className="font-display text-xl sm:text-2xl text-gradient font-medium mt-3">
            {profile.headline}
          </p>
          <p className="mt-6 text-lg text-mist max-w-xl leading-relaxed">
            {profile.valueProp}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#dashboards"
              className="inline-flex items-center gap-2 bg-teal text-ink-950 font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View a Dashboard I Own
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-panel-border text-mist-bright font-medium px-6 py-3 rounded-lg hover:border-amber hover:text-amber-bright transition-colors"
            >
              Contact
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
