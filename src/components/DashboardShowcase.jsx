import { useState } from "react";
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
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  fleetKPICards,
  fleetSpeedTrend,
  fleetEventsByDept,
  invoiceKPICards,
  invoiceVolumeTrend,
  invoiceStatusBreakdown,
} from "../data/resumeData";

const tooltipStyle = {
  background: "rgb(var(--c-panel))",
  border: "1px solid rgb(var(--c-panel-border))",
  borderRadius: 8,
  fontSize: 12,
  fontFamily: "JetBrains Mono, monospace",
  color: "rgb(var(--c-mist-bright))",
};

const GRID_STROKE = "rgb(var(--c-panel-border))";
const AXIS_STROKE = "rgb(var(--c-mist-faint))";
const TEAL = "rgb(var(--c-teal))";
const TEAL_DIM = "rgb(var(--c-teal-dim))";
const AMBER = "rgb(var(--c-amber))";
const PIE_COLORS = [TEAL, AMBER, "rgb(var(--c-mist-faint))"];

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

function KPIRow({ cards }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
      {cards.map((kpi) => (
        <div key={kpi.label} className="rounded-xl border border-panel-border bg-panel p-5">
          <div className="font-mono text-[11px] text-mist-faint uppercase tracking-wider">{kpi.label}</div>
          <div className="flex items-end justify-between mt-2 gap-2">
            <span className="font-display text-3xl font-semibold text-mist-bright tabular-nums">{kpi.value}</span>
            <span className={`font-mono text-xs whitespace-nowrap ${kpi.positive ? "text-teal-bright" : "text-amber-bright"}`}>
              {kpi.delta}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function FleetDashboard() {
  return (
    <>
      <KPIRow cards={fleetKPICards} />
      <div className="grid lg:grid-cols-2 gap-5">
        <Panel title="Avg. speed &amp; 60mph+ events" subtitle="last 7 days · Eventstream, 42 vehicles">
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={fleetSpeedTrend}>
              <defs>
                <linearGradient id="speedFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={TEAL} stopOpacity={0.35} />
                  <stop offset="100%" stopColor={TEAL} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_STROKE} vertical={false} />
              <XAxis dataKey="day" stroke={AXIS_STROKE} fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke={AXIS_STROKE} fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="avgSpeed" stroke={TEAL} strokeWidth={2.5} fill="url(#speedFill)" name="Avg mph" />
              <Line type="monotone" dataKey="events" stroke={AMBER} strokeWidth={2} dot={{ r: 3, fill: AMBER }} name="60mph+ events" />
            </AreaChart>
          </ResponsiveContainer>
        </Panel>

        <Panel title="60mph+ events by department" subtitle="last 7 days">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={fleetEventsByDept} layout="vertical" margin={{ left: 16 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_STROKE} horizontal={false} />
              <XAxis type="number" stroke={AXIS_STROKE} fontSize={11} tickLine={false} axisLine={false} />
              <YAxis dataKey="dept" type="category" stroke="rgb(var(--c-mist-dim))" fontSize={12} tickLine={false} axisLine={false} width={100} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgb(var(--c-teal) / 0.06)" }} />
              <Bar dataKey="events" fill={TEAL_DIM} radius={[0, 4, 4, 0]} name="Events" />
            </BarChart>
          </ResponsiveContainer>
        </Panel>
      </div>
    </>
  );
}

function InvoiceDashboard() {
  return (
    <>
      <KPIRow cards={invoiceKPICards} />
      <div className="grid lg:grid-cols-3 gap-5">
        <Panel title="Invoice value processed" subtitle="$M / month, rolling" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={invoiceVolumeTrend} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_STROKE} vertical={false} />
              <XAxis dataKey="month" stroke={AXIS_STROKE} fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke={AXIS_STROKE} fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgb(var(--c-teal) / 0.06)" }} />
              <Bar dataKey="amount" fill={TEAL} radius={[4, 4, 0, 0]} name="$M processed" />
            </BarChart>
          </ResponsiveContainer>
        </Panel>

        <Panel title="Status breakdown" subtitle="current batch">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={invoiceStatusBreakdown}
                dataKey="value"
                nameKey="status"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
              >
                {invoiceStatusBreakdown.map((entry, i) => (
                  <Cell key={entry.status} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center mt-1">
            {invoiceStatusBreakdown.map((entry, i) => (
              <div key={entry.status} className="flex items-center gap-1.5 font-mono text-[11px] text-mist-dim">
                <span className="w-2 h-2 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                {entry.status} {entry.value}%
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </>
  );
}

const TABS = [
  { id: "fleet", label: "Fleet Telemetry" },
  { id: "invoice", label: "Invoice Processing" },
];

export default function DashboardShowcase() {
  const [tab, setTab] = useState("fleet");

  return (
    <section id="dashboards" className="py-24 lg:py-32 border-t border-panel-border grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-4 max-w-2xl">
          <span className="font-mono text-[11px] text-teal-bright uppercase tracking-wider">Dashboard showcase</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-mist-bright mt-3">
            What a dashboard I own looks like
          </h2>
          <p className="text-mist-dim mt-4 text-[15px] leading-relaxed">
            Mirrors dashboards I run in production at the City of Cincinnati / GCWW — the layout and metric types
            are real, the numbers below are sample data so nothing proprietary is exposed.
          </p>
        </div>

        <div className="flex gap-2 mt-8 mb-6">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`font-mono text-[12px] px-4 py-2 rounded-full border transition-colors ${
                tab === t.id
                  ? "border-teal text-teal-bright bg-teal/10"
                  : "border-panel-border text-mist-dim hover:text-mist-bright"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "fleet" ? <FleetDashboard /> : <InvoiceDashboard />}
      </div>
    </section>
  );
}
