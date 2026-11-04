---
name: empty-error-states
description: Use when designing first-run screens, zero-result views, 404/500 pages, loading states, or failure messages that currently blame the user or say nothing useful.
description_id: Gunakan saat merancang layar pertama, hasil kosong, halaman 404/500, loading, atau pesan kegagalan yang saat ini menyalahkan pengguna atau tidak menjelaskan apa pun.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: components
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [empty-state, error-state, loading, onboarding, recovery, ux-writing]
source: https://github.com/pbakaus/impeccable
original_author: Paul Bakaus
original_license: Apache-2.0
upstream_commit: 695cea5c6d1cbd420fc331375c7ef126a774e5f7
---

> Derived work from `pbakaus/impeccable` (Apache-2.0), which itself started from Anthropic's
> `frontend-design`. This file has been rewritten and reorganized. See `MODIFICATIONS.md`,
> `LICENSE-UPSTREAM-paulbakaus.txt`, and `NOTICE-UPSTREAM.md`.

# Empty and Error States

Failure and emptiness are moments for direction, not mood. Tell the person what happened, what
it means, and what to do next.

## When to use

- First run: the user has no data yet.
- Zero results after a search or filter.
- A request fails, times out, or returns a 404/500.
- A permission is missing.
- Content is loading and the layout jumps.
- An action succeeds but nothing confirms it.

## Inputs to ask for

1. The cause: no data, no match, no permission, network failure, server failure.
2. Whether retry is possible and safe.
3. The next best action.
4. Who can unblock the user.
5. The product voice: formal, conversational, technical.

## The four-part message

Every empty or error state answers:

1. **What happened** — specific, in the interface's voice.
2. **Why** — only if known. Never invent a cause.
3. **What to do next** — one primary action, plus one escape hatch.
4. **What it costs** — only when relevant (data is safe, nothing was charged).

Example:

> **No invoices yet**
> Invoices appear here after you send your first one.
> [Create invoice] [Import from CSV]

Example error:

> **We couldn't load your invoices**
> The connection dropped before the list arrived. Your data is safe.
> [Try again] [Check status]

## Workflow

1. **Classify the state.** Empty-because-new, empty-because-filtered, empty-because-error,
   empty-because-permission. They need different copy and actions.
2. **Preserve context.** Keep the page frame, navigation, and filters visible. Never replace the
   whole app with a full-screen illustration.
3. **Write the headline as the state, not an apology.** “No results for ‘budi’” beats
   “Oops!”.
4. **Give one primary action.** “Clear filters”, “Create project”, “Retry”, “Request access”.
5. **Provide an escape hatch.** Link to help, status page, or a support path.
6. **Design the loading state as the final layout.** Use skeletons with the same dimensions as
   the content. Avoid spinners that replace the page.
7. **Handle partial failure.** If one widget fails, fail that widget, not the dashboard.
8. **Make retry idempotent and visible.** Disable while retrying, announce the result.

## Decision rules

- **Never blame the user.** “You entered the wrong email” → “That email doesn’t match our
  records.”
- **Never say “Something went wrong.”** Name the operation that failed.
- **Never use “Oops”, “Whoops”, or an exclamation mark** for a real failure.
- **Do not show a stack trace, status code, or request ID as the only explanation.** Keep the
  ID as secondary detail for support.
- **Distinguish empty from error.** An empty list is not a failure.
- **Distinguish no-results from no-data.** “No matches” must offer “clear filters”; “no data”
  must offer creation.
- **A 404 is not a dead end.** Offer search, navigation, and the closest relevant link.
- **Skeletons must not lie about layout.** If the final card is 320px tall, the skeleton is
  320px tall.

## Defaults

| State | Headline pattern | Primary action |
|---|---|---|
| First run | “[Object] will appear here” | Create / import |
| No results | “No results for ‘[query]’” | Clear filters |
| Network error | “We couldn’t load [object]” | Try again |
| Permission | “You don’t have access to [object]” | Request access |
| 404 | “We couldn’t find that page” | Go home / search |
| 500 | “This page didn’t load” | Reload / status |
| Success | “[Object] saved” | View / undo |
| Loading | No headline | Skeleton |

## Anti-patterns

- A sad-face illustration and no action.
- “Oops! Something went wrong.” with no retry.
- A full-screen error that hides navigation.
- A spinner that replaces the entire layout.
- An empty state that says “No data” without explaining how data arrives.
- A success toast that says “Success” without naming what succeeded.
- An error that exposes a raw stack trace to end users.
- A retry button that fires multiple requests while already retrying.
- A 404 page with only “404”.

## Pre-handoff checklist

- [ ] Every state names the operation and the next action.
- [ ] Empty, no-results, error, and permission are distinct.
- [ ] Loading skeleton matches final layout dimensions.
- [ ] Retry is disabled while in flight and announces the result.
- [ ] Navigation and filters remain visible.
- [ ] Copy is in the interface voice, sentence case, no blame.
- [ ] Success confirms the specific change.
- [ ] Screen reader announcements use `role="status"` or `role="alert"` appropriately.

## Example prompt

> “Halaman daftar proyek kami menampilkan layar kosong saat filter tidak menemukan apa pun.
> Perbaiki agar pengguna tahu harus apa.”

Expected result: separate “no projects yet” and “no matches for filters” states, a clear-filter
action, preserved filter chips, and a create action when the account is genuinely empty.

## Bahasa Indonesia

**Kapan dipakai:** saat merancang layar pertama, hasil kosong, 404/500, loading, atau pesan
gagal.

**Langkah:** klasifikasikan state → pertahankan konteks halaman → tulis judul yang spesifik →
beri satu aksi utama dan satu jalan keluar → rancang skeleton sesuai layout akhir → tangani
kegagalan sebagian → buat retry yang aman.

**Default:** “No results for ‘…’” + “Clear filters”; “We couldn’t load …” + “Try again”;
skeleton seukuran konten asli; toast sukses menyebut objek yang berubah.

**Larangan:** “Oops!”, “Something went wrong” tanpa detail, menyalahkan pengguna, stack trace
sebagai penjelasan utama, spinner menutup seluruh layout, error full-screen tanpa navigasi.

## Attribution

Ditulis ulang dari `pbakaus/impeccable` (Apache-2.0, Paul Bakaus), yang dimulai dari
`anthropics/skills` `frontend-design`. Teks lisensi dan NOTICE asli disertakan. Perubahan:
pola empat bagian, tabel default, dan checklist ditambahkan; tidak ada kode upstream yang
disalin.
