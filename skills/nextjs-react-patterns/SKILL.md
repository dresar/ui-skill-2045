---
name: nextjs-react-patterns
description: Use when building Next.js App Router interfaces, deciding server versus client components, handling streaming, forms, metadata, or fixing hydration and data-fetching mistakes.
description_id: Gunakan saat membangun antarmuka Next.js App Router, menentukan server versus client component, menangani streaming, form, metadata, atau memperbaiki kesalahan hidrasi dan pengambilan data.
version: 1.0.0
license: MIT
author: ui-skill-2045 contributors
category: engineering
themes: [soft-blue-neumorphism, glassmorphism, aurora-gradient, minimal-monochrome, brutalist-modern, cyber-neon, dark-neumorphism, bento-grid, editorial-serif, claymorphism, blueprint-grid]
tags: [nextjs, react, app-router, server-components, streaming, forms, metadata]
source: original
original_author: ui-skill-2045 contributors
original_license: MIT
reference: https://github.com/vercel-labs/agent-skills
reference_commit: 1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62
---

# Next.js and React Patterns

This skill is **original writing**. It references the public documentation of Next.js and React.
It does not copy `vercel-labs/agent-skills`, which has no license file; see
`docs/rejected-sources.md`.

## When to use

- Starting a Next.js App Router project.
- A page is slow because everything is a client component.
- Hydration mismatches, `useEffect` waterfalls, or unnecessary `"use client"`.
- Forms need progressive enhancement, validation, and pending states.
- Metadata, sitemap, static export, or basePath configuration is wrong.

## Inputs to ask for

1. Next.js version and router (App Router assumed).
2. Rendering target: static export, Node server, or edge runtime.
3. Data sources and authentication.
4. Whether the page must work without JavaScript.
5. Deployment target and base path.

## Decision rules

### Server vs client

| Need | Choice |
|---|---|
| Fetch data, read secrets, access the filesystem | Server Component |
| Static content, layout, metadata | Server Component |
| `useState`, `useEffect`, event handlers, browser APIs | Client Component |
| A small interactive island inside static content | Client Component at the leaf |
| A chart, editor, map | Client Component, dynamically imported |
| Theme toggle, menu, tabs | Client Component |

- **Push `"use client"` to the leaves.** A page-level directive turns the whole subtree into
  client code.
- **Never import a server-only module into a client component.** Use `server-only`.
- **Do not pass non-serializable values across the boundary.** Functions, classes, and Dates
  need explicit handling.

### Data fetching

- Fetch on the server when possible. Avoid `useEffect` fetching for initial content.
- Parallelize independent requests with `Promise.all`.
- Use `cache`/`revalidate` deliberately; do not cache user-specific data globally.
- Stream slow sections with `Suspense` and a skeleton that matches the final layout.
- Handle error and empty states at the segment level with `error.tsx` and `not-found.tsx`.

### Forms

- Prefer Server Actions or route handlers over client-side fetch for mutations.
- Use `useFormStatus` for pending UI and `useActionState` for validation results.
- Keep the submit button width stable while pending.
- Validate on the server; client validation is an enhancement.
- Return field-level errors and focus the first invalid field.

### Metadata and SEO

- Use the Metadata API (`export const metadata` / `generateMetadata`).
- One `<h1>` per page; descriptive title and description.
- Add `alternates.canonical`, Open Graph, and a sitemap.
- For static export, ensure metadata does not depend on request headers.

### Static export

```ts
// next.config.ts
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/ui-skill-2045",
  assetPrefix: "/ui-skill-2045/",
};
export default nextConfig;
```

- `output: "export"` forbids dynamic server features at request time.
- Every dynamic route needs `generateStaticParams()`.
- Use `<a>` or the framework `Link` consistently with `basePath`.
- Add `.nojekyll` for GitHub Pages.

## Workflow

1. **Map the tree.** Mark each route as static, dynamic, or client-interactive.
2. **Write the server shell first.** Layout, metadata, data, and static content.
3. **Add client islands** only where interaction exists.
4. **Add loading and error boundaries** at the segment that can fail.
5. **Test without JavaScript** for content and navigation.
6. **Profile the build.** Check the first-load JS per route.
7. **Verify hydration** in the browser console and with a production build.

## Anti-patterns

- `"use client"` at the top of every page.
- Fetching in `useEffect` what could be fetched on the server.
- A global context provider wrapping the whole app for one toggle.
- Sequential `await` for independent requests.
- `window` or `localStorage` accessed during render.
- Dynamic routes without `generateStaticParams` in a static export.
- Metadata hard-coded per page with duplicated strings.
- Using `next/image` with remote hosts that are not configured.
- Ignoring `basePath` in asset URLs.

## Defaults

| Decision | Default |
|---|---|
| Router | App Router |
| Components | Server by default |
| Mutations | Server Actions |
| Loading | `Suspense` + layout-matched skeleton |
| Errors | `error.tsx` per segment |
| Images | `next/image`, explicit dimensions |
| Fonts | `next/font` self-hosted |
| Export | `output: "export"` when hosting is static |
| Base path | Configured once, referenced everywhere |

## Pre-handoff checklist

- [ ] `"use client"` only on interactive leaves.
- [ ] No server secret reaches a client bundle.
- [ ] Independent fetches run in parallel.
- [ ] Every route has loading, error, and not-found behavior.
- [ ] Static export builds with `generateStaticParams`.
- [ ] Metadata, canonical, and OG tags are present.
- [ ] `basePath` is respected in links and assets.
- [ ] First-load JS checked per route.
- [ ] No hydration warnings in production.

## Example prompt

> “Dashboard Next.js ini seluruhnya `"use client"` dan datanya di-fetch di `useEffect`.
> Ubah ke App Router dengan server components, streaming, dan form yang tetap bekerja saat
> JavaScript lambat.”

Expected result: a server-rendered shell, parallel data fetching, `Suspense` boundaries with
skeletons, small client islands for filters and menus, and a Server Action form with pending
and error states.

## Bahasa Indonesia

**Kapan dipakai:** saat membangun UI Next.js App Router atau memperbaiki hidrasi, data
fetching, dan boundary server/client.

**Langkah:** petakan route → tulis shell server → tambah client island di daun → tambah
loading/error boundary → uji tanpa JavaScript → periksa JS first-load → verifikasi hidrasi di
build produksi.

**Default:** server component secara default, Server Actions untuk mutasi, `Suspense` dengan
skeleton, `output: "export"` untuk hosting statis.

**Larangan:** `"use client"` di seluruh halaman, fetch di `useEffect` untuk konten awal,
provider global untuk satu toggle, `await` berurutan untuk request independen, mengabaikan
`basePath`.

## Attribution dan lisensi

Ditulis dari dokumentasi publik Next.js/React dan pengalaman implementasi. **Tidak ada teks
atau kode dari `vercel-labs/agent-skills` yang disalin**, karena repositori tersebut tidak
memiliki file lisensi. Repo itu hanya dirujuk sebagai bacaan lanjutan.
