/* eslint-disable no-unused-vars */
// src/components/SettingsPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CalendarIcon } from "@mui/x-date-pickers";
import { Message, People, Refresh, Settings } from "@mui/icons-material";
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
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://hotel-nodejs-oa32.onrender.com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      const response = await axios.post('https://hotel-nodejs-oa32.onrender.com/83920/92303', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        alert('Message sent successfully !!');
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting us. We'll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black space-y-4 p-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="+1 (123) 456-7890"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 mb-1">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your message here..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
};

const BookingForm = () => {
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
    try {
      // Simulate API call
      try {
        const results = await axios.post(
          "https://hotel-nodejs-oa32.onrender.com/84383/92823",
          formData
        );
        if (results) {
          alert("Check for confirmation email .");
          setSubmitSuccess(true);
        } else {
          alert("Server error !!");
        }
      } catch (error) {
        alert("Submission error:", error);
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
  );
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setFormData({
      fullname: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return false;
    }

    if (!isLogin) {
      if (!formData.fullname) {
        setError("Name is required");
        return false;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters");
        return false;
      }
    }

    return true;
  };

  const handleForgottPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResetMessage("");

    if (!resetEmail) {
      setError("Please enter your email address");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892/forgot-password",
        {
          email: resetEmail,
        }
      );

      setResetMessage(
        response.data.message ||
          "Password reset link has been sent to your email"
      );
      setError("");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Failed to send reset link");
      } else if (err.request) {
        setError("Network error. Please try again.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const response = await axios.post(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        // Store authentication data
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Set axios default headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

        // Redirect based on user status
        if (response.data.user.status === "admin") {
          navigate("/Dash-32793");
        } else if (response.data.user.status === "user") {
          navigate("/U-23-Dash-32793");
        }
      } else {
        const response = await axios.post(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892",
          {
            fullname: formData.fullname,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }
        );

        // For registration, we might get a token directly or need to login after
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
          
          if (response.data.user.status === "admin") {
            navigate("/Dash-32793");
          } else if (response.data.user.status === "user") {
            navigate("/U-23-Dash-32793");
          }
        } else {
          setIsLogin(true);
          setFormData({
            ...formData,
            fullname: "",
            phone: "",
            email: "",
          });
          setError("");
          alert("Registration successful! Please login with your credentials.");
        }
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Authentication failed");
      } else if (err.request) {
        setError("Network error. Please try again.");
      } else {
        setError(
          err.message || (isLogin ? "Login failed" : "Registration failed")
        );
      }

      if (err.message.includes("credentials") || err.response?.status === 401) {
        alert("Invalid credentials. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-2 mb-4 rounded-2xl flex items-center justify-center text-black bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h4 className="mt-6 text-3xl font-extrabold text-gray-900">
            {showForgotPassword
              ? "Reset Password"
              : isLogin
              ? "Sign in to your account"
              : "Create a new account"}
          </h4>
          {!showForgotPassword && (
            <p className="mt-2 text-sm text-gray-600">
              {isLogin
                ? "Don't have an account yet?"
                : "Already have an account?"}{" "}
              <button
                onClick={toggleAuthMode}
                className="font-medium dark:text-white text-blue-600 hover:text-amber-200 focus:outline-none"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          )}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {resetMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            {resetMessage}
          </div>
        )}

        {showForgotPassword ? (
          <form className="mt-8 space-y-6" onSubmit={handleForgottPassword}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="reset-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="reset-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setShowForgotPassword(false);
                  setResetEmail("");
                  setResetMessage("");
                  setError("");
                }}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Back to login
              </button>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending reset link...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </div>
          </form>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              {!isLogin && (
                <>
                  <div>
                    <label htmlFor="fullname" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      autoComplete="name"
                      required={!isLogin}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Full Name"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required={!isLogin}
                      type="tel"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="+250 7879 44 577"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowForgotPassword(true);
                      setResetEmail(formData.email);
                    }}
                    className="font-medium text-blue-600 hover:text-green-500"
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {isLogin ? "Signing in..." : "Registering..."}
                  </>
                ) : isLogin ? (
                  "Sign in"
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState({
    bookings: false,
    messages: false,
    users: false,
  });
  const [error, setError] = useState(null);

  // Form states
  const [newBooking, setNewBooking] = useState({
    name: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    adults: "",
    children: "",
    roomType: "",
  });

  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    status: "",
  });

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (activeTab === "bookings") {
          setLoading((prev) => ({ ...prev, bookings: true }));
          const response = await axios.get(`${API_BASE_URL}/84383/92823`);
          setBookings(response.data.bookings || []);
        } else if (activeTab === "messages") {
          setLoading((prev) => ({ ...prev, messages: true }));
          const response = await axios.get(`${API_BASE_URL}/63729/892308`);
          setMessages(response.data.data || []);
        } else if (activeTab === "users") {
          setLoading((prev) => ({ ...prev, users: true }));
          const response = await axios.get(`${API_BASE_URL}/37829/7892`);
          setUsers(response.data.data || []);
        } else if (activeTab === "auth") {
          // No data to fetch for auth tab
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading((prev) => ({
          ...prev,
          bookings: false,
          messages: false,
          users: false,
        }));
      }
    };

    fetchData();
  }, [activeTab]);

  // Handle form submissions with API calls
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/84383/92823`,
        newBooking
      );
      setBookings([...bookings, response.data.bookings]);
      alert('Process Created successfully!!');
      console.log(bookings);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/37829/7892`, newUser);
      setUsers([...users, response.data.users]);
      setNewUser({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        status: "user",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete items with API calls
  const deleteBooking = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/84383/92823/${id}`);
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/63729/892308/${id}`);
      setMessages(messages.filter((message) => message.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/37829/7892/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Render loading state
  if (loading[activeTab]) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading {activeTab}...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-xl font-semibold text-red-600 mb-2"><i> Error</i></h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => setError(null)}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            <Refresh className="text-blue-500 size-6"/>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h4 className="text-3xl font-bold text-gray-900">
            <Settings className="text-black size-6" />{" "}
          </h4>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`${
                activeTab === "bookings"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              <CalendarIcon />
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`${
                activeTab === "messages"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              <Message className="text-blue-400 size-6" />
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`${
                activeTab === "users"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              <People className="text-blue-400 size-6" />
            </button>
            <button
              onClick={() => setActiveTab("auth")}
              className={`${
                activeTab === "auth"
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Authentication
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          {/* Bookings Tab */}
          {activeTab === "bookings" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Manage Bookings</h2>
              
              {/* Booking Form Component */}
              <BookingForm />
              
              {/* Bookings List */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3">Existing Bookings</h3>
                {bookings.length === 0 ? (
                  <p className="text-gray-500">No bookings found.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Full Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Check-In
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Check-Out
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Guests
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Room Type
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {Array.isArray(bookings) &&
                          bookings.map((booking) => (
                            <tr key={booking.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {booking.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {booking.fullName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {booking.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {booking.checkInDate}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {booking.checkOutDate}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {booking.adults} adults, {booking.children}{" "}
                                children
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                                {booking.roomType}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                  onClick={() => deleteBooking(booking.id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === "messages" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
              <ContactForm />
              
              {/* Messages List */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3">Message History</h3>
                {messages.length === 0 ? (
                  <p className="text-gray-500">No messages found.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Subject
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {Array.isArray(messages) &&
                          messages.map((message) => (
                            <tr key={message._id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {message._id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {message.name}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {message.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {message.subject}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                  onClick={() => deleteMessage(message._id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Manage Users</h2>

              {/* Create User Form */}
              <form
                onSubmit={handleUserSubmit}
                className="mb-6 p-4 border rounded-lg text-black"
              >
                <h3 className="text-lg font-medium mb-3">Create New User</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={newUser.fullName}
                      onChange={(e) =>
                        setNewUser({ ...newUser, fullName: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newUser.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={newUser.phone}
                      onChange={(e) =>
                        setNewUser({ ...newUser, phone: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      value={newUser.password}
                      onChange={(e) =>
                        setNewUser({ ...newUser, password: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    status
                  </label>
                  <select
                    value={newUser.status}
                    onChange={(e) =>
                      setNewUser({ ...newUser, status: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create User
                </button>
              </form>

              {/* Users List */}
              <div>
                <h3 className="text-lg font-medium mb-3">Existing Users</h3>
                {users.length === 0 ? (
                  <p className="text-gray-500">No users found.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Full Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phone
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {Array.isArray(users) &&
                          users.map((user) => (
                            <tr key={user._id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {user.fullName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.phone}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span
                                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${
                                  user.status === "admin"
                                    ? "bg-purple-100 text-purple-800"
                                    : user.status === "editor"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                                >
                                  {user.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                  onClick={() => deleteUser(user.id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Authentication Tab */}
          {activeTab === "auth" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Authentication</h2>
              <AuthForm />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};