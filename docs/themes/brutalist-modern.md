# Brutalist Modern

> Tepi keras, struktur terlihat, tanpa permintaan maaf.
> Hard edges, visible structure, no apology.

[Lihat preview HTML mandiri](./previews/brutalist-modern.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Brutalisme memperlihatkan struktur alih-alih menyembunyikannya. Border terlihat, blok bergeser, tipe besar, interaksi langsung. Brutalisme modern mempertahankan sikap tetapi memperbaiki aksesibilitas: kontras nyata, focus nyata, target nyata.

Brutalism exposes the structure instead of hiding it. Borders are visible, blocks are offset, type is large, and interaction is immediate. Modern brutalism keeps the attitude but fixes the accessibility: real contrast, real focus, real targets.

## Kapan dipakai

- Acara budaya, studio, dan portofolio
- Pernyataan yang harus diingat
- Situs kecil dengan konten kuat

## Kapan dihindari

- Industri teregulasi
- Audiens lama atau konservatif
- Formulir dan entri data padat

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#f5f1e8` |
| `surface` | `#fffdf8` |
| `surfaceAlt` | `#ffe500` |
| `text` | `#111111` |
| `muted` | `#4a4a45` |
| `accent` | `#111111` |
| `accentText` | `#ffe500` |
| `border` | `#111111` |
| `focus` | `#c8341a` |
| `shadowDark` | `#111111` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#111111` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#121212` |
| `surface` | `#1a1a1a` |
| `surfaceAlt` | `#242424` |
| `text` | `#f4f1e8` |
| `muted` | `#b8b3a8` |
| `accent` | `#ffe500` |
| `accentText` | `#111111` |
| `border` | `#f4f1e8` |
| `focus` | `#ff4d2e` |
| `shadowDark` | `#000000` |
| `shadowLight` | `#333333` |
| `borderStrong` | `#f4f1e8` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 0px / 0px / 0px |
| Border | 3px |
| Bayangan naik | `none` |
| Bayangan pressed | `none` |
| Prinsip kedalaman | Border keras dan blok solid bergeser. Bayangan solid, tidak pernah blur. |

`--color-border` adalah pemisah dekoratif. Untuk batas kontrol yang harus dikenali
(input, select, tombol outline), gunakan `--color-border-strong` yang dijamin ≥ 3:1.

## Tipografi

| Peran | Nilai |
|---|---|
| Display | `'Arial Black', 'Segoe UI', system-ui, sans-serif` |
| Body | `system-ui, -apple-system, 'Segoe UI', sans-serif` |
| Skala | 12 / 14 / 16 / 20 / 32–48 / 40–72 px |
| Measure | 65ch |

## Spacing

`4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px`

## Motion

Snap: 80–120ms, tanpa kurva easing. Reduced motion sudah instan.

Snap: 80–120ms, no easing curves. Reduced motion is already instant.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Border rambut
- Bayangan lembut
- Abu-abu kontras rendah
- Brutalisme untuk membenarkan formulir yang tidak bisa dipakai

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#111111` / `#f5f1e8` | 16.75:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#4a4a45` / `#f5f1e8` | 7.91:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#111111` / `#fffdf8` | 18.58:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#4a4a45` / `#fffdf8` | 8.77:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffe500` / `#111111` | 14.8:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#111111` / `#f5f1e8` | 16.75:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#c8341a` / `#f5f1e8` | 4.7:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#111111` / `#f5f1e8` | 16.75:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#f4f1e8` / `#121212` | 16.59:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#b8b3a8` / `#121212` | 8.97:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#f4f1e8` / `#1a1a1a` | 15.41:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#b8b3a8` / `#1a1a1a` | 8.33:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#111111` / `#ffe500` | 14.8:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#ffe500` / `#121212` | 14.68:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#ff4d2e` / `#121212` | 5.67:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#f4f1e8` / `#121212` | 16.59:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="brutalist-modern"] {
  color-scheme: light;
  --color-bg: #f5f1e8;
  --color-surface: #fffdf8;
  --color-surface-alt: #ffe500;
  --color-text: #111111;
  --color-text-muted: #4a4a45;
  --color-border: #111111;
  --color-border-strong: #111111;
  --color-action: #111111;
  --color-action-text: #ffe500;
  --color-focus: #c8341a;
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --border-width: 3px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Arial Black', 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="brutalist-modern"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #121212;
  --color-surface: #1a1a1a;
  --color-surface-alt: #242424;
  --color-text: #f4f1e8;
  --color-text-muted: #b8b3a8;
  --color-border: #f4f1e8;
  --color-border-strong: #f4f1e8;
  --color-action: #ffe500;
  --color-action-text: #111111;
  --color-focus: #ff4d2e;
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --border-width: 3px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Arial Black', 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
