# Decisions

Last updated: 2026-11-11

| Area | Decision |
|---|---|
| Host | Cloudflare Pages, free plan, free `*.pages.dev` subdomain. No custom domain in v1 |
| Repo | `nomaan02/portfolio`, public, default branch `main` |
| Stack | Astro, static output, plain CSS, no UI framework, no Tailwind |
| Allowed dependencies | `astro`, `@astrojs/sitemap`. Nothing else without the owner's approval |
| Fonts | Inter, self-hosted woff2 in `public/fonts/` (SIL OFL). No Google Fonts, no CDN |
| Accent | `#BC3B1A` (rust). Light theme only in v1 |
| Contact | `mailto:nomaanakram4@gmail.com`, LinkedIn `https://www.linkedin.com/in/nomaan-akram-b35565223/`, GitHub `https://github.com/nomaan02` |
| v1 pages | Home (positioning + project cards), Canvasser case study (condensed), CV PDF download |
| Launch | Everything goes live together after QA (site-1-10) |
| Test sizes | 390×763, 375×667, 430×850, 1280 desktop |
| Commits | The owner commits. Never you |

## Hard rules
- Hosting stays £0. Flag any plan, add-on or limit that could start charging.
- No deploys, DNS changes or account-setting changes without the owner's explicit yes.
- Commits: explicit paths only (`git add -- <paths>`), never `git add .`. Message format `site-N-xx: <what changed>`. No co-author, attribution or session lines.
- Privacy and content rules: see `.cursor/rules/copy-tone.mdc`.

## v2 (not now)
Barclays write-up page, Looptech and Everlink pages, About page, 3D/motion reel, full 12-section case study, GitHub banner restyle to rust, custom domain.
