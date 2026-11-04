# Contributing

Terima kasih sudah mempertimbangkan kontribusi. Repositori ini adalah kumpulan **instruksi yang
dijalankan agen**, jadi kualitas dan atribusi lebih penting daripada jumlah.

## Aturan yang tidak bisa dilanggar

1. **Jangan menyalin tanpa lisensi permisif.** MIT, Apache-2.0, BSD, ISC, atau CC0. Tanpa
   lisensi berarti seluruh hak dipegang pemilik; jangan disalin.
2. **Pertahankan copyright dan teks lisensi asli.** Jangan mengganti nama pemilik upstream.
3. **Jangan menyalin dari sumber yang ditolak** di [`docs/rejected-sources.md`](docs/rejected-sources.md).
4. **Jangan mengarang fakta.** URL, versi, commit, jumlah skill, dan lisensi harus diverifikasi.
5. **Jangan menambahkan rahasia, token, atau data pribadi.**

Jika lisensi sebuah sumber ambigu: jangan salin, catat di `docs/rejected-sources.md`, dan tandai
PR untuk ditinjau pemilik.

## Menambah skill

1. Buat folder `skills/<nama>/` dengan nama huruf kecil dan tanda hubung.
2. Tulis `SKILL.md` dengan frontmatter:

   ```yaml
   ---
   name: nama-skill
   description: Use when ... (kapan dipakai)
   description_id: Gunakan saat ... (kapan dipakai, Bahasa Indonesia)
   version: 1.0.0
   license: MIT
   author: ui-skill-2045 contributors
   category: foundation | components | interaction | quality | engineering | theme
   themes: [soft-blue-neumorphism, ...]
   tags: [tag-satu, tag-dua]
   source: https://github.com/dresar/ui-skill-2045 atau "original"
   original_author: Nama Pemilik Asli
   original_license: MIT | Apache-2.0 | ...
   upstream_commit: <40 karakter SHA>   # wajib bila source GitHub
   ---
   ```

3. `name` harus sama persis dengan nama folder.
4. Sertakan bagian: **When to use**, **Inputs**, **Workflow**, **Decision rules**, **Defaults**,
   **Anti-patterns**, **Checklist**, **Example prompt**, **Bahasa Indonesia**, **Attribution**.
5. Jaga `SKILL.md` di bawah 500 baris. Pindahkan detail ke `references/`.
6. Untuk skill turunan: salin lisensi asli ke `LICENSE-UPSTREAM`, tambahkan `MODIFICATIONS.md`,
   dan `NOTICE-UPSTREAM.md` bila upstream menyertakan NOTICE.
7. Tambahkan `preview/index.html` yang mandiri: tanpa font, gambar, atau skrip eksternal, dengan
   toggle ID/EN dan dukungan `prefers-reduced-motion`.
8. Tambahkan tiga prompt nyata dan rubrik di `data/evals.mjs`.

## Menambah tema

1. Tambahkan entri di [`data/themes.mjs`](data/themes.mjs) dengan palet light dan dark.
2. Jalankan `npm run build:themes`. Generator akan menolak tema yang gagal kontras AA.
3. Periksa halaman `docs/themes/<slug>.md` dan preview-nya.
4. Tambahkan tema ke daftar `themes:` skill yang relevan.

## Perintah

```bash
npm run build:skills     # tema, preview, lisensi, evals, registry
npm run validate         # validator lengkap
npm test                 # tes CLI
npm run build:site       # build situs statis (butuh npm install di site/)
```

## Sebelum membuka PR

- [ ] `npm run build:skills` bersih.
- [ ] `npm run validate` lulus tanpa error.
- [ ] `npm test` lulus.
- [ ] `skills.json` ikut ter-update.
- [ ] Tautan internal tidak rusak.
- [ ] Lisensi dan atribusi lengkap.
- [ ] Preview dapat dibuka langsung dari filesystem.
- [ ] Tidak ada perubahan yang tidak diminta.

## Gaya penulisan skill

- Kalimat pendek, kata kerja aktif.
- Aturan dapat diperiksa; hindari “buat terlihat bagus”.
- Setiap larangan menyebut penggantinya.
- Contoh memakai konten nyata, bukan “Lorem ipsum”.
- Bahasa Indonesia dan Inggris membawa informasi yang sama.

## Commit dan PR

- Commit message jelas dan konvensional (`feat:`, `fix:`, `docs:`, `chore:`).
- Satu PR untuk satu perubahan logis.
- Jelaskan sumber, lisensi, dan perubahan pada deskripsi PR.
- Jangan memaksa push atau menulis ulang riwayat yang sudah dipublikasikan.

## Pertanyaan

Buka issue dengan label `question`. Untuk masalah keamanan, ikuti [`SECURITY.md`](SECURITY.md).

Dokumen ini bukan nasihat hukum.
