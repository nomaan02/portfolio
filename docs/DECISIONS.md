# Decisions

Last updated: 2026-11-12

| Area | Decision |
|---|---|
| Host | Cloudflare Pages, free plan, free `*.pages.dev` subdomain. No custom domain in v1 |
| Repo | `nomaan02/portfolio`, public, default branch `main` |
| Stack | Astro, static output, plain CSS, no UI framework, no Tailwind |
| Allowed dependencies | `astro`, `@astrojs/sitemap`. Nothing else without the owner's approval |
| Fonts | Inter, self-hosted woff2 in `public/fonts/` (SIL OFL). No Google Fonts, no CDN |
| Accent | `#1C4AA6` (blue, from the D2D app). Changed from rust `#BC3B1A` in site-2-01. Light theme only |
| Contact | `mailto:nomaanakram4@gmail.com`, LinkedIn `https://www.linkedin.com/in/nomaan-akram-b35565223/`, GitHub `https://github.com/nomaan02` |
| v1 pages | Home (positioning + project cards), Canvasser case study (condensed), CV PDF download |
| Launch | Everything goes live together after QA (site-1-07). Deploy is site-1-08 |
| v1 items | 04 Home + CV + SEO · 05 case study text · 06 case study images · 07 QA · 08 deploy |
| Case study URL | /work/canvasser/ |
| Test sizes | 390×763, 375×667, 430×850, 1280 desktop |
| Case study images | Files live in `src/assets/canvasser/` and are listed in `figures` in `src/data/canvasser.ts`. A slot shows on the live site only when its file exists and its alt text is filled in. In dev, an empty slot shows a dashed placeholder with the filename. Added in site-2-02 |
| Image clearances | Street names, door numbers and canvasser names shown inside the case study images are cleared by the owner: the streets aren't real props, the numbers are meaningless and the names aren't real. Don't flag or blur them. Case study prose still follows `copy-tone.mdc` |
| AI workflow case study | `/work/ai-workflow/`, added in site-3-01. Copy in `src/data/ai-workflow.ts`, layout in `src/pages/work/ai-workflow.astro`. Planned in Figma file `dJUKGf1CB5vtEsulDCHvag`, page "Portfolio: AI workflow" (`144:214`) |
| AI workflow images | Files live in `src/assets/ai-workflow/` and are listed in `figures` in `src/data/ai-workflow.ts`. Same slot rules as the D2D case study. Alt text is written after the owner supplies each image |
| QuantTrader naming | The partner is never named. The broker is "ProjectX API" only. No strategy logic or results. Full rules in `.cursor/rules/copy-tone.mdc` |
| Home cards | The QuantTrader card links to `/work/ai-workflow/` and sits first in the card grid, under the featured D2D card. The architecture repo is linked from the end of the case study |
| Commits | The owner commits. Never you |

## Hard rules
- Hosting stays £0. Flag any plan, add-on or limit that could start charging.
- No deploys, DNS changes or account-setting changes without the owner's explicit yes.
- Commits: explicit paths only (`git add -- <paths>`), never `git add .`. Message format `site-N-xx: <what changed>`. No co-author, attribution or session lines.
- Privacy and content rules: see `.cursor/rules/copy-tone.mdc`.

## v2 (not now)
Barclays write-up page, Looptech and Everlink pages, About page, 3D/motion reel, full 12-section case study, GitHub banner restyle to blue, custom domain.
