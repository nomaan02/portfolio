# Handoff

- **Item:** site-1-05
- **Status:** partial
- **Files:**
  - `src/data/canvasser.ts` (created)
  - `src/components/InfoCard.astro` (created)
  - `src/components/Callout.astro` (created)
  - `src/pages/work/canvasser.astro` (created)
  - `src/components/ProjectCard.astro`
  - `src/pages/index.astro`
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings. Last 10 lines:
     ```
      generating static routes 
     14:49:00   ├─ /work/canvasser/index.html (+14ms) 
     14:49:00   ├─ /index.html (+15ms) 
     14:49:00 ✓ Completed in 44ms.

     14:49:01 [build] ✓ Completed in 389ms.
     14:49:01 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
     14:49:01 [build] 2 page(s) built in 500ms
     14:49:01 [build] Complete!
     ```
  2. pass. `ls dist/work/canvasser/index.html` printed `dist/work/canvasser/index.html`.
  3. pass. Raw output:
     ```
           1 <h1
           8 <h2
          33 <h3
     ```
     1 `h1` and 8 `h2` match the check (TL;DR, Context, Problem, Logger, Routes, Decisions, Outcome, Reflections). The 33 `h3`s are the subsection titles plus every InfoCard and DecisionCard. Levels go h1, h2, h3 with nothing skipped.
  4. pass. A script collected every `href="#..."` and every `id`. Raw output:
     ```
     hash hrefs 10
     unique main, measurement, tldr, context, problem, logger, routes, decisions, outcome, reflections
     missing none
     ```
     `#main` is the skip link. `#measurement` is the note. The other eight are the "On this page" links.
  5. pass. Raw output of `grep -cE` was `0`. `grep -nE` printed no lines.
  6. pass. The first `grep -rnP` printed `grep: -P supports only unibyte and UTF-8 locales` (exit 2). Re-run with `LC_ALL=C.UTF-8` printed nothing (exit 1).
  7. pass. Raw-hex grep printed nothing.
  8. pass. Banned-word grep printed nothing.
  9. fail. Ran twice. Same output both times. Copy was not edited. Raw output:
     ```
     48:    { eyebrow: '02', title: 'Every knock on paper', body: 'Canvassers wrote a house number and an outcome on a paper survey: contact, lead, not in, rented. Sheets came back with missing house numbers and street names.' },
     152:    { eyebrow: 'For the office', title: 'Complete survey data', body: 'The tap is the address: no missing house numbers or street names, and lead outcomes flow back from the CRM every night.' },
     ```
     `grep -o` shows the match text is `street name`, taken from `street names`. The `\b` in the pattern applies only in front of the group.
  10. pass. Raw output of `git status --short -uall`:
      ```
       M docs/BUILD-LOG.md
       M docs/CLAUDE-HANDOFF.md
       M src/components/ProjectCard.astro
       M src/pages/index.astro
      ?? src/components/Callout.astro
      ?? src/components/InfoCard.astro
      ?? src/data/canvasser.ts
      ?? src/pages/work/canvasser.astro
      ```
  10b. pass. At 1280 the featured card is `display: flex` with no grid columns. Card width 1120px, text block 1118px, empty right edge 1px (the border). Summary width 726px, capped at the measure. Screenshot: `Claude outputs/site-1-05/home-1280.png`.
  11. pass. Full-page screenshots saved. Horizontal overflow: 320 = 0, 375 = 0, 390 = 0, 430 = 0, 1280 = 0. "How these were measured" set the hash to `#measurement`. The note's top was 24px, inside the viewport, and the hit target was the callout, not a covering element. From Home, the featured card opened `http://127.0.0.1:4321/work/canvasser/`. No console errors. No failed requests.
- **Screenshots:**
  - `Claude outputs/site-1-05/home-1280.png`
  - `Claude outputs/site-1-05/390.png`
  - `Claude outputs/site-1-05/375.png`
  - `Claude outputs/site-1-05/430.png`
  - `Claude outputs/site-1-05/1280.png`
- **Deviations:** none
- **Open questions:** Check 9 fails on the approved phrase "street names" (two lines). Leave the copy as written?
- **Next item:** site-1-06 (case study images)
