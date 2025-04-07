/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import { Hotel, PeopleAlt, Engineering } from "@mui/icons-material";
import { images } from "../../assets/data/data";
export const About = () => {
  const theme = useTheme();

  // Styled component for the grid container
  const GridContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(5),
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }));

  // Styled component for the stats grid
  const StatsGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(3),
    gridTemplateColumns: "repeat(3, 1fr)",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  }));

  // Styled component for the image grid
  const ImageGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(2),
    gridTemplateColumns: "repeat(2, 1fr)",
    height: "100%",
  }));

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6 },
    }),
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.6 },
    }),
  };

  return (
    <>
      <div className="w-full mt-0 mb-1 rounded-2xl">
        <Box sx={{ py: 10, bgcolor: "background.default" }}>
          <Container maxWidth="xl">
            <GridContainer>
              {/* Left Column - Text Content */}
              <Box>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeIn}
                >
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{
                      fontWeight: "bold",
                      letterSpacing: 1,
                      display: "block",
                      mb: 1,
                    }}
                  >
                    About Us
                  </Typography>
                  <Typography variant="h3" component="h1">
                    <Box
                      component="span"
                      color="primary.main"
                      sx={{ textTransform: "uppercase" }}
                    >
                      LD Hotel
                    </Box>
                  </Typography>
                </motion.div>

                <motion.div
                  custom={0.2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  style={{ marginTop: theme.spacing(4) }}
                >
                  <Typography variant="body1" color="text.secondary">
                    Great savings on hotels in Kigali, Rwanda online. Good
                    availability and great rates. Read hotel reviews and choose
                    the best hotel deal for your stay.
                  </Typography>
                </motion.div>

                <motion.div
                  custom={0.3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  style={{ marginTop: theme.spacing(4) }}
                >
                  <StatsGrid>
                    {[
                      {
                        icon: <Hotel fontSize="large" />,
                        count: 1234,
                        label: "Rooms",
                        delay: 0,
                      },
                      {
                        icon: <Engineering fontSize="large" />,
                        count: 1234,
                        label: "Staff",
                        delay: 0.1,
                      },
                      {
                        icon: <PeopleAlt fontSize="large" />,
                        count: 1234,
                        label: "Clients",
                        delay: 0.2,
                      },
                    ].map((stat, index) => (
                      <Box key={index}>
                        <motion.div
                          custom={stat.delay}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeIn}
                        >
                          <Box
                            sx={{
                              border: `1px solid ${theme.palette.divider}`,
                              borderRadius: 1,
                              p: 0.5,
                            }}
                          >
                            <Box
                              sx={{
                                border: `1px solid ${theme.palette.divider}`,
                                borderRadius: 1,
                                p: 3,
                                textAlign: "center",
                              }}
                            >
                              <Box color="primary.main" sx={{ mb: 1 }}>
                                {stat.icon}
                              </Box>
                              <Typography
                                variant="h4"
                                sx={{ fontWeight: 700, mb: 0.5 }}
                              >
                                {stat.count}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {stat.label}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      </Box>
                    ))}
                  </StatsGrid>
                </motion.div>

                <motion.div
                  custom={0.6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  style={{ marginTop: theme.spacing(4) }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    Explore More
                  </Button>
                </motion.div>
              </Box>

              {/* Right Column - Image Grid */}
              <Box>
                <ImageGrid>
                  {images.map((img, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: img.justify,
                      }}
                    >
                      <motion.div
                        custom={img.delay}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={zoomIn}
                        style={{
                          width: img.width,
                          marginTop: img.mt,
                        }}
                      >
                        <Box
                          component="img"
                          src={img.src}
                          alt="Hotel"
                          sx={{
                            borderRadius: 2,
                            width: "100%",
                            height: "auto",
                            boxShadow: 3,
                            objectFit: "cover",
                          }}
                        />
                      </motion.div>
                    </Box>
                  ))}
                </ImageGrid>
              </Box>
            </GridContainer>
          </Container>
        </Box>
      </div>
    </>
  );
};
