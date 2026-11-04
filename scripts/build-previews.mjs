import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");

const archetypes = {
  "design-system-tokens": "tokens",
  "typography-system": "type",
  "color-contrast": "color",
  "spacing-layout": "layout",
  "ui-components": "components",
  "dashboard-admin": "dashboard",
  "empty-error-states": "states",
  "motion-system": "motion",
  "accessibility-wcag": "a11y",
  "responsive-adaptive": "responsive",
  "dark-mode": "dark",
  "ux-writing": "writing",
  "ui-audit-review": "audit",
  "anti-slop-design": "antislop",
  "frontend-performance": "perf",
  "nextjs-react-patterns": "nextjs",
  "tailwind-shadcn": "tailwind",
  "theme-recipes": "themes",
};

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }
    data[key] = value;
  }
  return data;
}

function demo(skill) {
  const type = archetypes[skill.name] ?? "components";
  switch (type) {
    case "tokens":
      return `
<section class="grid three">
  <div class="panel"><h2>Warna</h2><div class="swatches">
    ${[
      ["bg", "#edf1fc", "#1b2943"],
      ["surface", "#f4f6ff", "#1b2943"],
      ["action", "#315be8", "#ffffff"],
      ["danger", "#9f2433", "#ffffff"],
      ["success", "#187a58", "#ffffff"],
      ["muted", "#5f6c85", "#edf1fc"],
    ]
      .map(
        ([label, bg, fg]) =>
          `<div class="swatch" style="background:${bg};color:${fg}"><span>${label}</span><code>${bg}</code></div>`,
      )
      .join("")}
  </div></div>
  <div class="panel"><h2>Spacing</h2>
    ${[4, 8, 12, 16, 24, 32, 48, 64]
      .map(
        (value) =>
          `<div class="row"><code>${value}px</code><span class="bar" style="width:${value * 2}px"></span></div>`,
      )
      .join("")}
  </div>
  <div class="panel"><h2>Radius &amp; depth</h2>
    <div class="row"><span class="chip radius-sm">8</span><span class="chip radius-md">14</span><span class="chip radius-lg">22</span></div>
    <div class="row"><span class="raised">raised</span><span class="pressed">pressed</span></div>
    <p class="muted">Dua bayangan berlawanan, satu arah cahaya.</p>
  </div>
</section>`;
    case "type":
      return `
<section class="panel">
  <span class="kicker">Skala</span>
  <h2 class="display">Rumah yang tumbuh bersama penghuninya</h2>
  <h3>Seksi heading 24px</h3>
  <p class="lead">Satu keluarga, lima ukuran. Hierarki dari ukuran dan ruang, bukan dari warna.</p>
  <p class="body">Teks isi 16px dengan measure 65 karakter. Baris tidak boleh melebar mengikuti layar desktop. Angka tabel memakai tabular figures: 1.284 · 12.900 · 4.102.</p>
  <p class="caption">Caption 12px hanya untuk metadata, bukan isi.</p>
</section>
<section class="grid two">
  <div class="panel"><h2>Benar</h2><p>Judul dua baris. <strong>Penekanan lewat kata.</strong> Satu keluarga font, measure terkendali.</p></div>
  <div class="panel bad-panel"><h2>Salah</h2><p class="bad-type">Judul dengan <em>satu kata</em> dimiringkan dan <span class="accent-word">diwarnai</span> untuk terlihat “desain”.</p></div>
</section>`;
    case "color":
      return `
<section class="grid three">
  <div class="panel"><h2>Peran</h2>
    ${[
      ["Ground", "#edf1fc"],
      ["Ink", "#1b2943"],
      ["Muted", "#5f6c85"],
      ["Action", "#315be8"],
      ["Border", "#dce4f3"],
    ]
      .map(
        ([label, color]) =>
          `<div class="row"><span class="dot" style="background:${color}"></span><span>${label}</span><code>${color}</code></div>`,
      )
      .join("")}
  </div>
  <div class="panel"><h2>Kontras</h2>
    <div class="contrast-good">Aa 7.8:1</div>
    <div class="contrast-ok">Aa 4.6:1</div>
    <div class="contrast-bad">Aa 2.8:1 gagal</div>
    <p class="muted">Ambang: 4.5:1 teks normal, 3:1 teks besar dan batas UI.</p>
  </div>
  <div class="panel"><h2>Status</h2>
    <p><span class="badge success">Berhasil</span> teks + warna</p>
    <p><span class="badge warning">Perlu tinjauan</span> teks + warna</p>
    <p><span class="badge danger">Gagal</span> teks + warna</p>
    <p class="muted">Jangan pernah hanya warna.</p>
  </div>
</section>`;
    case "layout":
      return `
<section class="panel">
  <h2>Frame</h2>
  <div class="frame"><span>gutter</span><div class="frame-inner">konten maksimal 72rem</div><span>gutter</span></div>
</section>
<section class="grid two">
  <div class="panel"><h2>Irama seksi</h2>
    <div class="rhythm"><div class="rhythm-block">seksi</div><div class="rhythm-gap">96px</div><div class="rhythm-block">seksi</div></div>
  </div>
  <div class="panel"><h2>Komposisi</h2>
    <div class="asym"><div><h3>Judul</h3><p class="muted">Teks di kiri.</p></div><div class="asym-media">media di kanan</div></div>
    <p class="muted">Tidak ada separuh layar kosong.</p>
  </div>
</section>`;
    case "components":
      return `
<nav class="demo-nav"><strong>Studio</strong><a href="#">Produk</a><a href="#">Harga</a><a href="#">Dokumen</a><button class="primary">Mulai</button></nav>
<section class="grid two">
  <div class="panel"><h2>Tombol</h2><div class="actions"><button class="primary">Simpan perubahan</button><button>Batal</button><button class="ghost">Pelajari</button></div></div>
  <div class="panel"><h2>Form</h2><label for="name">Nama proyek</label><input id="name" placeholder="Contoh: Katalog 2045"><p class="error">Nama wajib diisi.</p></div>
</section>
<section class="panel">
  <h2>Tabel</h2>
  <table><thead><tr><th>Proyek</th><th>Status</th><th class="num">Nilai</th></tr></thead>
  <tbody><tr><td>Katalog</td><td>Aktif</td><td class="num">1.284</td></tr><tr><td>Arsip</td><td>Tertunda</td><td class="num">96</td></tr></tbody></table>
</section>`;
    case "dashboard":
      return `
<section class="grid four">
  <div class="panel metric"><span>Tiket terlambat</span><strong>12</strong><em>+3 vs kemarin</em></div>
  <div class="panel metric"><span>SLA</span><strong>94%</strong><em>target 95%</em></div>
  <div class="panel metric"><span>Antrean</span><strong>38</strong><em>5 menit rata-rata</em></div>
  <div class="panel metric"><span>Diselesaikan</span><strong>126</strong><em>hari ini</em></div>
</section>
<section class="panel alert-panel"><strong>3 tiket melewati SLA.</strong> Tinjau sebelum 15.00. <button>Buka antrean</button></section>
<section class="panel"><h2>Antrean</h2>
<table><thead><tr><th>Tiket</th><th>Pelanggan</th><th>Status</th><th class="num">Umur</th></tr></thead>
<tbody><tr><td>#4821</td><td>Nadia</td><td><span class="badge danger">Terlambat</span></td><td class="num">2j 14m</td></tr>
<tr><td>#4820</td><td>Bima</td><td><span class="badge warning">Menunggu</span></td><td class="num">48m</td></tr>
<tr><td>#4819</td><td>Sari</td><td><span class="badge success">Selesai</span></td><td class="num">12m</td></tr></tbody></table></section>`;
    case "states":
      return `
<section class="grid three">
  <div class="panel state"><div class="state-icon">+</div><h2>Belum ada faktur</h2><p class="muted">Faktur muncul setelah Anda mengirim yang pertama.</p><button class="primary">Buat faktur</button></div>
  <div class="panel state"><div class="state-icon">?</div><h2>Tidak ada hasil untuk “budi”</h2><p class="muted">Coba kata lain atau hapus filter.</p><button>Hapus filter</button></div>
  <div class="panel state"><div class="state-icon">!</div><h2>Faktur gagal dimuat</h2><p class="muted">Koneksi terputus. Data Anda aman.</p><button>Coba lagi</button></div>
</section>
<section class="panel"><h2>Skeleton</h2><div class="skeleton-row"><span></span><span></span><span></span></div><p class="muted">Skeleton mengikuti ukuran layout akhir, bukan spinner penuh layar.</p></section>`;
    case "motion":
      return `
<section class="grid three">
  <div class="panel motion-card"><h2>Hover</h2><p class="muted">Naik 2px, 160ms.</p></div>
  <div class="panel motion-card"><h2>Press</h2><p class="muted">Tekan untuk melihat pressed state.</p><button>Tekan saya</button></div>
  <div class="panel motion-card"><h2>Reduced motion</h2><p class="muted">Konten tetap terlihat; perjalanan dihapus.</p></div>
</section>
<section class="panel"><h2>Anggaran gerak</h2>
<table><thead><tr><th>Keperluan</th><th>Durasi</th><th>Easing</th></tr></thead><tbody>
<tr><td>Hover/press</td><td>120–180ms</td><td>ease-out</td></tr>
<tr><td>Dialog</td><td>200–300ms</td><td>cubic-bezier(.22,1,.36,1)</td></tr>
<tr><td>Masuk (sekali)</td><td>300–500ms</td><td>ease-out</td></tr></tbody></table></section>`;
    case "a11y":
      return `
<a class="skip" href="#main-demo">Lewati ke konten</a>
<section class="panel" id="main-demo"><h2>Focus terlihat</h2><div class="actions"><button class="primary">Tombol dengan focus ring</button><button>Tombol kedua</button></div><p class="muted">Gunakan Tab. Ring 2px, offset 2px, kontras ≥ 3:1.</p></section>
<section class="grid two">
  <div class="panel"><h2>Form</h2><label for="email2">Email</label><input id="email2" aria-invalid="true" aria-describedby="err2" value="budi@"><p id="err2" class="error" role="alert">Email belum lengkap. Tambahkan domain setelah @.</p></div>
  <div class="panel"><h2>Semantik</h2><ul class="checklist"><li>Tombol asli, bukan div</li><li>Label terlihat</li><li>Error terhubung aria-describedby</li><li>Skip link tersedia</li><li>Target sentuh 44px</li></ul></div>
</section>`;
    case "responsive":
      return `
<section class="grid three">
  <div class="device"><span class="device-label">390px</span><div class="device-body"><h2>Faktur</h2><div class="mini-card"><strong>#1042</strong><span>Rp1.250.000</span></div><div class="mini-card"><strong>#1041</strong><span>Rp840.000</span></div></div></div>
  <div class="device"><span class="device-label">768px</span><div class="device-body wide"><h2>Faktur</h2><div class="mini-card"><strong>#1042</strong><span>Rp1.250.000</span></div><div class="mini-card"><strong>#1041</strong><span>Rp840.000</span></div></div></div>
  <div class="device"><span class="device-label">1440px</span><div class="device-body wide"><h2>Faktur</h2><div class="mini-card"><strong>#1042</strong><span>Rp1.250.000</span></div><div class="mini-card"><strong>#1041</strong><span>Rp840.000</span></div><div class="mini-card"><strong>#1040</strong><span>Rp2.100.000</span></div></div></div>
</section>
<section class="panel"><h2>Aturan</h2><p>Gutter <code>clamp(16px, 4vw, 32px)</code>, body minimal 16px, target 44px, tanpa <code>100vw</code>.</p></section>`;
    case "dark":
      return `
<section class="panel"><h2>Mode</h2><p class="muted">Klik untuk melihat dark mode. Perhatikan: permukaan naik menjadi lebih terang, bayangan diganti tone.</p><button id="mode-toggle" class="primary">Ganti ke dark</button></section>
<section class="grid three">
  <div class="panel"><h2>Ground</h2><p class="muted">Bukan hitam murni.</p></div>
  <div class="panel"><h2>Surface</h2><p class="muted">+4–6% lightness.</p></div>
  <div class="panel"><h2>Aksen</h2><p class="muted">Didesaturasi dan dicerahkan.</p></div>
</section>`;
    case "writing":
      return `
<section class="panel"><h2>Sebelum / sesudah</h2>
<table><thead><tr><th>Sebelum</th><th>Sesudah</th></tr></thead><tbody>
<tr><td class="bad-copy">Oops! Something went wrong.</td><td>Faktur gagal dimuat. Koneksi terputus, data Anda aman. <strong>Coba lagi</strong>.</td></tr>
<tr><td class="bad-copy">Submit</td><td>Simpan perubahan</td></tr>
<tr><td class="bad-copy">Apakah Anda yakin?</td><td>Hapus 12 pengguna?</td></tr>
<tr><td class="bad-copy">No data.</td><td>Belum ada proyek. Buat proyek pertama Anda.</td></tr>
</tbody></table></section>
<section class="grid two"><div class="panel"><h2>English</h2><p>Invoices appear here after you send your first one.</p><button class="primary">Create invoice</button></div><div class="panel"><h2>Indonesia</h2><p>Faktur muncul di sini setelah Anda mengirim faktur pertama.</p><button class="primary">Buat faktur</button></div></section>`;
    case "audit":
      return `
<section class="grid four">
  <div class="panel metric"><span>P0</span><strong>0</strong><em>blocking</em></div>
  <div class="panel metric"><span>P1</span><strong>2</strong><em>this cycle</em></div>
  <div class="panel metric"><span>P2</span><strong>3</strong><em>next cycle</em></div>
  <div class="panel metric"><span>P3</span><strong>5</strong><em>polish</em></div>
</section>
<section class="panel"><h2>Temuan</h2>
<table><thead><tr><th>Sev</th><th>Lokasi</th><th>Observasi</th><th>Rekomendasi</th></tr></thead><tbody>
<tr><td><span class="badge danger">P1</span></td><td>Checkout — tombol Bayar</td><td>Teks putih di #f5b301 = 2.0:1</td><td>Gunakan token aksi gelap</td></tr>
<tr><td><span class="badge warning">P2</span></td><td>Header</td><td>Tiga aksi utama bersaing</td><td>Satu primer, dua sekunder</td></tr>
</tbody></table></section>`;
    case "antislop":
      return `
<section class="grid two">
  <div class="panel slop"><span class="kicker">SLOP</span><h2>Empower your workflow</h2><p>Gradien ungu-biru, tiga kartu ikon, eyebrow kapital.</p><div class="mini-cards"><span></span><span></span><span></span></div></div>
  <div class="panel sharp"><span class="kicker">SHARP</span><h2>Jadwal roasting, bukan slogan.</h2><p>Batch 14 dipanggang Selasa. 18 kg, profil medium, siap Jumat.</p><button class="primary">Lihat batch 14</button></div>
</section>
<section class="panel"><h2>Tes kompetitor</h2><p>“Batch 14 dipanggang Selasa” tidak bisa dipakai kedai lain. “Empower your workflow” bisa dipakai siapa saja.</p></section>`;
    case "perf":
      return `
<section class="grid four">
  <div class="panel metric"><span>LCP</span><strong>1.8s</strong><em>target &lt; 2.5s</em></div>
  <div class="panel metric"><span>CLS</span><strong>0.02</strong><em>target &lt; 0.1</em></div>
  <div class="panel metric"><span>INP</span><strong>120ms</strong><em>target &lt; 200ms</em></div>
  <div class="panel metric"><span>JS awal</span><strong>142KB</strong><em>budget 170KB</em></div>
</section>
<section class="panel"><h2>Waterfall</h2>
<div class="waterfall"><div style="width:28%">HTML</div><div style="width:42%">CSS + font</div><div style="width:18%">Hero AVIF</div><div style="width:12%">JS island</div></div>
<p class="muted">Font sistem, hero diprioritaskan, island kecil, gambar punya dimensi.</p></section>`;
    case "nextjs":
      return `
<section class="panel"><h2>Batas server / client</h2>
<div class="boundary"><div class="server"><strong>Server Component</strong><span>data · metadata · shell</span></div><div class="arrow">→</div><div class="client"><strong>Client island</strong><span>menu · filter</span></div></div>
<p class="muted">“use client” hanya di daun interaktif. Shell tetap server-rendered.</p></section>
<section class="grid two"><div class="panel"><h2>Streaming</h2><div class="skeleton-row"><span></span><span></span></div><p class="muted">Suspense + skeleton seukuran konten akhir.</p></div><div class="panel"><h2>Form</h2><label for="n2">Nama</label><input id="n2" placeholder="Server Action"><button class="primary" style="margin-top:10px">Kirim</button></div></section>`;
    case "tailwind":
      return `
<section class="panel"><h2>Token dulu, utility kemudian</h2><div class="code-chips"><code>bg-background</code><code>text-foreground</code><code>bg-primary</code><code>text-primary-foreground</code><code>rounded-md</code><code>h-11</code></div><p class="muted">Bukan <code>bg-blue-500</code> atau <code>bg-[#4f7cff]</code>.</p></section>
<section class="grid two"><div class="panel"><h2>Varian</h2><div class="actions"><button class="primary">Primary</button><button>Secondary</button><button class="ghost">Ghost</button></div></div><div class="panel"><h2>Aksesibilitas shadcn</h2><ul class="checklist"><li>Focus ring dipertahankan</li><li>Dialog tetap menangkap focus</li><li>ARIA tidak dihapus</li><li>Dark mode lewat token</li></ul></div></section>`;
    case "themes":
      return `
<section class="panel"><h2>11 tema, satu kontrak token</h2><div class="theme-strip">
${[
  ["soft-blue-neumorphism", "#edf1fc", "#315be8"],
  ["glassmorphism", "#e8f0fc", "#2455c3"],
  ["aurora-gradient", "#eaf6f4", "#0f6b5f"],
  ["minimal-monochrome", "#f7f7f5", "#111111"],
  ["brutalist-modern", "#f5f1e8", "#111111"],
  ["cyber-neon", "#06070f", "#00e5ff"],
  ["dark-neumorphism", "#15181d", "#6ea8fe"],
  ["bento-grid", "#f4f5f7", "#3b5bdb"],
  ["editorial-serif", "#fbf8f2", "#8a2f1d"],
  ["claymorphism", "#eef2ff", "#5a4ae0"],
  ["blueprint-grid", "#eaf1f8", "#0b5cad"],
]
  .map(
    ([name, bg, accent]) =>
      `<div class="theme-chip" style="--chip-bg:${bg};--chip-accent:${accent}"><span class="theme-swatch"></span><span>${name}</span></div>`,
  )
  .join("")}
</div></section>
<section class="panel"><h2>Aturan</h2><p>Satu aksen, satu mekanisme kedalaman, satu skala radius. Tema yang gagal kontras bukan tema.</p></section>`;
    default:
      return "";
  }
}

function shell(skill, body) {
  const title = skill.name;
  const description = skill.description ?? "";
  const descriptionId = skill.description_id ?? "";
  const source = skill.source ?? "";
  const license = skill.original_license ?? skill.license ?? "MIT";
  return `<!doctype html>
<html lang="id" data-lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${title} — preview</title>
<style>
  :root {
    --bg: #edf1fc; --surface: rgba(245,247,255,.76); --surface-solid: #f4f6ff; --alt: #eaf0fc;
    --text: #1b2943; --muted: #5f6c85;
    --accent: #315be8; --accent-text: #ffffff; --border: #dce4f3; --border-strong: #8d9cb8;
    --focus: #315be8; --shadow-dark: #c2cce1; --shadow-light: #ffffff;
    --gradient: linear-gradient(135deg, #4166e8, #315be8 58%, #2448cb);
    --raised: 16px 16px 38px rgba(190,201,225,.55), -13px -13px 34px rgba(255,255,255,.92);
    --raised-sm: 7px 7px 16px rgba(194,204,225,.72), -7px -7px 16px rgba(255,255,255,.94);
    --pressed: inset 3px 3px 7px rgba(197,207,228,.68), inset -3px -3px 7px rgba(255,255,255,.95);
    --radius-sm: 12px; --radius-md: 18px; --radius-lg: 26px; --radius-xl: 30px;
    --font: "Inter", "Segoe UI Variable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
  body { margin: 0; color: var(--text); font-family: var(--font); line-height: 1.6;
    background:
      radial-gradient(ellipse at 8% 10%, rgba(255,255,255,.96) 0 8%, transparent 34%),
      radial-gradient(ellipse at 92% 74%, rgba(194,211,255,.5), transparent 34%),
      linear-gradient(135deg, #e9efff, #f5f7ff 52%, #e7edfc);
    background-attachment: fixed;
  }
  a { color: var(--accent); }
  .wrap { width: min(100% - 32px, 1120px); margin: 0 auto; padding: 26px 0 56px; }
  .top { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; margin-bottom: 26px; }
  .brand { display: flex; align-items: center; gap: 11px; font-weight: 800; letter-spacing: -0.035em; font-size: 16px; }
  .brand .mark { width: 42px; height: 42px; border-radius: 14px; background: var(--gradient); color: #fff; display: grid; place-items: center; font-size: 12px; box-shadow: 7px 7px 16px rgba(194,204,225,.9), -6px -6px 14px rgba(255,255,255,.95), inset 1px 1px 1px rgba(255,255,255,.35); }
  .lang { display: inline-flex; gap: 2px; padding: 4px; border-radius: 999px; background: rgba(255,255,255,.48); border: 1px solid rgba(255,255,255,.7); box-shadow: var(--pressed); }
  .lang button { min-height: 32px; min-width: 36px; padding: 4px 9px; border: 0; border-radius: 999px; background: transparent; color: var(--muted); font: inherit; font-size: 11px; font-weight: 800; cursor: pointer; }
  .lang button[aria-pressed="true"] { background: var(--gradient); color: #fff; box-shadow: 3px 3px 8px rgba(194,204,225,.8); }
  .hero { margin-bottom: 26px; }
  .kicker { display: inline-flex; align-items: center; gap: 7px; font-size: 10px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; padding: 8px 12px; border-radius: 999px; background: #e8eeff; box-shadow: var(--pressed); }
  h1 { font-size: clamp(34px, 5vw, 54px); line-height: 1.05; letter-spacing: -0.055em; margin: 0 0 12px; }
  .hero p { max-width: 66ch; color: var(--muted); margin: 0; font-size: 15px; line-height: 1.7; }
  .hero .en, .hero .id { margin: 0; }
  [data-lang="id"] .en { display: none; }
  [data-lang="en"] .id { display: none; }
  .meta { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
  .tag { display: inline-flex; align-items: center; padding: 4px 9px; border-radius: 999px; border: 1px solid var(--border); background: rgba(255,255,255,.5); color: var(--muted); font-size: 11px; font-weight: 650; box-shadow: none; }
  .tag.accent { background: #e8eeff; color: #2448cb; border-color: transparent; font-weight: 800; }
  h2 { font-size: 18px; letter-spacing: -0.03em; margin: 0 0 12px; }
  h3 { font-size: 15px; margin: 16px 0 6px; }
  .panel { background: var(--surface); border: 1px solid rgba(255,255,255,.72); border-radius: var(--radius-lg); box-shadow: var(--raised); padding: 24px; backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
  .grid { display: grid; gap: 18px; margin-bottom: 18px; }
  .grid.two { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
  .grid.three { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
  .grid.four { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
  .muted { color: var(--muted); font-size: 13px; }
  button, .button { display: inline-flex; align-items: center; justify-content: center; gap: 8px; font: inherit; font-weight: 700; font-size: 14px; min-height: 44px; padding: 11px 18px; border-radius: 16px; border: 1px solid rgba(255,255,255,.7); background: linear-gradient(145deg,#fff,#e7edfb); color: #4f5d78; cursor: pointer; box-shadow: 7px 7px 16px rgba(203,212,232,.85), -7px -7px 16px rgba(255,255,255,.95); transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease; }
  button.primary { background: var(--gradient); color: #fff; border-color: transparent; box-shadow: 8px 8px 18px rgba(195,205,229,.9), -6px -6px 14px rgba(255,255,255,.95), inset 1px 1px 1px rgba(255,255,255,.35); }
  button.ghost { background: transparent; border-color: var(--border); box-shadow: none; }
  button:hover { transform: translateY(-1px); }
  button:active { transform: translateY(1px); box-shadow: var(--pressed); }
  button:focus-visible, a:focus-visible, input:focus-visible { outline: 2px solid var(--focus); outline-offset: 3px; }
  input { width: 100%; min-height: 44px; padding: 10px 12px; border: 1px solid var(--border-strong); border-radius: var(--radius-sm); background: var(--alt); color: var(--text); font: inherit; }
  label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; }
  .actions { display: flex; gap: 10px; flex-wrap: wrap; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th, td { text-align: left; padding: 10px 8px; border-bottom: 1px solid var(--border); }
  th { color: var(--muted); font-size: 11px; font-weight: 600; }
  .num { text-align: right; font-variant-numeric: tabular-nums; }
  .swatches { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 8px; }
  .swatch { border-radius: var(--radius-sm); padding: 10px; min-height: 64px; display: flex; flex-direction: column; justify-content: space-between; font-size: 11px; }
  .swatch code { font-size: 10px; opacity: .85; }
  .row { display: flex; align-items: center; gap: 10px; margin: 7px 0; font-size: 13px; }
  .row code { min-width: 46px; font-size: 11px; color: var(--muted); }
  .bar { height: 8px; border-radius: 999px; background: var(--accent); }
  .chip { display: inline-grid; place-items: center; width: 54px; height: 54px; background: var(--alt); box-shadow: var(--raised); font-size: 12px; }
  .radius-sm { border-radius: var(--radius-sm); }
  .radius-md { border-radius: var(--radius-md); }
  .radius-lg { border-radius: var(--radius-lg); }
  .raised { padding: 12px 16px; border-radius: var(--radius-md); box-shadow: var(--raised); font-size: 12px; }
  .pressed { padding: 12px 16px; border-radius: var(--radius-md); box-shadow: var(--pressed); font-size: 12px; }
  .display { font-size: clamp(24px, 3.6vw, 34px); line-height: 1.12; letter-spacing: -0.03em; margin: 0 0 12px; }
  .lead { font-size: 18px; color: var(--muted); max-width: 60ch; }
  .body { max-width: 65ch; }
  .caption { font-size: 12px; color: var(--muted); }
  .bad-panel { outline: 2px dashed #9f2433; }
  .bad-type em { color: #8a2f1d; }
  .accent-word { color: var(--accent); }
  .dot { width: 18px; height: 18px; border-radius: 50%; border: 1px solid var(--border-strong); }
  .contrast-good, .contrast-ok, .contrast-bad { padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 8px; font-weight: 700; }
  .contrast-good { background: #1b2943; color: #ffffff; }
  .contrast-ok { background: #5f6c85; color: #ffffff; }
  .contrast-bad { background: #dfe6f2; color: #8f99a9; }
  .badge { display: inline-block; padding: 3px 9px; border-radius: 999px; font-size: 11px; font-weight: 700; }
  .badge.success { background: #d7ecdf; color: #14532d; }
  .badge.warning { background: #f5e4c3; color: #5a3a00; }
  .badge.danger { background: #f3d6d6; color: #7f1d1d; }
  .frame { display: grid; grid-template-columns: 32px 1fr 32px; gap: 8px; align-items: stretch; font-size: 11px; color: var(--muted); }
  .frame > span { display: grid; place-items: center; background: var(--alt); border-radius: var(--radius-sm); }
  .frame-inner { border: 1px dashed var(--border-strong); border-radius: var(--radius-sm); padding: 18px; text-align: center; }
  .rhythm { display: grid; gap: 0; }
  .rhythm-block { background: var(--alt); border-radius: var(--radius-sm); padding: 14px; text-align: center; font-size: 12px; }
  .rhythm-gap { text-align: center; font-size: 11px; color: var(--muted); padding: 10px 0; }
  .asym { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: center; }
  .asym-media { background: var(--alt); border-radius: var(--radius-sm); padding: 24px 12px; text-align: center; font-size: 12px; color: var(--muted); }
  .demo-nav { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; padding: 12px 16px; border-radius: var(--radius-md); box-shadow: var(--raised); margin-bottom: 18px; font-size: 13px; }
  .demo-nav a { color: var(--muted); text-decoration: none; }
  .demo-nav button { margin-left: auto; }
  .error { color: #9f2433; font-size: 12px; margin: 6px 0 0; }
  .metric span { display: block; font-size: 11px; color: var(--muted); }
  .metric strong { display: block; font-size: 28px; letter-spacing: -0.03em; margin: 4px 0; }
  .metric em { font-style: normal; font-size: 11px; color: var(--muted); }
  .alert-panel { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; margin-bottom: 18px; background: #f5e4c3; color: #4a2f00; }
  .alert-panel button { background: #4a2f00; color: #fff; border-color: transparent; box-shadow: none; }
  .state { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
  .state-icon { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; background: var(--alt); box-shadow: var(--pressed); font-weight: 700; color: var(--muted); }
  .skeleton-row { display: grid; gap: 8px; margin: 12px 0; }
  .skeleton-row span { height: 14px; border-radius: 999px; background: linear-gradient(90deg, var(--alt), #ffffff, var(--alt)); }
  .skeleton-row span:nth-child(2) { width: 82%; }
  .skeleton-row span:nth-child(3) { width: 64%; }
  .motion-card { transition: transform 160ms ease, box-shadow 160ms ease; }
  .motion-card:hover { transform: translateY(-2px); box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light); }
  .skip { position: absolute; left: -999px; top: 8px; background: var(--accent); color: var(--accent-text); padding: 10px 14px; border-radius: 8px; z-index: 10; }
  .skip:focus { left: 8px; }
  .checklist { margin: 0; padding-left: 18px; font-size: 13px; }
  .checklist li { margin: 6px 0; }
  .device { background: var(--alt); border-radius: var(--radius-md); padding: 12px; box-shadow: var(--raised); }
  .device-label { font-size: 11px; color: var(--muted); }
  .device-body { margin-top: 8px; background: var(--surface); border-radius: var(--radius-sm); padding: 12px; min-height: 170px; }
  .device-body.wide { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; align-content: start; }
  .device-body h2 { grid-column: 1 / -1; }
  .mini-card { display: flex; justify-content: space-between; gap: 8px; font-size: 11px; padding: 8px; border-radius: 8px; box-shadow: var(--pressed); margin-bottom: 6px; }
  .code-chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .code-chips code { background: var(--alt); padding: 7px 10px; border-radius: 8px; font-size: 12px; box-shadow: var(--raised); }
  .theme-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
  .theme-chip { display: flex; align-items: center; gap: 8px; padding: 8px; border-radius: 10px; background: var(--alt); font-size: 11px; }
  .theme-swatch { width: 26px; height: 26px; border-radius: 7px; background: var(--chip-bg); border: 3px solid var(--chip-accent); flex: none; }
  .slop { background: linear-gradient(135deg, #ede9fe, #dbeafe); }
  .mini-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 10px; }
  .mini-cards span { height: 46px; border-radius: 12px; background: #ffffff88; }
  .sharp { outline: 2px solid var(--text); outline-offset: -2px; }
  .waterfall { display: grid; gap: 6px; margin: 10px 0; }
  .waterfall div { padding: 8px 10px; border-radius: 6px; background: var(--accent); color: var(--accent-text); font-size: 11px; }
  .waterfall div:nth-child(2) { background: #4a67a8; }
  .waterfall div:nth-child(3) { background: #5f7fb8; }
  .waterfall div:nth-child(4) { background: #8aa1c9; color: #10203a; }
  .boundary { display: grid; grid-template-columns: 1fr auto 1fr; gap: 10px; align-items: center; margin: 8px 0 12px; }
  .boundary > div:not(.arrow) { background: var(--alt); border-radius: var(--radius-sm); padding: 14px; font-size: 12px; }
  .boundary strong { display: block; font-size: 13px; }
  .boundary span { color: var(--muted); }
  .arrow { color: var(--muted); }
  .bad-copy { color: #8a2f1d; text-decoration: line-through; }
  .footer { margin-top: 30px; padding-top: 16px; border-top: 1px solid var(--border); display: flex; flex-wrap: wrap; gap: 8px 18px; justify-content: space-between; font-size: 11px; color: var(--muted); }
  .footer a { color: var(--muted); }
  @media (max-width: 560px) { .asym { grid-template-columns: 1fr; } .demo-nav button { margin-left: 0; } .boundary { grid-template-columns: 1fr; } .arrow { display: none; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; scroll-behavior: auto !important; } .motion-card:hover { transform: none; } }
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div class="brand"><span class="mark">2045</span><span>${title}</span></div>
    <div class="lang" role="group" aria-label="Language">
      <button type="button" data-set-lang="id" aria-pressed="true">ID</button>
      <button type="button" data-set-lang="en" aria-pressed="false">EN</button>
    </div>
  </header>

  <section class="hero">
    <span class="kicker">${skill.category ?? "ui"} · ${license}</span>
    <h1>${title}</h1>
    <p class="en">${description}</p>
    <p class="id">${descriptionId}</p>
    <div class="meta">
      ${(Array.isArray(skill.tags) ? skill.tags : []).slice(0, 5).map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  </section>

  ${body}

  <footer class="footer">
    <span>Preview mandiri · tanpa dependensi eksternal</span>
    <span>${source ? `Sumber: <a href="${source}">${source.replace("https://github.com/", "")}</a>` : "Karya asli ui-skill-2045"}</span>
    <span>Lisensi: ${license}${license === "Apache-2.0" ? " · lihat LICENSE-UPSTREAM" : ""}</span>
  </footer>
</div>
<script>
  const root = document.documentElement;
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.setLang;
      root.dataset.lang = lang;
      document.querySelectorAll("[data-set-lang]").forEach((other) => {
        other.setAttribute("aria-pressed", String(other === button));
      });
    });
  });
  const modeButton = document.getElementById("mode-toggle");
  if (modeButton) {
    modeButton.addEventListener("click", () => {
      const dark = root.dataset.mode !== "dark";
      root.dataset.mode = dark ? "dark" : "light";
      modeButton.textContent = dark ? "Ganti ke light" : "Ganti ke dark";
      if (dark) {
        root.style.setProperty("--bg", "#0f1726");
        root.style.setProperty("--surface", "#131d30");
        root.style.setProperty("--alt", "#18243a");
        root.style.setProperty("--text", "#e8eefb");
        root.style.setProperty("--muted", "#a9b8d2");
        root.style.setProperty("--accent", "#7ea2ff");
        root.style.setProperty("--accent-text", "#0b1220");
        root.style.setProperty("--border", "#2a3a55");
        root.style.setProperty("--border-strong", "#5c7396");
        root.style.setProperty("--focus", "#a8c0ff");
        root.style.setProperty("--shadow-dark", "#070c15");
        root.style.setProperty("--shadow-light", "#1e2c44");
      } else {
        ["--bg", "--surface", "--alt", "--text", "--muted", "--accent", "--accent-text", "--border", "--border-strong", "--focus", "--shadow-dark", "--shadow-light"].forEach((name) => root.style.removeProperty(name));
      }
    });
  }
</script>
</body>
</html>
`;
}

const { readdir } = await import("node:fs/promises");
const entries = await readdir(skillsDir, { withFileTypes: true });
for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const skillPath = join(skillsDir, entry.name, "SKILL.md");
  let text;
  try {
    text = await readFile(skillPath, "utf8");
  } catch {
    continue;
  }
  const skill = parseFrontmatter(text);
  skill.name = skill.name ?? entry.name;
  const outputDir = join(skillsDir, entry.name, "preview");
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, "index.html"), shell(skill, demo(skill)), "utf8");
  console.log(`preview: ${entry.name}`);
}
