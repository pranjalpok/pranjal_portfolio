import { approachSteps } from "../data/resumeData";

export default function ApproachSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-panel-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Data engineering approach</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
            Ingestion to decision, one path
          </h2>
          <p className="text-mist-dim mt-4 text-[15px] leading-relaxed">
            This is the same flow from the hero, laid out with the reasoning behind each stage — the order matters
            because each stage depends on the one before it being correct.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-panel-border" />
          <div className="space-y-10">
            {approachSteps.map((step, i) => (
              <div key={step.title} className="relative pl-12">
                <div className="absolute left-0 top-0.5 w-8 h-8 rounded-full bg-ink-900 border border-teal-dim/50 flex items-center justify-center font-mono text-[11px] text-teal-bright">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-mist-bright">{step.title}</h3>
                <p className="text-mist text-[14px] leading-relaxed mt-1.5 max-w-2xl">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
