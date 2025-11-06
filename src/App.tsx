import * as React from "react";
import { Container, Box, ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Values from "./sections/Values";
import TransformFlow from "./sections/TransformFlow";
import Footer from "./sections/Footer";
import FinancialSystem from "./sections/FinancialSystem";

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

  React.useEffect(() => {
    const handleScroll = () => {
      const isNearBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500;
      const htmlElement = document.documentElement;
      
      if (isNearBottom) {
        htmlElement.style.backgroundColor = '#0D0D0D';
      } else {
        htmlElement.style.backgroundColor = '#F6F7F9';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "#F6F7F9",
          minHeight: "100dvh",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1.2s ease-out, transform 1.2s ease-out",
        }}
      >
        <NavBar />
        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
          <Hero />
        </Container>
        <Values />
        <TransformFlow />
        <FinancialSystem />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
