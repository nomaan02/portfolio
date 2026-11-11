# Handoff

- **Item:** site-1-07
- **Status:** done
- **Files:**
  - `src/assets/canvasser/logger-interaction-model.png` (replaced, 725,176 bytes)
  - `public/fonts/InterVariable.woff2` (replaced, 101,796 bytes)
  - `src/data/canvasser.ts` (one alt string)
  - `src/pages/404.astro` (created)
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Lighthouse table:**

  | Run | Performance | Accessibility | Best Practices | SEO |
  |---|---|---|---|---|
  | Home mobile | 100 | 100 | 100 | 100 |
  | Home desktop | 100 | 100 | 100 | 100 |
  | Case study mobile | 100 | 100 | 100 | 100 |
  | Case study desktop | 100 | 100 | 100 | 100 |

- **QA findings:** none. Every score is on or above the target (Accessibility 100, SEO 100, Best Practices 95+, Performance 90+ on mobile).
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings. It built `/404.html`, `/work/canvasser/index.html` and `/index.html`. Raw tail:
     ```
      generating static routes 
     15:31:24   ├─ /404.html (+52ms) 
     15:31:24   ├─ /work/canvasser/index.html (+63ms) 
     15:31:24   ├─ /index.html (+16ms) 
     15:31:24 ✓ Completed in 193ms.

      generating optimized images 
     15:31:24   ▶ /_astro/logger-sketch.CNB7oIHW_Z4qU2V.webp (reused cache entry) (+8ms) (1/8)
     15:31:24   ▶ /_astro/logger-sketch.CNB7oIHW_2tPh1O.webp (reused cache entry) (+27ms) (2/8)
     15:31:24   ▶ /_astro/logger-sketch.CNB7oIHW_Z3gmE8.webp (reused cache entry) (+6ms) (3/8)
     15:31:24 [vite] ✓ built in 44ms
     15:31:25   ▶ /_astro/logger-interaction-model.DsO_tO56_ZOugQA.webp (before: 708kB, after: 9kB) (+1.01s) (4/8)
     15:31:26   ▶ /_astro/logger-interaction-model.DsO_tO56_ZgYG5i.webp (before: 708kB, after: 19kB) (+301ms) (5/8)
     15:31:26   ▶ /_astro/logger-interaction-model.DsO_tO56_TaIFG.webp (before: 708kB, after: 35kB) (+386ms) (6/8)
     15:31:27   ▶ /_astro/logger-interaction-model.DsO_tO56_ZuXzu9.webp (before: 708kB, after: 50kB) (+557ms) (7/8)
     15:31:27   ▶ /_astro/logger-interaction-model.DsO_tO56_1Bz6se.webp (before: 708kB, after: 74kB) (+612ms) (8/8)
     15:31:27 ✓ Completed in 2.87s.

     15:31:27 [build] ✓ Completed in 4.36s.
     15:31:27 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
     15:31:27 [build] 3 page(s) built in 4.74s
     15:31:27 [build] Complete!
     ```
  2. pass. `git diff --stat -- package.json package-lock.json` printed nothing.
  3. pass. Scores are in the table. Nothing is under target.
  4. pass. Raw summary:
     ```
     html files 404.html, index.html, work\canvasser\index.html
     internal refs checked 46
     broken 0
     --- external ---
     3 https://github.com/nomaan02
     1 https://github.com/nomaan02/cisi-revision-hub
     1 https://github.com/nomaan02/everlink-nfc-commerce
     1 https://github.com/nomaan02/quanttrader-architecture
     1 https://github.com/nomaan02/voxprompt
     1 https://nomaan-akram.pages.dev/
     1 https://nomaan-akram.pages.dev/404/
     1 https://nomaan-akram.pages.dev/work/canvasser/
     3 https://www.linkedin.com/in/nomaan-akram-b35565223/
     8 mailto:nomaanakram4@gmail.com
     ```
  5. pass. Raw output:
     ```
     PAGE index.html
     title Nomaan Akram · UX and Product Designer in Bristol
     description UX and Product Designer in Bristol. 4 years at Barclays, founder of NakoLabs, and the designer and builder of a field app used daily by 60+ canvassers.
     canonical https://nomaan-akram.pages.dev/
     og:url https://nomaan-akram.pages.dev/
     og:image https://nomaan-akram.pages.dev/og.png
     PAGE work\canvasser\index.html
     title D2D case study · Nomaan Akram
     description How I designed and built an offline-first field app for a door-to-door sales team. Used daily by 60+ canvassers across 5 South West branches.
     canonical https://nomaan-akram.pages.dev/work/canvasser/
     og:url https://nomaan-akram.pages.dev/work/canvasser/
     og:image https://nomaan-akram.pages.dev/og.png
     PAGE 404.html
     title Page not found · Nomaan Akram
     description This page doesn't exist on Nomaan Akram's portfolio.
     canonical https://nomaan-akram.pages.dev/404/
     og:url https://nomaan-akram.pages.dev/404/
     og:image https://nomaan-akram.pages.dev/og.png
     ```
     Titles and descriptions are unique. Each canonical matches that page's URL.
  6. pass. Home: 1 h1, 2 h2, 7 h3. Case study: 1 h1, 8 h2, 33 h3. 404: 1 h1. No skipped levels.
  7. pass. `img` 2, `withAlt` 2, `withWidthAndHeight` 2.
  8. pass. First 15 tabs on the case study, each with a 2px solid outline: Skip to content, Nomaan Akram, Work, CV, Email, How these were measured, TL;DR, Context, Problem, The Knock Logger, Routes, Decisions, Outcome, Reflections, Back to all work. The skip link was visible (fixed, clip auto). Enter on it set the hash to `#main` and moved focus to `<main id="main">`.
  9. pass. Horizontal overflow was 0 on Home, the case study and the 404 page at 1280 with CSS zoom 200%, at 640 CSS px (the layout width of a 1280 window at 200% browser zoom), and at 320 CSS px. The only element with overflow hidden and a larger scroll width is the skip link, which is hidden until it is focused.
  10. pass. With `prefers-reduced-motion: reduce`, a link, a button and the featured card all computed `transition-duration: 1e-05s` (0.01ms).
  11. pass. Full-page screenshots saved for Home, the case study and the 404 page at 390, 375, 430 and 1280.
  12. pass. Cold load, cache disabled: Home 110,892 bytes, case study 117,539 bytes before the lazy figures. The font line was 102,118 bytes transferred (file on disk is 101,796 bytes).
  13. pass. The dash, raw-hex and banned-word greps printed nothing.
  14. pass. Raw output of `git status --short -uall`:
      ```
       M docs/BUILD-LOG.md
       M docs/CLAUDE-HANDOFF.md
       M public/fonts/InterVariable.woff2
       M src/assets/canvasser/logger-interaction-model.png
       M src/data/canvasser.ts
      ?? src/pages/404.astro
      ```
- **Screenshots and reports:**
  - `Claude outputs/site-1-07/font-home.png`
  - `Claude outputs/site-1-07/font-checks.png`
  - `Claude outputs/site-1-07/home-390.png`
  - `Claude outputs/site-1-07/home-375.png`
  - `Claude outputs/site-1-07/home-430.png`
  - `Claude outputs/site-1-07/home-1280.png`
  - `Claude outputs/site-1-07/canvasser-390.png`
  - `Claude outputs/site-1-07/canvasser-375.png`
  - `Claude outputs/site-1-07/canvasser-430.png`
  - `Claude outputs/site-1-07/canvasser-1280.png`
  - `Claude outputs/site-1-07/404-390.png`
  - `Claude outputs/site-1-07/404-375.png`
  - `Claude outputs/site-1-07/404-430.png`
  - `Claude outputs/site-1-07/404-1280.png`
  - `Claude outputs/site-1-07/lh-home-mobile.report.json`
  - `Claude outputs/site-1-07/lh-home-mobile.report.html`
  - `Claude outputs/site-1-07/lh-home-desktop.report.json`
  - `Claude outputs/site-1-07/lh-home-desktop.report.html`
  - `Claude outputs/site-1-07/lh-canvasser-mobile.report.json`
  - `Claude outputs/site-1-07/lh-canvasser-mobile.report.html`
  - `Claude outputs/site-1-07/lh-canvasser-desktop.report.json`
  - `Claude outputs/site-1-07/lh-canvasser-desktop.report.html`
- **Deviations:** none
- **Open questions:** none
- **Next item:** site-1-08 (deploy)
