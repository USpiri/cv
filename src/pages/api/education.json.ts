import { education } from "@cv/education.json";

export async function GET() {
  const data = education;
  return new Response(JSON.stringify(data));
}
