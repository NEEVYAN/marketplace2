"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Footer from "../footer";
import Section1 from "../section-1";
import Setting from "components/settings";

export default function IndexPageView() {
  return (
    <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Section1 />
    </Box>
  );
}
