import { Box, Button, Typography } from "@mui/material";
import React from "react";
import NtfcnCardList from "../NtfcnCardList";
import Image from "next/image";

// NotificationCard
export default function NtfcnCard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          NotificationCard
        </Typography>
        <Typography
          variant="body2"
          color="primary.main"
          sx={{ fontWeight: 600 }}
        >
          <Button size="small" sx={{ textTransform: "none" }}>
            View All
          </Button>
        </Typography>
      </Box>
      <Box sx={{ mt: 2, height: "37vh", overflowY: "scroll" }}>
        {NtfcnCardList.map((item, index) => (
          <Box
            key={index}
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
              background: "#eeeeee87",
              borderRadius: 3,
              my: 2,
            }}
          >
            <Image src={item.img} alt="user image" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2">{item.title}</Typography>
              <Typography variant="caption" sx={{ color: "grey" }}>
                {item.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
