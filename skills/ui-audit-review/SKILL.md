---
name: ui-audit-review
description: Use when reviewing an existing interface for usability, visual quality, accessibility, and consistency, or when asked for a design critique with prioritized fixes.
description_id: Gunakan saat meninjau antarmuka yang ada untuk kegunaan, kualitas visual, aksesibilitas, dan konsistensi, atau saat diminta kritik desain dengan perbaikan berprioritas.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: quality
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [audit, review, critique, usability, heuristics, prioritization]
source: https://github.com/pbakaus/impeccable
original_author: Paul Bakaus
original_license: Apache-2.0
upstream_commit: 695cea5c6d1cbd420fc331375c7ef126a774e5f7
---

> Derived work from `pbakaus/impeccable` (Apache-2.0), which started from Anthropic's
> `frontend-design`. This file has been rewritten and reorganized. See `MODIFICATIONS.md`,
> `LICENSE-UPSTREAM-paulbakaus.txt`, and `NOTICE-UPSTREAM.md`.

# UI Audit and Review

A review is not a list of opinions. It is a ranked set of observed problems with evidence and a
named next action.

## When to use

- A page “feels off” but nobody can say why.
- Before a launch or a redesign.
- After an agent-generated UI needs a quality gate.
- A stakeholder asks for “a design review” with no format.
- Accessibility, consistency, or responsiveness is suspected but unmeasured.

## Inputs to ask for

1. The screen or flow, and how to run it.
2. The target user and the job they are doing.
3. The review depth: quick pass, full audit, or pre-launch gate.
4. Known constraints: brand, legacy components, deadline.
5. Whether screenshots are available at 390, 768, and 1440.

## The review passes

Run in this order. Stop early only if the screen cannot be reached.

| # | Pass | Look for |
|---|---|---|
| 1 | Task clarity | Can a new user say what this is and what to do in 5 seconds? |
| 2 | Hierarchy | One dominant element per screen; headings form an outline |
| 3 | Layout | Equal margins, section rhythm, no dead half-screen |
| 4 | Typography | Scale, measure, line-height, wrapping, font loading |
| 5 | Color | Contrast, accent discipline, status not color-only |
| 6 | Components | State completeness, consistency, touch targets |
| 7 | Content | Specific labels, errors, empty states, no filler |
| 8 | Keyboard | Focus order, visible focus, traps, Escape |
| 9 | Screen reader | Names, landmarks, announcements, table semantics |
| 10 | Responsive | 320/390/768/1440, reflow, table strategy |
| 11 | Motion | Purpose, reduced motion, jank |
| 12 | Performance | LCP, CLS, image weight, font requests |
| 13 | Trust | Data freshness, destructive confirmations, permissions |
| 14 | Distinctiveness | Does it look like every other generated page? |

## Severity

| Level | Meaning | Action |
|---|---|---|
| P0 | Blocks task or excludes users | Fix before ship |
| P1 | Causes errors, confusion, or failed WCAG AA | Fix this cycle |
| P2 | Slows users, weak hierarchy, inconsistency | Fix next cycle |
| P3 | Polish | Backlog |

## Workflow

1. **Record the before.** Take screenshots at three widths in light and dark. Do not review
   from memory.
2. **Walk the primary task.** Try to complete it as a new user. Note every hesitation.
3. **Run the passes.** For each finding, write: location, observation, evidence, severity,
   recommendation.
4. **Measure, do not guess.** Contrast ratio, line length, target size, heading order.
5. **Rank.** Sort by severity, then by effort. The top three must be unambiguous.
6. **Write the critique in the user’s language.** Name what works before what does not, but do
   not soften the severity.
7. **Re-review after fixes.** Compare before/after at the same widths.

## Finding format

```text
[P1] Checkout — “Bayar” button
Observed: white text on #f5b301 (2.0:1) fails WCAG AA.
Evidence: contrast ratio computed, screenshot at 390px.
Recommendation: use a darker action token (#8a5a00) or dark text; re-check hover and focus.
```

## Decision rules

- **No finding without evidence.** “Feels cluttered” is not a finding; “three competing primary
  buttons within 400px” is.
- **Rank by user impact, not by aesthetic preference.**
- **Do not rewrite the whole product in a review.** Name the three changes that matter most.
- **Separate bugs from taste.** Label subjective suggestions as such.
- **Do not praise generically.** Name the specific decision that works.
- **Do not review only the hero.** The footer, errors, and empty states are part of the UI.
- **Never claim a test you did not run.** “Not tested with a screen reader” is a valid finding.

## Defaults

| Decision | Default |
|---|---|
| Viewports | 390, 768, 1440 |
| Themes | Light and dark |
| Top fixes | 3 |
| Severity scale | P0–P3 |
| Accessibility target | WCAG 2.2 AA |
| Evidence | Screenshot + measurement |
| Output | Findings table + top 3 + what works |

## Anti-patterns

- A 40-item list with no priority.
- “Make it pop” as a recommendation.
- Reviewing code instead of the rendered result.
- Ignoring mobile.
- Treating brand preference as a usability bug.
- Claiming WCAG compliance after an automated scan only.
- Rewriting copy without checking the product’s actual behavior.
- Softening a P0 into a suggestion.

## Pre-handoff checklist

- [ ] Every finding has location, evidence, severity, and recommendation.
- [ ] Top three fixes are named.
- [ ] Both themes and three widths reviewed.
- [ ] Keyboard path tested.
- [ ] Contrast measured, not estimated.
- [ ] Empty, error, and loading states reviewed.
- [ ] Limitations of the review stated.
- [ ] What works is named specifically.

## Example prompt

> “Review halaman settings ini. Saya merasa ada yang salah tapi tidak tahu apa. Fokus ke
> usability dan aksesibilitas.”

Expected result: a findings table with measured contrast and target sizes, a keyboard walk
revealing the missing focus style, three ranked fixes, and a note that screen-reader testing
was not performed.

## Bahasa Indonesia

**Kapan dipakai:** saat meninjau UI yang sudah ada atau menjadi gerbang kualitas sebelum rilis.

**Langkah:** rekam kondisi awal di tiga lebar → jalankan tugas utama → lakukan 14 pass → catat
temuan dengan bukti → ukur, jangan menebak → urutkan P0–P3 → tulis tiga perbaikan teratas →
tinjau ulang setelah perbaikan.

**Default:** viewport 390/768/1440, terang dan gelap, tiga perbaikan teratas, target WCAG 2.2 AA.

**Larangan:** temuan tanpa bukti, daftar 40 item tanpa prioritas, “buat lebih menarik”,
meninjau kode alih-alih hasil render, mengklaim uji yang tidak dijalankan.

## Attribution

Ditulis ulang dari `pbakaus/impeccable` (Apache-2.0, Paul Bakaus), yang dimulai dari
`anthropics/skills` `frontend-design`. Teks lisensi dan NOTICE asli disertakan. Perubahan:
format temuan, skala severity, dan 14 pass disusun ulang; tidak ada kode upstream yang
disalin.
