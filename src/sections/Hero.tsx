import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Image from "../components/Image";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3, md: 12 },
      }}
    >
      <Stack spacing={{ xs: 2, md: 4 }}>
        <Box sx={{ pl: { xs: 0, md: 5 } }}>
          <Box
            role="img"
            aria-label="Trusted by leading logistics companies"
            sx={{
              width: "fit-content",
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
          <Image
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
              whiteSpace: "nowrap",
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

            <Stack 
              direction="row" 
              spacing={{ xs: 2, md: 3 }} 
              sx={{ 
                width: { xs: "100%", md: "auto" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                component={Link}
                href="https://calendar.app.google/jiyCYTJCvfRYMbyq6"
                variant="contained"
                sx={{
                  height: { xs: "40px", sm: "44px" },
                  width: "auto",
                  minWidth: "fit-content",
                  bgcolor: "#4C80F5",
                  borderRadius: "41px",
                  padding: { xs: "6px 4px 6px 12px", sm: "8px 6px 8px 16px" },
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: 500,
                  color: "#FFFFFF",
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: { xs: "10px", sm: "12px" },
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#4C80F5",
                    opacity: 0.9,
                    boxShadow: "none",
                  },
                }}
              >
                Book a Demo
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: "28px", sm: "32px" },
                    height: { xs: "28px", sm: "32px" },
                    borderRadius: "50%",
                    bgcolor: "#FFFFFF",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginLeft: "1px",
                    }}
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="#4C80F5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>
              </Button>

              <Button
                component={Link}
                href="https://calendar.app.google/jiyCYTJCvfRYMbyq6"
                variant="outlined"
                sx={{
                  height: { xs: "40px", sm: "44px" },
                  width: "auto",
                  minWidth: "fit-content",
                  border: "1px solid #B9B9B9",
                  borderRadius: "41px",
                  padding: { xs: "6px 4px 6px 12px", sm: "8px 6px 8px 16px" },
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: 500,
                  color: "#0D0D0D",
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: { xs: "10px", sm: "12px" },
                  "&:hover": {
                    border: "1px solid #B9B9B9",
                    opacity: 0.8,
                    bgcolor: "transparent",
                  },
                }}
              >
                See How It Works
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: "28px", sm: "32px" },
                    height: { xs: "28px", sm: "32px" },
                    borderRadius: "50%",
                    bgcolor: "#0D0D0D",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      marginLeft: "1px",
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
            </Stack>
          </Stack>
        </Box>
      </Stack>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          mt: { xs: 6, md: 10 },
        }}
      >
        <Image
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
        
        <Image
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
