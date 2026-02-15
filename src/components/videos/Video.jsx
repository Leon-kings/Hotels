// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";

// export const LuxuryHotel = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [videoId, setVideoId] = useState("");
//   const [activeTab, setActiveTab] = useState("rooms");

//   // Extract YouTube ID from URL
//   const extractYouTubeId = (url) => {
//     const regExp =
//       /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? match[2] : null;
//   };

//   const handlePlayClick = (url) => {
//     const id = extractYouTubeId(url);
//     if (id) {
//       setVideoId(id);
//       setIsModalOpen(true);
//     } else {
//       console.error("Invalid YouTube URL");
//     }
//   };

//   const handleRoomsClick = () => {
//     setActiveTab("rooms");
//     const roomsSection = document.getElementById("rooms");
//     if (roomsSection) {
//       roomsSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleBookClick = () => {
//     setActiveTab("book");
//     const bookingSection = document.getElementById("booking");
//     if (bookingSection) {
//       bookingSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="w-full">
//       <motion.div
//         className="container mx-auto py-5 px-4 md:px-6 lg:px-8 xl:px-0"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1, duration: 0.5 }}
//       >
//         <div className="flex flex-col lg:flex-row">
//           {/* Left Column - Text Content */}
//           <div className="w-full bg-gray-900 flex items-center p-8 lg:p-12">
//             <div className="max-w-lg">
//               <motion.h6
//                 className="text-white uppercase tracking-wider text-sm font-semibold mb-3"
//                 initial={{ x: -20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Luxury Living
//               </motion.h6>
//               <motion.h1
//                 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
//                 initial={{ x: -20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 Discover A Brand Luxurious Hotel
//               </motion.h1>
//               <motion.p
//                 className="text-gray-300 mb-6"
//                 initial={{ x: -20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 LD Hotel is happy to serve you one of the best suite and room to
//                 host your familly and also we are able to host board meeting on
//                 best suitable room. <br /> Provides a variety of indoor and
//                 outdoor event spaces, suitable for both business meetings and
//                 weddings, and is centrally located.
//               </motion.p>
//               <motion.div
//                 className="flex flex-col sm:flex-row gap-4"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <Link to={"/R-8763-327/34"}>
//                   <Button>
//                     <motion.button
//                       onClick={handleRoomsClick}
//                       className={`py-3 px-5 md:px-8 rounded-md text-center transition duration-300 ${
//                         activeTab === "rooms"
//                           ? "bg-blue-700 text-white"
//                           : "bg-blue-600 hover:bg-blue-700 text-white"
//                       }`}
//                     >
//                       Our Rooms
//                     </motion.button>
//                   </Button>
//                 </Link>
//                 <Link to={"/C-3872-2344/34"}>
//                   <Button>
//                     <motion.button
//                       onClick={handleBookClick}
//                       className={`py-3 px-5 md:px-8 rounded-md text-center transition duration-300 ${
//                         activeTab === "book"
//                           ? "bg-gray-200 text-gray-900"
//                           : "bg-white hover:bg-gray-100 dark:text-white text-gray-900"
//                       }`}
//                     >
//                       Book A Room
//                     </motion.button>
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>

//           {/* Right Column - Video Thumbnail */}
//           <div className="w-full relative min-h-[400px]">
//             <motion.button
//               type="button"
//               className="absolute inset-0 flex items-center justify-center w-full h-full overflow-hidden"
//               onClick={() => handlePlayClick("https://youtu.be/BKFcvnd0aaU")}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Video Thumbnail - Now properly contained in the right column */}
//               <div className="absolute inset-0 bg-cover bg-center" />
//               {/* Overlay for better play button visibility */}
//               <div
//                 style={{
//                   backgroundImage: `url(https://img.youtube.com/vi/BKFcvnd0aaU/maxresdefault.jpg)`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//                 className="absolute inset-0 bg-opacity-30"
//               ></div>
//               {/* Play Button */}
//               <div className="relative z-10">
//                 <div className="w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                   <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center">
//                     <svg
//                       className="w-8 h-8 text-white ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {/* YouTube Video Modal */}
//       {isModalOpen && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsModalOpen(false)}
//         >
//           <motion.div
//             className="relative w-full max-w-6xl mx-4"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button - Styled better */}
//             <button
//               className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-10"
//               onClick={() => setIsModalOpen(false)}
//               aria-label="Close video modal"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-10 w-10 text-amber-300"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Responsive YouTube Iframe Container */}
//             <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
//               <iframe
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
//                 className="absolute top-0 left-0 w-full h-full"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="Luxury Hotel Video"
//               />
//             </div>

//             {/* Video Description (optional) */}
//             <div className="p-4 bg-gray-900 text-white rounded-b-lg">
//               <h3 className="text-xl font-semibold">Luxury Hotel Experience</h3>
//               <p className="text-gray-300 mt-1">
//                 Discover our world-class amenities
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };























// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";

// export const LuxuryHotel = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [videoId, setVideoId] = useState("");
//   const [activeTab, setActiveTab] = useState("rooms");

//   // Extract YouTube ID from URL
//   const extractYouTubeId = (url) => {
//     const regExp =
//       /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? match[2] : null;
//   };

//   const handlePlayClick = (url) => {
//     const id = extractYouTubeId(url);
//     if (id) {
//       setVideoId(id);
//       setIsModalOpen(true);
//     } else {
//       console.error("Invalid YouTube URL");
//     }
//   };

//   const handleRoomsClick = () => {
//     setActiveTab("rooms");
//     const roomsSection = document.getElementById("rooms");
//     if (roomsSection) {
//       roomsSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleBookClick = () => {
//     setActiveTab("book");
//     const bookingSection = document.getElementById("booking");
//     if (bookingSection) {
//       bookingSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
//       <motion.div
//         className="w-full"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1, duration: 0.5 }}
//       >
//         <div className="grid grid-cols-1 bg-gradient-to-r min-h-screen from-gray-900 via-black to-gray-900 text-white md:grid-cols-2 lg:grid-cols-2 gap-2 xl:grid-cols-2">
//           {/* Left Column - Text Content */}
//           <div className="w-full bg-gradient-to-r min-h-screen from-gray-900 via-black to-gray-900 text-white">
//             <div className="max-w-lg w-full">
//               <motion.h6
//                 className="text-white uppercase tracking-wider text-xs xsm:text-sm font-semibold mb-2 xsm:mb-3"
//                 initial={{ x: -20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Luxury Living
//               </motion.h6>
//               <motion.h1
//                 className="text-white text-2xl xsm:text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xsm:mb-4"
//                 initial={{ x: -20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 Discover A Brand Luxurious Hotel
//               </motion.h1>
//               <motion.p
//                 className="text-gray-300 text-sm xsm:text-base mb-4 xsm:mb-6"
//                 initial={{ x: -20, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 LD Hotel is happy to serve you one of the best suite and room to
//                 host your familly and also we are able to host board meeting on
//                 best suitable room. <br className="hidden sm:block" /> Provides a variety of indoor and
//                 outdoor event spaces, suitable for both business meetings and
//                 weddings, and is centrally located.
//               </motion.p>
//               <motion.div
//                 className="flex flex-col xsm:flex-row sm:flex-row gap-3 xsm:gap-4"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <Link to={"/R-8763-327/34"} className="w-full xsm:w-auto">
//                   <Button className="w-full xsm:w-auto">
//                     <motion.button
//                       onClick={handleRoomsClick}
//                       className={`w-full xsm:w-auto py-2.5 xsm:py-3 px-4 xsm:px-5 md:px-8 rounded-md text-center text-sm xsm:text-base transition duration-300 ${
//                         activeTab === "rooms"
//                           ? "bg-blue-700 text-white"
//                           : "bg-blue-600 hover:bg-blue-700 text-white"
//                       }`}
//                     >
//                       Our Rooms
//                     </motion.button>
//                   </Button>
//                 </Link>
//                 <Link to={"/C-3872-2344/34"} className="w-full xsm:w-auto">
//                   <Button className="w-full xsm:w-auto">
//                     <motion.button
//                       onClick={handleBookClick}
//                       className={`w-full xsm:w-auto py-2.5 xsm:py-3 px-4 xsm:px-5 md:px-8 rounded-md text-center text-sm xsm:text-base transition duration-300 ${
//                         activeTab === "book"
//                           ? "bg-gray-200 text-gray-900"
//                           : "bg-white hover:bg-gray-100 text-gray-900"
//                       }`}
//                     >
//                       Book A Room
//                     </motion.button>
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>

//           {/* Right Column - Video Thumbnail */}
//           <div className="w-full relative min-h-screen">
//             <motion.button
//               type="button"
//               className="absolute inset-0 flex items-center justify-center w-full h-full overflow-hidden"
//               onClick={() => handlePlayClick("https://youtu.be/BKFcvnd0aaU")}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Overlay for better play button visibility */}
//               <div
//                 style={{
//                   backgroundImage: `url(https://img.youtube.com/vi/BKFcvnd0aaU/maxresdefault.jpg)`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//                 className="absolute inset-0"
//               ></div>
//               {/* Dark overlay for better contrast */}
//               <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
              
//               {/* Play Button */}
//               <div className="relative z-10">
//                 <div className="w-14 h-14 xsm:w-16 xsm:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                   <div className="w-10 h-10 xsm:w-12 xsm:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
//                     <svg
//                       className="w-5 h-5 xsm:w-6 xsm:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-0.5 sm:ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {/* YouTube Video Modal */}
//       {isModalOpen && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 xsm:p-3 sm:p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={() => setIsModalOpen(false)}
//         >
//           <motion.div
//             className="relative w-full max-w-4xl xl:max-w-6xl mx-2 xsm:mx-3 sm:mx-4"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute -top-8 xsm:-top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition-colors z-10"
//               onClick={() => setIsModalOpen(false)}
//               aria-label="Close video modal"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 xsm:h-8 xsm:w-8 sm:h-10 sm:w-10 text-amber-300 hover:text-amber-400 transition-colors"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Responsive YouTube Iframe Container */}
//             <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
//               <iframe
//                 src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
//                 className="absolute top-0 left-0 w-full h-full"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="Luxury Hotel Video"
//               />
//             </div>

//             {/* Video Description */}
//             <div className="p-3 xsm:p-4 bg-gray-900 bg-opacity-90 text-white rounded-b-lg backdrop-blur-sm">
//               <h3 className="text-base xsm:text-lg sm:text-xl font-semibold">
//                 Luxury Hotel Experience
//               </h3>
//               <p className="text-gray-300 text-xs xsm:text-sm sm:text-base mt-0.5 xsm:mt-1">
//                 Discover our world-class amenities and exceptional service
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };
























// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button, IconButton, Badge, Chip } from "@mui/material";
// import { Link } from "react-router-dom";
// import {
//   PlayCircle,
//   Close,
//   Hotel,
//   Restaurant,
//   Spa,
//   LocalBar,
//   Pool,
//   FitnessCenter,
//   Wifi,
//   RoomService,
//   AcUnit,
//   LocalParking,
//   Star,
//   TrendingUp,
//   Verified,
//   ChevronRight,
//   VolumeUp,
//   VolumeOff,
//   Fullscreen,
//   Share,
//   Favorite,
//   FavoriteBorder,
//   NavigateBefore,
//   NavigateNext,
//   PlayArrow,
//   Info,
//   AccessTime,
//   Visibility
// } from "@mui/icons-material";

// export const LuxuryHotel = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [videoId, setVideoId] = useState("");
//   const [activeTab, setActiveTab] = useState("rooms");
//   const [isMuted, setIsMuted] = useState(true);
//   const [isLiked, setIsLiked] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [activeVideoIndex, setActiveVideoIndex] = useState(0);
//   const [showVideoInfo, setShowVideoInfo] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showControls, setShowControls] = useState(true);
//   const videoRef = useRef(null);
//   const controlsTimeoutRef = useRef(null);

//   // Video gallery data with real working YouTube IDs
//   const videoGallery = [
//     {
//       id: 1,
//       title: "Luxury Suite Tour",
//       description: "Experience our presidential suite with panoramic city views",
//       url: "https://youtu.be/BKFcvnd0aaU",
//       thumbnail: "https://img.youtube.com/vi/BKFcvnd0aaU/maxresdefault.jpg",
//       duration: "3:45",
//       views: "125K",
//       category: "rooms",
//       rating: 4.9,
//       features: ["Ocean View", "King Bed", "Jacuzzi"],
//       youtubeId: "BKFcvnd0aaU"
//     },
//     {
//       id: 2,
//       title: "Fine Dining Experience",
//       description: "Michelin-starred restaurant with international cuisine",
//       url: "https://youtu.be/VIDEO_ID_2",
//       thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500",
//       duration: "4:20",
//       views: "89K",
//       category: "dining",
//       rating: 4.8,
//       features: ["Wine Cellar", "Chef's Table", "Outdoor Seating"],
//       youtubeId: "dQw4w9WgXcQ" // Placeholder - replace with actual ID
//     },
//     {
//       id: 3,
//       title: "Wellness & Spa",
//       description: "Rejuvenate your senses at our world-class spa",
//       url: "https://youtu.be/VIDEO_ID_3",
//       thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500",
//       duration: "3:15",
//       views: "67K",
//       category: "wellness",
//       rating: 4.9,
//       features: ["Steam Room", "Massage", "Yoga Studio"],
//       youtubeId: "dQw4w9WgXcQ" // Placeholder - replace with actual ID
//     },
//     {
//       id: 4,
//       title: "Infinity Pool",
//       description: "Spectacular rooftop infinity pool with sunset views",
//       url: "https://youtu.be/VIDEO_ID_4",
//       thumbnail: "https://images.unsplash.com/photo-1576016771786-59a6eb6dc2b6?w=500",
//       duration: "2:50",
//       views: "210K",
//       category: "amenities",
//       rating: 5.0,
//       features: ["Pool Bar", "Sun Deck", "Cabana Service"],
//       youtubeId: "dQw4w9WgXcQ" // Placeholder - replace with actual ID
//     },
//     {
//       id: 5,
//       title: "Event Halls & Weddings",
//       description: "Elegant spaces for your special occasions",
//       url: "https://youtu.be/VIDEO_ID_5",
//       thumbnail: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500",
//       duration: "5:10",
//       views: "156K",
//       category: "events",
//       rating: 4.7,
//       features: ["Ballroom", "Garden", "Catering"],
//       youtubeId: "dQw4w9WgXcQ" // Placeholder - replace with actual ID
//     }
//   ];

//   // Amenities list for enhanced UI
//   const amenities = [
//     { icon: <Pool />, label: "Infinity Pool" },
//     { icon: <Restaurant />, label: "Fine Dining" },
//     { icon: <Spa />, label: "Luxury Spa" },
//     { icon: <FitnessCenter />, label: "Gym" },
//     { icon: <Wifi />, label: "Free WiFi" },
//     { icon: <RoomService />, label: "Room Service" },
//     { icon: <AcUnit />, label: "AC" },
//     { icon: <LocalBar />, label: "Sky Bar" },
//     { icon: <LocalParking />, label: "Valet Parking" }
//   ];

//   // Extract YouTube ID from URL
//   const extractYouTubeId = (url) => {
//     const regExp =
//       /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? match[2] : null;
//   };

//   const handlePlayClick = (video) => {
//     const id = video.youtubeId || extractYouTubeId(video.url);
//     if (id) {
//       setSelectedVideo(video);
//       setVideoId(id);
//       setIsModalOpen(true);
//       setIsPlaying(true);
//       setActiveVideoIndex(videoGallery.findIndex(v => v.id === video.id));
//     } else {
//       console.error("Invalid YouTube URL");
//     }
//   };

//   const handleNextVideo = () => {
//     const nextIndex = (activeVideoIndex + 1) % videoGallery.length;
//     setActiveVideoIndex(nextIndex);
//     const nextVideo = videoGallery[nextIndex];
//     const id = nextVideo.youtubeId || extractYouTubeId(nextVideo.url);
//     if (id) {
//       setSelectedVideo(nextVideo);
//       setVideoId(id);
//       setIsPlaying(true);
//     }
//   };

//   const handlePreviousVideo = () => {
//     const prevIndex = (activeVideoIndex - 1 + videoGallery.length) % videoGallery.length;
//     setActiveVideoIndex(prevIndex);
//     const prevVideo = videoGallery[prevIndex];
//     const id = prevVideo.youtubeId || extractYouTubeId(prevVideo.url);
//     if (id) {
//       setSelectedVideo(prevVideo);
//       setVideoId(id);
//       setIsPlaying(true);
//     }
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setIsPlaying(false);
//     setSelectedVideo(null);
//   };

//   const handleRoomsClick = () => {
//     setActiveTab("rooms");
//     const roomsSection = document.getElementById("rooms");
//     if (roomsSection) {
//       roomsSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleBookClick = () => {
//     setActiveTab("book");
//     const bookingSection = document.getElementById("booking");
//     if (bookingSection) {
//       bookingSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Auto-hide video controls after 3 seconds
//   useEffect(() => {
//     if (isModalOpen) {
//       const timer = setTimeout(() => setShowVideoInfo(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [isModalOpen, activeVideoIndex]);

//   // Mouse movement handler for controls
//   const handleMouseMove = () => {
//     setShowControls(true);
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current);
//     }
//     controlsTimeoutRef.current = setTimeout(() => {
//       setShowControls(false);
//     }, 3000);
//   };

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-white rounded-full opacity-5"
//             style={{
//               width: Math.random() * 10 + 5,
//               height: Math.random() * 10 + 5,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, Math.random() * 20 - 10, 0],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 5,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 container mx-auto px-4 py-8">
//         <motion.div
//           className="w-full"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Header with stats */}
//           <motion.div 
//             className="flex flex-wrap justify-between items-center mb-8"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="flex items-center space-x-4">
//               <Badge badgeContent={5} color="primary" max={999}>
//                 <Hotel className="text-4xl text-amber-400" />
//               </Badge>
//               <div>
//                 <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-pink-500">
//                   LD Luxury Hotel
//                 </h2>
//                 <div className="flex items-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="text-amber-400 text-sm" />
//                   ))}
//                   <span className="text-gray-300 text-sm ml-2">5.0 (2.5K reviews)</span>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex space-x-4">
//               <Chip 
//                 icon={<TrendingUp />} 
//                 label="95% Booked" 
//                 className="bg-green-600 text-white"
//               />
//               <Chip 
//                 icon={<Verified />} 
//                 label="Verified" 
//                 className="bg-blue-600 text-white"
//               />
//             </div>
//           </motion.div>

//           {/* Main hero section */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             {/* Left Column - Text Content */}
//             <motion.div
//               className="space-y-6"
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               <div className="inline-block">
//                 <motion.div
//                   className="px-4 py-2 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full text-sm font-semibold"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   ⚡ Limited Time Offer - 30% Off
//                 </motion.div>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
//                   Discover A Brand
//                 </span>
//                 <br />
//                 <span className="text-white">Luxurious Hotel</span>
//               </h1>

//               <p className="text-gray-300 text-lg leading-relaxed">
//                 LD Hotel is happy to serve you one of the best suite and room to
//                 host your family and also we are able to host board meeting on
//                 best suitable room. Provides a variety of indoor and
//                 outdoor event spaces, suitable for both business meetings and
//                 weddings, and is centrally located.
//               </p>

//               {/* Amenities grid */}
//               <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-4">
//                 {amenities.slice(0, 5).map((amenity, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex flex-col items-center space-y-2 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
//                     whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
//                   >
//                     <div className="text-amber-400">{amenity.icon}</div>
//                     <span className="text-xs text-center">{amenity.label}</span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <motion.div className="flex flex-wrap gap-4 pt-4">
//                 <Link to={"/R-8763-327/34"}>
//                   <motion.button
//                     onClick={handleRoomsClick}
//                     className={`group relative px-8 py-4 rounded-lg text-lg font-semibold overflow-hidden ${
//                       activeTab === "rooms"
//                         ? "bg-gradient-to-r from-amber-500 to-pink-500"
//                         : "bg-gradient-to-r from-blue-600 to-purple-600"
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <span className="relative z-10 flex items-center">
//                       Our Rooms
//                       <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                     </span>
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-amber-600 to-pink-600"
//                       initial={{ x: "100%" }}
//                       whileHover={{ x: 0 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.button>
//                 </Link>

//                 <Link to={"/C-3872-2344/34"}>
//                   <motion.button
//                     onClick={handleBookClick}
//                     className={`px-8 py-4 rounded-lg text-lg font-semibold border-2 ${
//                       activeTab === "book"
//                         ? "border-amber-400 bg-amber-400 text-gray-900"
//                         : "border-white hover:bg-white hover:text-gray-900"
//                     } transition-all duration-300`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Book A Room
//                   </motion.button>
//                 </Link>
//               </motion.div>
//             </motion.div>

//             {/* Right Column - Video Gallery */}
//             <motion.div
//               className="space-y-4"
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               {/* Main featured video */}
//               <motion.div
//                 className="relative rounded-2xl overflow-hidden group cursor-pointer"
//                 whileHover={{ scale: 1.02 }}
//                 onClick={() => handlePlayClick(videoGallery[0])}
//               >
//                 <img
//                   src={videoGallery[0].thumbnail}
//                   alt={videoGallery[0].title}
//                   className="w-full h-[300px] object-cover"
//                   onError={(e) => {
//                     e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500";
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
//                 {/* Play button overlay */}
//                 <motion.div
//                   className="absolute inset-0 flex items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-50" />
//                     <PlayCircle className="relative text-amber-400 text-7xl" />
//                   </div>
//                 </motion.div>

//                 {/* Video info */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
//                   <h3 className="text-xl font-bold">{videoGallery[0].title}</h3>
//                   <p className="text-gray-300 text-sm line-clamp-2">{videoGallery[0].description}</p>
                  
//                   <div className="flex items-center space-x-4 mt-2">
//                     <span className="flex items-center text-sm">
//                       <Star className="text-amber-400 mr-1 text-sm" />
//                       {videoGallery[0].rating}
//                     </span>
//                     <span className="flex items-center text-sm">
//                       <Visibility className="text-gray-400 mr-1 text-sm" />
//                       {videoGallery[0].views}
//                     </span>
//                     <span className="flex items-center text-sm">
//                       <AccessTime className="text-gray-400 mr-1 text-sm" />
//                       {videoGallery[0].duration}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Video thumbnails grid */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//                 {videoGallery.slice(1, 5).map((video, index) => (
//                   <motion.div
//                     key={video.id}
//                     className="relative rounded-lg overflow-hidden group cursor-pointer aspect-video"
//                     whileHover={{ scale: 1.05 }}
//                     onClick={() => handlePlayClick(video)}
//                   >
//                     <img
//                       src={video.thumbnail}
//                       alt={video.title}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500";
//                       }}
//                     />
//                     <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
                    
//                     <PlayArrow className="absolute inset-0 m-auto text-amber-400 text-3xl opacity-0 group-hover:opacity-100 transition-all" />
                    
//                     <div className="absolute bottom-0 left-0 right-0 p-1 bg-gradient-to-t from-black/90 to-transparent">
//                       <p className="text-xs font-semibold truncate">{video.title}</p>
//                     </div>
                    
//                     <span className="absolute top-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
//                       {video.duration}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Enhanced YouTube Video Modal */}
//       <AnimatePresence>
//         {isModalOpen && selectedVideo && (
//           <motion.div
//             className="fixed inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleCloseModal}
//           >
//             <motion.div
//               className="relative w-full max-w-6xl"
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               transition={{ type: "spring", damping: 20 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close button - always visible */}
//               <motion.button
//                 onClick={handleCloseModal}
//                 className="absolute -top-12 right-0 z-50 p-3 bg-red-600 hover:bg-red-700 rounded-full text-white shadow-lg transition-all duration-300 group"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 aria-label="Close video modal"
//               >
//                 <Close className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
//               </motion.button>

//               {/* Video header with navigation - always visible */}
//               <div className="absolute -top-12 left-0 right-0 flex justify-between items-center text-white z-40">
//                 <div className="flex items-center space-x-4">
//                   <motion.button
//                     onClick={handlePreviousVideo}
//                     className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     aria-label="Previous video"
//                   >
//                     <NavigateBefore className="text-2xl" />
//                   </motion.button>
                  
//                   <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
//                     <span className="text-sm font-semibold">
//                       {activeVideoIndex + 1} / {videoGallery.length}
//                     </span>
//                     <span className="text-amber-400">•</span>
//                     <span className="font-semibold">{selectedVideo.title}</span>
//                   </div>
                  
//                   <motion.button
//                     onClick={handleNextVideo}
//                     className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     aria-label="Next video"
//                   >
//                     <NavigateNext className="text-2xl" />
//                   </motion.button>
//                 </div>

//                 <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
//                   <IconButton 
//                     onClick={() => setIsLiked(!isLiked)}
//                     className="text-white hover:text-amber-400"
//                     aria-label="Like video"
//                   >
//                     {isLiked ? <Favorite className="text-amber-400" /> : <FavoriteBorder />}
//                   </IconButton>
                  
//                   <IconButton className="text-white hover:text-amber-400" aria-label="Share video">
//                     <Share />
//                   </IconButton>
//                 </div>
//               </div>

//               {/* Video container */}
//               <div 
//                 className="relative rounded-xl overflow-hidden shadow-2xl bg-black"
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={() => setShowControls(false)}
//               >
//                 {/* Video player */}
//                 <div className="relative pb-[56.25%] h-0">
//                   <iframe
//                     src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=0&mute=${isMuted ? 1 : 0}&enablejsapi=1`}
//                     className="absolute top-0 left-0 w-full h-full"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     title={selectedVideo.title}
//                   />
//                 </div>

//                 {/* Video info overlay - shows on hover or initially */}
//                 <AnimatePresence>
//                   {(showVideoInfo || showControls) && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6"
//                       initial={{ y: 100, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       exit={{ y: 100, opacity: 0 }}
//                     >
//                       <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
//                       <p className="text-gray-300 mb-3">{selectedVideo.description}</p>
                      
//                       <div className="flex flex-wrap gap-4 items-center">
//                         <div className="flex items-center space-x-4">
//                           <span className="flex items-center">
//                             <Star className="text-amber-400 mr-1" />
//                             {selectedVideo.rating}
//                           </span>
//                           <span className="flex items-center">
//                             <Visibility className="text-gray-400 mr-1" />
//                             {selectedVideo.views} views
//                           </span>
//                           <span className="flex items-center">
//                             <AccessTime className="text-gray-400 mr-1" />
//                             {selectedVideo.duration}
//                           </span>
//                         </div>
                        
//                         <div className="flex gap-2">
//                           {selectedVideo.features.map((feature, i) => (
//                             <Chip
//                               key={i}
//                               label={feature}
//                               size="small"
//                               className="bg-white/20 text-white border border-white/30"
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Video controls overlay - shows on hover */}
//                 <AnimatePresence>
//                   {showControls && (
//                     <motion.div
//                       className="absolute bottom-4 right-4 flex space-x-2 z-10"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 20 }}
//                     >
//                       <motion.button
//                         onClick={() => setIsMuted(!isMuted)}
//                         className="p-3 bg-black/70 hover:bg-black/90 rounded-full text-white backdrop-blur-sm transition-colors"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         aria-label={isMuted ? "Unmute" : "Mute"}
//                       >
//                         {isMuted ? <VolumeOff /> : <VolumeUp />}
//                       </motion.button>
                      
//                       <motion.button
//                         onClick={() => {
//                           const iframe = videoRef.current?.querySelector('iframe');
//                           if (iframe) {
//                             if (iframe.requestFullscreen) {
//                               iframe.requestFullscreen();
//                             }
//                           }
//                         }}
//                         className="p-3 bg-black/70 hover:bg-black/90 rounded-full text-white backdrop-blur-sm transition-colors"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         aria-label="Fullscreen"
//                       >
//                         <Fullscreen />
//                       </motion.button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Center play/pause indicator (optional) */}
//                 {!isPlaying && (
//                   <motion.div
//                     className="absolute inset-0 flex items-center justify-center bg-black/50"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                   >
//                     <motion.button
//                       onClick={() => setIsPlaying(true)}
//                       className="p-6 bg-amber-400 rounded-full text-gray-900"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       <PlayArrow className="text-5xl" />
//                     </motion.button>
//                   </motion.div>
//                 )}
//               </div>

//               {/* Video thumbnails carousel */}
//               <motion.div 
//                 className="mt-4 grid grid-cols-5 gap-2"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {videoGallery.map((video, index) => (
//                   <motion.div
//                     key={video.id}
//                     className={`relative rounded-lg overflow-hidden cursor-pointer group ${
//                       index === activeVideoIndex ? "ring-2 ring-amber-400" : ""
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     onClick={() => {
//                       setActiveVideoIndex(index);
//                       const id = video.youtubeId || extractYouTubeId(video.url);
//                       if (id) {
//                         setSelectedVideo(video);
//                         setVideoId(id);
//                         setIsPlaying(true);
//                       }
//                     }}
//                   >
//                     <img
//                       src={video.thumbnail}
//                       alt={video.title}
//                       className="w-full h-20 object-cover"
//                       onError={(e) => {
//                         e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500";
//                       }}
//                     />
//                     <div className={`absolute inset-0 flex items-center justify-center transition-all ${
//                       index === activeVideoIndex 
//                         ? "bg-amber-400/30" 
//                         : "bg-black/50 group-hover:bg-black/30"
//                     }`}>
//                       {index === activeVideoIndex && (
//                         <PlayCircle className="text-amber-400 text-2xl" />
//                       )}
//                     </div>
                    
//                     {/* Video duration badge */}
//                     <span className="absolute top-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
//                       {video.duration}
//                     </span>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

































/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, IconButton, Badge, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import {
  PlayCircle,
  Close,
  Hotel,
  Restaurant,
  Spa,
  LocalBar,
  Pool,
  FitnessCenter,
  Wifi,
  RoomService,
  AcUnit,
  LocalParking,
  Star,
  TrendingUp,
  Verified,
  ChevronRight,
  VolumeUp,
  VolumeOff,
  Fullscreen,
  Share,
  Favorite,
  FavoriteBorder,
  NavigateBefore,
  NavigateNext,
  PlayArrow,
  Info,
  AccessTime,
  Visibility
} from "@mui/icons-material";

export const LuxuryHotel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [activeTab, setActiveTab] = useState("rooms");
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [showVideoInfo, setShowVideoInfo] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // Video gallery data with real working YouTube IDs
  const videoGallery = [
    {
      id: 1,
      title: "Luxury Suite Tour",
      description: "Experience our presidential suite with panoramic city views",
      url: "https://youtu.be/BKFcvnd0aaU",
      thumbnail: "https://img.youtube.com/vi/BKFcvnd0aaU/maxresdefault.jpg",
      duration: "3:45",
      views: "125K",
      category: "rooms",
      rating: 4.9,
      features: ["Ocean View", "King Bed", "Jacuzzi"],
      youtubeId: "BKFcvnd0aaU"
    },
    {
      id: 2,
      title: "Fine Dining Experience",
      description: "Michelin-starred restaurant with international cuisine",
      url: "https://youtu.be/VIDEO_ID_2",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500",
      duration: "4:20",
      views: "89K",
      category: "dining",
      rating: 4.8,
      features: ["Wine Cellar", "Chef's Table", "Outdoor Seating"],
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Wellness & Spa",
      description: "Rejuvenate your senses at our world-class spa",
      url: "https://youtu.be/VIDEO_ID_3",
      thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500",
      duration: "3:15",
      views: "67K",
      category: "wellness",
      rating: 4.9,
      features: ["Steam Room", "Massage", "Yoga Studio"],
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Infinity Pool",
      description: "Spectacular rooftop infinity pool with sunset views",
      url: "https://youtu.be/VIDEO_ID_4",
      thumbnail: "https://images.unsplash.com/photo-1576016771786-59a6eb6dc2b6?w=500",
      duration: "2:50",
      views: "210K",
      category: "amenities",
      rating: 5.0,
      features: ["Pool Bar", "Sun Deck", "Cabana Service"],
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Event Halls & Weddings",
      description: "Elegant spaces for your special occasions",
      url: "https://youtu.be/VIDEO_ID_5",
      thumbnail: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500",
      duration: "5:10",
      views: "156K",
      category: "events",
      rating: 4.7,
      features: ["Ballroom", "Garden", "Catering"],
      youtubeId: "dQw4w9WgXcQ"
    }
  ];

  // Amenities list for enhanced UI
  const amenities = [
    { icon: <Pool className="text-white" />, label: "Infinity Pool" },
    { icon: <Restaurant className="text-white" />, label: "Fine Dining" },
    { icon: <Spa className="text-white" />, label: "Luxury Spa" },
    { icon: <FitnessCenter className="text-white" />, label: "Gym" },
    { icon: <Wifi className="text-white" />, label: "Free WiFi" },
    { icon: <RoomService className="text-white" />, label: "Room Service" },
    { icon: <AcUnit className="text-white" />, label: "AC" },
    { icon: <LocalBar className="text-white" />, label: "Sky Bar" },
    { icon: <LocalParking className="text-white" />, label: "Valet Parking" }
  ];

  // Extract YouTube ID from URL
  const extractYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handlePlayClick = (video) => {
    const id = video.youtubeId || extractYouTubeId(video.url);
    if (id) {
      setSelectedVideo(video);
      setVideoId(id);
      setIsModalOpen(true);
      setIsPlaying(true);
      setActiveVideoIndex(videoGallery.findIndex(v => v.id === video.id));
    } else {
      console.error("Invalid YouTube URL");
    }
  };

  const handleNextVideo = () => {
    const nextIndex = (activeVideoIndex + 1) % videoGallery.length;
    setActiveVideoIndex(nextIndex);
    const nextVideo = videoGallery[nextIndex];
    const id = nextVideo.youtubeId || extractYouTubeId(nextVideo.url);
    if (id) {
      setSelectedVideo(nextVideo);
      setVideoId(id);
      setIsPlaying(true);
    }
  };

  const handlePreviousVideo = () => {
    const prevIndex = (activeVideoIndex - 1 + videoGallery.length) % videoGallery.length;
    setActiveVideoIndex(prevIndex);
    const prevVideo = videoGallery[prevIndex];
    const id = prevVideo.youtubeId || extractYouTubeId(prevVideo.url);
    if (id) {
      setSelectedVideo(prevVideo);
      setVideoId(id);
      setIsPlaying(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
    setSelectedVideo(null);
  };

  const handleRoomsClick = () => {
    setActiveTab("rooms");
    const roomsSection = document.getElementById("rooms");
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookClick = () => {
    setActiveTab("book");
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-hide video controls after 3 seconds
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => setShowVideoInfo(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen, activeVideoIndex]);

  // Mouse movement handler for controls
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 7,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header with stats */}
          <motion.div 
            className="flex flex-wrap justify-between items-center mb-8 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <Badge badgeContent={5} color="primary" max={999}>
                <Hotel className="text-4xl text-amber-400" />
              </Badge>
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
                  LD Luxury Hotel
                </h2>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-amber-400 text-sm" />
                  ))}
                  <span className="text-gray-300 text-sm ml-2">5.0 (2.5K reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Chip 
                icon={<TrendingUp className="text-white" />} 
                label="95% Booked" 
                className="bg-gradient-to-t from-green-500 to-green-700 text-white font-semibold px-2"
              />
              <Chip 
                icon={<Verified className="text-white" />} 
                label="Verified" 
                className="bg-gradient-to-t from-blue-500 to-blue-700 text-white font-semibold px-2"
              />
            </div>
          </motion.div>

          {/* Main hero section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-block">
                <motion.div
                  className="px-4 py-2 bg-gradient-to-t from-amber-500 via-pink-500 to-purple-500 rounded-full text-sm font-semibold text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⚡ Limited Time Offer - 30% Off
                </motion.div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
                  Discover A Brand
                </span>
                <br />
                <span className="text-white drop-shadow-lg">Luxurious Hotel</span>
              </h1>

              <p className="text-gray-200 text-lg leading-relaxed bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                LD Hotel is happy to serve you one of the best suite and room to
                host your family and also we are able to host board meeting on
                best suitable room. Provides a variety of indoor and
                outdoor event spaces, suitable for both business meetings and
                weddings, and is centrally located.
              </p>

              {/* Amenities grid */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-4">
                {amenities.slice(0, 5).map((amenity, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center space-y-2 p-3 bg-gradient-to-t from-white/10 to-white/5 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className="text-2xl">{amenity.icon}</div>
                    <span className="text-xs text-center font-medium text-gray-200">{amenity.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons - UPDATED with bg-gradient-to-t */}
              <motion.div className="flex flex-wrap gap-4 pt-4">
                <Link to={"/R-8763-327/34"}>
                  <motion.button
                    onClick={handleRoomsClick}
                    className={`group relative px-8 py-4 rounded-lg text-lg font-semibold overflow-hidden shadow-xl bg-gradient-to-t ${
                      activeTab === "rooms"
                        ? "from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800"
                        : "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
                    } text-white`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Our Rooms
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <Link to={"/C-3872-2344/34"}>
                  <motion.button
                    onClick={handleBookClick}
                    className={`px-8 py-4 rounded-lg text-lg font-semibold shadow-xl ${
                      activeTab === "book"
                        ? "bg-gradient-to-t from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white"
                        : "bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white"
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book A Room
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Video Gallery */}
            <motion.div
              className="space-y-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Main featured video */}
              <motion.div
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-white/20"
                whileHover={{ scale: 1.02 }}
                onClick={() => handlePlayClick(videoGallery[0])}
              >
                <img
                  src={videoGallery[0].thumbnail}
                  alt={videoGallery[0].title}
                  className="w-full h-[300px] object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Play button overlay - UPDATED with bg-gradient-to-t */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-700 rounded-full blur-2xl opacity-50" />
                    <PlayCircle className="relative text-white text-8xl drop-shadow-2xl" />
                  </div>
                </motion.div>

                {/* Video info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">{videoGallery[0].title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2 mb-2">{videoGallery[0].description}</p>
                  
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm bg-gradient-to-t from-black/80 to-black/60 px-2 py-1 rounded-full">
                      <Star className="text-amber-400 mr-1 text-sm" />
                      <span className="text-white">{videoGallery[0].rating}</span>
                    </span>
                    <span className="flex items-center text-sm bg-gradient-to-t from-black/80 to-black/60 px-2 py-1 rounded-full">
                      <Visibility className="text-gray-300 mr-1 text-sm" />
                      <span className="text-white">{videoGallery[0].views}</span>
                    </span>
                    <span className="flex items-center text-sm bg-gradient-to-t from-black/80 to-black/60 px-2 py-1 rounded-full">
                      <AccessTime className="text-gray-300 mr-1 text-sm" />
                      <span className="text-white">{videoGallery[0].duration}</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Video thumbnails grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {videoGallery.slice(1, 5).map((video, index) => (
                  <motion.div
                    key={video.id}
                    className="relative rounded-lg overflow-hidden group cursor-pointer aspect-video shadow-lg border border-white/20"
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    onClick={() => handlePlayClick(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    <PlayArrow className="absolute inset-0 m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-all drop-shadow-2xl" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <p className="text-xs font-semibold text-white truncate">{video.title}</p>
                    </div>
                    
                    <span className="absolute top-2 right-2 bg-gradient-to-t from-black/90 to-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {video.duration}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced YouTube Video Modal */}
      <AnimatePresence>
        {isModalOpen && selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - RED gradient */}
              <motion.button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 z-50 p-3 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full text-white shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close video modal"
              >
                <Close className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>

              {/* Video header with navigation - BLUE gradients */}
              <div className="absolute -top-12 left-0 right-0 flex justify-between items-center text-white z-40">
                <div className="flex items-center space-x-3">
                  <motion.button
                    onClick={handlePreviousVideo}
                    className="p-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full transition-all shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Previous video"
                  >
                    <NavigateBefore className="text-2xl text-white" />
                  </motion.button>
                  
                  <div className="flex items-center space-x-2 bg-gradient-to-t from-black/80 to-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <span className="text-sm font-semibold text-white">
                      {activeVideoIndex + 1} / {videoGallery.length}
                    </span>
                    <span className="text-amber-400">•</span>
                    <span className="font-semibold text-white">{selectedVideo.title}</span>
                  </div>
                  
                  <motion.button
                    onClick={handleNextVideo}
                    className="p-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full transition-all shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Next video"
                  >
                    <NavigateNext className="text-2xl text-white" />
                  </motion.button>
                </div>

                <div className="flex items-center space-x-2 bg-gradient-to-t from-black/80 to-black/60 backdrop-blur-sm rounded-full p-1 border border-white/20">
                  <IconButton 
                    onClick={() => setIsLiked(!isLiked)}
                    className="text-white hover:text-amber-400 transition-colors"
                    aria-label="Like video"
                  >
                    {isLiked ? <Favorite className="text-amber-400" /> : <FavoriteBorder className="text-white" />}
                  </IconButton>
                  
                  <IconButton className="text-white hover:text-amber-400 transition-colors" aria-label="Share video">
                    <Share className="text-white" />
                  </IconButton>
                </div>
              </div>

              {/* Video container */}
              <div 
                className="relative rounded-xl overflow-hidden shadow-2xl bg-black border-2 border-white/20"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setShowControls(false)}
              >
                {/* Video player */}
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    ref={videoRef}
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=0&mute=${isMuted ? 1 : 0}&enablejsapi=1`}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={selectedVideo.title}
                  />
                </div>

                {/* Video info overlay - shows on hover or initially */}
                <AnimatePresence>
                  {(showVideoInfo || showControls) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                    >
                      <h2 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h2>
                      <p className="text-gray-200 mb-3">{selectedVideo.description}</p>
                      
                      <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center bg-gradient-to-t from-black/80 to-black/60 px-3 py-1 rounded-full">
                            <Star className="text-amber-400 mr-1" />
                            <span className="text-white">{selectedVideo.rating}</span>
                          </span>
                          <span className="flex items-center bg-gradient-to-t from-black/80 to-black/60 px-3 py-1 rounded-full">
                            <Visibility className="text-gray-300 mr-1" />
                            <span className="text-white">{selectedVideo.views} views</span>
                          </span>
                          <span className="flex items-center bg-gradient-to-t from-black/80 to-black/60 px-3 py-1 rounded-full">
                            <AccessTime className="text-gray-300 mr-1" />
                            <span className="text-white">{selectedVideo.duration}</span>
                          </span>
                        </div>
                        
                        <div className="flex gap-2">
                          {selectedVideo.features.map((feature, i) => (
                            <Chip
                              key={i}
                              label={feature}
                              size="small"
                              className="bg-gradient-to-t from-white/20 to-white/10 text-white border border-white/30"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Video controls overlay - shows on hover - BLUE gradients */}
                <AnimatePresence>
                  {showControls && (
                    <motion.div
                      className="absolute bottom-4 right-4 flex space-x-2 z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                    >
                      <motion.button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-3 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-xl backdrop-blur-sm transition-all border border-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeOff className="text-white" /> : <VolumeUp className="text-white" />}
                      </motion.button>
                      
                      <motion.button
                        onClick={() => {
                          const iframe = videoRef.current?.querySelector('iframe');
                          if (iframe) {
                            if (iframe.requestFullscreen) {
                              iframe.requestFullscreen();
                            }
                          }
                        }}
                        className="p-3 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-xl backdrop-blur-sm transition-all border border-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Fullscreen"
                      >
                        <Fullscreen className="text-white" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Center play/pause indicator - BLUE gradient */}
                {!isPlaying && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="p-6 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <PlayArrow className="text-5xl" />
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Video thumbnails carousel */}
              <motion.div 
                className="mt-4 grid grid-cols-5 gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {videoGallery.map((video, index) => (
                  <motion.div
                    key={video.id}
                    className={`relative rounded-lg overflow-hidden cursor-pointer group shadow-lg ${
                      index === activeVideoIndex ? "ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900" : ""
                    }`}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    onClick={() => {
                      setActiveVideoIndex(index);
                      const id = video.youtubeId || extractYouTubeId(video.url);
                      if (id) {
                        setSelectedVideo(video);
                        setVideoId(id);
                        setIsPlaying(true);
                      }
                    }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-20 object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500";
                      }}
                    />
                    <div className={`absolute inset-0 flex items-center justify-center transition-all ${
                      index === activeVideoIndex 
                        ? "bg-blue-500/40" 
                        : "bg-black/60 group-hover:bg-black/40"
                    }`}>
                      {index === activeVideoIndex && (
                        <PlayCircle className="text-white text-2xl drop-shadow-lg" />
                      )}
                    </div>
                    
                    {/* Video duration badge */}
                    <span className="absolute top-1 right-1 bg-gradient-to-t from-black/90 to-black/70 text-white text-xs px-1.5 py-0.5 rounded backdrop-blur-sm">
                      {video.duration}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};