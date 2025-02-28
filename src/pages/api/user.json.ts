import { getCollection } from "astro:content";

const userData = await getCollection("user");

export async function GET() {
  return new Response(JSON.stringify(userData[0].data));
}
