import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), robotsTxt()],
  site: 'https://simple-astro-blog.vercel.app'
})
