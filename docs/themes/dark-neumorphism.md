# Dark Neumorphism

> Panel gelap lembut, kedalaman kontras rendah, kontrol presisi.
> Soft dark panels, low-contrast depth, precise controls.

[Lihat preview HTML mandiri](./previews/dark-neumorphism.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Neumorphism gelap paling sulit dijaga aksesibel: bayangan halus dan teks bisa hilang. Ia bekerja ketika palet tetap sempit, teks cukup terang, dan kedalaman hanya untuk kontrol, bukan konten.

Dark neumorphism is the hardest to keep accessible: shadows are subtle and text can disappear. It works when the palette stays narrow, the text stays bright enough, and the depth is reserved for controls, not content.

## Kapan dipakai

- Aplikasi media dan panel kontrol malam
- Kontrol yang terasa fisik (dial, toggle, transport)
- Alat yang sempit dan fokus

## Kapan dihindari

- Teks dan tabel padat
- Penggunaan luar ruangan
- Layar berkualitas rendah

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#e8ebef` |
| `surface` | `#e8ebef` |
| `surfaceAlt` | `#f1f3f6` |
| `text` | `#1a1f26` |
| `muted` | `#4b5563` |
| `accent` | `#2456c4` |
| `accentText` | `#ffffff` |
| `border` | `#cbd2dc` |
| `focus` | `#1c46a8` |
| `shadowDark` | `#c3c9d3` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#818790` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#15181d` |
| `surface` | `#1b1f26` |
| `surfaceAlt` | `#222831` |
| `text` | `#e6ebf2` |
| `muted` | `#9aa6b8` |
| `accent` | `#6ea8fe` |
| `accentText` | `#0b0f14` |
| `border` | `#2c333f` |
| `focus` | `#8ab8ff` |
| `shadowDark` | `#0a0c10` |
| `shadowLight` | `#252b34` |
| `borderStrong` | `#606771` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 10px / 16px / 24px |
| Border | 0px |
| Bayangan naik | `8px 8px 18px #c3c9d3, -8px -8px 18px #ffffff` |
| Bayangan pressed | `inset 5px 5px 10px #c3c9d3, inset -5px -5px 10px #ffffff` |
| Prinsip kedalaman | Bayangan berpasangan: hitam di bawah, abu terang di atas. Tanpa border kecuali saat focus. |

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

Transisi shadow 160–220ms; jangan menganimasikan radius blur dalam loop.

Shadow transitions 160–220ms; never animate blur radius in a loop.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Teks abu-abu di bawah 4.5:1
- Bayangan pada blok teks
- Hitam pekat tanpa pemisahan permukaan
- Fokus hanya dari perubahan bayangan

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#1a1f26` / `#e8ebef` | 13.85:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#4b5563` / `#e8ebef` | 6.32:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#1a1f26` / `#e8ebef` | 13.85:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#4b5563` / `#e8ebef` | 6.32:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#2456c4` | 6.56:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#2456c4` / `#e8ebef` | 5.48:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#1c46a8` / `#e8ebef` | 7.05:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#818790` / `#e8ebef` | 3.03:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#e6ebf2` / `#15181d` | 14.85:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#9aa6b8` / `#15181d` | 7.22:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#e6ebf2` / `#1b1f26` | 13.8:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#9aa6b8` / `#1b1f26` | 6.71:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#0b0f14` / `#6ea8fe` | 7.96:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#6ea8fe` / `#15181d` | 7.37:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#8ab8ff` / `#15181d` | 8.8:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#606771` / `#15181d` | 3.11:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="dark-neumorphism"] {
  color-scheme: light;
  --color-bg: #e8ebef;
  --color-surface: #e8ebef;
  --color-surface-alt: #f1f3f6;
  --color-text: #1a1f26;
  --color-text-muted: #4b5563;
  --color-border: #cbd2dc;
  --color-border-strong: #818790;
  --color-action: #2456c4;
  --color-action-text: #ffffff;
  --color-focus: #1c46a8;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --border-width: 0px;
  --shadow-raised: 8px 8px 18px #c3c9d3, -8px -8px 18px #ffffff;
  --shadow-pressed: inset 5px 5px 10px #c3c9d3, inset -5px -5px 10px #ffffff;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="dark-neumorphism"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #15181d;
  --color-surface: #1b1f26;
  --color-surface-alt: #222831;
  --color-text: #e6ebf2;
  --color-text-muted: #9aa6b8;
  --color-border: #2c333f;
  --color-border-strong: #606771;
  --color-action: #6ea8fe;
  --color-action-text: #0b0f14;
  --color-focus: #8ab8ff;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --border-width: 0px;
  --shadow-raised: 8px 8px 18px #0a0c10, -8px -8px 18px #252b34;
  --shadow-pressed: inset 5px 5px 10px #0a0c10, inset -5px -5px 10px #252b34;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
