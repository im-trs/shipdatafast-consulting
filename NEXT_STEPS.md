# NEXT_STEPS.md · Execution Plan & Task Breakdown

**Document Version:** 1.0 (2026-09-29)  
**Governing Specification:** [`INTENT.md`](file:///Users/spike95/workspace/shipdatafast-consulting/INTENT.md)  
**Goal:** Transition codebase to 100% static HTML/CSS, removing external CDN runtimes, Tailwind dependencies, client-side JS injections, and aligning with the design system and sitemap.

---

## 1. High-Level Phases

```text
Phase 1: Foundation & Design System (site.css + purge JS/CDN)
Phase 2: Canonical Shell & Homepage Standardization (index.html)
Phase 3: Directory Clean-up & Sitemap Alignment (remove /checklist)
Phase 4: Core Product Pages Refactor (/products, /reconciliation, /validation)
Phase 5: Consulting Service Pages Refactor (/services/*)
Phase 6: Supporting & Legal Pages Refactor (/about, /contact, /financial-services, /privacy, /tos, 404)
Phase 7: Auditing, Performance & Zero-JS Verification
```

---

## 2. Detailed Task Breakdown

### Phase 1: CSS Design System & Cleanup of Assets

| Task ID | Component / File | Description | Acceptance Criteria |
|---|---|---|---|
| **T1.1** | `assets/css/site.css` | Define CSS tokens strictly according to `INTENT.md` §16 (`--paper: #F3F2ED`, `--ink: #111713`, `--blue: #153FE0`, `--lime: #D7FF3F`, etc.). | Exact hex codes match INTENT §16; no third-party imports. |
| **T1.2** | `assets/css/site.css` | Configure system font stacks: `Arial, Helvetica, sans-serif` (main) and `ui-monospace, SFMono-Regular, Consolas, monospace` (data/code). | Remove `@import url(google-fonts)` completely. |
| **T1.3** | `assets/css/site.css` | Build native responsive layout: 1360px max width container, 12-column grid, breakpoints (640px, 900px, 1024px), semantic utilities for typography, buttons, tables, disclosures, and editorial splits. | Complete replacement for Tailwind utility dependencies; file size <30KB uncompressed. |
| **T1.4** | `assets/js/` | Remove `assets/js/site-shell.js` and `assets/js/tailwind-theme.js`. | Directory `assets/js/` eliminated or emptied. |

---

### Phase 2: Canonical HTML Shell & Homepage (`index.html`)

| Task ID | Component / File | Description | Acceptance Criteria |
|---|---|---|---|
| **T2.1** | `index.html` (Head) | Strip `cdn.tailwindcss.com`, inline `<script id="tailwind-config">`, and Google Fonts preconnect/link tags. Keep only canonical, SEO meta, JSON-LD, and `<link rel="stylesheet" href="/assets/css/site.css">`. | Head contains 0 `<script>` tags (except LD+JSON); no external HTTP requests. |
| **T2.2** | `index.html` (Header/Nav) | Replace `<div data-site-shell="header">` with static semantic `<header>` and accessible `<details>/<summary>` dropdowns for Services and Products. | Navigation operates with keyboard, works seamlessly with JS disabled. |
| **T2.3** | `index.html` (Hero & Content) | Convert Hero, Problem statement, 3 Service rows, 2 Product panels, Proof section, and Contact close from Tailwind classes to native CSS semantic classes. | Layout matches 8/4 hero split, 5/7 editorial split, and 6/6 product grid. |
| **T2.4** | `index.html` (Footer) | Replace `<div data-site-shell="footer">` with static semantic `<footer>` containing Services, Products, and Company link columns. | Static markup present directly in HTML. |

---

### Phase 3: Route & Sitemap Correction

| Task ID | Component / File | Description | Acceptance Criteria |
|---|---|---|---|
| **T3.1** | `checklist/`, `products/checklist/` | Delete non-spec directories `/checklist/` and `/products/checklist/`. | Only routes specified in `INTENT.md` §7 exist. |
| **T3.2** | `sitemap.xml` | Verify and update sitemap entries so all 12 valid routes are present with consistent canonical origin (`https://shipdatafast.com`). | No references to removed routes; valid XML syntax. |

---

### Phase 4: Product Pages Refactor

| Task ID | Component / File | Description | Acceptance Criteria |
|---|---|---|---|
| **T4.1** | `products/index.html` | Refactor head/header/footer to static shell; rebuild comparative table (Reconciliation vs Validation) using semantic HTML tables. | Clean semantic table with accessible headers and no Tailwind. |
| **T4.2** | `products/reconciliation/index.html` | Clean head and shell; format conceptual reconciliation data fixture (TX-100 to TX-103) with difference styling. | CTA links to `/contact#reconciliation`; conceptual disclaimer present. |
| **T4.3** | `products/validation/index.html` | Clean head and shell; format conceptual validation data fixture (V-100 to V-102) with pass/fail indicators. | CTA links to `/contact#validation`; conceptual disclaimer present. |

---

### Phase 5: Consulting Service Pages Refactor

| Task ID | Component / File | Description | Acceptance Criteria |
|---|---|---|---|
| **T5.1** | `services/data-engineering/index.html` | Replace dynamic shell with static shell; structure 7 sections per `INTENT.md` §9; link to both products and `/contact`. | Complies with H1, copy hierarchy, and scope boundaries. |
| **T5.2** | `services/data-validation/index.html` | Standardize static shell; structure per `INTENT.md` §10; link to `/products/validation`. | Explains rule checking without claiming automated ML/monitoring platform. |
| **T5.3** | `services/data-reconciliation/index.html` | Standardize static shell; structure per `INTENT.md` §11; link to `/products/reconciliation`. | Explains matching contracts without claiming automatic record repair. |

---

### Phase 6: Sector, Company & Legal Pages Refactor

| Task ID | Component / File | Description | Acceptance Criteria |
|---|---|---|---|
| **T6.1** | `financial-services/index.html` | Standardize static shell; ensure sector focus is framed as an engineering specialty without unverified customer claims. | H1: "Financial data needs explainable answers." |
| **T6.2** | `about/index.html` | Apply static shell; structure company first, founder second; clarify professional experience boundaries. | H1: "The engineering behind ShipDataFast." |
| **T6.3** | `contact/index.html` | Apply static shell; implement the 3 mailto anchor sections (general, `#reconciliation`, `#validation`) pointing to `info@shipdatafast.com`. | No forms, inputs, or calendar embeds. |
| **T6.4** | `privacy-policy/index.html`, `tos/index.html`, `404.html` | Apply static shell and plain readable editorial typography. | Accurate terms for a static site; clean 404 response structure. |

---

### Phase 7: Verification & Auditing

| Task ID | Target Area | Checks & Metrics | Tool / Method |
|---|---|---|---|
| **T7.1** | Zero External Runtime | Grep entire codebase for `script`, `cdn`, `googleapis`, `tailwind`, `font`. | `grep_search` / `run_command` |
| **T7.2** | Responsive & Overflow | Check layouts across 320px, 375px, 768px, 1024px, 1440px. Ensure 0 horizontal scroll. | Manual & DevTools checks |
| **T7.3** | Accessibility (WCAG 2.2 AA) | Ensure color contrast ratios, focus rings (3px solid blue), single H1 per page, valid headings order, keyboard tab navigation. | DevTools / Accessibility audit |
| **T7.4** | Performance Budgets | Verify CSS transfer size <30KB, total page size <300KB, zero blocking JS. | CLI size inspection |
