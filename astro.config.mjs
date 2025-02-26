import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://cv.uspiri.com",
  base: "/",
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});

