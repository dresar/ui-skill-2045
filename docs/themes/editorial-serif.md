# Editorial Serif

> Halaman berbasis tipe dengan tulang serif dan garis tenang.
> Type-led pages with a serif spine and quiet rules.

[Lihat preview HTML mandiri](./previews/editorial-serif.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Desain editorial mempercayai teks. Huruf serif display, measure lapang, dan sedikit garis menciptakan wibawa. Risikonya adalah nostalgia: gunakan jarak dan kontras kontemporer, bukan tekstur koran palsu.

Editorial design trusts the text. A serif display face, a generous measure, and a small number of rules create authority. The risk is nostalgia: use contemporary spacing and contrast, not faux newsprint textures.

## Kapan dipakai

- Penerbitan, perhotelan, dan portofolio
- Konten panjang dengan judul kuat
- Merek yang ingin terasa hangat dan berwibawa

## Kapan dihindari

- Dashboard padat
- Kode dan tabel data
- UI kecil dengan banyak label

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#fbf8f2` |
| `surface` | `#ffffff` |
| `surfaceAlt` | `#f3ece1` |
| `text` | `#1c1917` |
| `muted` | `#57534e` |
| `accent` | `#8a2f1d` |
| `accentText` | `#ffffff` |
| `border` | `#e2d9cb` |
| `focus` | `#6f2416` |
| `shadowDark` | `#e6ddd0` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#938c83` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#161311` |
| `surface` | `#1f1a17` |
| `surfaceAlt` | `#2a231e` |
| `text` | `#f5efe6` |
| `muted` | `#bdb1a3` |
| `accent` | `#e8a87c` |
| `accentText` | `#241a13` |
| `border` | `#3a322b` |
| `focus` | `#ffc9a3` |
| `shadowDark` | `#0b0908` |
| `shadowLight` | `#332b25` |
| `borderStrong` | `#6b635c` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 0px / 4px / 8px |
| Border | 1px |
| Bayangan naik | `none` |
| Bayangan pressed | `none` |
| Prinsip kedalaman | Garis dan skala tipe. Tanpa bayangan. |

`--color-border` adalah pemisah dekoratif. Untuk batas kontrol yang harus dikenali
(input, select, tombol outline), gunakan `--color-border-strong` yang dijamin ≥ 3:1.

## Tipografi

| Peran | Nilai |
|---|---|
| Display | `Georgia, 'Times New Roman', serif` |
| Body | `Georgia, 'Iowan Old Style', serif` |
| Skala | 12 / 14 / 16 / 20 / 32–48 / 40–72 px |
| Measure | 65ch |

## Spacing

`4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px`

## Motion

Minimal: fade 160ms. Tanpa efek scroll.

Minimal: 160ms fades. No scroll effects.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Serif body 13px
- Tekstur koran palsu
- Teks rata kanan-kiri tanpa hyphenation
- Serif kapital di mana-mana

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#1c1917` / `#fbf8f2` | 16.5:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#57534e` / `#fbf8f2` | 7.2:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#1c1917` / `#ffffff` | 17.49:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#57534e` / `#ffffff` | 7.63:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#8a2f1d` | 8.38:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#8a2f1d` / `#fbf8f2` | 7.91:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#6f2416` / `#fbf8f2` | 10.21:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#938c83` / `#fbf8f2` | 3.13:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#f5efe6` / `#161311` | 16.18:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#bdb1a3` / `#161311` | 8.79:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#f5efe6` / `#1f1a17` | 15.08:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#bdb1a3` / `#1f1a17` | 8.19:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#241a13` / `#e8a87c` | 8.38:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#e8a87c` / `#161311` | 9.09:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#ffc9a3` / `#161311` | 12.45:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#6b635c` / `#161311` | 3.14:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="editorial-serif"] {
  color-scheme: light;
  --color-bg: #fbf8f2;
  --color-surface: #ffffff;
  --color-surface-alt: #f3ece1;
  --color-text: #1c1917;
  --color-text-muted: #57534e;
  --color-border: #e2d9cb;
  --color-border-strong: #938c83;
  --color-action: #8a2f1d;
  --color-action-text: #ffffff;
  --color-focus: #6f2416;
  --radius-sm: 0px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --border-width: 1px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: Georgia, 'Times New Roman', serif;
  --font-body: Georgia, 'Iowan Old Style', serif;
}

:root[data-theme="editorial-serif"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #161311;
  --color-surface: #1f1a17;
  --color-surface-alt: #2a231e;
  --color-text: #f5efe6;
  --color-text-muted: #bdb1a3;
  --color-border: #3a322b;
  --color-border-strong: #6b635c;
  --color-action: #e8a87c;
  --color-action-text: #241a13;
  --color-focus: #ffc9a3;
  --radius-sm: 0px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --border-width: 1px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: Georgia, 'Times New Roman', serif;
  --font-body: Georgia, 'Iowan Old Style', serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
