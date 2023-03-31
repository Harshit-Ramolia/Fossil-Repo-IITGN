import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import Navbar from "./navbar";
import { theme } from "./theme";

let currentTheme = createTheme(theme);
currentTheme = responsiveFontSizes(currentTheme);

export default function Wrapper({ children }) {
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <Navbar />
        <Box sx={{ mt: 2, minHeight: "88vh" }}>
          <Container>{children}</Container>
        </Box>
        <Box p={2} bgcolor="secondary.main"/>
      </ThemeProvider>
    </>
  );
}
