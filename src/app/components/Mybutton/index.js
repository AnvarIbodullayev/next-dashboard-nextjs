import theme from "@/app/styles/theme";
import { Button, styled, Typography } from "@mui/material";
import React, { Children } from "react";

const StyledBtn = styled("button")({
  background: "#fff",
  width: "100%",
  padding: "0.3rem 0",
  color: theme.palette.primary.main,
  boxShadow: 0,
  border: 0,
  cursor: "pointer",
  borderRadius: 4,
  transition: "ease 0.2s",
  "&:hover": {
    background: theme.palette.primary.main,
    color: "#fff",
  },
});

export default function Mybutton({ children }) {
  return (
    <StyledBtn size="small" variant="contained">
      <Typography variant="caption">{children}</Typography>
    </StyledBtn>
  );
}
