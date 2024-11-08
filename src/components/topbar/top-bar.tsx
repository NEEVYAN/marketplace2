import Link from "next/link";
import { useState } from "react";
// MUI
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import TouchRipple from "@mui/material/ButtonBase";
// TRANSLATION
import { useTranslation } from "react-i18next";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import ExpandMore from "@mui/icons-material/ExpandMore";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import BazaarMenu from "components/BazaarMenu";
import { FlexBetween, FlexBox } from "components/flex-box";
// STYLED COMPONENTS
import { StyledChip, StyledContainer, StyledRoot } from "./styles";

// ==============================================================
interface LanguageOption {
  [key: string]: { title: string; value: string };
}
// ==============================================================

// LANGUAGE OPTIONS
const languageOptions: LanguageOption = {
  en: { title: "EN", value: "en" },
  es: { title: "DE", value: "de" }
};

const socialLinks = [
  { id: 1, Icon: Twitter, url: "#" },
  { id: 2, Icon: Facebook, url: "#" },
  { id: 3, Icon: Instagram, url: "#" }
];

// ===========================================
type Props = { bgColor?: string };
// ===========================================

export default function Topbar({ bgColor }: Props) {
  const { i18n, t } = useTranslation();
  const [expand, setExpand] = useState<boolean>(false);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const selectedLanguage = languageOptions[i18n.language];

  return (
<>
</>
  );
}
