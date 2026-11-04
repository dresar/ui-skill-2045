import type { MetadataRoute } from "next";
import { BASE_PATH } from "@/lib/site";

const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://dresar.github.io";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${origin}${BASE_PATH}/sitemap.xml`,
  };
}
