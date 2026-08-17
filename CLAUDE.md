All projects
Portfolio webpage Pranjal



Type / for skills
How can I help you today?


Recents
Resume project initiation
6 minutes ago
Memory
Only you
Purpose & context Paula (also going by Pranjal Pokharel) is a data engineering and BI developer student at Northern Kentucky University, currently on co-op at the City of Cincinnati. Paula has been building a personal portfolio website to showcase technical skills and project work ahead of graduation. Current state Paula recently completed a full personal portfolio website built with React + Vite + Tailwind CSS + Recharts. The site features a custom dark navy "data warehouse at night" theme with teal and amber accents and Space Grotesk/Inter/JetBrains Mono typography. Key sections include: Hero with an animated SVG data pipeline diagram, animated counters, a Capability Architecture display, Featured Projects (three named case studies), Dashboard Showcase with Recharts visualizations, Experience Timeline, and more. All content is driven from a single source-of-truth data file (src/data/resumeData.js). During GitHub Pages deployment, Paula encountered two issues: a GitHub Personal Access Token missing the workflow scope, and GitHub Pages not being enabled in repository settings. Both were resolved. An outstanding configuration note: vite.config.js ships with base: '/portfolio/' and needs to be updated to base: '/pranjalportfolio/' to match the actual repository name, or asset paths will break on the live site. On the horizon Confirming the live GitHub Pages deployment is fully functional after the configuration fixes Potential enhancements: generating a real resume PDF or adjusting the visual treatment of the Experience Timeline section Tools & resources Stack: React, Vite, Tailwind CSS, Recharts Deployment: GitHub Actions workflow targeting GitHub Pages Repo name: pranjalportfolio

Last updated 17 hours ago

Instructions
Portfolio Website Build Brief 0. Before you build anything Ask me to attach my resume (and, if I have them, my three master resumes — Data Engineer & Analyst, BI Developer, Data Analyst — plus the case-study detail behind these three projects: BI Service Management Platform, Hamilton County Unclaimed Funds Intelligence Platform, Enterprise Data Asset Discovery & Governance Platform) if they are not already in this project's knowledge. Do not draft copy, invent metrics, or scaffold the site until you have that source material in front of you. If a section of this brief asks for something the resume doesn't support, flag it back to me instead of inventing it. 1. Positioning This is a Data Engineering / Analytics / BI portfolio — not a generic software developer portfolio. Every section should reinforce one message: I build systems that turn raw data into business decisions, not just "I know some tools." Aesthetic reference points: Stripe, Linear, and a well-designed BI dashboard — but the final design should be original, not a visible template. 2. Non-negotiable content rules The resume (and any case-study detail I provide) is the single source of truth. Never invent employers, titles, dates, projects, tools, certifications, or metrics. If a number isn't in my resume, don't display it — leave the section qualitative instead. Any dashboard or chart built from sample data (not my real project data) must be visibly labeled "Illustrative data." Prefer specific, quantified language over generic descriptors ("passionate," "detail-oriented," etc.). 3. Visual direction (keep this short — don't over-specify) Dark, sophisticated theme; strong typography; restrained use of gradients/glass-card effects; data-viz-inspired layout language (KPI cards, animated counters, pipeline diagrams). Animations should be intentional, not decorative filler. Fully responsive. 4. Site structure Hero — Name, headline positioning me as Data Engineer/Analytics/BI, one-line value prop, primary CTA "View Projects," secondary CTA "Resume/Contact," and an animated visual of a data pipeline (raw data → transform → warehouse/lakehouse → semantic model → dashboard → business decision). By the Numbers — Animated-counter stats pulled directly from my resume (e.g., pipeline counts, processing-time improvements, stakeholders supported). Nothing fabricated. Capability Architecture (not a tool-badge wall) — Group skills into: Data Engineering (ETL/ELT, pipelines, medallion architecture, warehousing, modeling, SQL/PySpark) · Analytics & BI (Power BI, semantic models, DAX, Power Query, reporting) · Cloud & Platforms (Microsoft Fabric, Azure, warehouses/lakehouses) · AI & Intelligent Data (only if my resume supports it) · Engineering & Delivery (Git/GitLab, CI/CD, automation, APIs, Agile). Use visual groupings, not a list. Featured Projects — Case-study format per project (business problem → what I built → tech used → architecture/process → quantified impact → key takeaway). Use my three named projects if resume detail supports each field. Include an architecture diagram (Source → Ingestion → Bronze → Silver → Gold → Warehouse → Semantic Model → Power BI) for pipeline-heavy projects. Dashboard Showcase — Interactive KPI cards, trend charts, and an operational/data-quality or pipeline-monitoring view that looks like something a real company would run. Illustrative data, clearly labeled as such. Data Engineering Approach — One clean, visual version of the ingestion → medallion → semantic model → BI → business decision flow. (Only build this once — don't repeat the same diagram in multiple sections.) Business Impact — Technical Solution → Operational Impact → Business Outcome, using only quantified results already in my resume. Experience Timeline — Company, role, dates, key accomplishments, tech, shown as a visual progression (City of Cincinnati/GCWW → NKU Research Assistant → Oracle Antiques, per my actual history). Delivery & Collaboration — Requirements gathering, stakeholder translation, Agile delivery, CI/CD/release management, governance, monitoring ownership — grounded in specifics from my resume, not generic bullet points. About — Concise, human, specific. No "passionate coder" language. Resume/Contact — Download Resume, GitHub, LinkedIn, email CTA. Use clearly-marked placeholders for any URL I haven't provided. 5. Technical requirements Static site, GitHub Pages-deployable. React + Vite, Tailwind, Recharts (or similarly lightweight charting lib). No backend. Fast load, accessible navigation, responsive, basic SEO metadata. Reasonable dependency footprint; structured so I can easily edit content later (ideally content pulled from a single data file, not hardcoded across components). Deliver: full source, instructions to run locally, and step-by-step GitHub Pages deployment instructions. 6. Before calling it done Review the finished site as a hiring manager screening for a Data Engineer/Analytics Engineer/BI Analyst role would. Cut anything that reads as generic, cluttered, or template-like. Confirm every stat and claim traces back to the resume material provided.

Files
1% of project capacity used

Pranjal_Pokharel_Resume_All 3 Versions.txt
169 lines

TXT


Manage project memory
Claude regenerates project memory every evening from your past chats in this project. Only you can see this memory, and it is not shared with other project users.

Purpose & context

Paula (also going by Pranjal Pokharel) is a data engineering and BI developer student at Northern Kentucky University, currently on co-op at the City of Cincinnati. Paula has been building a personal portfolio website to showcase technical skills and project work ahead of graduation.

Current state

Paula recently completed a full personal portfolio website built with React + Vite + Tailwind CSS + Recharts. The site features a custom dark navy "data warehouse at night" theme with teal and amber accents and Space Grotesk/Inter/JetBrains Mono typography. Key sections include: Hero with an animated SVG data pipeline diagram, animated counters, a Capability Architecture display, Featured Projects (three named case studies), Dashboard Showcase with Recharts visualizations, Experience Timeline, and more. All content is driven from a single source-of-truth data file (src/data/resumeData.js).

During GitHub Pages deployment, Paula encountered two issues: a GitHub Personal Access Token missing the workflow scope, and GitHub Pages not being enabled in repository settings. Both were resolved. An outstanding configuration note: vite.config.js ships with base: '/portfolio/' and needs to be updated to base: '/pranjal_portfolio/' to match the actual repository name, or asset paths will break on the live site.

On the horizon

Confirming the live GitHub Pages deployment is fully functional after the configuration fixes
Potential enhancements: generating a real resume PDF or adjusting the visual treatment of the Experience Timeline section
Tools & resources

Stack: React, Vite, Tailwind CSS, Recharts
Deployment: GitHub Actions workflow targeting GitHub Pages
Repo name: pranjal_portfolio
Tell Claude what to remember or forget...