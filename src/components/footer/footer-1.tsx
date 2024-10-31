import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import LogoSection from "./components/logo";
import AboutLinks from "./components/about-links";
import SocialLinks from "./components/social-links";
import CustomerCareLinks from "./components/customer-care-links";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { Heading } from "./styles";

export default function Footer1() {
  return (
    <Box component="footer" bgcolor="grey" mb={{ sm: 0, xs: 7 }}>
      {/* <Box component={Container} color="white" overflow="hidden" py={{ sm: 10, xs: 4 }}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
        
            <center> version 1.0.0 </center>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
}
