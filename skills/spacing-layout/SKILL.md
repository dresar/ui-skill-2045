---
name: spacing-layout
description: Use when a layout feels cramped, randomly spaced, or pushed to one side, or when building page grids, section rhythm, and responsive containers from scratch.
description_id: Gunakan saat tata letak terasa sempit, jaraknya acak, atau konten menumpuk di satu sisi, atau saat membangun grid halaman, irama seksi, dan kontainer responsif dari nol.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: foundation
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [spacing, layout, grid, whitespace, rhythm, responsive]
source: https://github.com/Leonxlnx/taste-skill
original_author: Leonxlnx
original_license: MIT
upstream_commit: 12af471f627f866411b4bd785b19646d3672784c
---

# Spacing and Layout

Space is not empty. It is the structure that tells the eye what belongs together and what
comes next.

## When to use

- Sections have inconsistent gaps because each one was written separately.
- Content hugs the left edge while the right half of the screen is blank.
- Cards are nested inside cards inside cards.
- Mobile is a squeezed desktop rather than its own composition.
- The page feels “almost right” but crowded.

## Inputs to ask for

1. Content types: prose, cards, tables, media, forms.
2. Target widths: 320, 390, 768, 1024, 1440.
3. Maximum content width or an existing grid.
4. Density: marketing (airy), product (medium), admin (compact).
5. Any fixed header, sidebar, or sticky element.

## The spacing system

Use a 4px base and a short scale. More than eight steps invites arbitrary choices.

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --page-gutter: clamp(16px, 4vw, 32px);
  --content-max: 72rem;
  --measure: 65ch;
}
```

Rules of thumb:

- Inside a component: 8–16px.
- Between related components: 24–32px.
- Between sections: 64–96px on desktop, 48px on mobile. The section gap must be visibly larger
  than any gap inside a section.
- Page gutter: 16–32px, equal on both sides at every width.
- Minimum touch target: 44×44px.

## Workflow

1. **Draw the frame first.** One content width, one pair of equal outer margins, one column
   grid. Everything else lives inside that frame.
2. **Group by proximity, not by borders.** If two elements belong together, reduce the gap
   between them before adding a line or a card.
3. **Write the section rhythm.** Give every section a heading, a purpose, and one dominant
   element. Alternate composition: text + media, full-width media, asymmetric two-column,
   table. Do not repeat the same three-card row four times.
4. **Build mobile as its own composition.** Stack order should follow reading order, not DOM
   accidents. Full-bleed media is allowed; text is not.
5. **Use `min()`, `clamp()`, and `max-width`** instead of fixed pixel widths. Let the container
   carry the layout, not the viewport.
6. **Close every void.** If text occupies the left half, the right half holds a picture, a
   second column, a list, or a figure. A deliberate empty area is allowed once per page.
7. **Check the seams.** No horizontal scrollbar, no element wider than its container, no
   section taller than half a screen with nothing in it.

## Decision rules

- **Asymmetry belongs inside the grid, never in the frame.** The left and right margins match
  even when the content is off-centre.
- **One radius per hierarchy level.** Buttons, inputs, cards, and modals may differ, but two
  cards at the same level must not.
- **A card is a grouping tool, not a decoration.** If removing the card does not change
  comprehension, remove it.
- **Avoid nested cards.** A card inside a card inside a card is a layout failure disguised as
  depth.
- **Use space, not rules, to separate.** Hairline dividers everywhere make a page look like a
  spreadsheet.
- **Sticky elements must not cover content.** Reserve their height with `scroll-padding-top`.
- **No layout that requires JavaScript to avoid overlap.** CSS Grid and Flexbox handle it.

## Defaults

| Decision | Default |
|---|---|
| Base unit | 4px |
| Section gap | 96px desktop / 48px mobile |
| Page gutter | `clamp(16px, 4vw, 32px)` |
| Content max | 72rem |
| Prose measure | 65ch |
| Grid | 12 columns desktop, 4 mobile |
| Card padding | 24px |
| Form control height | 44px |
| Breakpoints | 640, 768, 1024, 1280 |

## Anti-patterns

- `margin-top` values invented per section.
- Centering everything because alignment feels hard.
- Content stuck to the left with a blank right half.
- Three identical card grids in a row.
- Cards with 32px padding next to cards with 12px padding.
- A 1200px text line.
- A mobile layout that simply stacks a 12-column desktop grid.
- `position: absolute` used to fake alignment.

## Pre-handoff checklist

- [ ] Outer margins match at 320, 768, and 1440.
- [ ] Section gaps are larger than internal gaps.
- [ ] No section is mostly empty without a deliberate reason.
- [ ] No horizontal overflow at any width.
- [ ] Mobile reading order matches visual order.
- [ ] Sticky header has `scroll-padding-top`.
- [ ] Cards at the same level share padding and radius.
- [ ] At least two different section compositions exist on a long page.

## Example prompt

> “Halaman harga untuk SaaS. Tiga paket, satu paket unggulan, harus terasa lapang dan tidak
> seperti template kartu.”

Expected result: a layout where the featured plan breaks the row, section gap 96px, a shared
card radius, and a mobile composition that leads with the recommended plan rather than
stacking three identical cards.

## Bahasa Indonesia

**Kapan dipakai:** saat jarak terasa acak, konten menumpuk di satu sisi, atau mobile hanya
mengecilkan desktop.

**Langkah:** tentukan frame dan gutter → kelompokkan dengan kedekatan → susun irama seksi →
bangun komposisi mobile sendiri → tutup ruang kosong → periksa overflow.

**Default:** basis 4px, jarak seksi 96/48px, gutter `clamp(16px, 4vw, 32px)`, konten maksimal
72rem, measure 65ch.

**Larangan:** margin per seksi yang dikarang, tiga grid kartu identik, kartu bersarang, garis
pemisah di mana-mana, konten menempel kiri dengan separuh layar kosong.

## Attribution

Ditulis ulang dari `Leonxlnx/taste-skill` (MIT, Leonxlnx). Teks lisensi asli:
`LICENSE-UPSTREAM-leonxlnx.txt`. Perubahan: disusun menjadi sistem spacing dan prosedur layout
yang ringkas; contoh dan checklist ditambahkan.
