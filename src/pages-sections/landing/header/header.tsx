import Link from "next/link";
import { Fragment } from "react";
// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// ICON COMPONENTS
import Menu from "@mui/icons-material/Menu";

import { Link as Scroll } from "react-scroll";
import clsx from "clsx";
// CUSTOM COMPONENT
import SideNav from "components/side-nav";
import Image from "components/BazaarImage";
import FlexBox from "components/flex-box/flex-box";
// HOOKS
import useHeader from "./use-header";

const headerHeight = 72;

// STYLED COMPONENT
import { HeaderWrapper } from "./styles";

export default function Header() {
  const { downSM, isFixed, open, toggleSidenav } = useHeader();

  return (
    <Fragment>
      <HeaderWrapper>
        <div className={clsx({ fixedHeader: isFixed })}>
          <Container>
            <FlexBox height={headerHeight} alignItems="center">
              <Scroll to="top" duration={400} smooth={true} isDynamic>
                <Box sx={{ cursor: "pointer" }}>
                  <Image width="96px" height="44px" src="/assets/images/logo2.svg" alt="logo" />
                </Box>
              </Scroll>

              <Box mx="auto" />


              <a target="__blank" href="https://tinyurl.com/get-bazaar">
                  <Button variant="outlined">Make a Call</Button>
                </a>
             
            </FlexBox>
          </Container>
        </div>
      </HeaderWrapper>

      {isFixed && <Box height={headerHeight} />}
    </Fragment>
  );
}
