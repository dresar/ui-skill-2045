# Site

Situs katalog statis untuk ui-skill-2045. Next.js App Router, TypeScript, `output: "export"`.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000/ui-skill-2045/` (basePath diterapkan di development juga).

## Build

```bash
npm run build
```

Hasil ada di `out/`. Script `prebuild` menyalin preview skill dan tema dari repositori induk ke
`public/`, serta menghasilkan `generated/themes.json`.

## Deploy

Workflow [`.github/workflows/deploy-site.yml`](../.github/workflows/deploy-site.yml) membangun
situs dan mengunggah `out/` sebagai artifact GitHub Pages.

Konfigurasi penting di [`next.config.ts`](next.config.ts):

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- `basePath: "/ui-skill-2045"`
- `assetPrefix: "/ui-skill-2045/"`

`public/.nojekyll` mencegah pemrosesan Jekyll.

## Struktur

```text
app/
  page.tsx              beranda
  skills/               galeri + detail
  themes/               katalog + detail
  install/              tiga jalur instalasi
  contribute/           panduan kontribusi
  sources/              atribusi dan sumber yang ditolak
  sitemap.ts robots.ts   SEO
components/             tampilan klien
lib/
  data.ts               pembacaan build-time (skills.json, SKILL.md, docs)
  contrast.ts           audit kontras tema
  i18n.tsx              kamus ID/EN
  markdown.ts           renderer markdown tanpa dependensi
```

Data skill dibaca dari `../skills.json`, `../skills/*/SKILL.md`, dan `../docs/`. Tidak ada API
runtime; semuanya dirender saat build.

## Catatan

- Jangan menambahkan skrip eksternal; situs harus tetap berjalan tanpa pihak ketiga.
- Jaga kontras dan fokus; token situs ada di `app/globals.css`.
- `npm run build` di root menjalankan seluruh pipeline (skill, validator, situs).
