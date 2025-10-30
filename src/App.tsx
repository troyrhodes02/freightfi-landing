import * as React from "react";
import { Container, Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";

export default function App() {
  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100dvh" }}>
      <NavBar />
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Hero />
        {/* Add more sections below in order */}
      </Container>
    </Box>
  );
}
