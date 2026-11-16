# Handoff

- **Item:** site-5-02
- **Status:** done
- **Files:**
  - `src/components/ProjectCard.astro` (chips, image well, depth and hover lift)
  - `src/components/ChipList.astro` (tool tags restyled as quiet mono labels)
  - `src/components/Section.astro` (optional section number)
  - `src/pages/index.astro` (card order and chips, NakoLabs card, QuantTrader image, section numbers, hero frame label)
  - `docs/DECISIONS.md` (Home cards row, date)
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings. `5 page(s) built in 1.61s`.
  2. pass. `git diff --stat -- package.json package-lock.json` printed nothing.
  3. pass. The dash grep printed nothing.
  4. pass. The hex grep printed nothing.
  5. pass. The privacy grep printed nothing.
  6. pass. `grep -o '<h3' dist/index.html | wc -l` printed 9. `grep -o 'class="chip ' dist/index.html | wc -l` printed 13. `grep -o '<img' dist/index.html | wc -l` printed 3. `grep -o 'instagram.com/nako.labs' dist/index.html | wc -l` printed 1.
  7. pass. `git status --short -uall` matches the prompt list after this handoff.
  8. pass. Preview at `http://localhost:4321/`. At 1280, light and dark: the mono label "home / hero" with a blue square sits above the outlined hero frame. "01" is blue, then "Work", above "Selected work". The D2D card is full width, image in a recessed panel on the left, then a green "Live" chip with a dot, "Case study", meta "First Home Improvements · 2026", the title, summary, quiet mono tool tags and "Read the case study →". Below it, 8 cards in 2 columns: Logger deep-dive, QuantTrader, Barclays, Everlink, Looptech, VoxPrompt, CISI, NakoLabs. Logger and QuantTrader have an image on top, each in a recessed panel with its own thin border. Everlink has an amber "Paused" chip with a dot. Looptech has a blue "Ongoing" chip with a dot. NakoLabs links to `https://www.instagram.com/nako.labs/`. "02" is blue, then "About", above "A designer who builds". Cards are solid, 1px border, soft shadow in light and a faint inset top highlight in dark. Hovering the linked D2D card darkened its border and lifted it 2px. The Barclays and Looptech cards have no link and the Barclays card did not change when hover was forced. Keyboard focus on the D2D title shows a 2px solid accent ring around the whole card, offset 2px. No broken images. At 390 everything stacks in one column, the D2D image is on top, and the chips and tool tags wrap inside the card. On `/work/canvasser/` and `/work/ai-workflow/`, the tool list under the hero is quiet mono tags with a 1px border and 6px corners. `scrollWidth - clientWidth` was 0 on Home, `/work/canvasser/` and `/work/ai-workflow/` at 320, 375, 390, 430, 768, 1024, 1280 and 1440, in both themes.
  9. pass. Lighthouse on `/`, mobile: Performance 100, Accessibility 100, Best Practices 100, SEO 100, CLS 0. Desktop: Performance 100, Accessibility 100, Best Practices 100, SEO 100, CLS 0. HTML reports deleted.
- **Screenshots:** checked in the browser on preview. Home light and dark at 1280 (hero label, featured card, grid, About), Home dark at 390 (stacked card, image on top, wrapping tags), and the tool lists on `/work/canvasser/` and `/work/ai-workflow/`. None saved in the repo.
- **Deviations:** `bash` on PATH is the Windows WSL launcher. `apply.sh` was run with Git Bash and printed `DONE: 5 files copied and verified`. An old preview server (pid 32368) was still bound to port 4321. `npm run preview` said another preview server was already running. `npx astro preview stop` stopped it, then `npm run preview` printed `Local http://localhost:4321/`. In the embedded browser the 390 setting reported innerWidth 391. A headless check at width 390 reported innerWidth 390 and overflow 0. Tab key events in that embedded browser did not move focus, so the card ring was checked by forcing `:focus-visible` on the title link and looking at the ring. `git diff` printed `LF will be replaced by CRLF` for the five copied files. Their SHA-256 already matched. Lighthouse wrote two HTML reports in the repo. The scores were read from those files, then both reports were deleted.
- **Open questions:** none
- **Next item:** none. Owner to review the preview, then commit and push
