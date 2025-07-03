// "use client";
import Layout from "@/app/components/Dashboard";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import BackButton from "./BackButton";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/api/teams");
  const teams = await res.json();

  return teams.map((team) => ({
    teamId: team.title,
  }));
}

export default async function TeamDetails({ params }) {
  const { teamId } = params;
  const res = await fetch(`http://localhost:3000/api/teams/${teamId}`);
  const team = await res.json();

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
