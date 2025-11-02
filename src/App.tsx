import * as React from "react";
import { Container, Box, ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";

const theme = createTheme({
  typography: {
    fontFamily: "'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    allVariants: {
      fontFamily: "'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#F6F7F9", minHeight: "100dvh" }}>
        <NavBar />
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Hero />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
