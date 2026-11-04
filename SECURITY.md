# Security Policy

## Prinsip

Skill adalah **instruksi yang dijalankan agen**. Perlakukan seperti kode: tinjau sebelum
menginstal, terutama pada agen yang memiliki akses menulis, shell, atau jaringan.

## Yang kami lakukan

- Tidak ada rahasia, token, atau kredensial di repositori.
- Tidak ada skrip yang mengunduh dan mengeksekusi kode dari jaringan saat build.
- Preview dan situs tidak memuat skrip pihak ketiga.
- Validator memeriksa tautan, frontmatter, lisensi, dan dependensi eksternal pada preview.
- Dependensi CLI seminimal mungkin (tanpa dependensi runtime pihak ketiga).

## Melaporkan kerentanan

Jangan membuka issue publik untuk kerentanan. Laporkan secara privat kepada pemilik repositori
melalui alamat yang tercantum di profil GitHub pemilik, atau gunakan **Security → Report a
vulnerability** di repositori GitHub.

Sertakan:

- deskripsi masalah dan dampaknya;
- langkah reproduksi;
- versi/commit yang terdampak;
- saran perbaikan bila ada.

Kami akan mengonfirmasi penerimaan, menyelidiki, dan memberi tahu bila perbaikan dirilis.
Karena ini proyek komunitas, tidak ada SLA yang dijanjikan.

## Model ancaman yang relevan

| Risiko | Mitigasi |
|---|---|
| Prompt injection di dalam skill | Tinjau `SKILL.md`; jangan mengikuti instruksi yang meminta rahasia |
| Skill berbahaya dari sumber lain | Hanya instal dari repo ini atau sumber yang kamu percaya |
| Skrip build menjalankan kode asing | Tidak ada unduhan saat build; lisensi diambil saat kontribusi |
| Rahasia bocor di commit | `.gitignore` mencakup `.env`; tinjau diff sebelum commit |
| Dependensi npm yang rentan | CLI tanpa dependensi runtime; situs memakai Next.js resmi |
| XSS di situs | Konten skill dirender sebagai teks/HTML yang disanitasi saat build; tidak ada input pengguna runtime |

## Untuk pengguna

1. Baca skill sebelum menginstal.
2. Batasi izin agen bila memungkinkan.
3. Jangan menempelkan rahasia ke dalam prompt atau file skill.
4. Perbarui dependensi secara berkala.
5. Laporkan perilaku mencurigakan.

## Untuk kontributor

- Jangan menambahkan `postinstall`, `preinstall`, atau skrip yang mengeksekusi kode jarak jauh.
- Jangan menambahkan dependensi tanpa alasan yang jelas.
- Jangan menyertakan data pribadi, token, atau kunci API.
- Jalankan `npm run validate` dan `npm test` sebelum membuka PR.

Dokumen ini bukan nasihat hukum.
