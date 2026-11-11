# Handoff

- **Item:** site-2-01
- **Status:** partial
- **Files:**
  - `src/styles/tokens.css` (colour block only)
  - `public/favicon.svg`, `public/apple-touch-icon.png`, `public/og.png` (replaced with the supplied files)
  - `docs/DECISIONS.md` (accent row, and the v2 GitHub banner line)
  - `.cursor/rules/a11y.mdc` (accent contrast line)
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings. Re-run on 2026-11-11.
  2. pass. `git diff --stat -- package.json package-lock.json` printed nothing.
  3. pass. Re-run on 2026-11-11. The only hit is the DECISIONS.md line that names the old rust on purpose. The dist grep printed nothing.
     ```
     ===== CHECK 3a =====
     docs/DECISIONS.md:12:| Accent | `#1C4AA6` (blue, from the D2D app). Changed from rust `#BC3B1A` in site-2-01. Light theme only |
     EXIT3a:0
     ===== CHECK 3b =====
     EXIT3b:1
     ```
  4. pass. `grep -rnE "#[0-9a-fA-F]{3,6}\b" src --include=*.css --include=*.astro | grep -v tokens.css` printed nothing.
  5. pass. `LC_ALL=C.UTF-8 grep -rnP "\x{2014}|\x{2013}" src` printed nothing.
  6. pass. Re-run on 2026-11-11. Every line says PASS.
     ```
     #1a1a1a on #ffffff: 17.40:1 (min 4.5) PASS
     #1a1a1a on #f4f7fd: 16.22:1 (min 4.5) PASS
     #4b5563 on #ffffff: 7.56:1 (min 4.5) PASS
     #4b5563 on #f4f7fd: 7.04:1 (min 4.5) PASS
     #1c4aa6 on #ffffff: 8.14:1 (min 4.5) PASS
     #1c4aa6 on #f4f7fd: 7.59:1 (min 4.5) PASS
     #163b85 on #ffffff: 10.51:1 (min 4.5) PASS
     #ffffff on #1c4aa6: 8.14:1 (min 4.5) PASS
     #ffffff on #163b85: 10.51:1 (min 4.5) PASS
     #7c8597 on #ffffff: 3.71:1 (min 3) PASS
     #7c8597 on #f4f7fd: 3.46:1 (min 3) PASS
     ```
  7. pass. `cmp` of the three supplied assets against `public/` printed `assets identical`.
  8. pass. Preview build at http://127.0.0.1:4322/, 1280x800. Computed values:
     ```
     footer body-copy link color: rgb(28, 74, 166)
     primary .button background-color: rgb(28, 74, 166)
     .eyebrow color: rgb(28, 74, 166)
     primary .button hover background-color: rgb(22, 59, 133)
     first project card, keyboard focus, article outline: rgb(28, 74, 166), 2px solid, offset 2px
     section.section--surface#tldr background-color: rgb(244, 247, 253)
     .callout border-left-color: rgb(28, 74, 166)
     .toc-side__indicator background-color: rgb(28, 74, 166) (height 44, sidebar visible)
     /404 h1: This page doesn't exist
     /404 primary .button background-color: rgb(28, 74, 166)
     GET /favicon.svg: 200, image/svg+xml
     ```
     The favicon SVG rect fill is `#1C4AA6`. Console errors: 0. Failed requests: 0.
  9. partial. At 1280x800 on `/work/canvasser/`, h1 was top 207.4, left 80, width 857.1, height 110.4 and stats were top 517.8, left 80, width 1120, height 135.2. Those match the site-1-09 rects. Home and 390 positions were measured. The mask compare against the site-1-09 screenshots was not run.
  10. pass. Horizontal overflow was 0 at 320, 375, 390, 430 and 1280 on `/`, `/work/canvasser/` and `/404`.
  11. not run. No Lighthouse report was written, so there are no scores.
  12. pass. Screenshots are in `Claude outputs/site-2-01/`: `home-1280.png`, `home-390.png`, `case-1280-mid.png`, `case-390.png`, `404-1280.png`.
  13. pass, ignoring the owner's canvasser files. Raw `git status --short -uall`:
     ```
      M .cursor/rules/a11y.mdc
      M docs/BUILD-LOG.md
      M docs/CLAUDE-HANDOFF.md
      M docs/DECISIONS.md
      M public/apple-touch-icon.png
      M public/favicon.svg
      M public/og.png
      M src/assets/canvasser/logger-interaction-model.png
      M src/styles/tokens.css
     ?? "src/assets/canvasser/Key flows.png"
     ?? src/assets/canvasser/before-paper-survey.jpg
     ?? src/assets/canvasser/decision-sharing-pill.png
     ?? src/assets/canvasser/hero.png
     ?? src/assets/canvasser/logger-figma-concepts.png
     ?? src/assets/canvasser/logger-shipped.png
     ?? src/assets/canvasser/outcome-dashboard.png
     ?? src/assets/canvasser/routes-generated.png
     ?? src/assets/canvasser/routes-walking-rules.png
     ```
     The eight site-2-01 paths are `M`. The canvasser paths are the owner's and were not edited.
- **Screenshots:** `Claude outputs/site-2-01/home-1280.png`, `home-390.png`, `case-1280-mid.png`, `case-390.png`, `404-1280.png`
- **Deviations:** Lighthouse was not completed, so check 11 has no scores. The home and 390 layout compare against the site-1-09 screenshots was not run. `case-1280-mid.png` shows the logger section with the sidebar visible. The contrast script rounds `#1c4aa6` on white to 8.14:1 and muted text on the surface to 7.04:1. Both pass the minimums. The supplied colours and assets were not changed.
- **Open questions:** none
- **Next item:** site-2-02 (image slots)
