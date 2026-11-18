# Handoff

- **Item:** site-5-04
- **Status:** done
- **Files:**
  - `src/data/logger.ts` (hero title lines, Status fact, after-image label, Next plan title, lead and ship rule)
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings. `5 page(s) built in 1.47s`.
  2. pass. `grep -rn "field test next" src` printed nothing. `grep -n "titleLines" src/data/logger.ts` printed `titleLines: ['One thumb.', 'One mark per door.']`.
  3. pass. `grep -rn "V2.1 prototype" src` printed nothing.
  4. pass. `LC_ALL=C.UTF-8 grep -nP '[\x{2013}\x{2014}]' src/data/logger.ts` printed nothing.
  5. pass. Before the docs edit, `git diff --stat` was `src/data/logger.ts | 12 ++++++------` (6 insertions, 6 deletions). After it, the stat is `src/data/logger.ts`, `docs/BUILD-LOG.md` and `docs/CLAUDE-HANDOFF.md`. `git diff --stat -- package.json package-lock.json` printed nothing.
  6. pass. Preview at `http://127.0.0.1:4321/work/canvasser/logger/`. At 375 and 1280, light and dark: the h1 is two lines, "One thumb." then "One mark per door.". Status is "V2.1 live · field data coming in". The after caption is "After · V2.1 (shipped)". Next shows "Field test, now running", "V2.1 is live. The same five canvassers, measured against their V1 baseline." and "Keep V2.1 if logs are no slower and undos drop. Results go here when the data is in." `scrollWidth - clientWidth` was 0 in all four. At 375 each fact detail is two lines and the same height; Status breaks after "field". The after caption breaks before "(SHIPPED)", the same way the before caption breaks before "(SHIPPED)". At 1280 the four facts and both captions are one line each. The Next lead is two lines at 1280 and four at 375. The ship rule is two lines at 1280 and four at 375, breaking on sentence boundaries. No console errors and no failed requests.
- **Screenshots:** checked in the browser on preview. Hero and Next, light and dark, at 375 and 1280. None saved in the repo.
- **Deviations:** `bash` on PATH is the Windows WSL launcher, so the greps ran in Git Bash. `git diff` printed `LF will be replaced by CRLF` for `src/data/logger.ts`, `docs/BUILD-LOG.md` and `docs/CLAUDE-HANDOFF.md`. The one-line title "One thumb, one mark per door" in `src/data/canvasser.ts` and `src/pages/index.astro` was not changed. HEAD was `0985262`. The build log on that commit ends at site-5-02, so this entry is appended after site-5-02.
- **Open questions:** none
- **Next item:** none. Owner to review the preview, then commit and push
