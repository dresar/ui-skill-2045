# Minimal Monochrome

> Satu tinta, satu latar, hierarki dari tipe dan ruang.
> One ink, one ground, hierarchy from type and space.

[Lihat preview HTML mandiri](./previews/minimal-monochrome.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Monokrom menghapus warna sebagai penopang. Hierarki harus datang dari skala, bobot, jarak, dan garis. Ia tidak memaafkan: grid lemah atau judul kabur tidak punya tempat bersembunyi. Sebagai gantinya, ia cepat, tahan lama, dan mudah dibuat aksesibel.

Monochrome removes color as a crutch. Hierarchy must come from scale, weight, spacing, and rules. It is unforgiving: a weak grid or a vague headline has nowhere to hide. In exchange, it is fast, timeless, and easy to make accessible.

## Kapan dipakai

- Portofolio, produk editorial, dan alat
- Konten yang identitasnya adalah tipografi
- Konteks dengan keterbatasan performa

## Kapan dihindari

- Merek yang bergantung pada pengenalan warna
- Produk anak
- Dashboard yang membutuhkan warna semantik

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#f7f7f5` |
| `surface` | `#ffffff` |
| `surfaceAlt` | `#efefec` |
| `text` | `#111111` |
| `muted` | `#4a4a46` |
| `accent` | `#111111` |
| `accentText` | `#ffffff` |
| `border` | `#dcdcd6` |
| `focus` | `#111111` |
| `shadowDark` | `#d8d8d2` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#8f8f8b` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#111110` |
| `surface` | `#1a1a18` |
| `surfaceAlt` | `#222220` |
| `text` | `#f5f5f2` |
| `muted` | `#b4b4ad` |
| `accent` | `#f5f5f2` |
| `accentText` | `#111111` |
| `border` | `#33332f` |
| `focus` | `#ffffff` |
| `shadowDark` | `#000000` |
| `shadowLight` | `#2a2a27` |
| `borderStrong` | `#62625e` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 0px / 2px / 4px |
| Border | 1px |
| Bayangan naik | `none` |
| Bayangan pressed | `none` |
| Prinsip kedalaman | Langkah tone dan garis 1px. Tanpa bayangan. |

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

Instan atau 120ms. Tidak ada yang dekoratif.

Instant or 120ms. Nothing decorative.

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
- Warna hanya untuk menutupi hierarki yang lemah
- Garis rambut di mana-mana
- Label kapital yang sangat kecil

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#111111` / `#f7f7f5` | 17.6:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#4a4a46` / `#f7f7f5` | 8.3:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#111111` / `#ffffff` | 18.88:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#4a4a46` / `#ffffff` | 8.9:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#111111` | 18.88:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#111111` / `#f7f7f5` | 17.6:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#111111` / `#f7f7f5` | 17.6:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#8f8f8b` / `#f7f7f5` | 3.03:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#f5f5f2` / `#111110` | 17.3:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#b4b4ad` / `#111110` | 9.06:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#f5f5f2` / `#1a1a18` | 15.96:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#b4b4ad` / `#1a1a18` | 8.36:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#111111` / `#f5f5f2` | 17.29:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#f5f5f2` / `#111110` | 17.3:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#ffffff` / `#111110` | 18.89:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#62625e` / `#111110` | 3.08:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="minimal-monochrome"] {
  color-scheme: light;
  --color-bg: #f7f7f5;
  --color-surface: #ffffff;
  --color-surface-alt: #efefec;
  --color-text: #111111;
  --color-text-muted: #4a4a46;
  --color-border: #dcdcd6;
  --color-border-strong: #8f8f8b;
  --color-action: #111111;
  --color-action-text: #ffffff;
  --color-focus: #111111;
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --border-width: 1px;
  --shadow-raised: none;
  --shadow-pressed: none;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="minimal-monochrome"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #111110;
  --color-surface: #1a1a18;
  --color-surface-alt: #222220;
  --color-text: #f5f5f2;
  --color-text-muted: #b4b4ad;
  --color-border: #33332f;
  --color-border-strong: #62625e;
  --color-action: #f5f5f2;
  --color-action-text: #111111;
  --color-focus: #ffffff;
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
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
