import Button from "@mui/material/Button";
// LOCAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H2, Paragraph } from "components/Typography";
// STYLED COMPONENT
import { Box } from "@mui/material";
import { StyledRoot } from "./styles";
// IMPORT IMAGES
import banner1 from "../../../../../public/assets/images/banners/home7.jpg";
import { Height } from "@mui/icons-material";

export default function BannerOne() {
  return (
    <StyledRoot>
      <LazyImage src={banner1} alt="banner" style={{ height: "40%" }} />

      <div className="text-content">
        <H2 lineHeight={1.2} fontSize={{ xl: 52, lg: 40, sm: 52, xs: 32 }}>
          Time to Travel !<br /> Explore now
        </H2>

        <Box
          component="p"
          fontSize={{ xl: 18, lg: 16, sm: 18, xs: 14 }}
          sx={{
            maxWidth: { xl: "60%", lg: "70%", sm: "80%", xs: "90%" },
            mt: 2,
            lineHeight: 1.5,
          }}
        >
          Deoria Road, Singhariya, Kunraghat, Gorakhpur, Uttar Pradesh 273016
        </Box>

        {/* <Paragraph style={{width:"60vw"}} fontSize={{ xl: 18, lg: 16, sm: 18 }}>Deoria Road, Singhariya, Kunraghat, Gorakhpur, Uttar Pradesh 273016</Paragraph> */}
      </div>



      <div className="button-wrapper">
        <Button color="primary" size="large" variant="contained">
          Places Nearby
        </Button>
      </div>
    </StyledRoot>
  );
}
