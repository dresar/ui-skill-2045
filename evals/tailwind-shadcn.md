# Evaluasi: `tailwind-shadcn`

> Tiga prompt nyata, rubrik yang sama, dan catatan hasil. Metode: reviewer menerapkan instruksi
> skill secara manual pada prompt di bawah, lalu memeriksa keluaran terhadap rubrik. Ini bukan
> snapshot keluaran model dan bukan klaim bahwa setiap agen akan menghasilkan jawaban identik.
> Ulangi dengan agen Anda sebelum mengandalkan hasilnya.

- Skill: [`skills/tailwind-shadcn`](../skills/tailwind-shadcn/SKILL.md)
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
| 6 | Token semantik menggantikan palette class dan hex. | Lulus |
| 7 | Varian diekstrak ke `cva`, bukan ternary di JSX. | Lulus |
| 8 | Aksesibilitas primitif shadcn dipertahankan. | Lulus |
| 9 | Dark mode lewat token, bukan `dark:` di setiap utility. | Lulus |

## Prompt dan hasil

### Prompt 1

```text
Kami memakai shadcn/ui dan Tailwind. Tombol, kartu, dan input punya hex langsung dan dark mode tidak konsisten. Rapikan tanpa mengganti library.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt ketiga menguji sikap terhadap library: menyesuaikan boleh, merusak perilaku aksesibel tidak.

### Prompt 2

```text
Class string tombol kami 40 token dan bercabang dengan ternary. Refactor menjadi varian yang bisa dibaca.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt ketiga menguji sikap terhadap library: menyesuaikan boleh, merusak perilaku aksesibel tidak.

### Prompt 3

```text
Setelah kami menyesuaikan Dialog shadcn, focus tidak lagi masuk ke dialog. Perbaiki tanpa menulis ulang primitif.
```

**Perilaku yang diharapkan:** jawaban mengikuti langkah skill, menyebut asumsi, dan memenuhi
seluruh kriteria rubrik di atas. Bagian yang tidak dapat diuji (mis. screen reader) dinyatakan
sebagai batasan, bukan diklaim lulus.

**Hasil:** Lulus pada rubrik instruksi. Catatan: Prompt ketiga menguji sikap terhadap library: menyesuaikan boleh, merusak perilaku aksesibel tidak.

## Kesimpulan

Skill `tailwind-shadcn` menghasilkan keluaran yang dapat diperiksa dan memiliki jalur kegagalan
yang jelas. Perbaikan berikutnya harus menambah prompt baru ketika ada mode kegagalan yang
belum tercakup, bukan menambah kriteria yang sudah ada.

Bukan nasihat hukum.
