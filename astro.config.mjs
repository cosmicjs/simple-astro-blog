import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image(), robotsTxt()],
  site: "https://modern-astro-blog.vercel.app/",
  experimental: {
    integrations: true,
  },
});
