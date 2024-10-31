import { Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import Drawer from "@mui/material/Drawer";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// LOGIN FORM
import { LoginPageView } from "pages-sections/sessions/page-view";
// GLOBAL CUSTOM COMPONENTS
import { MiniCart } from "components/mini-cart";
// LOGIN PAGE SECTIONS
import { Wrapper } from "pages-sections/sessions/styles";
import LogoWithTitle from "pages-sections/sessions/components/logo-title";
import LoginBottom from "pages-sections/sessions/components/login-bottom";
import SocialButtons from "pages-sections/sessions/components/social-buttons";

// ==============================================================
// Props interface
interface Props {
  dialogOpen: boolean;
  sidenavOpen: boolean;
  toggleDialog: () => void;
  toggleSidenav: () => void;
  fullWidth?: boolean;
}
// ==============================================================

export default function DialogDrawer(props: Props) {
  const { dialogOpen, sidenavOpen, toggleDialog, toggleSidenav,fullWidth = false } = props;

  // Adjust dialog width for mobile screens
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <Dialog
        scroll="body"
        open={dialogOpen}
        fullWidth={isMobile} // Ensures full width
        onClose={toggleDialog}
        maxWidth="xs" // Adjust to your desired width on desktop
        sx={{
          zIndex: 9999,
          '& .MuiDialog-paper': {
            width: isMobile ? '100%' : 'auto',  // Full width on mobile
            maxHeight: '90vh',                  // Control height
            margin: 0,                          // Remove margin on mobile
            borderRadius: isMobile ? 0 : 2,     // Optional: remove border-radius on mobile
          },
        }}
      >
        <Wrapper>
          <LogoWithTitle />
          <LoginPageView closeDialog={toggleDialog} />
          <SocialButtons />
          <LoginBottom />
        </Wrapper>
      </Dialog>

      <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} sx={{ zIndex: 9999 }}>
        <MiniCart toggleSidenav={toggleSidenav} />
      </Drawer>
    </Fragment>
  );
}
