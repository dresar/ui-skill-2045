# Claymorphism

> Permukaan lembut, membulat, taktil, dengan afordansi jelas.
> Soft, rounded, tactile surfaces with clear affordances.

[Lihat preview HTML mandiri](./previews/claymorphism.html) · [Token CSS](../../skills/theme-recipes/assets/themes.css) · [Katalog tema](./README.md)

## Filosofi

Clay itu ramah, tetapi keramahan bukan pengganti kejelasan. Kelembutan harus datang dari sumber cahaya konsisten dan saturasi yang terkendali. Kontrol butuh state pressed yang jelas dan focus ring terlihat, bukan hanya bayangan yang lebih empuk.

Clay is friendly, but friendliness is not a substitute for clarity. The softness must come from a consistent light source and restrained saturation. Controls need a clear pressed state and a visible focus ring, not just a squishier shadow.

## Kapan dipakai

- Aplikasi edukasi dan konsumen
- Onboarding dan alat yang ramah
- Satu permukaan merek yang bersahabat

## Kapan dihindari

- B2B serius dan antarmuka teregulasi
- Data padat
- Konteks kritis aksesibilitas tanpa pengujian tambahan

## Palet — light mode

| Token | Nilai |
|---|---|
| `bg` | `#eef2ff` |
| `surface` | `#ffffff` |
| `surfaceAlt` | `#e3e8ff` |
| `text` | `#1d2438` |
| `muted` | `#4a5675` |
| `accent` | `#5a4ae0` |
| `accentText` | `#ffffff` |
| `border` | `#d7ddf7` |
| `focus` | `#4736c9` |
| `shadowDark` | `#cdd4f0` |
| `shadowLight` | `#ffffff` |
| `borderStrong` | `#81889f` |

## Palet — dark mode

| Token | Nilai |
|---|---|
| `bg` | `#171a2b` |
| `surface` | `#1e2236` |
| `surfaceAlt` | `#262b45` |
| `text` | `#eef0fb` |
| `muted` | `#a8add0` |
| `accent` | `#a99bff` |
| `accentText` | `#171a2b` |
| `border` | `#333957` |
| `focus` | `#c3b8ff` |
| `shadowDark` | `#0c0e18` |
| `shadowLight` | `#2b3152` |
| `borderStrong` | `#60657e` |

## Aturan bentuk

| Properti | Nilai |
|---|---|
| Radius | 14px / 22px / 32px |
| Border | 0px |
| Bayangan naik | `0 12px 28px #cdd4f080, inset 0 1px 0 #ffffff` |
| Bayangan pressed | `inset 4px 4px 10px #cdd4f0, inset -4px -4px 10px #ffffff` |
| Prinsip kedalaman | Shadow luar lembut plus highlight dalam halus. Satu arah cahaya. |

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

Press scale 0.98 dan perubahan shadow, 120–180ms. Reduced motion hanya mempertahankan shadow.

Press scale 0.98 and shadow change, 120–180ms. Reduced motion keeps the shadow only.

## Contoh komponen

- **Tombol utama:** latar `--color-action`, teks `--color-action-text`, radius `--radius-md`,
  focus ring 2px `--color-focus`.
- **Kartu:** latar `--color-surface`, border `--border-width`, bayangan `--shadow-raised`
  hanya jika tema menggunakan bayangan.
- **Input:** tinggi 44px, label di atas, border 1px, error di bawah dengan teks.
- **Tabel:** baris 44–48px, header `--color-surface-alt`, tanpa bayangan per baris.
- **Alert:** ikon + teks, tidak hanya warna.

## Larangan

- Lebih dari satu arah cahaya
- Clay pada setiap elemen
- Teks pastel di atas latar pastel
- Fokus hanya dari bayangan yang lebih lembut

## Hasil ukur kontras

Semua pasangan teks/latar di bawah ini lolos WCAG AA.

| Mode | Pasangan | Warna | Rasio | Ambang | Status |
|---|---|---|---|---|---|
| light | Body text on ground | `#1d2438` / `#eef2ff` | 13.79:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on ground | `#4a5675` / `#eef2ff` | 6.52:1 | ≥ 4.5:1 | Lulus |
| light | Body text on surface | `#1d2438` / `#ffffff` | 15.42:1 | ≥ 4.5:1 | Lulus |
| light | Muted text on surface | `#4a5675` / `#ffffff` | 7.29:1 | ≥ 4.5:1 | Lulus |
| light | Action label on action | `#ffffff` / `#5a4ae0` | 6.02:1 | ≥ 4.5:1 | Lulus |
| light | Action on ground | `#5a4ae0` / `#eef2ff` | 5.38:1 | ≥ 3:1 | Lulus |
| light | Focus ring on ground | `#4736c9` / `#eef2ff` | 7.12:1 | ≥ 3:1 | Lulus |
| light | Control border on ground | `#81889f` / `#eef2ff` | 3.15:1 | ≥ 3:1 | Lulus |
| dark | Body text on ground | `#eef0fb` / `#171a2b` | 15.17:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on ground | `#a8add0` / `#171a2b` | 7.84:1 | ≥ 4.5:1 | Lulus |
| dark | Body text on surface | `#eef0fb` / `#1e2236` | 13.83:1 | ≥ 4.5:1 | Lulus |
| dark | Muted text on surface | `#a8add0` / `#1e2236` | 7.14:1 | ≥ 4.5:1 | Lulus |
| dark | Action label on action | `#171a2b` / `#a99bff` | 7.23:1 | ≥ 4.5:1 | Lulus |
| dark | Action on ground | `#a99bff` / `#171a2b` | 7.23:1 | ≥ 3:1 | Lulus |
| dark | Focus ring on ground | `#c3b8ff` / `#171a2b` | 9.53:1 | ≥ 3:1 | Lulus |
| dark | Control border on ground | `#60657e` / `#171a2b` | 3:1 | ≥ 3:1 | Lulus |

## Token siap pakai

```css
:root[data-theme="claymorphism"] {
  color-scheme: light;
  --color-bg: #eef2ff;
  --color-surface: #ffffff;
  --color-surface-alt: #e3e8ff;
  --color-text: #1d2438;
  --color-text-muted: #4a5675;
  --color-border: #d7ddf7;
  --color-border-strong: #81889f;
  --color-action: #5a4ae0;
  --color-action-text: #ffffff;
  --color-focus: #4736c9;
  --radius-sm: 14px;
  --radius-md: 22px;
  --radius-lg: 32px;
  --border-width: 0px;
  --shadow-raised: 0 12px 28px #cdd4f080, inset 0 1px 0 #ffffff;
  --shadow-pressed: inset 4px 4px 10px #cdd4f0, inset -4px -4px 10px #ffffff;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}

:root[data-theme="claymorphism"][data-mode="dark"] {
  color-scheme: dark;
  --color-bg: #171a2b;
  --color-surface: #1e2236;
  --color-surface-alt: #262b45;
  --color-text: #eef0fb;
  --color-text-muted: #a8add0;
  --color-border: #333957;
  --color-border-strong: #60657e;
  --color-action: #a99bff;
  --color-action-text: #171a2b;
  --color-focus: #c3b8ff;
  --radius-sm: 14px;
  --radius-md: 22px;
  --radius-lg: 32px;
  --border-width: 0px;
  --shadow-raised: 0 12px 28px #0c0e1880, inset 0 1px 0 #2b3152;
  --shadow-pressed: inset 4px 4px 10px #0c0e18, inset -4px -4px 10px #2b3152;
  --font-display: 'Segoe UI', system-ui, sans-serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
```

---

Dokumen ini dihasilkan dari `data/themes.mjs` dan diverifikasi oleh `scripts/build-theme-docs.mjs`.
Kontras dihitung dengan rumus WCAG. Bukan nasihat hukum.
