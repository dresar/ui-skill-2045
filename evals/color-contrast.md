# Evaluasi: `color-contrast`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/color-contrast`](../skills/color-contrast/SKILL.md)
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
| 6 | Menyebut rasio terukur, bukan 'cukup kontras'. | Lulus |
| 7 | Teks tombol memakai warna yang lolos 4.5:1. | Lulus |
| 8 | Status tidak hanya warna; ada label atau ikon. | Lulus |
| 9 | Dark mode dirancang terpisah, bukan inversi. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Brand kami #4f7cff. Buat palet light dan dark yang lolos WCAG AA, termasuk status berhasil, peringatan, dan gagal.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Semua prompt dapat dinilai dengan penghitung kontras yang sama. Jawaban yang tidak menyertakan angka gagal pada rubrik.

### Prompt 2

```text
Tombol kuning kami memakai teks putih dan sulit dibaca. Perbaiki tanpa menghilangkan warna brand.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Semua prompt dapat dinilai dengan penghitung kontras yang sama. Jawaban yang tidak menyertakan angka gagal pada rubrik.

### Prompt 3

```text
Grafik ini membedakan empat seri hanya dengan merah, hijau, biru, dan kuning. Perbaiki agar tetap terbaca oleh buta warna.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Semua prompt dapat dinilai dengan penghitung kontras yang sama. Jawaban yang tidak menyertakan angka gagal pada rubrik.

## Kesimpulan

Skill `color-contrast` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
