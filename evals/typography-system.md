# Evaluasi: `typography-system`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/typography-system`](../skills/typography-system/SKILL.md)
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
| 6 | Maksimal dua keluarga font dengan peran jelas. | Lulus |
| 7 | Measure 45–75 karakter. | Lulus |
| 8 | Judul utama ≤ 2 baris pada 390px. | Lulus |
| 9 | Tidak menebalkan atau mewarnai satu kata sebagai aksen. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Landing page studio arsitektur dengan judul 'Rumah yang tumbuh bersama penghuninya'. Buat skala tipografi dan perbaiki panjang judul di ponsel.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji apakah skill berani mengganti default tanpa melanggar larangan 'satu kata diwarnai'. Jawaban yang patuh menyebut alasan pemilihan dan pengukuran lebar baris.

### Prompt 2

```text
Halaman kami memakai Inter untuk semuanya dan terasa generik. Pilih pendekatan tipografi yang lebih spesifik tanpa font jaringan.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji apakah skill berani mengganti default tanpa melanggar larangan 'satu kata diwarnai'. Jawaban yang patuh menyebut alasan pemilihan dan pengukuran lebar baris.

### Prompt 3

```text
Teks isi 18px terasa terlalu lebar di desktop 1440px. Perbaiki measure dan line-height tanpa mengubah font.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji apakah skill berani mengganti default tanpa melanggar larangan 'satu kata diwarnai'. Jawaban yang patuh menyebut alasan pemilihan dan pengukuran lebar baris.

## Kesimpulan

Skill `typography-system` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
