import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../site/out/", import.meta.url));
const port = Number(process.env.PORT ?? 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff2": "font/woff2",
};

createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", `http://localhost:${port}`);
  if (url.pathname === "/" || url.pathname === "/ui-skill-2045") {
    response.writeHead(302, { location: "/ui-skill-2045/" });
    response.end();
    return;
  }
  if (!url.pathname.startsWith("/ui-skill-2045/")) {
    response.writeHead(404, { "content-type": "text/plain" });
    response.end("Not found");
    return;
  }
  let relative = decodeURIComponent(url.pathname.slice("/ui-skill-2045/".length));
  if (relative === "" || relative.endsWith("/")) relative += "index.html";
  const target = normalize(join(root, relative));
  if (!target.startsWith(normalize(root))) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  try {
    const info = await stat(target);
    if (!info.isFile()) throw new Error("not a file");
    response.writeHead(200, {
      "content-type": types[extname(target)] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    createReadStream(target).pipe(response);
  } catch {
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    createReadStream(join(root, "404.html")).pipe(response);
  }
}).listen(port, () => {
  console.log(`Preview: http://localhost:${port}/ui-skill-2045/`);
});
