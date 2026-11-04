# Changelog

Semua perubahan penting dicatat di sini. Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
dan [Semantic Versioning](https://semver.org/).

## [1.0.0] — 2026-11-04

Rilis awal.

### Added

- **18 skill** yang ditulis ulang dan dikurasi: `design-system-tokens`, `typography-system`,
  `color-contrast`, `spacing-layout`, `ui-components`, `dashboard-admin`, `empty-error-states`,
  `motion-system`, `accessibility-wcag`, `responsive-adaptive`, `dark-mode`, `ux-writing`,
  `ui-audit-review`, `anti-slop-design`, `frontend-performance`, `nextjs-react-patterns`,
  `tailwind-shadcn`, `theme-recipes`.
- **11 tema** dengan dokumentasi dan preview mandiri: soft-blue-neumorphism, glassmorphism,
  aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism,
  bento-grid, editorial-serif, claymorphism, blueprint-grid.
- **88 uji kontras WCAG AA** yang dijalankan saat generate tema; build gagal bila ada yang
  di bawah ambang.
- **CLI** `ui-skill-2045` dengan `list`, `add`, `add --all`, `add --theme`, `remove`, `update`,
  `--agent`, `--dir`, `--skill`, dan `--force`; 12 tes otomatis.
- **Validator** untuk frontmatter, kecocokan nama folder, preview mandiri, atribusi, lisensi,
  tautan relatif, ukuran file, dan sinkronisasi `skills.json`.
- **Situs Next.js** static export dengan pencarian, filter, pagination, halaman detail skill,
  katalog tema, halaman instalasi, kontribusi, atribusi, sitemap, OG, ID/EN, dan light/dark.
- **Dokumentasi**: README, PLAN, `docs/sources.md`, `docs/rejected-sources.md`,
  `THIRD_PARTY_NOTICES.md`, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY.
- **CI**: validasi pada PR, tes CLI, build situs, deploy GitHub Pages, dan rilis ZIP.
- **Evals**: tiga prompt nyata dan rubrik untuk setiap skill.

### Changed

- Tidak ada. Ini rilis pertama.

### Security

- Tidak ada dependensi runtime pihak ketiga pada CLI.
- Preview dan situs tidak memuat skrip eksternal.
- Tidak ada rahasia di repositori.

### Notes

- `LICENSE` mencatat `Copyright (c) 2026 EKA SYARIF MAULANA`.
- Paket npm belum dipublikasikan.
- Situs memakai `https://dresar.github.io/ui-skill-2045/` setelah Pages diaktifkan.
