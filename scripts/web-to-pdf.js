import puppeteer from "puppeteer";

async function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Main() {
  const web = "https://cv-uspiri.vercel.app/";

  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(web, { waitUntil: "networkidle0" });
    await timeout(1000);
    await page.pdf({
      path: "public/cv.pdf",
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    console.log("DONE");
  } catch (e) {
    console.error(e);
  }
}
Main();
