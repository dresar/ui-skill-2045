# Evaluasi: `spacing-layout`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/spacing-layout`](../skills/spacing-layout/SKILL.md)
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
| 6 | Jarak antar-seksi lebih besar dari jarak internal. | Lulus |
| 7 | Margin luar kiri dan kanan sama. | Lulus |
| 8 | Ada minimal dua komposisi seksi berbeda. | Lulus |
| 9 | Tidak ada overflow horizontal di 320px. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Halaman harga tiga paket terasa sesak dan seperti template. Susun ulang spacing dan komposisi section.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menguji pengukuran, bukan selera. Prompt ketiga memastikan normalisasi tidak menghapus hierarki.

### Prompt 2

```text
Di desktop, teks selalu menempel kiri dan separuh layar kosong. Perbaiki tanpa menengahkan semuanya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menguji pengukuran, bukan selera. Prompt ketiga memastikan normalisasi tidak menghapus hierarki.

### Prompt 3

```text
Tabel dan kartu di halaman ini memakai padding 12, 18, 24, dan 30px. Normalisasi tanpa merusak hierarki.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menguji pengukuran, bukan selera. Prompt ketiga memastikan normalisasi tidak menghapus hierarki.

## Kesimpulan

Skill `spacing-layout` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
