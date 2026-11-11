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
