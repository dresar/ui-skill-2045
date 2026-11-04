---
name: tailwind-shadcn
description: Use when building with Tailwind CSS and shadcn/ui, especially when class lists become unreadable, tokens drift, or components lose accessibility and dark mode.
description_id: Gunakan saat membangun dengan Tailwind CSS dan shadcn/ui, terutama ketika daftar class menjadi tidak terbaca, token melenceng, atau komponen kehilangan aksesibilitas dan dark mode.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: engineering
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [tailwind, shadcn, css-variables, components, dark-mode, composition]
source: https://github.com/MengTo/Skills
original_author: Meng To
original_license: MIT
upstream_commit: 1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af
---

# Tailwind and shadcn/ui

Tailwind is a constraint system, not a license to write 40 classes per element. shadcn/ui is a
starting point you own, not a dependency you obey.

## When to use

- Starting a Tailwind project with shadcn/ui.
- Class strings are duplicated across components.
- Colors and radii drift because every component uses raw palette classes.
- Dark mode is inconsistent across shadcn components.
- A customized shadcn component lost keyboard or screen-reader behavior.

## Inputs to ask for

1. Tailwind version (v3 or v4) and build setup.
2. shadcn/ui theme variables and whether a custom theme exists.
3. Design token source of truth.
4. Dark mode strategy (`class`/`data-theme` vs media only).
5. Component ownership policy (copy-in vs package).

## Workflow

1. **Define tokens as CSS variables, then map Tailwind to them.**
   ```css
   @theme inline {
     --color-background: var(--background);
     --color-foreground: var(--foreground);
     --color-primary: var(--primary);
     --color-primary-foreground: var(--primary-foreground);
     --radius-sm: calc(var(--radius) - 4px);
     --radius-md: var(--radius);
   }
   ```
   Components use `bg-background`, `text-foreground`, `bg-primary`. Never `bg-blue-500` for a
   semantic surface.
2. **Write variants with `cva`.** Keep the base, variants, and sizes in one place.
   ```tsx
   const button = cva("inline-flex items-center justify-center rounded-md text-sm font-medium", {
     variants: {
       variant: {
         primary: "bg-primary text-primary-foreground hover:bg-primary/90",
         ghost: "hover:bg-accent hover:text-accent-foreground",
         danger: "bg-destructive text-destructive-foreground",
       },
       size: { sm: "h-9 px-3", md: "h-11 px-4", lg: "h-12 px-6" },
     },
     defaultVariants: { variant: "primary", size: "md" },
   });
   ```
3. **Use `cn()` for conditional classes**, never string concatenation that can produce
   conflicting utilities.
4. **Do not override shadcn’s accessibility.** Keep `Dialog`, `Select`, `Tabs`, and `Menu`
   primitives; style them, do not rewrite their keyboard logic.
5. **Extract repeated patterns.** If the same 12 classes appear three times, make a component
   or a variant.
6. **Keep dark mode in the variable layer.** Do not sprinkle `dark:` on every element; use
   semantic tokens that switch.
7. **Respect the content scan.** Do not build class names dynamically (`bg-${color}-500`);
   Tailwind cannot see them.
8. **Check the output.** Run the production build and verify that unused styles are removed and
   that custom properties survive.

## Decision rules

- **Semantic classes over palette classes** for surfaces, text, borders, and actions.
- **One spacing scale.** Use the Tailwind scale; do not arbitrary-value every gap.
- **Arbitrary values are a last resort**, and when used three times they become a token.
- **A component variant is better than a conditional class soup.**
- **Do not restyle a shadcn primitive into an inaccessible custom control.**
- **Keep focus-visible styles.** shadcn primitives ship them; do not remove the ring.
- **`space-y-*` is fine for stacks; do not mix margin and gap for the same relationship.**
- **Custom fonts via `next/font` or CSS variables**, not a `<link>` to Google Fonts.

## Defaults

| Decision | Default |
|---|---|
| Color usage | Semantic tokens (`bg-background`) |
| Variants | `cva` |
| Class merge | `cn()` (clsx + tailwind-merge) |
| Radius | One `--radius` with derived sizes |
| Dark mode | `data-theme`/`class` + CSS variables |
| Component ownership | Copy into the repo, review, then customize |
| Icons | One library, consistent size |
| Arbitrary values | Only when a token does not exist |

## Anti-patterns

- `className="bg-[#4f7cff] text-[#fff] p-[13px]"` repeated everywhere.
- Dynamic class construction that Tailwind purges.
- Rewriting `Dialog` without focus management.
- Adding `dark:` to every utility instead of switching tokens.
- Twelve variant props on one button.
- Copying a shadcn component and deleting its `aria-*` attributes.
- Mixing two icon libraries at different stroke widths.
- Using `!important` to beat specificity.

## Pre-handoff checklist

- [ ] Semantic tokens drive color and radius.
- [ ] Variants live in `cva`, not in JSX conditionals.
- [ ] `cn()` used for merging.
- [ ] No dynamic class names.
- [ ] shadcn accessibility preserved (focus, keyboard, ARIA).
- [ ] Dark mode works through tokens.
- [ ] No arbitrary hex values in components.
- [ ] Production build removes unused CSS.
- [ ] Long class strings extracted into components.

## Example prompt

> “Kami memakai shadcn/ui dan Tailwind. Tombol, kartu, dan input punya warna hex langsung dan
> dark mode-nya tidak konsisten. Rapikan tanpa mengganti library.”

Expected result: CSS-variable theme mapped through Tailwind, semantic classes in components,
`cva` variants for button/card/input, preserved focus rings and dialog behavior, and a
consistent dark mode through token switching.

## Bahasa Indonesia

**Kapan dipakai:** saat memakai Tailwind/shadcn dan class menumpuk, token melenceng, atau dark
mode tidak konsisten.

**Langkah:** definisikan token CSS → petakan ke Tailwind → gunakan variant `cva` → gunakan
`cn()` → pertahankan aksesibilitas primitif shadcn → ekstrak pola berulang → periksa build
produksi.

**Default:** class semantik (`bg-background`), `cva` untuk varian, satu `--radius`, dark mode
lewat token.

**Larangan:** hex langsung di className, class dinamis yang dipurge, menulis ulang Dialog tanpa
focus management, `dark:` di setiap utility, `!important`, menghapus atribut ARIA shadcn.

## Attribution

Ditulis ulang dari `MengTo/Skills` → `agent-skills/web-design/tailwindcss` (MIT, Meng To).
Teks lisensi asli: `LICENSE-UPSTREAM-mengto.txt`. Perubahan: ditambahkan aturan shadcn/ui,
`cva`, dan checklist; tidak ada kode upstream yang disalin.
