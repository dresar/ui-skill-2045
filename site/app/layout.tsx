import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BASE_PATH } from "@/lib/site";

const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://dresar.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "ui-skill-2045 — Agent Skills for accessible, intentional UI",
    template: "%s · ui-skill-2045",
  },
  description:
    "18 Agent Skills for accessible, intentional, non-generic UI. 11 themes, two languages, standalone previews. 18 skill Agent Skills untuk UI aksesibel, disengaja, dan tidak generik.",
  keywords: [
    "agent skills",
    "SKILL.md",
    "frontend design",
    "ui ux",
    "design system",
    "accessibility",
    "tailwind",
    "shadcn",
    "nextjs",
  ],
  authors: [{ name: "ui-skill-2045 contributors" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    title: "ui-skill-2045",
    description:
      "Agent Skills for accessible, intentional UI. 18 skills, 11 themes, ID/EN, WCAG AA verified.",
    url: `${BASE_PATH}/`,
    siteName: "ui-skill-2045",
    images: [
      {
        url: `${BASE_PATH}/og.svg`,
        width: 1200,
        height: 320,
        alt: "ui-skill-2045 — Agent Skills for accessible, intentional UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ui-skill-2045",
    description: "Agent Skills for accessible, intentional UI. 18 skills, 11 themes, WCAG AA.",
    images: [`${BASE_PATH}/og.svg`],
  },
  alternates: {
    canonical: `${BASE_PATH}/`,
    languages: {
      id: `${BASE_PATH}/`,
      en: `${BASE_PATH}/`,
    },
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6edf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1726" },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem("ui-skill-mode");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.mode=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LanguageProvider>
          <a className="skip-link" href="#main">
            Langsung ke konten · Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
