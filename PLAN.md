# PLAN.md · ShipDataFast Consulting

**Implementation plan:** 18 September 2026  
**Source of truth:** `DESIGN.md` approved for ShipDataFast.  
**Target:** a completely new static HTML/CSS website for ShipDataFast as a data engineering consulting company with two distinct software product destinations.

## 0. Copilot operating rules

This plan is an execution contract. Read the complete `DESIGN.md` before changing code.

Hard constraints:

- Build fresh. Do not reuse ShipFast layouts, components, CSS, icons, copy, dependencies, assets, application code or configuration.
- Static semantic HTML + one shared CSS file + local assets.
- Zero application JavaScript in v1.
- No npm, framework, package manager, build system, Tailwind, React, Next.js, Sass or third-party runtime dependency.
- Do not invent product capabilities, customers, testimonials, scale, certifications, partnerships, team size, founding dates or production results.
- ShipDataFast is the consulting company. Data Reconciliation and Data Validation are two distinct product destinations.
- Consulting claims and software-product claims must remain clearly separated.
- Product capabilities that are not verified must use the conceptual fallback defined in DESIGN.md.
- Do not advertise PySpark, dbt, Airflow, Kafka, Databricks or warehouses merely for recruitment positioning.
- Do not deploy or cut over shipdatafast.com as part of implementation unless explicitly instructed later.
- Do not modify or delete the historical shipdatafast.com repository.
- Do not silently expand scope. When evidence is missing, implement the honest fallback instead.

## 1. Definition of done

The implementation is complete when:

1. All required routes exist and open directly.
2. The website communicates "data engineering consulting" immediately.
3. Data Reconciliation and Data Validation are visibly different products.
4. All pages share the new editorial engineering design language.
5. No ShipFast technical or visual dependency exists.
6. Core navigation/contact works with JavaScript disabled.
7. Responsive and keyboard checks pass.
8. SEO metadata, canonical URLs, JSON-LD, sitemap, robots and 404 are present and internally consistent.
9. Product claims are either verified or explicitly conceptual.
10. Performance budgets in DESIGN.md are checked.
11. The result is ready for static-host preview, but production cutover remains a separate decision.

## 2. Target repository structure

Create the site at repository root. This repository is already dedicated to the consulting website, so an additional `shipdatafast-static/` wrapper is unnecessary.

```text
/
├── DESIGN.md
├── PLAN.md
├── index.html
├── services/
│   ├── data-engineering/index.html
│   ├── data-validation/index.html
│   └── data-reconciliation/index.html
├── products/
│   ├── index.html
│   ├── reconciliation/index.html
│   └── validation/index.html
├── financial-services/index.html
├── about/index.html
├── contact/index.html
├── privacy-policy/index.html
├── tos/index.html
├── assets/
│   ├── css/site.css
│   └── img/
├── robots.txt
├── sitemap.xml
└── 404.html
```

Do not add files unless they solve a concrete requirement.

## 3. Phase 1 · Foundation

### 3.1 Create semantic page shell

Create the homepage first with:

- `lang="en-GB"`
- skip link
- semantic header/nav/main/footer
- one H1
- canonical URL
- unique title and meta description
- Open Graph basics
- Organization + WebSite JSON-LD
- accessible navigation using native HTML disclosure where required
- footer structure from DESIGN.md

Use repeated static header/footer HTML across pages. Do not introduce a templating system merely to remove repetition.

### 3.2 Build CSS architecture

Create `assets/css/site.css` with sections:

1. tokens
2. base/reset-lite
3. typography
4. layout/grid
5. navigation
6. buttons/links
7. editorial sections
8. service rows
9. product panels
10. evidence/data tables
11. diagrams
12. contact/footer
13. accessibility/focus
14. responsive rules

Implement exact DESIGN.md colour tokens, Arial/Helvetica main stack, monospace data stack, spacing scale, 1360px container, 12-column desktop grid and breakpoints.

No gradients, shadows, blobs, glass effects or rounded SaaS cards.

### 3.3 Foundation gate

Before continuing:

- no horizontal overflow at 320px
- visible focus
- skip link works
- navigation usable by keyboard
- no JS required
- no external font/runtime requests
- CSS remains one shared file

**Commit checkpoint:** `feat: establish static site design system`

## 4. Phase 2 · Homepage

Implement sections in this exact narrative order:

1. Header
2. Hero
3. Problem statement
4. Services
5. Products
6. Proof
7. Company/financial-services relevance
8. Contact close
9. Footer

Hero must use:

- eyebrow: DATA ENGINEERING CONSULTING
- H1: Ship reliable data faster.
- supporting proposition from DESIGN.md
- sector line
- primary CTA: Discuss a data problem
- secondary CTA: Explore our products
- labelled "Illustrative data check" using real HTML table text

Services use three full-width editorial rows, not cards.

Products show exactly two panels:
- Data Reconciliation: "Where do these datasets disagree?"
- Data Validation: "Does this data satisfy its rules?"

Proof must remain conceptual until real engine evidence is supplied.

**Gate:** A first-time visitor should be able to answer in under 10 seconds: what company is this, what does it do, what are the two products, what is the next action?

**Commit checkpoint:** `feat: build consulting homepage`

## 5. Phase 3 · Product core

Build these first because they are central to the positioning:

### /products/reconciliation

Follow DESIGN.md section 12.2. Until product-engine evidence is available:

- explain the problem
- use the conceptual reconciliation fixture
- label it clearly as illustrative/conceptual
- do not invent supported formats, commands, configuration syntax, scale or deployment model
- link to reconciliation consulting
- CTA to `/contact#reconciliation`

### /products/validation

Follow DESIGN.md section 12.3. Until product-engine evidence is available:

- explain validation as rules applied to one dataset
- use the conceptual validation fixture
- label it clearly as illustrative/conceptual
- do not imply the reconciliation engine proves validation capability
- link to validation consulting
- CTA to `/contact#validation`

### /products

Implement the two-product overview and conceptual comparison table from DESIGN.md.

**Gate:** A technical visitor cannot reasonably confuse validation with reconciliation.

**Commit checkpoint:** `feat: add reconciliation and validation product pages`

## 6. Phase 4 · Consulting service pages

Create:

### /services/data-engineering
Use the approved H1 and focus on practical integrations, transformations, data flows, validation and handover. Do not broaden into unsupported platform claims.

### /services/data-validation
Explain requirements -> rules -> executable checks -> findings -> handover.

### /services/data-reconciliation
Explain matching contract -> keys/fields/timing/normalisation/precision -> exceptions -> repeatable comparison -> findings.

Each service page must:

- state a concrete problem
- describe a credible delivery method
- state deliverables without invented past results
- link to related products where applicable
- end with Discuss a data problem

**Commit checkpoint:** `feat: add data consulting service pages`

## 7. Phase 5 · Company, sector and contact

### /financial-services

Use the approved H1. Discuss identifiers, currencies, dates, rounding, reversals, late records and unresolved differences as engineering questions. Do not claim regulatory approval, customers, bank connectivity or compliance.

### /about

Company first, founder second.

Use "ShipDataFast. Data engineering consulting and software from TR Seeds Ltd." only if business identity remains confirmed.

Do not state January 2024 as an independently verified product start date. If history is mentioned, distinguish owner-reported product work from evidence-backed website history.

Do not turn former employers into ShipDataFast customers.

### /contact

No form. Use the confirmed business email `info@trseeds.co.uk`.

Create three anchored enquiry sections:
- general consulting
- `#reconciliation`
- `#validation`

Use mailto links with the approved subjects. Advise users not to send credentials/confidential records.

**Commit checkpoint:** `feat: add company sector and contact pages`

## 8. Phase 6 · Legal and SEO

Create/review:

- `/privacy-policy`
- `/tos`
- `robots.txt`
- `sitemap.xml`
- `404.html`

Legal text must reflect actual operation of this static website. Do not blindly copy old ShipFast terms.

Apply the exact route titles/H1s/meta descriptions from DESIGN.md section 23.

Every public HTML page must have:

- unique title
- unique description
- canonical using one confirmed origin
- viewport
- `lang="en-GB"`
- Open Graph metadata
- crawlable internal links
- breadcrumb UI on interior pages
- BreadcrumbList JSON-LD where appropriate

Use `https://shipdatafast.com` as proposed canonical only after confirming final host behaviour. Keep apex/www consistent.

**Commit checkpoint:** `feat: complete legal and SEO foundation`

## 9. Phase 7 · Visual and responsive QA

Test at:

- 320px
- 375px
- 768px
- 1024px
- 1440px
- 400% browser zoom

Verify:

- no page-wide horizontal overflow
- product panels stack below 760px
- split sections stack below 900px
- buttons can become full width below 480px
- tables scroll inside labelled keyboard-accessible containers
- data/code blocks do not overflow the page
- text precedes decorative/technical illustration in DOM order
- focus is always visible
- colour is never the only signal
- headings remain logical
- one H1 per page
- touch targets are practical
- reduced-motion expectations are respected
- site remains fully usable with JS disabled

Run an HTML validator and fix semantic errors.

**Commit checkpoint:** `fix: complete responsive and accessibility QA`

## 10. Phase 8 · Performance and release readiness

Measure representative pages.

Budgets:

- 0 application JS
- 0 third-party runtime requests
- shared CSS <30KB compressed target
- initial page transfer <300KB compressed target
- explicit dimensions on images
- lazy load below-fold images
- no unnecessary embeds

Run repeatable mobile Lighthouse/lab checks. Treat LCP <=2.5s, CLS <=0.1 and INP <=200ms as targets, not field claims.

Check every route directly, including:
- both product URLs
- contact anchors
- sitemap URLs
- canonical URLs
- legal URLs
- 404 behaviour

Search repository for forbidden legacy/recruitment-driven terms before release:
`ShipFast`, `Next.js`, `Tailwind`, `DaisyUI`, `Stripe`, `Supabase`, `Mailgun`, `PySpark`, `dbt`, `Airflow`, `Kafka`, `Databricks`.

Occurrences are acceptable only inside DESIGN.md/PLAN.md where they explain exclusions. They must not appear as public capability claims.

**Commit checkpoint:** `chore: prepare static site for preview`

## 11. Product evidence upgrade, separate workstream

Do not block website v1 on unprovided engines.

When product source/runtime becomes available, perform this separately for each product:

1. inspect source
2. create deterministic synthetic fixture
3. independently calculate expected result
4. execute actual product
5. compare actual vs expected
6. record tested version/invocation/config
7. document limitations
8. replace conceptual website evidence only where demonstrated
9. add product-specific regression tests if appropriate

Never upgrade a public claim based only on documentation or owner expectation.

## 12. Copilot task protocol

For each phase:

1. Read the relevant DESIGN.md sections.
2. State which files will change.
3. Implement only that phase.
4. Run available checks.
5. Review diff for unsupported claims and accidental dependencies.
6. Report what passed, what remains conceptual, and any blocker.
7. Stop at the phase gate unless instructed to continue.

When DESIGN.md and PLAN.md appear to conflict, DESIGN.md wins for product/design requirements. PLAN.md controls implementation order. Ask only when a genuine contradiction cannot be resolved safely.

## 13. Final review checklist

- [ ] Company proposition is immediate.
- [ ] Two distinct product routes exist.
- [ ] Three service routes exist.
- [ ] Financial services is emphasis, not exclusivity.
- [ ] Product and consulting claims are separated.
- [ ] Conceptual examples are labelled.
- [ ] No unsupported technology wall exists.
- [ ] No fake customers, testimonials or scale.
- [ ] No old ShipFast code/assets/dependencies.
- [ ] No application JavaScript.
- [ ] Navigation/contact work without JavaScript.
- [ ] Responsive checks pass.
- [ ] Accessibility checks pass.
- [ ] Metadata and structured data are accurate.
- [ ] Sitemap/robots/404 exist.
- [ ] Performance budgets are measured.
- [ ] Production deployment has NOT occurred without explicit approval.

## 14. Explicit non-goals for v1

Do not build:

- CMS
- blog
- login/accounts
- checkout/pricing
- lead database
- contact backend
- newsletter
- analytics infrastructure
- chatbot
- product upload UI
- fake interactive product demo
- calendar integration
- product engine changes
- data platform demo stack
- production cutover

The objective is a sharp, credible, fast consulting website that publicly represents what ShipDataFast is becoming without pretending unverified capability already exists.
