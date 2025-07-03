import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import circlechart from "../../assets/circlechart.png";
import empoyessList from "../empoyessList";

export default function Employees() {
  return (
    <Box
      sx={{
        border: "1px solid #cfcccc",
        borderRadius: 2,
        p: 3,
        height: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Employees
        </Typography>
        <Typography variant="caption">Aug 25-Sept 25</Typography>
      </Box>
      {/* card */}
      <Grid container spacing={2}>
        <Grid
          item
          size={{ xs: 12, sm: 4, md: 4 }}
          sx={{ display: "flex!important", alignItems: "flex-end" }}
        >
          <Grid container>
            {empoyessList.map((each) => (
              <Grid key={each.title} item size={{ xs: 4, sm: 12, md: 12 }} sx={{ mt: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: "15px",
                      height: "15px",
                      bgcolor: `${each.color}`,
                      borderRadius: 50,
                    }}
                  />
                  <Typography variant="body1">{each.title}</Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {each.numb}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item size={{ xs: 12, sm: 8, md: 8 }} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Image width={170} height={170} alt="circlechart"  src={circlechart} />
        </Grid>
      </Grid>
    </Box>
  );
}
