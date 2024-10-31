import Image from "next/image";
// CUSTOM COMPONENTS
import { H5 } from "components/Typography";
import FlexRowCenter from "components/flex-box/flex-row-center";
// IMPORT IMAGES
import logo from "../../../../public/assets/images/bazaar-black-sm.svg";

export default function LogoWithTitle() {
  return (
    <FlexRowCenter flexDirection="column" gap={1.5} mb={4}>
    
      <H5 fontWeight={700}>Welcome to Stazy</H5>
    </FlexRowCenter>
  );
}