# Evaluasi: `responsive-adaptive`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/responsive-adaptive`](../skills/responsive-adaptive/SKILL.md)
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
| 6 | Mulai dari 320px dan menyebut breakpoint berbasis konten. | Lulus |
| 7 | Tidak ada overflow horizontal. | Lulus |
| 8 | Target sentuh 44px dan input minimal 16px. | Lulus |
| 9 | Strategi tabel eksplisit, bukan menyembunyikan kolom diam-diam. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Tabel faktur 7 kolom hancur di ponsel. Buat strategi mobile yang tetap menampilkan nomor, status, dan total.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji pemahaman `100vw` vs `100%`. Jawaban yang hanya menambahkan media query tanpa memperbaiki frame gagal.

### Prompt 2

```text
Layout kami memakai 100vw dan muncul scrollbar horizontal. Perbaiki seluruh frame.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji pemahaman `100vw` vs `100%`. Jawaban yang hanya menambahkan media query tanpa memperbaiki frame gagal.

### Prompt 3

```text
Dashboard 1440px harus tetap berguna di tablet 768px tanpa menyembunyikan data penting.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji pemahaman `100vw` vs `100%`. Jawaban yang hanya menambahkan media query tanpa memperbaiki frame gagal.

## Kesimpulan

Skill `responsive-adaptive` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
