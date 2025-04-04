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

export const Booking = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    roomType: "standard",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const roomTypes = [
    { value: "standard", label: "Standard Room" },
    { value: "deluxe", label: "Deluxe Room" },
    { value: "suite", label: "Suite" },
    { value: "executive", label: "Executive Suite" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.checkIn) {
      newErrors.checkIn = "Check-in date is required";
    }

    if (!formData.checkOut) {
      newErrors.checkOut = "Check-out date is required";
    } else if (
      formData.checkIn &&
      new Date(formData.checkOut) < new Date(formData.checkIn)
    ) {
      newErrors.checkOut = "Check-out must be after check-in";
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSubmitSuccess(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          checkIn: "",
          checkOut: "",
          adults: 1,
          children: 0,
          roomType: "standard",
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          error={!!errors.checkIn}
                          helperText={errors.checkIn}
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
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          error={!!errors.checkOut}
                          helperText={errors.checkOut}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            min:
                              formData.checkIn ||
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
