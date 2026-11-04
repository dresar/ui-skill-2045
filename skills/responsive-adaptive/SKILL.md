---
name: responsive-adaptive
description: Use when a layout breaks on phones or tablets, when mobile is only a shrunk desktop, or when building fluid type, containers, and touch-first interactions.
description_id: Gunakan saat tata letak rusak di ponsel atau tablet, saat mobile hanya versi desktop yang diperkecil, atau saat membangun tipografi fluida, kontainer, dan interaksi sentuh.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: interaction
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [responsive, mobile, fluid-type, container-queries, touch, reflow]
source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
original_author: Next Level Builder
original_license: MIT
upstream_commit: ccce51cba388476d4f403091ddb91636d5cd9fed
---

# Responsive and Adaptive

Mobile is not a smaller desktop. It is a different reading and pointing environment.

## When to use

- Text overflows or controls overlap below 768px.
- The mobile page is the desktop layout stacked in DOM order.
- Tables, navigation, or dashboards are unusable on a phone.
- Type is fixed in pixels and either tiny or enormous on a large screen.
- Touch targets are smaller than 44px.

## Inputs to ask for

1. Primary device mix.
2. Whether the interface must work offline or on slow networks.
3. Content that cannot be hidden on mobile.
4. Orientation requirements (kiosk, tablet, foldable).
5. Existing breakpoints or design tokens.

## Workflow

1. **Start at 320px.** Write the mobile composition first. Decide what the first screen must
   answer, then add content as width allows.
2. **Use a fluid frame.**
   ```css
   .container {
     width: min(100% - 2 * var(--page-gutter), var(--content-max));
     margin-inline: auto;
   }
   ```
3. **Use `clamp()` for type and space**, but keep body text at least 16px.
4. **Use container queries for components.** A card should respond to its container, not the
   viewport.
   ```css
   .card-shell { container-type: inline-size; }
   @container (min-width: 28rem) {
     .card { grid-template-columns: 12rem 1fr; }
   }
   ```
5. **Choose a table strategy deliberately:** scroll with sticky first column, stacked cards with
   labels, or a reduced column set with a detail view. Never silently drop data.
6. **Make touch real.** 44×44px targets, 8px between targets, no hover-only actions. Use
   `@media (hover: hover)` for hover enhancements.
7. **Respect safe areas** with `env(safe-area-inset-*)` for fixed bars.
8. **Test at 320, 390, 768, 1024, 1440, and 200% zoom.** Check landscape too.

## Decision rules

- **Breakpoints follow content, not devices.** Add a breakpoint where the layout stops working.
- **Stack order = reading order.** Do not use `order` to fix a DOM that is already wrong.
- **Never hide essential content on mobile.** Move it, condense it, or link to it.
- **Do not use viewport units for body text.** `vw` alone fails zoom and wide screens.
- **Avoid horizontal scroll for prose.** It is acceptable for code and wide tables with a
  visible affordance.
- **Fixed headers must not consume more than ~15% of a phone screen.**
- **Modals become sheets on small screens**, not shrunken desktop dialogs.
- **Hover is an enhancement, not a requirement.**

## Defaults

| Decision | Default |
|---|---|
| Minimum width | 320px |
| Page gutter | `clamp(16px, 4vw, 32px)` |
| Body size | 16px minimum |
| Touch target | 44×44px |
| Breakpoints | 640, 768, 1024, 1280 |
| Container max | 72rem |
| Table on mobile | Scroll + sticky first column, or stacked |
| Navigation | Disclosure menu under 768px |
| Safe area | `env(safe-area-inset-*)` on fixed elements |

## Anti-patterns

- `width: 100vw` causing horizontal overflow with a scrollbar.
- A 12-column grid squeezed onto a phone.
- Hiding a table column with `display: none` and no alternative.
- Font sizes in `vw` only.
- Hover menus on touch devices.
- A desktop modal at 90vw on a phone, taller than the viewport.
- Fixed 320px sidebars that never collapse.
- Text smaller than 16px on mobile inputs (causes iOS zoom on focus).

## Pre-handoff checklist

- [ ] No horizontal overflow at 320px.
- [ ] Touch targets ≥ 44×44px with spacing.
- [ ] Body text ≥ 16px; inputs ≥ 16px on mobile.
- [ ] Navigation collapses into a real disclosure.
- [ ] Tables have an explicit mobile strategy.
- [ ] Modals become sheets or full-screen on small widths.
- [ ] Content is not hidden without an alternative.
- [ ] Tested in landscape and at 200% zoom.
- [ ] Safe areas respected on fixed bars.

## Example prompt

> “Tabel faktur kami punya 7 kolom dan hancur di ponsel. Buat strategi mobile yang tetap
> menampilkan nomor, status, dan total.”

Expected result: a stacked card layout below 640px showing invoice number, status, total, and
due date, with a “view detail” link; the desktop table remains sortable and the mobile version
is not a horizontal scroll of seven columns.

## Bahasa Indonesia

**Kapan dipakai:** saat layout rusak di layar kecil atau mobile hanya versi desktop yang
diperkecil.

**Langkah:** mulai dari 320px → gunakan frame fluida → `clamp()` untuk tipe dan jarak →
container query untuk komponen → pilih strategi tabel → pastikan target sentuh → hormati safe
area → uji enam lebar dan zoom 200%.

**Default:** minimum 320px, gutter `clamp(16px, 4vw, 32px)`, body 16px, target 44px,
breakpoint 640/768/1024/1280.

**Larangan:** `100vw` yang menimbulkan overflow, grid 12 kolom di ponsel, menyembunyikan kolom
tanpa alternatif, font hanya `vw`, menu hover di perangkat sentuh.

## Attribution

Ditulis ulang dari `nextlevelbuilder/ui-ux-pro-max-skill` (MIT, Next Level Builder), dengan
rujukan konseptual pada `Leonxlnx/taste-skill` (MIT). Teks lisensi asli:
`LICENSE-UPSTREAM-nextlevelbuilder.txt`. Perubahan: ditambahkan container queries, strategi
tabel, dan checklist; basis data upstream tidak disalin.
