

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
// import { Dashboard } from "./components/dashboard/admin/Dashboard";
// import { Login } from "./pages/login/Login";
// // Dashboard routes
// import UserDashboard from "./components/dashboard/index/UserDashboard";
// import { AdminReportGenerator } from "./components/dashboard/components/report/AdminReportGenerator";
// import { Calendar } from "./components/dashboard/components/calender/Calender";
// import { Profile } from "./components/dashboard/components/profile/Profile";
// import { SettingsPannel } from "./components/dashboard/components/settings/Settings";
// import { GraphicalData } from "./components/dashboard/components/charts/DataGraphs";
// import { UserViewMe } from "./components/dashboard/userDashComponent/user/UserViewMe";
// import { UserBooking } from "./components/dashboard/userDashComponent/bookings/UserBookingsView";
// import { UserMessageView } from "./components/dashboard/userDashComponent/messages/UserMessageView";
// import NotFound from "./pages/not found/NotFound";
// import { Layout } from "./components/dashboard/admin/components/sidebar/Sidebar";
// import ErrorBoundary from "./pages/errorElement/ErrorElement";
// import user from "./assets/images/logo/276-2763872_hospitality-hotel-icon.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import { UserManagement } from "./components/dashboard/admin/components/management/users/UserManagement";
// import { BookingManagements } from "./components/dashboard/admin/components/management/bookings/BookingManagement";
// import { Universal } from "./pages/layout/Layout";
// import { MessageManagements } from "./components/dashboard/admin/components/management/messages/MessageManagements";

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
//   const [userStatus, setUserStatus] = useState(null); // admin or user
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const token = Cookies.get("authToken") || localStorage.getItem("authToken");
//     const email = Cookies.get("userEmail") || localStorage.getItem("userEmail");
//     const status =
//       Cookies.get("userStatus") || localStorage.getItem("userStatus");

//     if (token && email) {
//       setUserEmail(email);
//       setUserStatus(status === "admin" ? "admin" : "user");
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }

//     setIsLoading(false);
//   }, []);

//   const login = (userData, token, navigate) => {
//     const status = userData.status === "admin" ? "admin" : "user";
//     setUserEmail(userData.email);
//     setUserStatus(status);

//     // Cookies
//     Cookies.set("authToken", token, { expires: 0.25 });
//     Cookies.set("userEmail", userData.email, { expires: 0.25 });
//     Cookies.set("userStatus", status, { expires: 0.25 });

//     // LocalStorage
//     localStorage.setItem("authToken", token);
//     localStorage.setItem("userEmail", userData.email);
//     localStorage.setItem("userStatus", status);

//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     // Redirect after login
//     navigate(status === "admin" ? "/Dash-32793" : "/U-23-Dash-32793");
//   };

//   const logout = async (navigate) => {
//     try {
//       // Get token from cookies or localStorage
//       const token =
//         Cookies.get("authToken") || localStorage.getItem("authToken");

//       if (token) {
//         // Send logout request to API
//         await axios.post(
//           "https://hotel-nodejs-oa32.onrender.com/37829/7892/logout",
//           {}, // if your API expects a body, you can send it here
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//             withCredentials: true, // if your backend uses cookies
//           },
//         );
//       }

//       toast.success("Logged out successfully");
//     } catch (error) {
//       console.error("Logout error:", error.response?.data || error.message);
//       toast.warning("Logout request failed, clearing local session anyway");
//     } finally {
//       // Clear local state and storage regardless of API response
//       setUserEmail(null);
//       setUserStatus(null);

//       Cookies.remove("authToken");
//       Cookies.remove("userEmail");
//       Cookies.remove("userStatus");

//       localStorage.removeItem("authToken");
//       localStorage.removeItem("userEmail");
//       localStorage.removeItem("userStatus");

//       delete axios.defaults.headers.common["Authorization"];

//       navigate("/"); // redirect to homepage
//     }
//   };

//   if (isLoading) return <RouteLoadingMotion type="rotate" />;

//   return (
//     <AuthContext.Provider
//       value={{ userEmail, userStatus, login, logout, isLoading }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Hook
// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used inside AuthProvider");
//   return context;
// }

// // PrivateRoute
// export const PrivateRoute = ({ children, requiredStatus }) => {
//   const { userEmail, userStatus, isLoading } = useAuth();
//   const location = useLocation();

//   if (isLoading) return <RouteLoadingMotion type="wave" />;

//   const token = Cookies.get("authToken") || localStorage.getItem("authToken");

//   // Not logged in
//   if (!token || !userEmail) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   // Status check
//   if (requiredStatus && userStatus !== requiredStatus) {
//     return (
//       <Navigate
//         to={userStatus === "admin" ? "/Dash-32793" : "/U-23-Dash-32793"}
//         replace
//       />
//     );
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

// // FIXED: Created a wrapper component that provides navigate to auth functions
// function AppContent() {
//   const navigate = useNavigate();
//   const { login, logout } = useAuth();

//   // You can expose these to children via context or props if needed
//   // For now, we'll just return the routes

//   return (
//     <Routes>
//       {/* Public routes - These will use Layout but show public header/navigation */}
//       <div className="pt-[144px] lg:pt-[168px]">
//         <Route element={<Universal />}>
//           <Route
//             index
//             path="/"
//             element={
//               <RouteLoader loadingType="spinner">
//                 <Home />
//               </RouteLoader>
//             }
//           />
//           <Route
//             path="/A-7483-783/34"
//             element={
//               <RouteLoader loadingType="pulse">
//                 <About />
//               </RouteLoader>
//             }
//           />
//           <Route
//             path="/B-7839-283/34"
//             element={
//               <RouteLoader loadingType="bounce">
//                 <Booking />
//               </RouteLoader>
//             }
//           />
//           <Route
//             path="/S-6832-342/34"
//             element={
//               <RouteLoader loadingType="wave">
//                 <Service />
//               </RouteLoader>
//             }
//           />
//           <Route
//             path="/R-8763-327/34"
//             element={
//               <RouteLoader loadingType="rotate">
//                 <RoomsServices />
//               </RouteLoader>
//             }
//           />
//           <Route
//             path="/O-2973-342/34"
//             element={
//               <RouteLoader loadingType="shimmer">
//                 <OurTeam />
//               </RouteLoader>
//             }
//           />
//           <Route
//             path="/T-8732-452/34"
//             element={
//               <RouteLoader loadingType="progress">
//                 <Testimony />
//               </RouteLoader>
//             }
//           />
//           <Route
//             path="/C-3872-2344/34"
//             element={
//               <RouteLoader loadingType="spinner">
//                 <ContactSection />
//               </RouteLoader>
//             }
//           />
//           <Route
//             path="/L-6382-8279/34"
//             element={
//               <RouteLoader loadingType="wave">
//                 <Login />
//               </RouteLoader>
//             }
//           />
//         </Route>
//       </div>
//       {/* Admin Dashboard Routes - Protected with Layout */}
//       <Route
//         path="/Dash-32793"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="rotate">
//                 <Dashboard />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/AB-7832-342"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="bounce">
//                 <BookingManagements />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/MS-3562-922"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="wave">
//                 <MessageManagements />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/UV-2390-389"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="shimmer">
//                 <UserManagement />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/ARG-3832-382"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="rotate">
//                 <AdminReportGenerator />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/C-6784-873"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="progress">
//                 <Calendar />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/PF-5638-893"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="pulse">
//                 <Profile />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/SG-6788-327"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="spinner">
//                 <SettingsPannel />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/GD-2761-823"
//         element={
//           <PrivateRoute requiredStatus="admin">
//             <Layout>
//               <RouteLoader loadingType="bounce">
//                 <GraphicalData />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       {/* User Dashboard Routes - Protected with Layout */}
//       <Route
//         path="/U-23-Dash-32793"
//         element={
//           <PrivateRoute requiredStatus="user">
//             <Layout>
//               <RouteLoader loadingType="pulse">
//                 <UserDashboard />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/UVM-7289-2782"
//         element={
//           <PrivateRoute requiredStatus="user">
//             <Layout>
//               <RouteLoader loadingType="wave">
//                 <UserViewMe />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/UBV-7929-2092"
//         element={
//           <PrivateRoute requiredStatus="user">
//             <Layout>
//               <RouteLoader loadingType="shimmer">
//                 <UserBooking />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/UMV-7988-0023"
//         element={
//           <PrivateRoute requiredStatus="user">
//             <Layout>
//               <RouteLoader loadingType="rotate">
//                 <UserMessageView />
//               </RouteLoader>
//             </Layout>
//           </PrivateRoute>
//         }
//       />

//       {/* 404 Route */}
//       <Route path="*" element={<NotFound />} errorElement={<ErrorBoundary />} />
//     </Routes>
//   );
// }

// // FIXED: Main App component with correct hierarchy
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

//   // FIXED: Proper nesting - BrowserRouter at the top, then AuthProvider, then AppContent
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <AppContent />
//       </AuthProvider>
//     </BrowserRouter>
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
import { Dashboard } from "./components/dashboard/admin/Dashboard";
import { Login } from "./pages/login/Login";
// Dashboard routes
import UserDashboard from "./components/dashboard/index/UserDashboard";
import { AdminReportGenerator } from "./components/dashboard/components/report/AdminReportGenerator";
import { Calendar } from "./components/dashboard/components/calender/Calender";
import { Profile } from "./components/dashboard/components/profile/Profile";
import { SettingsPannel } from "./components/dashboard/components/settings/Settings";
import { GraphicalData } from "./components/dashboard/components/charts/DataGraphs";
import { UserViewMe } from "./components/dashboard/userDashComponent/user/UserViewMe";
import { UserBooking } from "./components/dashboard/userDashComponent/bookings/UserBookingsView";
import { UserMessageView } from "./components/dashboard/userDashComponent/messages/UserMessageView";
import NotFound from "./pages/not found/NotFound";
import { Layout } from "./components/dashboard/admin/components/sidebar/Sidebar";
import ErrorBoundary from "./pages/errorElement/ErrorElement";
import user from "./assets/images/logo/276-2763872_hospitality-hotel-icon.png";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { UserManagement } from "./components/dashboard/admin/components/management/users/UserManagement";
import { BookingManagements } from "./components/dashboard/admin/components/management/bookings/BookingManagement";
import { Universal } from "./pages/layout/Layout";
import { MessageManagements } from "./components/dashboard/admin/components/management/messages/MessageManagements";

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

export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [userStatus, setUserStatus] = useState(null); // admin or user
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("authToken") || localStorage.getItem("authToken");
    const email = Cookies.get("userEmail") || localStorage.getItem("userEmail");
    const status =
      Cookies.get("userStatus") || localStorage.getItem("userStatus");

    if (token && email) {
      setUserEmail(email);
      setUserStatus(status === "admin" ? "admin" : "user");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    setIsLoading(false);
  }, []);

  const login = (userData, token, navigate) => {
    const status = userData.status === "admin" ? "admin" : "user";
    setUserEmail(userData.email);
    setUserStatus(status);

    // Cookies
    Cookies.set("authToken", token, { expires: 0.25 });
    Cookies.set("userEmail", userData.email, { expires: 0.25 });
    Cookies.set("userStatus", status, { expires: 0.25 });

    // LocalStorage
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", userData.email);
    localStorage.setItem("userStatus", status);

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Redirect after login
    navigate(status === "admin" ? "/Dash-32793" : "/U-23-Dash-32793");
  };

  const logout = async (navigate) => {
    try {
      // Get token from cookies or localStorage
      const token =
        Cookies.get("authToken") || localStorage.getItem("authToken");

      if (token) {
        // Send logout request to API
        await axios.post(
          "https://hotel-nodejs-oa32.onrender.com/37829/7892/logout",
          {}, // if your API expects a body, you can send it here
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true, // if your backend uses cookies
          },
        );
      }

      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      toast.warning("Logout request failed, clearing local session anyway");
    } finally {
      // Clear local state and storage regardless of API response
      setUserEmail(null);
      setUserStatus(null);

      Cookies.remove("authToken");
      Cookies.remove("userEmail");
      Cookies.remove("userStatus");

      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userStatus");

      delete axios.defaults.headers.common["Authorization"];

      navigate("/"); // redirect to homepage
    }
  };

  if (isLoading) return <RouteLoadingMotion type="rotate" />;

  return (
    <AuthContext.Provider
      value={{ userEmail, userStatus, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}

// PrivateRoute
export const PrivateRoute = ({ children, requiredStatus }) => {
  const { userEmail, userStatus, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <RouteLoadingMotion type="wave" />;

  const token = Cookies.get("authToken") || localStorage.getItem("authToken");

  // Not logged in
  if (!token || !userEmail) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Status check
  if (requiredStatus && userStatus !== requiredStatus) {
    return (
      <Navigate
        to={userStatus === "admin" ? "/Dash-32793" : "/U-23-Dash-32793"}
        replace
      />
    );
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

  return (
    <Routes>
      {/* Public routes with Layout (includes navbar) */}
      <Route element={<Universal />}>
        <Route
          index
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

      {/* Admin Dashboard Routes - Protected with Layout (includes sidebar) */}
      <Route
        path="/Dash-32793"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="rotate">
                <Dashboard />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/AB-7832-342"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="bounce">
                <BookingManagements />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/MS-3562-922"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="wave">
                <MessageManagements />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/UV-2390-389"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="shimmer">
                <UserManagement />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/ARG-3832-382"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="rotate">
                <AdminReportGenerator />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/C-6784-873"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="progress">
                <Calendar />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/PF-5638-893"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="pulse">
                <Profile />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/SG-6788-327"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="spinner">
                <SettingsPannel />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/GD-2761-823"
        element={
          <PrivateRoute requiredStatus="admin">
            <Layout>
              <RouteLoader loadingType="bounce">
                <GraphicalData />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      {/* User Dashboard Routes - Protected with Layout (includes sidebar) */}
      <Route
        path="/U-23-Dash-32793"
        element={
          <PrivateRoute requiredStatus="user">
            <Layout>
              <RouteLoader loadingType="pulse">
                <UserDashboard />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/UVM-7289-2782"
        element={
          <PrivateRoute requiredStatus="user">
            <Layout>
              <RouteLoader loadingType="wave">
                <UserViewMe />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/UBV-7929-2092"
        element={
          <PrivateRoute requiredStatus="user">
            <Layout>
              <RouteLoader loadingType="shimmer">
                <UserBooking />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      <Route
        path="/UMV-7988-0023"
        element={
          <PrivateRoute requiredStatus="user">
            <Layout>
              <RouteLoader loadingType="rotate">
                <UserMessageView />
              </RouteLoader>
            </Layout>
          </PrivateRoute>
        }
      />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
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