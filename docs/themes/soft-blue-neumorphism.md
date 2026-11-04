# Soft Blue Neumorphism

> Permukaan biru tenang, bayangan berpasangan, satu aksi tegas.
> Calm blue surfaces, paired shadows, one decisive action.

[Lihat preview HTML mandiri](./previews/soft-blue-neumorphism.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Neumorphism lembut bekerja ketika permukaan itu sendiri menjadi struktur. Satu bidang biru dingin membawa halaman; elemen timbul atau tenggelam lewat dua bayangan berlawanan. Panel glass terang, rim putih, dan radius yang terkendali membuat kedalaman terasa lapang, bukan berat. Aksen tetap tegas agar antarmuka punya satu aksi yang jelas.

Soft neumorphism works when the surface itself becomes the structure. A single cool blue field carries the page; elements rise or sink through two opposing shadows. A light glass panel, a white rim, and a restrained radius make the depth feel airy rather than heavy. The accent stays sharp so the interface still has one clear action.

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
| `bg` | `#edf1fc` |
| `surface` | `#f4f6ff` |
| `surfaceAlt` | `#e8eeff` |
| `text` | `#1b2943` |
| `muted` | `#5f6c85` |
| `accent` | `#315be8` |
| `accentText` | `#ffffff` |
| `border` | `#dce4f3` |
| `focus` | `#315be8` |
| `shadowDark` | `#c2cce1` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#7f8a9f` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#0b1120` |
| `surface` | `#121b30` |
| `surfaceAlt` | `#17223a` |
| `text` | `#e9eefb` |
| `muted` | `#a8b4cb` |
| `accent` | `#6f8cff` |
| `accentText` | `#0b1220` |
| `border` | `#26314a` |
| `focus` | `#9db6ff` |
| `shadowDark` | `#05080f` |
| `shadowLight` | `#1b2740` |
| `borderStrong` | `#596278` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 12px / 18px / 30px |
| Border | 1px |
| Bayangan naik | `16px 16px 38px #c2cce1, -13px -13px 34px #ffffff` |
| Bayangan pressed | `inset 3px 3px 7px #c2cce1, inset -3px -3px 7px #ffffff` |
| Prinsip kedalaman | Permukaan terang tembus pandang + rim putih 1px + bayangan neumorphism berpasangan. Well inset untuk input dan statistik. State pressed memakai pasangan inset. |

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

Hanya shadow dan transform, 140–220ms. Hover naik 2px; pressed kembali ke permukaan. Reduced motion menghapus pergerakan, mempertahankan perubahan tone.

Shadow and transform only, 140–220ms. Hover lifts 2px; pressed returns to the surface. Reduced motion removes travel but keeps the tone change.

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
| light | Body text on ground | `#1b2943` / `#edf1fc` | 12.87:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#5f6c85` / `#edf1fc` | 4.68:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#1b2943` / `#f4f6ff` | 13.48:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#5f6c85` / `#f4f6ff` | 4.9:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#315be8` | 5.54:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#315be8` / `#edf1fc` | 4.9:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#315be8` / `#edf1fc` | 4.9:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#7f8a9f` / `#edf1fc` | 3.08:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#e9eefb` / `#0b1120` | 16.22:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#a8b4cb` / `#0b1120` | 9.02:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#e9eefb` / `#121b30` | 14.76:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#a8b4cb` / `#121b30` | 8.21:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#0b1220` / `#6f8cff` | 6.13:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#6f8cff` / `#0b1120` | 6.16:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#9db6ff` / `#0b1120` | 9.48:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#596278` / `#0b1120` | 3.09:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="soft-blue-neumorphism"] {
  color-scheme: light;
  --color-bg: #edf1fc;
  --color-surface: #f4f6ff;
  --color-surface-alt: #e8eeff;
  --color-text: #1b2943;
  --color-text-muted: #5f6c85;
  --color-border: #dce4f3;
  --color-border-strong: #7f8a9f;
  --color-action: #315be8;
  --color-action-text: #ffffff;
  --color-focus: #315be8;
  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 30px;
  --border-width: 1px;
  --shadow-raised: 16px 16px 38px #c2cce1, -13px -13px 34px #ffffff;
  --shadow-pressed: inset 3px 3px 7px #c2cce1, inset -3px -3px 7px #ffffff;
  --font-display: ui-rounded, 'Segoe UI', system-ui, sans-serif;
  --font-body: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="soft-blue-neumorphism"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #0b1120;
  --color-surface: #121b30;
  --color-surface-alt: #17223a;
  --color-text: #e9eefb;
  --color-text-muted: #a8b4cb;
  --color-border: #26314a;
  --color-border-strong: #596278;
  --color-action: #6f8cff;
  --color-action-text: #0b1220;
  --color-focus: #9db6ff;
  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 30px;
  --border-width: 1px;
  --shadow-raised: 16px 16px 38px #05080f, -13px -13px 34px #1b2740;
  --shadow-pressed: inset 3px 3px 7px #05080f, inset -3px -3px 7px #1b2740;
  --font-display: ui-rounded, 'Segoe UI', system-ui, sans-serif;
  --font-body: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
