import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

export const GET: APIRoute = () => {
  const shortName = `Nutri ${siteConfig.professionalName.split(" ")[0]}`;
  const body = {
    name: siteConfig.brandName,
    short_name: shortName,
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f0e6",
    theme_color: "#f6f0e6",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };

  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8"
    }
  });
};
