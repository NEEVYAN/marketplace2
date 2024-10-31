
"use client"

// GLOBAL CUSTOM COMPONENTS
import { H1, H2, H3, H6 } from "components/Typography";
import { Box, Chip, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react";
import { Paragraph } from "components/Typography";
import ProductCard15 from "components/product-cards/product-card-15";
// CUSTOM DATA MODEL
import Product from "models/Product.model";


import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


// ==============================================================
interface Props {
  products: Product[];
  breadcrumb?: string;
}
// ==============================================================

export default async function Section2({ products, breadcrumb = "Some Mix for you" }: Props) {


  const [selectedVariant, setSelectedVariant] = useState(null);
  const productVariants = [
    { id: 1, title: "Co-living", values: [{ id: 1, value: "Co-living" }] },
    { id: 2, title: "Flat", values: [{ id: 2, value: "Flat" }] },
    { id: 3, title: "Paying guest", values: [{ id: 3, value: "Paying Guest" }] },
    { id: 4, title: "Hotels", values: [{ id: 4, value: "Hotels" }] },
  ];
  const handleToggleVariant = (value) => () => {

    setSelectedVariant(selectedVariant === value ? null : value);
  };

  return (
    <div className="mb-4">
      <Paragraph fontSize={18} fontWeight={600} mb={3}>
        {breadcrumb}
      </Paragraph>


      <Box position="relative" flex="1 1 0" maxWidth="auto" mx="auto">
        {/* <TextField
          fullWidth
          style={{
            height:"60px",
          }}
          variant="outlined"
          placeholder="Searching for..."
        /> */}




        <TextField
          fullWidth
          variant="outlined"
          placeholder="Searching for..."
          InputProps={{
            style: {
              height: "50px",          
              padding: "0 20px",         
              fontSize: "16px",   
              marginBottom:"20px",    
              borderRadius: "10px",   
            },
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ccc", 
                },
                "&:hover fieldset": {
                  borderColor: "#888",    
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              },
            },

            endAdornment: (
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  paddingRight: "10px",
                  color: "#1976d2",
                  cursor: "pointer",
                }}
              >
                <SearchIcon style={{color:"black"}} />
              </Box>
            ),
          }} />


      </Box>



      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          mb: 4,
          pb: 1,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >




        {productVariants.map((variant) => (
          <Box key={variant.id} mb={2}>
            {variant.values.map(({ id, value }) => (
              <Chip
                key={id}
                label={value}
                onClick={handleToggleVariant(value)}
                sx={{
                  borderRadius: "10px",
                  mr: 1,
                  cursor: "pointer",
                  border: "1px solid black",
                  background: "transparent",
                  borderColor: selectedVariant === value ? "black" : "black",
                  transition: "border-width 0.2s ease",
                  borderWidth: selectedVariant === value ? "1.5px" : ".8px",
                }}


                color={selectedVariant === value ? "default" : "default"}


              />
            ))}
          </Box>
        ))}
      </Box>


      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item lg={4} sm={6} xs={12} key={product.id}>
            <ProductCard15 product={product} />
          </Grid>
        ))}
      </Grid>






      
    </div>

  );
}
