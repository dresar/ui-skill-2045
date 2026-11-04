# Tes dan Evaluasi

Repositori ini memakai tiga lapis pengujian. Tidak ada lapis yang boleh dilewati sebelum PR
digabung.

## 1. Validator kontrak (`scripts/validate.mjs`)

Memeriksa:

- frontmatter wajib dan tipe nilainya;
- `name` huruf kecil, tanda hubung, dan sama dengan nama folder;
- `SKILL.md` di bawah 500 baris dan memiliki bagian wajib;
- `preview/index.html` ada, mandiri, responsif, punya toggle ID/EN, dan menghormati
  `prefers-reduced-motion`;
- skill turunan memiliki `LICENSE-UPSTREAM`, `MODIFICATIONS.md`, `original_author`,
  `original_license`, dan `upstream_commit` 40 karakter;
- lisensi termasuk daftar permisif;
- tautan relatif di seluruh markdown tidak rusak;
- `skills.json` sinkron dengan folder `skills/`;
- 11 tema ada, dokumen dan preview-nya ada;
- 88 pasangan warna tema lolos WCAG AA;
- setiap skill memiliki `evals/<nama>.md` dengan minimal 3 prompt.

Jalankan:

```bash
npm run validate
```

## 2. Tes CLI (`packages/cli/test/cli.test.js`)

Menggunakan `node:test` tanpa dependensi. Cakupan:

- parsing argumen, `--key=value`, opsi tak dikenal, dan nilai yang hilang;
- `list` dan `--json`;
- `add` per skill dan per tema;
- `--agent` dan `--dir`;
- larangan menimpa tanpa `--force`;
- `update` melaporkan skill usang dan membutuhkan `--force`;
- `remove` hanya menghapus direktori skill;
- pesan error yang jelas untuk skill/agent tidak dikenal.

Jalankan:

```bash
npm test
```

Hasil terakhir: **12 lulus, 0 gagal** (Node v24.15.0, Windows).

## 3. Build situs dan preview

```bash
npm run build:site
```

Menghasilkan `site/out` dengan 40 rute statis. Pemeriksaan manual yang disarankan:

- buka `site/out/index.html` melalui server statis dan periksa layout di 390, 768, 1440;
- buka setiap `skills/<nama>/preview/index.html` langsung dari filesystem;
- pastikan toggle ID/EN dan theme toggle bekerja;
- jalankan axe DevTools pada beranda, galeri, satu detail skill, satu detail tema;
- uji keyboard: skip link, navigasi, filter, tombol salin, dan iframe.

## 4. Evaluasi skill (`evals/`)

Setiap skill punya tiga prompt nyata dan rubrik. Metodenya adalah **review instruksi**, bukan
snapshot keluaran model: reviewer menerapkan langkah skill secara manual, lalu memeriksa hasil
terhadap kriteria. Ini bukan bukti bahwa setiap model akan menghasilkan jawaban identik.

Untuk menjalankan ulang dengan agenmu:

1. Pasang satu skill.
2. Berikan prompt dari `evals/<nama>.md`.
3. Nilai keluaran dengan rubrik yang tercantum.
4. Catat kegagalan baru sebagai kasus tambahan, bukan dengan melonggarkan kriteria.

## Yang tidak diklaim

- Tidak ada jaminan kepatuhan WCAG penuh dari pemindai otomatis.
- Tidak ada benchmark performa pada perangkat nyata.
- Tidak ada jaminan bahwa model tertentu akan mengikuti instruksi dengan sempurna.
- Tidak ada jaminan hukum atas lisensi. Bukan nasihat hukum.
