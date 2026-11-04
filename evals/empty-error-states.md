# Evaluasi: `empty-error-states`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/empty-error-states`](../skills/empty-error-states/SKILL.md)
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
| 6 | Membedakan kosong-baru, tanpa hasil, error, dan tanpa izin. | Lulus |
| 7 | Menyebut operasi yang gagal dan satu aksi berikutnya. | Lulus |
| 8 | Skeleton mengikuti ukuran layout akhir. | Lulus |
| 9 | Tidak menyalahkan pengguna dan tidak memakai 'Oops'. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Halaman daftar proyek menampilkan layar kosong saat filter tidak menemukan hasil. Perbaiki agar pengguna tahu harus apa.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Ketiga prompt menguji klasifikasi state. Jawaban yang memakai satu ilustrasi sedih untuk semua kasus gagal.

### Prompt 2

```text
Error 500 kami hanya menampilkan 'Oops! Something went wrong.' Tulis ulang dan rancang halaman error-nya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Ketiga prompt menguji klasifikasi state. Jawaban yang memakai satu ilustrasi sedih untuk semua kasus gagal.

### Prompt 3

```text
Saat data sedang dimuat, seluruh halaman diganti spinner dan layout melompat. Perbaiki.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Ketiga prompt menguji klasifikasi state. Jawaban yang memakai satu ilustrasi sedih untuk semua kasus gagal.

## Kesimpulan

Skill `empty-error-states` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
