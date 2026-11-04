---
name: motion-system
description: Use when adding transitions, page-load animation, scroll effects, or interaction feedback, and when motion feels gratuitous, janky, or ignores reduced-motion preferences.
description_id: Gunakan saat menambahkan transisi, animasi saat halaman dimuat, efek scroll, atau umpan balik interaksi, dan ketika gerak terasa berlebihan, patah-patah, atau mengabaikan preferensi reduced-motion.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: interaction
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [motion, animation, transitions, reduced-motion, performance, gsap]
source: https://github.com/MengTo/Skills
original_author: Meng To
original_license: MIT
upstream_commit: 1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af
---

# Motion System

Motion explains change. If nothing changed, nothing should move.

## When to use

- Adding interaction feedback to buttons, cards, menus, or dialogs.
- A page loads with a fade-and-slide on every section and feels generated.
- A scroll effect causes jank or layout shift.
- A component animates in a way that ignores `prefers-reduced-motion`.
- Choosing between CSS transitions, the View Transitions API, and a library.

## Inputs to ask for

1. What changes: state, position, size, presence, or attention.
2. Frequency: every click, once per page, or once per session.
3. Performance budget and target devices.
4. Whether the motion is decorative or explanatory.
5. Framework and whether a library is already present.

## The motion budget

| Use | Duration | Easing |
|---|---|---|
| Hover / press feedback | 120–180ms | ease-out |
| Tooltip / popover | 150–200ms | ease-out |
| Dialog / drawer | 200–300ms | cubic-bezier(0.22, 1, 0.36, 1) |
| Page transition | 250–400ms | ease-in-out |
| Entrance (once) | 300–500ms | ease-out, no bounce |
| Loading loop | 800–1400ms | linear or ease-in-out |
| Attention pulse | ≤ 2 cycles | ease-in-out |

Rules:

- Stagger children by 40–80ms, never 200ms.
- Move 8–32px, not 200px.
- Animate `transform` and `opacity` only. Never animate `width`, `height`, `top`, `left`, or
  `box-shadow` in a loop.
- One orchestrated moment per page beats ten scattered fades.
- No bounce or spring on serious actions (payment, deletion, security).
- Motion must never delay reading. Content is visible without JavaScript.

## Workflow

1. **Name the job.** “Show that the row was added”, “Confirm the dialog opened”, “Draw attention
   to the changed total”. If you cannot name it, delete it.
2. **Choose the cheapest mechanism.** CSS transition for state, CSS keyframes for one-shot,
   View Transitions for route changes, a library only for orchestration that CSS cannot do.
3. **Set tokens.** Duration and easing live in the design system, not in each component.
4. **Implement the reduced-motion path first.**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
   Then remove non-essential transform travel, not just its duration.
5. **Test with the CPU throttled 4×** and on a mid-range phone. If it drops frames, simplify.
6. **Check layout stability.** Animate from a reserved space; never let the final layout jump.
7. **Provide an off switch** for looping or attention-seeking motion.

## Decision rules

- **State change gets feedback; page load does not get a performance.** Do not animate every
  section into view.
- **Hover is not available on touch.** Never hide essential information behind hover.
- **A loading animation is not a progress indicator.** If you know the progress, show it.
- **Do not animate focus.** Focus rings appear immediately.
- **Respect `prefers-reduced-motion` for scroll-driven effects.** Disable pinning, parallax,
  and large travel; keep the content in place.
- **Do not use animation to mask slow loading.** Optimize the load instead.
- **Do not animate a layout property on a list.** Use FLIP or the View Transitions API.

## Defaults

| Decision | Default |
|---|---|
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Fast | 120ms |
| Base | 200ms |
| Slow | 320ms |
| Entrance distance | 16px |
| Stagger | 60ms |
| Reduced motion | Content visible, travel removed |
| Scroll effects | Opt-in, never required for comprehension |

## Anti-patterns

- Fade-and-slide-up on every section.
- Hover scale on every card.
- A 2s hero animation that blocks the headline.
- Parallax that causes motion sickness.
- Scroll-jacking.
- Infinite looping animation next to body text.
- Animating `height: auto` and causing layout thrash.
- Ignoring `prefers-reduced-motion`.
- A library imported for one hover effect.

## Pre-handoff checklist

- [ ] Every animation has a named purpose.
- [ ] Durations and easings come from tokens.
- [ ] Only transform and opacity animate in loops.
- [ ] Reduced-motion path removes travel and looping.
- [ ] Content is readable before the animation runs.
- [ ] No layout shift at the end of the animation.
- [ ] Tested at 4× CPU throttle.
- [ ] Scroll effects are optional and do not block reading.

## Example prompt

> “Tambahkan animasi ke halaman pricing: kartu unggulan harus terasa lebih hidup, tapi saya
> tidak mau efek fade-up di semua bagian.”

Expected result: a single orchestrated entrance for the featured card, hover elevation on all
cards with 160ms transitions, a reduced-motion path, and no scroll-jacking.

## Bahasa Indonesia

**Kapan dipakai:** saat menambah transisi, animasi masuk, efek scroll, atau umpan balik.

**Langkah:** beri nama tujuan → pilih mekanisme termurah → gunakan token durasi/easing →
implementasikan reduced-motion lebih dulu → uji dengan CPU 4× lebih lambat → pastikan layout
stabil → sediakan cara mematikan animasi berulang.

**Default:** easing `cubic-bezier(0.22, 1, 0.36, 1)`, 120/200/320ms, jarak masuk 16px, stagger
60ms.

**Larangan:** fade-up di setiap seksi, hover scale di semua kartu, animasi yang menunda teks,
parallax yang memicu mabuk gerak, scroll-jacking, menganimasikan `height: auto`.

## Attribution

Ditulis ulang dari `MengTo/Skills` → `agent-skills/web-design` (MIT, Meng To), dengan rujukan
pola audit dari `pbakaus/impeccable` (Apache-2.0). Teks lisensi asli:
`LICENSE-UPSTREAM-mengto.txt`. Perubahan: disusun menjadi anggaran gerak dan prosedur;
tidak ada kode GSAP/Three.js upstream yang disalin.
