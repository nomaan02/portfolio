# Handoff

- **Item:** site-1-04
- **Status:** done
- **Files created, edited or deleted:**
  - `public/og.png` (copied)
  - `public/favicon.svg` (copied)
  - `public/apple-touch-icon.png` (copied)
  - `public/robots.txt` (created)
  - `public/nomaan-akram-cv.pdf` (copied)
  - `src/layouts/BaseLayout.astro`
  - `src/pages/index.astro`
  - `docs/DECISIONS.md`
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
  - `src/assets/sample/figure-sample.png` (deleted)
  - `src/assets/sample/` (deleted, empty)
  - `src/assets/` (deleted, empty)
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings. Last 10 lines:
     ```
     14:25:10 [build] Rearranging server assets...

      generating static routes 
     14:25:10   ├─ /index.html (+16ms) 
     14:25:10 ✓ Completed in 32ms.

     14:25:10 [build] ✓ Completed in 366ms.
     14:25:10 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
     14:25:10 [build] 1 page(s) built in 457ms
     14:25:10 [build] Complete!
     ```
  2. pass. All five files exist: `dist/og.png`, `dist/favicon.svg`, `dist/apple-touch-icon.png`, `dist/robots.txt`, `dist/nomaan-akram-cv.pdf`.
  3. pass. Raw output:
     ```
     <meta property="og:url" content="https://nomaan-akram.pages.dev/">
     <meta property="og:image" content="https://nomaan-akram.pages.dev/og.png">
     ```
  4. pass. `grep -c 'application/ld+json' dist/index.html` printed `1`.
  5. pass. Raw output:
     ```
           1 <h1
           2 <h2
           7 <h3
     ```
  6. pass. Dash grep printed nothing.
  7. pass. Raw-hex grep printed nothing.
  8. pass. Raw output, the one degree apprenticeship line:
     ```
     src/pages/index.astro:98:        I'm a UX and Product Designer in Bristol. I spent 4 years on the UX team at Barclays through a degree apprenticeship with Manchester Metropolitan University, shipping 2-3 projects and dev handovers a month.
     ```
  9. pass. `ls src/assets/sample` failed: `No such file or directory`.
  10. pass. Raw output of `git status --short -uall`:
      ```
       M docs/BUILD-LOG.md
       M docs/CLAUDE-HANDOFF.md
       M docs/DECISIONS.md
       D src/assets/sample/figure-sample.png
       M src/layouts/BaseLayout.astro
       M src/pages/index.astro
      ?? public/apple-touch-icon.png
      ?? public/favicon.svg
      ?? public/nomaan-akram-cv.pdf
      ?? public/og.png
      ?? public/robots.txt
      ```
  11. pass. Full-page screenshots saved. Horizontal overflow: 320 = 0, 375 = 0, 390 = 0, 430 = 0, 1280 = 0. Hero `h1` is 2 lines at 375 (height 73.59px, line-height 36.8px). At 1280 the featured card is 1120px wide and the text sits in the first of ProjectCard's two featured columns, leaving about 448px empty. The component was not edited. Preview logged no console errors and no failed requests.
- **Tab order:** Skip to content, wordmark (Nomaan Akram), Work, CV, Email, Read the case study, Download CV (PDF), featured card (D2D: from paper surveys to live data), Everlink (NFC jewellery store), QuantTrader architecture, VoxPrompt, CISI revision hub, Download CV (PDF), Email me, footer email (nomaanakram4@gmail.com), LinkedIn, GitHub. Barclays and Looptech have no link, so they are not in the order.
- **Screenshots:**
  - `Claude outputs/site-1-04/390.png`
  - `Claude outputs/site-1-04/375.png`
  - `Claude outputs/site-1-04/430.png`
  - `Claude outputs/site-1-04/1280.png`
- **Deviations:** none
- **Open questions:** none
- **Next item:** site-1-05 (case study text)
