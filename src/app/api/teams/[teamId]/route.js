import teams from '../../../../../data/teams';

export async function GET(request, { params }) {
  const { teamId } = params;
  const team = teams.find((t) => t.title === teamId);
  if (!team) {
    return new Response(JSON.stringify({ message: 'Team not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return new Response(JSON.stringify(team), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
