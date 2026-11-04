# Blueprint Grid

> Kertas teknis, garis terukur, ketenangan rekayasa.
> Technical paper, measured lines, engineered calm.

[Lihat preview HTML mandiri](./previews/blueprint-grid.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Blueprint meminjam bahasa visual gambar teknik: grid terukur, anotasi tipis, perataan presisi. Ini tema berorientasi masa depan yang tetap tenang. Grid adalah instrumen latar, tidak pernah lebih keras dari konten.

Blueprint borrows the visual language of technical drawings: a measured grid, thin annotations, precise alignment. It is a future-facing theme that stays quiet. The grid is a background instrument, never louder than the content.

## Kapan dipakai

- Developer tools, dokumentasi, dan produk rekayasa
- Portofolio teknis dan spesifikasi
- Konten yang terbantu oleh perataan yang terlihat

## Kapan dihindari

- Merek gaya hidup yang hangat
- Aplikasi konsumen yang playful
- Halaman yang dipimpin fotografi

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#eaf1f8` |
| `surface` | `#f7fafd` |
| `surfaceAlt` | `#ffffff` |
| `text` | `#0f2233` |
| `muted` | `#47607a` |
| `accent` | `#0b5cad` |
| `accentText` | `#ffffff` |
| `border` | `#b9cde0` |
| `focus` | `#084a8c` |
| `shadowDark` | `#cfdcea` |
| `shadowLight` | `#ffffff` |
| `grid` | `#c9d8e8` |
| `borderStrong` | `#788c9e` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#08131f` |
| `surface` | `#0d1b2a` |
| `surfaceAlt` | `#122336` |
| `text` | `#dcebfa` |
| `muted` | `#9db6cc` |
| `accent` | `#58b0ff` |
| `accentText` | `#04121f` |
| `border` | `#1d3450` |
| `focus` | `#86c8ff` |
| `shadowDark` | `#040b13` |
| `shadowLight` | `#17324d` |
| `grid` | `#16304a` |
| `borderStrong` | `#4f647c` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 2px / 4px / 6px |
| Border | 1px |
| Bayangan naik | `none` |
| Bayangan pressed | `none` |
| Prinsip kedalaman | Garis 1px dan grid latar. Tanpa bayangan. Elevasi adalah panel lebih terang. |

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

120–200ms, mendekati linear. Tanpa bouncing.

120–200ms, linear-ish. No bouncing.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Garis grid lebih kuat dari teks
- Blueprint untuk fotografi gaya hidup
- Terlalu banyak label anotasi
- Border rambut di bawah 3:1

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#0f2233` / `#eaf1f8` | 14.22:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#47607a` / `#eaf1f8` | 5.72:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#0f2233` / `#f7fafd` | 15.46:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#47607a` / `#f7fafd` | 6.22:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#0b5cad` | 6.67:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#0b5cad` / `#eaf1f8` | 5.86:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#084a8c` / `#eaf1f8` | 7.78:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#788c9e` / `#eaf1f8` | 3.05:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#dcebfa` / `#08131f` | 15.41:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#9db6cc` / `#08131f` | 8.9:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#dcebfa` / `#0d1b2a` | 14.33:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#9db6cc` / `#0d1b2a` | 8.28:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#04121f` / `#58b0ff` | 8.16:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#58b0ff` / `#08131f` | 8.07:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#86c8ff` / `#08131f` | 10.43:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#4f647c` / `#08131f` | 3.07:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="blueprint-grid"] {
  color-scheme: light;
  --color-bg: #eaf1f8;
  --color-surface: #f7fafd;
  --color-surface-alt: #ffffff;
  --color-text: #0f2233;
  --color-text-muted: #47607a;
  --color-border: #b9cde0;
  --color-border-strong: #788c9e;
  --color-action: #0b5cad;
  --color-action-text: #ffffff;
  --color-focus: #084a8c;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --border-width: 1px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="blueprint-grid"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #08131f;
  --color-surface: #0d1b2a;
  --color-surface-alt: #122336;
  --color-text: #dcebfa;
  --color-text-muted: #9db6cc;
  --color-border: #1d3450;
  --color-border-strong: #4f647c;
  --color-action: #58b0ff;
  --color-action-text: #04121f;
  --color-focus: #86c8ff;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
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
