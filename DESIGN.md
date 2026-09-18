# DESIGN.md · ShipDataFast

**A new consulting-company website. HTML, CSS and SEO first.**

Specification date: 18 September 2026.

This document supersedes all earlier proposals to reuse the ShipFast template, Next.js application, Tailwind styles, existing components or application infrastructure. The existing repository is evidence to inspect, not a foundation to extend. This task delivers a specification only. Do not implement or deploy the website yet.

## 1. Executive design decision

Build ShipDataFast as a **data engineering consulting company with two software products**, using an entirely new static website.

| Brand or offering | Role | Public destination |
|---|---|---|
| ShipDataFast | Consulting company and umbrella brand | `/` |
| Data engineering, validation and reconciliation consulting | Services clients can hire the company to deliver | `/services/…` |
| Products | Overview of the two software products | `/products` |
| Data Reconciliation | Comparison of corresponding data across sources | `/products/reconciliation` |
| Data Validation | Checks against explicit data requirements | `/products/validation` |

The two product destinations are mandatory. Do not collapse them into one product page. Do not present ShipDataFast itself as the name of a single comparison utility.

**Technical decision:** handwritten semantic HTML, a shared CSS stylesheet, local assets and no JavaScript in the initial release. No framework, package manager, build system, client-side rendering, database, authentication, checkout or application SDK.

**Creative direction: “The data is the design.”** Build a distinctive editorial identity around oversized typography, asymmetric composition, hard rules, aligned records and visibly marked discrepancies. The site should look like a specialist engineering company with a point of view. Avoid a standard SaaS template with a centred headline, gradient dashboard and repeated rounded cards.

Boldness comes from composition and clarity. The navigation remains conventional and obvious. Do not make visitors decipher an artistic interface.

## 2. Current repository/product assessment

### Evidence reviewed

- User brief and subsequent instructions: company first, two product destinations, complete template removal, brand-new HTML/CSS/SEO implementation.
- [Current public website](https://www.shipdatafast.com/) and [terms](https://www.shipdatafast.com/tos), retrieved 18 September 2026. Public retrieval may reflect cached content.
- [Repository](https://github.com/im-trs/shipdatafast.com), default branch `main`, snapshot `11b2ba9594284ba0ee171204cbbfeab85611a6cd`.
- Complete non-truncated tree: 117 tracked files. Retrieved 100 source/configuration/documentation files for targeted inspection. Binary assets were inventoried, not visually reviewed. Unrelated personal notes were excluded.
- Metadata for 126 commits returned from default-branch history; inspected the initial ShipDataFast customisation diff. Other branches and deleted historical files were not exhaustively audited.

### Findings

The supplied repository is a marketing application built from ShipFast. `README.md` identifies its template origin. `package.json`, `app/layout.tsx` and `tailwind.config.js` confirm Next.js, React, TypeScript, Tailwind and DaisyUI. It also contains authentication, payments, email and lead-capture code. **None of this architecture will be reused.**

`main` contains a broader product/prompt-pack marketplace narrative, while the retrieved public website describes the earlier reconciliation offer. The deployed commit is unknown. Catalogue components request JSON files absent from the tracked tree. Documentation describes test suites and migrations absent from the snapshot. Documentation claims were therefore not accepted as implementation proof.

No Python source, Python dependency manifest, reconciliation engine or validation engine was found in the current tree. No engine behaviour was executed or independently verified.

The oldest returned commit is a September 2023 ShipFast template commit attributed to Marc Lou. Commit [`e4866253963ac280eba3f792cd83c225b0947550`](https://github.com/im-trs/shipdatafast.com/commit/e4866253963ac280eba3f792cd83c225b0947550), authored 13 November 2024, introduces ShipDataFast website customisation. This supports website work in November 2024. It does not establish the product engine's start date. January 2024 remains owner-reported.

**Consequences:** create a fresh static site, preserve factual history where supported, and verify software claims independently. Do not import old copy wholesale, use template history as founder evidence, or recreate the previous marketplace.

## 3. Verified existing capabilities

The consulting-company structure and two-product architecture are explicit user decisions. Detailed shipped features remain unverified because the product engines were not supplied.

Use these evidence levels internally:

| Status | Meaning | Publication treatment |
|---|---|---|
| Verified source | Relevant implementation was inspected | Describe its presence, without implying a successful run |
| Verified behaviour | Representative execution was checked | Describe demonstrated scope and limitations |
| Owner-confirmed experience | Specific prior work confirmed by Ivano | Attribute to Ivano and the actual engagement |
| Proposed service | A deliverable the company can credibly undertake | Explain scope, without inventing past results |
| Unverified product claim | Public copy or brief names a feature | Omit from shipped-feature lists until checked |
| Roadmap | Future or unbuilt functionality | Do not present as available |

Complete an independent capability register for each product:

| Candidate capability | Minimum evidence |
|---|---|
| Input formats | Parser/loader source and a successful representative input |
| Column mapping | Actual configuration and differently named input columns |
| Composite keys | Matching implementation and duplicate-key policy |
| Numeric tolerance | Precision policy and boundary examples |
| Type handling | Conversion rules, invalid values and leading-zero identifiers |
| Missing/extra records | Examples with independently checked expected results |
| Required values, uniqueness, ranges, allowed values | Actual validation rules and passing/failing fixtures |
| Reports | Real output, supported formats and documented fields |
| CLI or web UI | Actual entry point and reproducible workflow |
| Automation/CI | Noninteractive run with meaningful success/failure behaviour |
| Scale | Dataset, hardware, elapsed time and peak memory from a measured run |

Website contact-field validation is not evidence of the Data Validation product. A marketing screenshot is not proof of reconciliation behaviour. Two product pages do not imply two separate engines or deployments.

## 4. Positioning

**Company category:** Specialist data engineering consultancy.

**Commercial focus:** Reliable data delivery, validation and reconciliation across integrations, migrations and pipelines.

**Sector emphasis:** Financial services and fintech, with explicit applicability to other data-intensive organisations.

### Homepage copy

Eyebrow:

> DATA ENGINEERING CONSULTING

H1, rendered as one accessible heading:

> Ship reliable data faster.

Supporting copy:

> ShipDataFast helps engineering teams build data flows, validate critical datasets and reconcile differences between systems.

Sector line:

> A particular focus on financial services. Built for data problems across industries.

Primary CTA: **Discuss a data problem**.

Secondary CTA: **Explore our products**.

Treat the service proposition as intended offering copy. Narrow any specific deliverable that the founder cannot substantiate. Do not describe the consulting business as having delivered full production platforms merely because comparison software exists.

## 5. Target audiences

| Audience | Their question | Required response |
|---|---|---|
| CTO / Head of Engineering / Head of Data | Can you help us deliver this safely and predictably? | Clear consulting scope, method and deliverables |
| Data Engineer / Architect | What happens to awkward data? | Rules, inputs, outputs, edge cases and limits |
| Fintech technology leader | Can we explain why these systems disagree? | Precision, timing, identifiers and exception handling |
| Technical evaluator | What work did Ivano actually do? | Attributable examples and honest product history |

The company homepage serves buyers first. Professional credibility follows from evidence. Do not mention CV positioning on the public site.

## 6. Messaging hierarchy

1. **Company:** data engineering consulting.
2. **Outcome:** reliable data delivered faster.
3. **Services:** build, validate, reconcile.
4. **Products:** two distinct software offerings under the company.
5. **Proof:** actual engineering examples and attributable experience.
6. **Action:** describe a data problem and start a useful conversation.

Use short concrete sentences. Prefer compare, build, check, map, investigate and automate. Avoid transformation slogans, invented scale, feature superlatives and recruitment-driven technology lists.

Distinguish the services and products explicitly: consulting provides diagnosis, implementation and handover; software provides its demonstrated functionality. A client may need either or both.

## 7. Sitemap

| Route | Purpose |
|---|---|
| `/` | Consulting-company homepage |
| `/services/data-engineering` | Engineering consulting |
| `/services/data-validation` | Validation consulting |
| `/services/data-reconciliation` | Reconciliation consulting |
| `/products` | Two-product overview |
| `/products/reconciliation` | Data Reconciliation software |
| `/products/validation` | Data Validation software |
| `/financial-services` | Sector applications and attributable experience |
| `/about` | Company, founder and origin |
| `/contact` | Direct commercial enquiry |
| `/privacy-policy` | Accurate privacy information |
| `/tos` | Applicable terms |

Desktop navigation: **Services · Products · Financial services · About · Discuss a data problem**. Wordmark links to Home. Services and Products use native disclosure menus with direct links. Each disclosure panel is small and text-based. No mega-menu.

Products menu: Overview, Data Reconciliation, Data Validation. Services menu: Data Engineering, Data Validation, Data Reconciliation.

Footer has three compact groups: Services, Products, Company. Legal links sit below. No prompt packs, newsletters, affiliates, generic productivity tools or irrelevant social icons.

## 8. Homepage section-by-section specification

### 8.1 Header

Fresh typographic wordmark: **ShipDataFast**. No old icon or template assets. Height 80px desktop, 68px mobile. Thin dark bottom rule. Put the CTA on the right as a solid ink rectangle. Non-sticky by default.

### 8.2 Hero: the company proposition

Use the copy in section 4. On desktop, the headline occupies eight columns with deliberate left alignment and a large unused margin around it. A four-column evidence-style panel aligns toward the lower right. The heading can wrap into three lines; never split the wordmark.

The panel is labelled **“Illustrative data check”** and contains three short records, with one visibly marked difference. It is conceptual information, not a software screenshot. Use real HTML table text and a caption. No fake dashboard controls or invented runtime figures.

Highlight the word “reliable” with a flat lime background strip, dark text and no animated effect. CTA row sits under the supporting paragraph. Keep the consulting category visible above the H1.

### 8.3 Problem statement

Large left heading:

> Your systems moved the data. Did they preserve its meaning?

Right-hand text names three practical situations: migration results do not match, transformed values need checking, manual comparisons cannot be repeated reliably. Maximum 100 words total. The purpose is problem recognition, not fear-based selling.

### 8.4 Services: three strong editorial rows

Heading: **“Build it. Check it. Reconcile it.”**

Each row has a large index, service name, short explanation and descriptive link. Rows span the container width, separated by rules. Do not use a grid of icon cards.

- **01 / Data engineering:** integrations, transformations and data flows within confirmed delivery capability.
- **02 / Data validation:** define requirements and implement repeatable checks.
- **03 / Data reconciliation:** establish matching rules and investigate cross-system differences.

### 8.5 Products: exactly two panels

Heading: **“Two products. Two different data questions.”**

| Product | Question | Destination |
|---|---|---|
| Data Reconciliation | Where do these datasets disagree? | `/products/reconciliation` |
| Data Validation | Does this data satisfy its rules? | `/products/validation` |

Two large rectangular panels with no shadows or rounded-card styling. Reconciliation uses a pair of aligned data columns. Validation uses a dataset and a rule list. Each has one link, not multiple competing buttons. Illustrations must be labelled conceptual until real outputs are verified.

### 8.6 Proof

Heading: **“Show the inputs. Explain the result.”**

Show one verified example per product when available. Each example includes inputs, rule/configuration, actual output and limitations. If engine evidence is absent, retain explicitly labelled conceptual examples from section 20 and do not call them product runs.

### 8.7 Company and relevance

Short founder-led introduction. Link to About. Include a concise financial-services paragraph and link, without implying exclusive sector coverage or invented customers.

### 8.8 Contact close

Cobalt background, off-white text and oversized heading:

> What does your data need to get right?

One paragraph invites the visitor to describe systems, problem and deadline. White CTA with ink text: **Discuss a data problem**. No calendar embed or compulsory form.

## 9. Data Engineering page specification

Route: `/services/data-engineering`.

H1: **“Data engineering that stands up to inspection.”**

Intro: “Practical help connecting sources, implementing transformations and making data flows easier to check and maintain.”

Section order:

1. Problems: fragmented integrations, unclear transformation rules and unreliable handovers.
2. Confirmed scope: ingestion, integrations, transformations and modelling only where supported by genuine experience.
3. Deliverables: source-to-target map, implemented flow, validation checks, deployment instructions and handover. List only what is actually offered.
4. Method: establish requirements, build the smallest useful flow, verify outputs, hand over operation.
5. Evidence: attributable engagement or labelled synthetic demonstration.
6. Boundaries: operating support, platform ownership and service levels are agreed per engagement, not implied.
7. CTA: Discuss a data problem. Links to both relevant products.

A package dependency or a marketing application does not establish broad data-platform capability. Keep this page grounded in deliverable work.

## 10. Data Quality & Validation service page specification

Route: `/services/data-validation`.

H1: **“Turn data requirements into repeatable checks.”**

Explain validation as checking data against defined requirements. It does not always require a second dataset.

Section order: failure scenarios; rule definition; implementation and execution; example findings; deliverables; product connection; CTA.

Candidate consulting topics: required values, types, uniqueness, ranges, allowed values and cross-field consistency. These are consulting scope candidates, not automatic claims about the software.

Deliverables: agreed rules, executable checks, actionable findings and instructions for running and maintaining them.

Secondary link: **Explore Data Validation** → `/products/validation`.

Do not advertise a monitoring platform, machine-learning anomaly detection or production observability stack without separate evidence.

## 11. Data Reconciliation service page specification

Route: `/services/data-reconciliation`.

H1: **“Find where your systems disagree.”**

Intro: “Define how records should match, compare the relevant values and turn differences into an investigation list.”

Section order:

1. Scenarios: migration verification, source-to-target checks and cross-system exports.
2. Matching contract: keys, fields, timing cut-off, normalisation, precision and tolerance policy.
3. Exceptions: missing records, conflicting values, ambiguous keys and invalid inputs.
4. Example: section 20 reconciliation fixture.
5. Deliverables: agreed comparison rules, repeatable checks, exception output and handover.
6. Product connection: `/products/reconciliation`.
7. CTA: Discuss a data problem.

A match establishes agreement under chosen rules. It does not prove underlying business correctness or automatically repair records.

## 12. Product overview and product page specifications

### 12.1 `/products`

H1: **“Two products. Two different data questions.”**

Opening copy: “Data Reconciliation compares corresponding datasets. Data Validation checks data against defined requirements.”

Show the two product panels from Home, followed by this conceptual comparison:

| Dimension | Data Reconciliation | Data Validation |
|---|---|---|
| Core question | Do corresponding records agree? | Does the data satisfy its rules? |
| Typical inputs | Two related datasets and matching rules | A dataset and validation rules |
| Useful findings | Differences and unmatched records | Failed requirements and their locations |
| Typical application | Migrations and cross-system comparisons | Checks before data is consumed or transferred |

This table describes the intended problem split, not a verified feature matrix. End with a link to consulting support. No prices or availability badges unless confirmed.

### 12.2 `/products/reconciliation`

Eyebrow: **SHIPDATAFAST PRODUCTS**.

H1: **Data Reconciliation**.

Purpose: **“Understand where corresponding datasets disagree.”**

Specify these sections in order:

1. Problem and when this product is relevant.
2. Actual supported inputs and limits.
3. Actual matching configuration, mapping and comparison rules.
4. Real execution sequence, using the verified UI or command line.
5. Genuine output from a small synthetic fixture.
6. Behaviour for missing records, duplicate keys, nulls and precision.
7. Deployment boundary, automation and limitations, where verified.
8. CTA: **Discuss Data Reconciliation** → `/contact#reconciliation`.

Required proof: two input files, actual configuration, tested version, invocation, expected result and generated output. Do not invent commands or configuration syntax.

### 12.3 `/products/validation`

Eyebrow: **SHIPDATAFAST PRODUCTS**.

H1: **Data Validation**.

Purpose: **“Check whether your data meets defined requirements.”**

Specify these sections in order:

1. Problem and when this product is relevant.
2. Actual supported inputs and limits.
3. Implemented rules and their evaluation semantics.
4. Real execution sequence.
5. Actual findings, showing record, rule and reason.
6. Invalid-input behaviour and known limitations.
7. Demonstrated automation or delivery integration, if available.
8. CTA: **Discuss Data Validation** → `/contact#validation`.

Required proof: input dataset, real rule configuration, tested version, invocation, independently checked expected findings and actual report. Never relabel a reconciliation screenshot as validation software.

### 12.4 Evidence fallback

Until a product is verified, publish its title, purpose, a clearly labelled conceptual example, related consulting link and enquiry CTA. Omit unsupported feature lists, downloads, “available now”, release dates and fake screenshots. The two required product routes still exist.

Reuse only components newly authored for this static website, such as CSS classes and HTML section patterns. Share visual patterns between product pages, but keep their explanations, examples and verification records separate.

The website must not simulate a working upload-and-run application. Access method, licence and distribution terms require confirmation before being advertised.

## 13. Financial Services page specification

Route: `/financial-services`.

H1: **“Financial data needs explainable answers.”**

Sections: sector problems; engineering decisions; illustrative example; attributable experience; consulting and product links; CTA.

Relevant questions: Which identifier matches? Which currency and effective date apply? How are rounding, reversals and late records handled? Who owns unresolved differences?

Use transaction exports, migration records and reporting inputs as illustrative situations. Do not claim customers, bank connectivity, accounting correctness, regulatory approval or certifications without evidence.

Attribute prior professional experience to Ivano and the actual role. Do not turn former employers into ShipDataFast clients. State that the same consulting approach also applies outside financial services.

## 14. About page specification

Route: `/about`.

H1: **“The engineering behind ShipDataFast.”**

Explain the company first, then the founder, then relevant experience and product origin.

- Identify Ivano Mannella as the founder and hands-on engineer, subject to final biography confirmation.
- Describe specific software, integration, automation and data-related work that can be defended.
- Distinguish professional experience, product development and the current consulting-company positioning.
- Include historical dates only with appropriate support. Do not use template history to backdate product work.
- Explain the actual delivery model. No implied large team or invented offices.

Suggested business identity line: **“ShipDataFast. Data engineering consulting and software from TR Seeds Ltd.”** Do not imply a separate incorporation unless confirmed.

Use a real founder portrait only if supplied or authorised. Otherwise rely on strong typography. No stock team photos.

## 15. CTA and contact strategy

Primary: **Discuss a data problem** → `/contact`.

Secondary: **Explore our products** → `/products`.

Product links target `/contact#reconciliation` and `/contact#validation`. These are native HTML anchors; no JavaScript query parsing is needed.

Contact page H1: **“What does your data need to get right?”**

Intro: “Tell us which systems are involved, what is going wrong and when you need an answer. A short description is enough.”

Show three plain contact options:

- Consulting enquiry, email subject `ShipDataFast consulting enquiry`.
- Reconciliation enquiry, subject `ShipDataFast Data Reconciliation enquiry`, section ID `reconciliation`.
- Validation enquiry, subject `ShipDataFast Data Validation enquiry`, section ID `validation`.

Use the existing configured business address **info@shipdatafast.com**, with visible text and `mailto:` links. Delivery has not been tested. Do not invent new mailboxes. Suggest leaving out confidential records and credentials.

No form, Mailgun integration, autoresponder, database, calendar embed or marketing funnel in this release. No response-time or free-audit promise. A copyable address remains available when a visitor has no default email client.

Measure qualified conversations manually by source, problem, urgency and agreed next step. Do not build analytics infrastructure to launch a static company website.

## 16. Visual design system

### A distinct new identity

An editorial engineering aesthetic: oversized type, restrained colour, deliberately visible rules and precise data annotations. Strong contrasts between sparse statements and information-rich examples. No visual connection to ShipFast.

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F3F2ED` | Main background |
| `--white` | `#FFFFFF` | Tables and selected panels |
| `--ink` | `#111713` | Main text and structural rules |
| `--muted` | `#505950` | Secondary text |
| `--blue` | `#153FE0` | Primary links and selected full-width sections |
| `--blue-hover` | `#102BA0` | Interactive hover state |
| `--lime` | `#D7FF3F` | Small emphasis areas with ink text |
| `--line` | `#C8CCC3` | Decorative table dividers |
| `--error` | `#9F1838` | Error text paired with a label |
| `--success` | `#246340` | Match/pass text paired with a label |

No gradients, glowing objects, blobs, glass effects or background photography. No drop shadows. Corners are square, with a maximum 2px radius on controls. Accent colour covers a small fraction of the page except the final contact section.

Typography is the main visual asset. Use large section indices, strong horizontal rules and occasional margin annotations. Keep annotation density low enough that the site remains readable.

Links are visibly underlined in body text. Buttons use rectangular solid fills, no shimmer or scaling. Hover changes colour only. Difference cells use a tinted background, border and written status, never colour alone.

## 17. Typography

Use a new system-font treatment. Do not carry over the prior Inter integration or any font-loading code.

Main stack: `Arial, Helvetica, sans-serif`.

Data stack: `ui-monospace, SFMono-Regular, Consolas, monospace`.

| Role | Size range | Weight | Line height |
|---|---|---|---|
| Homepage H1 | `clamp(3rem, 8.5vw, 8rem)` | 700 | 0.98 |
| Interior H1 | `clamp(2.5rem, 6vw, 5.5rem)` | 700 | 1.02 |
| H2 | `clamp(2rem, 4vw, 3.75rem)` | 700 | 1.08 |
| H3 | 24–28px | 700 | 1.2 |
| Intro | 20–24px | 400 | 1.45 |
| Body | 18px | 400 | 1.6 |
| Labels/captions | 14px | 400–700 | 1.5 |
| Data/code | 14–16px | 400 | 1.55 |

Headings use letter-spacing approximately `-0.045em`; body uses normal tracking. Avoid all-caps paragraphs. Eyebrows may be uppercase with modest tracking.

Paragraph measure: 58–68 characters. Do not manually insert breaks that cause mobile overflow. At narrow widths reduce the H1 as specified and let natural wrapping work. Test font fallback differences.

## 18. Layout, grid and spacing

- Container maximum width: 1360px.
- Gutters: 20px below 640px; 32px from 640px; 48px from 1024px.
- Desktop grid: 12 columns with 24px gaps.
- Hero split: 8/4. Editorial problem sections: 5/7. Product pair: 6/6.
- Below 900px, split sections become a single column in logical reading order.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 72, 104, 144px.
- Section spacing: typically 104px desktop, 72px tablet, 48px mobile.
- Tables and evidence panels may span the full container; explanatory paragraphs may not.
- Use alternate alignments intentionally, not randomly. Keep every page on the same grid.

The hero may be visually large but must not force a fixed viewport height. No giant empty screen on short devices.

## 19. Component inventory

All patterns below are newly authored HTML/CSS. No React components or template reuse.

| Pattern | Requirements |
|---|---|
| Wordmark/header | Text brand, fresh navigation, native disclosure menus |
| Hero | Category, H1, short proposition, two actions, conceptual data panel |
| Editorial split | Asymmetric heading and explanation |
| Service row | Large index, title, deliverable summary, descriptive link |
| Product pair | Exactly two purpose-led panels |
| Product comparison | Native accessible HTML table |
| Evidence block | Input, rule, output, provenance and limitations |
| Rule list | Plain-language validation requirements and findings |
| Diagram | Small inline SVG with equivalent explanation |
| Contact block | Clear enquiry prompts and email link |
| Founder introduction | Attributable experience and About link |
| Footer | Services/products/company groups and legal links |
| FAQ | Native `details` and `summary`, only if the question aids a decision |

No carousel, modal, dashboard mockup, social-proof strip, badge collection, chatbot or animated counter.

## 20. Exact technical examples and visualisations

### Reconciliation fixture

Conceptual example under exact matching, one currency, no tolerance or conversion:

| Record | Source amount | Target amount | Expected result |
|---|---:|---:|---|
| TX-100 | 100.00 | 100.00 | Match |
| TX-101 | 49.95 | 50.95 | Difference: target minus source = 1.00 |
| TX-102 | 25.00 | Absent | Source only |
| TX-103 | Absent | 12.00 | Target only |

Three source records, three target records, four distinct keys, one matched record and three exception records. An absent record is not the same as a null amount.

### Validation fixture

Rules: `customer_id` is required; `amount` must be non-negative.

| Record | Customer | Amount | Expected result |
|---|---|---:|---|
| V-100 | C-10 | 25.00 | Pass |
| V-101 | Empty | 10.00 | Required customer missing |
| V-102 | C-12 | -5.00 | Amount below zero |

Three records, one passing record, two failing records, two rule failures. Explain that record-failure counts and rule-failure counts can differ if multiple rules fail on one record. No comparison dataset is needed here.

Both fixtures are proposed examples, not observed software output. They must be run against the relevant engine before being presented as product evidence. If an engine lacks the illustrated rule, change the example to supported behaviour or retain the conceptual label.

### Required diagram treatments

- **Homepage:** compact Build / Validate / Reconcile conceptual flow, without suggesting a specific runtime architecture.
- **Reconciliation:** two inputs plus matching rules feed comparison, then findings.
- **Validation:** one dataset plus rules feed checking, then findings.
- **Deployment:** optional per product, only after runtime/data boundaries are verified.

Use inline SVG or CSS layout with live text. Tables must be actual HTML. No image generation for exact data diagrams and no charting dependency.

## 21. Responsive behaviour

Verify at 320, 375, 768, 1024 and 1440px.

- Below 900px use a native “Menu” disclosure. Links work without JavaScript. Avoid duplicate navigation being exposed simultaneously to assistive technology.
- Product panels stack below 760px. Text stays before illustrations in DOM order.
- Service rows move from index/title/body/link columns to a compact vertical layout.
- Primary buttons can become full-width below 480px.
- Tables use a labelled, keyboard-accessible scroll container when necessary. Never hide relevant values just to fit.
- Code scrolls inside its own container; the page must not overflow horizontally.
- Diagrams stack or simplify without dropping meaning.
- Reflow remains usable at 400% browser zoom.

## 22. Accessibility requirements

Target WCAG 2.2 AA as an implementation goal, not a certification claim.

- One H1 per page, meaningful heading order and semantic landmarks.
- Skip link and visible keyboard focus.
- Native navigation disclosures usable by keyboard and touch.
- Normal-text contrast at least 4.5:1; large text at least 3:1. Check actual token combinations.
- Focus outline: 3px blue on paper/white, with offset; use a light outline on blue/ink backgrounds.
- Practical touch targets of at least 44px for primary controls.
- Written labels for pass, difference and failure states.
- Table captions and header scope; meaningful image alternatives.
- No autoplay, parallax, scroll hijacking, hover-only content or motion-dependent explanation.
- No forced smooth scrolling. Respect reduced motion if any optional transition is later introduced.
- Contact, navigation and all core content work with JavaScript disabled.

## 23. SEO architecture

SEO is part of the initial HTML, not a later plugin or script.

| Route | Page title | H1 |
|---|---|---|
| `/` | ShipDataFast · Data Engineering Consultancy | Ship reliable data faster. |
| `/services/data-engineering` | Data Engineering Consulting · ShipDataFast | Data engineering that stands up to inspection. |
| `/services/data-validation` | Data Validation Consulting · ShipDataFast | Turn data requirements into repeatable checks. |
| `/services/data-reconciliation` | Data Reconciliation Consulting · ShipDataFast | Find where your systems disagree. |
| `/products` | Data Software Products · ShipDataFast | Two products. Two different data questions. |
| `/products/reconciliation` | Data Reconciliation Software · ShipDataFast | Data Reconciliation |
| `/products/validation` | Data Validation Software · ShipDataFast | Data Validation |
| `/financial-services` | Financial Data Consulting · ShipDataFast | Financial data needs explainable answers. |
| `/about` | About ShipDataFast · Data Engineering Consultancy | The engineering behind ShipDataFast. |
| `/contact` | Discuss a Data Problem · ShipDataFast | What does your data need to get right? |

### Meta descriptions

- Home: “Data engineering consulting for reliable data flows, validation and reconciliation. Explore ShipDataFast services and our two data software products.”
- Engineering: “Practical consulting for data integrations, transformations and repeatable checks. Discuss your data delivery requirements with ShipDataFast.”
- Validation service: “Define data requirements and implement repeatable validation checks. Explore ShipDataFast consulting for reliable data delivery.”
- Reconciliation service: “Define matching rules and investigate source-to-target discrepancies across migrations and integrations with ShipDataFast.”
- Products: “Explore Data Reconciliation and Data Validation from ShipDataFast. Understand the different data questions each product addresses.”
- Reconciliation product: “Explore Data Reconciliation from ShipDataFast and discuss your dataset comparison requirements.”
- Validation product: “Explore Data Validation from ShipDataFast and discuss your data checking requirements.”
- Financial services: “Data engineering, reconciliation and validation consulting for financial-system migrations, integrations and reporting inputs.”
- About: “Meet the engineer behind ShipDataFast and explore the consulting approach and data software products.”
- Contact: “Tell ShipDataFast about your systems, data problem and delivery deadline. Contact us about consulting or either product.”

### Implementation rules

- Include unique title, description, canonical link, viewport and `lang="en-GB"` in each HTML page.
- Canonical origin proposal: `https://shipdatafast.com`. Before deployment confirm apex/www redirects and use one origin consistently. Do not split canonical, Open Graph and sitemap origins.
- Use direct crawlable links, descriptive anchor text and visible breadcrumbs on interior pages.
- Add accurate `Organization` and `WebSite` JSON-LD, plus `BreadcrumbList` where applicable. JSON-LD is non-executable data, allowed under the no-JavaScript application rule.
- Do not add ratings, invented offers, unsupported founding dates or product availability schema. Keep company identity separate from software identity.
- Provide `robots.txt`, `sitemap.xml`, meaningful 404 page, and a new typographic Open Graph asset. No template metadata, author or social handles.
- Service pages link to corresponding product pages; each product links to its consulting service and the product overview.
- Generate no thin keyword variants. Maintain substantive distinctions between consulting and software pages.
- Keep private previews access-controlled or noindexed. Publishable pages must return real success status codes; missing pages must return 404.

## 24. Technical implementation constraints

### Entirely new static site

Create a fresh site root, for example `shipdatafast-static/`. Do not start by copying the old application and deleting components. No imports, dependencies, styling, API endpoints, config objects, build scripts or assets from ShipFast.

Suggested file structure:

| File | Public destination |
|---|---|
| `index.html` | `/` |
| `services/data-engineering/index.html` | `/services/data-engineering` |
| `services/data-validation/index.html` | `/services/data-validation` |
| `services/data-reconciliation/index.html` | `/services/data-reconciliation` |
| `products/index.html` | `/products` |
| `products/reconciliation/index.html` | `/products/reconciliation` |
| `products/validation/index.html` | `/products/validation` |
| `financial-services/index.html` | `/financial-services` |
| `about/index.html` | `/about` |
| `contact/index.html` | `/contact` |
| `privacy-policy/index.html`, `tos/index.html` | Existing legal URLs |
| `assets/css/site.css` | Shared design system and responsive styling |
| `assets/img/…` | Newly created identity assets and verified product evidence |
| `robots.txt`, `sitemap.xml`, `404.html` | Search and error handling |

Configure the eventual static host to serve these directory documents at the requested clean routes. The exact product paths must work when opened directly. If a host canonicalises trailing slashes, align links, canonicals and redirects consistently. Do not serve duplicate index.html and clean URL versions without canonical handling. No SPA fallback.

Use one CSS file initially, organised into tokens, base, layout, components and responsive rules. No Sass, Tailwind, CSS framework, icon font or CSS reset dependency. Repeat small shared HTML header/footer markup across pages; a CMS or template engine is unnecessary for this bounded site.

### Performance budgets

- Zero application JavaScript and zero third-party runtime requests in the initial release.
- Shared stylesheet target: below 30KB compressed.
- Initial page transfer target: below 300KB compressed, excluding explicitly activated external demonstrations. Avoid embeds for the initial release.
- Set image dimensions; use appropriate local formats and lazy loading below the fold.
- Target LCP ≤2.5s, CLS ≤0.1 and INP ≤200ms where suitable field evidence exists. Use repeatable mobile lab checks before launch; a lab score is not field verification.

### Separation from the old site

The new design has no technical dependency on the previous application. The old repository remains available as historical evidence and rollback material, not as the new site's runtime.

Domain cutover is a separate release action. Before replacing production, inventory any real customer URLs and decide their destination. Do not reintroduce auth/payments into this site for hypothetical compatibility. Equally, do not erase production records or delete the old repository as part of writing a design document.

Legal wording should reflect actual company/product terms. Do not blindly copy old legal content or invent new rights.

## 25. Existing, adjacent and roadmap technology matrix

Keep the new website, product engines and consulting experience distinct.

| Technology | Classification | Treatment |
|---|---|---|
| HTML / CSS / static assets | Selected new website architecture | Implement fresh in the later coding task |
| Next.js / React / TypeScript / Tailwind / DaisyUI | Existing website only | Entirely excluded from the new implementation |
| Supabase / Stripe / Mailgun / auth SDKs | Existing website integration code | No dependency or replacement integration in new site |
| Python / Pandas / Flask / pytest | Unverified product candidates | Verify engine source before publishing as product stack |
| SQL / PostgreSQL / APIs | Adjacent consulting candidates beyond website integration | Confirm specific attributable experience; no automatic product claim |
| Docker / CI/CD / AWS | Adjacent candidates | Publish only supported experience or demonstrated product use |
| ETL / ELT / data modelling / pipeline operations | Consulting scope to substantiate | Describe actual deliverables and examples |
| PySpark / dbt / Airflow / Kafka / Databricks / warehouses | Uncommitted roadmap candidates | Exclude unless a real need and evidence justify them |

Do not put this internal matrix on the website as a technology wall. Choosing HTML/CSS for marketing says nothing about the eventual product engine languages.

## 26. Claims that must not be made

- That the product engines were inspected or run during this audit.
- That old template commits prove Ivano's project history.
- That all current services or both products existed in January 2024.
- That former employers were ShipDataFast clients.
- That customer names, testimonials, revenue, headcount, partnerships or certifications exist without evidence.
- That local processing guarantees security or regulatory compliance.
- That software supports connectors, formats, scale, real-time processing or automatic repair merely because those are commercially attractive.
- That two product pages prove two independently built applications.
- That a visually impressive website establishes professional experience by itself.
- That new styling is original while retaining the underlying template layouts and components.

## 27. Missing content and evidence

| Missing item | Smallest useful next action |
|---|---|
| Reconciliation engine source and runtime | Obtain source; run one synthetic comparison |
| Validation engine source and runtime | Obtain source; run one rules-based example |
| Product configuration, formats and limits | Record observed support separately for each product |
| Historical evidence before November 2024 | Inspect dated product work, not website template ancestry |
| Confirmed consulting deliverables | Confirm the practical work Ivano can personally deliver |
| Founder biography and examples | Attribute claims to specific work and roles |
| Product access and licence terms | Confirm distribution and rights before offering downloads |
| Mailbox delivery | Confirm the existing business inbox is monitored |
| Production route migration | Identify active URLs before domain cutover |

Smallest engineering additions, if later needed: a deterministic fixture and expected result; explicit handling of ambiguous keys; documented command exit behaviour for automation; a bounded validation rule with tests. These are separate product tasks. Do not add Airflow, Kafka or a warehouse to make the website sound more credible.

Missing engine evidence does not block this design specification. Use the defined honest content fallback instead of inventing shipped features.

## 28. Recommended implementation sequence

1. Start a fresh static-site directory. Carry over facts only, not application code or template assets.
2. Implement design tokens, typography, the new header/footer and responsive grid in HTML/CSS.
3. Build the company homepage and both product pages first to validate the core identity and hierarchy.
4. Add `/products`, the three service pages, About, Contact and financial-services content using the same new design language.
5. Add accurate legal pages, metadata, canonical links, structured data, sitemap, robots and 404 handling.
6. Populate verified product examples when available; otherwise retain the clearly labelled conceptual treatment.
7. Check exact routes, keyboard navigation, responsive layouts, HTML semantics, metadata and performance budgets.
8. Present the complete static preview. Plan production cutover separately after current route usage is known.

No website coding, product development, deployment or destructive cleanup is performed by this specification-writing task.

## 29. Acceptance criteria

### Specification complete

- [x] ShipDataFast is the consulting company, with two distinct product destinations.
- [x] All 29 requested areas are specified.
- [x] Repository and history findings are distinguished from unverified product claims.
- [x] All recommendations to retain or reuse ShipFast technology are superseded.
- [x] A distinctive new visual direction, copy hierarchy and exact HTML/CSS implementation model are defined.

### Later implementation must pass

- [ ] A visitor understands the consulting-company proposition from the hero.
- [ ] `/products/reconciliation` and `/products/validation` work directly and contain distinct explanations and examples.
- [ ] No ShipFast layout, component, CSS, icon, copy block or application dependency is reused.
- [ ] The site runs as static HTML/CSS without npm, a framework or application JavaScript.
- [ ] Consulting services and software products remain clearly distinguished.
- [ ] Every detailed shipped-feature claim is verified or omitted.
- [ ] Illustrative data examples are labelled; actual product output is traceable to a real run.
- [ ] Founder, historical and customer claims are attributable and defensible.
- [ ] Navigation and contact function without JavaScript; keyboard and focus checks pass.
- [ ] No page-wide horizontal overflow at the specified sizes or zoom levels.
- [ ] Every public page has correct title, description, canonical URL, heading structure and crawlable links.
- [ ] Sitemap, structured data and metadata contain only accurate published information.
- [ ] No template author, social proof, ratings, pricing or unrelated offers remain.
- [ ] CSS/page weight and visual performance are measured against the budgets.
- [ ] No customer data or secrets appear in source, examples or downloads.
- [ ] Production cutover and rollback are reviewed separately; the existing repository is not deleted as a side effect.

**Final direction:** an entirely new, bold HTML/CSS website for the ShipDataFast consulting company, with SEO built in and two clearly differentiated software product pages. The old code informs the audit only.
