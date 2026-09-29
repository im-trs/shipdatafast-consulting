# Full Audit Report

- URL: `https://im-trs.github.io/shipdatafast-consulting/`
- Generated: `2026-09-29T16:20:54.841136`
- Overall score: `62/100`
- Score confidence: `Medium`
- Scoring version: `1`

## Score Card

| Category | Weight | Score |
| --- | ---: | ---: |
| Security Headers | 8 | 45 |
| Social Meta | 5 | 38 |
| Robots and Crawlers | 8 | 20 |
| Broken Links | 10 | 100 |
| Internal Links | 8 | 100 |
| Redirects | 3 | 100 |
| AI Search | 5 | 0 |
| Performance and Core Web Vitals | 13 | 0 |
| On-Page SEO | 10 | 100 |
| Readability | 8 | 22 |
| Entity SEO | 5 | 0 |
| Link Profile | 7 | 85 |
| Hreflang | 5 | 0 |
| Content Uniqueness | 5 | 100 |

## Findings

| Severity | Area | Finding | Evidence | Fix |
| --- | --- | --- | --- | --- |
| Critical | environment | 5 security headers missing | Missing headers reduce trust and can expose the site to browser/security risks. | Set missing security headers at web server or CDN layer. |
| Critical | robots | 🔴 No robots.txt found — all crawlers allowed by default |  |  |
| Critical | sameAs | Entity schema exists but has no sameAs properties. |  | Add sameAs URLs pointing to Wikipedia, LinkedIn, Twitter/X, etc. |
| Critical | security | 🔴 5 security headers missing — poor security posture |  |  |
| Critical | social | 🔴 Missing required: og:image |  |  |
| Warning | environment | No llms.txt found | AI crawlers and assistants have no curated machine-readable guidance for key pages. | Add `/llms.txt` at site root with concise site description and key URLs. |
| Warning | environment | Social meta tags are incomplete | Missing OG/Twitter tags weakens social previews and share quality. | Update page templates to set complete title/meta/OG/Twitter tags. |
| Warning | environment | Content readability is difficult | Long, complex text can reduce engagement and comprehension. | Rewrite key sections with shorter sentences (15-20 words), shorter paragraphs (2-4 sentences), and clearer subheadings. |
| Warning | readability | ⚠️ Content is difficult to read (Flesch: 13.5) — may reduce engagement |  |  |
| Warning | readability | ⚠️ 35.2% complex words (3+ syllables) — consider simplifying |  |  |
| Warning | security | ⚠️ HSTS missing includeSubDomains directive |  |  |
| Info | Wikidata | No Wikidata entry found for 'ShipDataFast'. |  | If the entity meets Wikidata notability guidelines, create or improve an item with accurate third-party references. Do not create one solely for SEO. |
| Info | Wikipedia | No Wikipedia article found for 'ShipDataFast'. |  | Only pursue Wikipedia if the entity meets independent notability standards. Otherwise, strengthen official schema, sameAs profiles, citations, and About/Contact signals. |
| Info | environment | Performance measurement incomplete | PageSpeed API returned an error, so CWV recommendations are less reliable. | Set `PAGESPEED_API_KEY` in your environment or `.env` file (see `.env.example`), then rerun. The CLI also accepts `--api-key`. Prioritize LCP/INP/CLS fixes from that output. |
| info | pagespeed | pagespeed measurement incomplete | Rate limited by Google API. Wait a few minutes or add an API key. | Rerun this check after resolving the environment/API/network limitation. |
| Info | sameAs | Missing sameAs link to Wikipedia (Primary KG signal). |  | Add the existing official 'wikipedia.org' URL to sameAs; do not create this profile solely for SEO. |
| Info | sameAs | Missing sameAs link to Wikidata (Primary KG signal). |  | Add the existing official 'wikidata.org' URL to sameAs; do not create this profile solely for SEO. |
| Info | sameAs | Missing sameAs link to LinkedIn (Strong KG signal). |  | Add 'linkedin.com' profile URL to sameAs array in your entity schema. |
| Info | sameAs | Missing sameAs link to Twitter/X (Strong KG signal). |  | Add 'x.com' profile URL to sameAs array in your entity schema. |

## Measurement Notes

1 checks returned errors or incomplete measurements; treat affected scores as directional.
