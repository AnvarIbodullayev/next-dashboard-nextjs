import teams from "../../../../data/teams";

export async function GET(request) {
  return new Response(JSON.stringify(teams), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
