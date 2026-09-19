import { profile, education, certifications, stafftransit } from "../data/resumeData";

export default function AboutContact() {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-sand border-t border-panel-border ripple-bg scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="font-display text-3xl font-semibold text-ink mt-2">A little about me</h2>
          <div className="mt-5 space-y-3 text-ink-soft leading-relaxed">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="mt-6 rounded-xl bg-panel border border-panel-border p-4 text-sm">
            <div className="font-medium text-ink">{education.school}</div>
            <div className="text-ink-soft">{education.degree}</div>
            <div className="text-ink-dim">{education.detail}</div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {certifications.map((c) => (
                <li key={c} className="text-[11px] px-2 py-0.5 rounded bg-sand border border-panel-border text-ink-soft">{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="font-display text-3xl font-semibold text-ink mt-2">Let's talk</h2>
          <p className="mt-5 text-ink-soft">Data, BI, or full-stack roles, or a chat about StaffTransit.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="bg-mallard text-white font-medium px-6 py-3 rounded-lg hover:bg-mallard-deep transition-colors">Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="border border-panel-border bg-panel text-ink font-medium px-6 py-3 rounded-lg hover:border-mallard transition-colors">LinkedIn</a>
            <a href={stafftransit.url} target="_blank" rel="noreferrer" className="bg-bill-tint text-[rgb(43_33_24)] font-medium px-6 py-3 rounded-lg hover:brightness-95 transition">StaffTransit ↗</a>
          </div>
          <p className="mt-4 font-mono text-sm text-ink-dim">{profile.email}</p>
        </div>
      </div>
    </section>
  );
}
