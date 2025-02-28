import { getCollection } from "astro:content";

const projectsData = await getCollection("projects");
export async function GET() {
  return new Response(JSON.stringify(projectsData[0].data));
}
