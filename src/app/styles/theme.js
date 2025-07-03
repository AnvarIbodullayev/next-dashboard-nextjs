"use client";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7661E2",
      light: "#6956E53D",
      dark: "#4D39B3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F6866A",
    },
  },
  status: {
    danger: orange[500],
  },
  typography: {
    fontFamily: "var(--font-manrope), sans-serif",
  }
});

export default theme;
