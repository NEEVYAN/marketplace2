"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// MUI
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
// MUI ICON COMPONENTS
import Close from "@mui/icons-material/Close";
import Chat from "@mui/icons-material/ChatBubble";
// LOCAL CUSTOM COMPONENTS
import { H6 } from "../Typography";
import Scrollbar from "../scrollbar/scrollbar";
import FlexBox from "../flex-box/flex-box";
// GLOBAL CUSTOM HOOK
import useSettings from "hooks/useSettings";
// STYLED COMPONENTS
import { BodyWrapper, MainContainer, StyledAvatar, StyledIconButton } from "./styles";

export default function Setting() {
  const { push } = useRouter();
  const { updateSettings, settings } = useSettings();
  const [showBody, setShowBody] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setShowBody(false)}>
      <MainContainer>
        <Tooltip title="Message" placement="left">
          <StyledIconButton onClick={() => setShowBody((state) => !state)}>
            {!showBody && <Chat />}
            {showBody && <Close />}
          </StyledIconButton>
        </Tooltip>

      </MainContainer>
    </ClickAwayListener>
  );
}

