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
        <Box sx={{ mt: 2 }}>
          <Container>{children}</Container>
        </Box>
        <Box p={2} bgcolor="primary.main"/>
      </ThemeProvider>
    </>
  );
}
