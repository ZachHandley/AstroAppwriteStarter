import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs({
      entrypoint: "/src/entrypoints/alpine.ts",
    }),
    tailwind(),
    sitemap(),
    partytown(),
  ],
});
