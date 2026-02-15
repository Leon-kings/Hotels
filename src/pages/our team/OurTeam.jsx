// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Facebook, Twitter, Instagram } from "@mui/icons-material";
// import { teamMembers } from "../../assets/data/data";

// export const OurTeam = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const openModal = (member) => {
//     setSelectedMember(member);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedMember(null);
//   };

//   return (
//     <div className="w-full py-20 mt-4 mb-2 rounded-2xl bg-gray-800">
//       <div className="container max-w-screen-xl mx-auto px-4">
//         <div className="text-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <p className="text-center text-white text-primary font-normal">
//               Team Members
//             </p>
//             <h2 className="mb-12 text-white text-4xl font-bold">
//               Our Master Team
//             </h2>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl pb-4 bg-white gap-8">
//           {teamMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               transition={{ duration: 0.5, delay: member.delay }}
//             >
//               <div className="text-center rounded-lg overflow-hidden">
//                 <div
//                   className="rounded-full overflow-hidden mx-auto my-6 w-40 h-40 cursor-pointer"
//                   onClick={() => openModal(member)}
//                 >
//                   <img
//                     className="w-full h-full object-cover"
//                     src={member.image}
//                     alt={member.name}
//                   />
//                 </div>
//                 <h3 className="mb-1 text-black text-xl font-bold">
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-600">{member.position}</p>
//                 <div className="flex justify-center mt-4 space-x-2">
//                   <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
//                     <Facebook fontSize="small" />
//                   </button>
//                   <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
//                     <Twitter fontSize="small" />
//                   </button>
//                   <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
//                     <Instagram fontSize="small" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-2xl text-black font-bold">
//                   {selectedMember.name}
//                 </h3>
//                 <button
//                   onClick={closeModal}
//                   className="text-red-500 dark:text-red-500"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div className="flex flex-col md:flex-row gap-6">
//                 <div className="w-full md:w-1/3">
//                   <img
//                     src={selectedMember.image}
//                     alt=""
//                     className="w-full h-auto rounded-lg"
//                   />
//                 </div>

//                 <div className="w-full md:w-2/3 text-black">
//                   <p className="text-lg text-black font-semibold mb-2">
//                     {selectedMember.position}
//                   </p>
//                   {selectedMember.bio && (
//                     <p className="mb-4">{selectedMember.bio}</p>
//                   )}

//                   <div className="flex space-x-2 mt-6">
//                     <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
//                       <Facebook fontSize="small" />
//                     </button>
//                     <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
//                       <Twitter fontSize="small" />
//                     </button>
//                     <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 text-blue-600">
//                       <Instagram fontSize="small" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };




























// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Facebook, 
//   Twitter, 
//   Instagram, 
//   LinkedIn, 
//   Email, 
//   Phone, 
//   LocationOn,
//   Close,
//   Star,
//   Verified,
//   Share,
//   Favorite,
//   FavoriteBorder,
//   ChevronLeft,
//   ChevronRight,
//   Work,
//   School,
//   Language
// } from "@mui/icons-material";
// import { teamMembers } from "../../assets/data/data";

// export const OurTeam = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [hoveredMember, setHoveredMember] = useState(null);
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [likedMembers, setLikedMembers] = useState({});

//   // Filter categories
//   const filters = [
//     { id: "all", label: "All Team" },
//     { id: "management", label: "Management" },
//     { id: "chef", label: "Chefs" },
//     { id: "service", label: "Service" },
//     { id: "events", label: "Events" }
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const openModal = (member) => {
//     setSelectedMember(member);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => setSelectedMember(null), 300);
//   };

//   const toggleLike = (memberId, e) => {
//     e.stopPropagation();
//     setLikedMembers(prev => ({
//       ...prev,
//       [memberId]: !prev[memberId]
//     }));
//   };

//   // Filter team members based on active filter
//   const filteredMembers = activeFilter === "all" 
//     ? teamMembers 
//     : teamMembers.filter(member => member.category === activeFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-gradient-to-r from-amber-400/10 to-pink-500/10 rounded-full blur-3xl"
//             style={{
//               width: Math.random() * 300 + 100,
//               height: Math.random() * 300 + 100,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               x: [0, Math.random() * 100 - 50, 0],
//               y: [0, Math.random() * 100 - 50, 0],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-20 left-10 text-amber-400/10 text-[150px] font-serif">👥</div>
//       <div className="absolute bottom-20 right-10 text-pink-400/10 text-[150px] font-serif">⭐</div>

//       <div className="container max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full text-sm font-semibold mb-4"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             👥 Our Professional Team
//           </motion.div>
          
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">
//               Meet Our Master Team
//             </span>
//           </h1>
          
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Dedicated professionals committed to making your stay exceptional with their expertise and passion
//           </p>
//         </motion.div>
//         {/* Team Grid */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={staggerChildren}
//           initial="hidden"
//           animate="visible"
//         >
//           {filteredMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               variants={fadeInUp}
//               onHoverStart={() => setHoveredMember(member.id)}
//               onHoverEnd={() => setHoveredMember(null)}
//               className="relative group"
//             >
//               {/* Card Background with Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
//               <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-amber-400/50 transition-all duration-300">

//                 {/* Member Image with Hover Effect */}
//                 <div 
//                   className="relative overflow-hidden cursor-pointer"
//                   onClick={() => openModal(member)}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <img
//                       className="w-full h-64 object-cover"
//                       src={member.image}
//                       alt={member.name}
//                       onError={(e) => {
//                         e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random&size=256`;
//                       }}
//                     />
//                   </motion.div>
                  
//                   {/* Overlay with social icons */}
//                   <motion.div 
//                     className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={false}
//                   >
//                     <div className="flex space-x-2">
//                       {member.social?.facebook && (
//                         <motion.a
//                           href={member.social.facebook}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-white/20 hover:bg-blue-600 rounded-full backdrop-blur-sm transition-colors"
//                           whileHover={{ scale: 1.1, y: -2 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Facebook fontSize="small" />
//                         </motion.a>
//                       )}
//                       {member.social?.twitter && (
//                         <motion.a
//                           href={member.social.twitter}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-white/20 hover:bg-blue-400 rounded-full backdrop-blur-sm transition-colors"
//                           whileHover={{ scale: 1.1, y: -2 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Twitter fontSize="small" />
//                         </motion.a>
//                       )}
//                       {member.social?.instagram && (
//                         <motion.a
//                           href={member.social.instagram}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-white/20 hover:bg-pink-600 rounded-full backdrop-blur-sm transition-colors"
//                           whileHover={{ scale: 1.1, y: -2 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Instagram fontSize="small" />
//                         </motion.a>
//                       )}
//                       {member.social?.linkedin && (
//                         <motion.a
//                           href={member.social.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-white/20 hover:bg-blue-700 rounded-full backdrop-blur-sm transition-colors"
//                           whileHover={{ scale: 1.1, y: -2 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <LinkedIn fontSize="small" />
//                         </motion.a>
//                       )}
//                     </div>
//                   </motion.div>

//                   {/* Badge for featured members */}
//                   {member.featured && (
//                     <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-pink-500 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
//                       <Star className="text-xs" />
//                       <span>Featured</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Member Info */}
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
//                     {member.name}
//                   </h3>
//                   <p className="text-amber-400 mb-2">{member.position}</p>
                  
//                   {/* Experience/Rating */}
//                   <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-3">
//                     {member.experience && (
//                       <>
//                         <Work fontSize="small" />
//                         <span>{member.experience} exp</span>
//                       </>
//                     )}
//                     {member.rating && (
//                       <>
//                         <Star className="text-amber-400 ml-2" fontSize="small" />
//                         <span>{member.rating}</span>
//                       </>
//                     )}
//                   </div>

//                   {/* View Profile Button */}
//                   <motion.button
//                     onClick={() => openModal(member)}
//                     className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold transition-colors w-full border border-white/20 hover:border-amber-400/50"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     View Profile
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Join Team CTA */}
//         <motion.div 
//           className="mt-20 text-center p-12 bg-gradient-to-r from-amber-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-white/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
//           <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//             We're always looking for passionate individuals to join our family and create exceptional experiences for our guests.
//           </p>
//         </motion.div>
//       </div>

//       {/* Enhanced Modal */}
//       <AnimatePresence>
//         {isModalOpen && selectedMember && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           >
//             <motion.div
//               className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               transition={{ type: "spring", damping: 20 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Header with Close Button */}
//               <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-white/10 flex justify-between items-center z-10">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={selectedMember.image}
//                     alt=''
//                     className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
//                     onError={(e) => {
//                       e.target.src = `https://ui-avatars.com/api/?name=${selectedMember.name}&background=random&size=128`;
//                     }}
//                   />
//                   <div>
//                     <h2 className="text-2xl font-bold text-white">{selectedMember.name}</h2>
//                     <p className="text-amber-400">{selectedMember.position}</p>
//                   </div>
//                 </div>
//                 <motion.button
//                   onClick={closeModal}
//                   className="p-3 bg-gradient-to-b from-red-500 to-red-700 rounded-full text-white transition-colors"
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   aria-label="Close modal"
//                 >
//                   <Close />
//                 </motion.button>
//               </div>

//               {/* Modal Content */}
//               <div className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {/* Left Column - Image and Quick Info */}
//                   <div className="md:col-span-1">
//                     <img
//                       src={selectedMember.image}
//                       alt=''
//                       className="w-full h-auto rounded-2xl mb-4 border-2 border-amber-400"
//                       onError={(e) => {
//                         e.target.src = `https://ui-avatars.com/api/?name=${selectedMember.name}&background=random&size=512`;
//                       }}
//                     />
                    
//                     {/* Quick Info Cards */}
//                     <div className="space-y-3">
//                       {selectedMember.email && (
//                         <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
//                           <Email className="text-amber-400" />
//                           <span className="text-gray-300">{selectedMember.email}</span>
//                         </div>
//                       )}
//                       {selectedMember.phone && (
//                         <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
//                           <Phone className="text-amber-400" />
//                           <span className="text-gray-300">{selectedMember.phone}</span>
//                         </div>
//                       )}
//                       {selectedMember.location && (
//                         <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
//                           <LocationOn className="text-amber-400" />
//                           <span className="text-gray-300">{selectedMember.location}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Right Column - Detailed Info */}
//                   <div className="md:col-span-2 space-y-6">
//                     {/* Bio */}
//                     <div>
//                       <h3 className="text-xl font-bold text-amber-400 mb-3">About</h3>
//                       <p className="text-gray-300 leading-relaxed">
//                         {selectedMember.bio || `${selectedMember.name} is a dedicated ${selectedMember.position} with extensive experience in the hospitality industry. They are committed to providing exceptional service and creating memorable experiences for our guests.`}
//                       </p>
//                     </div>

//                     {/* Experience & Skills */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="p-4 bg-white/5 rounded-xl">
//                         <Work className="text-amber-400 mb-2" />
//                         <h4 className="font-semibold mb-1">Experience</h4>
//                         <p className="text-gray-400">{selectedMember.experience || "10+ years"}</p>
//                       </div>
//                       <div className="p-4 bg-white/5 rounded-xl">
//                         <School className="text-amber-400 mb-2" />
//                         <h4 className="font-semibold mb-1">Education</h4>
//                         <p className="text-gray-400">{selectedMember.education || "Hospitality Management"}</p>
//                       </div>
//                     </div>

//                     {/* Specialties */}
//                     {selectedMember.specialties && (
//                       <div>
//                         <h3 className="text-xl font-bold text-amber-400 mb-3">Specialties</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedMember.specialties.map((specialty, index) => (
//                             <span
//                               key={index}
//                               className="px-3 py-1 bg-white/10 rounded-full text-sm"
//                             >
//                               {specialty}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Languages */}
//                     {selectedMember.languages && (
//                       <div>
//                         <h3 className="text-xl font-bold text-amber-400 mb-3">Languages</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedMember.languages.map((language, index) => (
//                             <span
//                               key={index}
//                               className="px-3 py-1 bg-white/10 rounded-full text-sm"
//                             >
//                               <Language className="text-xs mr-1" />
//                               {language}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Social Links */}
//                     <div>
//                       <h3 className="text-xl font-bold text-amber-400 mb-3">Connect</h3>
//                       <div className="flex space-x-3">
//                         {selectedMember.social?.facebook && (
//                           <motion.a
//                             href={selectedMember.social.facebook}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 bg-blue-600/20 hover:bg-blue-600 rounded-full text-white transition-colors"
//                             whileHover={{ scale: 1.1, y: -2 }}
//                           >
//                             <Facebook />
//                           </motion.a>
//                         )}
//                         {selectedMember.social?.twitter && (
//                           <motion.a
//                             href={selectedMember.social.twitter}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 bg-blue-400/20 hover:bg-blue-400 rounded-full text-white transition-colors"
//                             whileHover={{ scale: 1.1, y: -2 }}
//                           >
//                             <Twitter />
//                           </motion.a>
//                         )}
//                         {selectedMember.social?.instagram && (
//                           <motion.a
//                             href={selectedMember.social.instagram}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 bg-pink-600/20 hover:bg-pink-600 rounded-full text-white transition-colors"
//                             whileHover={{ scale: 1.1, y: -2 }}
//                           >
//                             <Instagram />
//                           </motion.a>
//                         )}
//                         {selectedMember.social?.linkedin && (
//                           <motion.a
//                             href={selectedMember.social.linkedin}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 bg-blue-700/20 hover:bg-blue-700 rounded-full text-white transition-colors"
//                             whileHover={{ scale: 1.1, y: -2 }}
//                           >
//                             <LinkedIn />
//                           </motion.a>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };




















// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Facebook, 
//   Twitter, 
//   Instagram, 
//   LinkedIn, 
//   Email, 
//   Phone, 
//   LocationOn,
//   Close,
//   Star,
//   Verified,
//   Share,
//   Favorite,
//   FavoriteBorder,
//   ChevronLeft,
//   ChevronRight,
//   Work,
//   School,
//   Language
// } from "@mui/icons-material";
// import { teamMembers } from "../../assets/data/data";

// export const OurTeam = () => {
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [hoveredMember, setHoveredMember] = useState(null);
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [likedMembers, setLikedMembers] = useState({});

//   // Filter categories
//   const filters = [
//     { id: "all", label: "All Team" },
//     { id: "management", label: "Management" },
//     { id: "chef", label: "Chefs" },
//     { id: "service", label: "Service" },
//     { id: "events", label: "Events" }
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const openModal = (member) => {
//     setSelectedMember(member);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => setSelectedMember(null), 300);
//   };

//   const toggleLike = (memberId, e) => {
//     e.stopPropagation();
//     setLikedMembers(prev => ({
//       ...prev,
//       [memberId]: !prev[memberId]
//     }));
//   };

//   // Filter team members based on active filter
//   const filteredMembers = activeFilter === "all" 
//     ? teamMembers 
//     : teamMembers.filter(member => member.category === activeFilter);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 px-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
//             style={{
//               width: Math.random() * 300 + 100,
//               height: Math.random() * 300 + 100,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               x: [0, Math.random() * 100 - 50, 0],
//               y: [0, Math.random() * 100 - 50, 0],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-20 left-10 text-blue-400/10 text-[150px] font-serif">👥</div>
//       <div className="absolute bottom-20 right-10 text-purple-400/10 text-[150px] font-serif">⭐</div>

//       <div className="container max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             className="inline-block px-6 py-2 bg-gradient-to-t from-blue-500 to-blue-700 rounded-full text-sm font-semibold mb-4 shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             👥 Our Professional Team
//           </motion.div>
          
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
//               Meet Our Master Team
//             </span>
//           </h1>
          
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Dedicated professionals committed to making your stay exceptional with their expertise and passion
//           </p>

//           {/* Filter Buttons - All with blue gradients */}
//           <motion.div 
//             className="flex flex-wrap justify-center gap-3 mt-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             {filters.map((filter) => (
//               <motion.button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`px-6 py-2 rounded-full font-semibold transition-all shadow-lg ${
//                   activeFilter === filter.id
//                     ? "bg-gradient-to-t from-blue-500 to-blue-700 text-white"
//                     : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {filter.label}
//               </motion.button>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Team Grid */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={staggerChildren}
//           initial="hidden"
//           animate="visible"
//         >
//           {filteredMembers.map((member) => (
//             <motion.div
//               key={member.id}
//               variants={fadeInUp}
//               onHoverStart={() => setHoveredMember(member.id)}
//               onHoverEnd={() => setHoveredMember(null)}
//               className="relative group"
//             >
//               {/* Card Background with Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
//               <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300">

//                 {/* Member Image with Hover Effect */}
//                 <div 
//                   className="relative overflow-hidden cursor-pointer"
//                   onClick={() => openModal(member)}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <img
//                       className="w-full h-64 object-cover"
//                       src={member.image}
//                       alt={member.name}
//                       onError={(e) => {
//                         e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random&size=256`;
//                       }}
//                     />
//                   </motion.div>
                  
//                   {/* Overlay with social icons */}
//                   <motion.div 
//                     className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     initial={false}
//                   >
//                     <div className="flex space-x-2">
//                       {member.social?.facebook && (
//                         <motion.a
//                           href={member.social.facebook}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white transition-colors shadow-lg"
//                           whileHover={{ scale: 1.1, y: -2 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Facebook fontSize="small" />
//                         </motion.a>
//                       )}
//                       {member.social?.twitter && (
//                         <motion.a
//                           href={member.social.twitter}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 rounded-full text-white transition-colors shadow-lg"
//                           whileHover={{ scale: 1.1, y: -2 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Twitter fontSize="small" />
//                         </motion.a>
//                       )}
//                       {member.social?.instagram && (
//                         <motion.a
//                           href={member.social.instagram}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-gradient-to-t from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full text-white transition-colors shadow-lg"
//                           whileHover={{ scale: 1.1, y: -2 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Instagram fontSize="small" />
//                         </motion.a>
//                       )}
//                       {member.social?.linkedin && (
//                         <motion.a
//                           href={member.social.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-2 bg-gradient-to-t from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-full text-white transition-colors shadow-lg"
//                           whileHover={{ scale: 1.1, y: -2 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <LinkedIn fontSize="small" />
//                         </motion.a>
//                       )}
//                     </div>
//                   </motion.div>

//                   {/* Like Button */}
//                   <motion.button
//                     onClick={(e) => toggleLike(member.id, e)}
//                     className="absolute top-4 right-4 p-2 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full text-white shadow-lg"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     {likedMembers[member.id] ? <Favorite /> : <FavoriteBorder />}
//                   </motion.button>

//                   {/* Badge for featured members */}
//                   {member.featured && (
//                     <div className="absolute top-4 left-4 bg-gradient-to-t from-blue-500 to-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
//                       <Star className="text-xs" />
//                       <span>Featured</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Member Info */}
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
//                     {member.name}
//                   </h3>
//                   <p className="text-blue-400 mb-2">{member.position}</p>
                  
//                   {/* Experience/Rating */}
//                   <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 mb-3">
//                     {member.experience && (
//                       <>
//                         <Work fontSize="small" />
//                         <span>{member.experience} exp</span>
//                       </>
//                     )}
//                     {member.rating && (
//                       <>
//                         <Star className="text-blue-400 ml-2" fontSize="small" />
//                         <span>{member.rating}</span>
//                       </>
//                     )}
//                   </div>

//                   {/* View Profile Button - Blue gradient */}
//                   <motion.button
//                     onClick={() => openModal(member)}
//                     className="px-4 py-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg text-sm font-semibold transition-all shadow-lg w-full border border-white/20"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     View Profile
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Join Team CTA - Blue gradient */}
//         <motion.div 
//           className="mt-20 text-center p-12 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-white/10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
//           <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
//             We're always looking for passionate individuals to join our family and create exceptional experiences for our guests.
//           </p>
//           <motion.button
//             className="px-8 py-3 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg font-semibold shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Apply Now
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Enhanced Modal */}
//       <AnimatePresence>
//         {isModalOpen && selectedMember && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           >
//             <motion.div
//               className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               transition={{ type: "spring", damping: 20 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Modal Header with Close Button - RED gradient for close */}
//               <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-white/10 flex justify-between items-center z-10">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={selectedMember.image}
//                     alt=''
//                     className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
//                     onError={(e) => {
//                       e.target.src = `https://ui-avatars.com/api/?name=${selectedMember.name}&background=random&size=128`;
//                     }}
//                   />
//                   <div>
//                     <h2 className="text-2xl font-bold text-white">{selectedMember.name}</h2>
//                     <p className="text-blue-400">{selectedMember.position}</p>
//                   </div>
//                 </div>
//                 <motion.button
//                   onClick={closeModal}
//                   className="p-3 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full text-white shadow-lg"
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   whileTap={{ scale: 0.9 }}
//                   aria-label="Close modal"
//                 >
//                   <Close />
//                 </motion.button>
//               </div>

//               {/* Modal Content */}
//               <div className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {/* Left Column - Image and Quick Info */}
//                   <div className="md:col-span-1">
//                     <img
//                       src={selectedMember.image}
//                       alt=''
//                       className="w-full h-auto rounded-2xl mb-4 border-2 border-blue-400"
//                       onError={(e) => {
//                         e.target.src = `https://ui-avatars.com/api/?name=${selectedMember.name}&background=random&size=512`;
//                       }}
//                     />
                    
//                     {/* Quick Info Cards */}
//                     <div className="space-y-3">
//                       {selectedMember.email && (
//                         <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
//                           <Email className="text-blue-400" />
//                           <span className="text-gray-300">{selectedMember.email}</span>
//                         </div>
//                       )}
//                       {selectedMember.phone && (
//                         <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
//                           <Phone className="text-blue-400" />
//                           <span className="text-gray-300">{selectedMember.phone}</span>
//                         </div>
//                       )}
//                       {selectedMember.location && (
//                         <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
//                           <LocationOn className="text-blue-400" />
//                           <span className="text-gray-300">{selectedMember.location}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Right Column - Detailed Info */}
//                   <div className="md:col-span-2 space-y-6">
//                     {/* Bio */}
//                     <div>
//                       <h3 className="text-xl font-bold text-blue-400 mb-3">About</h3>
//                       <p className="text-gray-300 leading-relaxed">
//                         {selectedMember.bio || `${selectedMember.name} is a dedicated ${selectedMember.position} with extensive experience in the hospitality industry. They are committed to providing exceptional service and creating memorable experiences for our guests.`}
//                       </p>
//                     </div>

//                     {/* Experience & Skills */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="p-4 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
//                         <Work className="text-blue-400 mb-2" />
//                         <h4 className="font-semibold mb-1">Experience</h4>
//                         <p className="text-gray-400">{selectedMember.experience || "10+ years"}</p>
//                       </div>
//                       <div className="p-4 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
//                         <School className="text-blue-400 mb-2" />
//                         <h4 className="font-semibold mb-1">Education</h4>
//                         <p className="text-gray-400">{selectedMember.education || "Hospitality Management"}</p>
//                       </div>
//                     </div>

//                     {/* Specialties */}
//                     {selectedMember.specialties && (
//                       <div>
//                         <h3 className="text-xl font-bold text-blue-400 mb-3">Specialties</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedMember.specialties.map((specialty, index) => (
//                             <span
//                               key={index}
//                               className="px-3 py-1 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-white/20"
//                             >
//                               {specialty}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Languages */}
//                     {selectedMember.languages && (
//                       <div>
//                         <h3 className="text-xl font-bold text-blue-400 mb-3">Languages</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedMember.languages.map((language, index) => (
//                             <span
//                               key={index}
//                               className="px-3 py-1 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-white/20 flex items-center"
//                             >
//                               <Language className="text-xs mr-1" />
//                               {language}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Social Links - All with blue gradients */}
//                     <div>
//                       <h3 className="text-xl font-bold text-blue-400 mb-3">Connect</h3>
//                       <div className="flex space-x-3">
//                         {selectedMember.social?.facebook && (
//                           <motion.a
//                             href={selectedMember.social.facebook}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-lg"
//                             whileHover={{ scale: 1.1, y: -2 }}
//                           >
//                             <Facebook />
//                           </motion.a>
//                         )}
//                         {selectedMember.social?.twitter && (
//                           <motion.a
//                             href={selectedMember.social.twitter}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 rounded-full text-white shadow-lg"
//                             whileHover={{ scale: 1.1, y: -2 }}
//                           >
//                             <Twitter />
//                           </motion.a>
//                         )}
//                         {selectedMember.social?.instagram && (
//                           <motion.a
//                             href={selectedMember.social.instagram}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 bg-gradient-to-t from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full text-white shadow-lg"
//                             whileHover={{ scale: 1.1, y: -2 }}
//                           >
//                             <Instagram />
//                           </motion.a>
//                         )}
//                         {selectedMember.social?.linkedin && (
//                           <motion.a
//                             href={selectedMember.social.linkedin}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-3 bg-gradient-to-t from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-full text-white shadow-lg"
//                             whileHover={{ scale: 1.1, y: -2 }}
//                           >
//                             <LinkedIn />
//                           </motion.a>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };























/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn, 
  Email, 
  Phone, 
  LocationOn,
  Close,
  Star,
  Verified,
  Share,
  Favorite,
  FavoriteBorder,
  ChevronLeft,
  ChevronRight,
  Work,
  School,
  Language,
  CalendarToday,
  AccessTime,
  Restaurant,
  RoomService,
  Spa,
  Pool
} from "@mui/icons-material";
import { teamMembers } from "../../assets/data/data";

export const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [likedMembers, setLikedMembers] = useState({});
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Filter categories
  const filters = [
    { id: "all", label: "All Team" },
    { id: "management", label: "Management" },
    { id: "chef", label: "Chefs" },
    { id: "service", label: "Service" },
    { id: "events", label: "Events" },
    { id: "wellness", label: "Wellness" }
  ];

  // Extended team member data with more details
  const enhancedTeamMembers = teamMembers.map(member => ({
    ...member,
    achievements: member.achievements || [
      "Employee of the Month 2024",
      "5-Star Service Award",
      "Guest Favorite 2023"
    ],
    certifications: member.certifications || [
      "Hospitality Management",
      "Customer Service Excellence",
      "First Aid Certified"
    ],
    schedule: member.schedule || "Mon-Fri, 9AM-6PM",
    joinedDate: member.joinedDate || "2020",
    reviews: member.reviews || 128,
    projects: member.projects || 15,
    specialties: member.specialties || [
      "Guest Relations",
      "Event Planning",
      "Team Leadership",
      "Crisis Management"
    ],
    languages: member.languages || ["English", "Spanish", "French"],
    images: member.images || [member.image, member.image, member.image],
    availability: member.availability || "Available for bookings",
    department: member.department || "Guest Services"
  }));

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    setActiveImageIndex(0);
    setShowShareOptions(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  const toggleLike = (memberId, e) => {
    e.stopPropagation();
    setLikedMembers(prev => ({
      ...prev,
      [memberId]: !prev[memberId]
    }));
  };

  const nextImage = () => {
    if (selectedMember?.images) {
      setActiveImageIndex((prev) => 
        prev === selectedMember.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedMember?.images) {
      setActiveImageIndex((prev) => 
        prev === 0 ? selectedMember.images.length - 1 : prev - 1
      );
    }
  };

  const shareProfile = (platform) => {
    const url = window.location.href;
    const text = `Check out ${selectedMember?.name} profile at LD Luxury Hotel`;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      default:
        navigator.clipboard.writeText(url);
    }
    setShowShareOptions(false);
  };

  // Filter team members based on active filter
  const filteredMembers = activeFilter === "all" 
    ? enhancedTeamMembers 
    : enhancedTeamMembers.filter(member => member.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-5 sm:top-20 sm:left-10 text-blue-400/10 text-[80px] sm:text-[120px] md:text-[150px] font-serif">👥</div>
      <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 text-purple-400/10 text-[80px] sm:text-[120px] md:text-[150px] font-serif">⭐</div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Meet Our Master Team
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Dedicated professionals committed to making your stay exceptional with their expertise and passion
          </p>
        </motion.div>

        {/* Team Grid - Fully Responsive */}
        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              onHoverStart={() => setHoveredMember(member.id)}
              onHoverEnd={() => setHoveredMember(null)}
              className="relative group"
            >
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg sm:blur-xl" />
              
              <div className="relative bg-white/5 sm:bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300">

                {/* Member Image with Hover Effect */}
                <div 
                  className="relative overflow-hidden cursor-pointer aspect-square"
                  onClick={() => openModal(member)}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random&size=256`;
                      }}
                    />
                  </motion.div>
                  
                  {/* Overlay with social icons - Hidden on very small screens */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-2 sm:pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="flex space-x-1 sm:space-x-2">
                      {member.social?.facebook && (
                        <motion.a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-lg"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Facebook fontSize="small" className="text-sm sm:text-base" />
                        </motion.a>
                      )}
                      {member.social?.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 rounded-full text-white shadow-lg"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Twitter fontSize="small" className="text-sm sm:text-base" />
                        </motion.a>
                      )}
                      {member.social?.instagram && (
                        <motion.a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 bg-gradient-to-t from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full text-white shadow-lg"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Instagram fontSize="small" className="text-sm sm:text-base" />
                        </motion.a>
                      )}
                      {member.social?.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 bg-gradient-to-t from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-full text-white shadow-lg"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <LinkedIn fontSize="small" className="text-sm sm:text-base" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {/* Like Button */}
                  <motion.button
                    onClick={(e) => toggleLike(member.id, e)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full text-white shadow-lg z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {likedMembers[member.id] ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
                  </motion.button>

                  {/* Badge for featured members */}
                  {member.featured && (
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-gradient-to-t from-blue-500 to-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold flex items-center space-x-1 shadow-lg z-10">
                      <Star className="text-[10px] sm:text-xs" />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Quick stats overlay on hover */}
                  <motion.div 
                    className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    initial={false}
                  >
                    <div className="flex items-center space-x-2 text-[10px] sm:text-xs">
                      <span className="flex items-center">
                        <Star className="text-blue-400 mr-1 text-[8px] sm:text-xs" />
                        {member.rating || 4.9}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Work className="text-purple-400 mr-1 text-[8px] sm:text-xs" />
                        {member.experience || "5+"}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Member Info */}
                <div className="p-3 sm:p-4 md:p-6 text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-400 mb-1 sm:mb-2 line-clamp-1">{member.position}</p>
                  
                  {/* Experience/Rating - Hidden on extra small screens */}
                  <div className="hidden sm:flex items-center justify-center space-x-2 text-xs text-gray-400 mb-2 sm:mb-3">
                    {member.experience && (
                      <>
                        <Work fontSize="small" className="text-xs" />
                        <span>{member.experience} exp</span>
                      </>
                    )}
                    {member.rating && (
                      <>
                        <Star className="text-blue-400 ml-2" fontSize="small" />
                        <span>{member.rating}</span>
                      </>
                    )}
                  </div>

                  {/* View Profile Button - Blue gradient */}
                  <motion.button
                    onClick={() => openModal(member)}
                    className="w-full px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-lg border border-white/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA - Responsive */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20 text-center p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-white/10 mx-2 sm:mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Join Our Team</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto px-2">
            We're always looking for passionate individuals to join our family and create exceptional experiences for our guests.
          </p>
   
        </motion.div>
      </div>

      {/* Enhanced Modal - Fully Responsive */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-3 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl w-full max-w-[95%] xs:max-w-[90%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl max-h-[95vh] overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Close Button */}
              <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 p-3 sm:p-4 md:p-6 border-b border-white/10 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 xs:gap-0 z-10">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 w-full xs:w-auto">
                  <img
                    src={selectedMember.image}
                    alt=''
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-blue-400"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${selectedMember.name}&background=random&size=128`;
                    }}
                  />
                  <div className="flex-1 xs:flex-none">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white line-clamp-1">{selectedMember.name}</h2>
                    <p className="text-xs sm:text-sm md:text-base text-blue-400 line-clamp-1">{selectedMember.position}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 self-end xs:self-auto">
                  {/* Share Button */}
                  <div className="relative">
                    <motion.button
                      onClick={() => setShowShareOptions(!showShareOptions)}
                      className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share fontSize="small" className="text-sm sm:text-base" />
                    </motion.button>
                    
                    {/* Share Options Dropdown */}
                    <AnimatePresence>
                      {showShareOptions && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-xl border border-white/20 overflow-hidden z-20"
                        >
                          <button
                            onClick={() => shareProfile('facebook')}
                            className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm hover:bg-blue-600 flex items-center space-x-2"
                          >
                            <Facebook fontSize="small" />
                            <span>Facebook</span>
                          </button>
                          <button
                            onClick={() => shareProfile('twitter')}
                            className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm hover:bg-blue-400 flex items-center space-x-2"
                          >
                            <Twitter fontSize="small" />
                            <span>Twitter</span>
                          </button>
                          <button
                            onClick={() => shareProfile('linkedin')}
                            className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm hover:bg-blue-700 flex items-center space-x-2"
                          >
                            <LinkedIn fontSize="small" />
                            <span>LinkedIn</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <motion.button
                    onClick={closeModal}
                    className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full text-white shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close modal"
                  >
                    <Close fontSize="small" className="text-sm sm:text-base" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8 max-h-[calc(95vh-80px)]">
                {/* Image Gallery */}
                {selectedMember.images && selectedMember.images.length > 0 && (
                  <div className="relative mb-4 sm:mb-6 md:mb-8 rounded-lg sm:rounded-xl overflow-hidden">
                    <div className="relative aspect-video">
                      <img
                        src={selectedMember.images[activeImageIndex]}
                        alt={`${selectedMember.name} - ${activeImageIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = selectedMember.image;
                        }}
                      />
                      
                      {/* Image Navigation Buttons */}
                      {selectedMember.images.length > 1 && (
                        <>
                          <motion.button
                            onClick={prevImage}
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronLeft fontSize="small" />
                          </motion.button>
                          <motion.button
                            onClick={nextImage}
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ChevronRight fontSize="small" />
                          </motion.button>
                        </>
                      )}
                      
                      {/* Image Indicators */}
                      {selectedMember.images.length > 1 && (
                        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                          {selectedMember.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveImageIndex(index)}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                                index === activeImageIndex
                                  ? 'bg-blue-400 w-3 sm:w-4'
                                  : 'bg-white/50 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {/* Left Column - Basic Info & Stats */}
                  <div className="lg:col-span-1 space-y-3 sm:space-y-4">
                    {/* Quick Stats Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="p-2 sm:p-3 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10 text-center">
                        <div className="text-blue-400 text-lg sm:text-xl mb-1">⭐</div>
                        <div className="text-sm sm:text-base font-bold">{selectedMember.rating || 4.9}</div>
                        <div className="text-[10px] sm:text-xs text-gray-400">Rating</div>
                      </div>
                      <div className="p-2 sm:p-3 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10 text-center">
                        <div className="text-purple-400 text-lg sm:text-xl mb-1">📋</div>
                        <div className="text-sm sm:text-base font-bold">{selectedMember.reviews || 128}</div>
                        <div className="text-[10px] sm:text-xs text-gray-400">Reviews</div>
                      </div>
                      <div className="p-2 sm:p-3 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10 text-center">
                        <div className="text-green-400 text-lg sm:text-xl mb-1">💼</div>
                        <div className="text-sm sm:text-base font-bold">{selectedMember.experience || "5+"}</div>
                        <div className="text-[10px] sm:text-xs text-gray-400">Years</div>
                      </div>
                      <div className="p-2 sm:p-3 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10 text-center">
                        <div className="text-pink-400 text-lg sm:text-xl mb-1">🏆</div>
                        <div className="text-sm sm:text-base font-bold">{selectedMember.projects || 15}</div>
                        <div className="text-[10px] sm:text-xs text-gray-400">Projects</div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      {selectedMember.email && (
                        <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                          <Email className="text-blue-400 text-sm sm:text-base flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-300 break-all">{selectedMember.email}</span>
                        </div>
                      )}
                      {selectedMember.phone && (
                        <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                          <Phone className="text-blue-400 text-sm sm:text-base flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-300">{selectedMember.phone}</span>
                        </div>
                      )}
                      {selectedMember.location && (
                        <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                          <LocationOn className="text-blue-400 text-sm sm:text-base flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-300">{selectedMember.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Schedule */}
                    <div className="p-2 sm:p-3 bg-gradient-to-t from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <AccessTime className="text-blue-400 text-sm" />
                        <h4 className="text-xs sm:text-sm font-semibold">Availability</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300">{selectedMember.schedule}</p>
                      <p className="text-[10px] sm:text-xs text-gray-400 mt-1">{selectedMember.availability}</p>
                    </div>
                  </div>

                  {/* Right Column - Detailed Info */}
                  <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                    {/* Bio */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-400 mb-2">About</h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {selectedMember.bio || `${selectedMember.name} is a dedicated ${selectedMember.position} with extensive experience in the hospitality industry. They are committed to providing exceptional service and creating memorable experiences for our guests.`}
                      </p>
                    </div>

                    {/* Department & Joined Date */}
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full">
                        <RoomService className="text-blue-400 text-sm" />
                        <span className="text-xs sm:text-sm">{selectedMember.department}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full">
                        <CalendarToday className="text-purple-400 text-sm" />
                        <span className="text-xs sm:text-sm">Joined {selectedMember.joinedDate}</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    {selectedMember.specialties && (
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-400 mb-2">Specialties</h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {selectedMember.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-full text-[10px] sm:text-xs border border-white/20"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {selectedMember.achievements && (
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-400 mb-2">Achievements</h3>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {selectedMember.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-400 text-xs sm:text-sm">•</span>
                              <span className="text-xs sm:text-sm text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Certifications */}
                    {selectedMember.certifications && (
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-400 mb-2">Certifications</h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {selectedMember.certifications.map((cert, index) => (
                            <span
                              key={index}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-t from-green-500/20 to-blue-500/20 rounded-full text-[10px] sm:text-xs border border-white/20"
                            >
                              ✓ {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Languages */}
                    {selectedMember.languages && (
                      <div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-400 mb-2">Languages</h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {selectedMember.languages.map((language, index) => (
                            <span
                              key={index}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-t from-purple-500/20 to-pink-500/20 rounded-full text-[10px] sm:text-xs border border-white/20 flex items-center"
                            >
                              <Language className="text-[8px] sm:text-xs mr-1" />
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Social Links */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-400 mb-2">Connect</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {selectedMember.social?.facebook && (
                          <motion.a
                            href={selectedMember.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-full text-white shadow-lg"
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Facebook fontSize="small" />
                          </motion.a>
                        )}
                        {selectedMember.social?.twitter && (
                          <motion.a
                            href={selectedMember.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 rounded-full text-white shadow-lg"
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Twitter fontSize="small" />
                          </motion.a>
                        )}
                        {selectedMember.social?.instagram && (
                          <motion.a
                            href={selectedMember.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 bg-gradient-to-t from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full text-white shadow-lg"
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Instagram fontSize="small" />
                          </motion.a>
                        )}
                        {selectedMember.social?.linkedin && (
                          <motion.a
                            href={selectedMember.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 sm:p-3 bg-gradient-to-t from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-full text-white shadow-lg"
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <LinkedIn fontSize="small" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};