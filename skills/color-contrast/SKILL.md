---
name: color-contrast
description: Use when choosing a palette, checking WCAG contrast, fixing unreadable text, or making light and dark themes that stay accessible.
description_id: Gunakan saat memilih palet, memeriksa kontras WCAG, memperbaiki teks yang sulit dibaca, atau membuat tema terang dan gelap yang tetap aksesibel.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: foundation
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [color, contrast, wcag, accessibility, palette, dark-mode]
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
original_author: Next Level Builder
original_license: MIT
upstream_commit: ccce51cba388476d4f403091ddb91636d5cd9fed
---

# Color and Contrast

A palette is a set of roles and proportions, not a collection of pretty hex values.

## When to use

- Choosing colors for a new product or theme.
- Text looks fine to the designer but fails on a projector or in sunlight.
- Dark mode was made by inverting light mode.
- Status colors (success, warning, danger) are indistinguishable.
- A brand color must be kept but fails as a text background.

## Inputs to ask for

1. Brand color(s) that cannot change.
2. Mood: calm, technical, editorial, playful, luxurious, brutal.
3. Dominant surface: light, dark, or both.
4. Data density: marketing, dashboard, or long-form reading.
5. Any legal or brand contrast requirement beyond WCAG AA.

## The palette contract

Every theme needs these roles, in this order of importance:

| Role | Job | Rule |
|---|---|---|
| Ground | Largest surface area | One value; not pure white unless intentional |
| Ink | Primary text | ≥ 4.5:1 on ground |
| Muted ink | Secondary text | ≥ 4.5:1 on ground; never below 4.5 for body |
| Accent | Primary action and focus | ≥ 3:1 against adjacent surfaces; text on it ≥ 4.5:1 |
| Accent ink | Text on accent | Choose white or near-black by contrast, not habit |
| Border | Separation | ≥ 3:1 for meaningful UI boundaries |
| Status | Success / warning / danger / info | Each must carry a label or icon, never color alone |

Use 60-30-10 as a starting proportion: ground 60%, surfaces and secondary 30%, accent 10%.
An accent used on five elements is no longer an accent.

## Workflow

1. **Write the roles before the hex values.** If you cannot name the job, you do not need the
   color.
2. **Choose the ground and ink first.** Check the ratio immediately. Adjust lightness, not hue,
   until body text passes 4.5:1.
3. **Add surfaces as small tone steps.** A card should differ from the ground by 2–6% lightness
   or by a border, not by a shadow and a gradient and a tint.
4. **Pick one accent.** Verify:
   - accent text on accent background ≥ 4.5:1;
   - accent against ground ≥ 3:1 for large text and UI boundaries;
   - focus ring ≥ 3:1 against both the control and the surrounding surface.
5. **Derive status colors from the same lightness band.** They should look related, not like
   four different libraries.
6. **Build dark mode independently.** Dark surfaces reflect light differently: pure black is
   harsh, saturated colors vibrate, and shadows disappear. Use a near-black ground, raise
   surfaces with lighter tones, and desaturate accents slightly.
7. **Verify with a script, not the eye.** Compute every pair you ship. Save the result next to
   the theme.

### Contrast formula

```js
const luminance = (hex) => {
  const rgb = hex.replace("#", "").match(/../g).map((v) => parseInt(v, 16) / 255);
  const [r, g, b] = rgb.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
```

Thresholds: 4.5:1 normal text, 3:1 large text (≥ 24px or ≥ 18.66px bold), 3:1 UI components
and focus indicators. AAA is 7:1 and 4.5:1 respectively.

## Decision rules

- **If the brand accent fails as a button background, do not use it as one.** Use it as a
  border, icon, or underline, and use a darker accessible variant for the fill.
- **Never use gray text on a colored surface.** It almost always fails. Use a darkened or
  lightened version of the surface hue.
- **Never rely on color alone** for status, required fields, charts, or links inside body copy.
  Add text, icon, or underline.
- **Pure black on pure white is allowed but not required.** `#111` on `#f7f7f5` is often
  calmer and still exceeds AA.
- **Placeholder text is not a label.** It must still meet 4.5:1 if it carries information, and
  it must never be the only label.
- **Disabled controls are exempt from contrast but must still be recognizable.** Pair opacity
  with `cursor: not-allowed` and an explanation where needed.
- **Check the focus ring against both sides.** A blue ring on a blue button is invisible.

## Defaults

| Decision | Default |
|---|---|
| Body contrast | 4.5:1 minimum |
| Large text | 3:1 minimum |
| UI boundary | 3:1 minimum |
| Focus ring | 2px solid, 2px offset, 3:1 against both sides |
| Muted text | ≥ 4.5:1, not “light gray” |
| Dark ground | Near-black with a hue, not `#000` |
| Accent count | One |
| Status colors | Four, each with icon/text |

## Anti-patterns

- Purple-to-blue gradient as the entire brand.
- `#999` body text on white (2.85:1, fails).
- White text on a yellow or lime button.
- Opacity-based muted text (`color: #000; opacity: .4`) that passes in one context and fails in
  another.
- Dark mode by `filter: invert(1)`.
- A chart whose series are distinguished only by red/green.
- A focus style of `outline: none` with no replacement.
- Gradient text for “premium”.

## Pre-handoff checklist

- [ ] Every text/background pair is computed, not eyeballed.
- [ ] Button text passes 4.5:1 in default, hover, active, and disabled states.
- [ ] Focus ring visible on ground, surface, and accent.
- [ ] Status is conveyed by text or icon as well as color.
- [ ] Dark mode palette was designed, not inverted.
- [ ] Charts remain readable in grayscale.
- [ ] The accent is used on roughly 10% of the surface, not everywhere.

## Example prompt

> “Palet untuk aplikasi keuangan dengan brand #4f7cff. Harus lolos WCAG AA di light dan dark
> mode, dan angka negatif harus jelas tanpa mengandalkan merah saja.”

Expected result: role table with computed ratios, a darker accessible action color, a dark
palette with lighter surfaces, and negative values marked with a minus sign plus color.

## Bahasa Indonesia

**Kapan dipakai:** saat memilih palet, membuat dark mode, atau memperbaiki teks yang gagal
kontras.

**Langkah:** tentukan peran → pilih ground dan ink → ukur rasio → tambahkan satu aksen → uji
status → bangun dark mode terpisah → simpan hasil pengukuran.

**Default:** teks 4.5:1, teks besar 3:1, batas UI 3:1, focus ring 2px dengan offset 2px.

**Larangan:** abu-abu `#999` untuk body, teks putih di tombol kuning, dark mode dengan invert,
status hanya lewat warna, `outline: none` tanpa pengganti.

## Attribution

Ditulis ulang dari `nextlevelbuilder/ui-ux-pro-max-skill` (MIT, Next Level Builder). Teks
lisensi asli: `LICENSE-UPSTREAM-nextlevelbuilder.txt`. Perubahan: formula kontras, kontrak
peran, dan checklist ditambahkan; basis data palet upstream tidak disalin.
