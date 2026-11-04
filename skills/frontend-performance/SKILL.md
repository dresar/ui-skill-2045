---
name: frontend-performance
description: Use when a page loads slowly, shifts while loading, ships too much JavaScript, or animates poorly on mid-range phones.
description_id: Gunakan saat halaman lambat dimuat, bergeser saat loading, mengirim terlalu banyak JavaScript, atau beranimasi buruk di ponsel kelas menengah.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: engineering
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [performance, core-web-vitals, images, fonts, javascript, bundle, cls]
source: https://github.com/ibelick/ui-skills
original_author: Julien Thibeaut
original_license: MIT
upstream_commit: 73fb128d046d1f0d74c2909cd26eb616e3415567
---

# Frontend Performance

Performance is a design constraint. The fastest animation is the one that does not block the
first paint.

## When to use

- LCP is above 2.5s, CLS above 0.1, or INP above 200ms.
- A page ships more JavaScript than content.
- Images are large, unresponsive, or shift the layout.
- Fonts block rendering or flash.
- Motion janks on a mid-range Android phone.

## Inputs to ask for

1. Target devices and network conditions.
2. Current Core Web Vitals or Lighthouse report.
3. Framework and rendering mode (SSR, SSG, CSR, RSC).
4. Third-party scripts and analytics.
5. Whether a performance budget exists.

## Workflow

1. **Measure the real page**, on a production build, with CPU and network throttling. Note LCP,
   CLS, INP, total JS, and image weight.
2. **Fix the largest cause first.** Usually: hero image, font, or a client component that
   should be server-rendered.
3. **Optimize images.**
   - Explicit `width` and `height`, or `aspect-ratio`.
   - `srcset`/`sizes` for responsive delivery.
   - AVIF/WebP with a fallback.
   - `loading="lazy"` below the fold; `fetchpriority="high"` on the LCP image.
   - Never ship a 2400px image into a 400px slot.
4. **Tame fonts.**
   - System UI or self-hosted variable font.
   - `font-display: swap` or `optional`.
   - Preload only the weight used above the fold.
   - Subset to the languages shipped.
5. **Cut client JavaScript.**
   - Keep interactive islands small; do not make the whole page a client component.
   - Dynamic-import dialogs, charts, editors, and heavy libraries.
   - Remove unused dependencies; check the bundle analyzer.
   - Prefer CSS for effects that do not need JS.
6. **Reserve space to prevent CLS.** Skeletons and media must match final dimensions.
7. **Defer third parties.** Analytics, chat widgets, and A/B tools load after interaction or
   with a consent gate.
8. **Animate only transform and opacity**, and test at 4× CPU throttle.
9. **Add a budget to CI.** Fail the build when JS or image weight exceeds the budget.

## Decision rules

- **The LCP element is usually an image or a heading.** Optimize that one thing first.
- **A spinner is not a performance strategy.** Server-render the shell.
- **`loading="lazy"` on the LCP image makes it slower.** Do not blanket-lazy-load.
- **A font used once is a cost with no benefit.** Use system UI.
- **A 3D scene or shader must justify its weight** with content, not decoration.
- **No layout shift from late-loading banners, cookie bars, or ads.** Reserve the space.
- **Measure on a mid-range device**, not only a developer laptop.
- **Do not optimize what you have not measured.**

## Defaults

| Decision | Default |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| JS budget | < 170KB gzip for the initial route |
| Hero image | AVIF/WebP, explicit dimensions, priority |
| Fonts | System or self-hosted, ≤ 2 files |
| Lazy loading | Below fold only |
| Third parties | Deferred or consent-gated |
| Animation | transform/opacity only |

## Anti-patterns

- A 3MB hero video autoplaying on mobile.
- `loading="lazy"` on the first image.
- Three webfonts with `font-display: block`.
- A client component wrapping the entire page.
- Shipping a chart library for one sparkline.
- Analytics blocking hydration.
- Images without dimensions.
- A skeleton with different dimensions from the content.
- Animating `box-shadow` or `filter` on scroll.

## Pre-handoff checklist

- [ ] Lighthouse/CWV measured on a production build.
- [ ] LCP image prioritized and correctly sized.
- [ ] All images have dimensions or aspect ratio.
- [ ] Fonts are system or self-hosted with `swap`.
- [ ] No unnecessary client component.
- [ ] Heavy libraries are dynamically imported.
- [ ] Third parties are deferred.
- [ ] No CLS from late content.
- [ ] Motion tested at 4× CPU throttle.
- [ ] A bundle budget exists in CI.

## Example prompt

> “Landing page Next.js kami punya LCP 4.1s di ponsel. Hero-nya gambar 3000px dan ada tiga
> webfont. Perbaiki tanpa mengubah desain.”

Expected result: responsive AVIF/WebP hero with `fetchpriority="high"`, one self-hosted variable
font, removal of two font requests, reserved dimensions, and a measured before/after LCP.

## Bahasa Indonesia

**Kapan dipakai:** saat halaman lambat, bergeser, atau mengirim terlalu banyak JavaScript.

**Langkah:** ukur build produksi → perbaiki penyebab terbesar → optimalkan gambar → kendalikan
font → kurangi JS klien → reservasi ruang → tunda pihak ketiga → uji animasi di CPU 4× →
tetapkan anggaran di CI.

**Default:** LCP < 2.5s, CLS < 0.1, INP < 200ms, JS awal < 170KB gzip, font sistem atau satu
font mandiri.

**Larangan:** `loading="lazy"` pada gambar LCP, tiga webfont `font-display: block`, seluruh
halaman menjadi client component, pustaka grafik untuk satu sparkline, gambar tanpa dimensi.

## Attribution

Ditulis ulang dari `ibelick/ui-skills` (MIT, Julien Thibeaut). Teks lisensi asli:
`LICENSE-UPSTREAM-ibelick.txt`. Perubahan: disusun menjadi prosedur optimasi dengan anggaran
dan checklist. Rujukan konseptual: `vercel-labs/agent-skills` (tidak disalin; tanpa lisensi).
