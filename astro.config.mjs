import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import tsconfigPaths from "vite-tsconfig-paths";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  plugins: [tsconfigPaths()],
  integrations: [
    alpinejs({
      entrypoint: "/src/entrypoints/alpine.ts",
    }),
    tailwind(),
    sitemap(),
    partytown(),
    icon(),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
