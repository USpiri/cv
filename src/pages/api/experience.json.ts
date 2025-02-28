import { work } from "@cv/experience.json";

export async function GET() {
  const data = work;
  return new Response(JSON.stringify(data));
}
