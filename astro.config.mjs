import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { defaultLang, languages } from "./src/i18n/ui.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://cv.uspiri.com",
  base: "/",
  i18n: {
    locales: [...Object.keys(languages)],
    defaultLocale: defaultLang,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
