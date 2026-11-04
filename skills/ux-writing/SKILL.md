---
name: ux-writing
description: Use when interface copy is vague, cute, or blaming, or when writing buttons, errors, empty states, onboarding, and settings labels that must be clear in English and Indonesian.
description_id: Gunakan saat teks antarmuka kabur, terlalu lucu, atau menyalahkan pengguna, atau saat menulis tombol, error, empty state, onboarding, dan label pengaturan yang harus jelas dalam bahasa Inggris dan Indonesia.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: interaction
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [ux-writing, microcopy, content-design, bilingual, errors, buttons]
source: https://github.com/anthropics/skills
original_author: Anthropic, PBC
original_license: Apache-2.0
upstream_commit: ca45fc496a3436251f191354091d557da31c15b5
---

> Derived work from `anthropics/skills` → `skills/frontend-design` (Apache-2.0). This file has
> been rewritten and expanded. See `MODIFICATIONS.md` and `LICENSE-UPSTREAM-anthropic.txt`.

# UX Writing

Words are interface. They are not decoration added after the layout is finished.

## When to use

- Buttons say “Submit”, “OK”, or “Yes”.
- Errors apologize and explain nothing.
- Empty states have no next action.
- Labels describe the system (“webhook config”) instead of the user’s task.
- The product must speak Indonesian and English consistently.

## Inputs to ask for

1. Audience and their vocabulary.
2. Brand voice: formal, conversational, technical, playful.
3. Languages and whether copy is translated or transcreated.
4. The action’s real consequence.
5. Legal or compliance wording that cannot change.

## Workflow

1. **Name the user’s task, not the system.** “Notifikasi” not “Konfigurasi webhook”.
2. **Write from the user’s side of the screen.** “Simpan perubahan” not “Kirim”.
3. **Use one name per concept.** If the button says “Publikasikan”, the toast says
   “Dipublikasikan”. Do not switch to “Rilis” in the next screen.
4. **Say what happens.** A destructive action names the object and the consequence.
5. **Write errors as facts plus a fix.** What happened, why if known, what to do.
6. **Write empty states as an invitation.** What will appear and how to create it.
7. **Cut filler.** “Silakan”, “Mohon”, “Untuk melakukan”, and “dalam rangka” are usually
   removable.
8. **Test the sentence without the design.** If it is ambiguous as plain text, it is ambiguous
   in the UI.

## Patterns

| Element | Rule | Good | Bad |
|---|---|---|---|
| Button | Verb + object | “Simpan perubahan” | “Submit” |
| Link | Says the destination | “Lihat faktur” | “Klik di sini” |
| Error | Fact + fix | “Email belum terdaftar. Periksa ejaan atau daftar.” | “Oops! Something went wrong.” |
| Empty | What + how | “Belum ada faktur. Buat faktur pertama Anda.” | “No data.” |
| Success | Names the change | “Faktur #1042 terkirim.” | “Success!” |
| Required | Text, not only `*` | “Wajib diisi” | “*” |
| Loading | What is loading | “Memuat faktur…” | “Loading…” |
| Confirmation | Names the object | “Hapus 12 pengguna?” | “Apakah Anda yakin?” |
| Settings | User outcome | “Kirim ringkasan mingguan” | “Aktifkan cron job” |

## Bilingual rules

- **Write both languages at the same time.** Do not translate word-for-word from English.
- **Keep the same information density.** Indonesian often needs fewer words; do not pad.
- **Use sentence case in both languages.**
- **Keep product nouns consistent.** If “Workspace” stays English, keep it English everywhere.
- **Format numbers, dates, and currency per locale.** `Rp1.250.000` vs `IDR 1,250,000`.
- **Do not mix languages inside one sentence** unless the term is a product name.
- **Test truncation in both.** Indonesian words are often longer.

## Decision rules

- **Active voice.** “Sistem akan mengirim” → “Kami mengirim”.
- **Second person, not “the user”.** “Anda” or “kamu”, chosen once.
- **No exclamation marks for errors.**
- **No jokes in failure paths.**
- **No blame.** “Email tidak cocok” not “Anda salah memasukkan email”.
- **No vague success.** Name the object.
- **No uppercase shouting.** Sentence case for UI copy.
- **No placeholder as label.** In either language.
- **Do not promise what the system cannot do.** Verify the consequence.

## Defaults

| Decision | Default |
|---|---|
| Case | Sentence case |
| Person | “Anda” (formal) / “you” |
| Button length | ≤ 24 characters |
| Error tone | Neutral, specific, actionable |
| Empty state | 1 sentence + 1 action |
| Success | Names object + next step |
| Tone | Conversational, plain verbs |

## Anti-patterns

- “Oops”, “Whoops”, “Uh oh”.
- “Something went wrong.”
- “Are you sure?” with no object.
- “Click here”.
- “Please” in every sentence.
- Marketing superlatives inside product UI.
- Mixed languages in one label.
- Translating a product term inconsistently.
- Blaming the user for a system failure.

## Pre-handoff checklist

- [ ] Every button is verb + object.
- [ ] Every error names the operation and the fix.
- [ ] Every empty state offers a next action.
- [ ] One concept has one name across the flow.
- [ ] No blame, no jokes in failure paths.
- [ ] Both languages carry the same information.
- [ ] Numbers, dates, and currency are localized.
- [ ] Copy fits at 320px in both languages.
- [ ] Screen reader text is complete (no “click here”).

## Example prompt

> “Tulis ulang copy onboarding untuk aplikasi kasir kecil. Bahasa Indonesia dan Inggris.
> Hindari kata ‘silakan’ dan jangan menyalahkan pengguna saat gagal.”

Expected result: task-based labels, a three-step onboarding with one action per step, error
copy that states the cause and fix, and parallel EN/ID strings with matching density.

## Bahasa Indonesia

**Kapan dipakai:** saat copy antarmuka kabur, terlalu lucu, menyalahkan, atau tidak konsisten
antar bahasa.

**Langkah:** sebut tugas pengguna → tulis dari sisi pengguna → satu nama untuk satu konsep →
jelaskan akibat → tulis error sebagai fakta + perbaikan → tulis empty state sebagai ajakan →
pangkas kata pengisi → uji sebagai teks biasa.

**Default:** sentence case, “Anda”, tombol ≤ 24 karakter, error netral dan spesifik, empty
state satu kalimat + satu aksi.

**Larangan:** “Oops”, “Something went wrong”, “Apakah Anda yakin?” tanpa objek, “Klik di sini”,
campur bahasa dalam satu label, pujian pemasaran di dalam produk.

## Attribution

Ditulis ulang dari bagian penulisan pada `anthropics/skills` → `skills/frontend-design`
(Apache-2.0, Anthropic, PBC). Teks lisensi asli: `LICENSE-UPSTREAM-anthropic.txt`. Perubahan:
ditambahkan aturan bilingual, tabel pola, dan checklist.
