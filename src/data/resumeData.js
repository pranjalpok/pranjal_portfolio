// ============================================================================
// SINGLE SOURCE OF TRUTH
// Every string/number in this file is traceable to Pranjal Pokharel's resume
// (the three master versions: Data Engineer, Data Analyst, BI Developer).
// Nothing here is invented. To update the site, edit this file only —
// components read from it and do not hardcode content.
// Fields marked PLACEHOLDER must be filled in by Pranjal before launch.
// ============================================================================

export const profile = {
  name: "Pranjal Pokharel",
  location: "Cincinnati, OH",
  headline: "Data Engineer, Analyst & BI Developer",
  valueProp:
    "I build the pipelines, models, and dashboards that turn raw operational data into decisions finance, HR, and operations teams actually use.",
  email: "PLACEHOLDER — add contact email",
  github: "PLACEHOLDER — add GitHub URL",
  linkedin: "PLACEHOLDER — add LinkedIn URL",
  resumeFile: "/resume/Pranjal_Pokharel_Resume.pdf",
  about: [
    "I work at the point where raw data becomes something a stakeholder can act on — a pipeline that lands cleanly, a semantic model that answers the question correctly the first time, a dashboard someone actually opens on a Monday.",
    "At the City of Cincinnati, that has meant standing up the organization's first CI/CD pipeline, migrating legacy SSIS workflows onto Microsoft Fabric with a medallion architecture, and owning 15+ Power BI dashboards end to end — from ingestion through to the KPI a director is looking at. Earlier, as a research assistant at NKU, it meant building PySpark pipelines against 250K+ simulated healthcare records for privacy-preserving ML research.",
    "I'm graduating with a B.S. in Computer Information Technology (Minor: Computer Science) from Northern Kentucky University in May 2026, and I'm looking for a full-time Data Engineering, Analytics Engineering, or BI Developer role where I can keep owning systems end to end rather than just one layer of the stack.",
  ],
};

// ---------------------------------------------------------------------------
// HERO PIPELINE (used once, in the hero — per brief, not repeated elsewhere
// except the dedicated "Data Engineering Approach" section which is the one
// permitted second usage, per the brief's own instruction).
// ---------------------------------------------------------------------------
export const pipelineStages = [
  { id: "source", label: "Raw Sources", sub: "50+ systems" },
  { id: "ingest", label: "Ingestion", sub: "ELT / dbt" },
  { id: "bronze", label: "Bronze", sub: "Landed" },
  { id: "silver", label: "Silver", sub: "Cleaned" },
  { id: "gold", label: "Gold", sub: "Modeled" },
  { id: "warehouse", label: "Warehouse", sub: "Fabric / Snowflake" },
  { id: "semantic", label: "Semantic Model", sub: "DAX / star schema" },
  { id: "dashboard", label: "Power BI", sub: "KPI-ready" },
  { id: "decision", label: "Business Decision", sub: "" },
];

// ---------------------------------------------------------------------------
// BY THE NUMBERS
// ---------------------------------------------------------------------------
export const stats = [
  { value: 30, suffix: "+", label: "ELT pipelines built", detail: "across 50+ sources, dbt + Fabric/Snowflake" },
  { value: 15, suffix: "+", label: "Power BI dashboards owned end to end", detail: "raw data \u2192 medallion \u2192 KPI-ready reports" },
  { value: 500, prefix: "$", suffix: "M+", label: "in transactions tracked", detail: "15-page enterprise remittance report, 25+ years of invoice history" },
  { value: 15, prefix: "$", suffix: "M", label: "in financial metrics corrected", detail: "via root-cause analysis on DAX/SQL logic errors" },
  { value: 25, suffix: "%", label: "faster queries", detail: "tuned SQL across a 3,000+ table enterprise warehouse" },
  { value: 30, suffix: "%", label: "less processing time", detail: "migrated legacy SSIS to Microsoft Fabric, medallion architecture" },
  { value: 170, suffix: "+", label: "users under row-level security", detail: "HR, Finance, Procurement, Payroll" },
  { value: 40, suffix: "%", label: "faster failure response", detail: "automated lineage tracking + predictive risk detection" },
];

// ---------------------------------------------------------------------------
// CAPABILITY ARCHITECTURE
// ---------------------------------------------------------------------------
export const capabilityGroups = [
  {
    id: "engineering",
    title: "Data Engineering",
    description: "Moving and shaping data so it's trustworthy by the time anyone queries it.",
    skills: [
      "ETL / ELT Pipelines", "dbt", "Medallion Architecture", "Delta Lake",
      "Lakehouse Design", "Data Warehousing", "Data Modeling", "Dimensional Modeling",
      "PySpark", "Spark SQL", "SQL", "T-SQL", "Python",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & BI",
    description: "Turning modeled data into reports and metrics stakeholders trust.",
    skills: [
      "Power BI", "Tableau", "DAX", "Power Query (M)", "Semantic Modeling",
      "Star Schema Design", "Calculation Groups", "Time-Intelligence DAX",
      "Row-Level Security", "KPI Development", "Executive Reporting",
      "Financial Analytics", "Operational Analytics", "Root-Cause Analysis",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Platforms",
    description: "Where the warehouse and pipelines actually run.",
    skills: [
      "Microsoft Fabric", "Microsoft Azure", "Azure SQL Database", "Snowflake",
      "Microsoft SQL Server", "SSMS", "SSIS", "SSRS", "AWS", "DynamoDB", "Redshift",
    ],
  },
  {
    id: "ai",
    title: "AI & Intelligent Data",
    description: "Making data AI-ready and using AI tooling in the delivery loop.",
    skills: [
      "Agentic AI", "AI-Ready Dataset Design", "Prompt Engineering", "Microsoft Copilot",
    ],
  },
  {
    id: "delivery",
    title: "Engineering & Delivery",
    description: "Shipping and operating the system, not just building it once.",
    skills: [
      "Git", "GitHub", "GitLab", "CI/CD", "Power Apps", "Power Automate", "REST APIs", "R",
    ],
  },
];

// ---------------------------------------------------------------------------
// FEATURED PROJECTS (case-study format)
// ---------------------------------------------------------------------------
export const projects = [
  {
    id: "bi-service-management",
    name: "BI Service Management Platform",
    tagline: "A self-service portal that replaced ad-hoc email requests for BI access and reporting.",
    tech: ["Power Apps", "Power Automate", "SQL Server", "Microsoft Fabric", "Power BI"],
    problem:
      "Analytics requests, BI access approvals, and report lifecycle decisions across departments were tracked through ad-hoc email threads, with no shared record of request status or approval history.",
    built: [
      "A self-service portal (Power Apps) for submitting analytics requests, BI access approvals, and report lifecycle decisions across departments.",
      "Multi-stage approval routing and SLA tracking automated with Power Automate, replacing the email-based process end to end.",
      "A Power BI dashboard tracking intake volume, approval turnaround, and backlog by department.",
    ],
    architecture: "hasPipeline: false",
    impact: [
      "Replaced an ad-hoc, email-based approval process with a tracked, multi-stage automated workflow.",
      "Gave stakeholders visibility into intake volume, approval turnaround, and backlog by department for the first time.",
    ],
    takeaway:
      "Governance tooling is itself a data product — the same discipline (clear stages, an owner per stage, a dashboard to see the backlog) that applies to a KPI report applies to the request queue behind it.",
  },
  {
    id: "hamilton-county-unclaimed-funds",
    name: "Hamilton County Unclaimed Funds Intelligence Platform",
    tagline: "ETL and matching pipeline that turned 220K+ unclaimed funds records into actionable recovery cases.",
    tech: ["Python", "SQL", "dbt", "Snowflake", "REST APIs"],
    problem:
      "220K+ unclaimed funds records needed to be ingested, cleaned, and transformed before recipients could be identified and verified — a process that was otherwise manual case-by-case research.",
    built: [
      "ETL pipelines in Python and dbt to ingest, clean, and transform 220K+ unclaimed funds records into Snowflake.",
      "dbt models on Snowflake to analyze the records and identify recovery patterns.",
      "Automated recipient matching and verification logic to replace manual case research.",
    ],
    architecture: "hasPipeline: true",
    pipelineStages: ["Source Records", "Python/dbt ETL", "Snowflake", "Recipient Matching", "Verified Recovery Case"],
    impact: [
      "Automated recipient matching and verification, cutting manual case research.",
      "Accelerated fund recovery outreach by removing the manual bottleneck between a record and a verified recipient.",
    ],
    takeaway:
      "A clean ELT layer is what makes downstream matching logic possible — the pipeline work is what turned 220K+ raw records into something a matching algorithm could trust.",
  },
  {
    id: "enterprise-data-governance",
    name: "Enterprise Data Asset Discovery & Governance Platform",
    tagline: "A Python REST API data catalog with automated lineage tracking and predictive risk detection.",
    tech: ["Python", "AWS", "REST APIs", "DynamoDB", "Redshift", "dbt"],
    problem:
      "There was no central catalog of datasets, their lineage, refresh schedules, or dependencies — making it hard to know what would break, or why a report failed, without manual investigation.",
    built: [
      "A Python REST API data catalog to track datasets, dbt-based lineage, refresh schedules, and dependencies, built on AWS (DynamoDB, Redshift).",
      "Automated lineage tracking so dependencies between datasets were discoverable rather than tribal knowledge.",
      "Predictive risk detection to flag likely points of failure before they caused a reporting outage.",
    ],
    architecture: "hasPipeline: true",
    pipelineStages: ["Datasets", "dbt Lineage", "Catalog API", "Risk Detection", "Alert / Response"],
    impact: [
      "Cut reporting failure response time by 40%.",
      "Made dataset lineage, refresh schedules, and dependencies discoverable through a catalog instead of manual tracing.",
    ],
    takeaway:
      "Catalog and lineage tooling pays off exactly when something breaks — the 40% cut in response time came from already knowing what depended on what.",
  },
];

// ---------------------------------------------------------------------------
// DASHBOARD SHOWCASE — illustrative data only, clearly labeled
// Structure (SLA compliance, root-cause trend, pipeline monitoring) is
// grounded in real resume bullets; the numbers plotted are sample data.
// ---------------------------------------------------------------------------
export const illustrativePipelineRuns = [
  { day: "Mon", success: 46, failed: 2 },
  { day: "Tue", success: 48, failed: 1 },
  { day: "Wed", success: 44, failed: 4 },
  { day: "Thu", success: 49, failed: 1 },
  { day: "Fri", success: 47, failed: 2 },
  { day: "Sat", success: 50, failed: 0 },
  { day: "Sun", success: 49, failed: 1 },
];

export const illustrativeSLATrend = [
  { month: "Mar", sla: 91 },
  { month: "Apr", sla: 93 },
  { month: "May", sla: 90 },
  { month: "Jun", sla: 95 },
  { month: "Jul", sla: 97 },
  { month: "Aug", sla: 98 },
];

export const illustrativeIssuesByOwner = [
  { owner: "Finance", open: 4, resolved: 22 },
  { owner: "HR", open: 2, resolved: 15 },
  { owner: "Procurement", open: 5, resolved: 19 },
  { owner: "Payroll", open: 1, resolved: 11 },
  { owner: "Water Quality", open: 3, resolved: 17 },
];

export const illustrativeKPICards = [
  { label: "Pipelines run today", value: "312", delta: "+4.2%", positive: true },
  { label: "SLA compliance", value: "98%", delta: "+1.1 pt", positive: true },
  { label: "Avg. query time", value: "1.4s", delta: "\u221225%", positive: true },
  { label: "Open data-quality flags", value: "9", delta: "\u22123", positive: true },
];

// ---------------------------------------------------------------------------
// DATA ENGINEERING APPROACH — the one other allowed use of the flow diagram
// ---------------------------------------------------------------------------
export const approachSteps = [
  {
    title: "Ingest",
    body: "Land raw data from source systems via ELT pipelines (dbt on Fabric/Snowflake) — 30+ pipelines across 50+ sources.",
  },
  {
    title: "Model — Medallion Architecture",
    body: "Move data through bronze \u2192 silver \u2192 gold layers, cleaning and conforming it so downstream consumers get one trusted version.",
  },
  {
    title: "Structure — Semantic Layer",
    body: "Build star-schema semantic models with DAX (calculation groups, time intelligence) so metrics are defined once, correctly, everywhere.",
  },
  {
    title: "Govern",
    body: "Apply row-level security (170+ users) and standardize KPI logic in DAX/Power Query so the same question gets the same answer for every department.",
  },
  {
    title: "Deliver — Power BI",
    body: "Ship KPI-ready dashboards — 15+ owned end to end — with issue-reporting built in via Power Automate so problems route to an owner automatically.",
  },
  {
    title: "Decision",
    body: "Finance, HR, Procurement, and Payroll stakeholders act on the report — from a $500M+ remittance report to a real-time fleet telemetry view.",
  },
];

// ---------------------------------------------------------------------------
// BUSINESS IMPACT — Technical Solution -> Operational Impact -> Business Outcome
// ---------------------------------------------------------------------------
export const impactRows = [
  {
    technical: "Built org's first CI/CD pipeline (GitLab + Microsoft Fabric).",
    operational: "Release cycles cut from days to minutes.",
    outcome: "Faster, lower-risk delivery of dashboard and pipeline changes to stakeholders.",
  },
  {
    technical: "Migrated legacy SSIS workflows to Microsoft Fabric with a medallion architecture.",
    operational: "Processing time reduced by 30%; on-prem server load eased.",
    outcome: "Reports refresh faster and infrastructure load is reduced org-wide.",
  },
  {
    technical: "Tuned complex SQL queries across a 3,000+ table enterprise warehouse.",
    operational: "Query performance improved by 25%.",
    outcome: "Faster dashboards and reports for every downstream consumer of the warehouse.",
  },
  {
    technical: "Traced and corrected DAX/SQL logic errors via root-cause analysis.",
    operational: "$15M in previously misreported financial metrics corrected.",
    outcome: "Finance leadership can trust the numbers they're reporting on.",
  },
  {
    technical: "Built automated lineage tracking and predictive risk detection for the data catalog.",
    operational: "Reporting failure response time cut by 40%.",
    outcome: "Less downtime for stakeholders depending on affected reports.",
  },
  {
    technical: "Automated multistage approval routing with Power Automate.",
    operational: "Removed manual email tracking for 100+ monthly requests.",
    outcome: "Faster, auditable approvals for analytics and BI access requests.",
  },
];

// ---------------------------------------------------------------------------
// EXPERIENCE TIMELINE
// ---------------------------------------------------------------------------
export const experience = [
  {
    id: "cincinnati",
    org: "City of Cincinnati",
    location: "Cincinnati, OH",
    role: "Data Engineer, Analyst & BI Developer Co-Op",
    start: "Jul 2025",
    end: "Present",
    tech: ["Microsoft Fabric", "Snowflake", "dbt", "Power BI", "SQL", "DAX", "Power Automate", "GitLab", "CI/CD"],
    bullets: [
      "Built the organization's first CI/CD pipeline using GitLab and Microsoft Fabric, cutting release cycles from days to minutes.",
      "Migrated legacy SSIS workflows to Microsoft Fabric using a medallion architecture, reducing processing time by 30% and easing server load.",
      "Built a real-time fleet telemetry dashboard using Eventstream in Microsoft Fabric, tracking speed, top speed, and 60 mph events for 40+ vehicles.",
      "Owned 15+ end-to-end Power BI dashboards, pipelining raw data through medallion architecture into KPI-ready reports.",
      "Built semantic models and DAX measures (star schema, calculation groups, time intelligence) for cross-departmental self-service reporting.",
      "Automated multistage approval routing with Power Automate, removing manual email tracking for 100+ monthly requests.",
      "Built issue reporting into 15+ Power BI dashboards using Power Automate, auto-routing flagged issues to owners.",
      "Built 30+ ELT pipelines across 50+ sources using dbt models with ref, staging, and DAG on Fabric and Snowflake.",
      "Tuned complex SQL queries across a 3,000+ table enterprise warehouse, improving query performance by 25%.",
      "Built a 15-page enterprise remittance report tracking $500M+ in transactions across 25+ years of invoice history.",
      "Traced and corrected DAX/SQL logic errors impacting $15M in reported financial metrics through root-cause analysis.",
      "Partnered with HR, Finance, Procurement, Payroll, and Water Quality to define KPIs and implement row-level security for 170+ users.",
    ],
  },
  {
    id: "nku-research",
    org: "Northern Kentucky University",
    location: "Highland Heights, KY",
    role: "Research Assistant",
    start: "Jun 2024",
    end: "Jul 2025",
    tech: ["PySpark", "Python", "Power BI", "Machine Learning"],
    bullets: [
      "Conducted machine learning research on privacy-preserving healthcare analytics using 6 simulated hospital datasets.",
      "Built PySpark pipelines to clean and process 250K+ healthcare records, reducing feature engineering time by 35%.",
      "Visualized 10+ model fairness and bias metrics across demographic cohorts in a stakeholder-facing Power BI dashboard.",
      "Built a data validation framework detecting missing values, outliers, and schema inconsistencies for dataset accuracy.",
      "Translated ML research outputs into decision-ready reporting, establishing a validation framework for data accuracy.",
    ],
  },
  {
    id: "oracle-antiques",
    org: "Oracle Antiques",
    location: "Newport, KY",
    role: "Analytics Engineer / Data Analyst / BI Analyst Co-Op",
    start: "Aug 2023",
    end: "Jun 2024",
    tech: ["SQL Server", "Tableau", "SQL", "ETL"],
    bullets: [
      "Reduced data entry errors by 25% by designing and maintaining a SQL Server database supporting 10K+ inventory records.",
      "Reduced weekly reporting effort by 30% through SQL ETL workflows integrating sales, inventory, and operational data.",
      "Partnered with stakeholders to define KPIs and built Tableau reports tracking sales trends across 300+ products.",
      "Developed SQL views and stored procedures standardizing reporting and improving data consistency across datasets.",
    ],
  },
  {
    id: "sarbham",
    org: "Sarbham Technology",
    location: "Lalitpur, Nepal",
    role: "IT Developer Intern",
    start: "May 2021",
    end: "May 2022",
    tech: ["SQL", "Git", "Power BI"],
    bullets: [
      "Wrote SQL queries to validate, update, and clean application data, supporting data import/export tasks.",
      "Used Git and VirtualBox/VM environments for build testing, bug fixes, and cross-device functional testing.",
      "Built Power BI dashboards/reports to visualize application data trends, surfacing insights for the dev team.",
    ],
  },
];

// ---------------------------------------------------------------------------
// DELIVERY & COLLABORATION
// ---------------------------------------------------------------------------
export const deliveryPillars = [
  {
    title: "Requirements & Stakeholder Translation",
    body: "Partnered directly with HR, Finance, Procurement, Payroll, and Water Quality at the City of Cincinnati to define KPIs before building a single report — and with stakeholders at Oracle Antiques to define sales KPIs behind Tableau reporting.",
  },
  {
    title: "Release Management & CI/CD",
    body: "Built the City of Cincinnati's first CI/CD pipeline (GitLab + Microsoft Fabric), cutting release cycles from days to minutes.",
  },
  {
    title: "Governance & Access Control",
    body: "Implemented row-level security for 170+ users, and built the BI Service Management Platform's approval routing so BI access and report lifecycle decisions are tracked, not ad hoc.",
  },
  {
    title: "Monitoring & Ownership",
    body: "Owns 15+ Power BI dashboards end to end, including a built-in issue-reporting feature (Power Automate) that auto-routes flagged issues to the right owner — plus automated lineage tracking and predictive risk detection that cut reporting-failure response time by 40%.",
  },
];

// ---------------------------------------------------------------------------
// CERTIFICATIONS & EDUCATION
// ---------------------------------------------------------------------------
export const certifications = [
  "HIPAA",
  "Modern Data Architecture Fundamentals with Microsoft Fabric — Coursera (2026)",
  "PwC Switzerland Power BI Job Simulation (Forage)",
  "Microsoft Power BI Data Analyst Professional Certificate — Coursera (2025)",
];

export const education = {
  school: "Northern Kentucky University",
  location: "Highland Heights, KY",
  degree: "B.S. Computer Information Technology, Minor: Computer Science",
  gpa: "3.6/4.0",
  date: "May 2026",
};
