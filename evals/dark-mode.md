# Evaluasi: `dark-mode`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/dark-mode`](../skills/dark-mode/SKILL.md)
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
| 6 | Palet gelap dirancang terpisah, bukan inversi. | Lulus |
| 7 | Elevasi memakai tone dan border, bukan bayangan gelap. | Lulus |
| 8 | Aksen disesuaikan dan kontras diukur ulang. | Lulus |
| 9 | Tema dipasang sebelum paint dan tersimpan. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Tambahkan dark mode ke aplikasi kami. Saat ini kalau dibalik, kartu hilang dan biru brand menyilaukan.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji diagnosis, bukan sekadar mengganti warna. Jawaban yang memakai `filter: invert()` gagal.

### Prompt 2

```text
Theme toggle kami menyebabkan flash putih saat halaman dimuat. Perbaiki.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji diagnosis, bukan sekadar mengganti warna. Jawaban yang memakai `filter: invert()` gagal.

### Prompt 3

```text
Grafik dan ilustrasi tetap terang di dark mode. Rancang penanganannya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji diagnosis, bukan sekadar mengganti warna. Jawaban yang memakai `filter: invert()` gagal.

## Kesimpulan

Skill `dark-mode` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
