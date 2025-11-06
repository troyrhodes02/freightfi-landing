import { Box, Typography } from "@mui/material";
import Image from "../components/Image";

export default function FinancialSystem() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, md: 6 },
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0,
              borderRadius: "20px",
              background:
                "linear-gradient(180.33deg, rgba(223, 250, 238, 0.16) 25.04%, rgba(209, 222, 250, 0.16) 99.73%)",
              border: "1px solid #EBEBEB",
              height: "40px",
              width: "fit-content",
            }}
          >
            <Image
              src="/images/spark.svg"
              alt="Spark icon"
              sx={{
                width: "24px",
                height: "24px",
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                color: "#4B4B4B",
                whiteSpace: "nowrap",
              }}
            >
              What makes FreightFi different
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: 32, sm: 40, md: 48 },
              color: "#000000",
              lineHeight: 1.2,
              mt: 2,
            }}
          >
            The Complete Financial
            <br />
            System for Freight
          </Typography>
        </Box>

        <Box sx={{ pl: { xs: 0, md: 20 } }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: "#323232",
              maxWidth: 445,
            }}
          >
            FreightFi connects every invoice, document, and transaction into one
            verified, automated flow giving your team control, accuracy, and
            cash flow clarity.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, md: 8 },
          alignItems: "center",
          mt: { xs: 5, md: 16 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: 20, sm: 22, md: 32 },
              color: "#0D0D0D",
            }}
          >
            All your clients, carriers, and
            <br />
            settlements perfectly in sync
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: 2,
              bgcolor: "#DFE0E1",
              my: 3,
            }}
          />

          <Box>
            {[
              "AI-assisted matching of invoices and settlements",
              "Automatic reconciliation across accounts receivable and payable",
              "Eliminate double entry between TMS, QuickBooks, and spreadsheets",
              "Shared financial ledger for ops and finance",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.75,
                  mb: 2.5,
                }}
              >
                <Image
                  src="/images/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  sx={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: 14, md: 16 },
                    color: "#1E1E1E",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              width: "100%",
              height: { xs: "auto", md: "auto" },
              borderRadius: 6,
              bgcolor: "rgba(177, 178, 178, 0.12)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              aspectRatio: { xs: "16 / 9", md: "auto" },
              py: "16px",
              minHeight: { xs: "auto", md: 0 },
            }}
          >
            <Image
              src="/images/recent-load-activity.svg"
              alt="Recent Load Activity"
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: 580, md: 600 },
                height: "auto",
                borderRadius: 6,
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
          mt: { xs: 5, md: 16 },
        }}
      >
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "auto", md: "auto" },
              borderRadius: 6,
              bgcolor: "rgba(177, 178, 178, 0.12)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              aspectRatio: { xs: "4 / 3", md: "auto" },
              py: { xs: "12px", md: "16px" },
              px: { xs: "12px", md: "0px" },
              minHeight: { xs: "auto", md: 0 },
            }}
          >
            <Image
              src="/images/four-square.svg"
              alt="Every invoice verified"
              sx={{
                width: "100%",
                maxWidth: { xs: "90%", sm: 540, md: 580 },
                height: "auto",
                borderRadius: 6,
                display: "block",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ pl: { xs: 2, md: 20 }, pr: { xs: 2, sm: 3, md: 0 }, order: { xs: 1, md: 2 } }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: 20, sm: 22, md: 32 },
              color: "#0D0D0D",
            }}
          >
            Every invoice verified. Every
            <br />
            margin visible
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              color: "#4B4B4B",
              my: 2,
            }}
          >
            See every receivable, payable, and margin instantly
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: 2,
              bgcolor: "#DFE0E1",
              my: 3,
            }}
          />

          <Box>
            {[
              "Catch billing discrepancies before invoices go out",
              "Machine learning verification of documents and rates",
              "Live DSO and margin tracking across clients and carriers",
              "Auto-flagged exceptions for faster resolution",
              "Unified financial dashboard across teams & partners",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.75,
                  mb: 2.5,
                }}
              >
                <Image
                  src="/images/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  sx={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: 14, md: 16 },
                    color: "#1E1E1E",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, md: 8 },
          alignItems: "center",
          mt: { xs: 5, md: 16 },
        }}
      >
        <Box sx={{ order: { xs: 1, md: 1 } }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: 20, sm: 22, md: 32 },
              color: "#0D0D0D",
            }}
          >
            Payments that move as fast
            <br />
            as your freight
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              color: "#4B4B4B",
              my: 2,
            }}
          >
            Eliminate disputes and build financial trust
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: 2,
              bgcolor: "#DFE0E1",
              my: 3,
            }}
          />

          <Box>
            {[
              "Automated settlement creation and approvals",
              "Predictable payment timelines for all parties",
              "Verified data for faster fund release and trust",
              "Accurate, auditable transaction history",
              "Unified financial dashboard across teams & partners",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.75,
                  mb: 2.5,
                }}
              >
                <Image
                  src="/images/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  sx={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: 14, md: 16 },
                    color: "#1E1E1E",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ order: { xs: 2, md: 2 } }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "auto", md: "auto" },
              borderRadius: 6,
              bgcolor: "rgba(177, 178, 178, 0.12)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              aspectRatio: { xs: "16 / 9", md: "auto" },
              py: "16px",
              minHeight: { xs: "auto", md: 0 },
            }}
          >
            <Image
              src="/images/release-payment.svg"
              alt="Release Payment"
              sx={{
                width: "100%",
                maxWidth: { xs: "90%", sm: 540, md: 575 },
                height: "auto",
                borderRadius: 6,
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, sm: 6, md: 8 },
          alignItems: "center",
          mt: { xs: 5, md: 16 },
        }}
      >
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "auto", md: "auto" },
              borderRadius: 6,
              bgcolor: "rgba(177, 178, 178, 0.12)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              aspectRatio: { xs: "16 / 8", md: "auto" },
              py: { xs: "4px", md: "16px" },
              minHeight: { xs: "auto", md: 0 },
            }}
          >
            <Image
              src="/images/low-rate-credit-line.svg"
              alt="Turn verified data into liquidity"
              sx={{
                width: "100%",
                maxWidth: { xs: "95%", sm: 600, md: 650 },
                height: "auto",
                borderRadius: 6,
                display: "block",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ pl: { xs: 2, md: 20 }, pr: { xs: 2, sm: 3, md: 0 }, order: { xs: 1, md: 2 } }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: 20, sm: 22, md: 32 },
              color: "#0D0D0D",
            }}
          >
            Turn verified data into
            <br />
            liquidity
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: 2,
              bgcolor: "#DFE0E1",
              my: 3,
            }}
          />

          <Box>
            {[
              "Identify margin leaks and capital opportunities",
              "AI-powered cash flow forecasting & insights",
              "Build credit readiness with verified payment data",
              "Unlock faster funding and embedded credit options",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.75,
                  mb: 2.5,
                }}
              >
                <Image
                  src="/images/arrow.svg"
                  alt=""
                  aria-hidden="true"
                  sx={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: 14, md: 16 },
                    color: "#1E1E1E",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  );
}

