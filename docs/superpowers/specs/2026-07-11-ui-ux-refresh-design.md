# UI/UX Refresh — wiki.bhmhlth.com

**Date:** 2026-07-11
**Branch:** `ui-ux-refresh`
**App:** `bohemia-docs/` (Next.js 16 App Router, React 19, Sass)

## Goal

Make the wiki cleaner, standardized, and corporate-grade by building a small
design system rather than patching pages individually. The refresh is
**UI/UX only** — no functional features (search stays a visual placeholder,
no auth, no CMS).

## Current-state summary (from live-site walkthrough + codebase audit)

- ~40 hardcoded hex colors across a 557-line `globals.css`; three competing
  styling approaches; ~30% of CSS dead or referencing classes that don't exist
  (the fundamentals-page comparison cards render unstyled because of this).
- Copy-pasted page shells with a nested-`<main>` accessibility violation on
  every content page.
- Zero responsive handling — fixed 290px sidebar overlaps content on mobile.
- ~55 dead links (`/` or `#`): entire top navbar, hero CTA, most sidebar items.
- Navbar logo broken on nested routes (relative asset path).
- Scroll bugs: navbar scrolls away leaving dead black space; content pages
  scroll past their content into an empty black viewport.
- Naming conflict: one page called "Lifecycle" (sidebar), "fundamentals"
  (URL), "Overview" (breadcrumb).
- Lorem Ipsum on `/resources` and `/support`; `/account-setup` ends at an
  empty heading.
- Two icon libraries loaded (Tabler ×2 + Bootstrap Icons); fonts loaded via
  render-blocking link; "Neue Haas Grotesk" referenced but never loaded.

## Decisions (confirmed with owner)

| Decision | Choice |
|---|---|
| Visual direction | Refined **dark theme** — keep current identity, standardize it |
| Dead links | **Trim + Coming Soon** — remove irrelevant items, route planned content to a styled Coming Soon page |
| Search | **Both search bars stay, non-functional** — visual only this phase |
| Mobile | **Full responsive** — drawer sidebar below 768px |
| Navbar items | Keep **Directory, Help, Log in**; drop API, SDKs, Changelog |
| "Circumvent" section | **Rename** — proposed **"Trust & Safety"** (alternatives: "Policies & Guarantees", "Buyer Protection"); owner may override |
| Group Buys page name | **"Fundamentals"** everywhere (sidebar, breadcrumb, title; URL already matches) |
| Approach | **B — token-first mini design system** (tokens → components → responsive → content) |

## Design

### 1. Design tokens & visual language

`:root` in `globals.css` becomes the single source of truth:

- **Color tokens:** `--bg` (#030306), `--surface` (raised fills, ≈#171a21),
  `--surface-hover`, `--border` (≈#3d3d3d), `--accent` (#6b5bff),
  `--accent-hover`, `--text-primary` (#f5f6f8), `--text-secondary`,
  `--text-muted`. All rgba accent variants derive from these.
- **Type scale:** fixed sizes/line-heights for h1, h2, h3, body, small,
  overline (sidebar section labels). Fonts via `next/font`: Onest (headings),
  DM Sans (body), DM Mono (code). Remove the Google Fonts `<link>` and the
  phantom "Neue Haas Grotesk" reference.
- **Spacing & radius:** 4px-base spacing scale (`--space-1` … `--space-8`),
  radii `--radius-sm/md/lg`.
- **Icons:** Tabler only, loaded once (remove the duplicate Tabler link and
  Bootstrap Icons; migrate `bi bi-*` sidebar icons to `ti ti-*`).
- **Deletions:** unused `app/page.module.css` (142 lines), duplicate
  `.sidebar-dropdown` blocks, unused SCSS classes (`.page`, `.poster`,
  `.cardContent`, `.current`, `.hint`, `.header`, `@keyframes pulse`).

### 2. Shared component layer (`components/`)

- **`PageShell`** — props: `breadcrumbs` (array of `{label, href}`), `title`,
  optional `lede`. Renders breadcrumb bar, page header, and content column.
  The root layout keeps the single `<main>`; pages stop rendering their own.
  Fixes the nested-`<main>` violation site-wide.
- **`Card` / `CardGrid`** — styled card with variants: `default`,
  `highlight` (accent border), `link` (clickable whole-card). `CardGrid`
  handles responsive columns. Replaces the currently-unstyled comparison
  cards and powers the new homepage.
- **`ComingSoon`** — template rendered for unbuilt articles: page title,
  short "This article is being written" message in brand styling, link back
  to the wiki home. Implemented as one dynamic route (e.g.
  `app/coming-soon/[topic]` or a catch-all) so ~50 sidebar items don't need
  ~50 files.

### 3. Layout & responsive behavior

- **Sticky navbar** with correct z-index; only the content column scrolls.
  Fixes both scroll bugs (navbar displacement + scroll-into-black-void).
- **Logo fixed:** absolute path via `next/image` (currently broken on every
  nested route). All raw `<img>` migrate to `next/image`.
- **Breakpoints:** ≥992px sidebar fixed 290px as today; 768–992px sidebar
  narrows; <768px sidebar becomes an overlay drawer with hamburger in the
  navbar and dimmed backdrop; navbar search compresses.
- **Content column** capped at a readable ~75ch with consistent padding.

### 4. Navigation & content flow

- **Homepage:** keep hero; add a `CardGrid` of entry points below it
  (Get Started, Group Buys, Resources, Support) with one-line descriptions.
  Hero CTA "Get started" routes to `/account-setup`.
- **Navbar:** Directory, Help → Coming Soon; Log in stays the accent button
  (Coming Soon target); API/SDKs/Changelog removed.
- **Sidebar:** every unbuilt item routes to its Coming Soon page; real pages
  route normally; children rendered as `<ul>/<li>`. "Circumvent" renamed
  (see Decisions). Group Buys child renamed "Fundamentals".
- **Copy:** Lorem Ipsum on `/resources` and `/support` replaced with short
  real intro copy + Coming Soon body; `/account-setup`'s empty "Instructions
  Module" heading gets placeholder-free treatment (short intro + Coming Soon
  body until real content exists).
- **Accessibility:** descriptive alt text (hero banner), `aria-label` on both
  search inputs, heading hierarchy fixed (no h1→h3 skips; sidebar labels stop
  using `<h6>`), chevron transition 3s→0.3s, misspelled `drop-down-chevron`
  class fixed.
- **Cleanup:** stray empty `<section>` on homepage removed; leftover dev
  comments and wrong-filename comments removed.

## Non-goals (this phase)

- Functional search, login/auth, API/SDK docs, changelog
- Light theme / theme toggle
- New article content beyond short intro copy
- Framework migration

## Success criteria

1. Zero hardcoded colors outside the `:root` token block.
2. Every content page renders through `PageShell`; exactly one `<main>` per page.
3. Site is usable at 375px viewport width (drawer sidebar, no overlap/overflow).
4. Navbar visible and fixed at every scroll position; no scroll-into-void.
5. No broken images on any route.
6. No link resolves to `/` or `#` unless it intentionally means "home";
   no Lorem Ipsum anywhere.
7. One icon library, one font-loading mechanism (`next/font`), no dead CSS files.

## Implementation order

Tokens (1) → Components (2) → Layout/responsive (3) → Content/flow (4).
Each layer is independently shippable; visual regressions checked against the
live site after each layer.
