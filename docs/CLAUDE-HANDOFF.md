# Handoff

- **Item:** site-2-02
- **Status:** partial
- **Files:**
  - `src/components/FigureSlot.astro` (created)
  - `src/data/canvasser.ts` (figure slots and home card image copy)
  - `src/pages/work/canvasser.astro` (slots in hero, context, logger, routes, decisions, outcome)
  - `src/pages/index.astro` (featured card image)
  - `docs/DECISIONS.md` (case study images, image clearances)
  - `.cursor/rules/copy-tone.mdc` (image clearance exception)
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings.
  2. pass. `git diff --stat -- package.json package-lock.json` printed nothing.
  3. partial. Placeholders 0, empty alts 0, image count 10. `card__img` prints 2.
     ```
     ===== CHECK 3a =====
     0
     EXIT3a:1
     ===== CHECK 3b =====
     0
     EXIT3b:1
     ===== CHECK 3c =====
     10
     EXIT3c:0
     ===== CHECK 3d =====
     2
     EXIT3d:0
     ```
     The 10 alts are the filled slots. `logger-door-scroll.png` and `manager-flows.png` are absent, so they are not in the production HTML. `grep -c` counts lines. One line is the inlined ProjectCard stylesheet, which already contains `.card__img`. The other line is the single featured `<img class="card__img">`.
  4. pass. Dash grep, hex grep, and `loggerFigures` grep printed nothing.
  5. pass. Dev at http://localhost:4321/work/canvasser/. Two dashed placeholders:
     ```
     Image slot src/assets/canvasser/logger-door-scroll.png Add this file to show it
     border: dashed 2px
     Image slot src/assets/canvasser/manager-flows.png Add this file to show it
     border: dashed 2px
     ```
  6. partial. Preview at http://127.0.0.1:4322/work/canvasser/.
     - Hero sits between the lead and the stats at 1280 and 390. `loading="eager"`, `fetchpriority="high"`, no caption.
     - Each filled image is in its section, in EDIT 1 order, with its caption. The pencil sketch is 512px wide at 1280 (32rem). The other section figures are 880px, the content column. At 390 they are 350px, which is the column and under 32rem.
     - Sidebar visible at 1280: sidebar right 272, every figure left 320. No overlap.
     - Lighthouse LCP: desktop is the hero image. Mobile is the lead paragraph, on both runs.
     ```
     desktop LCP element:
     <img ... alt="The D2D manager dashboard on a laptop, showing today's doors..." loading="eager" fetchpriority="high" class="figure__img">
     mobile LCP element:
     <p class="lead">
     ```
  7. pass. Preview `/` at 1280 and 390. The featured card image alt is "The D2D manager dashboard on a laptop next to the canvasser Logger on a phone." The other six cards have no image.
  8. pass. Horizontal overflow was 0 at 320, 375, 390, 430 and 1280 on `/` and `/work/canvasser/`.
  9. pass. `npx --yes lighthouse@12` with `--chrome-flags="--headless=new"`. Full category runs, scores out of 100:
     ```
     home mobile
     performance 100
     accessibility 100
     best-practices 100
     seo 100
     LCP 1.6 s
     CLS 0
     transfer 125 KiB

     home desktop
     performance 100
     accessibility 100
     best-practices 100
     seo 100
     LCP 0.4 s
     CLS 0
     transfer 137 KiB

     case mobile
     performance 100
     accessibility 100
     best-practices 100
     seo 100
     LCP 1.7 s
     CLS 0
     transfer 134 KiB (137640 bytes)

     case desktop
     performance 100
     accessibility 100
     best-practices 100
     seo 100
     LCP 0.4 s
     CLS 0
     transfer 212 KiB (216652 bytes)
     ```
     An earlier home mobile run, taken while another Chrome was busy, scored Performance 89 with total blocking time 420 ms. The quiet re-run scored 100. Targets are met on the full runs.
  10. pass. Screenshots in `Claude outputs/site-2-02/`: `case-1280-hero.png`, `case-1280-logger.png`, `case-1280-routes.png`, `case-390-hero.png`, `home-1280-card.png`, `dev-placeholder.png`.
  11. pass. Raw `git status --short -uall`:
     ```
      M .cursor/rules/copy-tone.mdc
      M docs/BUILD-LOG.md
      M docs/CLAUDE-HANDOFF.md
      M docs/DECISIONS.md
      M src/assets/canvasser/logger-interaction-model.png
      M src/data/canvasser.ts
      M src/pages/index.astro
      M src/pages/work/canvasser.astro
     ?? "src/assets/canvasser/Key flows.png"
     ?? src/assets/canvasser/before-paper-survey.jpg
     ?? src/assets/canvasser/decision-sharing-pill.png
     ?? src/assets/canvasser/hero.png
     ?? src/assets/canvasser/logger-figma-concepts.png
     ?? src/assets/canvasser/logger-shipped.png
     ?? src/assets/canvasser/outcome-dashboard.png
     ?? src/assets/canvasser/routes-generated.png
     ?? src/assets/canvasser/routes-walking-rules.png
     ?? src/components/FigureSlot.astro
     ```
     The site-2-02 paths are the seven `M` files above, apart from `logger-interaction-model.png`, plus `?? src/components/FigureSlot.astro`. The canvasser image paths are the owner's.
- **Screenshots:** `Claude outputs/site-2-02/case-1280-hero.png`, `case-1280-logger.png`, `case-1280-routes.png`, `case-390-hero.png`, `home-1280-card.png`, `dev-placeholder.png`
- **Deviations:** `grep -c "card__img"` prints 2, not 1, because Astro inlines the ProjectCard stylesheet into `dist/index.html`. There is one featured image. On mobile, Lighthouse's LCP element for the case study is the lead paragraph, not the hero image. The image is specified to sit after that paragraph, and on a phone most of it is below the first viewport. Desktop LCP is the hero image. No image file in `src/assets/canvasser/` was added, renamed, moved, resized or deleted.
- **Open questions:** none
- **Next item:** site-2-03 (commit the final image files)
