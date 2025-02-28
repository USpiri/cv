import { getCollection } from "astro:content";

const workData = await getCollection("work");

export async function GET() {
  return new Response(JSON.stringify(workData[0].data));
}
