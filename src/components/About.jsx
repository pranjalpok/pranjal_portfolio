import { profile, certifications, education } from "../data/resumeData";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-panel-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1fr] gap-14">
        <div>
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">About</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3 mb-7">
            A little more context
          </h2>
          <div className="space-y-5">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)} className="text-mist text-[15px] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-panel-border bg-panel p-6 shadow-panel">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-mist-faint mb-3">Core Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "SQL", "T-SQL", "PySpark", "DAX", "Power Query (M)", "R"].map((lang) => (
                <span
                  key={lang}
                  className="font-mono text-[12px] px-3 py-1.5 rounded-md border border-panel-border text-mist bg-ink-800/60"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-panel-border bg-panel p-6 shadow-panel">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-mist-faint mb-3">Education</h3>
            <p className="font-display text-lg font-semibold text-mist-bright">{education.school}</p>
            <p className="text-mist-dim text-sm mt-1">{education.location}</p>
            <p className="text-mist text-[14px] mt-3">{education.degree}</p>
            <div className="flex items-center gap-4 mt-3 font-mono text-[12px] text-teal-bright">
              <span>GPA {education.gpa}</span>
              <span className="text-mist-faint">&bull;</span>
              <span>{education.date}</span>
            </div>
          </div>

          <div className="rounded-2xl border border-panel-border bg-panel p-6 shadow-panel">
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-mist-faint mb-3">Certifications</h3>
            <ul className="space-y-2.5">
              {certifications.map((c) => (
                <li key={c} className="text-mist text-[14px] leading-snug flex gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
