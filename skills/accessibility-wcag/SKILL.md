---
name: accessibility-wcag
description: Use when auditing or building UI that must work with keyboards, screen readers, zoom, high contrast, and reduced motion, or when fixing WCAG AA failures.
description_id: Gunakan saat mengaudit atau membangun UI yang harus bekerja dengan keyboard, screen reader, zoom, kontras tinggi, dan reduced motion, atau saat memperbaiki kegagalan WCAG AA.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: interaction
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [accessibility, wcag, keyboard, screen-reader, focus, aria, reduced-motion]
source: https://github.com/ibelick/ui-skills
original_author: Julien Thibeaut
original_license: MIT
upstream_commit: 73fb128d046d1f0d74c2909cd26eb616e3415567
---

# Accessibility (WCAG AA)

Accessibility is not a final checklist. It is the set of conditions that make the interface
usable at all.

## When to use

- Building any interactive interface.
- An audit reports color contrast, focus, label, or landmark failures.
- A modal, menu, or combobox is keyboard-hostile.
- A screen reader reads meaningless content.
- Forms cannot be completed with a keyboard or a screen reader.

## Inputs to ask for

1. Target conformance: WCAG 2.2 AA is the default.
2. Supported browsers and assistive technologies.
3. Whether the product is public-sector or has legal procurement requirements.
4. Known problem areas from analytics or user reports.
5. Whether automated tests already exist.

## The non-negotiables

1. **Semantic HTML first.** `<button>`, `<a>`, `<label>`, `<table>`, `<dialog>`, `<nav>`,
   `<main>`. ARIA only patches what HTML cannot express.
2. **Keyboard access.** Every interactive element is reachable in reading order, operable with
   Enter/Space, and has a visible focus indicator.
3. **Focus management.** Dialogs move focus in, trap it, restore it on close. Menus close on
   Escape. Route changes move focus to the new heading or announce it.
4. **Names and labels.** Every control has an accessible name. Icon-only buttons use
   `aria-label`. Inputs use `<label for>`, not placeholder-only.
5. **Contrast.** 4.5:1 body, 3:1 large text and UI boundaries.
6. **Not color alone.** Status, errors, and required fields carry text or icon.
7. **Motion.** `prefers-reduced-motion` removes travel and looping.
8. **Zoom and reflow.** Usable at 200% zoom and 320px width with no horizontal scroll.
9. **Text alternatives.** Meaningful images have alt text; decorative images use `alt=""`.
10. **Error identification.** Specific error text, tied to the field with `aria-describedby`.

## Workflow

1. **Run an automated pass first.** axe DevTools or Lighthouse. Fix the mechanical issues:
   missing labels, contrast, heading order, duplicate IDs.
2. **Then test with a keyboard only.** Tab through the entire flow. Note the first focus, the
   order, traps, and lost focus. This finds what automation cannot.
3. **Test with a screen reader.** NVDA on Windows or VoiceOver on macOS. Check landmark
   navigation, form labels, error announcements, and dynamic content.
4. **Test at 200% zoom and 320px.** Check reflow, clipping, and sticky elements.
5. **Test with reduced motion and high contrast.** Ensure content is not lost.
6. **Fix by category, not by page.** A shared Button fix beats 30 page-level patches.
7. **Add regression guards.** Lint rules, component tests, and one keyboard test per flow.

## Component rules

### Focus

```css
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: inherit;
}
```

Never remove the outline without an equally visible replacement. The indicator must contrast
with both the control and the surrounding surface.

### Dialog

- Use `<dialog>` or `role="dialog" aria-modal="true"`.
- Label it with `aria-labelledby`.
- Move focus to the first meaningful element.
- Trap focus inside; restore on close.
- Close on Escape unless the action is destructive and irreversible.

### Tabs

- `role="tablist"`, `role="tab"`, `role="tabpanel"`.
- Arrow keys move; Home/End jump.
- Only the active tab is in the tab order (`tabindex="-1"` on the rest).

### Forms

- Label above input, always visible.
- `aria-invalid="true"` plus specific error text.
- `aria-describedby` links the error and any hint.
- Do not disable submit to signal invalid input.
- Announce success with `role="status"`.

### Live regions

- `role="status"` for non-urgent updates (saved, filtered).
- `role="alert"` for errors that need immediate attention.
- Do not put a live region around the whole page.

## Decision rules

- **If HTML has an element for it, use it.** A clickable div is a bug.
- **If the only label is an icon, add an accessible name.**
- **If the interaction depends on hover, duplicate it on focus and touch.**
- **If content disappears at 200% zoom, the layout is broken.**
- **If an error is announced only by color, it is not announced.**
- **If the animation cannot be reduced, it is not accessible.**
- **If a custom control needs three ARIA attributes to imitate native behavior, use the native
  control.**

## Defaults

| Decision | Default |
|---|---|
| Conformance | WCAG 2.2 AA |
| Body contrast | 4.5:1 |
| UI contrast | 3:1 |
| Focus | 2px ring, 2px offset |
| Touch target | 44×44px |
| Zoom | 200% without loss |
| Reflow | 320px, no horizontal scroll |
| Motion | Reduce travel, not content |

## Anti-patterns

- `outline: none` with no replacement.
- `aria-label` on a div that does nothing.
- Placeholder-only labels.
- `role="button"` without keyboard handling.
- A modal that does not trap or restore focus.
- Hidden content still focusable.
- Auto-playing video with sound.
- A carousel that cannot be paused.
- Red/green status with no text.
- `user-scalable=no` in the viewport meta tag.

## Pre-handoff checklist

- [ ] Entire flow works with keyboard only.
- [ ] Focus is visible on every surface.
- [ ] Every control has an accessible name.
- [ ] Headings form a logical outline.
- [ ] Landmarks exist: `header`, `nav`, `main`, `footer`.
- [ ] Images have appropriate alt text.
- [ ] Forms have labels, hints, and specific errors.
- [ ] Dynamic updates are announced.
- [ ] Contrast passes for text, UI, and focus.
- [ ] 200% zoom and 320px reflow pass.
- [ ] Reduced motion is respected.
- [ ] Automated scan has zero critical issues.

## Example prompt

> “Form checkout ini hanya bisa dipakai dengan mouse dan error-nya hanya berwarna merah.
> Perbaiki agar lolos WCAG AA.”

Expected result: real labels, keyboard-operable custom controls, inline error text with
`aria-describedby`, `role="alert"` for submission errors, visible focus rings, and a tested
keyboard path through the whole checkout.

## Bahasa Indonesia

**Kapan dipakai:** saat membangun UI interaktif atau memperbaiki temuan aksesibilitas.

**Langkah:** jalankan pemindai otomatis → uji keyboard → uji screen reader → uji zoom 200% dan
320px → uji reduced motion → perbaiki di tingkat komponen → tambahkan penjaga regresi.

**Default:** WCAG 2.2 AA, kontras 4.5:1, focus 2px offset 2px, target sentuh 44px, reflow 320px.

**Larangan:** `outline: none`, placeholder sebagai label, div dengan `role="button"` tanpa
keyboard, modal tanpa trap/restore focus, status hanya warna, `user-scalable=no`.

## Attribution

Ditulis ulang dari `ibelick/ui-skills` (MIT, Julien Thibeaut). Teks lisensi asli:
`LICENSE-UPSTREAM-ibelick.txt`. Perubahan: disusun menjadi aturan non-negosiabel, prosedur uji,
dan checklist. Rujukan konseptual: `vercel-labs/agent-skills` (tidak disalin; tanpa lisensi).
