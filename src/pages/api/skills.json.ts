import { getCollection } from "astro:content";

const skillsData = await getCollection("skills");

export async function GET() {
  return new Response(JSON.stringify(skillsData[0].data));
}
