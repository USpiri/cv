import user from "@cv/user.json";

export async function GET() {
  const data = user;
  return new Response(JSON.stringify(data));
}
