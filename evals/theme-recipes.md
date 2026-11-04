# Evaluasi: `theme-recipes`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/theme-recipes`](../skills/theme-recipes/SKILL.md)
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
| 6 | Tema dipilih berdasarkan pekerjaan, bukan mode. | Lulus |
| 7 | Hanya satu mekanisme kedalaman yang dipakai. | Lulus |
| 8 | Kontras diverifikasi, termasuk teks aksen. | Lulus |
| 9 | Ada fallback solid untuk permukaan transparan. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Saya mau dashboard analitik biru lembut dengan tombol timbul, tetapi harus lolos WCAG AA dan tidak terlihat seperti template.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji kemampuan menolak permintaan yang merugikan pengguna tanpa menolak estetika klien. Jawaban harus menawarkan kompromi konkret.

### Prompt 2

```text
Klien meminta glassmorphism untuk halaman harga yang penuh teks. Jelaskan risikonya dan berikan alternatif yang tetap terasa glass.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji kemampuan menolak permintaan yang merugikan pengguna tanpa menolak estetika klien. Jawaban harus menawarkan kompromi konkret.

### Prompt 3

```text
Kami ingin tema brutalist untuk festival, tetapi form pendaftarannya harus tetap mudah dipakai. Seimbangkan keduanya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji kemampuan menolak permintaan yang merugikan pengguna tanpa menolak estetika klien. Jawaban harus menawarkan kompromi konkret.

## Kesimpulan

Skill `theme-recipes` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
