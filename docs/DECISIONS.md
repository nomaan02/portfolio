# Decisions

Last updated: 2026-11-16 (site-5-02)

| Area | Decision |
|---|---|
| Host | Cloudflare Pages, free plan, free `*.pages.dev` subdomain. No custom domain in v1 |
| Repo | `nomaan02/portfolio`, public, default branch `main` |
| Stack | Astro, static output, plain CSS, no UI framework, no Tailwind |
| Allowed dependencies | `astro`, `@astrojs/sitemap`. Nothing else without the owner's approval |
| Fonts | Inter, self-hosted woff2 in `public/fonts/` (SIL OFL). No Google Fonts, no CDN |
| Accent | `#8AD0FF` (site-5-01). Was `#1C4AA6` (site-2-01), rust `#BC3B1A` before that. It fails as text on light (1.59:1), so it is split by role: `--color-accent-fill` `#8AD0FF` for fills with dark `--color-on-accent` text in both themes; `--color-accent` for text, links, focus and meaningful graphics is `#0B5384` in light and `#8AD0FF` in dark |
| Themes | Light and dark (site-5-01). Default follows the OS (`prefers-color-scheme`); the header toggle stores the choice in `localStorage` (`theme`). An inline script in `BaseLayout` sets `data-theme` on `<html>` before first paint. Without JS the site is light and the toggle is hidden. All colours live in `src/styles/tokens.css`; token names match the Figma variable collection "site-5 / colour" (file `dJUKGf1CB5vtEsulDCHvag`, page 174:214). No hex values outside `tokens.css` |
| Workspace canvas | Site-wide dot grid on `body` (24px, 2px dots, scrolls with the page, no `background-attachment: fixed`). A cursor spotlight (`.canvas-glow`, 180px radius, dots grow to 4px) shows only for fine pointers with hover, and never with reduced motion. `--color-dot-hot` is capped so muted and accent text sitting on a hot dot still pass AA (4.59:1 light, 4.98:1 dark) |
| Artboards | Sections are outlined frames on the canvas: the Home hero and `Section tone="surface"` have no fill, just a 1px `--color-border` frame. Cards, callouts, tables, code blocks, stat tiles and flow cards stay solid. Code blocks stay dark in both themes. Logger specimen PNGs keep a light panel (`--color-specimen`) in both themes |
| Motion | Sections (`.reveal`) fade up 12px over 220ms, once, as they scroll into view. Anything already on screen at load shows at once. Off with reduced motion, and in print |
| Contact | `mailto:nomaanakram4@gmail.com`, LinkedIn `https://www.linkedin.com/in/nomaan-akram-b35565223/`, GitHub `https://github.com/nomaan02` |
| v1 pages | Home (positioning + project cards), Canvasser case study (condensed), CV PDF download |
| Launch | Everything goes live together after QA (site-1-07). Deploy is site-1-08 |
| v1 items | 04 Home + CV + SEO · 05 case study text · 06 case study images · 07 QA · 08 deploy |
| Case study URL | /work/canvasser/ |
| Test sizes | 390×763, 375×667, 430×850, 1280 desktop |
| Case study images | Files live in `src/assets/canvasser/` and are listed in `figures` in `src/data/canvasser.ts`. A slot shows on the live site only when its file exists and its alt text is filled in. In dev, an empty slot shows a dashed placeholder with the filename. Added in site-2-02 |
| Image clearances | Street names, door numbers and canvasser names shown inside the case study images are cleared by the owner: the streets aren't real props, the numbers are meaningless and the names aren't real. Don't flag or blur them. Case study prose still follows `copy-tone.mdc`. The same applies to `src/assets/logger/`, including the owner's own name on the V1 heatmap (cleared 16 Nov 2026) |
| AI workflow case study | `/work/ai-workflow/`, added in site-3-01. Copy in `src/data/ai-workflow.ts`, layout in `src/pages/work/ai-workflow.astro`. Planned in Figma file `dJUKGf1CB5vtEsulDCHvag`, page "Portfolio: AI workflow" (`144:214`) |
| AI workflow images | Files live in `src/assets/ai-workflow/` and are listed in `figures` in `src/data/ai-workflow.ts`. Same slot rules as the D2D case study. Alt text is written after the owner supplies each image |
| QuantTrader naming | The partner is never named. The broker is "ProjectX API" only. No strategy logic or results. Full rules in `.cursor/rules/copy-tone.mdc` |
| Home cards | site-5-02: the D2D case study is the one full-width featured card (image left). Below it, a 2-column grid in this order: Logger deep-dive (New), QuantTrader (with the AI workflow hero image), Barclays, Everlink, Looptech, VoxPrompt, CISI, NakoLabs 3D and motion (links to `https://www.instagram.com/nako.labs/`). Cards carry chips: status (Live, Paused, Ongoing, dot plus word) and type (Case study, Deep-dive, Role, Client, Tool, Studio, New). Section numbers "01 Work" and "02 About". The D2D card image is the owner's hero with made-up names in "Leads today", kept by the owner's choice (16 Nov 2026) |
| Logger deep-dive | `/work/canvasser/logger/`, added in site-4-01. Copy in `src/data/logger.ts`, layout in `src/pages/work/canvasser/logger.astro`, images in `src/assets/logger/`. Every image is required: the build fails if one is missing. Linked from the Home grid, a teaser at the end of the D2D Logger section and the D2D end buttons. Planned in Figma file `EHxBRxJZGVAU1MuSU59RTH`, frame `348:3270` |
| Commits | The owner commits. Never you |

## Hard rules
- Hosting stays £0. Flag any plan, add-on or limit that could start charging.
- No deploys, DNS changes or account-setting changes without the owner's explicit yes.
- Commits: explicit paths only (`git add -- <paths>`), never `git add .`. Message format `site-N-xx: <what changed>`. No co-author, attribution or session lines.
- Privacy and content rules: see `.cursor/rules/copy-tone.mdc`.

## v2 (not now)
Barclays write-up page, Looptech and Everlink pages, About page, 3D/motion reel, full 12-section case study, GitHub banner restyle to blue, custom domain.
