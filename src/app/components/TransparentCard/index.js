import { Box, Typography } from "@mui/material";
import React from "react";
import trsprtCardList from "../trsprtCardList";

// TransparentCard
export default function TrsprtCard() {
  return (
    <>
      {trsprtCardList.map((item) => (
        <Box
        key={item.top}
          bgcolor={item.color}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 2.1,
            mb: 2,
            borderRadius: 2
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {item.top}
          </Typography>
          <Typography variant="body2">{item.mid}</Typography>
          <Typography variant="caption" sx={{ color: "grey" }}>
            {item.bottom}
          </Typography>
        </Box>
      ))}
    </>
  );
}
