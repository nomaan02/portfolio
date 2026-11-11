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
