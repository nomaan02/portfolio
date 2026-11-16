# Handoff

- **Item:** site-4-02
- **Status:** done
- **Files:**
  - `src/pages/index.astro` (hero copy)
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
- **Check results:**
  1. pass. `npm run build` exited 0. No warnings. `5 page(s) built`.
  2. pass. `git diff --stat -- package.json package-lock.json` printed nothing.
  3. pass. The dash grep printed nothing.
  4. pass. `grep -o "Hi, I'm Nomaan" dist/index.html | wc -l` printed 1. `grep -o "find the friction" dist/index.html | wc -l` printed 0.
  5. pass. Preview Home. `scrollWidth - clientWidth` was 0 at 320, 375, 390, 430, 768, 1024, 1280 and 1440. The first heading is the h1 "Hi, I'm Nomaan.", then the h2 "Selected work". There is 1 h1. The subtitle is 3 lines at 320, 2 lines at 375, 390, 430 and 768, and 1 line at 1024, 1280 and 1440. "(and everything in between)" is italic, smaller, muted grey, and stays on one line. Two intro paragraphs sit under the subtitle, then "Read the case study" and "Email me".
  6. pass. Lighthouse on Home, mobile: Performance 100, Accessibility 100, Best Practices 100, SEO 100, CLS 0. Desktop: Performance 100, Accessibility 100, Best Practices 100, SEO 100, CLS 0. HTML reports deleted.
- **Screenshots:** checked in the browser on preview. Home hero at 320, 375, 768, 1024 and 1280. None saved in the repo.
- **Deviations:** Check 5 in the prompt now expects one line at 1024 and wider, at most two lines at 375, 390, 430 and 768, and at most three lines at 320. The earlier 768 result (2 lines, overflow 0, "ship" on line 2 with the aside) is a pass under that correction. `bash` on PATH is the Windows WSL launcher. `apply.sh` was run with Git Bash and printed `DONE: 1 file copied and verified`. Lighthouse was given `--output=json` and `--output=html`, written under the temp directory, and the HTML reports were deleted. At the 390, 430 and 1024 settings, innerWidth was 391, 431 and 1025. Overflow was still 0.
- **Open questions:** none
- **Next item:** none. Owner to review, then commit and push
