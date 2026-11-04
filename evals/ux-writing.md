# Evaluasi: `ux-writing`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/ux-writing`](../skills/ux-writing/SKILL.md)
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
| 6 | Tombol memakai verb + object. | Lulus |
| 7 | Error menyebut apa yang terjadi dan cara memperbaikinya. | Lulus |
| 8 | Kedua bahasa membawa informasi yang sama. | Lulus |
| 9 | Tidak ada 'Oops', 'Something went wrong', atau 'Klik di sini'. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Tulis ulang copy onboarding aplikasi kasir kecil dalam Bahasa Indonesia dan Inggris. Hindari 'silakan' dan jangan menyalahkan pengguna saat gagal.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menilai informasi, bukan panjang kalimat. Prompt ketiga menguji nada pada jalur kegagalan.

### Prompt 2

```text
Semua tombol kami berbunyi 'Submit', 'OK', dan 'Yes'. Ganti dengan label yang menjelaskan akibatnya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menilai informasi, bukan panjang kalimat. Prompt ketiga menguji nada pada jalur kegagalan.

### Prompt 3

```text
Tulis pesan error untuk pembayaran yang ditolak kartu, tanpa menyebut kode internal dan tanpa nada bercanda.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menilai informasi, bukan panjang kalimat. Prompt ketiga menguji nada pada jalur kegagalan.

## Kesimpulan

Skill `ux-writing` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
