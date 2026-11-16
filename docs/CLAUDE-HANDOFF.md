# Handoff

- **Item:** site-5-01
- **Status:** done
- **Files:**
  - `src/scripts/site.ts` (theme toggle, cursor spotlight, fade-ups)
  - `src/styles/tokens.css` (light and dark colour tokens, shadows)
  - `src/styles/global.css` (canvas and dot grid, buttons, spotlight, fade-up, print)
  - `src/layouts/BaseLayout.astro` (inline theme script, `color-scheme` meta, spotlight layer, site script)
  - `src/components/Header.astro` (theme toggle button, header fill)
  - `src/components/Section.astro` (`reveal` class, outlined frame for `tone="surface"`)
  - `src/components/AuthorityLadder.astro`, `BarChart.astro`, `Callout.astro`, `CaseStudyNav.astro`, `CodeBlock.astro`, `DataTable.astro`, `DecisionCard.astro`, `FigureSlot.astro`, `FlowDiagram.astro`, `InfoCard.astro`, `PersonaCard.astro`, `PhoneShot.astro`, `ProjectCard.astro` (token renames and theme fixes)
  - `src/pages/index.astro` (hero frame)
  - `src/pages/work/canvasser.astro` (token rename)
  - `src/pages/work/canvasser/logger.astro` (page tokens moved to `tokens.css`)
  - `.cursor/rules/a11y.mdc`
  - `docs/DECISIONS.md`
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Check results:**
  1. pass. The first `npm run build` hit `EBUSY` and crashed. The re-run exited 0. No warnings. `5 page(s) built in 1.02s`.
  2. pass. `git diff --stat -- package.json package-lock.json` printed nothing.
  3. pass. The dash grep printed nothing.
  4. pass. The hex grep printed nothing.
  5. pass. The privacy grep printed nothing.
  6. pass. Each of the three `grep -l ... | wc -l` commands printed 5.
  7. pass. `git status --short -uall` matches the prompt list after this handoff.
  8. pass. Preview at `http://localhost:4321/`. Storage cleared first. With the OS dark, all 5 pages loaded dark and a reload stayed dark. With the OS light, all 5 loaded light and a reload stayed light. The toggle is a 44px square at the top right: moon in light, sun in dark. A click switches at once, and the next page keeps the choice. Tab shows a 2px solid focus ring, offset 2px. Enter and Space both toggle it. The accessible name is "Dark theme" and `aria-pressed` is `true` in dark. The dot grid is faint and 24px in both themes. The spotlight grows the dots (2px, darker in light, brighter in dark) and fades by 180px. After scrolling 96px the hot dots stayed lined up (`background-position: 0px -96px`). It does not show with reduced motion or a coarse pointer. The Home hero and About section are transparent frames with a 1px border. Primary buttons are `#8AD0FF` (`rgb(138, 208, 255)`) with dark text in both themes. In dark mode, callouts, the Logger flow, nodes, tags, the back card, the authority ladder and tables read clearly. Code stays dark. Logger specimen panels stay light. `scrollWidth - clientWidth` was 0 on all 5 pages at 320, 375, 390, 430, 768, 1024, 1280 and 1440, in both themes. Sections below the first screen fade up 12px once. Nothing on the first screen starts hidden. Reduced motion shows everything at once. Logger and 404 have no fade-ups.
  9. pass. Lighthouse on `/`, mobile: Performance 100, Accessibility 100, Best Practices 100, SEO 100, CLS 0. Desktop: Performance 100, Accessibility 100, Best Practices 100, SEO 100, CLS 0. On `/work/canvasser/logger/`, mobile: Performance 99, Accessibility 100, Best Practices 100, SEO 100, CLS 0. Desktop: Performance 100, Accessibility 100, Best Practices 100, SEO 100, CLS 0. HTML reports deleted.
- **Screenshots:** checked in the browser on preview. Home light and dark, the focus ring, the About frame, the Logger flow, specimen panels and back card, and the authority ladder. None saved in the repo.
- **Deviations:** `bash` on PATH is the Windows WSL launcher. `apply.sh` was run with Git Bash and printed `DONE: 24 files copied and verified`. The first build hit EBUSY, so it was re-run once. An old preview server (pid 26692) was still bound to port 4321. `npx astro preview stop` stopped it, then `npm run preview` printed `Local http://localhost:4321/`. `curl -s http://localhost:4321/ | grep -o 'aria-label="Dark theme"' | head -1` printed `aria-label="Dark theme"`. Lighthouse was given `--output=json` and `--output=html`, written under the temp directory, and the HTML reports were deleted.
- **Open questions:** none
- **Next item:** site-5-02 (Home grid, chips and card depth). Owner to review the preview, then commit and push site-5-01 first
