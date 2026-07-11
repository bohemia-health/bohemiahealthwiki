# UI/UX Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild wiki.bhmhlth.com's styling as a token-driven mini design system with shared components, full responsive behavior, and a dead-link-free navigation flow — dark theme, corporate-clean.

**Architecture:** Four shippable layers: (1) CSS design tokens + font/icon loading, (2) shared components (`PageShell`, `Card`, `ComingSoonNotice`, a `/coming-soon/[topic]` route), (3) page migrations onto those components, (4) responsive app shell with drawer sidebar. Styling stays in `app/globals.css` (tokenized) — CSS modules are removed, not added.

**Tech Stack:** Next.js 16.2.9 (App Router), React 19, plain CSS with custom properties, `next/font/google`, Tabler icons webfont (CDN).

**Spec:** `docs/superpowers/specs/2026-07-11-ui-ux-refresh-design.md`

## Global Constraints

- App root: `bohemia-docs/`. All paths below are relative to it unless prefixed with `docs/` (repo root). Run all npm commands from `bohemia-docs/`.
- **Next.js 16 has breaking changes** vs training data. Before using any Next API not shown verbatim in this plan, read the matching guide in `node_modules/next/dist/docs/01-app/`. Dynamic route `params` is a **Promise — always `await params`**.
- No new runtime dependencies. `bootstrap-icons` gets **removed**. Tabler webfont stays on CDN, loaded exactly once.
- Dark theme only. Every color in CSS must be `var(--…)`; hex/rgb literals are allowed **only** inside the `:root` block (and rgba() only for shadow/backdrop opacity effects, listed per-task).
- Search bars are visual placeholders — do NOT wire search logic.
- Canonical names: the Group Buys child page is **"Fundamentals"** (sidebar, breadcrumb, title); the last sidebar section is **"Trust & Safety"** (was "Circumvent").
- No unit-test infrastructure exists and none should be added (docs site, no logic to unit-test). Each task's test cycle = `npm run build` (compile gate) + `npm run lint` + the task's explicit grep/visual verifications. Visual checks run against `npm run dev` (default http://localhost:3000).
- Pre-existing state note: the working tree has an uncommitted edit in `app/group-buys/fundamentals/page.js` (removed `className={styles.card}` from an `<h3>`). Task 3 rewrites that file entirely; do not try to preserve the old markup.
- Commit after every task with the message given in the task.

---

### Task 1: Design tokens, fonts, icons, dead-CSS removal

**Files:**
- Modify: `app/globals.css` (`:root` block + mechanical color/font/radius substitutions + 4 targeted fixes)
- Modify: `app/layout.js` (next/font, single Tabler link, drop bootstrap-icons, mount `<Analytics />`)
- Modify: `components/Sidebar.js` (icon classes only — `bi bi-*` → `ti ti-*`, chevron misspelling)
- Delete: `app/page.module.css`
- Modify: `package.json` (remove `bootstrap-icons`)

**Interfaces:**
- Produces: CSS custom properties consumed by every later task: `--bg`, `--bg-input`, `--surface`, `--border`, `--border-subtle`, `--accent`, `--accent-soft`, `--text-primary`, `--text-secondary`, `--text-muted`, `--text-faint`, `--font-heading`, `--font-body`, `--font-mono`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`, `--space-1`…`--space-8`, plus existing `--sidebar-width`, `--content-pad`, `--navbar-height`, `--sidebar-pad-x`.

- [ ] **Step 1: Replace the `:root` block in `app/globals.css`**

Replace lines 5–10 (`:root { … }`) with:

```css
:root {
  /* layout */
  --sidebar-width: 290px;
  --content-pad: clamp(1.6rem, 6vw, 6rem);
  --navbar-height: 64px;
  --sidebar-pad-x: 1rem;

  /* color */
  --bg: #030306;
  --bg-input: #000000;
  --surface: #171a21;
  --border: #3d3d3d;
  --border-subtle: #2f3137;
  --accent: #6b5bff;
  --accent-soft: #9d8fff;
  --text-primary: #f5f6f8;
  --text-secondary: #c8c8d0;
  --text-muted: #9ca3af;
  --text-faint: #6b7280;

  /* type */
  --font-heading: var(--next-font-heading), sans-serif;
  --font-body: var(--next-font-body), sans-serif;
  --font-mono: var(--next-font-mono), monospace;

  /* geometry */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 999px;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
}
```

- [ ] **Step 2: Run the mechanical substitutions over `app/globals.css`**

Run from `bohemia-docs/` (macOS sed):

```bash
sed -i '' \
  -e 's/#030306/var(--bg)/g' \
  -e 's/#000000/var(--bg-input)/g' \
  -e 's/background: #000;/background: var(--bg-input);/g' \
  -e 's/#171a21/var(--surface)/g' \
  -e 's/#3d3d3d/var(--border)/g' \
  -e 's/#2f3137/var(--border-subtle)/g' \
  -e 's/#6b5bff/var(--accent)/g' \
  -e 's/#9d8fff/var(--accent-soft)/g' \
  -e 's/#f5f6f8/var(--text-primary)/g' \
  -e 's/#c8c8d0/var(--text-secondary)/g' \
  -e 's/#a1a1a9/var(--text-secondary)/g' \
  -e 's/#9ca3af/var(--text-muted)/g' \
  -e 's/#6b7280/var(--text-faint)/g' \
  -e 's/#4b5563/var(--text-faint)/g' \
  -e 's/color: white;/color: var(--text-primary);/g' \
  -e 's/"DM Sans", sans-serif/var(--font-body)/g' \
  -e 's/"Onest", sans-serif/var(--font-heading)/g' \
  -e 's/"DM Mono", monospace/var(--font-mono)/g' \
  -e 's/border-radius: 6px;/border-radius: var(--radius-sm);/g' \
  -e 's/border-radius: 4px;/border-radius: var(--radius-sm);/g' \
  -e 's/border-radius: 17px;/border-radius: var(--radius-full);/g' \
  -e 's/border-radius: 999px;/border-radius: var(--radius-full);/g' \
  app/globals.css
```

Note: the sed also rewrites the hexes inside the new `:root` block's *comments* — it won't, there are none; the `:root` values themselves are plain hexes and sed would replace them self-referentially. **Prevent this:** run the sed FIRST (Step 2), THEN replace the `:root` block (Step 1). Execute in the order 2 → 1 (the checkboxes above are listed in logical order, not execution order — do sed, then paste the new `:root`, replacing whatever the sed did to the old `:root`).

- [ ] **Step 3: Four targeted fixes in `app/globals.css`**

(a) Chevron transition — find (around former line 458–465):

```css
.dropdown-chevron {
  color: var(--text-muted);
  font-size: 0.75rem;
  line-height: 1;
  flex-shrink: 0;

  transition: transform 3s cubic-bezier(0.22, 1, 0.36, 1);
}
```

change `3s` → `0.3s`.

(b) Delete the duplicate `.sidebar-dropdown` block. The file has:

```css
.sidebar-dropdown {
  margin: 0.15rem 0;
}

.sidebar-dropdown {
  padding: 0 var(--sidebar-pad-x);
  margin: 0.15rem 0;
}
```

Keep only the second (with `padding`); delete the first.

(c) Delete the duplicate dropdown-link rules — remove both blocks below entirely (they duplicate `.sidebar-dropdown-inner a` / `:hover` which remain):

```css
.sidebar-dropdown-menu a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 300;
  line-height: 1.2;
  padding: 0.45rem 0.65rem;
  border-radius: var(--radius-sm);
}

.sidebar-dropdown-menu a:hover {
  color: var(--text-primary);
  background: var(--surface);
}
```

(d) In the `body` rule, ensure the font line reads `font-family: var(--font-body);` (sed in Step 2 already did this — just confirm).

- [ ] **Step 4: Rewrite `app/layout.js`**

Full replacement:

```js
import { Onest, DM_Sans, DM_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--next-font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--next-font-body",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--next-font-mono",
});

export const metadata = {
  title: "Bohemia Health Docs",
  description:
    "Build a seamless end-to-end workflow through Bohemia Health's internal docs.",
  applicationName: "Bohemia Health™: A Biotechnology Company",
  openGraph: {
    title: "Bohemia Health™: A Biotechnology Company",
    description:
      "Removing Friction. Bohemia Health is a biotechnology company at the cutting-edge of peptide therapy and e-commerce.",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>
      <body>
        <Navbar />
        <div className="container">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
```

(This removes: the duplicate Tabler `<link>`, all three Google Fonts `<link>`s, the `bootstrap-icons` CSS import — and it **mounts** `<Analytics />`, which was previously imported but never rendered, i.e. analytics were not tracking.)

- [ ] **Step 5: Migrate Sidebar icon classes (Tabler) and fix the misspelled chevron class**

In `components/Sidebar.js` run these exact substitutions (or sed):

```bash
sed -i '' \
  -e 's/bi bi-people/ti ti-users/' \
  -e 's/bi bi-shop/ti ti-building-store/' \
  -e 's/bi bi-clipboard-check/ti ti-clipboard-check/' \
  -e 's/bi bi-box-seam/ti ti-package/' \
  -e 's/bi bi-flask/ti ti-flask/' \
  -e 's/bi bi-chat-dots/ti ti-message-circle/' \
  -e 's/bi bi-chevron-down/ti ti-chevron-down/g' \
  -e 's/drop-down-chevron/dropdown-chevron/' \
  components/Sidebar.js
```

(Run from `bohemia-docs/`.)

- [ ] **Step 6: Delete dead CSS and the bootstrap-icons dependency**

```bash
rm app/page.module.css
npm uninstall bootstrap-icons
```

- [ ] **Step 7: Verify**

```bash
npm run build
```
Expected: build succeeds.

```bash
grep -n "#[0-9a-fA-F]\{3,8\}" app/globals.css | grep -v "^\s*[0-9]*:\s*--"
```
Expected: no output outside the `:root` block (allow lines that are token definitions).

```bash
grep -rn "bi bi-\|bootstrap-icons" app components; grep -c "tabler-icons.min.css" app/layout.js
```
Expected: no `bi bi-`/bootstrap matches; Tabler count = `1`.

Start dev server, load `/` and `/group-buys/fundamentals`: fonts render (headings ≠ body), sidebar icons visible, dropdown chevron rotates quickly (0.3s), no visual regressions.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "refactor: design tokens, next/font, single icon library, dead CSS removal"
```

---

### Task 2: Shared components + Coming Soon route

**Files:**
- Create: `components/PageShell.js`
- Create: `components/Card.js`
- Create: `components/ComingSoonNotice.js`
- Create: `app/coming-soon/[topic]/page.js`
- Modify: `app/globals.css` (append component styles)

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces:
  - `PageShell({ breadcrumbs = [{label, href?}], title, lede?, children })` — renders breadcrumb + `<article class="doc-page">` with `<h1>{title}</h1>`. Pages must NOT render `<main>` (layout owns it).
  - `Card({ variant?: "default"|"highlight", title?, titleAs?: "h2"|"h3" (default "h3"), href?, children })` and `CardGrid({ children })` — named exports from `components/Card.js`.
  - `ComingSoonNotice()` — the "article being written" block, default export.
  - Route `/coming-soon/<slug>` for any kebab-case slug.

- [ ] **Step 1: Create `components/PageShell.js`**

```js
import Link from "next/link";

export default function PageShell({ breadcrumbs = [], title, lede, children }) {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Docs</Link>
        {breadcrumbs.map((crumb) => (
          <span key={crumb.label} className="breadcrumb-item">
            <i className="ti ti-chevron-right" aria-hidden="true"></i>
            {crumb.href ? (
              <Link href={crumb.href}>{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
      <article className="doc-page">
        {title && (
          <header className="doc-header">
            <h1>{title}</h1>
            {lede && <p className="doc-lede">{lede}</p>}
          </header>
        )}
        {children}
      </article>
    </>
  );
}
```

- [ ] **Step 2: Create `components/Card.js`**

```js
import Link from "next/link";

export function Card({
  variant = "default",
  title,
  titleAs: TitleTag = "h3",
  href,
  children,
}) {
  const className = `card card--${variant}`;
  const body = (
    <>
      {title && <TitleTag className="card-title">{title}</TitleTag>}
      <div className="card-body">{children}</div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${className} card--link`}>
        {body}
        <i className="ti ti-arrow-narrow-right card-arrow" aria-hidden="true"></i>
      </Link>
    );
  }
  return <div className={className}>{body}</div>;
}

export function CardGrid({ children }) {
  return <div className="card-grid">{children}</div>;
}
```

- [ ] **Step 3: Create `components/ComingSoonNotice.js`**

```js
import Link from "next/link";

export default function ComingSoonNotice() {
  return (
    <div className="coming-soon">
      <i className="ti ti-pencil" aria-hidden="true"></i>
      <p className="coming-soon-title">This article is being written.</p>
      <p className="coming-soon-sub">
        Check back soon — or head back to the docs home.
      </p>
      <Link href="/" className="btn-accent">
        Back to Docs
      </Link>
    </div>
  );
}
```

- [ ] **Step 4: Create `app/coming-soon/[topic]/page.js`**

Next 16: `params` is a Promise — must be awaited. If in doubt, confirm at `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md`.

```js
import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";

const TITLE_OVERRIDES = {
  coas: "COAs",
  "coa-requests": "COA Requests",
  "no-go-vendors": "No-Go Vendors",
  "log-in": "Log In",
};

function titleFromSlug(slug) {
  const clean = decodeURIComponent(slug);
  if (TITLE_OVERRIDES[clean]) return TITLE_OVERRIDES[clean];
  return clean
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { topic } = await params;
  return { title: `${titleFromSlug(topic)} — Bohemia Health Docs` };
}

export default async function ComingSoonPage({ params }) {
  const { topic } = await params;
  const title = titleFromSlug(topic);

  return (
    <PageShell breadcrumbs={[{ label: title }]} title={title}>
      <ComingSoonNotice />
    </PageShell>
  );
}
```

- [ ] **Step 5: Append component styles to `app/globals.css`**

Also: in the existing `/* BREADCRUMB */` section, delete the old `.breadcrumb span, .breadcrumb span a { … }` rule (replaced below). Append:

```css
/* DOC PAGE */

.doc-page {
  max-width: 75ch;
}

.doc-header {
  margin-bottom: var(--space-6);
}

.doc-header h1 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.15;
  margin: 0;
}

.doc-lede {
  color: var(--text-secondary);
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.65;
  margin: var(--space-3) 0 0;
}

.doc-page h2 {
  font-size: 1.45rem;
  font-weight: 600;
  margin: var(--space-7) 0 var(--space-4);
}

.doc-page p,
.doc-page li {
  color: var(--text-secondary);
  line-height: 1.7;
  font-weight: 300;
}

/* BREADCRUMB (refresh) */

.breadcrumb,
.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.breadcrumb i {
  font-size: 0.75em;
  color: var(--text-faint);
}

.breadcrumb-item span {
  color: var(--text-faint);
}

.breadcrumb-item a {
  color: var(--accent);
}

/* CARDS */

.card {
  position: relative;
  display: block;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  text-decoration: none;
}

.card--highlight {
  border-color: var(--accent);
}

.card-title {
  margin: 0 0 var(--space-2);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.card-body {
  color: var(--text-secondary);
  font-weight: 300;
  line-height: 1.6;
}

.card-body p {
  margin: 0 0 var(--space-2);
}

.card-body p:last-child {
  margin-bottom: 0;
}

.card--link {
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.card--link:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.card-arrow {
  position: absolute;
  top: var(--space-5);
  right: var(--space-5);
  color: var(--accent);
  font-size: 1.1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-4);
  margin: var(--space-4) 0;
}

/* COMING SOON */

.coming-soon {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  background: var(--surface);
  border: 1px dashed var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  margin-top: var(--space-5);
}

.coming-soon > i {
  font-size: 1.5rem;
  color: var(--accent-soft);
}

.coming-soon-title {
  margin: 0;
  font-weight: 500;
  color: var(--text-primary);
}

.coming-soon-sub {
  margin: 0;
  color: var(--text-muted);
  font-weight: 300;
}

.btn-accent {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);

  margin-top: var(--space-3);
  padding: 0.6rem 1.2rem;

  background: var(--accent);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;

  border-radius: var(--radius-full);
}
```

- [ ] **Step 6: Verify**

```bash
npm run build && npm run lint
```
Expected: both pass.

Dev server: open `/coming-soon/vendor-vetting` → breadcrumb "Docs › Vendor Vetting", h1 "Vendor Vetting", dashed Coming Soon card with working "Back to Docs" button. Open `/coming-soon/coas` → title renders "COAs" (override works).

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: PageShell, Card, ComingSoonNotice components and /coming-soon route"
```

---

### Task 3: Migrate the four content pages

**Files:**
- Modify: `app/account-setup/page.js`, `app/resources/page.js`, `app/support/page.js`, `app/group-buys/fundamentals/page.js` (full rewrites)
- Delete: `app/group-buys/fundamentals/page.module.scss`

**Interfaces:**
- Consumes: `PageShell`, `Card`, `CardGrid`, `ComingSoonNotice` from Task 2.
- Produces: nothing new; every content page now renders through `PageShell` (no page-level `<main>`, no nested-main violation, no undefined CSS classes).

- [ ] **Step 1: Rewrite `app/account-setup/page.js`**

```js
import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";

export const metadata = { title: "Account Setup — Bohemia Health Docs" };

export default function AccountSetupPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Get Started" },
        { label: "Account Setup", href: "/account-setup" },
      ]}
      title="Account Setup"
      lede="Setting up your workers account with Bohemia Health is easy. We provide a guide to make it seamless."
    >
      <h2>Instructions</h2>
      <ComingSoonNotice />
    </PageShell>
  );
}
```

- [ ] **Step 2: Rewrite `app/resources/page.js`**

```js
import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";

export const metadata = { title: "Resources — Bohemia Health Docs" };

export default function ResourcesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Get Started" },
        { label: "Resources", href: "/resources" },
      ]}
      title="Resources"
      lede="Guides, references, and tools for navigating Bohemia Health group buys."
    >
      <ComingSoonNotice />
    </PageShell>
  );
}
```

- [ ] **Step 3: Rewrite `app/support/page.js`**

```js
import PageShell from "@/components/PageShell";
import ComingSoonNotice from "@/components/ComingSoonNotice";

export const metadata = { title: "Support — Bohemia Health Docs" };

export default function SupportPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Get Started" },
        { label: "Support", href: "/support" },
      ]}
      title="Support"
      lede="How to get help with orders, shipping, and everything in between."
    >
      <ComingSoonNotice />
    </PageShell>
  );
}
```

- [ ] **Step 4: Rewrite `app/group-buys/fundamentals/page.js` and delete its SCSS module**

```js
import PageShell from "@/components/PageShell";
import { Card, CardGrid } from "@/components/Card";
import DocsOrbitGraphic from "@/components/DocsOrbitGraphic/DocsOrbitGraphic.js";

export const metadata = {
  title: "Group Buy Fundamentals — Bohemia Health Docs",
};

export default function GroupBuyFundamentalsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Group Buys" },
        { label: "Fundamentals", href: "/group-buys/fundamentals" },
      ]}
      title="Group Buy Fundamentals"
    >
      <DocsOrbitGraphic />

      <Card variant="highlight" title="Group Buy">
        <p>
          <em>/gru:p/baɪ/</em> — a purchasing model where individuals pool
          their collective buying power to secure discounts or bring custom
          products to life.
        </p>
      </Card>

      <h2>Group Buy vs Direct Sale</h2>
      <CardGrid>
        <Card title="Direct Sale">
          <p>
            Direct sales involve vendor-to-consumer sales, are faster to
            fulfill, and are not dependent on a minimum order quantity.
          </p>
        </Card>
        <Card title="Group Buy">
          <p>
            Pre-planned with guarantees based on the relationship established
            between the entity and the vendor company.
          </p>
        </Card>
      </CardGrid>

      <Card title="Group Buys hold more weight during negotiation, ordering, and fulfillment. This can include:">
        <ul>
          <li>Requests for one complete batch of a particular peptide</li>
          <li>
            Customized peptide configurations (i.e., Cartalax 40mg, KPV 50mg,
            Retatrutide 100mg)
          </li>
          <li>
            Easily-identifiable or branded vial crimp/cap color combinations
          </li>
        </ul>
      </Card>

      <h2>The Life Cycle of a Group Buy</h2>
      <ol>
        <li>
          A Group Buy Organizer reaches out to the Vendor based on group
          interest
        </li>
        <li>
          We verify guarantees, discuss capacity, negotiate pricing, and
          establish minimum order quantity
        </li>
        <li>The window of the Group Buy is confirmed</li>
        <li>Orders are collected</li>
        <li>The window closes and final numbers are reconciled</li>
        <li>
          An order sheet is written up with specifications of each item ordered
          alongside total quantity
        </li>
        <li>
          Production of each item commences, testing, shipping from the vendor,
          to the customer
        </li>
        <li>
          Any delays, shortages, address issues, and custom issues are handled
          by us
        </li>
      </ol>
    </PageShell>
  );
}
```

```bash
rm app/group-buys/fundamentals/page.module.scss
```

- [ ] **Step 5: Verify**

```bash
npm run build && npm run lint
```
Expected: pass.

```bash
grep -rn "<main" app --include="page.js"
```
Expected: no output (only `app/layout.js` renders `<main>`).

```bash
grep -rn "Lorem\|lorem" app components
```
Expected: no output.

Dev server: `/group-buys/fundamentals` → orbit graphic intact, definition card has accent border, the two comparison cards sit side-by-side (≥~560px wide viewport), breadcrumb reads Docs › Group Buys › Fundamentals. `/resources`, `/support`, `/account-setup` → title + lede + Coming Soon block, exactly one `<main>` in the DOM (inspect).

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "refactor: migrate content pages onto PageShell/Card, remove lorem ipsum and scss module"
```

---

### Task 4: Responsive app shell — drawer sidebar, navbar rewrite, scroll fixes

**Files:**
- Create: `components/LayoutClient.js`
- Modify: `app/layout.js` (delegate body to LayoutClient)
- Modify: `components/Navbar.js` (full rewrite: hamburger, trimmed links, next/image logo, aria)
- Modify: `components/Sidebar.js` (accept `open` prop only — full rewrite happens in Task 5; here just add the prop and class)
- Modify: `app/globals.css` (responsive media queries, backdrop, hamburger, layout hardening)

**Interfaces:**
- Consumes: tokens; existing `.sidebar`/`.navbar` styles.
- Produces:
  - `LayoutClient({ children })` — client component owning `sidebarOpen` state; closes the drawer on route change.
  - `Navbar({ onMenuToggle, menuOpen })` — hamburger visible <768px.
  - `Sidebar({ open })` — renders `className={open ? "sidebar open" : "sidebar"}`.

- [ ] **Step 1: Create `components/LayoutClient.js`**

```js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function LayoutClient({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      <Navbar
        menuOpen={sidebarOpen}
        onMenuToggle={() => setSidebarOpen((open) => !open)}
      />
      <div className="container">
        <Sidebar open={sidebarOpen} />
        {sidebarOpen && (
          <button
            type="button"
            className="sidebar-backdrop"
            aria-label="Close navigation menu"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <main className="content">{children}</main>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Update `app/layout.js` body**

Replace the `<body>…</body>` contents with:

```js
      <body>
        <LayoutClient>{children}</LayoutClient>
        <Analytics />
      </body>
```

Add `import LayoutClient from "@/components/LayoutClient";` and REMOVE the now-unused `Navbar`/`Sidebar` imports from `app/layout.js`.

- [ ] **Step 3: Rewrite `components/Navbar.js`**

Navbar trim per spec: keep **Directory, Help, Log in**; drop API/SDKs/Changelog. Logo becomes `next/image` with absolute path (source file is 1694×606 → 134×48 at display size; this also fixes the broken logo on nested routes).

```js
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ menuOpen, onMenuToggle }) {
  return (
    <nav className="navbar">
      <div>
        <button
          type="button"
          className="navbar-menu-btn"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={onMenuToggle}
        >
          <i className={menuOpen ? "ti ti-x" : "ti ti-menu-2"} aria-hidden="true"></i>
        </button>
        <Link href="/" className="navbar-logo">
          <Image
            src="/assets/BHMDocs-ShorthandLogomark.png"
            alt="Bohemia Health Docs home"
            width={134}
            height={48}
            priority
          />
        </Link>
      </div>

      <ul>
        <li className="navbar-search-item">
          <div className="search-container">
            <i className="ti ti-search" aria-hidden="true" />
            <input
              type="text"
              className="navbar-search"
              id="searchInput"
              placeholder="Search"
              aria-label="Search docs"
            />
            <div className="search-results" id="searchResults" />
          </div>
        </li>
        <li className="navbar-link-item">
          <Link href="/coming-soon/directory">Directory</Link>
        </li>
        <li className="navbar-link-item">
          <Link href="/coming-soon/help">
            Help <i className="ti ti-chevron-down" aria-hidden="true"></i>
          </Link>
        </li>
        <li className="login-item">
          <Link href="/coming-soon/log-in" className="login-btn">
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
}
```

- [ ] **Step 4: Add `open` prop to `components/Sidebar.js` (minimal touch)**

Change the signature and root element only:

```js
export default function Sidebar({ open = false }) {
```

```js
    <aside className={open ? "sidebar open" : "sidebar"}>
```

- [ ] **Step 5: Layout hardening + responsive CSS in `app/globals.css`**

(a) Replace the `.container` rule with:

```css
.container {
  display: flex;
  min-height: calc(100vh - var(--navbar-height));
  margin-top: var(--navbar-height);
  margin-left: var(--sidebar-width);
  background-color: var(--bg);
}
```

(the old `min-height: 100vh` added a navbar-height of scrollable void past the content end — this is the scroll-into-black-void fix; the navbar itself is already `position: fixed` and stays put).

(b) Append at the end of the file:

```css
/* HAMBURGER + BACKDROP (hidden on desktop) */

.navbar-menu-btn {
  display: none;
  appearance: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.4rem;
  padding: var(--space-1);
  cursor: pointer;
  align-items: center;
}

.sidebar-backdrop {
  display: none;
}

/* RESPONSIVE */

@media (max-width: 991px) {
  :root {
    --sidebar-width: 240px;
  }

  .navbar-search {
    width: 15rem;
  }

  .navbar ul {
    gap: 1rem;
  }
}

@media (max-width: 767px) {
  .container {
    margin-left: 0;
  }

  .sidebar {
    width: min(320px, 85vw);
    transform: translateX(-100%);
    transition: transform 240ms ease;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .sidebar-backdrop {
    display: block;
    position: fixed;
    inset: var(--navbar-height) 0 0 0;
    background: rgba(0, 0, 0, 0.55);
    border: none;
    padding: 0;
    z-index: 98;
    cursor: pointer;
  }

  .navbar-menu-btn {
    display: inline-flex;
  }

  .navbar-link-item {
    display: none;
  }

  .navbar-search {
    width: 100%;
    min-width: 0;
  }

  .navbar-search-item,
  .search-container {
    flex: 1;
    min-width: 0;
  }

  .navbar ul {
    flex: 1;
    padding-right: 0;
  }

  .navbar > div:first-child {
    gap: 0.75rem;
  }
}

@media (max-width: 479px) {
  .navbar-logo img {
    height: 36px;
    width: auto;
  }
}
```

(rgba() literals here are shadow/backdrop opacity effects — allowed per Global Constraints.)

- [ ] **Step 6: Verify**

```bash
npm run build && npm run lint
```
Expected: pass.

Dev server, desktop viewport (1280px): unchanged layout; navbar shows Directory/Help/Log in only (no API/SDKs/Changelog); logo renders on `/group-buys/fundamentals` (regression fixed); scroll to bottom of every page — navbar stays fixed, no black void past the footer of content.

Resize to 375px: sidebar hidden; hamburger appears; tapping it slides the drawer in with a dimmed backdrop; tapping backdrop or navigating closes it; no horizontal scrollbar on any page.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: responsive app shell - drawer sidebar, navbar trim, next/image logo, scroll fixes"
```

---

### Task 5: Sidebar rewrite (data-driven) + homepage entry cards

**Files:**
- Modify: `components/Sidebar.js` (full rewrite)
- Modify: `app/page.js` (full rewrite)
- Modify: `app/globals.css` (three small rules)

**Interfaces:**
- Consumes: `Sidebar({ open })` contract from Task 4; `Card`/`CardGrid` from Task 2; `/coming-soon/<slug>` route from Task 2.
- Produces: final navigation — zero `href="#"`, zero dead `href="/"`; sections "Get Started" / "Operate" / dropdowns / "Trust & Safety".

- [ ] **Step 1: Rewrite `components/Sidebar.js`**

```js
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TOP_SECTIONS = [
  {
    label: "Get Started",
    links: [
      { label: "Overview", href: "/" },
      { label: "Account Setup", href: "/account-setup" },
      { label: "Resources", href: "/resources" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    label: "Operate",
    links: [
      { label: "Terms of Use", href: "/coming-soon/terms-of-use" },
      { label: "Definitions", href: "/coming-soon/definitions" },
      { label: "Authentication", href: "/coming-soon/authentication" },
      { label: "Roles", href: "/coming-soon/roles" },
    ],
  },
];

const DROPDOWNS = [
  {
    label: "Group Buys",
    icon: "ti ti-users",
    basePath: "/group-buys",
    links: [
      { label: "Fundamentals", href: "/group-buys/fundamentals" },
      { label: "Research", href: "/coming-soon/group-buy-research" },
      { label: "Planning & Setup", href: "/coming-soon/planning-and-setup" },
      { label: "Pricing & Profitability", href: "/coming-soon/pricing-and-profitability" },
      { label: "Vendors", href: "/coming-soon/group-buy-vendors" },
      { label: "Fulfillment", href: "/coming-soon/fulfillment" },
      { label: "Public Updates", href: "/coming-soon/public-updates" },
      { label: "Regulation, Restriction and Exclusions", href: "/coming-soon/regulation-restriction-and-exclusions" },
    ],
  },
  {
    label: "Vendors",
    icon: "ti ti-building-store",
    links: [
      { label: "Vendor Overview", href: "/coming-soon/vendor-overview" },
      { label: "Gray Market Vendors", href: "/coming-soon/gray-market-vendors" },
      { label: "Vendor Vetting", href: "/coming-soon/vendor-vetting" },
      { label: "Approved Vendors", href: "/coming-soon/approved-vendors" },
      { label: "No-Go Vendors", href: "/coming-soon/no-go-vendors" },
      { label: "Vendor Behavior Policy", href: "/coming-soon/vendor-behavior-policy" },
      { label: "Vendor Communication", href: "/coming-soon/vendor-communication" },
      { label: "Vendor Incident Log", href: "/coming-soon/vendor-incident-log" },
    ],
  },
  {
    label: "Order Management",
    icon: "ti ti-clipboard-check",
    links: [
      { label: "Order Intake", href: "/coming-soon/order-intake" },
      { label: "Order Statuses", href: "/coming-soon/order-statuses" },
      { label: "Order Changes", href: "/coming-soon/order-changes" },
      { label: "Customer Holds", href: "/coming-soon/customer-holds" },
      { label: "Add-Ons", href: "/coming-soon/add-ons" },
      { label: "No Split Shipping", href: "/coming-soon/no-split-shipping" },
      { label: "No Split Location Fulfillment", href: "/coming-soon/no-split-location-fulfillment" },
      { label: "Shipping Readiness", href: "/coming-soon/shipping-readiness" },
      { label: "Order Reconciliation", href: "/coming-soon/order-reconciliation" },
    ],
  },
  {
    label: "Inventory",
    icon: "ti ti-package",
    links: [
      { label: "Inventory Intake", href: "/coming-soon/inventory-intake" },
      { label: "Inventory Verification", href: "/coming-soon/inventory-verification" },
      { label: "Shortages", href: "/coming-soon/shortages" },
      { label: "Missing Kits", href: "/coming-soon/missing-kits" },
      { label: "Broken Items", href: "/coming-soon/broken-items" },
      { label: "Extra Kits", href: "/coming-soon/extra-kits" },
      { label: "Bulk Packing Lists", href: "/coming-soon/bulk-packing-lists" },
      { label: "Final Reconciliation", href: "/coming-soon/final-reconciliation" },
    ],
  },
  {
    label: "3rd Party Testing",
    icon: "ti ti-flask",
    links: [
      { label: "Testing Overview", href: "/coming-soon/testing-overview" },
      { label: "COAs", href: "/coming-soon/coas" },
      { label: "Sample Selection", href: "/coming-soon/sample-selection" },
      { label: "Testing Timelines", href: "/coming-soon/testing-timelines" },
      { label: "Failed Results", href: "/coming-soon/failed-results" },
      { label: "Retesting", href: "/coming-soon/retesting" },
      { label: "COA Requests", href: "/coming-soon/coa-requests" },
      { label: "Testing Communication Rules", href: "/coming-soon/testing-communication-rules" },
    ],
  },
  {
    label: "Customer Support",
    icon: "ti ti-message-circle",
    links: [
      { label: "Support Workflow", href: "/coming-soon/support-workflow" },
      { label: "Template Responses", href: "/coming-soon/template-responses" },
      { label: "Address Changes", href: "/coming-soon/address-changes" },
      { label: "Missing Items", href: "/coming-soon/missing-items" },
      { label: "Impatient Customers", href: "/coming-soon/impatient-customers" },
      { label: "Status Update Requests", href: "/coming-soon/status-update-requests" },
      { label: "COA Requests", href: "/coming-soon/coa-requests" },
      { label: "Behavior Policy", href: "/coming-soon/behavior-policy" },
      { label: "Incident Examples", href: "/coming-soon/incident-examples" },
      { label: "Escalation Rules", href: "/coming-soon/escalation-rules" },
    ],
  },
];

const BOTTOM_SECTION = {
  label: "Trust & Safety",
  links: [
    { label: "International Orders", href: "/coming-soon/international-orders" },
    { label: "GB Issues", href: "/coming-soon/group-buy-issues" },
    { label: "Guarantees", href: "/coming-soon/guarantees" },
    { label: "Reputation", href: "/coming-soon/reputation" },
  ],
};

function SidebarSection({ section, pathname }) {
  return (
    <>
      <p className="section-label">{section.label}</p>
      <ul className="section-links">
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function SidebarDropdown({ item, pathname }) {
  const routeOpen = item.basePath ? pathname.startsWith(item.basePath) : false;
  const [manualOpen, setManualOpen] = useState(false);
  const open = manualOpen || routeOpen;

  return (
    <div className="sidebar-dropdown">
      <button
        className={open ? "sidebar-dropdown-btn active" : "sidebar-dropdown-btn"}
        type="button"
        onClick={() => setManualOpen(!manualOpen)}
        aria-expanded={open}
      >
        <span className="dropdown-title">
          <i className={item.icon} aria-hidden="true"></i>
          <span>{item.label}</span>
        </span>
        <i
          className={
            open
              ? "ti ti-chevron-down dropdown-chevron open"
              : "ti ti-chevron-down dropdown-chevron"
          }
          aria-hidden="true"
        ></i>
      </button>

      <div className={open ? "sidebar-dropdown-menu open" : "sidebar-dropdown-menu"}>
        <ul className="sidebar-dropdown-inner">
          {item.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Sidebar({ open = false }) {
  const pathname = usePathname();

  return (
    <aside className={open ? "sidebar open" : "sidebar"}>
      <div className="sidebar-search">
        <i className="ti ti-search" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Search articles..."
          aria-label="Search articles"
        />
      </div>
      <nav className="sidebar-section" aria-label="Docs navigation">
        {TOP_SECTIONS.map((section) => (
          <SidebarSection
            key={section.label}
            section={section}
            pathname={pathname}
          />
        ))}

        {DROPDOWNS.map((item) => (
          <SidebarDropdown key={item.label} item={item} pathname={pathname} />
        ))}

        <SidebarSection section={BOTTOM_SECTION} pathname={pathname} />
      </nav>
    </aside>
  );
}
```

- [ ] **Step 2: Adjust `app/globals.css` for the `<ul>` dropdown inner + `<p>` labels**

(a) Replace the `.sidebar-dropdown-inner` rule with:

```css
.sidebar-dropdown-inner {
  overflow: hidden;

  display: flex;
  flex-direction: column;

  list-style: none;
  margin: 0;
  padding: 0;
}
```

(b) Confirm `.section-label` has `margin: 0;` (it does) — it now styles a `<p>`, no other change needed.

- [ ] **Step 3: Rewrite `app/page.js` (homepage)**

```js
import Link from "next/link";
import { Card, CardGrid } from "@/components/Card";

export default function Page() {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Docs</Link>
        <span className="breadcrumb-item">
          <i className="ti ti-chevron-right" aria-hidden="true"></i>
          <span>Get Started</span>
        </span>
      </nav>

      <section className="hero">
        <img src="/assets/banner-dark.png" alt="" className="banner" />
        <div className="hero-text">
          <h1>Bohemia Health Docs</h1>
          <p>
            Explore guides and tutorials to start building on Bohemia's platform
          </p>
          <div className="hero-btn-container">
            <Link href="/account-setup" className="get-started-btn">
              Get started
              <i className="ti ti-arrow-narrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cards" aria-label="Browse the docs">
        <h2 className="home-cards-title">Browse the docs</h2>
        <CardGrid>
          <Card titleAs="h3" title="Get Started" href="/account-setup">
            <p>Set up your account and learn how the platform works.</p>
          </Card>
          <Card titleAs="h3" title="Group Buys" href="/group-buys/fundamentals">
            <p>How group buys work, from research to fulfillment.</p>
          </Card>
          <Card titleAs="h3" title="Resources" href="/resources">
            <p>Guides, references, and tools for members.</p>
          </Card>
          <Card titleAs="h3" title="Support" href="/support">
            <p>Get help with orders, shipping, and everything in between.</p>
          </Card>
        </CardGrid>
      </section>
    </>
  );
}
```

(banner `alt=""` — it's decorative; the hero `<h1>` carries the meaning. The stray empty `<section>` is gone. Hero CTA now routes to `/account-setup`.)

- [ ] **Step 4: Hero + home-cards CSS in `app/globals.css`**

(a) In the `.hero` rule, replace `min-height: calc(100vh - var(--navbar-height));` with `min-height: 0;` and change `padding-top: 5.5rem;` → `padding-top: var(--space-6);` and `padding-bottom: 5rem;` → `padding-bottom: var(--space-7);` (the full-viewport hero pushed the new entry cards below the fold and caused over-scroll).

(b) Append:

```css
/* HOME ENTRY CARDS */

.home-cards {
  margin-top: var(--space-6);
}

.home-cards-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 var(--space-4);
}
```

- [ ] **Step 5: Verify**

```bash
npm run build && npm run lint
```
Expected: pass.

```bash
grep -rn 'href="#"' app components
```
Expected: no output.

```bash
grep -rn 'href="/"' app components
```
Expected: matches only where "/" is intentional home: PageShell breadcrumb "Docs", ComingSoonNotice "Back to Docs", Sidebar "Overview", Navbar logo, homepage breadcrumb. Nothing else.

Dev server: homepage shows hero + 4 clickable entry cards; every sidebar item navigates somewhere real (spot-check ≥6 including "Trust & Safety" items and a dropdown child → Coming Soon pages render with correct titles); sidebar shows "Fundamentals" (not "Lifecycle"), "Trust & Safety" (not "Circumvent"); active states highlight correctly on `/account-setup` and `/group-buys/fundamentals`.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: data-driven sidebar with resolved links, Trust & Safety rename, homepage entry cards"
```

---

### Task 6: Accessibility polish, cleanup, final verification

**Files:**
- Modify: `components/DocsOrbitGraphic/DocsOrbitGraphic.js` (wrong-filename comment, line 1)
- Modify: `components/DocsOrbitGraphic/DocsOrbitGraphic.module.scss` (wrong-filename comment + unused classes)
- Modify: `README.md` (font claim)

**Interfaces:** none new — this is verification + cleanup.

- [ ] **Step 1: Fix wrong-filename comments**

`components/DocsOrbitGraphic/DocsOrbitGraphic.js` line 1: delete the comment line `// components/GroupBuyLifecycleGraphic/GroupBuyLifecycleGraphic.jsx`. Check `DocsOrbitGraphic.module.scss` line 1 for the same wrong-filename comment and delete it if present.

- [ ] **Step 2: Remove unused classes from `DocsOrbitGraphic.module.scss`**

Delete the rule blocks for `.current`, `.hint`, `.header`, and `@keyframes pulse` **after confirming** none are referenced:

```bash
grep -n "current\|hint\|header\|pulse" components/DocsOrbitGraphic/DocsOrbitGraphic.js
```
If any of these names appear in the JS, keep that class and skip its deletion.

- [ ] **Step 3: Fix the README font claim**

In `README.md`, replace the sentence claiming the project uses `next/font` to load **Geist** with: the project uses `next/font` to load **Onest, DM Sans, and DM Mono**.

- [ ] **Step 4: Full verification sweep**

```bash
npm run build && npm run lint
```
Expected: pass.

Success-criteria greps (all from `bohemia-docs/`):

```bash
# 1. colors only in :root (manually confirm the matches are the token block)
grep -n "#[0-9a-fA-F]\{3,8\}" app/globals.css
# 2. one <main>, owned by LayoutClient
grep -rln "<main" app components
# 3. no dead anchors
grep -rn 'href="#"' app components
# 4. no lorem
grep -rin "lorem" app components
# 5. one icon lib, one font mechanism
grep -rn "bi bi-\|fonts.googleapis" app components; grep -c "tabler" app/layout.js
```

Expected: (1) only `:root` lines + `themeColor` in layout metadata; (2) only `components/LayoutClient.js`; (3) none; (4) none; (5) no bi/googleapis matches, tabler count 1.

Visual sweep on dev server at 1280px, 768px, and 375px: `/`, `/account-setup`, `/resources`, `/support`, `/group-buys/fundamentals`, `/coming-soon/vendor-vetting`. Confirm: navbar fixed while scrolling, logo on all routes, drawer works at 375px, no horizontal overflow, cards align, breadcrumbs consistent.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "chore: a11y comments cleanup, README font fix, final verification"
```

---

## Post-plan checklist (for the executor)

- After Task 6, run the superpowers:verification-before-completion skill before claiming done.
- Deployment note: the live site at wiki.bhmhlth.com appears to be an older build (bugs visible there that don't match current code exactly). After merge/deploy, re-verify the two scroll bugs and the nested-route logo on production.
