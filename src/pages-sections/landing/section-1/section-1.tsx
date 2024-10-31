import { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Header from "../header";
import { H1, Paragraph, Span } from "components/Typography";
import { FlexBox } from "components/flex-box";

export default function Section1() {
  useEffect(() => {
    // Client-side navigation using window.location
    if (typeof window !== "undefined") {
      const type = localStorage.getItem("type");
      if (type === "user") {
        window.location.href = "/furniture-3";
      } else if (type === "customer") {
        window.location.href = "/market-2";
      }
    }
  }, []);

  // Navigation handler for buttons
  const handleNavigation = (type, path) => {
    localStorage.setItem("type", type);
    window.location.href = path;
  };

  return (
    <div>
      <Header />

      <Container id="section-1" sx={{ mt: 12, position: "relative" }}>
        <Box maxWidth="830px" mx="auto" mb={12} textAlign="center">
          <H1
            sx={{
              fontSize: { xs: "20px", sm: "36px", md: "40px" },
              mb: 5,
              ml: 5,
              mr: 5,
            }}
          >
            <Span>Worring about the Properties Make it Easy</Span>
            <Box color="primary.main" lineHeight={1.2}>
              Stazy
            </Box>
          </H1>

          <Paragraph
            sx={{
              fontSize: { xs: "10px", sm: "18px" },
              fontWeight: 500,
              maxWidth: "540px",
              mx: "auto",
              ml: 5,
              mr: 5,
              mb: 10,
            }}
          >
            Discover your perfect living space effortlessly — Find, explore, and secure your new home today.
          </Paragraph>

          <FlexBox justifyContent="center" mb={3}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => handleNavigation("user", "/furniture-3")}
              sx={{
                m: { xs: "0.25rem", sm: "0.5rem" },
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Book New
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => handleNavigation("customer", "/market-2")}
              sx={{
                m: { xs: "0.25rem", sm: "0.5rem" },
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Upload Property
            </Button>
          </FlexBox>
        </Box>
      </Container>
    </div>
  );
}
