# Build log

Newest entry at the bottom. One entry per prompt file.

Format:
## <item ID> · <date> · <done | partial | blocked>
- Changed: <files>
- Checks: <results>
- Notes: <anything the reviewer must know>

## site-1-01 · 2026-11-11 · done
- Changed: .gitignore, .editorconfig, .cursor/rules/a11y.mdc, .cursor/rules/copy-tone.mdc, .cursor/rules/no-new-deps.mdc, docs/DECISIONS.md, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md, README.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass
- Notes: `git status --short` prints a new directory as one line, so the 9 files show as 5 paths (`.cursor/`, `.editorconfig`, `.gitignore`, `README.md`, `docs/`). `prompts/` does not appear.

## site-1-02 · 2026-11-11 · partial
- Changed: .nvmrc, package.json, package-lock.json, astro.config.mjs, tsconfig.json, public/fonts/InterVariable.woff2, public/fonts/Inter-LICENSE.txt, src/styles/tokens.css, src/styles/global.css, src/layouts/BaseLayout.astro, src/components/Header.astro, src/components/Footer.astro, src/pages/index.astro, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 partial
- Notes: Node v24.19.0. Astro 7.4.10. @astrojs/sitemap 3.7.4. Inter 4.1, InterVariable.woff2 is 352240 bytes. Lighthouse was not run: the CLI is not installed, and installing it would add a package outside the allow list. Chromium logged a 404 for /favicon.ico. The page does not link a favicon.

## site-1-03 · 2026-11-11 · done
- Changed: src/styles/tokens.css, src/styles/global.css, src/components/Header.astro, src/components/Footer.astro, src/components/Section.astro, src/components/Stat.astro, src/components/StatGrid.astro, src/components/ChipList.astro, src/components/DecisionCard.astro, src/components/ProjectCard.astro, src/components/Figure.astro, src/assets/sample/figure-sample.png, src/pages/index.astro, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass
- Notes: sharp printed `ok`. Sample image is a flat fill, so the picture areas look empty. Horizontal overflow was 0 at 320, 375, 390, 430 and 1280. Chromium logged a 404 for /favicon.ico. The page does not link a favicon.

## site-1-04 · 2026-11-11 · done
- Changed: public/og.png, public/favicon.svg, public/apple-touch-icon.png, public/robots.txt, public/nomaan-akram-cv.pdf, src/layouts/BaseLayout.astro, src/pages/index.astro, docs/DECISIONS.md, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md, deleted src/assets/sample/figure-sample.png and the empty src/assets/sample/ and src/assets/ folders
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass, 9 pass, 10 pass, 11 pass
- Notes: CV PDF present, copied from Claude outputs/site-1-04/assets/ and left in place there. The first `npm run build` hit a Windows file lock (EBUSY) and crashed. The re-run exited 0 with no warnings. At 1280 the featured card is 1120px wide, and ProjectCard's featured grid (3fr 2fr) puts the text in the first column only, so the second column is about 448px of empty card. The component was not edited. Hero h1 is 2 lines at 375. Horizontal overflow was 0 at 320, 375, 390, 430 and 1280. Preview logged no console errors and no failed requests.

## site-1-05 · 2026-11-11 · partial
- Changed: src/components/ProjectCard.astro, src/pages/index.astro, src/data/canvasser.ts, src/components/InfoCard.astro, src/components/Callout.astro, src/pages/work/canvasser.astro, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass, 9 fail, 10 pass, 10b pass, 11 pass
- Notes: Check 9 matches "street names" twice. The pattern's word boundary sits only before the group, so "street name" matches inside "street names". The strings are the approved copy and were not edited. The dash grep needs `LC_ALL=C.UTF-8` in this Git Bash; that run printed nothing. Featured card at 1280 is flex, body 1118px inside a 1120px card, summary capped at 726px. Case study headings are 1 h1, 8 h2 and 33 h3. Horizontal overflow was 0 at 320, 375, 390, 430 and 1280.

## site-1-06 · 2026-11-11 · done
- Changed: src/assets/canvasser/logger-sketch.png, src/assets/canvasser/logger-interaction-model.png, src/data/canvasser.ts, src/pages/work/canvasser.astro, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass
- Notes: Images copied from `Claude outputs/site 1-06/assets/` (space in the folder name). `site-1-06` does not exist. Sources were left in place. logger-sketch.png is 840×858. logger-interaction-model.png is 2200×1664. Shipped image not supplied. Both are at least 800px wide. A 1280 load transferred 559,595 bytes (HTML 31,883, font 352,240, CSS 15,055, favicon 8,057, sketch WebP 72,326, interaction WebP 80,034).

## site-1-07 · 2026-11-11 · done
- Changed: src/assets/canvasser/logger-interaction-model.png, public/fonts/InterVariable.woff2, src/data/canvasser.ts, src/pages/404.astro, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass, 9 pass, 10 pass, 11 pass, 12 pass, 13 pass, 14 pass
- Notes: Lighthouse was 100/100/100/100 on home and the case study, mobile and desktop. Font file is 101,796 bytes. A cold load transferred 110,892 bytes for Home and 117,539 bytes for the case study before the lazy figures. Sitemap does not list 404, so astro.config.mjs was not changed. No QA score was under target.

## site-1-09 · 2026-11-11 · done
- Changed: src/components/CaseStudyNav.astro, src/pages/work/canvasser.astro, src/styles/tokens.css, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass, 9 pass, 10 pass, 11 pass, 12 pass, 13 pass, 14 pass
- Notes: Lighthouse on /work/canvasser/ was Performance 100, Accessibility 100, Best Practices 100, SEO 100, mobile and desktop. CLS 0 on both. The supplied sidebar observer treated a hero nav that was still below the fold as already gone, so the sidebar covered the title at 1280x800, and a jump that skipped that nav never revealed the sidebar. The script now reads those rectangles on scroll. Astro scoped the new mobile `section[id]` rule to the page, so case-study sections keep a 24px scroll margin. The Outcome h2 still clears the 46px bar (h2 top about 106px).
