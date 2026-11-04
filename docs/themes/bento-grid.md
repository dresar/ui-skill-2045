# Bento Grid

> Panel modular, bobot berbeda, satu jalur baca jelas.
> Modular panels, different weights, one clear reading path.

[Lihat preview HTML mandiri](./previews/bento-grid.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Bento adalah komposisi panel yang tidak sama. Kualitasnya bergantung pada hierarki: satu sel besar, beberapa sel sedang, dan sel pendukung kecil. Sel yang sama besar menghasilkan dashboard tanpa isi. Panel harus memperoleh ukurannya dari konten.

Bento is a composition of unequal panels. Its quality depends on hierarchy: one large cell, a few medium cells, and small supporting cells. Equal cells produce a dashboard of nothing. Panels should earn their size with content.

## Kapan dipakai

- Ringkasan fitur dan pemasaran produk
- Satu layar yang merangkum produk
- Portofolio dengan media campuran

## Kapan dihindari

- Prosa panjang
- Formulir dan tugas berurutan
- Konten yang butuh satu urutan baca

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#f4f5f7` |
| `surface` | `#ffffff` |
| `surfaceAlt` | `#eef1f6` |
| `text` | `#14181f` |
| `muted` | `#4e5b70` |
| `accent` | `#3b5bdb` |
| `accentText` | `#ffffff` |
| `border` | `#e0e5ee` |
| `focus` | `#2f4bc0` |
| `shadowDark` | `#dde2ea` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#868b93` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#0e1117` |
| `surface` | `#161b24` |
| `surfaceAlt` | `#1c2330` |
| `text` | `#eef2f8` |
| `muted` | `#a3aec2` |
| `accent` | `#7c9cff` |
| `accentText` | `#0b1020` |
| `border` | `#2a3444` |
| `focus` | `#9db4ff` |
| `shadowDark` | `#07090d` |
| `shadowLight` | `#232c3a` |
| `borderStrong` | `#59626f` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 12px / 18px / 24px |
| Border | 1px |
| Bayangan naik | `none` |
| Bayangan pressed | `none` |
| Prinsip kedalaman | Tone panel dan jarak. Satu ketebalan border. Tanpa bayangan. |

`--color-border` adalah pemisah dekoratif. Untuk batas kontrol yang harus dikenali
(input, select, tombol outline), gunakan `--color-border-strong` yang dijamin ≥ 3:1.

## Tipografi

| Peran | Nilai |
|---|---|
| Display | `'Segoe UI', system-ui, sans-serif` |
| Body | `system-ui, -apple-system, 'Segoe UI', sans-serif` |
| Skala | 12 / 14 / 16 / 20 / 32–48 / 40–72 px |
| Measure | 65ch |

## Spacing

`4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px`

## Motion

Reveal panel 200–300ms, sekali. Tanpa hover scale per sel.

Panel reveal 200–300ms, once. No per-cell hover scale.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Setiap sel sama besar
- Grid kartu tanpa panel dominan
- Radius berbeda per sel
- Panel untuk prosa mengalir

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#14181f` / `#f4f5f7` | 16.31:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#4e5b70` / `#f4f5f7` | 6.3:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#14181f` / `#ffffff` | 17.79:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#4e5b70` / `#ffffff` | 6.88:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#3b5bdb` | 5.67:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#3b5bdb` / `#f4f5f7` | 5.2:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#2f4bc0` / `#f4f5f7` | 6.66:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#868b93` / `#f4f5f7` | 3.14:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#eef2f8` / `#0e1117` | 16.82:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#a3aec2` / `#0e1117` | 8.45:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#eef2f8` / `#161b24` | 15.37:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#a3aec2` / `#161b24` | 7.72:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#0b1020` / `#7c9cff` | 7.26:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#7c9cff` / `#0e1117` | 7.25:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#9db4ff` / `#0e1117` | 9.36:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#59626f` / `#0e1117` | 3.06:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="bento-grid"] {
  color-scheme: light;
  --color-bg: #f4f5f7;
  --color-surface: #ffffff;
  --color-surface-alt: #eef1f6;
  --color-text: #14181f;
  --color-text-muted: #4e5b70;
  --color-border: #e0e5ee;
  --color-border-strong: #868b93;
  --color-action: #3b5bdb;
  --color-action-text: #ffffff;
  --color-focus: #2f4bc0;
  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 24px;
  --border-width: 1px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="bento-grid"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #0e1117;
  --color-surface: #161b24;
  --color-surface-alt: #1c2330;
  --color-text: #eef2f8;
  --color-text-muted: #a3aec2;
  --color-border: #2a3444;
  --color-border-strong: #59626f;
  --color-action: #7c9cff;
  --color-action-text: #0b1020;
  --color-focus: #9db4ff;
  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 24px;
  --border-width: 1px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
