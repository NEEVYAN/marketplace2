"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { H6, Paragraph } from "components/Typography";
// LOCAL CUSTOM HOOKS
import useProduct from "../use-product";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { calculateDiscount, currency } from "lib";
// STYLED COMPONENTS
import { Content, PriceText, StyledRoot } from "./styles";
// CUSTOM DATA MODEL
import Product from "models/Product.model";
import { styled } from "@mui/material/styles";
import banner2 from "../../../../public/assets/images/banners/home5.jpg"


interface Props {
  product: Product;
}
// ==============================================================

export default function ProductCard14({ product }: Props) {


  const { id, slug, title, thumbnail, price, discount } = product || {};
  const { cartItem, handleCartAmountChange } = useProduct(slug);
  const handleAddToFavorites = () => {
    console.log("Added to favorites");
  };

  // const ImageWrapper = styled("div")`
  //   position: relative;
  // `;

  const StudentLabel = styled("div")`
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: grey;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10px;
  `;

  const IconButton = styled("button")`
    position: absolute;
    top: 8px;
    right: 8px;
    color: grey;
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      color: #ff4081;
    }
  `;

  const ImageWrapper = styled("div")`
  position: relative;
  width: 100%; // Full width
  height: 200px; // Fixed height of 200px
  overflow: hidden; // Crop overflow
  display: flex;
  justify-content: center;
  align-items: center;
`;

  const StyledLazyImage = styled(LazyImage)`
  width: 100%; // Full width within the wrapper
  height: 100%; // Full height of the wrapper
  object-fit: cover; // Maintain aspect ratio without stretching
`;



  const ResponsiveParagraph = styled(Paragraph)(({ theme }) => ({
    color: theme.palette.grey[600],
    marginBottom: theme.spacing(2),
    fontSize: ".6rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
      marginBottom: theme.spacing(1.5),
      textAlign: "center",
    },
  }));


  return (
    <StyledRoot>


      <Link href={`/products/${slug}`}>
        <ImageWrapper>
          <StyledLazyImage alt={title} width={260} height={200} src={banner2} />
          <StudentLabel>Student</StudentLabel>
          <IconButton className="favorite-icon" onClick={handleAddToFavorites}>
            <FavoriteBorder fontSize="small" />
          </IconButton>
        </ImageWrapper>
      </Link>



      <Content>
        <div>
          <H6 fontSize={17} fontWeight={700}>
            Hotel Paradise
          </H6>

          <ResponsiveParagraph>
            Near Gomti Nagar, Hanuman Mandir
          </ResponsiveParagraph>

          <PriceText>
            Rs. 9,000
            {discount ? <span className="base-price">Rs. 7,500</span> : null}
          </PriceText>
        </div>

        <div>
          <Button
            fullWidth
            disableElevation
            color="primary"
            variant="contained">
            Locate
          </Button>
        </div>
      </Content>
    </StyledRoot>
  );
}
