---
name: ui-components
description: Use when building or fixing buttons, cards, forms, tables, and navigation, especially when components look inconsistent or have missing hover, focus, loading, and error states.
description_id: Gunakan saat membangun atau memperbaiki tombol, kartu, form, tabel, dan navigasi, terutama ketika komponen tidak konsisten atau kehilangan state hover, focus, loading, dan error.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: components
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [components, button, card, form, table, navigation, states]
source: https://github.com/MengTo/Skills
original_author: Meng To
original_license: MIT
upstream_commit: 1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af
---

# UI Components

A component is a contract: one visual language, every state, and a predictable keyboard
experience.

## When to use

- Building the first version of a product UI.
- Buttons, inputs, cards, and tables each look like they came from a different library.
- A control has a default state but no hover, focus, active, disabled, loading, or error state.
- A table becomes unreadable on mobile.
- Navigation changes shape between pages.

## Inputs to ask for

1. Component inventory and which ones already exist.
2. Framework and styling approach.
3. Density: comfortable, compact, or touch-first.
4. Brand accent and radius.
5. Content extremes: longest label, longest value, empty table.

## Required states

Every interactive component ships with all of these, or it is unfinished:

| State | Visual rule |
|---|---|
| Default | Tokenized base |
| Hover | One clear change: tone, border, or elevation |
| Focus-visible | 2px ring, 2px offset, ≥ 3:1 against both sides |
| Active/pressed | Slight inset or darker tone; no layout shift |
| Disabled | Reduced contrast plus `not-allowed`; never the only signal |
| Loading | Preserve width; replace label with spinner + accessible text |
| Error | Text message tied with `aria-describedby`; icon + color |
| Empty | Explain what would appear and how to create it |
| Success | Confirmation that names what changed |

## Workflow

1. **Inventory and normalize.** Choose one radius, one border weight, one shadow recipe, and
   one height per density. Write them as tokens.
2. **Build primitives before pages.** Button, input, select, checkbox, radio, textarea, card,
   badge, table, tabs, dialog, toast.
3. **Write the state matrix** for each component before styling. If a state has no design,
   it will be invented inconsistently later.
4. **Compose with slots, not variants.** A button with 14 boolean props is a design failure.
   Use `variant` (primary/secondary/ghost/danger), `size` (sm/md/lg), and an icon slot.
5. **Handle content extremes.** Truncate with a title or tooltip, wrap where reading matters,
   and never let a long word break the layout.
6. **Make the keyboard path real.** Tab order follows reading order; Enter/Space activate;
   Escape closes dialogs; arrow keys move within menus, tabs, and radio groups.
7. **Verify on mobile and at 200% zoom.** Touch targets 44px, no hover-only affordances.

## Component rules

### Button

- One primary action per view. Secondary and ghost are support, not competition.
- Label is a verb phrase: “Simpan perubahan”, not “Submit”.
- Loading state preserves width; never shift the layout.
- Icon-only buttons require an accessible name.
- Minimum 44×44px on touch.

### Card

- A card groups related content that would be harder to scan as plain text.
- Do not nest cards. Do not put a card inside a card to add “depth”.
- One padding value per density; one radius per hierarchy level.
- The whole card is clickable only if it contains no nested interactive elements.

### Form

- Label above the field; placeholder is an example, never the label.
- Required fields marked in text, not only with an asterisk.
- Error text below the field, specific, and tied with `aria-describedby`.
- Validate on blur or submit, not on every keystroke.
- Group related fields with `fieldset` and `legend`.
- Never disable the submit button as the only validation signal.

### Table

- Numbers right-aligned, text left-aligned, headers sticky when scrolling.
- Use `<table>` semantics; do not build tables from divs.
- On mobile, choose one: horizontal scroll with a sticky first column, or a stacked card
  layout with labels. Do not hide columns silently.
- Empty and loading states belong inside the table region.
- Sortable headers are buttons with `aria-sort`.

### Navigation

- Wordmark, 3–5 links, one action. More than that needs a different pattern.
- Current page marked with `aria-current="page"`, not color alone.
- Mobile menu is a real disclosure with focus management, not a hover menu.
- Sticky navigation reserves space and does not cover anchored content.

## Defaults

| Decision | Default |
|---|---|
| Control height | 44px (36px compact) |
| Radius | 8px input, 10px button, 14px card |
| Border | 1px `--color-border` |
| Focus | `outline: 2px solid var(--color-focus); outline-offset: 2px` |
| Transition | 120–200ms, transform/opacity/shadow only |
| Destructive action | Requires confirmation naming the object |
| Table row height | 48px |
| Toast duration | 5s, dismissible, `role="status"` |

## Anti-patterns

- A button with no hover or focus state.
- `outline: none` with no replacement.
- Placeholder used as a label.
- Disabled submit as the only validation.
- Divs pretending to be buttons or tables.
- A card grid where every card has a different padding.
- A modal that traps focus incorrectly or cannot be closed with Escape.
- Icon-only controls without `aria-label`.
- A “secondary” button styled as strongly as the primary.

## Pre-handoff checklist

- [ ] Every interactive component has hover, focus-visible, active, and disabled states.
- [ ] Forms have labels, error text, and a success path.
- [ ] Tables use real table semantics and survive mobile.
- [ ] Buttons are keyboard-operable and have accessible names.
- [ ] One primary action per view.
- [ ] Loading states preserve layout.
- [ ] Empty states explain the next action.
- [ ] No component uses a raw hex value outside tokens.
- [ ] Checked in light, dark, and 200% zoom.

## Example prompt

> “Buat form undangan tim: email, peran, dan tombol kirim. Harus jelas saat loading, error,
> dan sukses, dan bisa dipakai dengan keyboard saja.”

Expected result: labeled fields, inline validation, a submit button with a width-stable loading
state, a success message naming the invited email, and a keyboard path with visible focus.

## Bahasa Indonesia

**Kapan dipakai:** saat membangun komponen inti atau menyatukan komponen yang tidak konsisten.

**Langkah:** inventaris → normalisasi token → bangun primitif → tulis matriks state → tangani
konten ekstrem → uji keyboard → uji mobile dan zoom 200%.

**Default:** tinggi kontrol 44px, radius 8/10/14px, focus 2px offset 2px, transisi 120–200ms.

**Larangan:** tombol tanpa hover/focus, `outline: none`, placeholder sebagai label, div
menyamar jadi tombol/tabel, kartu bersarang, ikon tanpa nama aksesibel.

## Attribution

Ditulis ulang dari `MengTo/Skills` → `agent-skills/web-design` (MIT, Meng To). Teks lisensi
asli: `LICENSE-UPSTREAM-mengto.txt`. Perubahan: digabung menjadi satu kontrak komponen dengan
matriks state dan checklist; aset dan kode upstream tidak disalin.
