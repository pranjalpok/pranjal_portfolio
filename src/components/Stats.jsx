import useInView from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";
import { stats } from "../data/resumeData";

function Stat({ stat, active, index }) {
  const value = useCountUp(stat.value, active, 1100 + index * 80);
  return (
    <div className="px-5 py-6 text-center sm:text-left">
      <div className="font-display text-4xl font-semibold text-ink tabular-nums">
        {stat.prefix}{value.toLocaleString()}<span className="text-mallard">{stat.suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-ink-soft">{stat.label}</div>
      <div className="mt-0.5 text-xs text-ink-dim">{stat.detail}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section aria-label="By the numbers" className="border-y border-panel-border bg-sand">
      <div ref={ref} className="max-w-6xl mx-auto px-3 grid grid-cols-2 lg:grid-cols-6 lg:divide-x divide-panel-border">
        {stats.map((s, i) => <Stat key={s.label} stat={s} active={inView} index={i} />)}
      </div>
    </section>
  );
}
