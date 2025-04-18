// mui-theme.tsx
"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // light blue
    },
    background: {
      default: "#121212", // dark background
      paper: "#1e1e1e",   // slightly lighter for paper
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
