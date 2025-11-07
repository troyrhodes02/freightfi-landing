import { Box, Typography } from "@mui/material";
import Image from "../components/Image";

export default function Audiences() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3, md: 12 },
        bgcolor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          px: { xs: 1, sm: 2, md: 6 },
          pt: { xs: 4, md: 8 },
          maxWidth: { xs: "100%", md: "100%" },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            height: "40px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "6px", md: "8px" },
            padding: { xs: "0 12px", md: "0 16px" },
            borderRadius: "20px",
            background:
              "linear-gradient(180.33deg, rgba(223, 250, 238, 0.174) 25.04%, rgba(209, 222, 250, 0.1972) 99.73%)",
            border: "1px solid transparent",
            backgroundClip: "padding-box",
            position: "relative",
            width: "fit-content",
            maxWidth: { xs: "100%", md: "none" },
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "20px",
              padding: "1px",
              background:
                "linear-gradient(90deg, rgba(204, 232, 240, 0.78) 0%, #DFE8FB 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              pointerEvents: "none",
            },
          }}
        >
          <Image
            src="/images/neutron.svg"
            alt=""
            aria-hidden
            sx={{ width: 24, height: 24, flexShrink: 0 }}
          />
          <Typography sx={{ fontWeight: 400, fontSize: 14 }}>
            Smarter flow. Stronger control
          </Typography>
        </Box>

        <Typography
          component="h2"
          sx={{
            fontWeight: 500,
            fontSize: { xs: 28, md: 48 },
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: { xs: 280, md: 980 },
          }}
        >
          One Platform for Fleets, <br /> 3PLs, and Brokers
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: { xs: 300, md: 500 },
            color: "#1E1E1E",
            mb: { xs: 4, md: 6 },
          }}
        >
          FreightFi brings financial clarity and automation to every part of
          logistics from operations to payments.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "stretch" },
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 2, md: 4 },
          mt: { xs: 4, md: 6 },
          px: { xs: 2, sm: 2, md: 6 },
        }}
      >
        <Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: 416 },
              maxWidth: { xs: 300, sm: 340, md: 416 },
              height: { xs: "auto", md: 371 },
              borderRadius: { xs: "16px", md: "24px" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 2.5, sm: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
              backgroundColor: "#E3EBFC",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                width: { xs: 44, sm: 48, md: 56 },
                height: { xs: 44, sm: 48, md: 56 },
                borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                p: { xs: "3px", sm: "4px", md: "5px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#C6D6FB",
              }}
            >
              <Image
                src="/images/fleet-operators.svg"
                alt=""
                aria-hidden
                sx={{ width: { xs: 24, sm: 28, md: 32 }, height: { xs: 24, sm: 28, md: 32 } }}
              />
            </Box>

            <Typography sx={{ fontWeight: 500, fontSize: { xs: 20, sm: 24, md: 32 } }}>
              Fleet Operators
            </Typography>

            <Typography sx={{ fontWeight: 400, fontSize: { xs: 13, sm: 14, md: 16 }, color: "#323232" }}>
              Small to mid-sized trucking companies managing their own fleet. Automate invoicing for drivers, fuel, and maintenance.
            </Typography>

            <Box sx={{ width: "100%", height: "1px", bgcolor: "rgba(0,0,0,0.08)", mt: { xs: 1, md: 1.5 }, mb: { xs: 1.5, md: 2 } }} />

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 0.75, md: 1 }, maxWidth: { xs: "220px", md: "280px" } }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Driver Pay
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Fuel Reconciliation
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Maintenance Insights
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "90%", md: 416 },
              maxWidth: { xs: 300, sm: 340, md: 416 },
              height: { xs: "auto", md: 371 },
              borderRadius: { xs: "16px", md: "24px" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 2.5, sm: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
              backgroundColor: "#E3FCF0",
            }}
          >
            <Box
              sx={{
                width: { xs: 44, sm: 48, md: 56 },
                height: { xs: 44, sm: 48, md: 56 },
                borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                p: { xs: "3px", sm: "4px", md: "5px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#C9F7E0",
              }}
            >
              <Image
                src="/images/3pl-providers.svg"
                alt=""
                aria-hidden
                sx={{ width: { xs: 24, sm: 28, md: 32 }, height: { xs: 24, sm: 28, md: 32 } }}
              />
            </Box>

            <Typography sx={{ fontWeight: 500, fontSize: { xs: 20, sm: 24, md: 32 } }}>
              3PL Providers
            </Typography>

            <Typography sx={{ fontWeight: 400, fontSize: { xs: 13, sm: 14, md: 16 }, color: "#323232" }}>
              Third-party logistics companies coordinating complex multi-carrier operations. Streamline billing across all partners.
            </Typography>

            <Box sx={{ width: "100%", height: "1px", bgcolor: "rgba(0,0,0,0.08)", mt: { xs: 1, md: 1.5 }, mb: { xs: 1.5, md: 2 } }} />

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 0.75, md: 1 }, maxWidth: { xs: "220px", md: "280px" } }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Carrier Billing
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Client Invoicing
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Partner Sync
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "90%", md: 416 },
              maxWidth: { xs: 300, sm: 340, md: 416 },
              height: { xs: "auto", md: 371 },
              borderRadius: { xs: "16px", md: "24px" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 2.5, sm: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 1,
              backgroundColor: "#E3FBFC",
            }}
          >
            <Box
              sx={{
                width: { xs: 44, sm: 48, md: 56 },
                height: { xs: 44, sm: 48, md: 56 },
                borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                p: { xs: "3px", sm: "4px", md: "5px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#C8F9F9",
              }}
            >
              <Image
                src="/images/freight-brokers.svg"
                alt=""
                aria-hidden
                sx={{ width: { xs: 24, sm: 28, md: 32 }, height: { xs: 24, sm: 28, md: 32 } }}
              />
            </Box>

            <Typography sx={{ fontWeight: 500, fontSize: { xs: 20, sm: 24, md: 32 } }}>
              Freight Brokers
            </Typography>

            <Typography sx={{ fontWeight: 400, fontSize: { xs: 13, sm: 14, md: 16 }, color: "#323232" }}>
              Brokers connecting shippers and carriers. Manage commission flows and ensure accurate payment timing.
            </Typography>
    
            <Box sx={{ width: "100%", height: "1px", bgcolor: "rgba(0,0,0,0.08)", mt: { xs: 1, md: 1.5 }, mb: { xs: 1.5, md: 2 } }} />

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 0.75, md: 1 }, maxWidth: { xs: "220px", md: "280px" } }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Commission Tracking
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Dual Billing
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 12, md: 14 },
                  height: { xs: 24, md: 28 },
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  px: { xs: 1, md: 1.5 },
                  border: "1px solid",
                  borderColor: "#C0E7EA",
                }}
              >
                Payment Orchestration
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

