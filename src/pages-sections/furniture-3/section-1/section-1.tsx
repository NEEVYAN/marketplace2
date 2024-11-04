"use client";

import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
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
import nearby from "../../../../public/assets/images/cities/nearby.png";
import city from "../../../../public/assets/images/cities/city.png";
import homeImage1 from "../../../../public/assets/images/banners/home3.jpg";
import homeImage2 from "../../../../public/assets/images/banners/home4.jpg";
import homeImage3 from "../../../../public/assets/images/banners/home5.jpg";
import { features } from "process";

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

const slidesData = [
  {
    image: homeImage1,
    title: "Venus Shft-in",
    features: ["The place offers a vibrant community experience with seamless facilities"],
    price: "₹999",
  },
  {
    image: homeImage2,
    title: "Paradise Swift",
    features: ["Paradise Swift provides a fun-filled environment with activities for all ages."],
    price: "₹1299",
  },
  {
    image: homeImage3,
    title: "Couple’s Paradise",
    features: ["Couple’s Paradise offers romantic views and a cozy ambiance."],
    price: "₹1999",
  },
];


export default function Section1() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mb-2 mt-1">



      <Grid container spacing={2}>





        <Grid item xs={12} lg={6}>
          <Stack spacing={1} height="100%">
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1rem", xl: "2rem" },
                fontWeight: '600',
              }}

            >
              Popular Cities to know
            </Typography>

            <Grid container style={{ marginTop: "6%" }}>
              {[
                { title: "Nearby", image: nearby },
                { title: "Noida", image: banner3 },
                { title: "Pune", image: banner4 },
                { title: "Bangalore", image: banner5 },
                { title: "Allahabad", image: banner2 },
                { title: "Lucknow", image: banner3 },
                { title: "Varansi", image: banner4 },
                { title: "See Cities", image: city },
              ].map((place, index) => (
                <Grid item xs={3} key={index} marginBottom={3}>
                  <Link href={`/furniture-3/categories/${place.title.toLowerCase()}`} passHref>
                    <Box
                      sx={{
                        width: { xs: "50px", sm: "60px" },
                        height: { xs: "50px", sm: "60px" },
                        borderRadius: "50%",
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


            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1rem", xl: "2rem" },
                fontWeight: '600',
              }}

            >
              Mostly Preferred properties
            </Typography>


            {isClient && (
              <Grid container style={{ marginTop: "6%" }}>
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
                      {slidesData.map((slide, index) => (
                        <SwiperSlide key={index} style={{ position: "relative" }}>

                          <LazyImage
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            sx={{
                              width: "100%",
                              height: "auto",
                              maxHeight: { xs: "250px", sm: "300px", md: "300px" },
                              borderRadius: "8px",
                    
                              filter: "brightness(0.6)",
                            }}
                          />


                          <Box
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "35%",
                              transform: "translate(-50%, -50%)",
                              color: "white",
                              padding: "10px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              maxWidth: "100%",
                            }}
                          >

                            <Typography variant="h6" fontWeight="bold">
                              {slide.title}
                            </Typography>

                            {slide.features.map((feature, i) => (
                              <Box key={i} display="flex"  gap="4px">
                                <i className="fas fa-check-circle" />
                                <Typography variant="body2" style={{fontSize:"12px"}}>{feature}</Typography>
                              </Box>
                            ))}

                            <Button
                              variant="contained"
                              sx={{
                                background:"black",
                                borderRadius: "6px",
                                width: "fit-content",
                                padding: "5px 10px",
                                marginTop: "8px",
                              }}
                            >
                              Book now
                            </Button>
                          </Box>

                    
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: "15px",
                              right: "15px",
                              color: "white",
                              textAlign: "right",
                            }}
                          >
                            <Typography variant="body2">
                              Starting from
                            </Typography>
                            <Typography variant="h2" fontWeight="bold">
                              {slide.price}
                            </Typography>
                          </Box>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Stack>
        </Grid>


        <Grid item xs={12} lg={6}>
          <BannerOne />
        </Grid>




      </Grid>
    </div>
  );
}
