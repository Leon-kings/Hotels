/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
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

  // Initialize axios headers and check auth status on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      checkAuthStatus();
    }
  }, []);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return;

    try {
      const response = await axios.get(
        "https://hotel-nodejs-oa32.onrender.com/37829/7892/verify-token",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // If token is valid and refreshed, update it
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      }

      // Redirect based on user status
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.status === "admin") {
        navigate("/Dash-32793");
      } else if (user?.status === "user") {
        navigate("/U-23-Dash-32793");
      }
    } catch (error) {
      // If token verification fails, clear auth data
      console.log(error);
      handleLogout();
    }
  };

  const handleAuthSuccess = (token, user) => {
    // Store authentication data
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));

    // Set axios default headers
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Redirect based on user status
    if (user.status === "admin") {
      navigate("/Dash-32793");
    } else if (user.status === "user") {
      navigate("/U-23-Dash-32793");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/L-6382-8279/34");
  };

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

        handleAuthSuccess(response.data.token, response.data.user);
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
          handleAuthSuccess(response.data.token, response.data.user);
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
    <>
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

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required={!isLogin}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                )}
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
    </>
  );
};
