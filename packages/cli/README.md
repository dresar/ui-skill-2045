# ui-skill-2045

Install curated Agent Skills for accessible, intentional UI work.

```bash
npx ui-skill-2045 list
npx ui-skill-2045 add anti-slop-design
npx ui-skill-2045 add --all --agent cursor
npx ui-skill-2045 add --theme soft-blue-neumorphism --dir .claude/skills
npx ui-skill-2045 update
```

- 18 skills, 11 themes, Indonesian and English.
- No runtime dependencies.
- Never overwrites an existing skill directory without `--force`.
- `remove` refuses to delete a directory that has no `SKILL.md`.

Agents: `claude`, `codex`, `agents`, `github`, `copilot`, `cursor`, `gemini`, `windsurf`,
`antigravity`. Use `--dir` for any other location.

Review a skill before installing it. Skills are instructions your agent will run.

License: MIT for original work; derivative skills keep their upstream licenses. See the
repository's `THIRD_PARTY_NOTICES.md`. Not legal advice.
