
"use client"

import Link from "next/link";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";
// LOCAL CUSTOM COMPONENT
import AppStore from "./components/app-store";
import SocialLinks from "./components/social-links";
// GLOBAL CUSTOM COMPONENTS
import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography";
// DATA
import { CUSTOMER_CARE_LINKS } from "./data";
// STYLED COMPONENTS
import { StyledRoot, StyledLink } from "./styles";

import { Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";


export default function Footer3() {

  const StyledRoot = styled("div")`
  background-color: #282c34; // Adjust background color as needed
  padding: 2rem 0;
  border-radius : 10px;
  text-align: left;
`;

const HighlightText = styled(Typography)`
  font-size: 1.5rem; 
  color: #ffffff; 
  line-height: 1.2;
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 2.5rem; 
  }

  span {
    display: block; 
    color: #D24057;
  }
`;


  return (
    <StyledRoot style={{marginBottom:"100px"}}>
    <Container>



      <Grid container spacing={6}>
        <Grid item md={7} xs={12}>
          <Link href="/">
            <BazaarImage mb={2.5} src="/assets/images/logo.svg" alt="logo" />
          </Link>

          <HighlightText>
            It’s Easy <span>Stazy</span>
          </HighlightText>

          <Paragraph color="grey.300" maxWidth="370px">
            Best Property Management Solution
          </Paragraph>
        </Grid>

        <Grid item md={5} xs={12}>
          <SocialLinks />
        </Grid>
      </Grid>


    </Container>
  </StyledRoot>
  );
}
