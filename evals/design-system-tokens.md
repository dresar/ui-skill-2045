# Evaluasi: `design-system-tokens`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/design-system-tokens`](../skills/design-system-tokens/SKILL.md)
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
| 6 | Menghasilkan tiga lapis token: primitif, semantik, komponen. | Lulus |
| 7 | Tidak ada hex mentah di komponen setelah migrasi. | Lulus |
| 8 | Dark mode meng-override token semantik, bukan memakai filter invert. | Lulus |
| 9 | Menyebut skala spacing 4px dan tiga radius. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Buat token set untuk dashboard admin biru lembut. Butuh light dan dark mode, tabel padat, dan satu tombol utama. Keluarkan satu file CSS.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Instruksi memaksa inventaris, penamaan per peran, dan verifikasi kontras. Tiga prompt menghasilkan jawaban yang dapat diperiksa dengan checklist yang sama.

### Prompt 2

```text
Refactor komponen React ini yang punya 14 hex dan 9 nilai padding berbeda menjadi token semantik tanpa mengubah tampilan.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Instruksi memaksa inventaris, penamaan per peran, dan verifikasi kontras. Tiga prompt menghasilkan jawaban yang dapat diperiksa dengan checklist yang sama.

### Prompt 3

```text
Tim kami ingin density 'compact' dan 'comfortable' tanpa menduplikasi semua komponen. Rancang pendekatannya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Instruksi memaksa inventaris, penamaan per peran, dan verifikasi kontras. Tiga prompt menghasilkan jawaban yang dapat diperiksa dengan checklist yang sama.

## Kesimpulan

Skill `design-system-tokens` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
