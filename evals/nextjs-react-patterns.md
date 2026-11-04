# Evaluasi: `nextjs-react-patterns`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/nextjs-react-patterns`](../skills/nextjs-react-patterns/SKILL.md)
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
| 6 | Server component sebagai default, client hanya di daun. | Lulus |
| 7 | Fetch independen paralel dan ada Suspense boundary. | Lulus |
| 8 | Form memakai Server Action atau route handler dengan error field-level. | Lulus |
| 9 | Static export punya generateStaticParams dan metadata yang benar. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Dashboard Next.js ini seluruhnya 'use client' dan datanya di-fetch di useEffect. Ubah ke App Router dengan server components dan streaming.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji batas server/client. Jawaban yang menambahkan 'use client' lebih banyak otomatis gagal.

### Prompt 2

```text
Form kami kehilangan state saat JavaScript lambat. Rancang form yang tetap bekerja dan punya pending state.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji batas server/client. Jawaban yang menambahkan 'use client' lebih banyak otomatis gagal.

### Prompt 3

```text
Build static export kami gagal karena dynamic route tidak punya generateStaticParams. Perbaiki.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt pertama menguji batas server/client. Jawaban yang menambahkan 'use client' lebih banyak otomatis gagal.

## Kesimpulan

Skill `nextjs-react-patterns` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
