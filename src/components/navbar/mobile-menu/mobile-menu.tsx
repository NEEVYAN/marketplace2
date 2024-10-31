import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js
// MUI ICON COMPONENTS
import Menu from "@mui/icons-material/Menu";
import Clear from "@mui/icons-material/Clear";
// GLOBAL CUSTOM COMPONENT
import Scrollbar from "components/scrollbar";
// RENDER MENU LEVEL FUNCTION
import { renderLevels } from "./render-levels";
// NAVIGATION DATA LIST
import { updateNavigation } from "./modified-navigation";

export default function MobileMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClose = () => setOpenDrawer(false);

  return (
    <Fragment>
      {/* <IconButton onClick={() => setOpenDrawer(true)} sx={{ flexShrink: 0, color: "grey.600" }}>
        <Menu />
      </IconButton> */}

      {/* <IconButton>
        <Menu />
      </IconButton> */}

      <Link href="/furniture-3">
        <Image height={44} width={44} src="/assets/images/bazaar-black-sm.svg" alt="logo" />
      </Link>

      {/* <Drawer anchor="left" open={openDrawer} onClose={handleClose} sx={{ zIndex: 15001 }}>
        <Box width="100vw" height="100%" position="relative">
          <Scrollbar autoHide={false} sx={{ height: "100vh" }}>
            <Box px={5} py={8} maxWidth={500} margin="auto" position="relative" height="100%">
              <IconButton onClick={handleClose} sx={{ position: "absolute", right: 30, top: 15 }}>
                <Clear fontSize="small" />
              </IconButton>
              {renderLevels(updateNavigation, handleClose)}
            </Box>
          </Scrollbar>
        </Box>
      </Drawer> */}
    </Fragment>
  );
}
