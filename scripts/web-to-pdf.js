import puppeteer from "puppeteer";

async function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generatePDF() {
  const web = "https://cv.uspiri.com/";

  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(web, { waitUntil: "networkidle0" });
    await timeout(2000);
    await page.pdf({
      path: "./public/cv.pdf",
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    console.log("PDF generated successfully");
  } catch (e) {
    console.error(e);
  }
}
generatePDF();
