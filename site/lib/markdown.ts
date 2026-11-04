const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const safeHref = (href: string): boolean =>
  /^(https?:\/\/|mailto:|#|\/)/i.test(href) && !/^javascript:/i.test(href);

function inline(text: string): string {
  const escaped = escapeHtml(text);
  const parts = escaped.split(/(`[^`]+`)/g);
  return parts
    .map((part) => {
      if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
        return `<code>${part.slice(1, -1)}</code>`;
      }
      return part
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
        .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label: string, href: string) => {
          if (!safeHref(href)) return label;
          const external = /^https?:\/\//i.test(href);
          return `<a href="${href}"${external ? ' rel="noopener noreferrer" target="_blank"' : ""}>${label}</a>`;
        });
    })
    .join("");
}

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export function renderMarkdown(markdown: string): string {
  const withoutFrontmatter = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
  const lines = withoutFrontmatter.split(/\r?\n/);
  const html: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.trim().startsWith("```")) {
      const language = line.trim().slice(3).trim();
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      html.push(
        `<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ""}>${escapeHtml(code.join("\n"))}</code></pre>`,
      );
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2].trim();
      html.push(`<h${level} id="${slugify(text)}">${inline(text)}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) {
      html.push("<hr>");
      index += 1;
      continue;
    }

    if (/^\s*>\s?/.test(line)) {
      const quote: string[] = [];
      while (index < lines.length && /^\s*>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^\s*>\s?/, ""));
        index += 1;
      }
      html.push(`<blockquote><p>${inline(quote.join(" "))}</p></blockquote>`);
      continue;
    }

    const next = lines[index + 1] ?? "";
    if (line.includes("|") && /^\s*\|?[\s:|-]+\|?\s*$/.test(next) && next.includes("-")) {
      const parseRow = (row: string): string[] =>
        row
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((cell) => cell.trim());
      const headers = parseRow(line);
      index += 2;
      const rows: string[][] = [];
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        rows.push(parseRow(lines[index]));
        index += 1;
      }
      html.push(
        `<table><thead><tr>${headers.map((cell) => `<th>${inline(cell)}</th>`).join("")}</tr></thead><tbody>${rows
          .map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table>`,
      );
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\s*[-*+]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*+]\s+/, ""));
        index += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ""));
        index += 1;
      }
      html.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,4})\s+/.test(lines[index]) &&
      !/^\s*[-*+]\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !/^\s*>\s?/.test(lines[index]) &&
      !lines[index].trim().startsWith("```") &&
      !/^\s*(---|\*\*\*|___)\s*$/.test(lines[index])
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    html.push(`<p>${inline(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}
