import { skills } from "@cv/skills.json";

export async function GET() {
  const data = skills;
  return new Response(JSON.stringify(data));
}
