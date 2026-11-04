export const themeTranslations = {
  "soft-blue-neumorphism": {
    useWhen: [
      "UI produk dengan permukaan tenang dan minim gangguan",
      "Halaman pengaturan, dashboard, dan panel kontrol",
      "Antarmuka dengan satu aksi utama per tampilan",
    ],
    avoidWhen: [
      "Tabel data padat tempat bayangan bersaing dengan baris",
      "Layar berkualitas rendah yang membuat bayangan halus bergaris",
      "Konteks yang menuntut kontras maksimum setiap saat",
    ],
    antiPatterns: [
      "Bayangan pada baris tabel",
      "Tiga radius berbeda pada satu kartu",
      "Gradien pada aksen",
      "Tombol neumorphism tanpa perubahan tone saat fokus",
    ],
  },
  glassmorphism: {
    useWhen: [
      "Hero kaya media dan overlay",
      "Kontrol pemutar, toolbar mengambang, command palette",
      "Halaman kampanye dengan foto yang kuat",
    ],
    avoidWhen: [
      "Panel teks panjang",
      "Perangkat kelas bawah tempat blur menurunkan frame rate",
      "Penggunaan di luar ruangan yang terang",
    ],
    antiPatterns: [
      "Panel glass di atas latar abu-abu datar",
      "Teks isi di atas permukaan blur",
      "Blur di setiap kartu",
      "Tanpa fallback opak",
    ],
  },
  "aurora-gradient": {
    useWhen: [
      "Peluncuran produk dan halaman kampanye",
      "Alat kreatif dan produk musik",
      "Satu hero yang imersif",
    ],
    avoidWhen: [
      "Bacaan panjang",
      "Data dan formulir perusahaan",
      "Konteks cetak atau teregulasi",
    ],
    antiPatterns: [
      "Teks gradien",
      "Ungu-ke-biru sebagai seluruh identitas",
      "Latar yang bergerak cepat",
      "Teks kontras rendah di atas gradien",
    ],
  },
  "minimal-monochrome": {
    useWhen: [
      "Portofolio, produk editorial, dan alat",
      "Konten yang identitasnya adalah tipografi",
      "Konteks dengan keterbatasan performa",
    ],
    avoidWhen: [
      "Merek yang bergantung pada pengenalan warna",
      "Produk anak",
      "Dashboard yang membutuhkan warna semantik",
    ],
    antiPatterns: [
      "Teks abu-abu di bawah 4.5:1",
      "Warna hanya untuk menutupi hierarki yang lemah",
      "Garis rambut di mana-mana",
      "Label kapital yang sangat kecil",
    ],
  },
  "brutalist-modern": {
    useWhen: [
      "Acara budaya, studio, dan portofolio",
      "Pernyataan yang harus diingat",
      "Situs kecil dengan konten kuat",
    ],
    avoidWhen: [
      "Industri teregulasi",
      "Audiens lama atau konservatif",
      "Formulir dan entri data padat",
    ],
    antiPatterns: [
      "Border rambut",
      "Bayangan lembut",
      "Abu-abu kontras rendah",
      "Brutalisme untuk membenarkan formulir yang tidak bisa dipakai",
    ],
  },
  "cyber-neon": {
    useWhen: [
      "Gaming, dev tools, musik, dan produk malam",
      "Dashboard yang dilihat di lingkungan gelap",
      "Satu aksen berenergi tinggi",
    ],
    avoidWhen: [
      "Antarmuka kesehatan, keuangan, atau teregulasi",
      "Bacaan panjang",
      "Penggunaan siang hari yang terang",
    ],
    antiPatterns: [
      "Teks isi neon",
      "Glow di setiap kartu",
      "Hitam murni dengan cyan saturasi tinggi di mana-mana",
      "Pulsa tanpa akhir",
    ],
  },
  "dark-neumorphism": {
    useWhen: [
      "Aplikasi media dan panel kontrol malam",
      "Kontrol yang terasa fisik (dial, toggle, transport)",
      "Alat yang sempit dan fokus",
    ],
    avoidWhen: [
      "Teks dan tabel padat",
      "Penggunaan luar ruangan",
      "Layar berkualitas rendah",
    ],
    antiPatterns: [
      "Teks abu-abu di bawah 4.5:1",
      "Bayangan pada blok teks",
      "Hitam pekat tanpa pemisahan permukaan",
      "Fokus hanya dari perubahan bayangan",
    ],
  },
  "bento-grid": {
    useWhen: [
      "Ringkasan fitur dan pemasaran produk",
      "Satu layar yang merangkum produk",
      "Portofolio dengan media campuran",
    ],
    avoidWhen: [
      "Prosa panjang",
      "Formulir dan tugas berurutan",
      "Konten yang butuh satu urutan baca",
    ],
    antiPatterns: [
      "Setiap sel sama besar",
      "Grid kartu tanpa panel dominan",
      "Radius berbeda per sel",
      "Panel untuk prosa mengalir",
    ],
  },
  "editorial-serif": {
    useWhen: [
      "Penerbitan, perhotelan, dan portofolio",
      "Konten panjang dengan judul kuat",
      "Merek yang ingin terasa hangat dan berwibawa",
    ],
    avoidWhen: [
      "Dashboard padat",
      "Kode dan tabel data",
      "UI kecil dengan banyak label",
    ],
    antiPatterns: [
      "Serif body 13px",
      "Tekstur koran palsu",
      "Teks rata kanan-kiri tanpa hyphenation",
      "Serif kapital di mana-mana",
    ],
  },
  claymorphism: {
    useWhen: [
      "Aplikasi edukasi dan konsumen",
      "Onboarding dan alat yang ramah",
      "Satu permukaan merek yang bersahabat",
    ],
    avoidWhen: [
      "B2B serius dan antarmuka teregulasi",
      "Data padat",
      "Konteks kritis aksesibilitas tanpa pengujian tambahan",
    ],
    antiPatterns: [
      "Lebih dari satu arah cahaya",
      "Clay pada setiap elemen",
      "Teks pastel di atas latar pastel",
      "Fokus hanya dari bayangan yang lebih lembut",
    ],
  },
  "blueprint-grid": {
    useWhen: [
      "Developer tools, dokumentasi, dan produk rekayasa",
      "Portofolio teknis dan spesifikasi",
      "Konten yang terbantu oleh perataan yang terlihat",
    ],
    avoidWhen: [
      "Merek gaya hidup yang hangat",
      "Aplikasi konsumen yang playful",
      "Halaman yang dipimpin fotografi",
    ],
    antiPatterns: [
      "Garis grid lebih kuat dari teks",
      "Blueprint untuk fotografi gaya hidup",
      "Terlalu banyak label anotasi",
      "Border rambut di bawah 3:1",
    ],
  },
};
