"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "id" | "en";

const dictionary: Record<string, { id: string; en: string }> = {
  "brand.tagline": { id: "Skill UI untuk agen", en: "UI skills for agents" },
  "nav.home": { id: "Beranda", en: "Home" },
  "nav.skills": { id: "Skill", en: "Skills" },
  "nav.themes": { id: "Tema", en: "Themes" },
  "nav.install": { id: "Instalasi", en: "Install" },
  "nav.contribute": { id: "Kontribusi", en: "Contribute" },
  "nav.sources": { id: "Sumber", en: "Sources" },
  "common.language": { id: "Bahasa", en: "Language" },
  "common.dark": { id: "Mode gelap", en: "Dark mode" },
  "common.light": { id: "Mode terang", en: "Light mode" },
  "common.darkShort": { id: "Gelap", en: "Dark" },
  "common.lightShort": { id: "Terang", en: "Light" },
  "common.copy": { id: "Salin", en: "Copy" },
  "common.copied": { id: "Tersalin", en: "Copied" },
  "common.all": { id: "Semua", en: "All" },
  "common.reset": { id: "Reset filter", en: "Reset filters" },
  "common.viewAll": { id: "Lihat semua", en: "View all" },
  "common.openNewTab": { id: "Buka di tab baru", en: "Open in new tab" },
  "common.license": { id: "Lisensi", en: "License" },
  "common.category": { id: "Kategori", en: "Category" },
  "common.theme": { id: "Tema", en: "Theme" },
  "common.source": { id: "Sumber", en: "Source" },
  "common.version": { id: "Versi", en: "Version" },
  "common.author": { id: "Penulis", en: "Author" },
  "common.back": { id: "Kembali", en: "Back" },

  "home.eyebrow": { id: "2045 · antarmuka yang sudah bisa dipakai hari ini", en: "2045 · interfaces you can use today" },
  "home.title": { id: "UI yang memutuskan,", en: "UI that decides," },
  "home.titleThin": { id: "bukan yang rata-rata.", en: "not the average." },
  "home.lead": {
    id: "18 skill untuk agen, ditulis ulang dari sumber berlisensi permisif. Prosedur, default, larangan, dan checklist — bukan sekadar kumpulan prompt.",
    en: "18 agent skills, rewritten from permissively licensed sources. Procedures, defaults, prohibitions, and checklists — not a pile of prompts.",
  },
  "home.searchLabel": { id: "Cari skill", en: "Search skills" },
  "home.searchPlaceholder": { id: "Cari: aksesibilitas, dashboard, motion…", en: "Search: accessibility, dashboard, motion…" },
  "home.searchCta": { id: "Cari", en: "Search" },
  "home.primaryCta": { id: "Jelajahi skill", en: "Browse skills" },
  "home.secondaryCta": { id: "Cara instalasi", en: "How to install" },
  "home.panelLabel": { id: "Arah, bukan klaim", en: "A direction, not a claim" },
  "home.panelNote": {
    id: "Setiap skill punya preview mandiri, ringkasan Bahasa Indonesia, dan atribusi yang bisa diperiksa.",
    en: "Every skill has a standalone preview, an Indonesian summary, and auditable attribution.",
  },
  "home.stats.skills": { id: "Skill terkurasi", en: "Curated skills" },
  "home.stats.themes": { id: "Tema lengkap", en: "Complete themes" },
  "home.stats.checks": { id: "Uji kontras AA", en: "AA contrast checks" },
  "home.stats.languages": { id: "Bahasa", en: "Languages" },
  "home.featured": { id: "Mulai dari sini", en: "Start here" },
  "home.featuredLead": {
    id: "Enam skill yang paling sering menyelamatkan halaman dari tampilan generik.",
    en: "Six skills that most often save a page from looking generic.",
  },
  "home.quickstart": { id: "Mulai cepat", en: "Quick start" },
  "home.quality": { id: "Kualitas kontras", en: "Contrast quality" },
  "home.qualityNote": {
    id: "Semua pasangan teks di 11 tema lolos WCAG AA.",
    en: "Every text pair across 11 themes passes WCAG AA.",
  },
  "home.skillPicks": { id: "Skill pilihan", en: "Selected skills" },
  "home.skillPicksLead": {
    id: "Fondasi, komponen, kualitas, dan stack — ditulis sebagai prosedur yang bisa diperiksa.",
    en: "Foundations, components, quality, and stack — written as procedures you can inspect.",
  },
  "home.themes": { id: "Tema yang terukur", en: "Themes that are measured" },
  "home.themesLead": {
    id: "Sebelas arah visual, masing-masing dengan token light dan dark serta kontras yang dihitung, bukan dikira-kira.",
    en: "Eleven visual directions, each with light and dark tokens and computed — not guessed — contrast.",
  },
  "home.how": { id: "Cara kerjanya", en: "How it works" },
  "home.howLead": {
    id: "Skill dimuat agen sebagai instruksi. Kamu tetap yang memutuskan dan meninjau.",
    en: "Your agent loads skills as instructions. You still decide and review.",
  },
  "home.step1.title": { id: "Pilih dan tinjau", en: "Choose and review" },
  "home.step1.body": {
    id: "Baca SKILL.md sebelum menginstal. Skill adalah instruksi yang dijalankan agen.",
    en: "Read SKILL.md before installing. A skill is an instruction your agent runs.",
  },
  "home.step2.title": { id: "Instal ke agenmu", en: "Install into your agent" },
  "home.step2.body": {
    id: "Gunakan CLI dengan --agent atau --dir, atau salin foldernya secara manual.",
    en: "Use the CLI with --agent or --dir, or copy the folder manually.",
  },
  "home.step3.title": { id: "Minta hasil, lalu audit", en: "Ask for work, then audit" },
  "home.step3.body": {
    id: "Setiap skill berakhir dengan checklist. Gunakan itu untuk menilai hasilnya.",
    en: "Every skill ends with a checklist. Use it to judge the result.",
  },
  "home.ctaTitle": { id: "Bangun halaman yang tidak bisa dipakai pesaingmu.", en: "Build a page your competitor cannot reuse." },
  "home.ctaLead": {
    id: "Mulai dari skill anti-slop, lalu turun ke fondasi. Semua berlisensi MIT untuk karya baru.",
    en: "Start with the anti-slop skill, then go down to fundamentals. New work is MIT licensed.",
  },

  "skills.title": { id: "Galeri skill", en: "Skill gallery" },
  "skills.lead": {
    id: "Filter berdasarkan tema, kategori, dan tag. Setiap kartu menuju instruksi lengkap, preview, dan atribusi.",
    en: "Filter by theme, category, and tag. Every card leads to the full instructions, preview, and attribution.",
  },
  "skills.search": { id: "Cari", en: "Search" },
  "skills.searchPlaceholder": { id: "Nama, tag, atau kata kunci", en: "Name, tag, or keyword" },
  "skills.filterTheme": { id: "Tema", en: "Theme" },
  "skills.filterCategory": { id: "Kategori", en: "Category" },
  "skills.filterTag": { id: "Tag", en: "Tag" },
  "skills.results": { id: "skill ditemukan", en: "skills found" },
  "skills.empty": {
    id: "Tidak ada skill yang cocok. Hapus beberapa filter.",
    en: "No skills match. Clear some filters.",
  },
  "skills.page": { id: "Halaman", en: "Page" },
  "skills.prev": { id: "Sebelumnya", en: "Previous" },
  "skills.next": { id: "Berikutnya", en: "Next" },

  "skill.install": { id: "Instal skill ini", en: "Install this skill" },
  "skill.preview": { id: "Preview", en: "Preview" },
  "skill.previewNote": {
    id: "Preview mandiri di dalam panel. Tanpa modal, tanpa dependensi eksternal.",
    en: "A standalone preview in a panel. No modal, no external dependencies.",
  },
  "skill.metadata": { id: "Metadata", en: "Metadata" },
  "skill.upstreamCommit": { id: "Commit upstream", en: "Upstream commit" },
  "skill.originalLicense": { id: "Lisensi asli", en: "Original license" },
  "skill.upstreamLicenses": { id: "Lisensi disertakan", en: "Bundled licenses" },
  "skill.notice": { id: "NOTICE disertakan", en: "NOTICE included" },
  "skill.reviewWarning": {
    id: "Tinjau skill sebelum menginstal. Agen akan menjalankan instruksi ini.",
    en: "Review the skill before installing. Your agent will run these instructions.",
  },
  "skill.tags": { id: "Tag", en: "Tags" },
  "skill.themes": { id: "Tema yang didukung", en: "Supported themes" },
  "skill.viewSource": { id: "Lihat sumber", en: "View source" },
  "skill.docs": { id: "Dokumen skill", en: "Skill document" },
  "skill.attribution": { id: "Atribusi", en: "Attribution" },
  "skill.derived": {
    id: "Karya turunan yang ditulis ulang. Teks lisensi asli disertakan di folder skill.",
    en: "A rewritten derivative work. The original license text is bundled in the skill folder.",
  },
  "skill.original": {
    id: "Karya asli untuk repositori ini.",
    en: "Original work for this repository.",
  },

  "themes.title": { id: "Katalog tema", en: "Theme catalogue" },
  "themes.lead": {
    id: "Sebelas arah visual. Pilih berdasarkan pekerjaan, bukan suasana hati. Semua pasangan teks lolos WCAG AA.",
    en: "Eleven visual directions. Choose by job, not by mood. Every text pair passes WCAG AA.",
  },
  "themes.primary": { id: "Tema utama situs", en: "Primary site theme" },
  "themes.useWhen": { id: "Kapan dipakai", en: "When to use" },
  "themes.avoidWhen": { id: "Kapan dihindari", en: "When to avoid" },
  "themes.antiPatterns": { id: "Larangan", en: "Anti-patterns" },
  "themes.palette": { id: "Palet", en: "Palette" },
  "themes.light": { id: "Light", en: "Light" },
  "themes.dark": { id: "Dark", en: "Dark" },
  "themes.contrast": { id: "Kontras terukur", en: "Measured contrast" },
  "themes.depth": { id: "Aturan kedalaman", en: "Depth rule" },
  "themes.radius": { id: "Radius", en: "Radius" },
  "themes.preview": { id: "Preview tema", en: "Theme preview" },
  "themes.pair": { id: "Pasangan", en: "Pair" },
  "themes.ratio": { id: "Rasio", en: "Ratio" },
  "themes.status": { id: "Status", en: "Status" },
  "themes.pass": { id: "Lulus", en: "Pass" },
  "themes.fail": { id: "Gagal", en: "Fail" },
  "themes.mode": { id: "Mode", en: "Mode" },
  "themes.chooseNote": {
    id: "Tema yang gagal kontras bukan tema; itu usulan palet. Generator menolak build bila ada pasangan di bawah ambang.",
    en: "A theme that fails contrast is not a theme; it is a palette proposal. The generator fails the build when a pair is below threshold.",
  },

  "install.title": { id: "Instalasi", en: "Installation" },
  "install.lead": {
    id: "Tiga jalur: CLI skills umum, paket npm, atau salin manual. Pilih satu.",
    en: "Three paths: the general skills CLI, the npm package, or a manual copy. Pick one.",
  },
  "install.path1": { id: "1 · CLI skills umum", en: "1 · General skills CLI" },
  "install.path1Body": {
    id: "Repositori mengikuti konvensi Agent Skills sehingga dapat dipasang dengan CLI skills umum: dresar/ui-skill-2045.",
    en: "The repository follows the Agent Skills convention so it can be installed with the general skills CLI: dresar/ui-skill-2045.",
  },
  "install.path2": { id: "2 · Paket npm", en: "2 · npm package" },
  "install.path2Body": {
    id: "CLI tanpa dependensi runtime. Tanpa --force, folder yang sudah ada tidak pernah ditimpa.",
    en: "A CLI with no runtime dependencies. Without --force, existing folders are never overwritten.",
  },
  "install.path3": { id: "3 · Manual", en: "3 · Manual" },
  "install.path3Body": {
    id: "Clone, salin folder, atau unduh ZIP dari GitHub Releases.",
    en: "Clone, copy a folder, or download a ZIP from GitHub Releases.",
  },
  "install.agents": { id: "Lokasi per agen", en: "Locations per agent" },
  "install.warning": {
    id: "Tinjau skill sebelum menginstal. Skill berisi instruksi yang akan dijalankan agenmu, termasuk potensi menulis file.",
    en: "Review skills before installing. Skills contain instructions your agent will run, including possible file writes.",
  },
  "install.publishNote": {
    id: "Paket npm belum dipublikasikan. Sampai pemilik menjalankan npm publish, gunakan node packages/cli/bin/ui-skill-2045.js dari hasil clone.",
    en: "The npm package is not published yet. Until the owner runs npm publish, use node packages/cli/bin/ui-skill-2045.js from a clone.",
  },

  "contribute.title": { id: "Kontribusi", en: "Contribute" },
  "contribute.lead": {
    id: "Kualitas dan atribusi lebih penting daripada jumlah. Jangan menyalin tanpa lisensi permisif.",
    en: "Quality and attribution matter more than quantity. Never copy without a permissive license.",
  },
  "contribute.step1": { id: "Verifikasi sumber", en: "Verify the source" },
  "contribute.step1Body": {
    id: "Catat URL, lisensi, dan commit SHA. Tanpa lisensi berarti tidak boleh disalin.",
    en: "Record the URL, license, and commit SHA. No license means it must not be copied.",
  },
  "contribute.step2": { id: "Tulis ulang", en: "Rewrite" },
  "contribute.step2Body": {
    id: "Baca sampai habis, gabungkan yang tumpang tindih, lalu tulis prosedur yang dapat dieksekusi.",
    en: "Read it fully, merge overlaps, then write an executable procedure.",
  },
  "contribute.step3": { id: "Lengkapi atribusi", en: "Complete attribution" },
  "contribute.step3Body": {
    id: "Simpan lisensi asli, NOTICE, dan MODIFICATIONS.md. Jangan mengganti copyright upstream.",
    en: "Keep the original license, NOTICE, and MODIFICATIONS.md. Never replace upstream copyright.",
  },
  "contribute.step4": { id: "Jalankan gerbang", en: "Run the gates" },
  "contribute.step4Body": {
    id: "npm run build:skills, npm run validate, dan npm test harus lulus sebelum PR.",
    en: "npm run build:skills, npm run validate, and npm test must pass before a PR.",
  },
  "contribute.commands": { id: "Perintah", en: "Commands" },

  "sources.title": { id: "Sumber dan atribusi", en: "Sources and attribution" },
  "sources.lead": {
    id: "Setiap fakta lisensi dan commit diverifikasi langsung di GitHub pada 4 November 2026.",
    en: "Every license and commit fact was verified directly on GitHub on 4 November 2026.",
  },
  "sources.note": {
    id: "Repositori ini tidak berafiliasi dengan pemilik sumber. Dokumen ini bukan nasihat hukum.",
    en: "This repository is not affiliated with the source owners. This document is not legal advice.",
  },

  "footer.about": { id: "Tentang", en: "About" },
  "footer.aboutBody": {
    id: "Kurasi skill UI untuk agen. Karya baru MIT; komponen turunan tetap pada lisensi aslinya.",
    en: "Curated UI skills for agents. New work is MIT; derivative components stay under their original licenses.",
  },
  "footer.resources": { id: "Sumber daya", en: "Resources" },
  "footer.legal": { id: "Legal", en: "Legal" },
  "footer.built": { id: "Dibangun dengan prosedur, bukan template.", en: "Built with procedure, not a template." },
  "footer.notLegal": { id: "Bukan nasihat hukum.", en: "Not legal advice." },

  "notFound.title": { id: "Halaman tidak ditemukan", en: "Page not found" },
  "notFound.lead": {
    id: "Tautan mungkin sudah berubah. Coba galeri skill atau beranda.",
    en: "The link may have changed. Try the skill gallery or the home page.",
  },
  "notFound.cta": { id: "Ke beranda", en: "Go home" },

  "meta.description": {
    id: "18 skill Agent Skills untuk UI aksesibel, disengaja, dan tidak generik. 11 tema, dua bahasa, preview mandiri.",
    en: "18 Agent Skills for accessible, intentional, non-generic UI. 11 themes, two languages, standalone previews.",
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const saved = window.localStorage.getItem("ui-skill-lang");
    if (saved === "en" || saved === "id") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    window.localStorage.setItem("ui-skill-lang", next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: (key: string) => dictionary[key]?.[lang] ?? key,
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
