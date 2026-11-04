# Evaluasi: `motion-system`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/motion-system`](../skills/motion-system/SKILL.md)
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
| 6 | Setiap animasi punya tujuan yang disebut. | Lulus |
| 7 | Hanya transform dan opacity yang dianimasikan dalam loop. | Lulus |
| 8 | Ada jalur reduced-motion yang menghapus perjalanan. | Lulus |
| 9 | Tidak ada scroll-jacking. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Tambahkan animasi ke halaman pricing. Kartu unggulan harus terasa lebih hidup, tetapi jangan fade-up di semua bagian.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt ketiga menguji penolakan yang tepat: efek sinematik boleh, tetapi tidak boleh mengorbankan keterbacaan dan preferensi pengguna.

### Prompt 2

```text
Animasi hover di kartu kami menyebabkan layout shift dan patah-patah di ponsel. Perbaiki.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt ketiga menguji penolakan yang tepat: efek sinematik boleh, tetapi tidak boleh mengorbankan keterbacaan dan preferensi pengguna.

### Prompt 3

```text
Kami ingin efek scroll sinematik untuk halaman campaign. Jelaskan batasannya dan buat versi yang menghormati reduced motion.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt ketiga menguji penolakan yang tepat: efek sinematik boleh, tetapi tidak boleh mengorbankan keterbacaan dan preferensi pengguna.

## Kesimpulan

Skill `motion-system` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
