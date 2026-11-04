# Evaluasi: `accessibility-wcag`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/accessibility-wcag`](../skills/accessibility-wcag/SKILL.md)
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
| 6 | Menyebut uji keyboard dan screen reader, bukan hanya axe. | Lulus |
| 7 | Label, error, dan focus ring diperbaiki di tingkat komponen. | Lulus |
| 8 | Tidak menghapus outline tanpa pengganti. | Lulus |
| 9 | Melaporkan batasan audit secara jujur. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Form checkout hanya bisa dipakai dengan mouse dan error-nya hanya berwarna merah. Perbaiki agar lolos WCAG 2.2 AA.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menolak klaim 'lolos WCAG' hanya dari pemindai otomatis. Prompt ketiga meminta severity dan bukti.

### Prompt 2

```text
Modal kami tidak menangkap focus dan tidak bisa ditutup dengan Escape. Perbaiki tanpa mengganti library.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menolak klaim 'lolos WCAG' hanya dari pemindai otomatis. Prompt ketiga meminta severity dan bukti.

### Prompt 3

```text
Audit cepat halaman ini: fokus, label, kontras, landmark, dan reflow 320px. Laporkan dengan severity.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Rubrik menolak klaim 'lolos WCAG' hanya dari pemindai otomatis. Prompt ketiga meminta severity dan bukti.

## Kesimpulan

Skill `accessibility-wcag` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
