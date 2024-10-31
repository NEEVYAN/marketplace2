import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import AboutLinks from "./components/about-links";
import SocialLinks from "./components/social-links";
import CustomerCareLinks from "./components/customer-care-links";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { Paragraph } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between";
// STYLED COMPONENT
import { Heading } from "./styles";

export default function Footer4() {
  return (
    <Box component="footer" bgcolor="white" pt={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box maxWidth={100}>
              <LazyImage src={require("../../../public/assets/images/logo2.svg")} alt="logo" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
