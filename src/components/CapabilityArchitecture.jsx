import { capabilityGroups } from "../data/resumeData";

const ACCENTS = ["teal", "amber", "teal", "amber", "teal"];

export default function CapabilityArchitecture() {
  return (
    <section id="capability" className="py-24 lg:py-32 border-t border-panel-border grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Capability architecture</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
            The stack, layered the way I actually work through it
          </h2>
          <p className="text-mist-dim mt-4 text-[15px] leading-relaxed">
            Not a wall of badges — a stack. Data has to move through engineering before it becomes analytics,
            and it all runs on a specific set of platforms, with delivery discipline wrapped around every layer.
          </p>
        </div>

        <div className="space-y-3">
          {capabilityGroups.map((group, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={group.id}
                className="group rounded-2xl border border-panel-border bg-panel/60 hover:bg-panel transition-colors overflow-hidden"
              >
                <div className="grid lg:grid-cols-[280px_1fr] gap-x-8">
                  <div className="p-6 lg:pr-0 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-panel-border/70">
                    <div
                      className={`font-mono text-[11px] uppercase tracking-wider ${
                        accent === "teal" ? "text-teal-bright" : "text-amber-bright"
                      }`}
                    >
                      Layer {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-mist-bright mt-1.5">{group.title}</h3>
                    <p className="text-mist-faint text-sm mt-2 leading-relaxed">{group.description}</p>
                  </div>
                  <div className="p-6 flex flex-wrap content-start gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={
                          "font-mono text-[12px] px-3 py-1.5 rounded-md border border-panel-border text-mist bg-ink-800/60 transition-colors " +
                          (accent === "teal"
                            ? "hover:border-teal hover:text-teal-bright"
                            : "hover:border-amber hover:text-amber-bright")
                        }
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
