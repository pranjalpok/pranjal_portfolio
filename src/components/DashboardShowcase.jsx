import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import {
  illustrativePipelineRuns,
  illustrativeSLATrend,
  illustrativeIssuesByOwner,
  illustrativeKPICards,
} from "../data/resumeData";

const tooltipStyle = {
  background: "#0E1424",
  border: "1px solid #1E2A44",
  borderRadius: 8,
  fontSize: 12,
  fontFamily: "JetBrains Mono, monospace",
  color: "#EDEFF5",
};

function IllustrativeBadge() {
  return (
    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-bright bg-amber/10 border border-amber-dim/40 rounded-full px-2.5 py-1">
      Illustrative data
    </span>
  );
}

function Panel({ title, subtitle, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-panel-border bg-panel p-6 shadow-panel ${className}`}>
      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <h3 className="font-display text-base font-semibold text-mist-bright">{title}</h3>
          {subtitle && <p className="text-mist-faint text-xs mt-1 font-mono">{subtitle}</p>}
        </div>
        <IllustrativeBadge />
      </div>
      {children}
    </div>
  );
}

export default function DashboardShowcase() {
  return (
    <section id="dashboards" className="py-24 lg:py-32 border-t border-panel-border grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-4 max-w-2xl">
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Dashboard showcase</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
            What a dashboard I own looks like
          </h2>
          <p className="text-mist-dim mt-4 text-[15px] leading-relaxed">
            This view is built to mirror the pipeline-monitoring and SLA dashboards I run in production —
            the layout and metric types are real, the plotted numbers below are sample data so nothing
            proprietary is exposed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-5">
          {illustrativeKPICards.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-panel-border bg-panel p-5">
              <div className="font-mono text-[11px] text-mist-faint uppercase tracking-wider">{kpi.label}</div>
              <div className="flex items-end justify-between mt-2">
                <span className="font-display text-2xl font-semibold text-mist-bright">{kpi.value}</span>
                <span className={`font-mono text-xs ${kpi.positive ? "text-teal-bright" : "text-amber-bright"}`}>
                  {kpi.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          <Panel title="Pipeline runs — success vs. failed" subtitle="last 7 days">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={illustrativePipelineRuns} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E2A44" vertical={false} />
                <XAxis dataKey="day" stroke="#4B5468" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#4B5468" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(49,214,192,0.06)" }} />
                <Bar dataKey="success" fill="#31D6C0" radius={[4, 4, 0, 0]} name="Success" />
                <Bar dataKey="failed" fill="#E8B84B" radius={[4, 4, 0, 0]} name="Failed" />
              </BarChart>
            </ResponsiveContainer>
          </Panel>

          <Panel title="SLA compliance trend" subtitle="6-month rolling">
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={illustrativeSLATrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E2A44" vertical={false} />
                <XAxis dataKey="month" stroke="#4B5468" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis domain={[80, 100]} stroke="#4B5468" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="sla" stroke="#E8B84B" strokeWidth={2.5} dot={{ r: 3, fill: "#E8B84B" }} name="SLA %" />
              </LineChart>
            </ResponsiveContainer>
          </Panel>

          <Panel
            title="Open issues by department"
            subtitle="root-cause routing, via Power Automate"
            className="lg:col-span-2"
          >
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={illustrativeIssuesByOwner} layout="vertical" margin={{ left: 16 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E2A44" horizontal={false} />
                <XAxis type="number" stroke="#4B5468" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis
                  dataKey="owner"
                  type="category"
                  stroke="#8B93A7"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  width={100}
                />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(49,214,192,0.06)" }} />
                <Bar dataKey="resolved" stackId="a" fill="#1E9C8C" radius={[0, 0, 0, 0]} name="Resolved" />
                <Bar dataKey="open" stackId="a" fill="#E8B84B" radius={[0, 4, 4, 0]} name="Open" />
              </BarChart>
            </ResponsiveContainer>
          </Panel>
        </div>
      </div>
    </section>
  );
}
