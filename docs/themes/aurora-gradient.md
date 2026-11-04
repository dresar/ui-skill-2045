# Aurora Gradient

> Bidang warna perlahan, tipografi lapang, tanpa chrome.
> Slow color fields, generous type, no chrome.

[Lihat preview HTML mandiri](./previews/aurora-gradient.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Aurora adalah atmosfer, bukan dekorasi. Bidang warna besar berfrekuensi rendah membangun suasana; konten duduk di atasnya dengan kontras kuat. Jaga gradien lebar dan lembut, bukan sebagai isi teks atau chrome tombol, dan jangan beri animasi penuh.

Aurora is atmosphere, not decoration. Large, low-frequency color fields set a mood; the content sits on top with strong contrast. Keep gradients broad and soft, never as text fill or button chrome, and never animate them at full speed.

## Kapan dipakai

- Peluncuran produk dan halaman kampanye
- Alat kreatif dan produk musik
- Satu hero yang imersif

## Kapan dihindari

- Bacaan panjang
- Data dan formulir perusahaan
- Konteks cetak atau teregulasi

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#eaf6f4` |
| `surface` | `#f4fbfa` |
| `surfaceAlt` | `#ffffff` |
| `text` | `#10202b` |
| `muted` | `#3e5b63` |
| `accent` | `#0f6b5f` |
| `accentText` | `#ffffff` |
| `border` | `#c2e0da` |
| `focus` | `#0b574e` |
| `shadowDark` | `#c9e3dd` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#778f90` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#07131a` |
| `surface` | `#0d1e27` |
| `surfaceAlt` | `#122833` |
| `text` | `#e6f7f5` |
| `muted` | `#a3c4c2` |
| `accent` | `#5eead4` |
| `accentText` | `#04211d` |
| `border` | `#1d3b45` |
| `focus` | `#8ff5e4` |
| `shadowDark` | `#030a0e` |
| `shadowLight` | `#143039` |
| `borderStrong` | `#4d686f` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 12px / 20px / 32px |
| Border | 0px |
| Bayangan naik | `none` |
| Bayangan pressed | `none` |
| Prinsip kedalaman | Tanpa bayangan. Kedalaman datang dari bidang warna yang tumpang tindih dan skala. |

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

Satu gerakan lambat (20 detik+) atau tidak sama sekali. Jangan pada lapisan teks. Reduced motion menghentikannya.

One slow drift (20s+) or none. Never on the text layer. Reduced motion stops the drift.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Teks gradien
- Ungu-ke-biru sebagai seluruh identitas
- Latar yang bergerak cepat
- Teks kontras rendah di atas gradien

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#10202b` / `#eaf6f4` | 15.03:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#3e5b63` / `#eaf6f4` | 6.59:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#10202b` / `#f4fbfa` | 15.85:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#3e5b63` / `#f4fbfa` | 6.95:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#0f6b5f` | 6.39:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#0f6b5f` / `#eaf6f4` | 5.77:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#0b574e` / `#eaf6f4` | 7.63:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#778f90` / `#eaf6f4` | 3.1:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#e6f7f5` / `#07131a` | 17:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#a3c4c2` / `#07131a` | 10.05:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#e6f7f5` / `#0d1e27` | 15.41:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#a3c4c2` / `#0d1e27` | 9.12:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#04211d` / `#5eead4` | 11.44:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#5eead4` / `#07131a` | 12.71:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#8ff5e4` / `#07131a` | 14.64:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#4d686f` / `#07131a` | 3.16:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="aurora-gradient"] {
  color-scheme: light;
  --color-bg: #eaf6f4;
  --color-surface: #f4fbfa;
  --color-surface-alt: #ffffff;
  --color-text: #10202b;
  --color-text-muted: #3e5b63;
  --color-border: #c2e0da;
  --color-border-strong: #778f90;
  --color-action: #0f6b5f;
  --color-action-text: #ffffff;
  --color-focus: #0b574e;
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --border-width: 0px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="aurora-gradient"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #07131a;
  --color-surface: #0d1e27;
  --color-surface-alt: #122833;
  --color-text: #e6f7f5;
  --color-text-muted: #a3c4c2;
  --color-border: #1d3b45;
  --color-border-strong: #4d686f;
  --color-action: #5eead4;
  --color-action-text: #04211d;
  --color-focus: #8ff5e4;
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --border-width: 0px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
