export function SkillGlyph({ category, size = 19 }: { category: string; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (category === "components") {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </svg>
    );
  }
  if (category === "interaction") {
    return (
      <svg {...common}>
        <path d="M4 4.5 19.5 12 12 14l-2 6.5L4 4.5Z" />
      </svg>
    );
  }
  if (category === "quality") {
    return (
      <svg {...common}>
        <path d="m4.5 12.5 5 5L20 6.5" />
        <path d="M4.5 19.5h15" />
      </svg>
    );
  }
  if (category === "engineering") {
    return (
      <svg {...common}>
        <path d="m8.5 8-5 4 5 4M15.5 8l5 4-5 4M13.5 4.5l-3 15" />
      </svg>
    );
  }
  if (category === "theme") {
    return (
      <svg {...common}>
        <path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.6 0 2.3-.9 2.3-2 0-.7-.4-1.2-.4-1.9 0-1 .8-1.8 1.9-1.8h1.4a3.8 3.8 0 0 0 3.8-3.8c0-4.1-4-7.5-9-7.5Z" />
        <circle cx="8" cy="10" r="1" />
        <circle cx="11" cy="7" r="1" />
        <circle cx="15" cy="7.5" r="1" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3.2 20 7.6 12 12 4 7.6l8-4.4Z" />
      <path d="M4 12l8 4.4 8-4.4" />
      <path d="M4 16.4 12 21l8-4.6" />
    </svg>
  );
}
