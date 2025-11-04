import * as React from "react";
import { Container, Box, ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Values from "./sections/Values";
import Footer from "./sections/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    allVariants: {
      fontFamily: "'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    },
  },
});

export default function App() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "#0D0D0D",
          minHeight: "100dvh",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
        }}
      >
        <Box 
          sx={{ 
            bgcolor: "#F6F7F9",
          }}
        >
          <NavBar />
          <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
            <Hero />
          </Container>
          <Values />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
