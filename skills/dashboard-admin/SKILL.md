---
name: dashboard-admin
description: Use when designing dashboards, admin panels, analytics views, or any dense screen people work in, especially when metrics, tables, and filters compete for attention.
description_id: Gunakan saat merancang dashboard, panel admin, tampilan analitik, atau layar padat tempat orang bekerja, terutama ketika metrik, tabel, dan filter saling berebut perhatian.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: components
themes: [soft-blue-neumorphism, glassmorphism, minimal-monochrome, dark-neumorphism, bento-grid, cyber-neon, blueprint-grid]
tags: [dashboard, admin, analytics, data-table, filters, empty-state]
source: https://github.com/Leonxlnx/taste-skill
original_author: Leonxlnx
original_license: MIT
upstream_commit: 12af471f627f866411b4bd785b19646d3672784c
---

# Dashboard and Admin

A dashboard is a work surface, not a poster. Optimize for the next decision, not for the
screenshot.

## When to use

- Building an analytics, operations, finance, or admin screen.
- A dashboard has twelve equal stat cards and no answer.
- Users cannot tell what changed, what is urgent, or what to do next.
- Tables, filters, and charts are visually louder than the data.
- An admin screen has no empty, loading, or permission state.

## Inputs to ask for

1. The primary job: monitor, triage, approve, edit, or report.
2. The top three questions a user asks on arrival.
3. Data freshness and update cadence.
4. Roles and permissions.
5. The worst-case data: many rows, long names, zero rows, an error.

## Workflow

1. **Write the questions.** “Is anything on fire?”, “What changed since yesterday?”, “What needs
   my approval?” Every module must answer one. Delete modules that answer none.
2. **Choose the layout by job, not by fashion.**
   - Monitor: summary row + trend + alert list.
   - Triage: queue/table first, detail second.
   - Approve: item detail + decision panel.
   - Report: filters + chart + export.
3. **Order by urgency.** Errors and blockers above trends; trends above vanity totals.
4. **Design the summary row.** Three to five metrics maximum, each with a label, a value, a
   comparison, and a time window. No metric without a denominator or timeframe.
5. **Build the table before the charts.** Most admin work happens in tables. Get density,
   sorting, filtering, selection, and pagination right first.
6. **Make filters visible and reversible.** Show active filters as chips with individual
   clear buttons and a “reset all”. Preserve filters in the URL.
7. **Design the states.** Loading skeleton matching the final layout, empty state with a next
   action, error state with retry, permission state that explains who can grant access.
8. **Respect density.** Admin screens can be compact, but touch targets stay 44px on touch
   devices.

## Decision rules

- **A number without context is decoration.** “1.284” means nothing without “vs. yesterday”
  or “of 2.000”.
- **Do not use a chart for one number.** Use a stat. Do not use a pie chart for more than
  three slices.
- **Do not color-code status alone.** Pair with a label or icon.
- **The primary action is one per screen.** In a queue, the row action is primary; “export”
  is secondary.
- **Destructive actions require a named confirmation.** “Hapus 12 pengguna?” not “Apakah Anda
  yakin?”.
- **Never auto-refresh without a visible timestamp and a pause.** Users need to trust the data.
- **Dense does not mean cramped.** Use 32–40px row heights with clear alignment, not 24px.

## Defaults

| Decision | Default |
|---|---|
| Sidebar | 240px, collapsible under 1024px |
| Summary metrics | 3–5 |
| Table row | 48px comfortable, 40px compact |
| Page padding | 24px |
| Filter location | Above the table, persists in URL |
| Pagination | 20–50 rows, server-side beyond 100 |
| Chart height | 240–320px |
| Refresh | Manual + timestamp; auto-refresh opt-in |
| Skeleton | Matches final layout exactly |

## Anti-patterns

- A wall of identical KPI cards.
- A line chart with no axis labels or units.
- A donut chart with eight colors.
- “Total users” with no time window.
- A table that silently hides columns on mobile.
- Filters that reset on navigation.
- A loading spinner over the whole screen instead of a layout skeleton.
- An empty dashboard with no explanation of how data appears.
- An “export” button that produces a different dataset than the table.

## Pre-handoff checklist

- [ ] Every module answers a stated question.
- [ ] Summary metrics include comparison and timeframe.
- [ ] Table supports sorting, filtering, and empty/loading/error states.
- [ ] Active filters are visible and individually removable.
- [ ] Destructive actions name the object and require confirmation.
- [ ] Permissions are explained, not just blocked.
- [ ] Mobile has a deliberate table strategy.
- [ ] Charts have labels, units, and an accessible text summary.
- [ ] Data freshness is visible.

## Example prompt

> “Dashboard admin untuk tim support: tiket masuk, SLA, dan antrean. Mereka perlu tahu dalam
> 5 detik apakah ada yang terlambat.”

Expected result: an alert module above the metrics, three summary metrics with time windows,
an SLA trend with a threshold line, a queue table sorted by urgency, and a visible “last
updated” timestamp.

## Bahasa Indonesia

**Kapan dipakai:** saat membangun dashboard, panel admin, atau layar analitik yang padat.

**Langkah:** tulis pertanyaan pengguna → pilih layout sesuai pekerjaan → urutkan berdasarkan
urgensi → rancang baris metrik → bangun tabel → tampilkan filter aktif → lengkapi state →
jaga kepadatan.

**Default:** sidebar 240px, 3–5 metrik, baris tabel 48px, padding 24px, pagination 20–50,
timestamp data terlihat.

**Larangan:** dinding kartu KPI, grafik tanpa satuan, pie chart 8 irisan, angka tanpa konteks,
filter yang hilang saat navigasi, aksi destruktif tanpa nama objek.

## Attribution

Ditulis ulang dari `Leonxlnx/taste-skill` (MIT, Leonxlnx), dengan rujukan konseptual pada
`nextlevelbuilder/ui-ux-pro-max-skill` (MIT). Teks lisensi asli:
`LICENSE-UPSTREAM-leonxlnx.txt`. Perubahan: difokuskan pada layar kerja, ditambah matriks
keputusan dan checklist.
