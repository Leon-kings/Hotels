// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { testimonials } from "../../assets/data/data";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Cancel, Refresh } from "@mui/icons-material";
// import axios from "axios";

// export const Testimony = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
//   const [showModal, setShowModal] = useState(false);
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     profession: "",
//     text: "",
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prevIndex) =>
//         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const goToSlide = (index) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   const openModal = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//     setShowModal(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/76823/2387",
//         formData
//       );
//       if (response) {
//         toast.success("Thank you for your testimonial! We'll review it soon.", {
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

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         profession: "",
//         text: "",
//       });
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Submission failed", {
//         position: "top-center",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   return (
//     <>
//       <ToastContainer />
//       <motion.div
//         className="container mx-auto my-5 py-5 bg-gray-900 rounded-lg"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1, duration: 0.5 }}
//       >
//         <div className="heading flex justify-between items-center px-4">
//           <h4 className="text-white text-2xl font-bold">TESTIMONIALS</h4>
//           <button
//             onClick={() => setShowForm(true)}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
//           >
//             Share Experience
//           </button>
//         </div>

//         <div className="container mx-auto px-4">
//           <div className="relative h-96 overflow-hidden">
//             <AnimatePresence custom={direction} initial={false}>
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
//                 className="absolute inset-0 flex items-center justify-center px-4"
//               >
//                 <div
//                   className="testimonial-item bg-white rounded-lg p-8 shadow-xl relative max-w-2xl mx-auto cursor-pointer hover:shadow-2xl transition duration-300"
//                   onClick={() => openModal(testimonials[currentIndex])}
//                 >
//                   <p className="text-gray-700 mb-6">
//                     {testimonials[currentIndex].text.slice(0, 200)}...
//                   </p>
//                   <div className="flex items-center">
//                     <img
//                       className="w-12 h-12 rounded-full object-cover"
//                       src={testimonials[currentIndex].image}
//                       alt=""
//                     />
//                     <div className="ml-4">
//                       <h6 className="font-bold text-gray-900">
//                         {testimonials[currentIndex].name}
//                       </h6>
//                       <small className="text-gray-600">
//                         {testimonials[currentIndex].profession}
//                       </small>
//                     </div>
//                   </div>
//                   <div className="text-blue-600 text-3xl absolute right-4 bottom-4">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-8 w-8"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Testimonial Modal */}
//         {showModal && selectedTestimonial && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <motion.div
//               className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="flex justify-between items-start mb-6">
//                 <div className="flex items-center">
//                   <img
//                     className="w-16 h-16 rounded-full object-cover"
//                     src={selectedTestimonial.image}
//                     alt={selectedTestimonial.name}
//                   />
//                   <div className="ml-4">
//                     <h3 className="font-bold text-gray-900 text-xl">
//                       {selectedTestimonial.name}
//                     </h3>
//                     <p className="text-gray-600">
//                       {selectedTestimonial.profession}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <div className="prose text-gray-700">
//                 <p>{selectedTestimonial.text}</p>
//               </div>
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <p className="text-sm text-gray-500">
//                   Posted on {selectedTestimonial.date || "an unknown date"}
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         )}

//         {/* Testimonial Form */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <motion.div
//               className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.2 }}
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-xl font-bold text-gray-900">
//                   Share Your Experience
//                 </h3>
//                 <button
//                   onClick={() => setShowForm(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-red-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="profession"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Profession/Title
//                   </label>
//                   <input
//                     type="text"
//                     id="profession"
//                     name="profession"
//                     value={formData.profession}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="text"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Your Testimonial
//                   </label>
//                   <textarea
//                     id="text"
//                     name="text"
//                     rows="5"
//                     value={formData.text}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   ></textarea>
//                 </div>

//                 <div className="flex justify-end space-x-3">
//                   <button
//                     type="button"
//                     onClick={() => setShowForm(false)}
//                     className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     <Refresh className="text-red-400 size-6" />
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         )}
//       </motion.div>
//     </>
//   );
// };









































/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../assets/data/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { ChevronLeft, ChevronRight, Close, FormatQuote, Mail, MessageRounded, Star, VerifiedUser } from "@mui/icons-material";
import { FaBriefcase } from "react-icons/fa";

export const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToSlide = (index) => {
    setAutoplay(false); // Pause autoplay when manually navigating
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  const nextSlide = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setAutoplay(true), 10000);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setAutoplay(true), 10000);
  };

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white w-full py-16 px-4 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Decorative quote marks */}
        <div className="absolute top-20 left-10 text-amber-400/10 text-[200px] font-serif">
          "
        </div>
        <div className="absolute bottom-20 right-10 text-amber-400/10 text-[200px] font-serif rotate-180">
          "
        </div>

        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ⭐ Guest Experiences
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
                What Our Guests Say
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real stories from real guests who experienced luxury and comfort at LD Hotel
            </p>

            {/* Rating summary */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 text-2xl" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-gray-400">(2.5K+ reviews)</span>
            </div>
          </motion.div>

          {/* Main Testimonial Carousel */}
          <div className="relative h-[500px] md:h-[400px] mb-8">
            {/* Carousel Container */}
            <div className="relative h-full overflow-hidden">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute inset-0 flex items-center justify-center px-12"
                >
                  <motion.div
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 max-w-3xl mx-auto border border-white/20 shadow-2xl cursor-pointer group"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                    onClick={() => openModal(testimonials[currentIndex])}
                  >
                    {/* Quote icon */}
                    <FormatQuote className="text-amber-400 text-4xl mb-4 opacity-50" />

                    {/* Testimonial text */}
                    <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6 line-clamp-4">
                      "{testimonials[currentIndex].text}"
                    </p>

                    {/* Author info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${testimonials[currentIndex].name}&background=random&size=128`;
                            }}
                          />
                          <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <h6 className="font-bold text-xl text-white">
                            {testimonials[currentIndex].name}
                          </h6>
                          <p className="text-amber-400">
                            {testimonials[currentIndex].profession}
                          </p>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="text-amber-400 text-sm" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Read more indicator */}
                      <motion.div
                        className="bg-amber-400/20 p-2 rounded-full"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(245,158,11,0.3)" }}
                      >
                        <MessageRounded className="text-amber-400" />
                      </motion.div>
                    </div>

                    {/* Date */}
                    <div className="mt-4 text-sm text-gray-400">
                      {testimonials[currentIndex].date || "February 2026"}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {showModal && selectedTestimonial && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-20 h-20 rounded-full object-cover border-3 border-amber-400"
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${selectedTestimonial.name}&background=random&size=128`;
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-white text-2xl">
                      {selectedTestimonial.name}
                    </h3>
                    <p className="text-amber-400 text-lg">
                      {selectedTestimonial.profession}
                    </p>
                    <div className="flex items-center space-x-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close modal"
                >
                  <Close className="text-2xl" />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-amber-400/30 text-6xl" />
                  <p className="text-gray-200 text-lg leading-relaxed pl-8">
                    {selectedTestimonial.text}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <VerifiedUser className="text-amber-400" />
                    <span>Verified Guest</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Mail className="text-amber-400" />
                    <span>{selectedTestimonial.email || "guest@example.com"}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <FaBriefcase className="text-amber-400" />
                    <span>{selectedTestimonial.profession}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <MessageRounded className="text-amber-400" />
                    <span>{selectedTestimonial.date || "February 2026"}</span>
                  </div>
                </div>

                {/* Helpful Section */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-gray-400">Was this review helpful?</span>
                  <div className="flex space-x-2">
                    <motion.button
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Yes 👍
                    </motion.button>
                    <motion.button
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Report
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};