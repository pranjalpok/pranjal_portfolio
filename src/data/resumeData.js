// ============================================================================
// SINGLE SOURCE OF TRUTH
// Every claim below traces to Pranjal Pokharel's resume (3 versions) or to the
// StaffTransit product notes in stafftransit.txt. Nothing is invented.
// Edit this file to change the site; components hold no content.
// ============================================================================

export const profile = {
  name: "Pranjal Pokharel",
  location: "Santa Rosa, CA",
  headline: "Data Engineer & Full-Stack Developer",
  valueProp:
    "I build the pipelines, dashboards, and production software that turn raw data into decisions.",
  email: "pokharelpranjal10@gmail.com",
  github: "https://github.com/pranjalpok",
  linkedin: "https://www.linkedin.com/in/pranjal-pokharel-288636368/",
  photo: "profile/photo.jpg", // relative so it resolves under Vite's base path
  about: [
    "Data engineer by trade, full-stack developer by habit. At the City of Cincinnati I ship pipelines and Power BI dashboards to finance, HR, and operations teams; on my own I'm building StaffTransit, a B2B SaaS product, end to end.",
    "I care about the whole software lifecycle: requirements, design, tests, release, and keeping it running.",
  ],
};

export const stafftransit = {
  name: "StaffTransit",
  url: "https://stafftransit.com",
  role: "Founder & Full-Stack Engineer",
  since: "May 2026",
  tagline: "B2B SaaS that optimizes employee shuttle routes around real attendance, not static shift rosters.",
  problem:
    "Employers size shuttle fleets for the scheduled roster, ignoring PTO and call-offs. StaffTransit reads real attendance and plans routes for who is actually riding.",
  highlights: [
    { value: "3.6×", label: "fleet utilization in real-world testing" },
    { value: "$0", label: "routing cost after moving to self-hosted OSRM" },
    { value: "140+", label: "automated tests (pytest)" },
    { value: "500+", label: "employee records per CSV import" },
  ],
  built: [
    "Multi-tenant backend with JWT auth, 6-role RBAC, and server-enforced tenant isolation",
    "Async job pipeline (Celery + Redis) running OR-Tools optimization off the request thread",
    "Independent post-solve validation that rejects any route with a late arrival",
    "CSV ingestion that flags missing addresses, shift conflicts, and duplicates",
  ],
  tech: ["FastAPI", "PostgreSQL", "Next.js / TypeScript", "OR-Tools", "Celery", "Redis", "OSRM", "Docker"],
};

export const pipelineStages = [
  { id: "source", label: "Raw data" },
  { id: "ingest", label: "Ingest" },
  { id: "medallion", label: "Bronze → Gold" },
  { id: "semantic", label: "Semantic model" },
  { id: "dashboard", label: "Dashboard" },
  { id: "decision", label: "Decision" },
];

export const stats = [
  { value: 30, suffix: "+", label: "ELT pipelines", detail: "50+ sources, dbt on Fabric & Snowflake" },
  { value: 15, suffix: "+", label: "Power BI dashboards owned", detail: "raw data to KPI-ready" },
  { value: 500, prefix: "$", suffix: "M+", label: "transactions tracked", detail: "25+ years of invoices" },
  { value: 15, prefix: "$", suffix: "M", label: "misreported metrics fixed", detail: "DAX/SQL root-cause analysis" },
  { value: 25, suffix: "%", label: "faster queries", detail: "3,000+ table warehouse" },
  { value: 40, suffix: "%", label: "faster failure response", detail: "lineage + risk detection" },
];

// ---------------------------------------------------------------------------
// PROJECTS (StaffTransit is featured separately above these)
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: "unclaimed-funds",
    name: "Hamilton County Unclaimed Funds Platform",
    summary: "ETL and matching pipeline that turned 220K+ unclaimed-funds records into verified recovery cases.",
    flow: ["Source records", "Python + dbt", "Snowflake", "Recipient matching", "Recovery case"],
    tech: ["Python", "dbt", "Snowflake", "SQL"],
    impact: "Automated matching and verification, cutting manual case research.",
  },
  {
    id: "data-governance",
    name: "Data Asset Discovery & Governance Platform",
    summary: "Python REST API data catalog tracking datasets, lineage, refresh schedules, and dependencies.",
    flow: ["Datasets", "dbt lineage", "Catalog API", "Risk detection", "Alert"],
    tech: ["Python", "AWS", "DynamoDB", "Redshift", "dbt"],
    impact: "Cut reporting-failure response time by 40%.",
  },
  {
    id: "bi-service",
    name: "BI Service Management Platform",
    summary: "Self-service portal for analytics requests, BI access approvals, and report lifecycle decisions.",
    flow: ["Request", "Approval routing", "SLA tracking", "Backlog dashboard"],
    tech: ["Power Apps", "Power Automate", "SQL Server", "Power BI"],
    impact: "Replaced ad-hoc email requests with tracked, multi-stage approvals.",
  },
];

// ---------------------------------------------------------------------------
// SKILLS — two lanes, few items each
// ---------------------------------------------------------------------------
export const skillLanes = [
  {
    title: "Data Engineering",
    color: "mallard",
    groups: [
      { name: "Pipelines", items: ["dbt", "ETL / ELT", "PySpark", "Medallion", "Delta Lake"] },
      { name: "Platforms", items: ["Microsoft Fabric", "Snowflake", "Azure", "SQL Server", "AWS"] },
      { name: "BI", items: ["Power BI", "DAX", "Power Query", "Tableau", "Row-level security"] },
    ],
  },
  {
    title: "Full-Stack Development",
    color: "wing",
    groups: [
      { name: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST APIs"] },
      { name: "Frontend", items: ["Next.js", "TypeScript", "React", "Tailwind"] },
      { name: "Infra & Async", items: ["Docker", "Celery / Redis", "OR-Tools", "GitLab CI/CD", "Git"] },
    ],
  },
];

// ---------------------------------------------------------------------------
// SDLC — one line of evidence per phase
// ---------------------------------------------------------------------------
export const sdlc = [
  { phase: "Requirements", proof: "Defined KPIs with HR, Finance, Procurement, and Payroll before building a report." },
  { phase: "Design", proof: "Multi-tenant schema, 6-role RBAC, star-schema semantic models, medallion layers." },
  { phase: "Build", proof: "FastAPI + Next.js SaaS; 30+ dbt ELT pipelines across 50+ sources." },
  { phase: "Test", proof: "140+ pytest tests, on-time-arrival regressions, independent route validation." },
  { phase: "Release", proof: "Built the City's first CI/CD pipeline (GitLab + Fabric): days to minutes." },
  { phase: "Operate", proof: "15+ dashboards with built-in issue reporting that auto-routes to an owner." },
];

// ---------------------------------------------------------------------------
// EXPERIENCE — top bullets only
// ---------------------------------------------------------------------------
export const experience = [
  {
    id: "stafftransit",
    org: "StaffTransit",
    role: "Founder & Full-Stack Engineer",
    dates: "May 2026 – Present",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "OR-Tools"],
    bullets: [
      "Built the multi-tenant SaaS backend, 6-role RBAC, and async optimization pipeline.",
      "Raised coverage from 10/40 to 36/40 employees on the same 3-vehicle fleet by fixing an optimizer bug.",
      "Moved routing to self-hosted OSRM, cutting routing costs to $0.",
    ],
  },
  {
    id: "cincinnati",
    org: "City of Cincinnati (GCWW)",
    role: "Data Engineer & Analyst Co-Op",
    dates: "Jul 2025 – Sep 2026",
    tech: ["Microsoft Fabric", "Snowflake", "dbt", "Power BI", "GitLab"],
    bullets: [
      "Built the organization's first CI/CD pipeline, cutting releases from days to minutes.",
      "Migrated legacy SSIS to Fabric with a medallion architecture; 30% less server load.",
      "Built 30+ ELT pipelines and owned 15+ Power BI dashboards.",
      "Traced DAX/SQL errors that were misreporting $15M in financial metrics.",
    ],
  },
  {
    id: "nku",
    org: "Northern Kentucky University",
    role: "Research Assistant",
    dates: "Jun 2024 – Jul 2025",
    tech: ["PySpark", "Python", "Power BI"],
    bullets: [
      "Built PySpark pipelines over 250K+ healthcare records; 35% less feature-engineering time.",
      "Built a data validation framework for missing values, outliers, and schema drift.",
    ],
  },
  {
    id: "oracle",
    org: "Oracle Antiques",
    role: "Analytics Engineer Co-Op",
    dates: "Aug 2023 – Jun 2024",
    tech: ["SQL Server", "Tableau", "ETL"],
    bullets: [
      "Cut weekly reporting effort 30% with SQL ETL workflows.",
      "Cut data-entry errors 25% with a SQL Server database of 10K+ inventory records.",
    ],
  },
  {
    id: "sarbham",
    org: "Sarbham Technology",
    role: "IT Developer Intern",
    dates: "May 2021 – May 2022",
    tech: ["SQL", "Git", "Power BI"],
    bullets: ["Data cleaning, build testing, and Power BI reporting for the dev team."],
  },
];

export const education = {
  school: "Northern Kentucky University",
  degree: "B.S. Computer Information Technology, Minor: Computer Science",
  detail: "GPA 3.6 · May 2026",
};

export const certifications = [
  "Microsoft Power BI Data Analyst (Coursera, 2025)",
  "Modern Data Architecture with Microsoft Fabric (Coursera, 2026)",
  "PwC Switzerland Power BI Job Simulation (Forage)",
  "HIPAA",
];

// ---------------------------------------------------------------------------
// DASHBOARDS — all sample data, labeled "Illustrative data" in the UI.
// Route optimization figures come from StaffTransit's published sample output.
// ---------------------------------------------------------------------------
export const routeShifts = {
  "06:00": {
    scheduled: 1247, expected: 1168, baselineVehicles: 22, optimizedVehicles: 18, coverage: 100,
    hourly: [
      { slot: "04:30", roster: 210, real: 194 },
      { slot: "05:00", roster: 380, real: 351 },
      { slot: "05:30", roster: 420, real: 392 },
      { slot: "06:00", roster: 237, real: 231 },
    ],
  },
  "14:00": {
    scheduled: 860, expected: 802, baselineVehicles: 15, optimizedVehicles: 12, coverage: 100,
    hourly: [
      { slot: "12:30", roster: 160, real: 148 },
      { slot: "13:00", roster: 290, real: 271 },
      { slot: "13:30", roster: 300, real: 281 },
      { slot: "14:00", roster: 110, real: 102 },
    ],
  },
  "22:00": {
    scheduled: 512, expected: 471, baselineVehicles: 9, optimizedVehicles: 8, coverage: 100,
    hourly: [
      { slot: "20:30", roster: 90, real: 82 },
      { slot: "21:00", roster: 170, real: 158 },
      { slot: "21:30", roster: 180, real: 165 },
      { slot: "22:00", roster: 72, real: 66 },
    ],
  },
};

// Sample planning-screen output (Cincinnati depot, 06:00 shift)
export const planSummary = { vehicles: 3, served: 36, unserved: 4, miles: 28.4, cost: 219 };

// Stylized route map: depot D plus three routes, coordinates in a 0–100 box
export const routeMap = {
  depot: { x: 50, y: 52 },
  routes: [
    { id: "R1", color: "mallard", stops: [{ x: 30, y: 40 }, { x: 18, y: 26 }, { x: 34, y: 14 }] },
    { id: "R2", color: "bill", stops: [{ x: 68, y: 38 }, { x: 82, y: 24 }, { x: 88, y: 46 }] },
    { id: "R3", color: "wing", stops: [{ x: 60, y: 70 }, { x: 74, y: 84 }, { x: 46, y: 86 }] },
  ],
};

export const optimizerPipeline = [
  { step: "Ingest workforce + fleet", status: "Complete" },
  { step: "Resolve PTO / call-offs", status: "Complete" },
  { step: "Optimize routes (OR-Tools)", status: "Complete" },
  { step: "Validate on-time arrival", status: "Complete" },
  { step: "Report unserved + fixes", status: "1 warning" },
];

export const fleetKPICards = [
  { label: "Vehicles online", key: "vehicles", value: 42, unit: "" },
  { label: "Avg. speed", key: "speed", value: 37, unit: " mph" },
  { label: "60 mph+ events", key: "events", value: 184, unit: "" },
  { label: "Active alerts", key: "alerts", value: 3, unit: "" },
];

export const fleetSpeedTrend = [
  { day: "Mon", avgSpeed: 34, events: 22 },
  { day: "Tue", avgSpeed: 36, events: 27 },
  { day: "Wed", avgSpeed: 33, events: 19 },
  { day: "Thu", avgSpeed: 38, events: 31 },
  { day: "Fri", avgSpeed: 41, events: 38 },
  { day: "Sat", avgSpeed: 35, events: 24 },
  { day: "Sun", avgSpeed: 32, events: 23 },
];

export const invoiceKPICards = [
  { label: "Tracked transactions", value: "$500M+", note: "25 yrs history" },
  { label: "Invoices processed", value: "48.6K", note: "sample month" },
  { label: "Avg. processing time", value: "1.8 days", note: "sample" },
  { label: "Exceptions flagged", value: "212", note: "sample" },
];

export const invoiceVolumeTrend = [
  { month: "Mar", amount: 38 },
  { month: "Apr", amount: 44 },
  { month: "May", amount: 41 },
  { month: "Jun", amount: 52 },
  { month: "Jul", amount: 47 },
  { month: "Aug", amount: 55 },
];
