---
name: theme-recipes
description: Use when choosing or implementing a visual theme (neumorphism, glass, aurora, brutalist, neon, bento, editorial, clay, and others) and when a theme must work in light, dark, and accessible combinations.
description_id: Gunakan saat memilih atau menerapkan tema visual (neumorphism, glass, aurora, brutalist, neon, bento, editorial, clay, dan lainnya) dan ketika tema harus bekerja dalam mode terang, gelap, dan kombinasi yang aksesibel.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: theme
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [themes, tokens, palette, light-mode, dark-mode, art-direction]
source: https://github.com/MengTo/Skills
additional_sources: [https://github.com/nextlevelbuilder/ui-ux-pro-max-skill]
original_author: Meng To
original_license: MIT
upstream_commit: 1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af
---

# Theme Recipes

A theme is a coherent set of decisions about surface, depth, type, and motion. It is not a
color filter applied at the end.

## When to use

- Choosing a visual direction for a new product or page.
- Implementing an existing theme consistently across components.
- A theme looks wrong in dark mode or on a different background.
- A user asks for glass, neumorphism, brutalist, editorial, or neon without knowing the costs.
- Building a theme switcher.

## Inputs to ask for

1. Audience and context of use (consumer, enterprise, editorial, night use).
2. Content type (long reading, dense data, imagery-led).
3. Brand constraints and required colors.
4. Performance constraints (blur, gradients, large shadows).
5. Accessibility target.

## The eleven supported themes

| Theme | Best for | Avoid when |
|---|---|---|
| `soft-blue-neumorphism` | Calm product UI, dashboards, settings | Dense tables, low-quality displays, high-contrast needs |
| `glassmorphism` | Media-rich hero sections, overlays | Text-heavy panels, low-end devices, bright sunlight |
| `aurora-gradient` | Campaigns, launches, creative tools | Long reading, enterprise data, print-like content |
| `minimal-monochrome` | Editorial products, portfolios, tools | Brands that need warmth or a strong accent |
| `brutalist-modern` | Cultural events, studios, statements | Regulated industries, older audiences, dense forms |
| `cyber-neon` | Gaming, dev tools, night products | Health, finance, long reading, daylight use |
| `dark-neumorphism` | Media apps, control panels, night use | Dense text, outdoor use, low-quality screens |
| `bento-grid` | Feature overviews, product marketing | Flowing prose, long forms |
| `editorial-serif` | Publishing, hospitality, portfolios | Dense dashboards, code, data tables |
| `claymorphism` | Friendly consumer apps, education | Serious B2B, dense data, accessibility-critical |
| `blueprint-grid` | Technical products, documentation, engineering | Warm brands, lifestyle content |

Full token tables and component notes: `references/themes.md`. Ready-to-paste CSS:
`assets/themes.css`.

## The token contract

Every theme defines the same semantic roles. A theme that cannot fill this contract is not a
theme.

```css
[data-theme="<name>"] {
  --color-bg: …;
  --color-surface: …;
  --color-surface-alt: …;
  --color-text: …;
  --color-text-muted: …;
  --color-border: …;
  --color-action: …;
  --color-action-text: …;
  --color-focus: …;
  --radius-sm: …;
  --radius-md: …;
  --radius-lg: …;
  --shadow-raised: …;
  --shadow-pressed: …;
  --border-width: …;
  --font-display: …;
  --font-body: …;
  --ease: …;
  --duration: …;
}
```

## Workflow

1. **Choose by job, not by mood.** Read the table above. If two themes fit, choose the one with
   fewer performance costs.
2. **Copy the token block** from `assets/themes.css` into the theme layer. Do not restyle
   components directly.
3. **Verify contrast** for text, muted text, action text, borders, and focus. The tables in
   `references/themes.md` already list the ratios; re-check if you change a value.
4. **Apply the depth rule.** Each theme has exactly one mechanism for elevation:
   - neumorphism: paired light/dark shadows;
   - glass: translucent surface + border + backdrop blur;
   - aurora: color fields, no shadows;
   - monochrome: tone steps and rules;
   - brutalist: hard borders and offset blocks;
   - neon: glow on the accent only;
   - dark neumorphism: paired shadows with low contrast;
   - bento: gaps and panel tone;
   - editorial: type scale and rules;
   - clay: soft inner and outer shadows;
   - blueprint: grid lines and thin borders.
   Do not mix two depth mechanisms in one component.
5. **Apply the type rule.** Each theme names a display and body face. Do not add a third.
6. **Apply the motion rule.** Neumorphism and clay animate shadows (sparingly); glass animates
   opacity; aurora may drift slowly; brutalist snaps; neon pulses once. All respect reduced
   motion.
7. **Test the theme with real components**: nav, button, card, input, table, alert, empty state.
8. **Test both modes** and at 200% zoom.

## Decision rules

- **One accent per theme.** If a theme seems to need two, the second is a status color.
- **Depth is either shadow, tone, or border — never all three at once.**
- **Glass without a solid fallback is unreadable.** Always provide an opaque fallback for
  browsers or devices without `backdrop-filter`.
- **Neumorphism must not carry all state.** Pressed/hover states need a tone or border change
  too, for users who cannot perceive subtle shadows.
- **Brutalist does not mean inaccessible.** Keep contrast, focus, and target sizes.
- **Editorial does not mean tiny gray text.** Serif body still needs 16px and 4.5:1.
- **Dark themes are not inverted light themes.**
- **A theme that fails contrast is not a theme.** It is a palette proposal.

## Defaults

| Decision | Default |
|---|---|
| Primary site theme | `soft-blue-neumorphism` |
| Mode default | Follow OS, persist choice |
| Token file | One `themes.css` |
| Theme switch | `data-theme` on `<html>` |
| Radius | Theme-specific, one scale |
| Depth | One mechanism |
| Motion | 120–320ms, reduced-motion respected |
| Contrast | WCAG AA |

## Anti-patterns

- Combining glass, gradients, and neumorphic shadows on one card.
- Using `backdrop-filter` on every surface.
- Neumorphic buttons with no visible focus ring.
- Neon text at body size.
- Brutalist borders with 2:1 contrast.
- Editorial serif at 13px.
- Bento layouts where every cell is a card with a different radius.
- A theme switcher that reloads the page or flashes.
- Copying a theme’s look but not its spacing and type rules.

## Pre-handoff checklist

- [ ] Theme chosen for a stated job.
- [ ] All semantic tokens defined for light and dark.
- [ ] Contrast verified for every text/background pair.
- [ ] One depth mechanism only.
- [ ] One accent only.
- [ ] Type roles match the theme.
- [ ] Navigation, button, card, input, table, alert tested.
- [ ] Focus ring visible on every surface.
- [ ] Reduced motion respected.
- [ ] Theme switch persists without flash.
- [ ] Solid fallback for translucent surfaces.

## Example prompt

> “Saya mau dashboard analitik dengan nuansa biru lembut dan tombol yang terasa timbul, tapi
> harus tetap lolos WCAG AA dan tidak terlihat seperti template.”

Expected result: `soft-blue-neumorphism` tokens, paired shadows used only on interactive
surfaces, a solid accent button that passes contrast, tone-based table rows instead of shadows,
visible focus rings, and a dark variant.

## Bahasa Indonesia

**Kapan dipakai:** saat memilih arah visual atau menerapkan tema secara konsisten.

**Langkah:** pilih berdasarkan pekerjaan → salin blok token → verifikasi kontras → terapkan
satu mekanisme kedalaman → terapkan aturan tipe → terapkan aturan gerak → uji komponen nyata →
uji dua mode dan zoom 200%.

**Default:** tema situs `soft-blue-neumorphism`, ikuti OS, satu file token, switch lewat
`data-theme`.

**Larangan:** mencampur glass + gradient + shadow pada satu kartu, `backdrop-filter` di semua
permukaan, tombol neumorphism tanpa focus ring, teks neon di ukuran body, brutalist dengan
kontras 2:1, serif editorial 13px, tema yang gagal kontras.

## Attribution

Ditulis ulang dari `MengTo/Skills` (MIT, Meng To) dan `nextlevelbuilder/ui-ux-pro-max-skill`
(MIT, Next Level Builder). Teks lisensi asli disertakan. Perubahan: 11 tema disatukan ke satu
kontrak token, ditambah aturan keputusan dan checklist. Tidak ada aset atau kode upstream yang
disalin.
