import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
});
