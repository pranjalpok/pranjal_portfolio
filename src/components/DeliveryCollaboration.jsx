import { deliveryPillars } from "../data/resumeData";

export default function DeliveryCollaboration() {
  return (
    <section className="py-24 lg:py-32 border-t border-panel-border grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Delivery & collaboration</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
            Shipping data work isn't just the pipeline
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {deliveryPillars.map((pillar, i) => (
            <div key={pillar.title} className="rounded-2xl border border-panel-border bg-panel p-7 shadow-panel">
              <span className="font-mono text-[11px] text-amber-bright">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-lg font-semibold text-mist-bright mt-2">{pillar.title}</h3>
              <p className="text-mist text-[14px] leading-relaxed mt-2.5">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
