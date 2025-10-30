import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
      }}
    >
      {/* Top Section - Text Content */}
      <Stack spacing={{ xs: 3, md: 0 }}>
        {/* Trusted Pill - Full width on mobile, at top on desktop */}
        <Box
          role="img"
          aria-label="Trusted by leading logistics companies"
          sx={{
            width: { xs: "100%", sm: "fit-content" },
            maxWidth: 309,
            height: 32,
            border: "1px solid #E6E6E6",
            borderRadius: "16px",
            background: "linear-gradient(90deg, #DFFAEE29 0%, #D1DEFA29 100%)",
            px: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            mb: { xs: 3, md: 5 },
          }}
        >
          {/* Shield Icon */}
          <Box
            sx={{
              width: 16,
              height: 17,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.5L2.25 4.125V8.625C2.25 12.7875 5.0625 16.6875 9 17.625C12.9375 16.6875 15.75 12.7875 15.75 8.625V4.125L9 1.5Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M6.75 9.375L8.25 10.875L11.625 7.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 400,
              color: "#000000",
              lineHeight: 1,
              whiteSpace: { xs: "normal", sm: "nowrap" },
            }}
          >
            Trusted by Leading Logistics Companies
          </Typography>
        </Box>

        {/* Two Column Layout for Desktop, Stacked for Mobile */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 10 },
            mb: { xs: 4, md: 8 },
          }}
        >
          {/* Left: Headline */}
          <Box sx={{ maxWidth: { xs: "100%", md: 664 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 36, sm: 44, md: 56 },
                fontWeight: 500,
                color: "#000000",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Close your books fast
              <br />
              Get paid even faster
            </Typography>
          </Box>

          {/* Right: Body Copy + Buttons */}
          <Stack spacing={3} sx={{ justifyContent: "flex-end" }}>
            {/* Body Copy */}
            <Box sx={{ maxWidth: { xs: "100%", md: 527 } }}>
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  fontWeight: 400,
                  color: "#4B4B4B",
                  lineHeight: 1.5,
                }}
              >
                FreightFi automates the entire financial loop in logistics helping fleets and brokers accelerate cash flow, recover loss revenue, and unlock capital when they need it most.
              </Typography>
            </Box>

            {/* Buttons Row */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              {/* Primary Button - Book a Demo */}
              <Button
                variant="contained"
                sx={{
                  height: 44,
                  borderRadius: "41px",
                  pt: "8px",
                  pr: "6px",
                  pb: "8px",
                  pl: "16px",
                  bgcolor: "#2563EB",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    bgcolor: "#1d4ed8",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#FFFFFF",
                    lineHeight: 1,
                  }}
                >
                  Book a Demo
                </Typography>
                
                {/* Chevron Circle */}
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "14px",
                    bgcolor: "rgba(255, 255, 255, 0.2)",
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
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Button>

              {/* Secondary Button - See How It Works */}
              <Button
                variant="outlined"
                sx={{
                  height: 44,
                  borderRadius: "41px",
                  pt: "8px",
                  pr: "6px",
                  pb: "8px",
                  pl: "16px",
                  border: "1px solid #B9B9B9",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": {
                    border: "1px solid #B9B9B9",
                    bgcolor: "rgba(0, 0, 0, 0.02)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#000000",
                    lineHeight: 1,
                  }}
                >
                  See How It Works
                </Typography>
                
                {/* Chevron Circle */}
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "14px",
                    bgcolor: "#000000",
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
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Bottom Section - Angled Dashboard Visual */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: 300, sm: 400, md: 500 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 4, md: 6 },
        }}
      >
        {/* Trapezoid Backdrop */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "90%",
            background: "linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)",
            clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
            boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.08)",
            zIndex: 0,
          }}
        />

        {/* Angled Dashboard Image */}
        <Box
          component="img"
          src="/images/hero-dashboard.png"
          alt="FreightFi dashboard preview showing financial overview"
          sx={{
            position: "relative",
            width: "90%",
            maxWidth: 900,
            height: "auto",
            transform: "perspective(1500px) rotateY(-5deg) rotateX(1deg)",
            boxShadow: "0px 30px 80px rgba(0, 0, 0, 0.15)",
            borderRadius: 2,
            zIndex: 1,
            // Fallback for missing image
            bgcolor: "#F5F5F5",
            minHeight: { xs: 280, sm: 380, md: 450 },
            objectFit: "cover",
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            // Graceful fallback if image doesn't exist
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Bottom Fade/Ambient Shadow */}
        <Box
          sx={{
            position: "absolute",
            bottom: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: 140,
            background:
              "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 70%)",
            filter: "blur(30px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
}
