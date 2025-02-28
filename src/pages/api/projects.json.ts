import { projects } from "@cv/projects.json";

export async function GET() {
  const data = projects;
  return new Response(JSON.stringify(data));
}
