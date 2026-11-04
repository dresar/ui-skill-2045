# Soft Blue Neumorphism

> Permukaan biru tenang, bayangan berpasangan, satu aksi tegas.
> Calm blue surfaces, paired shadows, one decisive action.

[Lihat preview HTML mandiri](./previews/soft-blue-neumorphism.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Neumorphism lembut bekerja ketika permukaan itu sendiri menjadi struktur. Satu bidang biru dingin membawa halaman; elemen timbul atau tenggelam lewat dua bayangan berlawanan. Efeknya harus punya alasan: dipakai pada kontrol dan kartu, bukan sebagai dekorasi di setiap persegi. Aksen tetap tegas agar antarmuka punya aksi yang jelas.

Soft neumorphism works when the surface itself becomes the structure. A single cool blue field carries the page; elements rise or sink through two opposing shadows. The effect must earn its keep: it is used for controls and cards, never as decoration on every rectangle. The accent stays sharp so the interface still has a clear action.

## Kapan dipakai

- UI produk dengan permukaan tenang dan minim gangguan
- Halaman pengaturan, dashboard, dan panel kontrol
- Antarmuka dengan satu aksi utama per tampilan

## Kapan dihindari

- Tabel data padat tempat bayangan bersaing dengan baris
- Layar berkualitas rendah yang membuat bayangan halus bergaris
- Konteks yang menuntut kontras maksimum setiap saat

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#e6edf7` |
| `surface` | `#e6edf7` |
| `surfaceAlt` | `#eef3fb` |
| `text` | `#1b2740` |
| `muted` | `#44546f` |
| `accent` | `#2f5fe0` |
| `accentText` | `#ffffff` |
| `border` | `#c8d6e8` |
| `focus` | `#1f4fd8` |
| `shadowDark` | `#b9c8dd` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#7c899e` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#0f1726` |
| `surface` | `#131d30` |
| `surfaceAlt` | `#18243a` |
| `text` | `#e8eefb` |
| `muted` | `#a9b8d2` |
| `accent` | `#7ea2ff` |
| `accentText` | `#0b1220` |
| `border` | `#2a3a55` |
| `focus` | `#a8c0ff` |
| `shadowDark` | `#070c15` |
| `shadowLight` | `#1e2c44` |
| `borderStrong` | `#58657d` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 8px / 14px / 22px |
| Border | 0px |
| Bayangan naik | `8px 8px 18px #b9c8dd, -8px -8px 18px #ffffff` |
| Bayangan pressed | `inset 5px 5px 10px #b9c8dd, inset -5px -5px 10px #ffffff` |
| Prinsip kedalaman | Dua bayangan berlawanan: biru gelap dan putih. Tanpa border. State pressed membalik bayangan. |

`--color-border` adalah pemisah dekoratif. Untuk batas kontrol yang harus dikenali
(input, select, tombol outline), gunakan `--color-border-strong` yang dijamin ≥ 3:1.

## Tipografi

| Peran | Nilai |
|---|---|
| Display | `ui-rounded, 'Segoe UI', system-ui, sans-serif` |
| Body | `ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif` |
| Skala | 12 / 14 / 16 / 20 / 32–48 / 40–72 px |
| Measure | 65ch |

## Spacing

`4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px`

## Motion

Hanya shadow dan transform, 160–220ms. Reduced motion menghapus pergerakan, mempertahankan perubahan tone.

Shadow and transform only, 160–220ms. Reduced motion removes travel but keeps the tone change.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Bayangan pada baris tabel
- Tiga radius berbeda pada satu kartu
- Gradien pada aksen
- Tombol neumorphism tanpa perubahan tone saat fokus

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#1b2740` / `#e6edf7` | 12.63:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#44546f` / `#e6edf7` | 6.5:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#1b2740` / `#e6edf7` | 12.63:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#44546f` / `#e6edf7` | 6.5:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#2f5fe0` | 5.48:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#2f5fe0` / `#e6edf7` | 4.65:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#1f4fd8` / `#e6edf7` | 5.63:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#7c899e` / `#e6edf7` | 3.01:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#e8eefb` / `#0f1726` | 15.42:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#a9b8d2` / `#0f1726` | 8.95:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#e8eefb` / `#131d30` | 14.49:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#a9b8d2` / `#131d30` | 8.41:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#0b1220` / `#7ea2ff` | 7.58:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#7ea2ff` / `#0f1726` | 7.26:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#a8c0ff` / `#0f1726` | 9.95:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#58657d` / `#0f1726` | 3.05:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="soft-blue-neumorphism"] {
  color-scheme: light;
  --color-bg: #e6edf7;
  --color-surface: #e6edf7;
  --color-surface-alt: #eef3fb;
  --color-text: #1b2740;
  --color-text-muted: #44546f;
  --color-border: #c8d6e8;
  --color-border-strong: #7c899e;
  --color-action: #2f5fe0;
  --color-action-text: #ffffff;
  --color-focus: #1f4fd8;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --border-width: 0px;
  --shadow-raised: 8px 8px 18px #b9c8dd, -8px -8px 18px #ffffff;
  --shadow-pressed: inset 5px 5px 10px #b9c8dd, inset -5px -5px 10px #ffffff;
  --font-display: ui-rounded, 'Segoe UI', system-ui, sans-serif;
  --font-body: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="soft-blue-neumorphism"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #0f1726;
  --color-surface: #131d30;
  --color-surface-alt: #18243a;
  --color-text: #e8eefb;
  --color-text-muted: #a9b8d2;
  --color-border: #2a3a55;
  --color-border-strong: #58657d;
  --color-action: #7ea2ff;
  --color-action-text: #0b1220;
  --color-focus: #a8c0ff;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --border-width: 0px;
  --shadow-raised: 8px 8px 18px #070c15, -8px -8px 18px #1e2c44;
  --shadow-pressed: inset 5px 5px 10px #070c15, inset -5px -5px 10px #1e2c44;
  --font-display: ui-rounded, 'Segoe UI', system-ui, sans-serif;
  --font-body: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
