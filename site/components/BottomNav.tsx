"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BASE_PATH } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const items = [
  {
    href: "/",
    key: "nav.home",
    icon: (
      <>
        <path d="M3.5 10.5 12 3.8l8.5 6.7v9.2a1 1 0 0 1-1 1h-5v-6.5h-5v6.5h-5a1 1 0 0 1-1-1v-9.2Z" />
      </>
    ),
  },
  {
    href: "/skills",
    key: "nav.skills",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </>
    ),
  },
  {
    href: "/themes",
    key: "nav.themes",
    icon: (
      <>
        <path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.6 0 2.3-.9 2.3-2 0-.7-.4-1.2-.4-1.9 0-1 .8-1.8 1.9-1.8h1.4a3.8 3.8 0 0 0 3.8-3.8c0-4.1-4-7.5-9-7.5Z" />
        <circle cx="8" cy="10" r="1" />
        <circle cx="11" cy="7" r="1" />
        <circle cx="15" cy="7.5" r="1" />
      </>
    ),
  },
  {
    href: "/install",
    key: "nav.install",
    icon: (
      <>
        <path d="M12 3.5v11" />
        <path d="m7.5 10 4.5 4.5 4.5-4.5" />
        <path d="M4 16.5v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </>
    ),
  },
  {
    href: "/sources",
    key: "nav.sources",
    icon: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      </>
    ),
  },
];

export function BottomNav() {
  const { t } = useLanguage();
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(window.location.pathname.replace(BASE_PATH, "") || "/");
  }, []);

  return (
    <nav className="bottom-nav" aria-label="Main">
      {items.map((item) => {
        const active = item.href === "/" ? path === "/" : path.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item${active ? " active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {item.icon}
            </svg>
            <span>{t(item.key)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
