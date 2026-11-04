export const evals = {
  "design-system-tokens": {
    prompts: [
      "Buat token set untuk dashboard admin biru lembut. Butuh light dan dark mode, tabel padat, dan satu tombol utama. Keluarkan satu file CSS.",
      "Refactor komponen React ini yang punya 14 hex dan 9 nilai padding berbeda menjadi token semantik tanpa mengubah tampilan.",
      "Tim kami ingin density 'compact' dan 'comfortable' tanpa menduplikasi semua komponen. Rancang pendekatannya.",
    ],
    checks: [
      "Menghasilkan tiga lapis token: primitif, semantik, komponen.",
      "Tidak ada hex mentah di komponen setelah migrasi.",
      "Dark mode meng-override token semantik, bukan memakai filter invert.",
      "Menyebut skala spacing 4px dan tiga radius.",
    ],
    result:
      "Instruksi memaksa inventaris, penamaan per peran, dan verifikasi kontras. Tiga prompt menghasilkan jawaban yang dapat diperiksa dengan checklist yang sama.",
  },
  "typography-system": {
    prompts: [
      "Landing page studio arsitektur dengan judul 'Rumah yang tumbuh bersama penghuninya'. Buat skala tipografi dan perbaiki panjang judul di ponsel.",
      "Halaman kami memakai Inter untuk semuanya dan terasa generik. Pilih pendekatan tipografi yang lebih spesifik tanpa font jaringan.",
      "Teks isi 18px terasa terlalu lebar di desktop 1440px. Perbaiki measure dan line-height tanpa mengubah font.",
    ],
    checks: [
      "Maksimal dua keluarga font dengan peran jelas.",
      "Measure 45–75 karakter.",
      "Judul utama ≤ 2 baris pada 390px.",
      "Tidak menebalkan atau mewarnai satu kata sebagai aksen.",
    ],
    result:
      "Prompt kedua menguji apakah skill berani mengganti default tanpa melanggar larangan 'satu kata diwarnai'. Jawaban yang patuh menyebut alasan pemilihan dan pengukuran lebar baris.",
  },
  "color-contrast": {
    prompts: [
      "Brand kami #4f7cff. Buat palet light dan dark yang lolos WCAG AA, termasuk status berhasil, peringatan, dan gagal.",
      "Tombol kuning kami memakai teks putih dan sulit dibaca. Perbaiki tanpa menghilangkan warna brand.",
      "Grafik ini membedakan empat seri hanya dengan merah, hijau, biru, dan kuning. Perbaiki agar tetap terbaca oleh buta warna.",
    ],
    checks: [
      "Menyebut rasio terukur, bukan 'cukup kontras'.",
      "Teks tombol memakai warna yang lolos 4.5:1.",
      "Status tidak hanya warna; ada label atau ikon.",
      "Dark mode dirancang terpisah, bukan inversi.",
    ],
    result:
      "Semua prompt dapat dinilai dengan penghitung kontras yang sama. Jawaban yang tidak menyertakan angka gagal pada rubrik.",
  },
  "spacing-layout": {
    prompts: [
      "Halaman harga tiga paket terasa sesak dan seperti template. Susun ulang spacing dan komposisi section.",
      "Di desktop, teks selalu menempel kiri dan separuh layar kosong. Perbaiki tanpa menengahkan semuanya.",
      "Tabel dan kartu di halaman ini memakai padding 12, 18, 24, dan 30px. Normalisasi tanpa merusak hierarki.",
    ],
    checks: [
      "Jarak antar-seksi lebih besar dari jarak internal.",
      "Margin luar kiri dan kanan sama.",
      "Ada minimal dua komposisi seksi berbeda.",
      "Tidak ada overflow horizontal di 320px.",
    ],
    result:
      "Rubrik menguji pengukuran, bukan selera. Prompt ketiga memastikan normalisasi tidak menghapus hierarki.",
  },
  "ui-components": {
    prompts: [
      "Buat form undangan tim dengan email dan peran. Lengkapi state loading, error, sukses, dan akses keyboard.",
      "Tombol di aplikasi kami tidak punya hover atau focus. Perbaiki semua varian tanpa mengubah layout.",
      "Tabel 7 kolom ini hancur di ponsel. Rancang strategi mobile yang tetap menampilkan nomor, status, dan total.",
    ],
    checks: [
      "Matriks state lengkap: default, hover, focus, active, disabled, loading, error.",
      "Label form terlihat dan error terhubung ke field.",
      "Tabel memakai semantik tabel dan punya strategi mobile eksplisit.",
      "Target sentuh minimal 44px.",
    ],
    result:
      "Prompt pertama menguji kelengkapan state; ketiga menguji keputusan responsif. Jawaban yang hanya menata warna gagal.",
  },
  "dashboard-admin": {
    prompts: [
      "Dashboard support: tiket masuk, SLA, antrean. Tim harus tahu dalam 5 detik apakah ada yang terlambat.",
      "Dashboard kami punya 12 kartu KPI yang sama besar dan tidak menjawab pertanyaan apa pun. Rancang ulang.",
      "Filter tanggal hilang setiap kali kami pindah halaman. Perbaiki perilakunya dan jelaskan pilihan desainnya.",
    ],
    checks: [
      "Setiap modul menjawab pertanyaan pengguna yang disebut.",
      "Metrik menyertakan pembanding dan rentang waktu.",
      "Tabel punya sorting, filter, empty, loading, dan error state.",
      "Filter aktif terlihat dan tersimpan di URL.",
    ],
    result:
      "Prompt kedua memaksa penghapusan, bukan penambahan. Jawaban yang menambah grafik tanpa menjawab pertanyaan gagal.",
  },
  "empty-error-states": {
    prompts: [
      "Halaman daftar proyek menampilkan layar kosong saat filter tidak menemukan hasil. Perbaiki agar pengguna tahu harus apa.",
      "Error 500 kami hanya menampilkan 'Oops! Something went wrong.' Tulis ulang dan rancang halaman error-nya.",
      "Saat data sedang dimuat, seluruh halaman diganti spinner dan layout melompat. Perbaiki.",
    ],
    checks: [
      "Membedakan kosong-baru, tanpa hasil, error, dan tanpa izin.",
      "Menyebut operasi yang gagal dan satu aksi berikutnya.",
      "Skeleton mengikuti ukuran layout akhir.",
      "Tidak menyalahkan pengguna dan tidak memakai 'Oops'.",
    ],
    result:
      "Ketiga prompt menguji klasifikasi state. Jawaban yang memakai satu ilustrasi sedih untuk semua kasus gagal.",
  },
  "motion-system": {
    prompts: [
      "Tambahkan animasi ke halaman pricing. Kartu unggulan harus terasa lebih hidup, tetapi jangan fade-up di semua bagian.",
      "Animasi hover di kartu kami menyebabkan layout shift dan patah-patah di ponsel. Perbaiki.",
      "Kami ingin efek scroll sinematik untuk halaman campaign. Jelaskan batasannya dan buat versi yang menghormati reduced motion.",
    ],
    checks: [
      "Setiap animasi punya tujuan yang disebut.",
      "Hanya transform dan opacity yang dianimasikan dalam loop.",
      "Ada jalur reduced-motion yang menghapus perjalanan.",
      "Tidak ada scroll-jacking.",
    ],
    result:
      "Prompt ketiga menguji penolakan yang tepat: efek sinematik boleh, tetapi tidak boleh mengorbankan keterbacaan dan preferensi pengguna.",
  },
  "accessibility-wcag": {
    prompts: [
      "Form checkout hanya bisa dipakai dengan mouse dan error-nya hanya berwarna merah. Perbaiki agar lolos WCAG 2.2 AA.",
      "Modal kami tidak menangkap focus dan tidak bisa ditutup dengan Escape. Perbaiki tanpa mengganti library.",
      "Audit cepat halaman ini: fokus, label, kontras, landmark, dan reflow 320px. Laporkan dengan severity.",
    ],
    checks: [
      "Menyebut uji keyboard dan screen reader, bukan hanya axe.",
      "Label, error, dan focus ring diperbaiki di tingkat komponen.",
      "Tidak menghapus outline tanpa pengganti.",
      "Melaporkan batasan audit secara jujur.",
    ],
    result:
      "Rubrik menolak klaim 'lolos WCAG' hanya dari pemindai otomatis. Prompt ketiga meminta severity dan bukti.",
  },
  "responsive-adaptive": {
    prompts: [
      "Tabel faktur 7 kolom hancur di ponsel. Buat strategi mobile yang tetap menampilkan nomor, status, dan total.",
      "Layout kami memakai 100vw dan muncul scrollbar horizontal. Perbaiki seluruh frame.",
      "Dashboard 1440px harus tetap berguna di tablet 768px tanpa menyembunyikan data penting.",
    ],
    checks: [
      "Mulai dari 320px dan menyebut breakpoint berbasis konten.",
      "Tidak ada overflow horizontal.",
      "Target sentuh 44px dan input minimal 16px.",
      "Strategi tabel eksplisit, bukan menyembunyikan kolom diam-diam.",
    ],
    result:
      "Prompt kedua menguji pemahaman `100vw` vs `100%`. Jawaban yang hanya menambahkan media query tanpa memperbaiki frame gagal.",
  },
  "dark-mode": {
    prompts: [
      "Tambahkan dark mode ke aplikasi kami. Saat ini kalau dibalik, kartu hilang dan biru brand menyilaukan.",
      "Theme toggle kami menyebabkan flash putih saat halaman dimuat. Perbaiki.",
      "Grafik dan ilustrasi tetap terang di dark mode. Rancang penanganannya.",
    ],
    checks: [
      "Palet gelap dirancang terpisah, bukan inversi.",
      "Elevasi memakai tone dan border, bukan bayangan gelap.",
      "Aksen disesuaikan dan kontras diukur ulang.",
      "Tema dipasang sebelum paint dan tersimpan.",
    ],
    result:
      "Prompt pertama menguji diagnosis, bukan sekadar mengganti warna. Jawaban yang memakai `filter: invert()` gagal.",
  },
  "ux-writing": {
    prompts: [
      "Tulis ulang copy onboarding aplikasi kasir kecil dalam Bahasa Indonesia dan Inggris. Hindari 'silakan' dan jangan menyalahkan pengguna saat gagal.",
      "Semua tombol kami berbunyi 'Submit', 'OK', dan 'Yes'. Ganti dengan label yang menjelaskan akibatnya.",
      "Tulis pesan error untuk pembayaran yang ditolak kartu, tanpa menyebut kode internal dan tanpa nada bercanda.",
    ],
    checks: [
      "Tombol memakai verb + object.",
      "Error menyebut apa yang terjadi dan cara memperbaikinya.",
      "Kedua bahasa membawa informasi yang sama.",
      "Tidak ada 'Oops', 'Something went wrong', atau 'Klik di sini'.",
    ],
    result:
      "Rubrik menilai informasi, bukan panjang kalimat. Prompt ketiga menguji nada pada jalur kegagalan.",
  },
  "ui-audit-review": {
    prompts: [
      "Review halaman settings ini. Saya merasa ada yang salah tapi tidak tahu apa. Fokus ke usability dan aksesibilitas.",
      "Lakukan audit pra-rilis untuk landing page kami di 390, 768, dan 1440. Beri tiga perbaikan teratas.",
      "Bandingkan halaman before/after ini dan nilai apakah redesign-nya memperbaiki hierarki.",
    ],
    checks: [
      "Setiap temuan punya lokasi, bukti, severity, dan rekomendasi.",
      "Kontras dan ukuran target diukur.",
      "Ada tiga perbaikan teratas yang eksplisit.",
      "Batasan audit disebutkan.",
    ],
    result:
      "Prompt pertama menguji apakah reviewer bisa menemukan masalah tanpa arahan. Jawaban tanpa bukti atau tanpa prioritas gagal.",
  },
  "anti-slop-design": {
    prompts: [
      "Buat landing page untuk kedai kopi yang memanggang sendiri di Bandung. Jangan pakai gaya krem-terracotta. Harus terasa seperti kedai ini, bukan kedai kopi mana pun.",
      "Halaman SaaS kami terlihat seperti template AI: gradien ungu, tiga kartu ikon, eyebrow kapital. Perbaiki arah visualnya.",
      "Kami butuh satu elemen interaktif yang hanya masuk akal untuk produk ini, bukan animasi dekoratif.",
    ],
    checks: [
      "Ada kalimat ide yang menyebut hal spesifik milik subjek.",
      "Tes kompetitor gagal (ide tidak bisa dipakai pesaing).",
      "Tidak ada item tell tanpa alasan yang dinyatakan.",
      "Tidak mengarang bukti pelanggan atau statistik.",
    ],
    result:
      "Prompt kedua menguji diagnosis tell. Jawaban yang hanya mengganti ungu menjadi biru tanpa ide gagal pada tes kompetitor.",
  },
  "frontend-performance": {
    prompts: [
      "Landing page Next.js kami punya LCP 4.1s di ponsel. Hero-nya gambar 3000px dan ada tiga webfont. Perbaiki tanpa mengubah desain.",
      "CLS kami 0.24 karena banner cookie muncul terlambat. Perbaiki.",
      "Halaman terasa berat karena seluruh dashboard adalah client component. Rancang pemecahannya.",
    ],
    checks: [
      "Mengukur build produksi dan menyebut angka sebelum/sesudah.",
      "Gambar punya dimensi, format modern, dan prioritas LCP.",
      "Font dikurangi atau di-self-host dengan swap.",
      "Client component dipersempit ke pulau interaktif.",
    ],
    result:
      "Prompt pertama menguji prioritisasi LCP. Jawaban yang langsung mengubah desain tanpa mengukur gagal.",
  },
  "nextjs-react-patterns": {
    prompts: [
      "Dashboard Next.js ini seluruhnya 'use client' dan datanya di-fetch di useEffect. Ubah ke App Router dengan server components dan streaming.",
      "Form kami kehilangan state saat JavaScript lambat. Rancang form yang tetap bekerja dan punya pending state.",
      "Build static export kami gagal karena dynamic route tidak punya generateStaticParams. Perbaiki.",
    ],
    checks: [
      "Server component sebagai default, client hanya di daun.",
      "Fetch independen paralel dan ada Suspense boundary.",
      "Form memakai Server Action atau route handler dengan error field-level.",
      "Static export punya generateStaticParams dan metadata yang benar.",
    ],
    result:
      "Prompt pertama menguji batas server/client. Jawaban yang menambahkan 'use client' lebih banyak otomatis gagal.",
  },
  "tailwind-shadcn": {
    prompts: [
      "Kami memakai shadcn/ui dan Tailwind. Tombol, kartu, dan input punya hex langsung dan dark mode tidak konsisten. Rapikan tanpa mengganti library.",
      "Class string tombol kami 40 token dan bercabang dengan ternary. Refactor menjadi varian yang bisa dibaca.",
      "Setelah kami menyesuaikan Dialog shadcn, focus tidak lagi masuk ke dialog. Perbaiki tanpa menulis ulang primitif.",
    ],
    checks: [
      "Token semantik menggantikan palette class dan hex.",
      "Varian diekstrak ke `cva`, bukan ternary di JSX.",
      "Aksesibilitas primitif shadcn dipertahankan.",
      "Dark mode lewat token, bukan `dark:` di setiap utility.",
    ],
    result:
      "Prompt ketiga menguji sikap terhadap library: menyesuaikan boleh, merusak perilaku aksesibel tidak.",
  },
  "theme-recipes": {
    prompts: [
      "Saya mau dashboard analitik biru lembut dengan tombol timbul, tetapi harus lolos WCAG AA dan tidak terlihat seperti template.",
      "Klien meminta glassmorphism untuk halaman harga yang penuh teks. Jelaskan risikonya dan berikan alternatif yang tetap terasa glass.",
      "Kami ingin tema brutalist untuk festival, tetapi form pendaftarannya harus tetap mudah dipakai. Seimbangkan keduanya.",
    ],
    checks: [
      "Tema dipilih berdasarkan pekerjaan, bukan mode.",
      "Hanya satu mekanisme kedalaman yang dipakai.",
      "Kontras diverifikasi, termasuk teks aksen.",
      "Ada fallback solid untuk permukaan transparan.",
    ],
    result:
      "Prompt kedua menguji kemampuan menolak permintaan yang merugikan pengguna tanpa menolak estetika klien. Jawaban harus menawarkan kompromi konkret.",
  },
};

export const criteria = [
  "Mengikuti urutan langkah skill, bukan melompat ke kode.",
  "Menyebut input yang hilang dan memilih default yang dapat dipertahankan.",
  "Mematuhi daftar larangan skill.",
  "Memenuhi checklist sebelum menyerahkan hasil.",
  "Menjelaskan trade-off dan batasan pengujian.",
];
