# Third-Party Notices

This repository contains original work plus **rewritten derivative works** of permissively
licensed Agent Skills. Upstream copyright notices and license texts are preserved. They are
**not** replaced with the name of this repository.

Verified on **4 November 2026** against the repositories below. See `docs/sources.md` for the
full research log and `docs/rejected-sources.md` for what was rejected and why.

## Sources used

### Apache License 2.0 — Anthropic, PBC

- Repository: https://github.com/anthropics/skills
- Path read: `skills/frontend-design`
- Commit: `ca45fc496a3436251f191354091d557da31c15b5`
- License file: `docs/upstream-licenses/anthropic-apache-2.0.txt`
- Used by: `skills/anti-slop-design/LICENSE-UPSTREAM-anthropic.txt`, `skills/typography-system/LICENSE-UPSTREAM`, `skills/ux-writing/LICENSE-UPSTREAM`
- Apache NOTICE: upstream ships no separate NOTICE file

### Apache License 2.0 — Copyright 2025 Paul Bakaus

- Repository: https://github.com/pbakaus/impeccable
- Path read: `skill/`
- Commit: `695cea5c6d1cbd420fc331375c7ef126a774e5f7`
- License file: `docs/upstream-licenses/paulbakaus-apache-2.0.txt`
- Used by: `skills/anti-slop-design/LICENSE-UPSTREAM-paulbakaus.txt`, `skills/empty-error-states/LICENSE-UPSTREAM`, `skills/ui-audit-review/LICENSE-UPSTREAM`
- Apache NOTICE: `docs/upstream-licenses/impeccable-NOTICE.md`, copied as `NOTICE-UPSTREAM.md`

### MIT — Copyright (c) 2024 Next Level Builder

- Repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Path read: `src/`
- Commit: `ccce51cba388476d4f403091ddb91636d5cd9fed`
- License file: `docs/upstream-licenses/nextlevelbuilder-mit.txt`
- Used by: `skills/color-contrast/LICENSE-UPSTREAM`, `skills/dark-mode/LICENSE-UPSTREAM`, `skills/responsive-adaptive/LICENSE-UPSTREAM`, `skills/theme-recipes/LICENSE-UPSTREAM-nextlevelbuilder.txt`


### MIT — Copyright (c) 2026 Leonxlnx

- Repository: https://github.com/Leonxlnx/taste-skill
- Path read: `skills/taste-skill`
- Commit: `12af471f627f866411b4bd785b19646d3672784c`
- License file: `docs/upstream-licenses/leonxlnx-mit.txt`
- Used by: `skills/anti-slop-design/LICENSE-UPSTREAM`, `skills/dashboard-admin/LICENSE-UPSTREAM`, `skills/spacing-layout/LICENSE-UPSTREAM`


### MIT — Copyright (c) 2026 Meng To

- Repository: https://github.com/MengTo/Skills
- Path read: `agent-skills/web-design`
- Commit: `1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af`
- License file: `docs/upstream-licenses/mengto-mit.txt`
- Used by: `skills/motion-system/LICENSE-UPSTREAM`, `skills/tailwind-shadcn/LICENSE-UPSTREAM`, `skills/theme-recipes/LICENSE-UPSTREAM`, `skills/ui-components/LICENSE-UPSTREAM`


### MIT — Copyright (c) 2026 Julien Thibeaut

- Repository: https://github.com/ibelick/ui-skills
- Path read: `skills/`
- Commit: `73fb128d046d1f0d74c2909cd26eb616e3415567`
- License file: `docs/upstream-licenses/ibelick-mit.txt`
- Used by: `skills/accessibility-wcag/LICENSE-UPSTREAM`, `skills/design-system-tokens/LICENSE-UPSTREAM`, `skills/frontend-performance/LICENSE-UPSTREAM`



## Skills and their upstream basis

| Skill | Upstream license(s) | Changes |
|---|---|---|
| `accessibility-wcag` | MIT — Copyright (c) 2026 Julien Thibeaut | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/accessibility-wcag/MODIFICATIONS.md`. |
| `anti-slop-design` | MIT — Copyright (c) 2026 Leonxlnx<br>Apache License 2.0 — Copyright 2025 Paul Bakaus<br>Apache License 2.0 — Anthropic, PBC | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/anti-slop-design/MODIFICATIONS.md`. |
| `color-contrast` | MIT — Copyright (c) 2024 Next Level Builder | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/color-contrast/MODIFICATIONS.md`. |
| `dark-mode` | MIT — Copyright (c) 2024 Next Level Builder | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/dark-mode/MODIFICATIONS.md`. |
| `dashboard-admin` | MIT — Copyright (c) 2026 Leonxlnx | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/dashboard-admin/MODIFICATIONS.md`. |
| `design-system-tokens` | MIT — Copyright (c) 2026 Julien Thibeaut | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/design-system-tokens/MODIFICATIONS.md`. |
| `empty-error-states` | Apache License 2.0 — Copyright 2025 Paul Bakaus | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/empty-error-states/MODIFICATIONS.md`. |
| `frontend-performance` | MIT — Copyright (c) 2026 Julien Thibeaut | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/frontend-performance/MODIFICATIONS.md`. |
| `motion-system` | MIT — Copyright (c) 2026 Meng To | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/motion-system/MODIFICATIONS.md`. |
| `responsive-adaptive` | MIT — Copyright (c) 2024 Next Level Builder | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/responsive-adaptive/MODIFICATIONS.md`. |
| `spacing-layout` | MIT — Copyright (c) 2026 Leonxlnx | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/spacing-layout/MODIFICATIONS.md`. |
| `tailwind-shadcn` | MIT — Copyright (c) 2026 Meng To | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/tailwind-shadcn/MODIFICATIONS.md`. |
| `theme-recipes` | MIT — Copyright (c) 2026 Meng To<br>MIT — Copyright (c) 2024 Next Level Builder | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/theme-recipes/MODIFICATIONS.md`. |
| `typography-system` | Apache License 2.0 — Anthropic, PBC | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/typography-system/MODIFICATIONS.md`. |
| `ui-audit-review` | Apache License 2.0 — Copyright 2025 Paul Bakaus | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/ui-audit-review/MODIFICATIONS.md`. |
| `ui-components` | MIT — Copyright (c) 2026 Meng To | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/ui-components/MODIFICATIONS.md`. |
| `ux-writing` | Apache License 2.0 — Anthropic, PBC | Rewritten, condensed, reorganized; new preview, checklist, and bilingual section. See `skills/ux-writing/MODIFICATIONS.md`. |

## Apache-2.0 NOTICE

The following notice is reproduced verbatim from `pbakaus/impeccable`, as required by
Apache License 2.0, section 4(d):

```text
# Third-Party Notices

This project includes content derived from third-party work, used under the terms of its original license.

## Platform Design Skills

The `skill/reference/ios.md` and `skill/reference/android.md` platform reference files are distilled from ehmo's `platform-design-skills` (Apple Human Interface Guidelines and Material Design 3 rules), rewritten in Impeccable's voice.

**Original work:** https://github.com/ehmo/platform-design-skills
**Original license:** MIT
**Author:** ehmo
```

## Full license texts

- Apache License 2.0 (Anthropic, PBC): `docs/upstream-licenses/anthropic-apache-2.0.txt`
- Apache License 2.0 (Copyright 2025 Paul Bakaus): `docs/upstream-licenses/paulbakaus-apache-2.0.txt`
- MIT (Next Level Builder): `docs/upstream-licenses/nextlevelbuilder-mit.txt`
- MIT (Leonxlnx): `docs/upstream-licenses/leonxlnx-mit.txt`
- MIT (Meng To): `docs/upstream-licenses/mengto-mit.txt`
- MIT (Julien Thibeaut): `docs/upstream-licenses/ibelick-mit.txt`

Verified but **not currently used by any skill**: `palamut62/ui-design-skills-pack`
(`docs/upstream-licenses/palamut62-mit.txt`). It is recorded in `docs/sources.md` as an accepted
candidate; no text from it is included.

## Works referenced but not copied

`vercel-labs/agent-skills` (https://github.com/vercel-labs/agent-skills, commit
`1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`) has **no license file**. It is referenced for
further reading only. No text, code, or file structure from it was copied. The same applies to
the rejected sources listed in `docs/rejected-sources.md`.

## No affiliation

This repository is not affiliated with, sponsored by, or endorsed by Anthropic, Paul Bakaus,
Next Level Builder, Leonxlnx, Meng To, Julien Thibeaut, palamut62, or Vercel Labs.

## Not legal advice

This document records engineering practice, not legal advice. Review it with qualified counsel
before relying on it commercially.
