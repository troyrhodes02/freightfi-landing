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
        bgcolor: "#ffffff",
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
        {/* Left: Brand */}
        <Stack direction="row" alignItems="center" spacing={1.5}>
          {/* F Logo */}
          <Box
            sx={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 700,
                color: "#2563EB",
                lineHeight: 1,
              }}
            >
              F
            </Typography>
          </Box>
          
          {/* FreightFi Text */}
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

        {/* Center: Nav Items (desktop only) */}
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

        {/* Right: CTA Button */}
        <Button
          variant="outlined"
          aria-label="Book a demo"
          sx={{
            borderRadius: "41px",
            border: "1px solid #E5E7EB",
            pt: "8px",
            pr: "6px",
            pb: "8px",
            pl: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textTransform: "none",
            "&:hover": {
              border: "1px solid #E5E7EB",
              bgcolor: "rgba(0, 0, 0, 0.02)",
            },
          }}
        >
          {/* CTA Text */}
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

          {/* Trailing Blue Circle with Chevron */}
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
            {/* Chevron SVG */}
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
