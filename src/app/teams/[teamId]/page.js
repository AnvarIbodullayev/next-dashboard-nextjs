import Layout from "@/app/components/Dashboard";
import { Box, Chip, Divider, Typography } from "@mui/material";
import BackButton from "./BackButton";

const getBaseUrl = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_BASE_URL;

// export async function generateStaticParams() {
//   const baseUrl = getBaseUrl();
//   const res = await fetch(`${baseUrl}/api/teams`);
//   const teams = await res.json();

//   return teams.map((team) => ({
//     teamId: team.title,
//   }));
// }

export const dynamic = "force-dynamic";

export default async function TeamDetails({ params }) {
  const baseUrl = getBaseUrl();

  const { teamId } = params;
  const res = await fetch(`${baseUrl}/api/teams/${teamId}`);
  const team = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch team data with id ${teamId}`);
  }

  return (
    <Layout>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" component="h1">
          Team: {teamId}
          <BackButton />
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box>
        <Typography sx={{ mb: 1, fontWeight: "bold" }}>
          Users in team:
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {team.subscribed.map((user, index) => (
            <Chip
              key={index}
              label={user}
              variant="outlined"
              color="primary"
              sx={{ fontWeight: "medium" }}
            />
          ))}
        </Box>
      </Box>
    </Layout>
  );
}
