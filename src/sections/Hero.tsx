import * as React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
      }}
    >
      <Stack spacing={{ xs: 2, md: 4 }}>
        <Box sx={{ pl: { xs: 0, md: 5 } }}>
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
            }}
          >
          <Box
            component="img"
            src="/images/trusted-emblem.svg"
            alt="Trusted shield icon"
            sx={{
              width: 16,
              height: 17,
              flexShrink: 0,
            }}
          />
          
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
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 20 },
            mb: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: 664 }, pl: { xs: 0, md: 5 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 36, sm: 44, md: 64 },
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

          <Stack spacing={3} sx={{ justifyContent: "flex-end", pl: { xs: 0, md: 6 } }}>
            <Box sx={{ maxWidth: { xs: "100%", md: 527 } }}>
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 18 },
                  fontWeight: 400,
                  color: "#4B4B4B",
                  lineHeight: 1.5,
                }}
              >
                FreightFi automates the entire financial loop in logistics helping fleets and brokers accelerate cash flow, recover loss revenue, and unlock capital when they need it most.
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} sx={{ width: { xs: "100%", md: "auto" } }}>
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
                  flex: { xs: 1, md: "0 0 auto" },
                  width: { md: "auto" },
                  "&:hover": {
                    bgcolor: "#1d4ed8",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#FFFFFF",
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
                  flex: { xs: 1, md: "0 0 auto" },
                  width: { md: "auto" },
                  "&:hover": {
                    border: "1px solid #B9B9B9",
                    bgcolor: "rgba(0, 0, 0, 0.02)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#000000",
                    lineHeight: 1,
                  }}
                >
                  See How It Works
                </Typography>
                
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

      <Box
        sx={{
          position: "relative",
          width: "100%",
          mt: { xs: 4, md: 6 },
        }}
      >
        <Box
          component="img"
          src="/images/FreightFi-dashboard-mobile.png"
          alt="FreightFi dashboard preview showing financial overview"
          sx={{
            width: "100%",
            height: "auto",
            display: { xs: "block", md: "none" },
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.style.display = "none";
          }}
        />
        
        <Box
          component="img"
          src="/images/FreightFi-dashboard.png"
          alt="FreightFi dashboard preview showing financial overview"
          sx={{
            width: "100%",
            height: "auto",
            display: { xs: "none", md: "block" },
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.style.display = "none";
          }}
        />
        
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: { xs: "180px", sm: "300px", md: "205px" },
            background: {
              xs: "linear-gradient(to top, #F6F7F9 0%, #F6F7F9 40%, rgba(246, 247, 249, 0.8) 70%, rgba(246, 247, 249, 0) 100%)",
              sm: "linear-gradient(to top, #F6F7F9 0%, #F6F7F9 35%, rgba(246, 247, 249, 0.8) 65%, rgba(246, 247, 249, 0) 100%)",
              md: "linear-gradient(to top, #F6F7F9 0%, rgba(246, 247, 249, 0.7) 70%, rgba(246, 247, 249, 0) 100%)"
            },
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}
