import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

export const GET: APIRoute = () => {
  const pages = ["/", "/privacidade"];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `  <url>
    <loc>${new URL(path, siteConfig.seo.siteUrl).toString()}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

