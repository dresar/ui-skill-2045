# Evaluasi: `anti-slop-design`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/anti-slop-design`](../skills/anti-slop-design/SKILL.md)
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
| 6 | Ada kalimat ide yang menyebut hal spesifik milik subjek. | Lulus |
| 7 | Tes kompetitor gagal (ide tidak bisa dipakai pesaing). | Lulus |
| 8 | Tidak ada item tell tanpa alasan yang dinyatakan. | Lulus |
| 9 | Tidak mengarang bukti pelanggan atau statistik. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Buat landing page untuk kedai kopi yang memanggang sendiri di Bandung. Jangan pakai gaya krem-terracotta. Harus terasa seperti kedai ini, bukan kedai kopi mana pun.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji diagnosis tell. Jawaban yang hanya mengganti ungu menjadi biru tanpa ide gagal pada tes kompetitor.

### Prompt 2

```text
Halaman SaaS kami terlihat seperti template AI: gradien ungu, tiga kartu ikon, eyebrow kapital. Perbaiki arah visualnya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji diagnosis tell. Jawaban yang hanya mengganti ungu menjadi biru tanpa ide gagal pada tes kompetitor.

### Prompt 3

```text
Kami butuh satu elemen interaktif yang hanya masuk akal untuk produk ini, bukan animasi dekoratif.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua menguji diagnosis tell. Jawaban yang hanya mengganti ungu menjadi biru tanpa ide gagal pada tes kompetitor.

## Kesimpulan

Skill `anti-slop-design` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
