/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Typography, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { carouselItems } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <div className="w-full mt-0 mb-1 rounded-2xl">
        <Box sx={{ width: "100%", mb: 5, position: "relative" }}>
          <Carousel
            infiniteLoop
            autoPlay
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <Button
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    minWidth: "auto",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.3)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
                  }}
                >
                  <ArrowBack />
                </Button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <Button
                  onClick={onClickHandler}
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    minWidth: "auto",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.3)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
                  }}
                >
                  <ArrowForward />
                </Button>
              )
            }
          >
            {carouselItems.map((item, index) => (
              <Box key={index} sx={{ position: "relative", height: "80vh" }}>
                <Box
                  component="img"
                  src={item.imgSrc}
                  alt={`Slide ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.4)",
                    p: 3,
                  }}
                >
                  <Box sx={{ maxWidth: 700 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        textTransform: "uppercase",
                        mb: 3,
                        fontWeight: "bold",
                        letterSpacing: 2,
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                    <Typography
                      variant="h2"
                      component="h1"
                      sx={{
                        mb: 4,
                        fontSize: { xs: "2rem", md: "3rem" },
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      sx={{ display: "flex", gap: 2, justifyContent: "center" }}
                    >
                      {item.buttons.map((button, btnIndex) => (
                        <Link key={btnIndex} to={button.text}>
                          <Button
                            variant={button.variant}
                            color={button.color}
                            sx={{
                              py: { xs: 1, md: 2 },
                              px: { xs: 2, md: 4 },
                              fontSize: { xs: "0.875rem", md: "1rem" },
                            }}
                          >
                            {button.text}
                          </Button>
                        </Link>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </div>
    </>
  );
};
