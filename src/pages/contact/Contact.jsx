// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
// import axios from 'axios';
// export const ContactSection = () => {
//   return (
//     <div className="py-16 bg-gray-900 rounded-xl text-white dark:text-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h6 className="text-blue-400 uppercase font-semibold tracking-wider">
//             Contact Us
//           </h6>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">
//             Get In <span className="text-blue-400">Touch</span>
//           </h2>
//           <p className="text-white max-w-2xl mx-auto mt-4">
//             Have questions or need assistance? Our team is here to help you with
//             all your inquiries.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="bg-white rounded-lg shadow-md p-6"
//           >
//             <ContactForm />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <ContactInfoCard
//               icon={<FaPhone className="text-blue-400 text-xl" />}
//               title="Phone"
//               items={["+250 (78) 794-4577", "+250 (72) 755-6145"]}
//             />

//             <ContactInfoCard
//               icon={<FaEnvelope className="text-blue-400 text-xl" />}
//               title="Email"
//               items={["info@hotel.com", "support@hotel.com"]}
//             />

//             <ContactInfoCard
//               icon={<FaMapMarkerAlt className="text-blue-400 text-xl" />}
//               title="Address"
//               items={[
//                 "123 Luxury Street",
//                 "Hospitality District",
//                 "Kigali, KG 191",
//               ]}
//             />

//             <ContactInfoCard
//               icon={<FaClock className="text-blue-400 text-xl" />}
//               title="Working Hours"
//               className="text-black font-bold"
//               items={[
//                 "Monday - Friday: 9:00 - 18:00",
//                 "Saturday: 10:00 - 16:00",
//                 "Sunday: Closed",
//               ]}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ContactInfoCard = ({ icon, title, items }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white rounded-lg shadow-md p-6 flex items-start"
//     >
//       <h2 className="bg-blue-text-blue-400 bg-opacity-10 p-3 rounded-full mr-4">
//         {icon}
//       </h2>
//       <div>
//         <h3 className="font-semibold text-black text-lg mb-2">{title}</h3>
//         <ul className="space-y-1">
//           {items.map((item, index) => (
//             <li key={index} className="text-gray-600">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // Clear error when user types
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null,
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.subject.trim()) newErrors.subject = "Subject is required";
//     if (!formData.message.trim()) newErrors.message = "Message is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!validateForm()) return;
  
//     setIsSubmitting(true);
  
//     try {
//       // Replace with your actual API endpoint
//       const response = await axios.post('https://hotel-nodejs-oa32.onrender.com/83920/92303', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
   
//       });
//       if (response) {
//         alert('Message sent successfully !!');
//         setSubmitSuccess(true);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       }
//     } catch (error) {
//       alert("Submission error:", error)
//       // You might want to set an error state here
//       // setSubmissionError(error.response?.data?.message || "Submission failed");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (submitSuccess) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="text-center py-8"
//       >
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <svg
//             className="w-10 h-10 text-green-500"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>
//         <h3 className="text-xl font-semibold text-black mb-2">
//           Message Sent Successfully!
//         </h3>
//         <p className="text-gray-600 mb-6">
//           Thank you for contacting us. We'll get back to you soon.
//         </p>
//         <button
//           onClick={() => setSubmitSuccess(false)}
//           className="bg-blue-text-blue-400 hover:bg-blue-text-blue-400-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
//         >
//           Send Another Message
//         </button>
//       </motion.div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="bg-white text-black space-y-4">
//       <div>
//         <label htmlFor="name" className="block text-gray-700 mb-1">
//           Full Name <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent ${
//             errors.name ? "border-red-500" : "border-gray-300"
//           }`}
//           placeholder="John Doe"
//         />
//         {errors.name && (
//           <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//         )}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="email" className="block text-gray-700 mb-1">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             }`}
//             placeholder="john@example.com"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-gray-700 mb-1">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent"
//             placeholder="+1 (123) 456-7890"
//           />
//         </div>
//       </div>

//       <div>
//         <label htmlFor="subject" className="block text-gray-700 mb-1">
//           Subject <span className="text-red-500">*</span>
//         </label>
//         <input
//           type="text"
//           id="subject"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent ${
//             errors.subject ? "border-red-500" : "border-gray-300"
//           }`}
//           placeholder="What's this about?"
//         />
//         {errors.subject && (
//           <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="message" className="block text-gray-700 mb-1">
//           Message <span className="text-red-500">*</span>
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows={5}
//           className={`w-full text-black  px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-text-blue-400 focus:border-transparent ${
//             errors.message ? "border-red-500" : "border-gray-300"
//           }`}
//           placeholder="Your message here..."
//         ></textarea>
//         {errors.message && (
//           <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//         )}
//       </div>

//       <div className="pt-2">
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-blue-text-blue-400 hover:bg-blue-text-blue-400-dark text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70 flex items-center justify-center"
//         >
//           {isSubmitting ? (
//             <>
//               <svg
//                 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                 ></path>
//               </svg>
//               Sending...
//             </>
//           ) : (
//             "Send Message"
//           )}
//         </button>
//       </div>
//     </form>
//   );
// };

// // Map component (would need Google Maps API key in a real implementation)
// const ContactMap = () => {
//   return (
//     <div className="mt-8 rounded-lg overflow-hidden shadow-md">
//       <div className="h-64 bg-gray-200 flex items-center justify-center">
//         <p className="text-gray-500">Map would be displayed here</p>
//         {/* In a real implementation, you would use Google Maps or similar */}
//         <iframe
//           src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123+Luxury+Street,Hospitality+District,New+York,NY+10001`}
//           className="w-full h-full"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };














// /* eslint-disable no-unused-vars */
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState } from "react";
// import { 
//   FaPhone, 
//   FaEnvelope, 
//   FaMapMarkerAlt, 
//   FaClock, 
//   FaFacebook, 
//   FaTwitter, 
//   FaInstagram, 
//   FaLinkedin,
//   FaPaperPlane,
//   FaCheck,
//   FaTimes,
//   FaUser,
//   FaComment,
//   FaHeadset,
//   FaBuilding,
//   FaWhatsapp,
//   FaTelegram
// } from "react-icons/fa";
// import { MdLocationOn, MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
// import axios from 'axios';

// export const ContactSection = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-gradient-to-r from-amber-400/10 to-pink-500/10 rounded-full blur-3xl"
//             style={{
//               width: Math.random() * 400 + 100,
//               height: Math.random() * 400 + 100,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               x: [0, Math.random() * 100 - 50, 0],
//               y: [0, Math.random() * 100 - 50, 0],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: Math.random() * 15 + 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-20 left-10 text-amber-400/10 text-[150px] font-serif">📞</div>
//       <div className="absolute bottom-20 right-10 text-pink-400/10 text-[150px] font-serif">✉️</div>

//       <div className="container mx-auto px-4 relative z-10 max-w-7xl">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             className="inline-block px-6 py-2 bbg-gradient-to-r from-gray-900 via-black to-gray-900 text-white rounded-full text-sm font-semibold mb-4"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             📞 Get In Touch
//           </motion.div>
          
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
//               Contact Our Team
//             </span>
//           </h1>
          
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Have questions or need assistance? Our dedicated team is available 24/7 to help you with all your inquiries and make your stay unforgettable.
//           </p>

//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
//           >
//             <ContactForm />
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <ContactInfoCard
//               icon={<FaPhone className="text-2xl" />}
//               title="Phone"
//               items={[
//                 { value: "+250 (78) 794-4577", label: "Reservations" },
//                 { value: "+250 (72) 755-6145", label: "24/7 Support" }
//               ]}
//               gradient="from-green-500 to-emerald-500"
//             />

//             <ContactInfoCard
//               icon={<FaEnvelope className="text-2xl" />}
//               title="Email"
//               items={[
//                 { value: "info@luxuryhotel.com", label: "General Inquiries" },
//                 { value: "reservations@luxuryhotel.com", label: "Bookings" },
//                 { value: "support@luxuryhotel.com", label: "Guest Support" }
//               ]}
//               gradient="from-blue-500 to-cyan-500"
//             />

//             <ContactInfoCard
//               icon={<FaMapMarkerAlt className="text-2xl" />}
//               title="Address"
//               items={[
//                 { value: "123 Luxury Street", label: "Hospitality District" },
//                 { value: "Kigali, KG 191", label: "Rwanda" }
//               ]}
//               gradient="from-purple-500 to-pink-500"
//             />

//             <ContactInfoCard
//               icon={<FaClock className="text-2xl" />}
//               title="Working Hours"
//               items={[
//                 { value: "Monday - Friday", label: "9:00 AM - 6:00 PM" },
//                 { value: "Saturday", label: "10:00 AM - 4:00 PM" },
//                 { value: "Sunday", label: "Closed (Emergency Only)" }
//               ]}
//               gradient="from-orange-500 to-red-500"
//             />

//             {/* Social Media Links */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
//             >
//               <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 {[
//                   { icon: <FaFacebook />, color: "bg-blue-600", link: "#" },
//                   { icon: <FaTwitter />, color: "bg-blue-400", link: "#" },
//                   { icon: <FaInstagram />, color: "bg-pink-600", link: "#" },
//                   { icon: <FaLinkedin />, color: "bg-blue-700", link: "#" },
//                   { icon: <FaWhatsapp />, color: "bg-green-600", link: "#" },
//                   { icon: <FaTelegram />, color: "bg-blue-500", link: "#" }
//                 ].map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-3 ${social.color} rounded-full text-white hover:shadow-lg hover:shadow-${social.color}/30`}
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     {social.icon}
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Live Chat Button */}
//             <motion.button
//               className="w-full p-4 bbg-gradient-to-r from-gray-900 via-black to-gray-900 text-white rounded-2xl font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/30"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <FaHeadset />
//               <span>Live Chat Available 24/7</span>
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* Map Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="mt-12"
//         >
//           <ContactMap />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const ContactInfoCard = ({ icon, title, items, gradient }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5, scale: 1.02 }}
//       className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300"
//     >
//       <div className="flex items-start space-x-4">
//         <div className={`p-4 bg-gradient-to-r ${gradient} rounded-xl shadow-lg`}>
//           {icon}
//         </div>
//         <div className="flex-1">
//           <h3 className="text-xl font-bold mb-3">{title}</h3>
//           <ul className="space-y-2">
//             {items.map((item, index) => (
//               <li key={index} className="flex items-start space-x-2">
//                 <span className="text-amber-400 mt-1">•</span>
//                 <div>
//                   <span className="text-gray-300">{item.label}:</span>
//                   <span className="text-white ml-2 font-medium">{item.value}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     // Clear error when user types
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: null,
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.subject.trim()) newErrors.subject = "Subject is required";
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!validateForm()) return;
  
//     setIsSubmitting(true);
  
//     try {
//       const response = await axios.post('https://hotel-nodejs-oa32.onrender.com/83920/92303', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (response) {
//         setSubmitSuccess(true);
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
        
//         // Reset success message after 5 seconds
//         setTimeout(() => setSubmitSuccess(false), 5000);
//       }
//     } catch (error) {
//       alert("Submission error: " + (error.response?.data?.message || error.message));
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Success Message Toast */}
//       <AnimatePresence>
//         {submitSuccess && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             className="absolute top-0 left-0 right-0 bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between z-10"
//           >
//             <div className="flex items-center space-x-2">
//               <FaCheck className="text-white" />
//               <span>Message sent successfully! We'll respond within 15 minutes.</span>
//             </div>
//             <button onClick={() => setSubmitSuccess(false)}>
//               <FaTimes />
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <form onSubmit={handleSubmit} className="space-y-5 pt-4 text-black">
//         <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

//         {/* Name Field */}
//         <div className="relative">
//           <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
//             Full Name <span className="text-red-400">*</span>
//           </label>
//           <div className="relative">
//             <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400" />
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               onFocus={() => setFocusedField('name')}
//               onBlur={() => setFocusedField(null)}
//               className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-400 ${
//                 errors.name 
//                   ? "border-red-500" 
//                   : focusedField === 'name'
//                   ? "border-amber-400 ring-2 ring-amber-400/20"
//                   : "border-white/20"
//               }`}
//               placeholder="John Doe"
//             />
//           </div>
//           {errors.name && (
//             <motion.p 
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-red-400 text-sm mt-1 flex items-center"
//             >
//               <FaTimes className="mr-1 text-xs" /> {errors.name}
//             </motion.p>
//           )}
//         </div>

//         {/* Email and Phone Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="relative">
//             <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
//               Email <span className="text-red-400">*</span>
//             </label>
//             <div className="relative">
//               <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400" />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('email')}
//                 onBlur={() => setFocusedField(null)}
//                 className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-400 ${
//                   errors.email 
//                     ? "border-red-500" 
//                     : focusedField === 'email'
//                     ? "border-amber-400 ring-2 ring-amber-400/20"
//                     : "border-white/20"
//                 }`}
//                 placeholder="john@example.com"
//               />
//             </div>
//             {errors.email && (
//               <motion.p 
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-red-400 text-sm mt-1 flex items-center"
//               >
//                 <FaTimes className="mr-1 text-xs" /> {errors.email}
//               </motion.p>
//             )}
//           </div>

//           <div className="relative">
//             <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
//               Phone Number
//             </label>
//             <div className="relative">
//               <MdPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400" />
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('phone')}
//                 onBlur={() => setFocusedField(null)}
//                 className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all text-white placeholder-gray-400"
//                 placeholder="+1 (123) 456-7890"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Subject Field */}
//         <div className="relative">
//           <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
//             Subject <span className="text-red-400">*</span>
//           </label>
//           <div className="relative">
//             <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400" />
//             <input
//               type="text"
//               id="subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               onFocus={() => setFocusedField('subject')}
//               onBlur={() => setFocusedField(null)}
//               className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-400 ${
//                 errors.subject 
//                   ? "border-red-500" 
//                   : focusedField === 'subject'
//                   ? "border-amber-400 ring-2 ring-amber-400/20"
//                   : "border-white/20"
//               }`}
//               placeholder="What's this about?"
//             />
//           </div>
//           {errors.subject && (
//             <motion.p 
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-red-400 text-sm mt-1 flex items-center"
//             >
//               <FaTimes className="mr-1 text-xs" /> {errors.subject}
//             </motion.p>
//           )}
//         </div>

//         {/* Message Field */}
//         <div className="relative">
//           <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
//             Message <span className="text-red-400">*</span>
//           </label>
//           <div className="relative">
//             <FaComment className="absolute left-4 top-4 text-amber-400" />
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               onFocus={() => setFocusedField('message')}
//               onBlur={() => setFocusedField(null)}
//               rows={5}
//               className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl focus:outline-none transition-all text-white placeholder-gray-400 ${
//                 errors.message 
//                   ? "border-red-500" 
//                   : focusedField === 'message'
//                   ? "border-amber-400 ring-2 ring-amber-400/20"
//                   : "border-white/20"
//               }`}
//               placeholder="Your message here... (minimum 10 characters)"
//             />
//           </div>
//           {errors.message && (
//             <motion.p 
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-red-400 text-sm mt-1 flex items-center"
//             >
//               <FaTimes className="mr-1 text-xs" /> {errors.message}
//             </motion.p>
//           )}
//           {formData.message && formData.message.length < 10 && (
//             <p className="text-amber-400 text-sm mt-1">
//               {10 - formData.message.length} more characters needed
//             </p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div className="pt-4">
//           <motion.button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bbg-gradient-to-r from-gray-900 via-black to-gray-900 text-white text-white font-semibold py-4 px-6 rounded-xl transition-all disabled:opacity-70 relative overflow-hidden group"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <span className="relative z-10 flex items-center justify-center space-x-2">
//               {isSubmitting ? (
//                 <>
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                   >
//                     <FaPaperPlane className="text-white" />
//                   </motion.div>
//                   <span>Sending Message...</span>
//                 </>
//               ) : (
//                 <>
//                   <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
//                   <span>Send Message</span>
//                 </>
//               )}
//             </span>
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-amber-600 to-pink-600"
//               initial={{ x: "100%" }}
//               whileHover={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.button>
//         </div>

//         {/* Form Footer */}
//         <p className="text-center text-gray-400 text-sm mt-4">
//           We'll respond within 15 minutes during business hours
//         </p>
//       </form>
//     </div>
//   );
// };

// const ContactMap = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
//     >
//       <h3 className="text-xl font-bold text-white mb-4">Find Us Here</h3>
//       <div className="h-80 rounded-xl overflow-hidden relative group">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.47555301662!2d30.0615!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnMzguOCJTIDMwwrAwMyc0MS40IkU!5e0!3m2!1sen!2s!4v1234567890"
//           className="w-full h-full border-0"
//           allowFullScreen
//           loading="lazy"
//         />
        
//         {/* Map Overlay with Hotel Info */}
//         <motion.div 
//           className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-xl p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           initial={false}
//         >
//           <div className="flex items-center space-x-2">
//             <MdLocationOn className="text-amber-400 text-xl" />
//             <div>
//               <h4 className="font-bold">Luxury Hotel</h4>
//               <p className="text-sm text-gray-300">123 Luxury Street, Hospitality District, Kigali</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };























/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaPaperPlane,
  FaCheck,
  FaTimes,
  FaUser,
  FaComment,
  FaHeadset,
  FaBuilding,
  FaWhatsapp,
  FaTelegram
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
import axios from 'axios';

export const ContactSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-5 sm:top-20 sm:left-10 text-blue-400/10 text-[80px] sm:text-[120px] md:text-[150px] font-serif">📞</div>
      <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 text-purple-400/10 text-[80px] sm:text-[120px] md:text-[150px] font-serif">✉️</div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-t from-blue-500 to-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📞 Get In Touch
          </motion.div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Contact Our Team
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Have questions or need assistance? Our dedicated team is available 24/7 to help you with all your inquiries and make your stay unforgettable.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 sm:bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-2xl"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <ContactInfoCard
              icon={<FaPhone className="text-lg sm:text-xl md:text-2xl" />}
              title="Phone"
              items={[
                { value: "+250 (78) 794-4577", label: "Reservations" },
                { value: "+250 (72) 755-6145", label: "24/7 Support" }
              ]}
              gradient="from-blue-500 to-blue-700"
            />

            <ContactInfoCard
              icon={<FaEnvelope className="text-lg sm:text-xl md:text-2xl" />}
              title="Email"
              items={[
                { value: "info@luxuryhotel.com", label: "General Inquiries" },
                { value: "reservations@luxuryhotel.com", label: "Bookings" },
                { value: "support@luxuryhotel.com", label: "Guest Support" }
              ]}
              gradient="from-blue-400 to-blue-600"
            />

            <ContactInfoCard
              icon={<FaMapMarkerAlt className="text-lg sm:text-xl md:text-2xl" />}
              title="Address"
              items={[
                { value: "123 Luxury Street", label: "Hospitality District" },
                { value: "Kigali, KG 191", label: "Rwanda" }
              ]}
              gradient="from-purple-500 to-pink-500"
            />

            <ContactInfoCard
              icon={<FaClock className="text-lg sm:text-xl md:text-2xl" />}
              title="Working Hours"
              items={[
                { value: "Monday - Friday", label: "9:00 AM - 6:00 PM" },
                { value: "Saturday", label: "10:00 AM - 4:00 PM" },
                { value: "Sunday", label: "Closed (Emergency Only)" }
              ]}
              gradient="from-orange-500 to-red-500"
            />

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 sm:bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {[
                  { icon: <FaFacebook />, gradient: "from-blue-600 to-blue-800", link: "#" },
                  { icon: <FaTwitter />, gradient: "from-blue-400 to-blue-600", link: "#" },
                  { icon: <FaInstagram />, gradient: "from-purple-500 to-pink-500", link: "#" },
                  { icon: <FaLinkedin />, gradient: "from-blue-700 to-blue-900", link: "#" },
                  { icon: <FaWhatsapp />, gradient: "from-green-500 to-green-700", link: "#" },
                  { icon: <FaTelegram />, gradient: "from-blue-500 to-blue-700", link: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 bg-gradient-to-t ${social.gradient} rounded-full text-white hover:shadow-lg`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="text-sm sm:text-base md:text-lg">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Live Chat Button */}
            <motion.button
              className="w-full p-3 sm:p-4 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaHeadset className="text-base sm:text-lg" />
              <span>Live Chat Available 24/7</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <ContactMap />
        </motion.div>
      </div>
    </div>
  );
};

const ContactInfoCard = ({ icon, title, items, gradient }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white/5 sm:bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
    >
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className={`p-2 sm:p-3 md:p-4 bg-gradient-to-t ${gradient} rounded-lg sm:rounded-xl shadow-lg flex-shrink-0`}>
          <div className="text-white">{icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                <div className="text-xs sm:text-sm md:text-base">
                  <span className="text-gray-300">{item.label}:</span>
                  <span className="text-white ml-1 sm:ml-2 font-medium break-words">{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

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
  const [focusedField, setFocusedField] = useState(null);

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
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

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
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      alert("Submission error: " + (error.response?.data?.message || error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Success Message Toast - with close button */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute top-0 left-0 right-0 bg-gradient-to-t from-green-500 to-green-700 text-white p-3 sm:p-4 rounded-t-xl sm:rounded-t-2xl flex items-center justify-between z-10"
          >
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
              <FaCheck className="text-white flex-shrink-0" />
              <span>Message sent successfully! We'll respond within 15 minutes.</span>
            </div>
            <button 
              onClick={() => setSubmitSuccess(false)}
              className="p-1 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full text-white"
            >
              <FaTimes className="text-xs sm:text-sm" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 pt-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Send Us a Message</h3>

        {/* Name Field */}
        <div className="relative">
          <label htmlFor="name" className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
            Full Name <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-400 text-sm sm:text-base" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white/5 border rounded-lg sm:rounded-xl focus:outline-none transition-all text-white placeholder-gray-400 text-xs sm:text-sm ${
                errors.name 
                  ? "border-red-500" 
                  : focusedField === 'name'
                  ? "border-blue-400 ring-2 ring-blue-400/20"
                  : "border-white/20"
              }`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs sm:text-sm mt-1 flex items-center"
            >
              <FaTimes className="mr-1 text-xs" /> {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email and Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="relative">
            <label htmlFor="email" className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
              Email <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <MdEmail className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-400 text-sm sm:text-base" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white/5 border rounded-lg sm:rounded-xl focus:outline-none transition-all text-white placeholder-gray-400 text-xs sm:text-sm ${
                  errors.email 
                    ? "border-red-500" 
                    : focusedField === 'email'
                    ? "border-blue-400 ring-2 ring-blue-400/20"
                    : "border-white/20"
                }`}
                placeholder="john@example.com"
              />
            </div>
            {errors.email && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs sm:text-sm mt-1 flex items-center"
              >
                <FaTimes className="mr-1 text-xs" /> {errors.email}
              </motion.p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="phone" className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <MdPhone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-400 text-sm sm:text-base" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all text-white placeholder-gray-400 text-xs sm:text-sm"
                placeholder="+1 (123) 456-7890"
              />
            </div>
          </div>
        </div>

        {/* Subject Field */}
        <div className="relative">
          <label htmlFor="subject" className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
            Subject <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FaBuilding className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-400 text-sm sm:text-base" />
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              className={`w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white/5 border rounded-lg sm:rounded-xl focus:outline-none transition-all text-white placeholder-gray-400 text-xs sm:text-sm ${
                errors.subject 
                  ? "border-red-500" 
                  : focusedField === 'subject'
                  ? "border-blue-400 ring-2 ring-blue-400/20"
                  : "border-white/20"
              }`}
              placeholder="What's this about?"
            />
          </div>
          {errors.subject && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs sm:text-sm mt-1 flex items-center"
            >
              <FaTimes className="mr-1 text-xs" /> {errors.subject}
            </motion.p>
          )}
        </div>

        {/* Message Field */}
        <div className="relative">
          <label htmlFor="message" className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">
            Message <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <FaComment className="absolute left-3 sm:left-4 top-3 sm:top-4 text-blue-400 text-sm sm:text-base" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={4}
              className={`w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-white/5 border rounded-lg sm:rounded-xl focus:outline-none transition-all text-white placeholder-gray-400 text-xs sm:text-sm ${
                errors.message 
                  ? "border-red-500" 
                  : focusedField === 'message'
                  ? "border-blue-400 ring-2 ring-blue-400/20"
                  : "border-white/20"
              }`}
              placeholder="Your message here... (minimum 10 characters)"
            />
          </div>
          {errors.message && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs sm:text-sm mt-1 flex items-center"
            >
              <FaTimes className="mr-1 text-xs" /> {errors.message}
            </motion.p>
          )}
          {formData.message && formData.message.length < 10 && (
            <p className="text-blue-400 text-xs sm:text-sm mt-1">
              {10 - formData.message.length} more characters needed
            </p>
          )}
        </div>

        {/* Submit Button - Blue gradient */}
        <div className="pt-2 sm:pt-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all disabled:opacity-70 relative overflow-hidden group text-sm sm:text-base"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaPaperPlane className="text-white text-sm sm:text-base" />
                  </motion.div>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
                  <span>Send Message</span>
                </>
              )}
            </span>
          </motion.button>
        </div>

        {/* Form Footer */}
        <p className="text-center text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
          We'll respond within 15 minutes during business hours
        </p>
      </form>
    </div>
  );
};

const ContactMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 sm:bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20"
    >
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4">Find Us Here</h3>
      <div className="h-48 sm:h-64 md:h-80 rounded-lg sm:rounded-xl overflow-hidden relative group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.47555301662!2d30.0615!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnMzguOCJTIDMwwrAwMyc0MS40IkU!5e0!3m2!1sen!2s!4v1234567890"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          title="Hotel Location"
        />
        
        {/* Map Overlay with Hotel Info */}
        <motion.div 
          className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 bg-black/70 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <div className="flex items-center space-x-2">
            <MdLocationOn className="text-blue-400 text-base sm:text-xl flex-shrink-0" />
            <div className="min-w-0">
              <h4 className="font-bold text-xs sm:text-sm md:text-base">Luxury Hotel</h4>
              <p className="text-[10px] sm:text-xs text-gray-300 truncate">123 Luxury Street, Hospitality District, Kigali</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};