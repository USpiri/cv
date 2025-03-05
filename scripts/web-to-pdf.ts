import puppeteer from "puppeteer";
import { defaultLang, languages as defaultLanguages } from "../src/i18n/ui.ts";

// Defaul lang en = "";
const languages = Object.keys(defaultLanguages).map((l) =>
  l === defaultLang ? "" : l,
);

const web = "http://localhost:4321";

async function print(lang: string) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`${web}/${lang}`, { waitUntil: "networkidle2" });

    await page.evaluate(() => {
      const toolbar = document.querySelector("astro-dev-toolbar");
      if (toolbar) {
        toolbar.remove();
      }
    });

    await page.pdf({
      path: `public/cv${lang.length ? `-${lang}` : ""}.pdf`,
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    console.log("DONE: ", lang.length ? lang : "default language");
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  for (const lang of languages) {
    await print(lang);
  }
}
main();
