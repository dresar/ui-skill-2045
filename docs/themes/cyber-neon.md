# Cyber Neon

> Permukaan malam, satu aksen listrik, data presisi.
> Night surfaces, one electric accent, precise data.

[Lihat preview HTML mandiri](./previews/cyber-neon.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Neon adalah sumber cahaya, jadi harus langka. Satu aksen listrik di atas latar gelap terdesaturasi; glow hanya pada objek yang memancarkan. Data dan tipe tetap tajam. Saat semuanya menyala, tidak ada yang menyala.

Neon is a light source, so it must be scarce. One electric accent against a deep, desaturated ground; glow only on the thing that emits. Data and type stay crisp. The moment everything glows, nothing does.

## Kapan dipakai

- Gaming, dev tools, musik, dan produk malam
- Dashboard yang dilihat di lingkungan gelap
- Satu aksen berenergi tinggi

## Kapan dihindari

- Antarmuka kesehatan, keuangan, atau teregulasi
- Bacaan panjang
- Penggunaan siang hari yang terang

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#eef9ff` |
| `surface` | `#ffffff` |
| `surfaceAlt` | `#e0f4ff` |
| `text` | `#071018` |
| `muted` | `#3c5566` |
| `accent` | `#006c7a` |
| `accentText` | `#ffffff` |
| `border` | `#b8dce6` |
| `focus` | `#005a66` |
| `shadowDark` | `#c4e2ea` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#78939c` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#06070f` |
| `surface` | `#0c0f1c` |
| `surfaceAlt` | `#111628` |
| `text` | `#e9f2ff` |
| `muted` | `#9fb0cc` |
| `accent` | `#00e5ff` |
| `accentText` | `#001014` |
| `border` | `#1d2740` |
| `focus` | `#7af2ff` |
| `shadowDark` | `#02030a` |
| `shadowLight` | `#161d33` |
| `borderStrong` | `#566075` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 4px / 8px / 12px |
| Border | 1px |
| Bayangan naik | `none` |
| Bayangan pressed | `none` |
| Prinsip kedalaman | Glow hanya pada aksen. Permukaan memakai langkah tone dan border 1px. |

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

Satu pulsa saat state berubah, ≤ 2 siklus. Tanpa loop glow tanpa akhir.

One pulse on state change, ≤ 2 cycles. No infinite glow loops.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Teks isi neon
- Glow di setiap kartu
- Hitam murni dengan cyan saturasi tinggi di mana-mana
- Pulsa tanpa akhir

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#071018` / `#eef9ff` | 17.9:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#3c5566` / `#eef9ff` | 7.32:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#071018` / `#ffffff` | 19.15:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#3c5566` / `#ffffff` | 7.83:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#006c7a` | 6.13:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#006c7a` / `#eef9ff` | 5.73:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#005a66` / `#eef9ff` | 7.4:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#78939c` / `#eef9ff` | 3.04:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#e9f2ff` / `#06070f` | 17.81:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#9fb0cc` / `#06070f` | 9.14:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#e9f2ff` / `#0c0f1c` | 16.91:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#9fb0cc` / `#0c0f1c` | 8.68:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#001014` / `#00e5ff` | 12.59:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#00e5ff` / `#06070f` | 13.06:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#7af2ff` / `#06070f` | 15.28:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#566075` / `#06070f` | 3.18:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="cyber-neon"] {
  color-scheme: light;
  --color-bg: #eef9ff;
  --color-surface: #ffffff;
  --color-surface-alt: #e0f4ff;
  --color-text: #071018;
  --color-text-muted: #3c5566;
  --color-border: #b8dce6;
  --color-border-strong: #78939c;
  --color-action: #006c7a;
  --color-action-text: #ffffff;
  --color-focus: #005a66;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --border-width: 1px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="cyber-neon"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #06070f;
  --color-surface: #0c0f1c;
  --color-surface-alt: #111628;
  --color-text: #e9f2ff;
  --color-text-muted: #9fb0cc;
  --color-border: #1d2740;
  --color-border-strong: #566075;
  --color-action: #00e5ff;
  --color-action-text: #001014;
  --color-focus: #7af2ff;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
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
