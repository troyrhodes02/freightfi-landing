import * as React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Stack } from "@mui/material";

export default function NavBar() {
  const navItems = ["Product", "Solutions", "About", "Resources", "Contact"];

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      component="nav"
      aria-label="main navigation"
      sx={{
        bgcolor: "#F6F7F9",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
          py: 1.5,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            component="img"
            src="/images/FreightFi-logo.svg"
            alt="FreightFi Logo"
            sx={{
              width: 35,
              height: 35,
            }}
          />
          
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: 24,
              fontWeight: 400,
              color: "#000000",
              lineHeight: 1,
            }}
          >
            FreightFi
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                fontSize: 16,
                fontWeight: 400,
                color: "#000000",
                textTransform: "none",
                minWidth: "auto",
                px: 0,
                py: 0.5,
                "&:hover": {
                  bgcolor: "transparent",
                  opacity: 0.7,
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Stack>

        <Button
          variant="outlined"
          aria-label="Menu"
          sx={{
            display: { xs: "flex", md: "none" },
            minWidth: "auto",
            width: 48,
            height: 48,
            borderRadius: "8px",
            border: "1px solid #4C80F5",
            bgcolor: "#E9EFFD",
            alignItems: "center",
            justifyContent: "center",
            p: 0,
            "&:hover": {
              border: "1px solid #4C80F5",
              bgcolor: "#E9EFFD",
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#4C80F5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <Button
          variant="outlined"
          aria-label="Book a demo"
          sx={{
            display: { xs: "none", md: "flex" },
            borderRadius: "41px",
            border: "1px solid #E5E7EB",
            pt: "8px",
            pr: "6px",
            pb: "8px",
            pl: "16px",
            alignItems: "center",
            gap: "8px",
            textTransform: "none",
            "&:hover": {
              border: "1px solid #E5E7EB",
              bgcolor: "rgba(0, 0, 0, 0.02)",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "#000000",
              lineHeight: 1,
            }}
          >
            Book a Demo
          </Typography>

          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "14px",
              bgcolor: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="7.5"
              height="13.75"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: "block",
              }}
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="#FEFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
