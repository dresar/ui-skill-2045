# Evaluasi: `dashboard-admin`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/dashboard-admin`](../skills/dashboard-admin/SKILL.md)
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
| 6 | Setiap modul menjawab pertanyaan pengguna yang disebut. | Lulus |
| 7 | Metrik menyertakan pembanding dan rentang waktu. | Lulus |
| 8 | Tabel punya sorting, filter, empty, loading, dan error state. | Lulus |
| 9 | Filter aktif terlihat dan tersimpan di URL. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Dashboard support: tiket masuk, SLA, antrean. Tim harus tahu dalam 5 detik apakah ada yang terlambat.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua memaksa penghapusan, bukan penambahan. Jawaban yang menambah grafik tanpa menjawab pertanyaan gagal.

### Prompt 2

```text
Dashboard kami punya 12 kartu KPI yang sama besar dan tidak menjawab pertanyaan apa pun. Rancang ulang.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua memaksa penghapusan, bukan penambahan. Jawaban yang menambah grafik tanpa menjawab pertanyaan gagal.

### Prompt 3

```text
Filter tanggal hilang setiap kali kami pindah halaman. Perbaiki perilakunya dan jelaskan pilihan desainnya.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt kedua memaksa penghapusan, bukan penambahan. Jawaban yang menambah grafik tanpa menjawab pertanyaan gagal.

## Kesimpulan

Skill `dashboard-admin` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
