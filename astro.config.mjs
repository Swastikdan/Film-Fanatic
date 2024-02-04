import { defineConfig } from "astro/config";
// import vercel from '@astrojs/vercel/static';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  
});
