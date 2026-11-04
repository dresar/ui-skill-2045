# Evaluasi: `frontend-performance`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/frontend-performance`](../skills/frontend-performance/SKILL.md)
- Versi: 1.0.0
- Lisensi: MIT
- Tanggal evaluasi: 2026-11-04

## Rubrik

| # | Kriteria | Status |
|---|---|---|
| 1 | Mengikuti urutan langkah skill, bukan melompat ke kode. | Lulus |
| 2 | Menyebut input yang hilang dan memilih default yang dapat dipertahankan. | Lulus |
| 3 | Mematuhi daftar larangan skill. | Lulus |
| 4 | Memenuhi checklist sebelum menyerahkan hasil. | Lulus |
| 5 | Menjelaskan trade-off dan batasan pengujian. | Lulus |
| 6 | Mengukur build produksi dan menyebut angka sebelum/sesudah. | Lulus |
| 7 | Gambar punya dimensi, format modern, dan prioritas LCP. | Lulus |
| 8 | Font dikurangi atau di-self-host dengan swap. | Lulus |
| 9 | Client component dipersempit ke pulau interaktif. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Landing page Next.js kami punya LCP 4.1s di ponsel. Hero-nya gambar 3000px dan ada tiga webfont. Perbaiki tanpa mengubah desain.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji prioritisasi LCP. Jawaban yang langsung mengubah desain tanpa mengukur gagal.

### Prompt 2

```text
CLS kami 0.24 karena banner cookie muncul terlambat. Perbaiki.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji prioritisasi LCP. Jawaban yang langsung mengubah desain tanpa mengukur gagal.

### Prompt 3

```text
Halaman terasa berat karena seluruh dashboard adalah client component. Rancang pemecahannya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji prioritisasi LCP. Jawaban yang langsung mengubah desain tanpa mengukur gagal.

## Kesimpulan

Skill `frontend-performance` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
