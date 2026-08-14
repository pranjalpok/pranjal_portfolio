import { impactRows } from "../data/resumeData";

export default function BusinessImpact() {
  return (
    <section className="py-24 lg:py-32 border-t border-panel-border grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Business impact</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
            From technical change to business outcome
          </h2>
        </div>

        <div className="rounded-2xl border border-panel-border bg-panel shadow-panel overflow-hidden">
          <div className="hidden lg:grid grid-cols-3 gap-6 px-7 py-4 border-b border-panel-border font-mono text-[11px] uppercase tracking-wider text-mist-faint">
            <span>Technical solution</span>
            <span>Operational impact</span>
            <span>Business outcome</span>
          </div>
          {impactRows.map((row, i) => (
            <div
              key={row.technical}
              className={`grid lg:grid-cols-3 gap-3 lg:gap-6 px-7 py-6 ${
                i !== impactRows.length - 1 ? "border-b border-panel-border/70" : ""
              }`}
            >
              <div>
                <span className="lg:hidden font-mono text-[10px] uppercase tracking-wider text-mist-faint block mb-1">Technical solution</span>
                <p className="text-mist-bright text-[14px] leading-relaxed">{row.technical}</p>
              </div>
              <div>
                <span className="lg:hidden font-mono text-[10px] uppercase tracking-wider text-mist-faint block mb-1">Operational impact</span>
                <p className="text-teal-bright text-[14px] leading-relaxed font-medium">{row.operational}</p>
              </div>
              <div>
                <span className="lg:hidden font-mono text-[10px] uppercase tracking-wider text-mist-faint block mb-1">Business outcome</span>
                <p className="text-mist text-[14px] leading-relaxed">{row.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
