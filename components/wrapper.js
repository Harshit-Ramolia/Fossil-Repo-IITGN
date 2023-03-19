import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Container } from "@mui/system";
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
      </ThemeProvider>
    </>
  );
}
