// Canonical theme data. Docs, previews, and the theme-recipes skill CSS are generated from this file.
export const themes = [
  {
    slug: "soft-blue-neumorphism",
    name: "Soft Blue Neumorphism",
    tagline: {
      en: "Calm blue surfaces, paired shadows, one decisive action.",
      id: "Permukaan biru tenang, bayangan berpasangan, satu aksi tegas.",
    },
    primary: true,
    philosophy: {
      en: "Soft neumorphism works when the surface itself becomes the structure. A single cool blue field carries the page; elements rise or sink through two opposing shadows. A light glass panel, a white rim, and a restrained radius make the depth feel airy rather than heavy. The accent stays sharp so the interface still has one clear action.",
      id: "Neumorphism lembut bekerja ketika permukaan itu sendiri menjadi struktur. Satu bidang biru dingin membawa halaman; elemen timbul atau tenggelam lewat dua bayangan berlawanan. Panel glass terang, rim putih, dan radius yang terkendali membuat kedalaman terasa lapang, bukan berat. Aksen tetap tegas agar antarmuka punya satu aksi yang jelas.",
    },
    useWhen: [
      "Product UI with calm, low-noise surfaces",
      "Settings, dashboards, and control panels",
      "Interfaces with a single primary action per view",
    ],
    avoidWhen: [
      "Dense data tables where shadows compete with rows",
      "Low-quality displays where subtle shadows band",
      "Contexts that require maximum contrast at all times",
    ],
    fontDisplay: "ui-rounded, 'Segoe UI', system-ui, sans-serif",
    fontBody: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "1px",
    depthRule: {
      en: "Translucent light surface + 1px white rim + paired neumorphic shadows. Inset wells for inputs and stats. Pressed state uses the inset pair.",
      id: "Permukaan terang tembus pandang + rim putih 1px + bayangan neumorphism berpasangan. Well inset untuk input dan statistik. State pressed memakai pasangan inset.",
    },
    motion: {
      en: "Shadow and transform only, 140–220ms. Hover lifts 2px; pressed returns to the surface. Reduced motion removes travel but keeps the tone change.",
      id: "Hanya shadow dan transform, 140–220ms. Hover naik 2px; pressed kembali ke permukaan. Reduced motion menghapus pergerakan, mempertahankan perubahan tone.",
    },
    radius: { sm: "12px", md: "18px", lg: "30px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#edf1fc", surface: "#f4f6ff", surfaceAlt: "#e8eeff", text: "#1b2943",
      muted: "#5f6c85", accent: "#315be8", accentText: "#ffffff", border: "#dce4f3",
      focus: "#315be8", shadowDark: "#c2cce1", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#0b1120", surface: "#121b30", surfaceAlt: "#17223a", text: "#e9eefb",
      muted: "#a8b4cb", accent: "#6f8cff", accentText: "#0b1220", border: "#26314a",
      focus: "#9db6ff", shadowDark: "#05080f", shadowLight: "#1b2740",
    },
    antiPatterns: [
      "Shadows on table rows",
      "Three different radii on one card",
      "Accent gradients",
      "Neumorphic buttons without a tone change on focus",
    ],
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    tagline: {
      en: "Translucent layers over a real image, with a hard fallback.",
      id: "Lapisan tembus pandang di atas gambar nyata, dengan fallback solid.",
    },
    philosophy: {
      en: "Glass is a relationship between a layer and what lies behind it. Without an interesting background, it is just a gray box with blur. Use one or two glass surfaces over a photograph or a color field; keep text on opaque surfaces.",
      id: "Glass adalah hubungan antara lapisan dan apa yang ada di belakangnya. Tanpa latar yang menarik, ia hanya kotak abu-abu dengan blur. Gunakan satu atau dua permukaan glass di atas foto atau bidang warna; pertahankan teks pada permukaan opak.",
    },
    useWhen: [
      "Media-rich hero sections and overlays",
      "Player controls, floating toolbars, command palettes",
      "Campaign pages with a strong photograph",
    ],
    avoidWhen: [
      "Long text panels",
      "Low-end devices where blur drops frames",
      "Bright outdoor use where translucency kills contrast",
    ],
    fontDisplay: "'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "1px",
    depthRule: {
      en: "Translucent surface + 1px light border + backdrop blur. No drop shadows except for true overlays.",
      id: "Permukaan tembus pandang + border terang 1px + backdrop blur. Tanpa drop shadow kecuali overlay sungguhan.",
    },
    motion: {
      en: "Opacity and 8px translate, 180–240ms. Blur is never animated.",
      id: "Opacity dan translate 8px, 180–240ms. Blur tidak pernah dianimasikan.",
    },
    radius: { sm: "10px", md: "16px", lg: "24px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#e8f0fc", surface: "#f5f9ff", surfaceAlt: "#ffffff", text: "#14213a",
      muted: "#3f5578", accent: "#2455c3", accentText: "#ffffff", border: "#c3d6f0",
      focus: "#1c49ad", shadowDark: "#c2d4ea", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#0a1220", surface: "#111c30", surfaceAlt: "#16233a", text: "#eaf1ff",
      muted: "#a8b8d4", accent: "#8fb3ff", accentText: "#081426", border: "#26395a",
      focus: "#a9c4ff", shadowDark: "#050a12", shadowLight: "#1a2b46",
    },
    antiPatterns: [
      "Glass panels on a flat gray background",
      "Body text on a blurred surface",
      "Blur on every card",
      "No opaque fallback",
    ],
  },
  {
    slug: "aurora-gradient",
    name: "Aurora Gradient",
    tagline: {
      en: "Slow color fields, generous type, no chrome.",
      id: "Bidang warna perlahan, tipografi lapang, tanpa chrome.",
    },
    philosophy: {
      en: "Aurora is atmosphere, not decoration. Large, low-frequency color fields set a mood; the content sits on top with strong contrast. Keep gradients broad and soft, never as text fill or button chrome, and never animate them at full speed.",
      id: "Aurora adalah atmosfer, bukan dekorasi. Bidang warna besar berfrekuensi rendah membangun suasana; konten duduk di atasnya dengan kontras kuat. Jaga gradien lebar dan lembut, bukan sebagai isi teks atau chrome tombol, dan jangan beri animasi penuh.",
    },
    useWhen: [
      "Product launches and campaign pages",
      "Creative tools and music products",
      "A single immersive hero",
    ],
    avoidWhen: [
      "Long-form reading",
      "Enterprise data and forms",
      "Print-like or regulated contexts",
    ],
    fontDisplay: "'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "0px",
    depthRule: {
      en: "No shadows. Depth comes from overlapping color fields and scale.",
      id: "Tanpa bayangan. Kedalaman datang dari bidang warna yang tumpang tindih dan skala.",
    },
    motion: {
      en: "One slow drift (20s+) or none. Never on the text layer. Reduced motion stops the drift.",
      id: "Satu gerakan lambat (20 detik+) atau tidak sama sekali. Jangan pada lapisan teks. Reduced motion menghentikannya.",
    },
    radius: { sm: "12px", md: "20px", lg: "32px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#eaf6f4", surface: "#f4fbfa", surfaceAlt: "#ffffff", text: "#10202b",
      muted: "#3e5b63", accent: "#0f6b5f", accentText: "#ffffff", border: "#c2e0da",
      focus: "#0b574e", shadowDark: "#c9e3dd", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#07131a", surface: "#0d1e27", surfaceAlt: "#122833", text: "#e6f7f5",
      muted: "#a3c4c2", accent: "#5eead4", accentText: "#04211d", border: "#1d3b45",
      focus: "#8ff5e4", shadowDark: "#030a0e", shadowLight: "#143039",
    },
    antiPatterns: [
      "Gradient text",
      "Purple-to-blue as the whole identity",
      "Fast-moving background",
      "Low-contrast text over the gradient",
    ],
  },
  {
    slug: "minimal-monochrome",
    name: "Minimal Monochrome",
    tagline: {
      en: "One ink, one ground, hierarchy from type and space.",
      id: "Satu tinta, satu latar, hierarki dari tipe dan ruang.",
    },
    philosophy: {
      en: "Monochrome removes color as a crutch. Hierarchy must come from scale, weight, spacing, and rules. It is unforgiving: a weak grid or a vague headline has nowhere to hide. In exchange, it is fast, timeless, and easy to make accessible.",
      id: "Monokrom menghapus warna sebagai penopang. Hierarki harus datang dari skala, bobot, jarak, dan garis. Ia tidak memaafkan: grid lemah atau judul kabur tidak punya tempat bersembunyi. Sebagai gantinya, ia cepat, tahan lama, dan mudah dibuat aksesibel.",
    },
    useWhen: [
      "Portfolios, editorial products, tools",
      "Content where typography is the identity",
      "Performance-constrained contexts",
    ],
    avoidWhen: [
      "Brands that depend on color recognition",
      "Children’s products",
      "Status-heavy dashboards that need semantic color",
    ],
    fontDisplay: "'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "1px",
    depthRule: {
      en: "Tone steps and 1px rules. No shadows.",
      id: "Langkah tone dan garis 1px. Tanpa bayangan.",
    },
    motion: {
      en: "Instant or 120ms. Nothing decorative.",
      id: "Instan atau 120ms. Tidak ada yang dekoratif.",
    },
    radius: { sm: "0px", md: "2px", lg: "4px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#f7f7f5", surface: "#ffffff", surfaceAlt: "#efefec", text: "#111111",
      muted: "#4a4a46", accent: "#111111", accentText: "#ffffff", border: "#dcdcd6",
      focus: "#111111", shadowDark: "#d8d8d2", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#111110", surface: "#1a1a18", surfaceAlt: "#222220", text: "#f5f5f2",
      muted: "#b4b4ad", accent: "#f5f5f2", accentText: "#111111", border: "#33332f",
      focus: "#ffffff", shadowDark: "#000000", shadowLight: "#2a2a27",
    },
    antiPatterns: [
      "Gray body text below 4.5:1",
      "Color used only to compensate for weak hierarchy",
      "Hairline rules everywhere",
      "Tiny uppercase labels",
    ],
  },
  {
    slug: "brutalist-modern",
    name: "Brutalist Modern",
    tagline: {
      en: "Hard edges, visible structure, no apology.",
      id: "Tepi keras, struktur terlihat, tanpa permintaan maaf.",
    },
    philosophy: {
      en: "Brutalism exposes the structure instead of hiding it. Borders are visible, blocks are offset, type is large, and interaction is immediate. Modern brutalism keeps the attitude but fixes the accessibility: real contrast, real focus, real targets.",
      id: "Brutalisme memperlihatkan struktur alih-alih menyembunyikannya. Border terlihat, blok bergeser, tipe besar, interaksi langsung. Brutalisme modern mempertahankan sikap tetapi memperbaiki aksesibilitas: kontras nyata, focus nyata, target nyata.",
    },
    useWhen: [
      "Cultural events, studios, portfolios",
      "Statements that need to be remembered",
      "Small sites with strong content",
    ],
    avoidWhen: [
      "Regulated industries",
      "Older or conservative audiences",
      "Dense forms and data entry",
    ],
    fontDisplay: "'Arial Black', 'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "3px",
    depthRule: {
      en: "Hard borders and offset solid blocks. Shadows are solid, never blurred.",
      id: "Border keras dan blok solid bergeser. Bayangan solid, tidak pernah blur.",
    },
    motion: {
      en: "Snap: 80–120ms, no easing curves. Reduced motion is already instant.",
      id: "Snap: 80–120ms, tanpa kurva easing. Reduced motion sudah instan.",
    },
    radius: { sm: "0px", md: "0px", lg: "0px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#f5f1e8", surface: "#fffdf8", surfaceAlt: "#ffe500", text: "#111111",
      muted: "#4a4a45", accent: "#111111", accentText: "#ffe500", border: "#111111",
      focus: "#c8341a", shadowDark: "#111111", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#121212", surface: "#1a1a1a", surfaceAlt: "#242424", text: "#f4f1e8",
      muted: "#b8b3a8", accent: "#ffe500", accentText: "#111111", border: "#f4f1e8",
      focus: "#ff4d2e", shadowDark: "#000000", shadowLight: "#333333",
    },
    antiPatterns: [
      "Hairline borders",
      "Soft shadows",
      "Low-contrast gray",
      "Brutalism used to excuse unusable forms",
    ],
  },
  {
    slug: "cyber-neon",
    name: "Cyber Neon",
    tagline: {
      en: "Night surfaces, one electric accent, precise data.",
      id: "Permukaan malam, satu aksen listrik, data presisi.",
    },
    philosophy: {
      en: "Neon is a light source, so it must be scarce. One electric accent against a deep, desaturated ground; glow only on the thing that emits. Data and type stay crisp. The moment everything glows, nothing does.",
      id: "Neon adalah sumber cahaya, jadi harus langka. Satu aksen listrik di atas latar gelap terdesaturasi; glow hanya pada objek yang memancarkan. Data dan tipe tetap tajam. Saat semuanya menyala, tidak ada yang menyala.",
    },
    useWhen: [
      "Gaming, dev tools, music, night products",
      "Dashboards viewed in dark environments",
      "A single high-energy accent",
    ],
    avoidWhen: [
      "Health, finance, or regulated interfaces",
      "Long reading",
      "Bright daylight use",
    ],
    fontDisplay: "'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "1px",
    depthRule: {
      en: "Glow only on the accent. Surfaces use tone steps and 1px borders.",
      id: "Glow hanya pada aksen. Permukaan memakai langkah tone dan border 1px.",
    },
    motion: {
      en: "One pulse on state change, ≤ 2 cycles. No infinite glow loops.",
      id: "Satu pulsa saat state berubah, ≤ 2 siklus. Tanpa loop glow tanpa akhir.",
    },
    radius: { sm: "4px", md: "8px", lg: "12px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#eef9ff", surface: "#ffffff", surfaceAlt: "#e0f4ff", text: "#071018",
      muted: "#3c5566", accent: "#006c7a", accentText: "#ffffff", border: "#b8dce6",
      focus: "#005a66", shadowDark: "#c4e2ea", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#06070f", surface: "#0c0f1c", surfaceAlt: "#111628", text: "#e9f2ff",
      muted: "#9fb0cc", accent: "#00e5ff", accentText: "#001014", border: "#1d2740",
      focus: "#7af2ff", shadowDark: "#02030a", shadowLight: "#161d33",
    },
    antiPatterns: [
      "Neon body text",
      "Glow on every card",
      "Pure black with saturated cyan everywhere",
      "Infinite pulsing",
    ],
  },
  {
    slug: "dark-neumorphism",
    name: "Dark Neumorphism",
    tagline: {
      en: "Soft dark panels, low-contrast depth, precise controls.",
      id: "Panel gelap lembut, kedalaman kontras rendah, kontrol presisi.",
    },
    philosophy: {
      en: "Dark neumorphism is the hardest to keep accessible: shadows are subtle and text can disappear. It works when the palette stays narrow, the text stays bright enough, and the depth is reserved for controls, not content.",
      id: "Neumorphism gelap paling sulit dijaga aksesibel: bayangan halus dan teks bisa hilang. Ia bekerja ketika palet tetap sempit, teks cukup terang, dan kedalaman hanya untuk kontrol, bukan konten.",
    },
    useWhen: [
      "Media apps and control panels at night",
      "Physical-feeling controls (dials, toggles, transport)",
      "A narrow, focused tool",
    ],
    avoidWhen: [
      "Dense text and tables",
      "Outdoor use",
      "Low-quality displays",
    ],
    fontDisplay: "'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "0px",
    depthRule: {
      en: "Paired shadows: near-black below, lighter gray above. No borders except on focus.",
      id: "Bayangan berpasangan: hitam di bawah, abu terang di atas. Tanpa border kecuali saat focus.",
    },
    motion: {
      en: "Shadow transitions 160–220ms; never animate blur radius in a loop.",
      id: "Transisi shadow 160–220ms; jangan menganimasikan radius blur dalam loop.",
    },
    radius: { sm: "10px", md: "16px", lg: "24px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#e8ebef", surface: "#e8ebef", surfaceAlt: "#f1f3f6", text: "#1a1f26",
      muted: "#4b5563", accent: "#2456c4", accentText: "#ffffff", border: "#cbd2dc",
      focus: "#1c46a8", shadowDark: "#c3c9d3", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#15181d", surface: "#1b1f26", surfaceAlt: "#222831", text: "#e6ebf2",
      muted: "#9aa6b8", accent: "#6ea8fe", accentText: "#0b0f14", border: "#2c333f",
      focus: "#8ab8ff", shadowDark: "#0a0c10", shadowLight: "#252b34",
    },
    antiPatterns: [
      "Gray text below 4.5:1",
      "Shadows on text blocks",
      "Deep black with no surface separation",
      "Focus indicated only by a shadow change",
    ],
  },
  {
    slug: "bento-grid",
    name: "Bento Grid",
    tagline: {
      en: "Modular panels, different weights, one clear reading path.",
      id: "Panel modular, bobot berbeda, satu jalur baca jelas.",
    },
    philosophy: {
      en: "Bento is a composition of unequal panels. Its quality depends on hierarchy: one large cell, a few medium cells, and small supporting cells. Equal cells produce a dashboard of nothing. Panels should earn their size with content.",
      id: "Bento adalah komposisi panel yang tidak sama. Kualitasnya bergantung pada hierarki: satu sel besar, beberapa sel sedang, dan sel pendukung kecil. Sel yang sama besar menghasilkan dashboard tanpa isi. Panel harus memperoleh ukurannya dari konten.",
    },
    useWhen: [
      "Feature overviews and product marketing",
      "A single screen summarizing a product",
      "Portfolios with mixed media",
    ],
    avoidWhen: [
      "Long prose",
      "Forms and sequential tasks",
      "Content that needs a single reading order",
    ],
    fontDisplay: "'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "1px",
    depthRule: {
      en: "Panel tone and gap. One border weight. No shadows.",
      id: "Tone panel dan jarak. Satu ketebalan border. Tanpa bayangan.",
    },
    motion: {
      en: "Panel reveal 200–300ms, once. No per-cell hover scale.",
      id: "Reveal panel 200–300ms, sekali. Tanpa hover scale per sel.",
    },
    radius: { sm: "12px", md: "18px", lg: "24px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#f4f5f7", surface: "#ffffff", surfaceAlt: "#eef1f6", text: "#14181f",
      muted: "#4e5b70", accent: "#3b5bdb", accentText: "#ffffff", border: "#e0e5ee",
      focus: "#2f4bc0", shadowDark: "#dde2ea", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#0e1117", surface: "#161b24", surfaceAlt: "#1c2330", text: "#eef2f8",
      muted: "#a3aec2", accent: "#7c9cff", accentText: "#0b1020", border: "#2a3444",
      focus: "#9db4ff", shadowDark: "#07090d", shadowLight: "#232c3a",
    },
    antiPatterns: [
      "Every cell the same size",
      "A card grid with no dominant panel",
      "Different radii per cell",
      "Panels used for flowing prose",
    ],
  },
  {
    slug: "editorial-serif",
    name: "Editorial Serif",
    tagline: {
      en: "Type-led pages with a serif spine and quiet rules.",
      id: "Halaman berbasis tipe dengan tulang serif dan garis tenang.",
    },
    philosophy: {
      en: "Editorial design trusts the text. A serif display face, a generous measure, and a small number of rules create authority. The risk is nostalgia: use contemporary spacing and contrast, not faux newsprint textures.",
      id: "Desain editorial mempercayai teks. Huruf serif display, measure lapang, dan sedikit garis menciptakan wibawa. Risikonya adalah nostalgia: gunakan jarak dan kontras kontemporer, bukan tekstur koran palsu.",
    },
    useWhen: [
      "Publishing, hospitality, portfolios",
      "Long-form content with strong headlines",
      "Brands that want warmth and authority",
    ],
    avoidWhen: [
      "Dense dashboards",
      "Code and data tables",
      "Small UI with many labels",
    ],
    fontDisplay: "Georgia, 'Times New Roman', serif",
    fontBody: "Georgia, 'Iowan Old Style', serif",
    borderWidth: "1px",
    depthRule: {
      en: "Rules and type scale. No shadows.",
      id: "Garis dan skala tipe. Tanpa bayangan.",
    },
    motion: {
      en: "Minimal: 160ms fades. No scroll effects.",
      id: "Minimal: fade 160ms. Tanpa efek scroll.",
    },
    radius: { sm: "0px", md: "4px", lg: "8px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#fbf8f2", surface: "#ffffff", surfaceAlt: "#f3ece1", text: "#1c1917",
      muted: "#57534e", accent: "#8a2f1d", accentText: "#ffffff", border: "#e2d9cb",
      focus: "#6f2416", shadowDark: "#e6ddd0", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#161311", surface: "#1f1a17", surfaceAlt: "#2a231e", text: "#f5efe6",
      muted: "#bdb1a3", accent: "#e8a87c", accentText: "#241a13", border: "#3a322b",
      focus: "#ffc9a3", shadowDark: "#0b0908", shadowLight: "#332b25",
    },
    antiPatterns: [
      "Serif body at 13px",
      "Fake newsprint texture",
      "Justified text without hyphenation",
      "All-caps serif everywhere",
    ],
  },
  {
    slug: "claymorphism",
    name: "Claymorphism",
    tagline: {
      en: "Soft, rounded, tactile surfaces with clear affordances.",
      id: "Permukaan lembut, membulat, taktil, dengan afordansi jelas.",
    },
    philosophy: {
      en: "Clay is friendly, but friendliness is not a substitute for clarity. The softness must come from a consistent light source and restrained saturation. Controls need a clear pressed state and a visible focus ring, not just a squishier shadow.",
      id: "Clay itu ramah, tetapi keramahan bukan pengganti kejelasan. Kelembutan harus datang dari sumber cahaya konsisten dan saturasi yang terkendali. Kontrol butuh state pressed yang jelas dan focus ring terlihat, bukan hanya bayangan yang lebih empuk.",
    },
    useWhen: [
      "Education and consumer apps",
      "Onboarding and playful tools",
      "A single friendly brand surface",
    ],
    avoidWhen: [
      "Serious B2B and regulated interfaces",
      "Dense data",
      "Accessibility-critical contexts without extra testing",
    ],
    fontDisplay: "'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "0px",
    depthRule: {
      en: "Soft outer shadow plus a subtle inner highlight. One light direction.",
      id: "Shadow luar lembut plus highlight dalam halus. Satu arah cahaya.",
    },
    motion: {
      en: "Press scale 0.98 and shadow change, 120–180ms. Reduced motion keeps the shadow only.",
      id: "Press scale 0.98 dan perubahan shadow, 120–180ms. Reduced motion hanya mempertahankan shadow.",
    },
    radius: { sm: "14px", md: "22px", lg: "32px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#eef2ff", surface: "#ffffff", surfaceAlt: "#e3e8ff", text: "#1d2438",
      muted: "#4a5675", accent: "#5a4ae0", accentText: "#ffffff", border: "#d7ddf7",
      focus: "#4736c9", shadowDark: "#cdd4f0", shadowLight: "#ffffff",
    },
    dark: {
      bg: "#171a2b", surface: "#1e2236", surfaceAlt: "#262b45", text: "#eef0fb",
      muted: "#a8add0", accent: "#a99bff", accentText: "#171a2b", border: "#333957",
      focus: "#c3b8ff", shadowDark: "#0c0e18", shadowLight: "#2b3152",
    },
    antiPatterns: [
      "More than one light direction",
      "Clay applied to every element",
      "Pastel text on pastel background",
      "Focus indicated only by a softer shadow",
    ],
  },
  {
    slug: "blueprint-grid",
    name: "Blueprint Grid",
    tagline: {
      en: "Technical paper, measured lines, engineered calm.",
      id: "Kertas teknis, garis terukur, ketenangan rekayasa.",
    },
    philosophy: {
      en: "Blueprint borrows the visual language of technical drawings: a measured grid, thin annotations, precise alignment. It is a future-facing theme that stays quiet. The grid is a background instrument, never louder than the content.",
      id: "Blueprint meminjam bahasa visual gambar teknik: grid terukur, anotasi tipis, perataan presisi. Ini tema berorientasi masa depan yang tetap tenang. Grid adalah instrumen latar, tidak pernah lebih keras dari konten.",
    },
    useWhen: [
      "Developer tools, documentation, engineering products",
      "Technical portfolios and specifications",
      "Content that benefits from visible alignment",
    ],
    avoidWhen: [
      "Warm lifestyle brands",
      "Playful consumer apps",
      "Photography-led pages",
    ],
    fontDisplay: "'Segoe UI', system-ui, sans-serif",
    fontBody: "system-ui, -apple-system, 'Segoe UI', sans-serif",
    borderWidth: "1px",
    depthRule: {
      en: "1px rules and a background grid. No shadows. Elevation is a lighter panel.",
      id: "Garis 1px dan grid latar. Tanpa bayangan. Elevasi adalah panel lebih terang.",
    },
    motion: {
      en: "120–200ms, linear-ish. No bouncing.",
      id: "120–200ms, mendekati linear. Tanpa bouncing.",
    },
    radius: { sm: "2px", md: "4px", lg: "6px" },
    spacing: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px", "96px"],
    light: {
      bg: "#eaf1f8", surface: "#f7fafd", surfaceAlt: "#ffffff", text: "#0f2233",
      muted: "#47607a", accent: "#0b5cad", accentText: "#ffffff", border: "#b9cde0",
      focus: "#084a8c", shadowDark: "#cfdcea", shadowLight: "#ffffff", grid: "#c9d8e8",
    },
    dark: {
      bg: "#08131f", surface: "#0d1b2a", surfaceAlt: "#122336", text: "#dcebfa",
      muted: "#9db6cc", accent: "#58b0ff", accentText: "#04121f", border: "#1d3450",
      focus: "#86c8ff", shadowDark: "#040b13", shadowLight: "#17324d", grid: "#16304a",
    },
    antiPatterns: [
      "Grid lines stronger than the text",
      "Blueprint used for lifestyle photography",
      "Too many annotation labels",
      "Hairline borders below 3:1",
    ],
  },
];
