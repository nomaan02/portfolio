# Handoff

- **Item:** site-1-09
- **Status:** done
- **Files:**
  - `src/components/CaseStudyNav.astro` (created)
  - `src/pages/work/canvasser.astro` (head script, toc attributes, `.cs-body`, page CSS)
  - `src/styles/tokens.css` (appended `--toc-width: 12rem`)
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings.
     ```
     > portfolio@0.1.0 build
     > astro build

     19:34:53 [types] Generated 71ms
     19:34:53 [build] output: "static"
     19:34:53 [build] mode: "static"
     19:34:53 [build] directory: C:\Users\nomaa\Documents\Portfolio Site - Build 2026\portfolio\dist\
     19:34:53 [build] Collecting build info...
     19:34:53 [build] ✓ Completed in 98ms.
     19:34:53 [build] Building static entrypoints...
     19:34:54 [vite] ✓ built in 309ms
     19:34:54 [vite] ✓ built in 30ms
     19:34:54 [build] Rearranging server assets...

      generating static routes
     19:34:54   ├─ /404.html (+18ms)
     19:34:54   ├─ /work/canvasser/index.html (+19ms)
     19:34:54   ├─ /index.html (+4ms)
     19:34:54 ✓ Completed in 63ms.

      generating optimized images
     19:34:54   ▶ /_astro/logger-sketch.CNB7oIHW_Z4qU2V.webp (reused cache entry) (+3ms) (1/8)
     19:34:54   ▶ /_astro/logger-interaction-model.DsO_tO56_ZOugQA.webp (reused cache entry) (+2ms) (2/8)
     19:34:54   ▶ /_astro/logger-sketch.CNB7oIHW_2tPh1O.webp (reused cache entry) (+2ms) (3/8)
     19:34:54   ▶ /_astro/logger-interaction-model.DsO_tO56_ZgYG5i.webp (reused cache entry) (+2ms) (4/8)
     19:34:54   ▶ /_astro/logger-sketch.CNB7oIHW_Z3gmE8.webp (reused cache entry) (+1ms) (5/8)
     19:34:54   ▶ /_astro/logger-interaction-model.DsO_tO56_TaIFG.webp (reused cache entry) (+2ms) (6/8)
     19:34:54   ▶ /_astro/logger-interaction-model.DsO_tO56_ZuXzu9.webp (reused cache entry) (+1ms) (7/8)
     19:34:54   ▶ /_astro/logger-interaction-model.DsO_tO56_1Bz6se.webp (reused cache entry) (+1ms) (8/8)
     19:34:54 ✓ Completed in 10ms.

     19:34:54 [build] ✓ Completed in 520ms.
     19:34:54 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
     19:34:54 [build] 3 page(s) built in 632ms
     19:34:54 [build] Complete!
     ```
  2. pass. `git diff --stat -- package.json package-lock.json` printed nothing.
  3. pass.
     ```
     dist/index.html:0
     dist/404.html:0
     dist/work/canvasser/index.html:1
     ```
  4. pass. Both greps printed nothing (exit 1, no matches).
  5. pass. Preview at http://127.0.0.1:4322/work/canvasser/, 1280x800 then 1440x900.
     - Load: `visibility: hidden`, `opacity: 0`, `inert: true`, `is-visible: false`. `html` class `toc-js`. `scroll-behavior: smooth`.
     - h1: top 207.4, left 80, width 857.1, height 110.4. Stats: top 517.8, left 80, width 1120, height 135.2. Hero markup and CSS were not changed. The sidebar does not cover them.
     - 300ms after the hero nav left the viewport (`heroBottom: -8`): `visibility: visible`, `opacity: 1`, `inert: false`.
     - One visible `aria-current="location"` at each section, matching the section in the 30-40% band: tldr, context, problem, logger, routes, decisions, outcome, reflections.
     - Decisions click: hash `#decisions`, `scroll-behavior: smooth` (scrollY moved across the sampled frames, 1184 to 6515). h2 "Five decisions, and what each one cost" top 154.38, in the viewport.
     - Indicator and Decisions link, 1280: link top 302.39 height 44, indicator top 302.39 height 44. At 1440: both top 302.39, height 44.
     - 1280: sidebar right 272, content left 320. 1440: sidebar right 352, content left 400.
     - End actions in view: `visibility: hidden`, `opacity: 0`, `inert: true`.
  6. pass. 390x763, 375x667, 430x850. Sidebar `display: none`. Sticky bar `position: sticky`, top 0, height 46, label updates through all 8 sections. Outcome click closes the list, hash `#outcome`, h2 top 106.83 / 106.52 / 106.03 against a bar bottom of 46. Escape closes it and focus returns to the summary. Every summary and link is at least 44px tall.
  7. pass. Horizontal overflow 0 at 320, 375, 390, 430, 1280 and 1440, including with "The Knock Logger" in the bar and with the list open.
  8. pass. With `prefers-reduced-motion: reduce`: `scroll-behavior: auto`. Sidebar and indicator `transition-duration: 1e-05s` (0.01ms).
  9. pass. At scroll 0 the sidebar is `visibility: hidden` and `inert: true`. Tab reaches the hero nav (TL;DR through Reflections) and does not enter the sidebar. The next stop is "Back to all work". After the hero has scrolled away, sidebar links take focus with `outline: 2px solid rgb(188, 59, 26)`.
  10. pass. JavaScript disabled. Desktop 1280: no `toc-js`, sidebar `display: none`, content padding 40px left and 40px right. The mobile bar opened and closed. At 390: sidebar `display: none`, padding 20px left and 20px right, bar opened and closed.
  11. pass. Home `scroll-behavior: auto`, no `toc-js`. The 1280 viewport shows the same header, headline, lead, buttons and work heading as site-1-07. `index.astro` was not edited.
  12. pass. `npx --yes lighthouse@12` exited 0 (`--quiet`, so the CLI printed nothing). Scores from the JSON reports:
     ```
     lh-canvasser-mobile
     performance 100
     accessibility 100
     best-practices 100
     seo 100
     CLS 0

     lh-canvasser-desktop
     performance 100
     accessibility 100
     best-practices 100
     seo 100
     CLS 0
     ```
  13. pass. Screenshots below.
  14. pass. `git status --short -uall` lists only the files in section 2. Raw output is at the bottom of this file, filled after the docs were written.

- **Screenshots:**
  - `Claude outputs/site-1-09/desktop-1280-top.png` (sidebar hidden)
  - `Claude outputs/site-1-09/desktop-1280-mid.png` (sidebar visible on Decisions)
  - `Claude outputs/site-1-09/desktop-1440-mid.png`
  - `Claude outputs/site-1-09/mobile-390-bar-closed.png`
  - `Claude outputs/site-1-09/mobile-390-bar-open.png`
  - Lighthouse: `Claude outputs/site-1-09/lh-canvasser-mobile.report.html` and `.report.json`, `Claude outputs/site-1-09/lh-canvasser-desktop.report.html` and `.report.json`
- **Deviations:** `CaseStudyNav.astro` is not the prompt script byte for byte.
  - `aria-current="location"` is set only on the link in the nav that is actually shown, and reapplied when the 75rem breakpoint changes. The supplied loop set it on the mobile list and the sidebar together.
  - Show and hide reads the hero nav and the end actions on scroll and resize. The supplied observer treated a hero nav still below the fold as already gone, so the sidebar covered the title at 1280x800. It also did not run when a jump moved that nav from below the screen to above it without the nav crossing the screen. That is what a long in-page jump does when motion is reduced.
  - The page CSS from EDIT 3 was added as written. Astro scoped `section[id]` to this page, so it does not match `Section.astro` sections. Those keep `scroll-margin-top: 24px`. `#measurement` does get 68px. The Outcome h2 still lands below the bar.
- **Open questions:** none
- **Next item:** none (v1 polish)

## Check 14 raw output

```
 M docs/BUILD-LOG.md
 M docs/CLAUDE-HANDOFF.md
 M src/pages/work/canvasser.astro
 M src/styles/tokens.css
?? src/components/CaseStudyNav.astro
```
