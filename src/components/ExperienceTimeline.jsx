import { useState } from "react";
import { experience } from "../data/resumeData";

export default function ExperienceTimeline() {
  const [openId, setOpenId] = useState(experience[0].id);

  return (
    <section id="experience" className="py-24 lg:py-32 border-t border-panel-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Experience timeline</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-panel-border hidden sm:block" />
          <div className="space-y-4">
            {experience.map((job) => {
              const isOpen = openId === job.id;
              return (
                <div key={job.id} className="relative sm:pl-14">
                  <div className="absolute left-0 top-4 w-10 h-10 rounded-full bg-ink-900 border border-panel-border items-center justify-center font-mono text-[10px] text-mist-dim hidden sm:flex">
                    {job.start.slice(0, 3)}
                  </div>
                  <div className="rounded-2xl border border-panel-border bg-panel shadow-panel overflow-hidden">
                    <button
                      onClick={() => setOpenId(isOpen ? null : job.id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-panel-hover transition-colors"
                    >
                      <div>
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <h3 className="font-display text-lg font-semibold text-mist-bright">{job.org}</h3>
                          <span className="font-mono text-[11px] text-mist-faint">{job.location}</span>
                        </div>
                        <p className="text-teal-bright text-sm mt-1">{job.role}</p>
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="font-mono text-[11px] text-mist-dim whitespace-nowrap">
                          {job.start} &ndash; {job.end}
                        </span>
                        <svg
                          width="16" height="16" viewBox="0 0 16 16" fill="none"
                          className={`transition-transform text-mist-faint ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-panel-border/70">
                        <div className="flex flex-wrap gap-2 mt-4 mb-4">
                          {job.tech.map((t) => (
                            <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-panel-border text-mist-dim">
                              {t}
                            </span>
                          ))}
                        </div>
                        <ul className="space-y-2">
                          {job.bullets.map((b) => (
                            <li key={b} className="text-mist text-[14px] leading-relaxed flex gap-2.5">
                              <span className="mt-2 w-1 h-1 rounded-full bg-teal flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
