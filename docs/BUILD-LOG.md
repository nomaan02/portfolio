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

## site-2-01 · 2026-11-11 · partial
- Changed: src/styles/tokens.css, public/favicon.svg, public/apple-touch-icon.png, public/og.png, docs/DECISIONS.md, .cursor/rules/a11y.mdc, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass, 9 partial, 10 pass, 11 not run, 12 pass, 13 pass
- Notes: Re-ran checks 1, 3 and 6 on 2026-11-11. Build exited 0 with no warnings. The contrast script prints 8.14:1 and 7.04:1 where the token comments say 8.15 and 7.05. Every line is PASS. Case study h1 and stats at 1280x800 match the site-1-09 rects exactly. Home and 390 were measured, and the screenshot mask compare was not run. Lighthouse produced no reports and no scores. Check 13 also lists the owner's canvasser image files. Those were left untouched. Preview checks used the preview already serving http://127.0.0.1:4322/.

## site-2-02 · 2026-11-11 · partial
- Changed: src/components/FigureSlot.astro, src/data/canvasser.ts, src/pages/work/canvasser.astro, src/pages/index.astro, docs/DECISIONS.md, .cursor/rules/copy-tone.mdc, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 partial, 4 pass, 5 pass, 6 partial, 7 pass, 8 pass, 9 pass, 10 pass, 11 pass
- Notes: Full Lighthouse runs were Performance 100, Accessibility 100, Best Practices 100, SEO 100 on home and the case study, mobile and desktop. CLS 0. Case study transfer size was 134 KiB mobile (137,640 bytes) and 212 KiB desktop (216,652 bytes). Desktop LCP on the case study is the hero image. Mobile LCP is the lead paragraph, on both runs. `grep -c card__img` prints 2 because the inlined stylesheet is a second matching line. One featured image is in the HTML. A first home mobile run scored Performance 89 while another Chrome was busy. The quiet re-run scored 100.

## site-2-04 · 2026-11-11 · done
- Changed: src/data/canvasser.ts, src/components/FigureSlot.astro, src/assets/canvasser/before-paper-survey.jpg, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass, 9 pass, 10 pass
- Notes: Lighthouse on /work/canvasser/ was Performance 100, Accessibility 100, Best Practices 100, SEO 100, mobile and desktop. CLS 0 on both. The first `npm run build` crashed with a memory allocation error. The re-run exited 0 with no warnings. At 1280 the text column ends at 767px and the image starts at 815px, 352px wide. The panel stacks on 390 and 375. The survey file was copied as-is.

## site-2-05 · 2026-11-11 · done
- Changed: src/data/canvasser.ts, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass
- Notes: The Round 1 sketch uses the same aside panel as the Context survey. At 1280 both panels have a 20px radius, 32px padding and a 25px lead. The sketch text ends at 767px and the image starts at 815px, 352px wide. Round 2 stays full width at 880px with its caption. During the checks, hero.png was briefly a black 13KB file. It was restored from the last commit and is not part of this change.

## site-2-06 · 2026-11-11 · blocked
- Changed: src/data/canvasser.ts (routes-walking-rules.png alt only), docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 fail, 5 pass, 6 not run, 7 fail
- Notes: Check 4 printed 11 twice. Expected 10. The eleventh img is manager-flows.png. The prompt expected an untracked file named "Key flows.png". That file is not in src/assets/canvasser/. manager-flows.png is untracked instead, and it matches the existing outcome slot, so it renders. The alt text in EDIT 1 was left as specified. No image was touched. Checks 6 and 7 were not used to attempt a fix.

## site-1-10 · 2026-11-11 · done
- Changed: src/data/canvasser.ts, src/components/PersonaCard.astro, src/pages/work/canvasser.astro, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass, 8 pass, 9 pass, 10 pass
- Notes: Copy is the prompt text, including the time-log TODO. `grep -n "TODO(owner)" src/data/canvasser.ts` printed one line: `TODO(owner): the headline figure, for example minutes lost per shift.` Headings are 1 h1, 9 h2, 43 h3 and 9 h4, with no skipped levels. The section nav has 9 items and Research is third. On desktop the sidebar active state and the mobile label move from TL;DR to Research. On a 390px width the sticky bar does the same. Horizontal overflow was 0 at 320, 375, 390, 430, 1280 and 1440. Method and persona grids are 1 column below 64rem and 3 columns from 1024px up. No card text overflowed its card. Section backgrounds match the tone table. Info cards and persona cards stay white with a 1px border on the research surface. Lighthouse on /work/canvasser/ was Performance 100, Accessibility 100, Best Practices 100, SEO 100, mobile and desktop. CLS 0 on both. Quote callouts and the fidelity note use Callout, so on a surface section the fill matches the section and the accent bar marks the edge.

## site-2-08 · 2026-11-11 · done
- Changed: src/data/canvasser.ts (time-log card body only), docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass
- Notes: The time-log body now ends at "project what a better tool could save." `grep -rn "TODO" src/` printed nothing. `grep -c "TODO" dist/work/canvasser/index.html` printed 0. At 1440 the three research method cards share one row (tops all 80px) and no card text overflowed. Site-1-10 is still uncommitted and was not otherwise changed.

## site-2-10 · 2026-11-12 · done
- Changed: src/components/Header.astro, src/pages/index.astro, deleted public/nomaan-akram-cv.pdf, docs/BUILD-LOG.md, docs/CLAUDE-HANDOFF.md
- Checks: 1 pass, 2 pass, 3 pass, 4 pass, 5 pass, 6 pass, 7 pass
- Notes: `git rm` staged the PDF deletion. The other edits are unstaged. Nothing was committed. `npm run build` exited 0 with no warnings. `/nomaan-akram-cv.pdf` returns 404, and the file is not in `dist/`. At 375, 768 and 1280 the header nav (Work, Email) is one line and horizontal overflow was 0. At 375 the hero pair wraps (Read the case study, then Email me) with a 12px gap, both inside the container. The About pair (Email me, GitHub) stays side by side. At 768 and 1280 both pairs sit side by side. The same header is one line with overflow 0 on the case study at 375, 768 and 1280, and on the 404 page at 375. The Barclays card now says 30%.
