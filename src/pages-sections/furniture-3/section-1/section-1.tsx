"use client";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import LazyImage from "components/LazyImage";
import BannerOne from "./components/banner-1";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import banner2 from "../../../../public/assets/images/cities/c2.jpg";
import banner3 from "../../../../public/assets/images/cities/c3.jpg";
import banner4 from "../../../../public/assets/images/cities/c4.jpg";
import banner5 from "../../../../public/assets/images/cities/c5.jpg";
import homeImage1 from "../../../../public/assets/images/banners/home3.jpg";
import homeImage2 from "../../../../public/assets/images/banners/home4.jpg";
import homeImage3 from "../../../../public/assets/images/banners/home5.jpg";

// Load Swiper modules and components only in the client
let Swiper;
let SwiperSlide;
let Pagination;
let Navigation;
let Autoplay;

if (typeof window !== "undefined") {
  Swiper = require("swiper/react").Swiper;
  SwiperSlide = require("swiper/react").SwiperSlide;
  Pagination = require("swiper").Pagination;
  Navigation = require("swiper").Navigation;
  Autoplay = require("swiper").Autoplay;
}

export default function Section1() 
{

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

return (
    <div className="mb-2 mt-1">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <BannerOne />
        </Grid>

        <Grid item xs={12} lg={6}>
          <Stack spacing={1} height="100%">
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: { xs: ".8rem", sm: "1.25rem", md: "1.5rem", lg: "1rem", xl: "2rem" },
              }}
            >
              Popular Destinations
            </Typography>

            <Grid container style={{ marginTop: "4%" }}>
              {[
                { title: "Delhi", image: banner2 },
                { title: "Noida", image: banner3 },
                { title: "Pune", image: banner4 },
                { title: "Bangalore", image: banner5 },
                { title: "Allahabad", image: banner2 },
                { title: "Lucknow", image: banner3 },
                { title: "Varansi", image: banner4 },
                { title: "Kolkata", image: banner5 },
              ].map((place, index) => (
                <Grid item xs={3} key={index} marginBottom={3}>
                  <Link href={`/furniture-3/categories/${place.title.toLowerCase()}`} passHref>
                    <Box
                      sx={{
                        width: { xs: "50px", sm: "60px" },
                        height: { xs: "50px", sm: "60px" },
                        borderRadius: "10%",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                        cursor: "pointer",
                      }}
                    >
                      <LazyImage
                        src={place.image}
                        alt={place.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Link>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    mt={0.5}
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem" },
                    }}
                  >
                    {place.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            {isClient && (
              <Grid container style={{ marginTop: "2%" }}>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <Swiper
                      modules={[Pagination, Navigation, Autoplay]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3000 }}
                      loop
                      style={{ "--swiper-pagination-color": "white" }}
                    >
                      {[homeImage1, homeImage2, homeImage3].map((image, index) => (
                        <SwiperSlide key={index}>
                          <LazyImage
                            src={image}
                            alt={`Home Slide ${index + 1}`}
                            sx={{
                              width: "100%",
                              height: "auto",
                              maxHeight: { xs: "250px", sm: "300px", md: "300px" },
                              borderRadius: "8px",
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
