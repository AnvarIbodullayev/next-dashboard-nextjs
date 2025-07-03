"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/Dashboard";
import { Box, LinearProgress, Typography } from "@mui/material";
import theme from "../styles/theme";
import Link from "next/link";
import axios from "axios";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/teams")
      .then((res) => {
        setTeams(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed while fetching: ", err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      Teams List
      {loading ? (
        <LinearProgress color="inherit" />
      ) : (
        teams.map((team, index) => (
          <Link key={index} href={`teams/${team.title}`}>
            <Box
              key={team.title}
              sx={{
                mt: 2,
                width: 200,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: `3px solid ${theme.palette.primary.main}`,
                p: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: 1,
                    bgcolor: `${team.color}`,
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    mr: 2,
                  }}
                />
                <Typography variant="body2"> {team.title}</Typography>
              </Box>
              <Typography variant="caption">
                {" "}
                {team.subscribed.length} / users
              </Typography>
            </Box>
          </Link>
        ))
      )}
    </Layout>
  );
}
