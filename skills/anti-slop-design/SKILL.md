---
name: anti-slop-design
description: Use when a page looks generic, templated, or obviously AI-generated, or when starting a design that must have a specific point of view rather than the default SaaS look.
description_id: Gunakan saat halaman terlihat generik, seperti template, atau jelas dibuat AI, atau saat memulai desain yang harus punya sudut pandang khusus, bukan tampilan SaaS bawaan.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: quality
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [anti-slop, art-direction, design-taste, distinctiveness, critique]
source: https://github.com/Leonxlnx/taste-skill
additional_sources: [https://github.com/pbakaus/impeccable, https://github.com/anthropics/skills]
original_author: Leonxlnx
original_license: MIT
upstream_commit: 12af471f627f866411b4bd785b19646d3672784c
---

> Derived work combining `Leonxlnx/taste-skill` (MIT), `pbakaus/impeccable` (Apache-2.0), and
> `anthropics/skills` `frontend-design` (Apache-2.0). Rewritten and reorganized. See
> `MODIFICATIONS.md`, both upstream licenses, and `NOTICE-UPSTREAM.md` where applicable.

# Anti-Slop Design

Slop is not ugly. Slop is undecided. It is the average of every page the model has seen,
reproduced with confidence.

## When to use

- A page has all the right components and no point of view.
- The hero is a centered headline, a gradient, and two pill buttons.
- Every section is the same three-card grid.
- The user says “this looks AI-made”, “generic”, or “like a template”.
- Starting a landing page, portfolio, product page, or marketing site from scratch.

Do not use this skill to justify ignoring a client’s explicit brand direction. The brief wins.

## Inputs to ask for

1. What the product or subject actually is, in plain language.
2. Audience and the one action the page must produce.
3. Real assets: photographs, product shots, screenshots, a logo, or none.
4. Existing brand constraints.
5. What competitors look like, so the page does not join them.

If the brief is vague, make a specific proposal and state your reading in one line. Ask only
when a missing fact blocks the work.

## The method

### 1. Inventory the subject

Write 8–12 things that belong to this subject and to no competitor: its name and what it means,
its street, its materials, its numbers, its constraints, its rituals, its printed artefacts.
This inventory is where the idea comes from.

### 2. Write the argument

List the page as claims with their proof, one line per section. Delete any section with no
claim. This prevents the stock sequence: hero → logos → three features → testimonial → pricing
→ CTA.

### 3. Find the idea

Complete this sentence with something from the inventory:

> On this page, **[something only this subject has]** becomes **[the visual or interactive device]**.

Apply the competitor test: put the nearest competitor in the sentence. If it still works, the
idea belongs to the category, not the subject. “Clean and modern” is not an idea.

### 4. Make one live thing

Give the visitor one thing to do or see that changes with their input and uses the subject’s
real content: choose a material and see the piece; set an amount and see the real monthly
figure; type a name and see it set in the brand’s lettering.

Rules: works on a phone with a thumb, has a plain fallback, never blocks reading, and is one
thing—not a playground.

### 5. Build substance, not just restraint

Removing ornaments is half the job. A page that lost its cards and labels but gained nothing
reads as thin. Fill the space with:

- larger type and full content;
- a field of flat color;
- real imagery of the subject’s world;
- a drawn diagram or object made for this subject.

### 6. Look, then fix

Screenshot at 390, 768, and 1440. Review with `ui-audit-review`. Fix the top three. Look again.
At most three rounds.

## The tells (ban list)

See `references/tells.md` for the long list. The short list:

- Cream/beige ground with terracotta accent.
- Near-black ground with one acid-green accent.
- Violet-to-blue gradients, especially on buttons and text.
- The SaaS card kit: identical rounded cards, same soft shadow, one radius everywhere.
- A small uppercase tracked eyebrow above every heading.
- Numbered markers `01 / 02 / 03` when the content is not a sequence.
- A single accented word in an otherwise plain headline.
- Emoji as icons.
- Glass panels and floating pill navigation used as default chrome.
- Three feature cards with icon tiles.
- Fake dashboards made of gray bars and invented numbers.
- Hairline rules and boxes used as decoration.
- Fade-up animation on every section.
- Monospace labels for “technical” flavor.

Some of these are legitimate for a specific brief. The rule is: they must be a decision, not a
default.

## Decision rules

- **Spend boldness in one place.** One memorable element; everything around it quiet.
- **One accent, one action, one dominant image.**
- **If an element does not carry information or content, delete it.**
- **If the idea works for a competitor, it is not an idea.**
- **If the page needs animation to look finished, it is not finished.**
- **If removing the ornament leaves a void, add substance, not another ornament.**
- **Never invent proof**: no fake customers, quotes, reviews, logos, or statistics.

## Defaults

| Decision | Default |
|---|---|
| Type families | 1, maximum 2 |
| Accent colors | 1 |
| Radii | One decision: square or one consistent radius |
| Shadows | None at rest; only floating layers |
| Gradients | None unless the subject requires one |
| Cards | Only when grouping matters |
| Motion | One orchestrated moment + feedback |
| Headline | ≤ 2 lines at every width |
| Imagery | One dominant image beats six small ones |

## Anti-patterns

- Designing from a moodboard of other generated pages.
- Adding “premium” via gradients and glass.
- Using a component library’s default theme and calling it a design.
- Copying a competitor’s structure with different colors.
- Filling silence with fake metrics.
- Using animation to hide weak content.
- Adding an eyebrow label to make a section look designed.
- Treating “minimal” as “empty”.

## Pre-handoff checklist

- [ ] The idea sentence names something only this subject has.
- [ ] A competitor test fails (the idea does not transfer).
- [ ] Every section has a claim and real content.
- [ ] One live/interactive element exists, with a fallback.
- [ ] No item from the tell list appears without a stated reason.
- [ ] The page is readable with motion disabled.
- [ ] No proof is invented.
- [ ] Screenshots reviewed at three widths.
- [ ] The page would be recognizable without its logo.

## Example prompt

> “Buat landing page untuk kedai kopi yang memanggang sendiri di Bandung. Jangan pakai gaya
> krem-terracotta yang biasa. Satu halaman, harus terasa seperti kedai ini, bukan kedai kopi
> mana pun.”

Expected result: an idea drawn from the roastery (roast dates, the drum, the street), one
dominant image, a real roast-date interaction, no cream/terracotta default, and copy that names
the actual batches.

## Bahasa Indonesia

**Kapan dipakai:** saat halaman terasa generik atau jelas dibuat AI, atau saat memulai desain
yang butuh sudut pandang.

**Langkah:** inventaris hal yang hanya dimiliki subjek → tulis argumen per seksi → temukan ide
→ buat satu elemen hidup → isi ruang dengan substansi → lihat tangkapan layar dan perbaiki.

**Default:** satu keluarga font, satu aksen, satu radius, tanpa gradien dan bayangan kecuali
perlu, judul maksimal dua baris.

**Larangan:** krem–terracotta, gradien violet–biru, kartu SaaS identik, eyebrow kapital,
nomor 01/02/03 tanpa urutan, emoji sebagai ikon, dashboard palsu, fade-up di semua seksi,
bukti palsu.

## Attribution

Ditulis ulang dan digabung dari `Leonxlnx/taste-skill` (MIT, Leonxlnx),
`pbakaus/impeccable` (Apache-2.0, Paul Bakaus), dan `anthropics/skills` `frontend-design`
(Apache-2.0, Anthropic, PBC). Semua teks lisensi asli disertakan. Perubahan: digabung menjadi
satu prosedur, daftar tell dipadatkan, dan contoh Indonesia ditambahkan.
