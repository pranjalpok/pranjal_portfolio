# Pranjal Pokharel — Data Engineering & BI Portfolio

A static, single-page portfolio built with **React + Vite + Tailwind CSS + Recharts**.
No backend. Deployable straight to GitHub Pages.

Every fact on the site (stats, project bullets, experience, skills, certifications)
is pulled from one file: `src/data/resumeData.js`. Nothing else in the codebase
should need editing for a normal content update.

---

## 1. Before you publish — fill in the placeholders

Open `src/data/resumeData.js` and update the `profile` object:

```js
export const profile = {
  ...
  email: "PLACEHOLDER — add contact email",     // ← your real email
  github: "PLACEHOLDER — add GitHub URL",        // ← your real GitHub profile URL
  linkedin: "PLACEHOLDER — add LinkedIn URL",     // ← your real LinkedIn URL
  resumeFile: "/resume/Pranjal_Pokharel_Resume.pdf",
  ...
};
```

Then drop your exported resume PDF into:

```
public/resume/Pranjal_Pokharel_Resume.pdf
```

(the "Download Resume" button on the Contact section links to that exact path).

The site will show a small amber notice under the Contact buttons for as long as
any of the three fields above still say `PLACEHOLDER` — that's your reminder,
and it disappears automatically once you fill them in.

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

2. **Set the Vite `base` path** in `vite.config.js` to match your repo name.
   It currently reads:

   ```js
   base: '/portfolio/',
   ```

   Change `portfolio` to whatever you actually named the GitHub repo, e.g. if
   your repo is `github.com/pranjalp/my-site`, set `base: '/my-site/'`.
   (If you're deploying to a **user/organization root site**, i.e. a repo
   literally named `<your-username>.github.io`, or to a **custom domain**,
   set `base: '/'` instead.)

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
    Hero.jsx                   ← signature animated pipeline diagram
    ByTheNumbers.jsx
    CapabilityArchitecture.jsx
    FeaturedProjects.jsx       ← case studies for the 3 named projects
    DashboardShowcase.jsx      ← Recharts, all data labeled "Illustrative data"
    ApproachSection.jsx        ← the one other permitted use of the pipeline flow
    BusinessImpact.jsx
    ExperienceTimeline.jsx
    DeliveryCollaboration.jsx
    About.jsx
    ResumeContact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
public/
  favicon.svg
  resume/                     ← put your resume PDF here
```

## 5. A content rule worth keeping

`resumeData.js` is written so that anything **not** directly supported by your
resume is either omitted or clearly marked. If you add new bullets or
projects later, keep that discipline: quantify only what's real, and label
any sample/mock data as "Illustrative data" the way the Dashboard Showcase
section already does.
