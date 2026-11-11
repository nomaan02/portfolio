# Handoff

- **Item:** site-1-01
- **Status:** done
- **Files created:**
  - `.gitignore`
  - `.editorconfig`
  - `.cursor/rules/a11y.mdc`
  - `.cursor/rules/copy-tone.mdc`
  - `.cursor/rules/no-new-deps.mdc`
  - `docs/DECISIONS.md`
  - `docs/BUILD-LOG.md`
  - `docs/CLAUDE-HANDOFF.md`
  - `README.md`
- **Check results:**
  1. pass. `ls -la` lists `.cursor/`, `.editorconfig`, `.git/`, `.gitignore`, `docs/`, `prompts/`, `README.md`. `find .cursor docs -type f | sort` lists:
     ```
     .cursor/rules/a11y.mdc
     .cursor/rules/copy-tone.mdc
     .cursor/rules/no-new-deps.mdc
     docs/BUILD-LOG.md
     docs/CLAUDE-HANDOFF.md
     docs/DECISIONS.md
     ```
  2. pass. `prompts/` does not appear. Raw output of `git status --short`:
     ```
     ?? .cursor/
     ?? .editorconfig
     ?? .gitignore
     ?? README.md
     ?? docs/
     ```
  3. pass. Raw output of the em-dash grep is empty (exit 1, no matches).
  4. pass. Each `.mdc` file starts with `---`, has a `description:` line, and closes its frontmatter with `---`.
  5. pass. No `package.json` and no `node_modules/`.
- **Deviations from this prompt:** none
- **Open questions for the owner:** none
- **Next item:** site-1-02 (Astro scaffold, tokens, base layout)
