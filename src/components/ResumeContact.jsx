import { profile } from "../data/resumeData";

function isPlaceholder(v) {
  return typeof v === "string" && v.startsWith("PLACEHOLDER");
}

export default function ResumeContact() {
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-panel-border grid-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Resume & contact</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
          Let's talk about a role
        </h2>
        <p className="text-mist-dim mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
          Full-time Data Engineering, Analytics Engineering, or BI Developer roles &mdash; graduating May 2026.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 bg-teal text-ink-950 font-medium px-6 py-3 rounded-lg hover:bg-teal-bright transition-colors"
          >
            Download Resume
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8m0 0l-3-3m3 3l3-3M3 13h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href={isPlaceholder(profile.email) ? "#contact" : `mailto:${profile.email}`}
            className="inline-flex items-center gap-2 border border-panel-border text-mist-bright font-medium px-6 py-3 rounded-lg hover:border-amber hover:text-amber-bright transition-colors"
          >
            Email
          </a>
          <a
            href={isPlaceholder(profile.github) ? "#contact" : profile.github}
            className="inline-flex items-center gap-2 border border-panel-border text-mist-bright font-medium px-6 py-3 rounded-lg hover:border-teal hover:text-teal-bright transition-colors"
          >
            GitHub
          </a>
          <a
            href={isPlaceholder(profile.linkedin) ? "#contact" : profile.linkedin}
            className="inline-flex items-center gap-2 border border-panel-border text-mist-bright font-medium px-6 py-3 rounded-lg hover:border-teal hover:text-teal-bright transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {(isPlaceholder(profile.email) || isPlaceholder(profile.github) || isPlaceholder(profile.linkedin)) && (
          <p className="mt-6 font-mono text-[11px] text-amber-bright/80 max-w-md mx-auto">
            Some links above are placeholders &mdash; add your real email, GitHub, and LinkedIn URLs in
            src/data/resumeData.js before publishing.
          </p>
        )}
      </div>
    </section>
  );
}
