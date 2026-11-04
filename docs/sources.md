# Sumber yang Diterima dan Dirujuk

Verifikasi dilakukan langsung terhadap GitHub pada **4 November 2026**. Kolom commit adalah
`HEAD` default branch saat verifikasi (`git ls-remote <repo> HEAD`), bukan commit saat menulis
dokumen ini. Lisensi diperiksa dari file `LICENSE`/`LICENSE.txt` asli, bukan dari badge atau
klaim README.

## Ringkasan

| # | Repository | Pemilik | Lisensi | HEAD commit | Tag terakhir | Status | Dipakai untuk |
|---|---|---|---|---|---|---|---|
| 1 | [anthropics/skills](https://github.com/anthropics/skills) — folder `skills/frontend-design` saja | Anthropic, PBC | Apache-2.0 (per folder; root repo **tanpa** lisensi) | `ca45fc496a3436251f191354091d557da31c15b5` | tidak ada tag | **Diterima** | `typography-system`, `ux-writing`, `design-system-tokens`, `anti-slop-design` |
| 2 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Paul Bakaus | Apache-2.0 + `NOTICE.md` | `695cea5c6d1cbd420fc331375c7ef126a774e5f7` | `skill-v4.8.0` | **Diterima** | `ui-audit-review`, `empty-error-states`, `anti-slop-design` |
| 3 | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Next Level Builder | MIT | `ccce51cba388476d4f403091ddb91636d5cd9fed` | `v2.9.0` (`65e2319…`) | **Diterima** | `color-contrast`, `dark-mode`, `responsive-adaptive`, `theme-recipes` |
| 4 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Leonxlnx | MIT | `12af471f627f866411b4bd785b19646d3672784c` | `v2.1.5` (sama dengan HEAD) | **Diterima** | `anti-slop-design`, `spacing-layout`, `dashboard-admin`, `responsive-adaptive` |
| 5 | [MengTo/Skills](https://github.com/MengTo/Skills) | Meng To | MIT | `1de14e21b2ba8937c0f7f6ddca581cf7cd9d94af` | **tidak ada tag** — commit SHA wajib dicatat | **Diterima** | `ui-components`, `motion-system`, `tailwind-shadcn`, `theme-recipes` |
| 6 | [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | Julien Thibeaut | MIT | `73fb128d046d1f0d74c2909cd26eb616e3415567` | `v0.2.3` (`4d766c6…`) | **Diterima** | `design-system-tokens`, `accessibility-wcag`, `frontend-performance` |
| 7 | [umutc6230/ui-design-skills-pack](https://github.com/umutc6230/ui-design-skills-pack) — dialihkan dari `palamut62` | palamut62 | MIT (copyright asli: `Copyright (c) 2026 palamut62`) | `4ffc9d638e32f1332fc7ac74e3060e6278743d4b` | tidak ada tag | **Diterima, tidak dipakai** | Kandidat terverifikasi; tidak ada materi unik yang dipakai |
| 8 | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | Vercel Labs | **Tidak ada file LICENSE** (metadata GitHub: `license: null`) | `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62` | `agent-skills-…` (commit-tag) | **Hanya dirujuk, tidak disalin** | Referensi konseptual untuk `nextjs-react-patterns`, `accessibility-wcag`, `frontend-performance` |

## Catatan per sumber

### 1. anthropics/skills

- README memuat daftar skill dan menyebut lisensi per folder; **tidak ada `LICENSE` di root**
  (`license: null` pada metadata GitHub).
- `skills/frontend-design/LICENSE.txt` (blob `f433b1a53f5b830a205fd2df78e2b34974656c7b`,
  10.174 byte) adalah **Apache License 2.0** tanpa baris copyright tambahan.
- Folder `docx`, `pdf`, `pptx`, dan `xlsx` memakai blob lisensi yang sama,
  `c55ab42224874608473643de0a85736b7fec0730` (1.467 byte), berisi
  “© 2025 Anthropic, PBC. All rights reserved.” dan larangan menyalin, membuat karya turunan,
  serta mendistribusikan. **Tidak disalin.**
- Hanya isi `frontend-design` yang dibaca dan ditulis ulang. Tidak ada file dari folder lain
  yang disalin.

### 2. pbakaus/impeccable

- `LICENSE` adalah Apache License 2.0 dengan baris `Copyright 2025 Paul Bakaus`.
- `NOTICE.md` mencantumkan karya pihak ketiga: `ehmo/platform-design-skills` (MIT), yang
  memengaruhi `skill/reference/ios.md` dan `skill/reference/android.md`. NOTICE tersebut
  **dipertahankan** di `skills/*/NOTICE-UPSTREAM.md` untuk setiap skill turunan Impeccable.
- README menyatakan proyek dimulai dari `anthropics/skills` `frontend-design`, sehingga kedua
  atribusi (Anthropic dan Paul Bakaus) dicatat.

### 3. nextlevelbuilder/ui-ux-pro-max-skill

- `LICENSE` MIT, `Copyright (c) 2024 Next Level Builder`.
- Berisi basis data gaya, palet, pasangan font, dan panduan UX dengan skrip pencarian Python.
  Kami tidak menyalin basis data mentah; kami menulis ulang aturan yang relevan dan
  memverifikasi kontras secara mandiri.

### 4. Leonxlnx/taste-skill

- `LICENSE` MIT, `Copyright (c) 2026 Leonxlnx`.
- Tag `v2.1.5` menunjuk tepat ke HEAD `12af471…`.
- `SKILL.md` asli ±39 KB dan memuat banyak aturan “house style”. Kami memadatkannya menjadi
  satu skill anti-slop yang dapat dieksekusi, bukan menyalin seluruh teks.

### 5. MengTo/Skills

- `LICENSE` MIT, `Copyright (c) 2026 Meng To`.
- **Tidak ada rilis bertag** (`git ls-remote --tags` mengembalikan 0). Commit SHA dicatat di
  setiap frontmatter dan di `THIRD_PARTY_NOTICES.md`.
- Berisi puluhan skill web design (GSAP, Three.js, Tailwind, glass UI, dan lain-lain). Kami
  hanya mengambil pola yang relevan dan menulis ulang; tidak menyalin aset biner.

### 6. ibelick/ui-skills

- `LICENSE` MIT, `Copyright (c) 2026 Julien Thibeaut`.
- Tag terakhir `v0.2.3` (`4d766c6…`) berbeda dari HEAD; kami memakai HEAD dan mencatatnya.

### 7. umutc6230/ui-design-skills-pack

- URL yang diminta, `palamut62/ui-design-skills-pack`, **dialihkan** oleh GitHub ke
  `umutc6230/ui-design-skills-pack`. Keduanya menunjuk repositori yang sama.
- `LICENSE` MIT dengan copyright **tetap atas nama `palamut62`**; nama itu tidak diganti.
- Repositori kecil (4 bintang, 0 fork, tanpa tag). Karena itu statusnya “diterima, tidak dipakai”:
  lisensinya sah, tetapi tidak ada materi unik yang kami butuhkan. Tidak ada teks dari repo ini
  yang disalin. Lisensi aslinya tetap disimpan di `docs/upstream-licenses/palamut62-mit.txt`.

### 8. vercel-labs/agent-skills

- Tidak ada `LICENSE` di root dan metadata GitHub menunjukkan `license: null`.
- README tidak memuat teks lisensi lengkap yang dapat dianggap sebagai pemberian lisensi.
- Karena itu **tidak ada teks, kode, atau struktur file yang disalin**. Skill
  `nextjs-react-patterns` ditulis dari pengetahuan umum tentang Next.js/React dan hanya
  menyebut repo ini sebagai bacaan lanjutan.

## Sumber lain yang dipertimbangkan

Direktori komunitas seperti `skills.sh`, `skillsmp.com`, dan daftar `awesome-claude-skills`
disebut dalam brief sebagai titik awal penelusuran. Pada sesi ini, verifikasi dilakukan
**langsung ke repositori GitHub kandidat** (lisensi, README, commit); tidak ada teks dari
direktori tersebut yang disalin.

| Repository | Alasan tidak dipakai |
|---|---|
| `ehmo/platform-design-skills` | Hanya diketahui dari NOTICE Impeccable; lisensi MIT diklaim di NOTICE, tetapi tidak diverifikasi langsung pada sesi ini. Tidak disalin. |
| `JevonsCode/codex-skills` | Tanpa lisensi → ditolak. Lihat `docs/rejected-sources.md`. |
| `jwynia/agent-skills` | Tanpa lisensi → ditolak. Lihat `docs/rejected-sources.md`. |

## Pernyataan

Repositori ini tidak berafiliasi dengan, tidak disponsori oleh, dan tidak didukung oleh
Anthropic, Paul Bakaus, Next Level Builder, Leonxlnx, Meng To, Julien Thibeaut, palamut62,
atau Vercel Labs. Nama dan tautan digunakan semata-mata untuk atribusi.

Dokumen ini bukan nasihat hukum.
