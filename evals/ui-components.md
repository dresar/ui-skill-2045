# Evaluasi: `ui-components`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/ui-components`](../skills/ui-components/SKILL.md)
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
| 6 | Matriks state lengkap: default, hover, focus, active, disabled, loading, error. | Lulus |
| 7 | Label form terlihat dan error terhubung ke field. | Lulus |
| 8 | Tabel memakai semantik tabel dan punya strategi mobile eksplisit. | Lulus |
| 9 | Target sentuh minimal 44px. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Buat form undangan tim dengan email dan peran. Lengkapi state loading, error, sukses, dan akses keyboard.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji kelengkapan state; ketiga menguji keputusan responsif. Jawaban yang hanya menata warna gagal.

### Prompt 2

```text
Tombol di aplikasi kami tidak punya hover atau focus. Perbaiki semua varian tanpa mengubah layout.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji kelengkapan state; ketiga menguji keputusan responsif. Jawaban yang hanya menata warna gagal.

### Prompt 3

```text
Tabel 7 kolom ini hancur di ponsel. Rancang strategi mobile yang tetap menampilkan nomor, status, dan total.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji kelengkapan state; ketiga menguji keputusan responsif. Jawaban yang hanya menata warna gagal.

## Kesimpulan

Skill `ui-components` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
