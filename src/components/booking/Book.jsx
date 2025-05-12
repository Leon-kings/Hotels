import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Booking = () => {
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    name: "",
    email: "",
    children: "",
    roomType: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const roomTypes = [
    { value: "standard", label: "Standard Room" },
    { value: "deluxe", label: "Deluxe Room" },
    { value: "suite", label: "Suite" },
    { value: "executive", label: "Executive Suite" },
    { value: "presidential", label: "Presidential Suite" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.checkInDate) {
      newErrors.checkInDate = "Check-in date is required";
    }

    if (!formData.checkOutDate) {
      newErrors.checkOutDate = "Check-out date is required";
    } else if (
      formData.checkInDate &&
      new Date(formData.checkOutDate) < new Date(formData.checkInDate)
    ) {
      newErrors.checkOutDate = "Check-out must be after check-in";
    }

    if (formData.adults < 1) {
      newErrors.adults = "At least one adult is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const results = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/84383/92823",
        formData
      );
      
      if (results) {
        toast.success("Check for confirmation email.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSubmitSuccess(true);
      } else {
        toast.error("Server error!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("Submission error. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        checkInDate: "",
        checkOutDate: "",
        adults: "",
        name: "",
        email: "",
        children: "",
        roomType: "",
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full mt-0 mb-2 rounded-2xl">
        <Box
          component="section"
          sx={{
            py: 8,
            backgroundColor: "background.paper",
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                textAlign="center"
                className="dark:bg-white text-black"
                sx={{ mb: 4 }}
              >
                Book Your Stay
              </Typography>

              <Paper
                elevation={3}
                sx={{ p: 4 }}
                component={motion.div}
                variants={itemVariants}
              >
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <Alert severity="success" sx={{ mb: 3 }}>
                      Booking submitted successfully! We'll contact you shortly.
                    </Alert>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexDirection: { xs: "column", sm: "row" },
                        }}
                      >
                        <TextField
                          fullWidth
                          label="Check in"
                          type="date"
                          name="checkInDate"
                          className="dark:bg-white text-black"
                          value={formData.checkInDate}
                          onChange={handleChange}
                          error={!!errors.checkInDate}
                          helperText={errors.checkInDate}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            min: new Date().toISOString().split("T")[0],
                          }}
                        />

                        <TextField
                          fullWidth
                          label="Check out"
                          type="date"
                          name="checkOutDate"
                          className="dark:bg-white text-black"
                          value={formData.checkOutDate}
                          onChange={handleChange}
                          error={!!errors.checkOutDate}
                          helperText={errors.checkOutDate}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            min:
                              formData.checkInDate ||
                              new Date().toISOString().split("T")[0],
                          }}
                        />
                      </Box>
                      {/* name and email components */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexDirection: { xs: "column", sm: "row" },
                        }}
                      >
                        <TextField
                          fullWidth
                          label="Names"
                          type="txt"
                          name="name"
                          placeholder="LD"
                          className="dark:bg-white text-black"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            min: new Date().toISOString().split("T")[0],
                          }}
                        />

                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          name="email"
                          placeholder="ld@mail.com"
                          className="dark:bg-white text-black"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            min:
                              formData.checkInDate ||
                              new Date().toISOString().split("T")[0],
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexDirection: { xs: "column", sm: "row" },
                        }}
                      >
                        <FormControl fullWidth error={!!errors.adults}>
                          <InputLabel>Adults</InputLabel>
                          <Select
                            name="adults"
                            value={formData.adults}
                            label="Adults"
                            className="dark:bg-white text-black"
                            onChange={handleChange}
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <MenuItem key={`adult-${num}`} value={num}>
                                {num} {num === 1 ? "Adult" : "Adults"}
                              </MenuItem>
                            ))}
                          </Select>
                          {errors.adults && (
                            <Typography variant="caption" color="error">
                              {errors.adults}
                            </Typography>
                          )}
                        </FormControl>

                        <FormControl fullWidth>
                          <InputLabel>Children</InputLabel>
                          <Select
                            name="children"
                            value={formData.children}
                            label="Children"
                            className="dark:bg-white text-black"
                            onChange={handleChange}
                          >
                            {[0, 1, 2, 3, 4].map((num) => (
                              <MenuItem key={`child-${num}`} value={num}>
                                {num} {num === 1 ? "Child" : "Children"}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>

                      <FormControl fullWidth>
                        <InputLabel>Room Type</InputLabel>
                        <Select
                          name="roomType"
                          value={formData.roomType}
                          label="Room Type"
                          className="dark:bg-white text-black"
                          onChange={handleChange}
                        >
                          {roomTypes.map((room) => (
                            <MenuItem key={room.value} value={room.value}>
                              {room.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: { xs: "100%", md: "auto" },
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={isSubmitting}
                        sx={{
                          height: "100%",
                          py: 3,
                          px: 4,
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        component={motion.button}
                      >
                        {isSubmitting ? (
                          <CircularProgress size={24} color="inherit" />
                        ) : (
                          "Book Now"
                        )}
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Paper>
            </motion.div>
          </Container>
        </Box>
      </div>
    </>
  );
};