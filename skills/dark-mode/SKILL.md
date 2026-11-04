---
name: dark-mode
description: Use when adding dark mode, fixing a dark theme created by inversion, or when surfaces, shadows, and accent colors lose hierarchy after switching themes.
description_id: Gunakan saat menambahkan dark mode, memperbaiki tema gelap hasil inversi, atau ketika permukaan, bayangan, dan warna aksen kehilangan hierarki setelah berganti tema.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: interaction
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [dark-mode, theming, color, elevation, contrast, tokens]
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
original_author: Next Level Builder
original_license: MIT
upstream_commit: ccce51cba388476d4f403091ddb91636d5cd9fed
---

# Dark Mode

Dark mode is a second design, not a color filter.

## When to use

- Adding a theme switch.
- A dark theme exists but cards, borders, and text lose hierarchy.
- Shadows disappear, accents vibrate, or text becomes muddy.
- The theme flashes white on load.
- The user’s OS preference should be respected.

## Inputs to ask for

1. Dark-only, light-only, or both.
2. Whether to follow the OS by default.
3. Brand colors that must survive.
4. Whether the product is used at night, in low light, or on OLED screens.
5. Persistence requirement (local storage, account setting).

## Workflow

1. **Design the dark palette independently.** Start from a near-black ground with a hue (not
   `#000`), then raise surfaces with *lighter* tones.
2. **Replace shadows with tone steps.** In dark UI, elevation is communicated by lighter
   surfaces and subtle borders, not by dark shadows.
   ```css
   [data-theme="dark"] {
     --color-bg: #0f1726;
     --color-surface: #131d30;
     --color-surface-raised: #18243a;
     --color-border: #26344d;
     --shadow-raised: 8px 8px 18px #070c15, -8px -8px 18px #1e2c44;
   }
   ```
3. **Desaturate and lighten accents.** A saturated brand blue on dark vibrates; move it toward
   a lighter, slightly desaturated tint, then re-check contrast.
4. **Re-check every pair.** Text that passed on light may fail on dark, and vice versa.
5. **Set the theme before paint** to avoid a flash:
   ```html
   <script>
     const saved = localStorage.getItem("theme");
     const dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
     document.documentElement.dataset.theme = dark ? "dark" : "light";
   </script>
   ```
6. **Expose the control.** A three-state switch (system / light / dark) is better than a binary
   toggle. Persist the choice and update `color-scheme`.
7. **Test images, illustrations, charts, and third-party embeds.** They often stay light and
   glow.
8. **Test in real low light** and on an OLED screen if possible.

## Decision rules

- **Do not use pure black** for large surfaces; it makes text vibrate and hides elevation.
- **Do not use pure white text** at 100% for long body copy on dark; `#e8eefb` is calmer.
- **Elevation = lighter surface**, not a bigger shadow.
- **Borders become more important** in dark mode; a 1px subtle border often replaces a shadow.
- **Images need a treatment**: slight brightness reduction or a subtle border. Do not invert
  photos.
- **Charts need dark-specific colors**, not the light palette at reduced opacity.
- **`color-scheme: dark`** makes native controls and scrollbars match.
- **Never invert the whole page.**

## Defaults

| Decision | Default |
|---|---|
| Ground | Near-black with hue, e.g. `#0f1726` |
| Surface step | +4–6% lightness |
| Body text | Off-white, e.g. `#e8eefb` |
| Muted text | ≥ 4.5:1 on ground |
| Accent | Lightened/desaturated variant |
| Elevation | Tone step + subtle border |
| Theme default | Follow OS |
| Persistence | localStorage + account preference |
| Native controls | `color-scheme: dark` |

## Anti-patterns

- `filter: invert(1)` or `invert(0.9) hue-rotate(180deg)`.
- Pure black with pure white text and saturated blue links.
- Dark shadows on dark backgrounds.
- The same accent hex in both themes.
- Light images with no border or treatment.
- A white flash before hydration.
- A toggle that does not persist.
- Charts with grid lines darker than the data.

## Pre-handoff checklist

- [ ] Dark palette designed independently, not inverted.
- [ ] Surface hierarchy readable without shadows.
- [ ] All text pairs pass 4.5:1.
- [ ] Focus ring visible on every dark surface.
- [ ] Accent re-tuned for dark.
- [ ] Images and charts have a dark treatment.
- [ ] No flash of light theme on load.
- [ ] Theme persists and can follow the OS.
- [ ] Native controls use `color-scheme`.

## Example prompt

> “Aplikasi kami punya light mode dan ingin menambah dark mode. Sekarang kalau dibalik, kartu
> jadi hilang dan biru brand menyilaukan.”

Expected result: an independently designed dark palette with lighter raised surfaces, a
desaturated accent that passes contrast, subtle borders replacing shadows, a pre-paint theme
script, and a three-state switch.

## Bahasa Indonesia

**Kapan dipakai:** saat menambah dark mode atau memperbaiki tema gelap hasil inversi.

**Langkah:** rancang palet gelap sendiri → ganti bayangan dengan langkah tone → turunkan
saturasi aksen → ukur ulang kontras → pasang tema sebelum paint → sediakan kontrol tiga state →
uji gambar, grafik, dan kontrol native.

**Default:** ground near-black berwarna, surface +4–6% lebih terang, teks off-white, elevation
lewat tone + border, ikuti OS secara default.

**Larangan:** `filter: invert()`, hitam murni dengan putih murni, bayangan gelap di atas gelap,
aksen yang sama di kedua tema, flash putih saat load, toggle tanpa persistensi.

## Attribution

Ditulis ulang dari `nextlevelbuilder/ui-ux-pro-max-skill` (MIT, Next Level Builder). Teks
lisensi asli: `LICENSE-UPSTREAM-nextlevelbuilder.txt`. Perubahan: ditambahkan strategi elevasi,
skrip pre-paint, dan checklist.
