import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Strength() {
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
        console.error("Api Error: ", err);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <LinearProgress color="inherit" />;

  return (
    <Box
      sx={{ border: "1px solid #cfcccc", borderRadius: 2, p: 3, height: 350 }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Teams Strength
      </Typography>
      <Box>
        <Grid container spacing={2}>
          {teams.map((item, index) => (
            <Grid
              key={index}
              item
              size={{ xs: 3, md: 3 }}
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">{item.owner}</Typography>
              <Box
                sx={{
                  width: "100%",
                  height: `${item.value}rem`,
                  bgcolor: `${item.color}`,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                }}
              ></Box>
              <Typography variant="caption">{item.value}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {teams.map((item, index) => (
            <Grid
              key={index}
              item
              size={{ xs: 6, md: 6 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: 1,
                  bgcolor: `${item.color}`,
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  mr: 2,
                }}
              >
                {item.owner}
              </Box>
              <Typography variant="body2">{item.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
