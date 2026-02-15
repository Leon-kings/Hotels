/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Paper,
//   Typography,
//   Alert,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const Booking = () => {
//   const [formData, setFormData] = useState({
//     checkInDate: "",
//     checkOutDate: "",
//     adults: "",
//     name: "",
//     email: "",
//     children: "",
//     roomType: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const roomTypes = [
//     { value: "standard", label: "Standard Room" },
//     { value: "deluxe", label: "Deluxe Room" },
//     { value: "suite", label: "Suite" },
//     { value: "executive", label: "Executive Suite" },
//     { value: "presidential", label: "Presidential Suite" },
//   ];

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.checkInDate) {
//       newErrors.checkInDate = "Check-in date is required";
//     }

//     if (!formData.checkOutDate) {
//       newErrors.checkOutDate = "Check-out date is required";
//     } else if (
//       formData.checkInDate &&
//       new Date(formData.checkOutDate) < new Date(formData.checkInDate)
//     ) {
//       newErrors.checkOutDate = "Check-out must be after check-in";
//     }

//     if (formData.adults < 1) {
//       newErrors.adults = "At least one adult is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when field is changed
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: undefined,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
//     try {
//       const results = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/84383/92823",
//         formData
//       );
      
//       if (results) {
//         toast.success("Check for confirmation email.", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         setSubmitSuccess(true);
//       } else {
//         toast.error("Server error!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     } catch (error) {
//       toast.error("Submission error. Please try again.", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       console.error("Submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }

//     // Reset form after successful submission
//     setTimeout(() => {
//       setFormData({
//         checkInDate: "",
//         checkOutDate: "",
//         adults: "",
//         name: "",
//         email: "",
//         children: "",
//         roomType: "",
//       });
//       setSubmitSuccess(false);
//     }, 3000);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.1,
//         duration: 0.5,
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="w-full mt-0 mb-2 rounded-2xl">
//         <Box
//           component="section"
//           sx={{
//             py: 8,
//             backgroundColor: "background.paper",
//           }}
//         >
//           <Container maxWidth="lg">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               variants={containerVariants}
//             >
//               <Typography
//                 variant="h4"
//                 component="h2"
//                 gutterBottom
//                 textAlign="center"
//                 className="dark:bg-white text-black"
//                 sx={{ mb: 4 }}
//               >
//                 Book Your Stay
//               </Typography>

//               <Paper
//                 elevation={3}
//                 sx={{ p: 4 }}
//                 component={motion.div}
//                 variants={itemVariants}
//               >
//                 {submitSuccess && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <Alert severity="success" sx={{ mb: 3 }}>
//                       Booking submitted successfully! We'll contact you shortly.
//                     </Alert>
//                   </motion.div>
//                 )}

//                 <form onSubmit={handleSubmit}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: { xs: "column", md: "row" },
//                       gap: 3,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         flexGrow: 1,
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: 3,
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           gap: 2,
//                           flexDirection: { xs: "column", sm: "row" },
//                         }}
//                       >
//                         <TextField
//                           fullWidth
//                           label="Check in"
//                           type="date"
//                           name="checkInDate"
//                           className="dark:bg-white text-black"
//                           value={formData.checkInDate}
//                           onChange={handleChange}
//                           error={!!errors.checkInDate}
//                           helperText={errors.checkInDate}
//                           InputLabelProps={{
//                             shrink: true,
//                           }}
//                           inputProps={{
//                             min: new Date().toISOString().split("T")[0],
//                           }}
//                         />

//                         <TextField
//                           fullWidth
//                           label="Check out"
//                           type="date"
//                           name="checkOutDate"
//                           className="dark:bg-white text-black"
//                           value={formData.checkOutDate}
//                           onChange={handleChange}
//                           error={!!errors.checkOutDate}
//                           helperText={errors.checkOutDate}
//                           InputLabelProps={{
//                             shrink: true,
//                           }}
//                           inputProps={{
//                             min:
//                               formData.checkInDate ||
//                               new Date().toISOString().split("T")[0],
//                           }}
//                         />
//                       </Box>
//                       {/* name and email components */}
//                       <Box
//                         sx={{
//                           display: "flex",
//                           gap: 2,
//                           flexDirection: { xs: "column", sm: "row" },
//                         }}
//                       >
//                         <TextField
//                           fullWidth
//                           label="Names"
//                           type="txt"
//                           name="name"
//                           placeholder="LD"
//                           className="dark:bg-white text-black"
//                           value={formData.name}
//                           onChange={handleChange}
//                           error={!!errors.name}
//                           helperText={errors.name}
//                           InputLabelProps={{
//                             shrink: true,
//                           }}
//                           inputProps={{
//                             min: new Date().toISOString().split("T")[0],
//                           }}
//                         />

//                         <TextField
//                           fullWidth
//                           label="Email"
//                           type="email"
//                           name="email"
//                           placeholder="ld@mail.com"
//                           className="dark:bg-white text-black"
//                           value={formData.email}
//                           onChange={handleChange}
//                           error={!!errors.email}
//                           helperText={errors.email}
//                           InputLabelProps={{
//                             shrink: true,
//                           }}
//                           inputProps={{
//                             min:
//                               formData.checkInDate ||
//                               new Date().toISOString().split("T")[0],
//                           }}
//                         />
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           gap: 2,
//                           flexDirection: { xs: "column", sm: "row" },
//                         }}
//                       >
//                         <FormControl fullWidth error={!!errors.adults}>
//                           <InputLabel>Adults</InputLabel>
//                           <Select
//                             name="adults"
//                             value={formData.adults}
//                             label="Adults"
//                             className="dark:bg-white text-black"
//                             onChange={handleChange}
//                           >
//                             {[1, 2, 3, 4, 5].map((num) => (
//                               <MenuItem key={`adult-${num}`} value={num}>
//                                 {num} {num === 1 ? "Adult" : "Adults"}
//                               </MenuItem>
//                             ))}
//                           </Select>
//                           {errors.adults && (
//                             <Typography variant="caption" color="error">
//                               {errors.adults}
//                             </Typography>
//                           )}
//                         </FormControl>

//                         <FormControl fullWidth>
//                           <InputLabel>Children</InputLabel>
//                           <Select
//                             name="children"
//                             value={formData.children}
//                             label="Children"
//                             className="dark:bg-white text-black"
//                             onChange={handleChange}
//                           >
//                             {[0, 1, 2, 3, 4].map((num) => (
//                               <MenuItem key={`child-${num}`} value={num}>
//                                 {num} {num === 1 ? "Child" : "Children"}
//                               </MenuItem>
//                             ))}
//                           </Select>
//                         </FormControl>
//                       </Box>

//                       <FormControl fullWidth>
//                         <InputLabel>Room Type</InputLabel>
//                         <Select
//                           name="roomType"
//                           value={formData.roomType}
//                           label="Room Type"
//                           className="dark:bg-white text-black"
//                           onChange={handleChange}
//                         >
//                           {roomTypes.map((room) => (
//                             <MenuItem key={room.value} value={room.value}>
//                               {room.label}
//                             </MenuItem>
//                           ))}
//                         </Select>
//                       </FormControl>
//                     </Box>

//                     <Box
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         minWidth: { xs: "100%", md: "auto" },
//                       }}
//                     >
//                       <Button
//                         type="submit"
//                         variant="contained"
//                         size="large"
//                         fullWidth
//                         disabled={isSubmitting}
//                         sx={{
//                           height: "100%",
//                           py: 3,
//                           px: 4,
//                         }}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         component={motion.button}
//                       >
//                         {isSubmitting ? (
//                           <CircularProgress size={24} color="inherit" />
//                         ) : (
//                           "Book Now"
//                         )}
//                       </Button>
//                     </Box>
//                   </Box>
//                 </form>
//               </Paper>
//             </motion.div>
//           </Container>
//         </Box>
//       </div>
//     </>
//   );
// };

























import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Close } from "@mui/icons-material";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

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

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.adults || formData.adults < 1) {
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

  const handleCloseModal = () => {
    setModalOpen(false);
    
    // Reset form after successful submission
    if (modalType === 'success') {
      setFormData({
        checkInDate: "",
        checkOutDate: "",
        adults: "",
        name: "",
        email: "",
        children: "",
        roomType: "",
      });
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
      
      if (results.data && results.data.success) {
        setModalType('success');
        setModalMessage('Booking confirmed! A confirmation email has been sent to your inbox.');
        setModalOpen(true);
      } else {
        setModalType('error');
        setModalMessage('Server error! Please try again later or contact support.');
        setModalOpen(true);
      }
    } catch (error) {
      setModalType('error');
      setModalMessage('Submission error. Please check your connection and try again.');
      setModalOpen(true);
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 20 }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        delay: 0.2, 
        type: "spring", 
        stiffness: 200 
      }
    }
  };

  return (
    <>
      <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mt-0 mb-2 rounded-2xl">
        <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-centertext-white mb-8">
                Book Your Stay
              </h2>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-t from-[#566bc0] to-[#5d6db0] text-white rounded-2xl shadow-xl p-6 md:p-8"
              >
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-grow space-y-6">
                      {/* Date inputs */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <label className="block text-white text-sm font-medium mb-2">
                            Check-in Date
                          </label>
                          <input
                            type="date"
                            name="checkInDate"
                            value={formData.checkInDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                              errors.checkInDate 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white`}
                          />
                          {errors.checkInDate && (
                            <p className="mt-1 text-sm text-red-500">{errors.checkInDate}</p>
                          )}
                        </div>

                        <div className="flex-1">
                          <label className="block text-white text-sm font-medium mb-2">
                            Check-out Date
                          </label>
                          <input
                            type="date"
                            name="checkOutDate"
                            value={formData.checkOutDate}
                            onChange={handleChange}
                            min={formData.checkInDate || new Date().toISOString().split("T")[0]}
                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                              errors.checkOutDate 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white`}
                          />
                          {errors.checkOutDate && (
                            <p className="mt-1 text-sm text-red-500">{errors.checkOutDate}</p>
                          )}
                        </div>
                      </div>

                      {/* Name and Email */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <label className="block text-white text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                              errors.name 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white`}
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                          )}
                        </div>

                        <div className="flex-1">
                          <label className="block text-white text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                              errors.email 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* Adults and Children */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <label className="block text-white text-sm font-medium mb-2">
                            Adults
                          </label>
                          <select
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border ${
                              errors.adults 
                                ? 'border-red-500 dark:border-red-500' 
                                : 'border-gray-300 dark:border-gray-600'
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white`}
                          >
                            <option value="">Select adults</option>
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={`adult-${num}`} value={num}>
                                {num} {num === 1 ? "Adult" : "Adults"}
                              </option>
                            ))}
                          </select>
                          {errors.adults && (
                            <p className="mt-1 text-sm text-red-500">{errors.adults}</p>
                          )}
                        </div>

                        <div className="flex-1">
                          <label className="block text-white text-sm font-medium mb-2">
                            Children
                          </label>
                          <select
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                          >
                            <option value="">Select children</option>
                            {[0, 1, 2, 3, 4].map((num) => (
                              <option key={`child-${num}`} value={num}>
                                {num} {num === 1 ? "Child" : "Children"}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Room Type */}
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Room Type
                        </label>
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                        >
                          <option value="">Select room type</option>
                          {roomTypes.map((room) => (
                            <option key={room.value} value={room.value}>
                              {room.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center md:min-w-[200px]">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:h-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing...
                          </div>
                        ) : (
                          "Book Now"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Success/Error Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[70] p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 text-center">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-center mb-4"
                >
                  {modalType === 'success' ? (
                    <svg className="w-20 h-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-20 h-20 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </motion.div>
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  modalType === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {modalType === 'success' ? 'Success!' : 'Error!'}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {modalMessage}
                </p>

                <button
                  onClick={handleCloseModal}
                  className={`px-6 py-2 text-white rounded-lg transition-all transform hover:scale-105 ${
                    modalType === 'success' 
                      ? 'bg-gradient-to-t from-red-500 to-red-700' 
                      : 'bg-gradient-to-t from-red-300 to-red-500'
                  }`}
                >
                  <Close className="text-white"/>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
