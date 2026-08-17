# Pranjal Pokharel — Data Engineering & BI Portfolio

A static, single-page portfolio built with **React + Vite + Tailwind CSS + Recharts**.
No backend. Deployable straight to GitHub Pages.

Every fact on the site (stats, project bullets, experience, skills, certifications)
is pulled from one file: `src/data/resumeData.js`. Nothing else in the codebase
should need editing for a normal content update.

---

## 1. Add your photo (optional)

The hero section has a photo frame next to your name. Drop a headshot in as:

```
public/profile/photo.jpg
```

It'll appear automatically. Until you add one, a dashed "Add photo" placeholder
is shown instead — nothing breaks if you skip this.

Contact info (email, GitHub, LinkedIn) is already filled in in
`src/data/resumeData.js` under the `profile` object. There is intentionally
no resume-download button on the site; Contact only exposes Email, GitHub,
and LinkedIn.

---

## 2. Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To produce a production build and preview it locally:

```bash
npm run build
npm run preview
```

---

## 3. Deploy to GitHub Pages

You have two options. **Option A (recommended)** is fully automated with the
GitHub Actions workflow already included at `.github/workflows/deploy.yml`.

### Option A — GitHub Actions (automatic on every push)

1. Create a new GitHub repository and push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **The Vite `base` path** in `vite.config.js` is already set to match this
   repo's name:

   ```js
   base: '/pranjal_portfolio/',
   ```

   If you ever rename the repo, update this to match — it must be
   `/<your-repo-name>/`. (If you deploy to a **user/organization root site**,
   i.e. a repo literally named `<your-username>.github.io`, or to a
   **custom domain**, set `base: '/'` instead.)

3. In the GitHub repo, go to **Settings → Pages**, and under "Build and
   deployment" set **Source** to **"GitHub Actions."**

4. Push to `main` (or re-run the workflow manually from the **Actions** tab).
   The included workflow will build the site and publish `dist/` to Pages
   automatically. Your site will be live at:

   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

### Option B — Manual deploy with `gh-pages`

```bash
npm install -D gh-pages
```

Add to `package.json` scripts:

```json
"deploy": "npm run build && npx gh-pages -d dist"
```

Then, after setting the correct `base` in `vite.config.js` as in step 2 above:

```bash
npm run deploy
```

In **Settings → Pages**, set **Source** to **"Deploy from a branch"** and
select the `gh-pages` branch.

---

## 4. Project structure

```
src/
  data/resumeData.js         ← single source of truth for all content
  hooks/
    useCountUp.js             ← animated number counters
    useInView.js               ← scroll-triggered reveal
  components/
    Nav.jsx
    Hero.jsx                   ← signature animated pipeline diagram + photo frame
    ExperienceTimeline.jsx     ← 2nd section on the page
    ByTheNumbers.jsx
    CapabilityArchitecture.jsx
    DashboardShowcase.jsx      ← Recharts, all data labeled "Illustrative data"
    ApproachSection.jsx        ← the one other permitted use of the pipeline flow
    BusinessImpact.jsx
    DeliveryCollaboration.jsx
    About.jsx
    FeaturedProjects.jsx       ← case studies for the 3 named projects, last section
    ResumeContact.jsx          ← Email / GitHub / LinkedIn only, no download
    Footer.jsx
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
  profile/                     ← put your headshot here (photo.jpg)
```

Page order: Hero → Experience → By the Numbers → Capabilities → Dashboards →
Data Engineering Approach → Business Impact → Delivery & Collaboration →
About → Featured Projects → Contact.

## 5. A content rule worth keeping

`resumeData.js` is written so that anything **not** directly supported by your
resume is either omitted or clearly marked. If you add new bullets or
projects later, keep that discipline: quantify only what's real, and label
any sample/mock data as "Illustrative data" the way the Dashboard Showcase
section already does.
