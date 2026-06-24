import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "hybrid",

  server: {
    host: true
  },

  adapter: cloudflare()
});