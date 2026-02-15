// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
// import { Button, Card } from "@mui/material";
// import { about } from "../../assets/data/data";
// import { Time } from "../time/Time";
// import axios from "axios";

// export const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);
  
//     try {
//       const response = await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/83920/92303",
//         { email },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
  
//       setSuccess(true);
//       setEmail("");
//       alert('Subscription successfull');
//     } catch (err) {
//       // setError(err.response?.data?.message || err.message || "Something went wrong");
//       alert('Subscription failed',err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <section
//       id="footer"
//       className="w-full bg-gray-900 dark:text-white text-white"
//     >
//       {/* Footer Subscribe */}
//       <div className="w-full bg-white text-black rounded-2xl pt-20 pb-20">
//         <div className="container mx-auto px-4">
//           <div className="row flex flex-wrap items-center">
//             <div className="col-lg-6 w-full lg:w-1/2">
//               <motion.div
//                 className="subscribe_title mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="title text-2xl font-bold">
//                   Subscribe Our Newsletter
//                 </h4>
//                 <p className="text-gray-400">To receive monthly updates</p>
//               </motion.div>
//             </div>
//             <div className="col-lg-6 w-full lg:w-1/2">
//               <motion.div
//                 className="subscribe_form mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex text-black border-black bg-gray-500"
//                 >
//                   <input
//                     type="email"
//                     placeholder="Enter Your Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="px-6 py-3 dark:bg-blue-400 dark:text-white text-white rounded-r-lg  transition-colors duration-300"
//                   >
//                     {loading ? "Sending..." : "Subscribe"}
//                   </button>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Widget */}
//       <div className="footer_widget pt-20 pb-20">
//         <div className="container mx-auto px-4">
//           <div className="row flex flex-wrap">
//             {/* About Us */}
//             <div className="col-lg-4 col-md-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_about mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   About Us
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <p className="text-gray-400 pt-4">
//                   That means it will offer a range of onsite amenities that
//                   probably include restaurants, exercise spaces, spas and
//                   meeting spaces. These hotels are generally luxury, upscale or
//                   upper upscale properties.
//                 </p>
//                 <ul className="social flex mt-4 space-x-4">
//                   <li>
//                     <Button
//                       href="/"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Facebook className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="/"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Twitter className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="/"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <Instagram className="size-6" />
//                     </Button>
//                   </li>
//                   <li>
//                     <Button
//                       href="/"
//                       className="text-gray-400 hover:text-yellow-500"
//                     >
//                       <LinkedIn className="size-6" />
//                     </Button>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Opening Hours */}
//             <div className="col-lg-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_link mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   Opening Hours
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <ul className="text-gray-400 pt-4">
//                   <li>
//                     Mon-Fri: <b> 08.00 A.M - 08.00 P.M</b>
//                   </li>
//                   <li>
//                     Saturday: <b> 10.00 A.M - 09.00 P.M</b>
//                   </li>
//                   <li>
//                     Sunday: <b> Closed</b>
//                   </li>
//                   <li>
//                     Half-Holidays: <b> 08.00 A.M - 02.00 P.M</b>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Instagram Feed */}
//             <div className="col-lg-4 col-md-4 w-full lg:w-1/3">
//               <motion.div
//                 className="footer_instagram mt-8"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h4 className="footer_title text-xl font-bold mb-4">
//                   Instagram Feed
//                 </h4>
//                 <motion.span
//                   className="line block w-16 h-1 bg-orange-500 mx-auto mt-4 relative"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <motion.span
//                     className="box absolute w-2 h-2 bg-orange-500 rounded-full -top-1 -left-1"
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   ></motion.span>
//                 </motion.span>
//                 <div className="grid grid-cols-4 gap-2 pt-4">
//                   {about.map((image) => (
//                     <Card key={image.id}>
//                       <img
//                         src={image.url}
//                         alt=""
//                         className="w-full h-24 object-cover rounded-lg"
//                       />
//                     </Card>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



























/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, LinkedIn, Twitter, Close } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import { about } from "../../assets/data/data";
import { Time } from "../time/Time";
import axios from "axios";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
  
    try {
      const response = await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/83920/92303",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      setSuccess(true);
      setEmail("");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="footer"
      className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400/5 to-purple-500/5 rounded-full blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
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

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 sm:px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-3 ${
              success 
                ? "bg-gradient-to-t from-green-500 to-green-700" 
                : error 
                ? "bg-gradient-to-t from-red-500 to-red-700" 
                : ""
            }`}
          >
            <span className="text-white text-sm sm:text-base">
              {success ? "✓ Subscription successful!" : error || "Error occurred"}
            </span>
            <button
              onClick={() => setShowNotification(false)}
              className="p-1 bg-gradient-to-t from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 rounded-full text-white"
            >
              <Close className="text-sm sm:text-base" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Subscribe */}
      <div className="w-full bg-gradient-to-t from-white/5 to-white/10 backdrop-blur-lg text-white rounded-t-3xl pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Subscribe Our Newsletter
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">To receive monthly updates and exclusive offers</p>
              </motion.div>
            </div>
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-0"
                >
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 text-sm sm:text-base transition-all"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-all shadow-lg disabled:opacity-70 text-sm sm:text-base"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="inline-block"
                        >
                          ◌
                        </motion.span>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Widget */}
      <div className="footer_widget py-12 sm:py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* About Us */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                About Us
              </h4>
              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0 mb-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                That means it will offer a range of onsite amenities that
                probably include restaurants, exercise spaces, spas and
                meeting spaces. These hotels are generally luxury, upscale or
                upper upscale properties.
              </p>
              <ul className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-6">
                {[
                  { icon: <Facebook />, gradient: "from-blue-600 to-blue-800", link: "#" },
                  { icon: <Twitter />, gradient: "from-blue-400 to-blue-600", link: "#" },
                  { icon: <Instagram />, gradient: "from-purple-500 to-pink-500", link: "#" },
                  { icon: <LinkedIn />, gradient: "from-blue-700 to-blue-900", link: "#" }
                ].map((social, index) => (
                  <motion.li key={index}>
                    <motion.a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block p-2 sm:p-3 bg-gradient-to-t ${social.gradient} rounded-full text-white shadow-lg hover:shadow-xl`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="text-sm sm:text-base">{social.icon}</div>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Opening Hours
              </h4>
              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0 mb-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-2">
                  <span>Mon-Fri:</span>
                  <span className="text-white font-semibold">08:00 AM - 08:00 PM</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-2">
                  <span>Saturday:</span>
                  <span className="text-white font-semibold">10:00 AM - 09:00 PM</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between border-b border-white/10 pb-2">
                  <span>Sunday:</span>
                  <span className="text-red-400 font-semibold">Closed</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between">
                  <span>Half-Holidays:</span>
                  <span className="text-white font-semibold">08:00 AM - 02:00 PM</span>
                </li>
              </ul>
            </motion.div>

            {/* Instagram Feed */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Instagram Feed
              </h4>
              <motion.div
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0 mb-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                {about.slice(0, 4).map((image, index) => (
                  <motion.div
                    key={image.id || index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group overflow-hidden rounded-lg aspect-square"
                  >
                    <img
                      src={image.url}
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/200/200?random=${index}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Instagram className="text-white text-lg sm:text-xl" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="mt-4 px-4 py-2 bg-gradient-to-t from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg text-sm font-semibold shadow-lg w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                Follow @luxuryhotel
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-4 sm:py-6 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <motion.a 
                href="#" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Contact
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};