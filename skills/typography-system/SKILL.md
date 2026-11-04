---
name: typography-system
description: Use when choosing typefaces, building a type scale, fixing hierarchy, or making headlines and body text feel intentional rather than default.
description_id: Gunakan saat memilih typeface, menyusun skala tipografi, memperbaiki hierarki, atau membuat judul dan teks isi terasa disengaja, bukan bawaan.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: foundation
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [typography, type-scale, hierarchy, fonts, readability]
source: https://github.com/anthropics/skills
original_author: Anthropic, PBC
original_license: Apache-2.0
upstream_commit: ca45fc496a3436251f191354091d557da31c15b5
---

> Derived work from `anthropics/skills` → `skills/frontend-design` (Apache-2.0). This file has
> been rewritten, condensed, and reorganized. See `MODIFICATIONS.md` and
> `LICENSE-UPSTREAM-anthropic.txt`.

# Typography System

Type is the interface. Choose it once, set it deliberately, and stop decorating it.

## When to use

- A page has a heading and body but no visible hierarchy.
- The design uses one size for everything and bold to compensate.
- Fonts load from three networks and flash on every navigation.
- A headline wraps to four lines on mobile and collides with the hero image.
- The copy is readable but the page feels generically “AI-made”.

## Inputs to ask for

1. Brand voice: editorial, technical, warm, luxury, brutal, playful.
2. Real content: the longest headline, the longest label, the longest table cell.
3. Language coverage: Latin only, or Latin + Cyrillic/Greek/Arabic/Chinese.
4. Loading constraints: offline, no external requests, or a strict performance budget.
5. Existing brand font that must stay.

## Workflow

1. **Pick one family, or two that are clearly different.** One family is normal. Two is the
   limit. A geometric display face paired with a neo-grotesque body face is usually a
   non-decision; pair by contrast of role, not by fashion.
2. **Define the scale.** Body 16px minimum. Ratio 1.2–1.333 for product UI, 1.333–1.5 for
   editorial. Five sizes are usually enough:

   ```css
   --text-xs: 0.75rem;   /* 12px, metadata only */
   --text-sm: 0.875rem;  /* 14px, labels and dense UI */
   --text-base: 1rem;    /* 16px, body */
   --text-lg: 1.25rem;   /* 20px, section lead */
   --text-xl: clamp(1.75rem, 3vw, 2.5rem);   /* section heading */
   --text-2xl: clamp(2.5rem, 6vw, 4.5rem);   /* page title */
   ```

3. **Set the measure.** Body line length 45–75 characters. Serif body gets slightly more
   line-height (1.6–1.7) than sans (1.45–1.6). Never let a paragraph run the full width of a
   desktop screen.
4. **Set hierarchy with size and space first.** Weight second, color third. If hierarchy only
   works because the heading is blue, it is not hierarchy.
5. **Write the headline for the width.** Keep the main headline to two lines or fewer at every
   breakpoint. Shorten words before shrinking type. On a 390px phone, roughly 28–32 characters
   per line at a confident size.
6. **Load fonts safely.** Prefer system UI or a bundled variable font. If a webfont is
   required: self-host, `font-display: swap`, preload the one weight used above the fold, and
   subset. Never block rendering on three families.
7. **Verify with real content.** Test the longest string, not “Lorem ipsum”. Check the 200%
   zoom case and the 320px viewport.

## Decision rules

- **One display moment per page.** Do not set the hero, every section heading, and every card
  title at display size.
- **Do not accent a single word** in a headline with italic, color, or a different family.
  It is the most common generated-page tell. Use the words for emphasis.
- **No all-caps labels with wide tracking** unless the content is genuinely a code, unit, or
  abbreviation. Sentence case is more readable.
- **No eyebrow labels** (“FEATURES”, “HOW IT WORKS”) above headings unless they carry
  information the heading cannot.
- **Tabular figures for numbers that align.** Use `font-variant-numeric: tabular-nums` in
  tables, metrics, and prices.
- **Monospace only for code and machine data.** Not for decorative labels.
- **Left-align by default.** Center at most one short moment, usually the hero of a campaign
  page. Never center long body copy.

## Defaults

| Decision | Default |
|---|---|
| Body size | 16px (14px only in dense tables) |
| Body line-height | 1.5 |
| Heading line-height | 1.1–1.2 |
| Display tracking | -0.02em to -0.04em |
| Body tracking | 0 |
| Measure | 65ch maximum |
| Heading weight | 600–700 |
| Body weight | 400 |
| Font loading | System stack or self-hosted variable font |
| Minimum body contrast | 4.5:1 |

## Anti-patterns

- Inter for every project with no other decision.
- Gradient text on a headline.
- A 72px hero on mobile that pushes the value proposition below the fold.
- Three font families: display, body, and “accent”.
- Letter-spacing that makes 12px text unreadable.
- Justified text without hyphenation.
- Headline and body in the same weight and size, separated only by color.
- Uppercase body copy.

## Pre-handoff checklist

- [ ] One or two families maximum, with a stated role for each.
- [ ] Scale has five or fewer active sizes on a page.
- [ ] Main headline is ≤ 2 lines at 390px, 768px, and 1440px.
- [ ] Body measure is 45–75 characters.
- [ ] No webfont request blocks first paint.
- [ ] Numbers in tables use tabular figures.
- [ ] Text at 200% zoom does not clip or overlap.
- [ ] Contrast checked for body, muted, and placeholder text.

## Example prompt

> “Landing page untuk studio arsitektur. Judulnya panjang: ‘Rumah yang tumbuh bersama
> penghuninya’. Buat tipografi yang tenang dan editorial, tanpa font eksternal.”

Expected result: a system serif/sans pairing or a single well-set family, a five-step scale, a
headline rewritten to fit two lines, a 65ch measure, and a note that the headline was shortened
rather than shrunk.

## Bahasa Indonesia

**Kapan dipakai:** saat hierarki tipografi tidak terlihat, judul pecah di ponsel, atau font
terasa generik.

**Langkah:** pilih satu keluarga (maksimal dua) → susun skala 5 langkah → tentukan measure
45–75 karakter → atur tinggi baris → uji dengan konten terpanjang → periksa pemuatan font.

**Default:** body 16px, line-height 1.5, heading 1.1–1.2, measure 65ch, maksimal dua keluarga.

**Larangan:** menebalkan satu kata di judul, label huruf kapital berjarak lebar, monospace
dekoratif, teks gradien, tiga keluarga font, teks rata kanan-kiri tanpa hyphenation.

## Attribution

Ditulis ulang dari `anthropics/skills` → `skills/frontend-design` (Apache-2.0, Anthropic,
PBC). Teks lisensi asli: `LICENSE-UPSTREAM-anthropic.txt`. Perubahan: skala konkret, aturan
pemuatan font, checklist, dan contoh ditambahkan.
