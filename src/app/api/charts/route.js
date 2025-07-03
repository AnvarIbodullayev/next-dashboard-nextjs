import chartData from "../../../../data/chartData";

export async function GET(request) {
  return new Response(JSON.stringify(chartData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
