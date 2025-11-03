import { AppBar, Toolbar, Typography, Box, Stack, Container, Link } from "@mui/material";

export default function NavBar() {
  // const navItems = ["Product", "Solutions", "About", "Resources", "Contact"];

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
      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 2, md: 4 } }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: { xs: 0, md: 5 },
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
          {/* Commened out until we have navbar options implemented */}
          {/* {navItems.map((item) => (
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
          ))} */}
        </Stack>

      {/* Commened out until we have navbar options implemented */}
        {/* <Button
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
        </Button> */}

      <Link href="https://calendar.app.google/jiyCYTJCvfRYMbyq6">
        <Box
          component="img"
          src="/images/book-a-demo.svg"
          alt="Book a Demo"
          sx={{
            display: { xs: "none", md: "block" },
            height: 44,
            width: "auto",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.9,
            },
          }}
          />
          </Link>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
