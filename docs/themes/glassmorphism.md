# Glassmorphism

> Lapisan tembus pandang di atas gambar nyata, dengan fallback solid.
> Translucent layers over a real image, with a hard fallback.

[Lihat preview HTML mandiri](./previews/glassmorphism.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Glass adalah hubungan antara lapisan dan apa yang ada di belakangnya. Tanpa latar yang menarik, ia hanya kotak abu-abu dengan blur. Gunakan satu atau dua permukaan glass di atas foto atau bidang warna; pertahankan teks pada permukaan opak.

Glass is a relationship between a layer and what lies behind it. Without an interesting background, it is just a gray box with blur. Use one or two glass surfaces over a photograph or a color field; keep text on opaque surfaces.

## Kapan dipakai

- Hero kaya media dan overlay
- Kontrol pemutar, toolbar mengambang, command palette
- Halaman kampanye dengan foto yang kuat

## Kapan dihindari

- Panel teks panjang
- Perangkat kelas bawah tempat blur menurunkan frame rate
- Penggunaan di luar ruangan yang terang

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#e8f0fc` |
| `surface` | `#f5f9ff` |
| `surfaceAlt` | `#ffffff` |
| `text` | `#14213a` |
| `muted` | `#3f5578` |
| `accent` | `#2455c3` |
| `accentText` | `#ffffff` |
| `border` | `#c3d6f0` |
| `focus` | `#1c49ad` |
| `shadowDark` | `#c2d4ea` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#798aa4` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#0a1220` |
| `surface` | `#111c30` |
| `surfaceAlt` | `#16233a` |
| `text` | `#eaf1ff` |
| `muted` | `#a8b8d4` |
| `accent` | `#8fb3ff` |
| `accentText` | `#081426` |
| `border` | `#26395a` |
| `focus` | `#a9c4ff` |
| `shadowDark` | `#050a12` |
| `shadowLight` | `#1a2b46` |
| `borderStrong` | `#51617e` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 10px / 16px / 24px |
| Border | 1px |
| Bayangan naik | `0 8px 32px rgba(4, 12, 30, 0.18)` |
| Bayangan pressed | `0 8px 32px rgba(4, 12, 30, 0.18)` |
| Prinsip kedalaman | Permukaan tembus pandang + border terang 1px + backdrop blur. Tanpa drop shadow kecuali overlay sungguhan. |

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

Opacity dan translate 8px, 180–240ms. Blur tidak pernah dianimasikan.

Opacity and 8px translate, 180–240ms. Blur is never animated.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Panel glass di atas latar abu-abu datar
- Teks isi di atas permukaan blur
- Blur di setiap kartu
- Tanpa fallback opak

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#14213a` / `#e8f0fc` | 13.99:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#3f5578` / `#e8f0fc` | 6.58:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#14213a` / `#f5f9ff` | 15.19:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#3f5578` / `#f5f9ff` | 7.14:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#2455c3` | 6.64:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#2455c3` / `#e8f0fc` | 5.79:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#1c49ad` / `#e8f0fc` | 7.02:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#798aa4` / `#e8f0fc` | 3.06:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#eaf1ff` / `#0a1220` | 16.54:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#a8b8d4` / `#0a1220` | 9.35:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#eaf1ff` / `#111c30` | 15.03:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#a8b8d4` / `#111c30` | 8.5:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#081426` / `#8fb3ff` | 8.84:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#8fb3ff` / `#0a1220` | 8.98:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#a9c4ff` / `#0a1220` | 10.74:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#51617e` / `#0a1220` | 3:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="glassmorphism"] {
  color-scheme: light;
  --color-bg: #e8f0fc;
  --color-surface: #f5f9ff;
  --color-surface-alt: #ffffff;
  --color-text: #14213a;
  --color-text-muted: #3f5578;
  --color-border: #c3d6f0;
  --color-border-strong: #798aa4;
  --color-action: #2455c3;
  --color-action-text: #ffffff;
  --color-focus: #1c49ad;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --border-width: 1px;
  --shadow-raised: 0 8px 32px rgba(4, 12, 30, 0.18);
  --shadow-pressed: 0 8px 32px rgba(4, 12, 30, 0.18);
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="glassmorphism"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #0a1220;
  --color-surface: #111c30;
  --color-surface-alt: #16233a;
  --color-text: #eaf1ff;
  --color-text-muted: #a8b8d4;
  --color-border: #26395a;
  --color-border-strong: #51617e;
  --color-action: #8fb3ff;
  --color-action-text: #081426;
  --color-focus: #a9c4ff;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --border-width: 1px;
  --shadow-raised: 0 8px 32px rgba(4, 12, 30, 0.18);
  --shadow-pressed: 0 8px 32px rgba(4, 12, 30, 0.18);
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
