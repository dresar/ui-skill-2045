# Evaluasi: `ui-audit-review`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/ui-audit-review`](../skills/ui-audit-review/SKILL.md)
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
| 6 | Setiap temuan punya lokasi, bukti, severity, dan rekomendasi. | Lulus |
| 7 | Kontras dan ukuran target diukur. | Lulus |
| 8 | Ada tiga perbaikan teratas yang eksplisit. | Lulus |
| 9 | Batasan audit disebutkan. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Review halaman settings ini. Saya merasa ada yang salah tapi tidak tahu apa. Fokus ke usability dan aksesibilitas.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji apakah reviewer bisa menemukan masalah tanpa arahan. Jawaban tanpa bukti atau tanpa prioritas gagal.

### Prompt 2

```text
Lakukan audit pra-rilis untuk landing page kami di 390, 768, dan 1440. Beri tiga perbaikan teratas.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji apakah reviewer bisa menemukan masalah tanpa arahan. Jawaban tanpa bukti atau tanpa prioritas gagal.

### Prompt 3

```text
Bandingkan halaman before/after ini dan nilai apakah redesign-nya memperbaiki hierarki.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji apakah reviewer bisa menemukan masalah tanpa arahan. Jawaban tanpa bukti atau tanpa prioritas gagal.

## Kesimpulan

Skill `ui-audit-review` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
