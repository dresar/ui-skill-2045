# Rencana Pembangunan `ui-skill-2045`

> Status: rencana kerja tertulis, disusun 4 November 2026.
> Angka **2045** adalah arah, bukan klaim: antarmuka masa depan yang dapat dipakai hari ini.

## 1. Prinsip kerja

1. **Verifikasi sebelum menyalin.** Setiap sumber diperiksa langsung di GitHub: README, file lisensi, lisensi per folder, dan commit HEAD. Tidak ada URL, versi, jumlah skill, atau lisensi yang dikarang.
2. **Hanya lisensi permisif.** MIT, Apache-2.0, BSD, ISC, CC0. Tanpa lisensi = seluruh hak dipegang pemilik = tidak disalin.
3. **Atribusi tidak boleh hilang.** Teks lisensi asli, copyright asli, dan NOTICE Apache dipertahankan apa adanya.
4. **Tulis ulang, bukan tempel.** Setiap skill dibaca, digabung, dipangkas, lalu ditulis ulang sebagai prosedur yang dapat dieksekusi.
5. **Setiap tahap harus lulus validasi.** Tidak ada tahap yang dianggap selesai sebelum validator, tes, dan build hijau.

## 2. Tahap

| # | Tahap | Keluaran | Gerbang kualitas |
|---|---|---|---|
| 0 | Riset sumber | `docs/sources.md`, `docs/rejected-sources.md` | Setiap baris punya URL, lisensi, commit SHA, status |
| 1 | Kerangka repo | `LICENSE`, `package.json`, `.gitignore`, `PLAN.md` | `git status` bersih dan terstruktur |
| 2 | Kurasi 18 skill | `skills/<nama>/SKILL.md`, `references/`, `LICENSE-UPSTREAM*` | Frontmatter lengkap, nama folder cocok, < 500 baris |
| 3 | Tema | `docs/themes/*.md`, `data/themes.mjs` | 11 tema, kontras teks AA terverifikasi skrip |
| 4 | Preview mandiri | `skills/*/preview/index.html`, `docs/themes/previews/*.html` | Tanpa dependensi eksternal, responsif, bisa dibuka langsung |
| 5 | Registry + validator | `skills.json`, `scripts/*.mjs` | Registry deterministik; validator menolak pelanggaran |
| 6 | CLI | `packages/cli/**` | `list`, `add`, `remove`, `update`, `--agent`, `--dir`, `--force`; tes lulus |
| 7 | Situs Next.js | `site/**` | Static export, basePath, i18n ID/EN, light/dark, a11y |
| 8 | CI/CD | `.github/workflows/*.yml` | Validator + tes + build pada PR; deploy Pages pada main |
| 9 | Evaluasi | `evals/**` | 3 prompt nyata per skill + rubrik + hasil |
| 10 | Dokumentasi | `README.md`, `THIRD_PARTY_NOTICES.md`, `CONTRIBUTING.md`, dll. | Semua tautan internal valid |

## 3. Kandidat skill (18)

Fondasi dan sistem: `design-system-tokens`, `typography-system`, `color-contrast`, `spacing-layout`.
Komponen dan layar: `ui-components`, `dashboard-admin`, `empty-error-states`.
Interaksi dan kualitas: `motion-system`, `accessibility-wcag`, `responsive-adaptive`, `dark-mode`, `ux-writing`, `ui-audit-review`, `anti-slop-design`, `frontend-performance`.
Stack: `nextjs-react-patterns`, `tailwind-shadcn`.
Tema: `theme-recipes`.

Penggabungan yang disengaja:

- Skill tombol, kartu, form, tabel, dan navigasi digabung menjadi `ui-components` agar tidak ada lima skill yang saling bertentangan.
- Dashboard dan admin panel digabung menjadi `dashboard-admin`; empty state dan error state digabung menjadi `empty-error-states`.
- Seluruh tema ditangani satu skill `theme-recipes` dengan referensi dan token CSS, bukan 11 skill duplikat.

## 4. Aturan keputusan lisensi

- **Diterima untuk diturunkan:** `anthropics/skills` (hanya folder `frontend-design`, Apache-2.0), `pbakaus/impeccable` (Apache-2.0 + NOTICE), `nextlevelbuilder/ui-ux-pro-max-skill` (MIT), `Leonxlnx/taste-skill` (MIT), `MengTo/Skills` (MIT), `ibelick/ui-skills` (MIT), `umutc6230/ui-design-skills-pack` (MIT, dialihkan dari `palamut62`).
- **Hanya dirujuk, tidak disalin:** `vercel-labs/agent-skills` (tidak ada file LICENSE).
- **Ditolak:** `JevonsCode/codex-skills` dan `jwynia/agent-skills` (tanpa lisensi); `docx`, `pdf`, `pptx`, `xlsx` dari `anthropics/skills` (all-rights-reserved, blob lisensi `c55ab422...`).
- Keraguan lisensi = tidak disalin dan dicatat untuk ditinjau pemilik.

## 5. Definition of done

- [ ] `npm run validate` lulus tanpa error.
- [ ] `npm test` lulus (CLI + kontrak registry).
- [ ] `npm run build` menghasilkan `site/out` dan seluruh preview dapat dibuka mandiri.
- [ ] Semua tautan internal di README dan situs tidak rusak.
- [ ] Semua pasangan warna teks/latar di dokumentasi tema lolos WCAG AA.
- [ ] `skills.json` sinkron dengan folder `skills/`.
- [ ] Tidak ada rahasia, token, atau data pribadi di repositori.

## 6. Catatan hukum

Dokumen dan mekanisme lisensi di repositori ini adalah praktik rekayasa, **bukan nasihat hukum**. Pemilik repositori tetap harus meninjau `THIRD_PARTY_NOTICES.md` dan berkonsultasi dengan penasihat hukum bila diperlukan.
