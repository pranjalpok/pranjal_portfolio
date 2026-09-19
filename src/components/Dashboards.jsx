import { useEffect, useState } from "react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Area, Line, ComposedChart,
} from "recharts";
import {
  routeShifts, planSummary, routeMap, optimizerPipeline,
  fleetKPICards, fleetSpeedTrend, invoiceKPICards, invoiceVolumeTrend,
} from "../data/resumeData";

const C = {
  green: "rgb(var(--c-mallard))",
  gold: "rgb(var(--c-bill))",
  brown: "rgb(var(--c-wing))",
  grid: "rgb(var(--c-panel-border))",
  axis: "rgb(var(--c-ink-dim))",
};
const tooltipStyle = {
  background: "rgb(var(--c-panel))",
  border: "1px solid rgb(var(--c-panel-border))",
  borderRadius: 8,
  fontSize: 12,
  color: "rgb(var(--c-ink))",
};
const legendStyle = { fontSize: 12, color: "rgb(var(--c-ink-soft))" };

function Badge({ children, live = false }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-bill-deep bg-bill-tint/15 border border-bill/40 rounded-full px-2.5 py-1 whitespace-nowrap">
      {live && <span className="w-1.5 h-1.5 rounded-full bg-mallard animate-pulsedot" />}
      {children}
    </span>
  );
}

function Panel({ title, subtitle, children, className = "", badge = true }) {
  return (
    <div className={`rounded-2xl border border-panel-border bg-panel p-5 shadow-panel ${className}`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
          {subtitle && <p className="text-ink-dim text-xs mt-0.5">{subtitle}</p>}
        </div>
        {badge && <Badge>Illustrative data</Badge>}
      </div>
      {children}
    </div>
  );
}

function KPI({ label, value, note, tone = "ink" }) {
  const tones = { ink: "text-ink", green: "text-mallard-deep" };
  return (
    <div className="rounded-xl border border-panel-border bg-panel p-4">
      <div className="text-[11px] uppercase tracking-wider text-ink-dim font-mono">{label}</div>
      <div className={`font-display text-3xl font-semibold tabular-nums mt-1.5 ${tones[tone]}`}>{value}</div>
      {note && <div className="text-xs text-ink-soft mt-1">{note}</div>}
    </div>
  );
}

// ---------------------------------------------------------------- Route map
const STROKE = { mallard: "rgb(var(--c-mallard))", bill: "rgb(var(--c-bill))", wing: "rgb(var(--c-wing))" };
const UNSERVED = [{ x: 8, y: 62 }, { x: 14, y: 74 }, { x: 92, y: 68 }, { x: 26, y: 92 }];

function RouteMap() {
  const { depot, routes } = routeMap;
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Sample route map: one depot, three routes with numbered pickup stops, and four unserved employees" className="w-full h-auto max-h-[440px] rounded-xl bg-sand border border-panel-border">
      <path d="M0 58 Q25 48 50 60 T100 56" fill="none" stroke="rgb(var(--c-sand-deep))" strokeWidth="6" />
      <text x="3" y="55" fontSize="3" fill="rgb(var(--c-ink-dim))">Ohio River</text>
      {routes.map((r, ri) => {
        const pts = [depot, ...r.stops, depot];
        const d = pts.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");
        return (
          <g key={r.id}>
            <path d={d} fill="none" stroke={STROKE[r.color]} strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
            <circle r="2" fill={STROKE[r.color]} stroke="rgb(var(--c-panel))" strokeWidth="0.8">
              <animateMotion dur={`${9 + ri * 2}s`} repeatCount="indefinite" path={d} />
            </circle>
            {r.stops.map((s, i) => (
              <g key={i}>
                <circle cx={s.x} cy={s.y} r="2.6" fill="rgb(var(--c-panel))" stroke={STROKE[r.color]} strokeWidth="1" />
                <text x={s.x} y={s.y + 1.1} fontSize="3" textAnchor="middle" fill="rgb(var(--c-ink))" fontWeight="600">{i + 1}</text>
              </g>
            ))}
          </g>
        );
      })}
      {UNSERVED.map((u, i) => (
        <circle key={i} cx={u.x} cy={u.y} r="1.8" fill="none" stroke="rgb(var(--c-ink-dim))" strokeWidth="0.7" strokeDasharray="1.2 1.2" />
      ))}
      <rect x={depot.x - 3.4} y={depot.y - 3.4} width="6.8" height="6.8" rx="1.2" fill="rgb(var(--c-ink))" />
      <text x={depot.x} y={depot.y + 1.3} fontSize="4" textAnchor="middle" fill="rgb(var(--c-page))" fontWeight="700">D</text>
    </svg>
  );
}

function RouteLegend() {
  const items = [
    { label: "Route 1", color: STROKE.mallard },
    { label: "Route 2", color: STROKE.bill },
    { label: "Route 3", color: STROKE.wing },
  ];
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-ink-soft">
      {items.map((i) => (
        <li key={i.label} className="flex items-center gap-1.5">
          <span className="w-4 h-1 rounded" style={{ background: i.color }} />{i.label}
        </li>
      ))}
      <li className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full border border-dashed border-ink-dim" />Unserved
      </li>
      <li><span className="font-semibold text-ink">D</span> = depot</li>
    </ul>
  );
}

function RouteDashboard() {
  const shifts = Object.keys(routeShifts);
  const [shift, setShift] = useState(shifts[0]);
  const s = routeShifts[shift];
  const saved = s.baselineVehicles - s.optimizedVehicles;
  const noShow = s.scheduled - s.expected;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-4" role="group" aria-label="Select shift">
        <span className="text-sm text-ink-soft">Tomorrow's plan · shift</span>
        {shifts.map((k) => (
          <button
            key={k}
            onClick={() => setShift(k)}
            aria-pressed={k === shift}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
              k === shift ? "bg-mallard text-white border-mallard" : "border-panel-border bg-panel text-ink-soft hover:border-mallard"
            }`}
          >
            {k}
          </button>
        ))}
        <span className="ml-auto"><Badge live>Simulated feed</Badge></span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        <KPI label="Scheduled" value={s.scheduled.toLocaleString()} note="from the static roster" />
        <KPI label="Expected riders" value={s.expected.toLocaleString()} note={`${noShow} PTO / call-offs resolved`} tone="green" />
        <KPI label="Vehicles" value={`${s.baselineVehicles} → ${s.optimizedVehicles}`} note={`${saved} fewer, same coverage`} tone="green" />
        <KPI label="Coverage" value={`${s.coverage}%`} note="every route validated on-time" />
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        <Panel title="Optimized plan · Cincinnati depot" subtitle="06:00 shift sample · animated dots are vehicles" className="lg:col-span-3">
          <RouteMap />
          <RouteLegend />
          <div className="grid grid-cols-5 gap-2 mt-4 text-center">
            {[
              ["Vehicles", planSummary.vehicles],
              ["Served", planSummary.served],
              ["Unserved", planSummary.unserved],
              ["Miles", planSummary.miles],
              ["Est. cost", `$${planSummary.cost}`],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-sand py-2">
                <div className="font-display text-lg font-semibold text-ink">{v}</div>
                <div className="text-[10px] uppercase tracking-wide text-ink-dim font-mono">{k}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-wing-deep">⚠ 4 employees unserved: adding 1 vehicle would clear it.</p>
        </Panel>

        <div className="lg:col-span-2 flex flex-col gap-5">
          <Panel title="Roster vs. real demand" subtitle={`${shift} shift · riders by pickup window`}>
            <ResponsiveContainer width="100%" height={210}>
              <BarChart data={s.hourly} barGap={2}>
                <CartesianGrid stroke={C.grid} vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="slot" stroke={C.axis} fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke={C.axis} fontSize={11} tickLine={false} axisLine={false} width={34} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgb(var(--c-sand))" }} />
                <Legend wrapperStyle={legendStyle} iconType="circle" iconSize={8} />
                <Bar dataKey="roster" name="Scheduled" fill={C.brown} radius={[4, 4, 0, 0]} />
                <Bar dataKey="real" name="Expected riders" fill={C.green} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Panel>

          <Panel title="Optimizer run" subtitle="pipeline status">
            <ul className="space-y-2">
              {optimizerPipeline.map((p) => {
                const warn = p.status !== "Complete";
                return (
                  <li key={p.step} className="flex items-center justify-between text-sm">
                    <span className="text-ink-soft">{p.step}</span>
                    <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${warn ? "bg-bill-tint/20 text-bill-deep" : "bg-mallard/10 text-mallard-deep"}`}>
                      {warn ? "⚠ " : "✓ "}{p.status}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------- Fleet (live)
function useJitter(base, spread, ms = 2500) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => setV(Math.round(base + (Math.random() * 2 - 1) * spread)), ms);
    return () => clearInterval(id);
  }, [base, spread, ms]);
  return v;
}

function FleetDashboard() {
  const vehicles = useJitter(42, 1);
  const speed = useJitter(37, 2);
  const values = { vehicles, speed, events: 184, alerts: 3 };
  return (
    <div>
      <div className="flex justify-end mb-4"><Badge live>Simulated feed</Badge></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {fleetKPICards.map((k) => (
          <KPI key={k.key} label={k.label} value={`${values[k.key]}${k.unit}`} />
        ))}
      </div>
      <Panel title="Avg. speed and 60 mph+ events" subtitle="last 7 days · 40+ vehicles">
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={fleetSpeedTrend}>
            <defs>
              <linearGradient id="speedFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={C.green} stopOpacity={0.3} />
                <stop offset="100%" stopColor={C.green} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={C.grid} vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="day" stroke={C.axis} fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke={C.axis} fontSize={11} tickLine={false} axisLine={false} width={30} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={legendStyle} iconType="circle" iconSize={8} />
            <Area type="monotone" dataKey="avgSpeed" name="Avg mph" stroke={C.green} strokeWidth={2} fill="url(#speedFill)" />
            <Line type="monotone" dataKey="events" name="60 mph+ events" stroke={C.brown} strokeWidth={2} dot={{ r: 3 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </Panel>
    </div>
  );
}

function InvoiceDashboard() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {invoiceKPICards.map((k) => <KPI key={k.label} label={k.label} value={k.value} note={k.note} />)}
      </div>
      <Panel title="Invoice value processed" subtitle="$M per month">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={invoiceVolumeTrend}>
            <CartesianGrid stroke={C.grid} vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke={C.axis} fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke={C.axis} fontSize={11} tickLine={false} axisLine={false} width={30} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgb(var(--c-sand))" }} />
            <Bar dataKey="amount" name="$M processed" fill={C.green} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Panel>
    </div>
  );
}

const TABS = [
  { id: "route", label: "Route Optimization", sub: "StaffTransit", View: RouteDashboard },
  { id: "fleet", label: "Fleet Telemetry", sub: "City of Cincinnati", View: FleetDashboard },
  { id: "invoice", label: "Invoice Reporting", sub: "City of Cincinnati", View: InvoiceDashboard },
];

export default function Dashboards() {
  const [tab, setTab] = useState("route");
  const Active = TABS.find((t) => t.id === tab).View;
  return (
    <section id="dashboards" className="py-20 lg:py-24 bg-sand border-y border-panel-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow">Live dashboards</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-2">Dashboards you can poke at</h2>
        <p className="text-ink-soft mt-3 max-w-2xl">
          The layouts mirror what I build and run. All numbers are sample data, never a live connection.
        </p>

        <div role="tablist" aria-label="Dashboards" className="flex flex-wrap gap-2 mt-8 mb-6">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`text-sm px-4 py-2 rounded-full border transition-colors text-left ${
                tab === t.id ? "bg-mallard text-white border-mallard" : "bg-panel border-panel-border text-ink-soft hover:border-mallard"
              }`}
            >
              <span className="font-medium">{t.label}</span>
              <span className={`ml-2 text-xs ${tab === t.id ? "text-white/80" : "text-ink-dim"}`}>{t.sub}</span>
            </button>
          ))}
        </div>

        <div role="tabpanel"><Active /></div>
      </div>
    </section>
  );
}
