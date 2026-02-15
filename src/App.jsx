// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState, createContext, useContext } from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { Booking } from "./components/booking/Book";
// import { About } from "./pages/about/About";
// import { RoomsServices } from "./pages/services/RoomServices";
// import { Testimony } from "./pages/testimony/Testimony";
// import { OurTeam } from "./pages/our team/OurTeam";
// import Service from "./pages/service/Service";
// import Home from "./pages/home/Home";
// import { ContactSection } from "./pages/contact/Contact";
// import { Dashboard } from "./components/dashboard/index/Dashboard";
// import { Login } from "./pages/login/Login";
// // Dashboard routes
// import UserDashboard from "./components/dashboard/index/UserDashboard";
// import { AdminReportGenerator } from "./components/dashboard/components/report/AdminReportGenerator";
// import { BookingPannel } from "./components/dashboard/components/pannel/BookingPannel";
// import { MessagePannel } from "./components/dashboard/components/pannel/MessagePannel";
// import { UserPannel } from "./components/dashboard/components/pannel/UserPannel";
// import { Calendar } from "./components/dashboard/components/calender/Calender";
// import { Profile } from "./components/dashboard/components/profile/Profile";
// import { SettingsPannel } from "./components/dashboard/components/settings/Settings";
// import { GraphicalData } from "./components/dashboard/components/charts/DataGraphs";
// import { UserViewMe } from "./components/dashboard/userDashComponent/user/UserViewMe";
// import { UserBooking } from "./components/dashboard/userDashComponent/bookings/UserBookingsView";
// import { UserMessageView } from "./components/dashboard/userDashComponent/messages/UserMessageView";
// import NotFound from "./pages/not found/NotFound";
// import Layout from "./pages/layout/Layout";
// import ErrorBoundary from "./pages/errorElement/ErrorElement";
// import user from './assets/images/logo/276-2763872_hospitality-hotel-icon.png'
// // Create Auth Context
// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [userEmail, setUserEmail] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading user data
//     const token = localStorage.getItem("authToken");
//     const email = localStorage.getItem("userEmail");
//     if (token && email) {
//       setUserEmail(email);
//     }
//     setIsLoading(false);
//   }, []);

//   const login = (email, token) => {
//     setUserEmail(email);
//     localStorage.setItem("authToken", token);
//     localStorage.setItem("userEmail", email);
//   };

//   const logout = () => {
//     setUserEmail(null);
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userEmail");
//   };

//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
//           <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <AuthContext.Provider value={{ userEmail, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // eslint-disable-next-line react-refresh/only-export-components
// export function useAuth() {
//   return useContext(AuthContext);
// }

// // ProtectedRoute component remains the same but uses userEmail
// const ProtectedRoute = ({ children }) => {
//   const { userEmail } = useAuth();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     const email = localStorage.getItem("userEmail");
//     if (token && email) {
//       setLoading(false);
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   if (loading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-40">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
//           <p className="mt-4 text-lg font-medium text-gray-700">Verifying access...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userEmail && !localStorage.getItem("authToken")) {
//     return <Navigate to="/L-6382-8279/34" replace />;
//   }

//   return children;
// };

// export default function App() {
//   const [appLoading, setAppLoading] = useState(true);

//   useEffect(() => {
//     // Simulate app loading
//     const timer = setTimeout(() => {
//       setAppLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (appLoading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//         <div className="flex flex-col items-center">
//           <div className="animate-pulse">
//             <img className="h-20 w-20 rounded-full bg-blue-100 mb-4" src={user}/>
//           </div>
//           <div className="animate-pulse flex space-x-2">
//             <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
//             <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
//             <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
//           </div>
//           <p className="mt-6 text-xl font-semibold text-gray-800">Welcome to Hotel Haven</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public routes Route */}
//           <Route
//             path="*"
//             element={<NotFound />}
//             errorElement={<ErrorBoundary />}
//           />
//           <Route element={<Layout />}>
//             <Route element={<Home />} path="/" />
//             <Route element={<About />} path="/A-7483-783/34" />
//             <Route element={<Booking />} path="/B-7839-283/34" />
//             <Route element={<Service />} path="/S-6832-342/34" />
//             <Route element={<RoomsServices />} path="/R-8763-327/34" />
//             <Route element={<OurTeam />} path="/O-2973-342/34" />
//             <Route element={<Testimony />} path="/T-8732-452/34" />
//             <Route element={<ContactSection />} path="/C-3872-2344/34" />
//             <Route element={<Login />} path="/L-6382-8279/34" />

//             {/* end of public Route */}
//             {/* Protected Dashboard Route */}
//             <Route
//               path="/Dash-32793"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/U-23-Dash-32793"
//               element={
//                 <ProtectedRoute>
//                   <UserDashboard />
//                 </ProtectedRoute>
//               }
//             />
//             {/* Dashboard Routes */}
//             <Route element={<BookingPannel />} path="/AB-7832-342" />
//             <Route element={<MessagePannel />} path="/MS-3562-922" />
//             <Route element={<UserPannel />} path="/UV-2390-389" />
//             <Route element={<AdminReportGenerator />} path="/ARG-3832-382" />
//             <Route element={<Calendar />} path="/C-6784-873" />
//             <Route element={<Profile />} path="/PF-5638-893" />
//             <Route element={<SettingsPannel />} path="/SG-6788-327" />
//             <Route element={<GraphicalData />} path="/GD-2761-823" />
//             {/* userDashboard */}
//             <Route element={<UserViewMe />} path="/UVM-7289-2782" />
//             <Route element={<UserBooking />} path="/UBV-7929-2092" />
//             <Route element={<UserMessageView />} path="/UMV-7988-0023" />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }
















// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState, createContext, useContext } from "react";
// import "./App.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
// import { Booking } from "./components/booking/Book";
// import { About } from "./pages/about/About";
// import { RoomsServices } from "./pages/services/RoomServices";
// import { Testimony } from "./pages/testimony/Testimony";
// import { OurTeam } from "./pages/our team/OurTeam";
// import Service from "./pages/service/Service";
// import Home from "./pages/home/Home";
// import { ContactSection } from "./pages/contact/Contact";
// import { Dashboard } from "./components/dashboard/index/Dashboard";
// import { Login } from "./pages/login/Login";
// // Dashboard routes
// import UserDashboard from "./components/dashboard/index/UserDashboard";
// import { AdminReportGenerator } from "./components/dashboard/components/report/AdminReportGenerator";
// import { BookingPannel } from "./components/dashboard/components/pannel/BookingPannel";
// import { MessagePannel } from "./components/dashboard/components/pannel/MessagePannel";
// import { UserPannel } from "./components/dashboard/components/pannel/UserPannel";
// import { Calendar } from "./components/dashboard/components/calender/Calender";
// import { Profile } from "./components/dashboard/components/profile/Profile";
// import { SettingsPannel } from "./components/dashboard/components/settings/Settings";
// import { GraphicalData } from "./components/dashboard/components/charts/DataGraphs";
// import { UserViewMe } from "./components/dashboard/userDashComponent/user/UserViewMe";
// import { UserBooking } from "./components/dashboard/userDashComponent/bookings/UserBookingsView";
// import { UserMessageView } from "./components/dashboard/userDashComponent/messages/UserMessageView";
// import NotFound from "./pages/not found/NotFound";
// import Layout from "./pages/layout/Layout";
// import ErrorBoundary from "./pages/errorElement/ErrorElement";
// import user from "./assets/images/logo/276-2763872_hospitality-hotel-icon.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";

// // Add these keyframe animations to your App.css
// const style = document.createElement("style");
// style.textContent = `
//   @keyframes progress {
//     0% { width: 0%; }
//     50% { width: 70%; }
//     100% { width: 100%; }
//   }

//   @keyframes shimmer {
//     100% { transform: translateX(100%); }
//   }
// `;
// document.head.appendChild(style);

// // Route Loading Component with different animations
// const RouteLoadingMotion = ({ type = "spinner" }) => {
//   const motions = {
//     spinner: (
//       <div className="flex flex-col items-center">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
//         <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
//       </div>
//     ),
//     pulse: (
//       <div className="flex flex-col items-center">
//         <div className="animate-pulse">
//           <div className="h-16 w-16 bg-blue-500 rounded-full"></div>
//         </div>
//         <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">
//           Loading...
//         </p>
//       </div>
//     ),
//     bounce: (
//       <div className="flex flex-col items-center">
//         <div className="animate-bounce">
//           <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
//         </div>
//         <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
//       </div>
//     ),
//     wave: (
//       <div className="flex flex-col items-center">
//         <div className="flex space-x-2">
//           <div className="h-4 w-4 bg-blue-500 rounded-full animate-[bounce_1s_infinite]"></div>
//           <div className="h-4 w-4 bg-blue-500 rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
//           <div className="h-4 w-4 bg-blue-500 rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
//         </div>
//         <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
//       </div>
//     ),
//     progress: (
//       <div className="flex flex-col items-center w-64">
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
//           <div className="bg-blue-600 h-2.5 rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
//         </div>
//         <p className="text-lg font-medium text-gray-700">Loading...</p>
//       </div>
//     ),
//     shimmer: (
//       <div className="flex flex-col items-center">
//         <div className="relative overflow-hidden rounded-full h-16 w-16 bg-gray-200">
//           <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white to-transparent"></div>
//         </div>
//         <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
//       </div>
//     ),
//     rotate: (
//       <div className="flex flex-col items-center">
//         <div className="relative h-16 w-16">
//           <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
//           <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
//         </div>
//         <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
//       </div>
//     ),
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
//       {motions[type] || motions.spinner}
//     </div>
//   );
// };

// // Create Auth Context
// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [userEmail, setUserEmail] = useState(null);
//   const [userRole, setUserRole] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   // Load user data from storage on mount
//   useEffect(() => {
//     const token =
//       Cookies.get("authToken") || localStorage.getItem("authToken");
//     const email =
//       Cookies.get("userEmail") || localStorage.getItem("userEmail");
//     const role =
//       Cookies.get("userRole") || localStorage.getItem("userRole");

//     if (token && email) {
//       setUserEmail(email);
//       setUserRole(role || "user");
//     }

//     setIsLoading(false);
//   }, []);

//   // LOGIN
//   const login = (email, token, role = "user", status = "active") => {
//     // Save to state
//     setUserEmail(email);
//     setUserRole(role);

//     // Save to cookies (6 hours)
//     Cookies.set("authToken", token, { expires: 0.25 });
//     Cookies.set("userEmail", email, { expires: 0.25 });
//     Cookies.set("userRole", role, { expires: 0.25 });
//     Cookies.set("userStatus", status, { expires: 0.25 });

//     // Also save to localStorage (backup)
//     localStorage.setItem("authToken", token);
//     localStorage.setItem("userEmail", email);
//     localStorage.setItem("userRole", role);

//     console.log("Saved auth data:", { email, role, status });

//     // Redirect
//     if (role === "admin" || status === "admin") {
//       navigate("/Dash-32793");
//     } else {
//       navigate("/U-23-Dash-32793");
//     }
//   };

//   // LOGOUT
//   const logout = async () => {
//     try {
//       const token =
//         Cookies.get("authToken") || localStorage.getItem("authToken");

//       await axios.post(
//         "https://hotel-nodejs-oa32.onrender.com/auth/logout",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       toast.success("Logout successful");
//     } catch (error) {
//       console.error("Logout error:", error.response?.data || error.message);
//       toast.warning("Logout failed");
//     } finally {
//       // Clear state
//       setUserEmail(null);
//       setUserRole(null);

//       // Clear cookies
//       Cookies.remove("authToken");
//       Cookies.remove("userEmail");
//       Cookies.remove("userRole");
//       Cookies.remove("userStatus");

//       // Clear localStorage
//       localStorage.removeItem("authToken");
//       localStorage.removeItem("userEmail");
//       localStorage.removeItem("userRole");

//       navigate("/");
//     }
//   };

//   if (isLoading) {
//     return <RouteLoadingMotion type="rotate" />;
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         userEmail,
//         userRole,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Hook
// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside AuthProvider");
//   }
//   return context;
// }

// // PRIVATE ROUTE
// export const PrivateRoute = ({ children, requiredRole = null }) => {
//   const { userEmail, userRole } = useAuth();
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 400);

//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   if (loading) {
//     return <RouteLoadingMotion type="wave" />;
//   }

//   const token =
//     Cookies.get("authToken") || localStorage.getItem("authToken");

//   // Not authenticated
//   if (!token || !userEmail) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   // Role restriction
//   if (requiredRole && userRole !== requiredRole) {
//     if (userRole === "admin") {
//       return <Navigate to="/Dash-32793" replace />;
//     }
//     return <Navigate to="/U-23-Dash-32793" replace />;
//   }

//   return children;
// };


// // Route Loader Component
// const RouteLoader = ({ children, loadingType = "spinner" }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const location = useLocation();
//   const [prevLocation, setPrevLocation] = useState("");

//   useEffect(() => {
//     if (prevLocation && prevLocation !== location.pathname) {
//       setIsLoading(true);

//       const timer = setTimeout(() => {
//         setIsLoading(false);
//       }, 600);

//       return () => clearTimeout(timer);
//     }

//     setPrevLocation(location.pathname);
//   }, [location.pathname]);

//   useEffect(() => {
//     setPrevLocation(location.pathname);
//   }, []);

//   return (
//     <>
//       {isLoading && <RouteLoadingMotion type={loadingType} />}
//       {children}
//     </>
//   );
// };

// export default function App() {
//   const [appLoading, setAppLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAppLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (appLoading) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//         <div className="flex flex-col items-center">
//           <div className="animate-pulse">
//             <img
//               className="h-20 w-20 rounded-full bg-blue-100 mb-4"
//               src={user}
//               alt=""
//             />
//           </div>
//           <div className="flex space-x-2 animate-bounce">
//             <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
//             <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
//             <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
//           </div>
//           <p className="mt-6 text-xl font-semibold text-gray-800 animate-pulse">
//             Welcome to Luxury Hotel
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public routes */}
//           <Route element={<Layout />}>
//             <Route
//               path="/"
//               element={
//                 <RouteLoader loadingType="spinner">
//                   <Home />
//                 </RouteLoader>
//               }
//             />
//             <Route
//               path="/A-7483-783/34"
//               element={
//                 <RouteLoader loadingType="pulse">
//                   <About />
//                 </RouteLoader>
//               }
//             />
//             <Route
//               path="/B-7839-283/34"
//               element={
//                 <RouteLoader loadingType="bounce">
//                   <Booking />
//                 </RouteLoader>
//               }
//             />
//             <Route
//               path="/S-6832-342/34"
//               element={
//                 <RouteLoader loadingType="wave">
//                   <Service />
//                 </RouteLoader>
//               }
//             />
//             <Route
//               path="/R-8763-327/34"
//               element={
//                 <RouteLoader loadingType="rotate">
//                   <RoomsServices />
//                 </RouteLoader>
//               }
//             />
//             <Route
//               path="/O-2973-342/34"
//               element={
//                 <RouteLoader loadingType="shimmer">
//                   <OurTeam />
//                 </RouteLoader>
//               }
//             />
//             <Route
//               path="/T-8732-452/34"
//               element={
//                 <RouteLoader loadingType="progress">
//                   <Testimony />
//                 </RouteLoader>
//               }
//             />
//             <Route
//               path="/C-3872-2344/34"
//               element={
//                 <RouteLoader loadingType="spinner">
//                   <ContactSection />
//                 </RouteLoader>
//               }
//             />
//             <Route
//               path="/L-6382-8279/34"
//               element={
//                 <RouteLoader loadingType="wave">
//                   <Login />
//                 </RouteLoader>
//               }
//             />
//           </Route>

//           {/* Admin Dashboard Routes - Protected */}
//           <Route
//             path="/Dash-32793"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="rotate">
//                   <Dashboard />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/AB-7832-342"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="bounce">
//                   <BookingPannel />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/MS-3562-922"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="wave">
//                   <MessagePannel />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/UV-2390-389"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="shimmer">
//                   <UserPannel />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/ARG-3832-382"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="rotate">
//                   <AdminReportGenerator />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/C-6784-873"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="progress">
//                   <Calendar />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/PF-5638-893"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="pulse">
//                   <Profile />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/SG-6788-327"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="spinner">
//                   <SettingsPannel />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/GD-2761-823"
//             element={
//               <PrivateRoute requiredRole="admin">
//                 <RouteLoader loadingType="bounce">
//                   <GraphicalData />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           {/* User Dashboard Routes - Protected */}
//           <Route
//             path="/U-23-Dash-32793"
//             element={
//               <PrivateRoute requiredRole="user">
//                 <RouteLoader loadingType="pulse">
//                   <UserDashboard />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/UVM-7289-2782"
//             element={
//               <PrivateRoute requiredRole="user">
//                 <RouteLoader loadingType="wave">
//                   <UserViewMe />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/UBV-7929-2092"
//             element={
//               <PrivateRoute requiredRole="user">
//                 <RouteLoader loadingType="shimmer">
//                   <UserBooking />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           <Route
//             path="/UMV-7988-0023"
//             element={
//               <PrivateRoute requiredRole="user">
//                 <RouteLoader loadingType="rotate">
//                   <UserMessageView />
//                 </RouteLoader>
//               </PrivateRoute>
//             }
//           />

//           {/* 404 Route */}
//           <Route
//             path="*"
//             element={<NotFound />}
//             errorElement={<ErrorBoundary />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }































/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext, useContext } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Booking } from "./components/booking/Book";
import { About } from "./pages/about/About";
import { RoomsServices } from "./pages/services/RoomServices";
import { Testimony } from "./pages/testimony/Testimony";
import { OurTeam } from "./pages/our team/OurTeam";
import Service from "./pages/service/Service";
import Home from "./pages/home/Home";
import { ContactSection } from "./pages/contact/Contact";
import { Dashboard } from "./components/dashboard/index/Dashboard";
import { Login } from "./pages/login/Login";
// Dashboard routes
import UserDashboard from "./components/dashboard/index/UserDashboard";
import { AdminReportGenerator } from "./components/dashboard/components/report/AdminReportGenerator";
import { BookingPannel } from "./components/dashboard/components/pannel/BookingPannel";
import { MessagePannel } from "./components/dashboard/components/pannel/MessagePannel";
import { UserPannel } from "./components/dashboard/components/pannel/UserPannel";
import { Calendar } from "./components/dashboard/components/calender/Calender";
import { Profile } from "./components/dashboard/components/profile/Profile";
import { SettingsPannel } from "./components/dashboard/components/settings/Settings";
import { GraphicalData } from "./components/dashboard/components/charts/DataGraphs";
import { UserViewMe } from "./components/dashboard/userDashComponent/user/UserViewMe";
import { UserBooking } from "./components/dashboard/userDashComponent/bookings/UserBookingsView";
import { UserMessageView } from "./components/dashboard/userDashComponent/messages/UserMessageView";
import NotFound from "./pages/not found/NotFound";
import Layout from "./pages/layout/Layout";
import ErrorBoundary from "./pages/errorElement/ErrorElement";
import user from "./assets/images/logo/276-2763872_hospitality-hotel-icon.png";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

// Add these keyframe animations to your App.css
const style = document.createElement("style");
style.textContent = `
  @keyframes progress {
    0% { width: 0%; }
    50% { width: 70%; }
    100% { width: 100%; }
  }

  @keyframes shimmer {
    100% { transform: translateX(100%); }
  }
`;
document.head.appendChild(style);

// Route Loading Component with different animations
const RouteLoadingMotion = ({ type = "spinner" }) => {
  const motions = {
    spinner: (
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    ),
    pulse: (
      <div className="flex flex-col items-center">
        <div className="animate-pulse">
          <div className="h-16 w-16 bg-blue-500 rounded-full"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    ),
    bounce: (
      <div className="flex flex-col items-center">
        <div className="animate-bounce">
          <div className="h-16 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    ),
    wave: (
      <div className="flex flex-col items-center">
        <div className="flex space-x-2">
          <div className="h-4 w-4 bg-blue-500 rounded-full animate-[bounce_1s_infinite]"></div>
          <div className="h-4 w-4 bg-blue-500 rounded-full animate-[bounce_1s_infinite_0.2s]"></div>
          <div className="h-4 w-4 bg-blue-500 rounded-full animate-[bounce_1s_infinite_0.4s]"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    ),
    progress: (
      <div className="flex flex-col items-center w-64">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-blue-600 h-2.5 rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
        </div>
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      </div>
    ),
    shimmer: (
      <div className="flex flex-col items-center">
        <div className="relative overflow-hidden rounded-full h-16 w-16 bg-gray-200">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    ),
    rotate: (
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    ),
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      {motions[type] || motions.spinner}
    </div>
  );
};

// Create Auth Context
const AuthContext = createContext();

// FIXED: Removed useNavigate from AuthProvider - now it's a pure context provider
export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Removed useNavigate from here

  // Load user data from storage on mount
  useEffect(() => {
    const token =
      Cookies.get("authToken") || localStorage.getItem("authToken");
    const email =
      Cookies.get("userEmail") || localStorage.getItem("userEmail");
    const role =
      Cookies.get("userRole") || localStorage.getItem("userRole");

    if (token && email) {
      setUserEmail(email);
      setUserRole(role || "user");
    }

    setIsLoading(false);
  }, []);

  // LOGIN - Now accepts navigate as parameter
  const login = (email, token, role = "user", status = "active", navigate) => {
    // Save to state
    setUserEmail(email);
    setUserRole(role);

    // Save to cookies (6 hours)
    Cookies.set("authToken", token, { expires: 0.25 });
    Cookies.set("userEmail", email, { expires: 0.25 });
    Cookies.set("userRole", role, { expires: 0.25 });
    Cookies.set("userStatus", status, { expires: 0.25 });

    // Also save to localStorage (backup)
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userRole", role);

    console.log("Saved auth data:", { email, role, status });

    // Redirect - use the navigate passed in
    if (role === "admin" || status === "admin") {
      navigate("/Dash-32793");
    } else {
      navigate("/U-23-Dash-32793");
    }
  };

  // LOGOUT - Now accepts navigate as parameter
  const logout = async (navigate) => {
    try {
      const token =
        Cookies.get("authToken") || localStorage.getItem("authToken");

      await axios.post(
        "https://hotel-nodejs-oa32.onrender.com/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      toast.success("Logout successful");
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      toast.warning("Logout failed");
    } finally {
      // Clear state
      setUserEmail(null);
      setUserRole(null);

      // Clear cookies
      Cookies.remove("authToken");
      Cookies.remove("userEmail");
      Cookies.remove("userRole");
      Cookies.remove("userStatus");

      // Clear localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userRole");

      // Use the navigate passed in
      navigate("/");
    }
  };

  if (isLoading) {
    return <RouteLoadingMotion type="rotate" />;
  }

  return (
    <AuthContext.Provider
      value={{
        userEmail,
        userRole,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}

// PRIVATE ROUTE - Fixed to useNavigate from within Router context
export const PrivateRoute = ({ children, requiredRole = null }) => {
  const { userEmail, userRole } = useAuth();
  const location = useLocation();
  const navigate = useNavigate(); // Now this is safe because PrivateRoute is inside Router
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <RouteLoadingMotion type="wave" />;
  }

  const token =
    Cookies.get("authToken") || localStorage.getItem("authToken");

  // Not authenticated
  if (!token || !userEmail) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Role restriction
  if (requiredRole && userRole !== requiredRole) {
    if (userRole === "admin") {
      return <Navigate to="/Dash-32793" replace />;
    }
    return <Navigate to="/U-23-Dash-32793" replace />;
  }

  return children;
};

// Route Loader Component
const RouteLoader = ({ children, loadingType = "spinner" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (prevLocation && prevLocation !== location.pathname) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600);

      return () => clearTimeout(timer);
    }

    setPrevLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setPrevLocation(location.pathname);
  }, []);

  return (
    <>
      {isLoading && <RouteLoadingMotion type={loadingType} />}
      {children}
    </>
  );
};

// FIXED: Created a wrapper component that provides navigate to auth functions
function AppContent() {
  const navigate = useNavigate();
  const { login, logout } = useAuth();

  // You can expose these to children via context or props if needed
  // For now, we'll just return the routes

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <RouteLoader loadingType="spinner">
              <Home />
            </RouteLoader>
          }
        />
        <Route
          path="/A-7483-783/34"
          element={
            <RouteLoader loadingType="pulse">
              <About />
            </RouteLoader>
          }
        />
        <Route
          path="/B-7839-283/34"
          element={
            <RouteLoader loadingType="bounce">
              <Booking />
            </RouteLoader>
          }
        />
        <Route
          path="/S-6832-342/34"
          element={
            <RouteLoader loadingType="wave">
              <Service />
            </RouteLoader>
          }
        />
        <Route
          path="/R-8763-327/34"
          element={
            <RouteLoader loadingType="rotate">
              <RoomsServices />
            </RouteLoader>
          }
        />
        <Route
          path="/O-2973-342/34"
          element={
            <RouteLoader loadingType="shimmer">
              <OurTeam />
            </RouteLoader>
          }
        />
        <Route
          path="/T-8732-452/34"
          element={
            <RouteLoader loadingType="progress">
              <Testimony />
            </RouteLoader>
          }
        />
        <Route
          path="/C-3872-2344/34"
          element={
            <RouteLoader loadingType="spinner">
              <ContactSection />
            </RouteLoader>
          }
        />
        <Route
          path="/L-6382-8279/34"
          element={
            <RouteLoader loadingType="wave">
              <Login />
            </RouteLoader>
          }
        />
      </Route>

      {/* Admin Dashboard Routes - Protected */}
      <Route
        path="/Dash-32793"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="rotate">
              <Dashboard />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/AB-7832-342"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="bounce">
              <BookingPannel />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/MS-3562-922"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="wave">
              <MessagePannel />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/UV-2390-389"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="shimmer">
              <UserPannel />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/ARG-3832-382"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="rotate">
              <AdminReportGenerator />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/C-6784-873"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="progress">
              <Calendar />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/PF-5638-893"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="pulse">
              <Profile />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/SG-6788-327"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="spinner">
              <SettingsPannel />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/GD-2761-823"
        element={
          <PrivateRoute requiredRole="admin">
            <RouteLoader loadingType="bounce">
              <GraphicalData />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      {/* User Dashboard Routes - Protected */}
      <Route
        path="/U-23-Dash-32793"
        element={
          <PrivateRoute requiredRole="user">
            <RouteLoader loadingType="pulse">
              <UserDashboard />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/UVM-7289-2782"
        element={
          <PrivateRoute requiredRole="user">
            <RouteLoader loadingType="wave">
              <UserViewMe />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/UBV-7929-2092"
        element={
          <PrivateRoute requiredRole="user">
            <RouteLoader loadingType="shimmer">
              <UserBooking />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      <Route
        path="/UMV-7988-0023"
        element={
          <PrivateRoute requiredRole="user">
            <RouteLoader loadingType="rotate">
              <UserMessageView />
            </RouteLoader>
          </PrivateRoute>
        }
      />

      {/* 404 Route */}
      <Route
        path="*"
        element={<NotFound />}
        errorElement={<ErrorBoundary />}
      />
    </Routes>
  );
}

// FIXED: Main App component with correct hierarchy
export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <div className="animate-pulse">
            <img
              className="h-20 w-20 rounded-full bg-blue-100 mb-4"
              src={user}
              alt=""
            />
          </div>
          <div className="flex space-x-2 animate-bounce">
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
            <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl font-semibold text-gray-800 animate-pulse">
            Welcome to Luxury Hotel
          </p>
        </div>
      </div>
    );
  }

  // FIXED: Proper nesting - BrowserRouter at the top, then AuthProvider, then AppContent
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}