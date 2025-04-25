/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { teamMembers } from "../../assets/data/data";

export const OurTeam = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box className="w-full py-20 mt-4 mb-2 rounded-2xl bg-gray-800 ">
      <Container maxWidth="xl">
        <Box className="text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="subtitle1"
              className="text-center text-white text-primary font-normal"
            >
              Team Members
            </Typography>
            <Typography variant="h2" className="mb-12 text-white">
              Our Master Team
            </Typography>
          </motion.div>
        </Box>

        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl pb-4 bg-white gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: member.delay }}
            >
              <Box className="text-center rounded-lg overflow-hidden">
                <Box className="rounded-full overflow-hidden mx-auto my-6 w-40 h-40">
                  <img
                    className="w-full h-full object-cover"
                    src={member.image}
                    alt=''
                  />
                </Box>
                <Typography variant="h5" className="mb-1 text-black">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.position}
                </Typography>
                <Box className="flex justify-center mt-4 space-x-2">
                  <IconButton
                    color="primary"
                    className="bg-primary bg-opacity-10 hover:bg-opacity-20"
                  >
                    <Facebook fontSize="small" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    className="bg-primary bg-opacity-10 hover:bg-opacity-20"
                  >
                    <Twitter fontSize="small" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    className="bg-primary bg-opacity-10 hover:bg-opacity-20"
                  >
                    <Instagram fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};


