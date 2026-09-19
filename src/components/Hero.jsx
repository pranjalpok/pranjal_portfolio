import { useState } from "react";
import { profile, stafftransit, pipelineStages } from "../data/resumeData";

function Photo() {
  const [errored, setErrored] = useState(false);
  if (errored) return null;
  return (
    <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-panel bg-sand shadow-panel ring-2 ring-bill-tint flex-shrink-0">
      <img src={import.meta.env.BASE_URL + profile.photo} alt={profile.name} className="w-full h-full object-cover" onError={() => setErrored(true)} />
    </div>
  );
}

function Pipeline() {
  return (
    <ol className="flex items-center overflow-x-auto pb-2 gap-0" aria-label="Data pipeline: raw data to business decision">
      {pipelineStages.map((s, i) => {
        const last = i === pipelineStages.length - 1;
        return (
          <li key={s.id} className="flex items-center flex-1 min-w-[112px]">
            <div className="flex flex-col items-center text-center w-full">
              <span
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center bg-panel ${last ? "border-bill-tint" : "border-mallard/50"}`}
              >
                <span className={`w-2.5 h-2.5 rounded-full animate-pulsedot ${last ? "bg-bill-tint" : "bg-mallard"}`} style={{ animationDelay: `${i * 0.25}s` }} />
              </span>
              <span className="mt-2 font-display text-xs text-ink whitespace-nowrap">{s.label}</span>
            </div>
            {!last && (
              <svg className="w-full h-2 -mx-4 mb-6 min-w-[24px]" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
                <line x1="0" y1="2" x2="100" y2="2" stroke="rgb(var(--c-mallard))" strokeWidth="1.5" strokeDasharray="6 6" className="animate-flow" />
              </svg>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default function Hero() {
  return (
    <section id="top" className="ripple-bg pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-8 animate-rise">
          <div className="max-w-2xl">
            <p className="eyebrow">{profile.location}</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink mt-4">{profile.name}</h1>
            <p className="font-display text-xl sm:text-2xl text-mallard-deep font-medium mt-3">{profile.headline}</p>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-xl">{profile.valueProp}</p>
            <p className="mt-4 text-sm text-ink-dim">
              <span className="inline-block w-2 h-2 rounded-full bg-mallard mr-2 animate-pulsedot" />
              Open to: <span className="text-ink-soft font-medium">{profile.roles}</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-mallard text-white font-medium px-6 py-3 rounded-lg hover:bg-mallard-deep transition-colors">
                View projects
              </a>
              <a href={stafftransit.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-bill-tint text-[rgb(43_33_24)] font-medium px-6 py-3 rounded-lg hover:brightness-95 transition">
                Visit StaffTransit <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-panel-border bg-panel text-ink font-medium px-6 py-3 rounded-lg hover:border-mallard transition-colors">
                Contact
              </a>
            </div>
          </div>
          <Photo />
        </div>

        <div className="mt-16 rounded-2xl border border-panel-border bg-panel/70 px-5 pt-6 pb-4">
          <Pipeline />
        </div>
      </div>
    </section>
  );
}
