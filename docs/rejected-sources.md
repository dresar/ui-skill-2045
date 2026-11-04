# Sumber yang Ditolak

Kebijakan: **tanpa lisensi berarti seluruh hak dipegang pemilik.** Tidak ada penyalinan,
tidak ada “inspirasi dekat”, tidak ada penulisan ulang yang menjiplak struktur kalimat.
Repositori di bawah ini tidak dipakai sebagai bahan turunan.

Diverifikasi 4 November 2026.

## Ditolak: tanpa lisensi

### JevonsCode/codex-skills

- URL: https://github.com/JevonsCode/codex-skills
- HEAD: `45a32832b0f62a73105b0e801b07015138af3295`
- Metadata lisensi GitHub: `null`
- File `LICENSE` / `LICENCE` / `COPYING`: tidak ditemukan
- Deskripsi: “Personal Codex skills and preference references.”
- Keputusan: **Ditolak.** Deskripsi menyebut “personal”, tidak ada lisensi, dan tidak ada
  pemberian hak yang jelas. Tidak ada file yang dibaca untuk diturunkan.

### jwynia/agent-skills

- URL: https://github.com/jwynia/agent-skills
- HEAD: `e02ec7e226a6e4f8419fd3b88a1d8e472d421b32`
- Metadata lisensi GitHub: `null`
- File `LICENSE`: tidak ditemukan
- Keputusan: **Ditolak.** Tidak ada lisensi. Tidak ada file yang disalin.

## Ditolak: all-rights-reserved di dalam repo berlisensi per folder

### anthropics/skills — `docx`, `pdf`, `pptx`, `xlsx`

- URL: https://github.com/anthropics/skills
- HEAD: `ca45fc496a3436251f191354091d557da31c15b5`
- Keempat folder memakai blob lisensi identik:
  `c55ab42224874608473643de0a85736b7fec0730` (1.467 byte).
- Isi lisensi: “© 2025 Anthropic, PBC. All rights reserved.”; melarang ekstraksi,
  reproduksi, pembuatan karya turunan, distribusi, dan rekayasa balik.
- Keputusan: **Ditolak.** Tidak ada file dari keempat folder ini yang disalin. Root repo juga
  tidak memiliki lisensi, sehingga hanya `frontend-design` (Apache-2.0 per folder) yang dipakai.

## Ditolak: hanya dirujuk karena lisensi tidak jelas

### vercel-labs/agent-skills

- URL: https://github.com/vercel-labs/agent-skills
- HEAD: `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`
- Metadata lisensi GitHub: `null`; tidak ada file `LICENSE`.
- Keputusan: **Tidak disalin.** Statusnya “referensi saja”. Tidak ada instruksi, kode, atau
  teks dari repo ini yang masuk ke skill mana pun. Bila pemilik repo menambahkan lisensi
  permisif di kemudian hari, status dapat ditinjau ulang.

## Ditolak: tidak dapat diverifikasi pada sesi ini

### `ehmo/platform-design-skills`

- Hanya disebut di `NOTICE.md` milik `pbakaus/impeccable` sebagai MIT.
- Kami tidak memverifikasi lisensinya langsung, sehingga tidak ada file yang disalin dari
  sumber ini. NOTICE asli tetap dipertahankan karena diwajibkan Apache-2.0.

## Aturan untuk kontributor

Jangan membuka PR yang menyalin dari sumber tanpa lisensi, berlisensi GPL/AGPL, atau
berlisensi proprietary. Jika lisensi sebuah sumber ambigu:

1. Jangan salin.
2. Tambahkan entri di dokumen ini dengan URL, commit, dan alasan.
3. Tandai `needs-owner-review` pada PR.

Dokumen ini bukan nasihat hukum.
