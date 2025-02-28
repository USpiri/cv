import { getCollection } from "astro:content";

const educationData = await getCollection("education");

export async function GET() {
  return new Response(JSON.stringify(educationData[0].data));
}
