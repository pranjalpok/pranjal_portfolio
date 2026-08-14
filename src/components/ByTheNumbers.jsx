import useInView from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/resumeData";

function StatCard({ stat, active, index }) {
  const value = useCountUp(stat.value, active, 1200 + index * 80);
  return (
    <div
      className="group relative rounded-2xl border border-panel-border bg-panel p-6 shadow-panel hover:border-teal-dim/60 transition-colors animate-rise"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="font-display text-4xl sm:text-[2.75rem] font-semibold text-mist-bright tabular-nums">
        {stat.prefix}
        {value.toLocaleString()}
        <span className="text-teal-bright">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-mist text-sm font-medium">{stat.label}</div>
      <div className="mt-1.5 text-mist-faint text-xs leading-relaxed font-mono">{stat.detail}</div>
    </div>
  );
}

export default function ByTheNumbers() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="numbers" className="py-24 lg:py-32 border-t border-panel-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">By the numbers</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
              What the work has actually moved
            </h2>
          </div>
          <p className="text-mist-dim max-w-sm text-sm">
            Every figure below comes straight from delivered work — pipelines shipped, dashboards owned, errors caught before they reached leadership.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
