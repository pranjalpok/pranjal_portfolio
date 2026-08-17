import { profile } from "../data/resumeData";

export default function ResumeContact() {
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-panel-border grid-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Contact</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
          Let's talk about a role
        </h2>
        <p className="text-mist-dim mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
          Full-time Data Engineering, Analytics Engineering, or BI Developer roles &mdash; graduating May 2026.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-teal text-ink-950 font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Email
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12v8H2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-panel-border text-mist-bright font-medium px-6 py-3 rounded-lg hover:border-teal hover:text-teal-bright transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-panel-border text-mist-bright font-medium px-6 py-3 rounded-lg hover:border-teal hover:text-teal-bright transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
