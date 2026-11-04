---
name: design-system-tokens
description: Use when starting a UI, defining CSS variables, or replacing scattered color, spacing, radius, and shadow values with one stable token contract.
description_id: Gunakan saat memulai antarmuka, mendefinisikan variabel CSS, atau mengganti nilai warna, jarak, radius, dan bayangan yang tersebar dengan satu kontrak token yang stabil.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: foundation
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [design-system, tokens, css-variables, theming, consistency]
source: https://github.com/ibelick/ui-skills
original_author: Julien Thibeaut
original_license: MIT
upstream_commit: 73fb128d046d1f0d74c2909cd26eb616e3415567
---

# Design System Tokens

Build one source of truth before building screens. Every visible value that repeats must be a
token; every token must have a job.

## When to use

- A new product surface needs a visual foundation.
- A page mixes hex values, arbitrary spacing, and five different radii.
- Light and dark mode drift because colors are hard-coded.
- A team needs a contract that a designer and an agent can both read.

Do not use this skill for a one-off decorative page that will never be maintained.

## Inputs to ask for

Ask only what cannot be inferred from the repository:

1. Brand colors and the one accent that must survive.
2. Product type and density: marketing page, dashboard, admin, storefront, editorial.
3. Existing framework: plain CSS, Tailwind, CSS Modules, or CSS-in-JS.
4. Theme requirements: light only, dark only, or both.
5. Accessibility target: WCAG AA is the default; AAA only when required.

If the user cannot answer, choose a defensible default, state it in one line, and continue.

## Token architecture

Use three tiers. Never let a component reference a tier-1 value directly.

| Tier | Name | Example | Rule |
|---|---|---|---|
| 1 | Primitive | `--blue-600: #2f5fe0` | Raw values only. No meaning. |
| 2 | Semantic | `--color-action: var(--blue-600)` | Describes purpose. Theme switches here. |
| 3 | Component | `--button-bg: var(--color-action)` | Optional; only for values a component owns. |

### Required semantic groups

```css
:root {
  /* Surface */
  --color-bg: #e6edf7;
  --color-surface: #e6edf7;
  --color-surface-raised: #eef3fb;
  --color-border: #cfdcee;

  /* Text */
  --color-text: #1b2740;
  --color-text-muted: #4a5a78;
  --color-text-inverse: #ffffff;

  /* Action */
  --color-action: #2f5fe0;
  --color-action-hover: #2552c9;
  --color-action-text: #ffffff;
  --color-focus: #1f4fd8;

  /* Status */
  --color-success: #1d6b45;
  --color-warning: #7a4a00;
  --color-danger: #a02121;
  --color-info: #1b4f9c;

  /* Shape and depth */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --shadow-raised: 8px 8px 18px #b9c8dd, -8px -8px 18px #ffffff;
  --shadow-pressed: inset 5px 5px 10px #b9c8dd, inset -5px -5px 10px #ffffff;

  /* Space */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;

  /* Type */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
  --text-2xl: clamp(2rem, 4vw, 3rem);

  /* Motion */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 120ms;
  --duration-base: 200ms;
}
```

### Dark mode

Override tier-2 tokens only. Tier-1 values stay constant unless the palette itself must change.
Test contrast again; do not assume a light-mode pair survives inversion.

```css
[data-theme="dark"] {
  --color-bg: #0f1726;
  --color-surface: #131d30;
  --color-surface-raised: #18243a;
  --color-border: #26344d;
  --color-text: #e8eefb;
  --color-text-muted: #a6b5cf;
  --color-action: #7ea2ff;
  --color-action-text: #0b1220;
  --color-focus: #a8c0ff;
  --shadow-raised: 8px 8px 18px #070c15, -8px -8px 18px #1e2c44;
  --shadow-pressed: inset 5px 5px 10px #070c15, inset -5px -5px 10px #1e2c44;
}
```

## Workflow

1. **Inventory.** List every color, font size, radius, shadow, and spacing value already in
   the codebase. Count duplicates. If there are more than 12 ad-hoc values, you have a
   consolidation job, not a design job.
2. **Name by role, not by appearance.** `--color-action`, not `--color-blue`. A rename to
   `--color-brand` must not require editing 40 components.
3. **Define the scale.** Use a 4px base. Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64.
   Radii: 8, 14, 22. Five type sizes do the visible work; more is noise.
4. **Write the contract file.** One `tokens.css` with tier-1 and tier-2 values, plus a
   `[data-theme="dark"]` block. No component styles in this file.
5. **Migrate mechanically.** Replace literals with semantic tokens in this order: color,
   spacing, radius, shadow, font size. Run the app after each category.
6. **Verify.** Check contrast, focus visibility, dark mode, and that no component imports a
   primitive directly.

## Decision rules

- **Two values that look different but mean the same thing must become one token.** Two values
  that look the same but mean different things must stay separate.
- **Never encode state in a new color.** Use existing tokens plus a state attribute:
  `[data-state="danger"]` changes the semantic pair, not the component.
- **Density is a theme, not a fork.** Define `--density-space` and multiply the scale; do not
  duplicate every component.
- **Shadows are optional.** If the theme separates surfaces by tone, the shadow token can be
  `none`. Do not add depth to satisfy a checklist.
- **Motion tokens are part of the system.** Animations that invent their own duration drift.

## Defaults

| Decision | Default |
|---|---|
| Spacing base | 4px |
| Radius | 8 / 14 / 22px |
| Body size | 16px |
| Minimum touch target | 44×44px |
| Contrast | WCAG AA: 4.5:1 body, 3:1 large text and UI |
| Font stack | System UI, no network request |
| Theme switch | `data-theme` on `<html>` |
| Dark mode strategy | Class/attribute, not `prefers-color-scheme` alone |

## Anti-patterns

- A `theme.css` with 90 color tokens and no usage rules.
- Naming tokens after hex values (`--gray-200`) and using them as semantics.
- Different radii for button, input, and card with no hierarchy reason.
- A dark mode achieved by `filter: invert()`.
- Shadows on flat surfaces just to look “designed”.
- Tokens defined in three files that disagree.
- Component-level `!important` to override the system.

## Pre-handoff checklist

- [ ] Tokens live in exactly one file per layer.
- [ ] No component uses a raw hex value outside the token file.
- [ ] Light and dark mode both pass contrast checks.
- [ ] Focus ring is a token and is visible on every surface.
- [ ] Radii and spacing come from the scale.
- [ ] Reduced-motion overrides exist for every animated token.
- [ ] A new team member can add a component without inventing a value.

## Example prompt

> “Buat design system untuk dashboard admin biru lembut. Butuh light dan dark mode, tabel
> padat, dan tombol utama yang jelas.”

Expected result: one `tokens.css` with primitive + semantic tiers, a dark override, a 4px
spacing scale, three radii, two shadow recipes, and a note naming the three decisions the
user must confirm (brand accent, density, typeface).

## Bahasa Indonesia

**Kapan dipakai:** saat memulai UI baru atau merapikan nilai visual yang berserakan.

**Langkah:** inventaris nilai yang ada → beri nama sesuai peran → susun skala 4px → tulis satu
file token → migrasi komponen → verifikasi kontras dan dark mode.

**Default:** jarak 4px, radius 8/14/22px, body 16px, target sentuh 44px, kontras AA.

**Larangan:** hex langsung di komponen, token dinamai sesuai warna, dark mode dengan
`filter: invert()`, bayangan dekoratif tanpa alasan, tiga file token yang saling bertentangan.

**Selesai bila:** tidak ada nilai mentah di komponen, mode terang dan gelap lolos kontras, dan
komponen baru tidak perlu mengarang nilai.

## Attribution

Ditulis ulang dari `ibelick/ui-skills` (MIT, Julien Thibeaut). Teks lisensi asli:
`LICENSE-UPSTREAM-ibelick.txt`. Perubahan: disusun ulang menjadi kontrak tiga lapis, contoh
token dan checklist ditambahkan.
