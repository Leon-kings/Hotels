import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cancel, Edit } from "@mui/icons-material";

export const ProfileData = ({ userData }) => {
  const [formData, setFormData] = useState({
    email: "",
    avatar: "",
    ...userData,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [onUpdate] = useState();
  // Initialize with user data
  useEffect(() => {
    if (userData) {
      setFormData((prev) => ({ ...prev, ...userData }));
    }
  }, [userData]);

  const handleChange = (e) => {
    const { email, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [email]: value,
    }));
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (e.g., 2MB max)
    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("Image size should be less than 2MB");
      return;
    }

    // Check file type
    if (!file.type.match("image.*")) {
      setErrorMessage("Please select an image file");
      return;
    }

    try {
      // For immediate preview while uploading
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          avatarPreview: reader.result, // Temporary preview
        }));
      };
      reader.readAsDataURL(file);

      // Upload to API if you want to handle immediately
      const formData = new FormData();
      formData.append("avatar", file);

      const response = await axios.post("/api/upload-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setFormData((prev) => ({
        ...prev,
        avatar: response.data.url, // URL from API response
      }));
      setSuccessMessage("Profile picture updated successfully!");
    } catch (error) {
      console.error("Avatar upload failed:", error);
      setErrorMessage("Failed to upload profile picture");
      setFormData((prev) => ({
        ...prev,
        avatarPreview: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.put("/api/profile", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setSuccessMessage("Profile updated successfully!");
      setIsEditing(false);

      // Update local user data with the response
      setFormData(response.data.updatedUser);

      // Optional: Trigger parent component update
      if (typeof onUpdate === "function") {
        onUpdate(response.data.updatedUser);
      }
    } catch (error) {
      console.error("Profile update failed:", error);

      let errorMsg = "Failed to update profile";
      if (error.response) {
        // Handle different HTTP status codes
        if (error.response.status === 401) {
          errorMsg = "Please login again";
        } else if (error.response.status === 400) {
          errorMsg = error.response.data.message || "Invalid data provided";
        } else if (error.response.data && error.response.data.errors) {
          // Handle validation errors from API
          errorMsg = Object.values(error.response.data.errors).join(", ");
        }
      }

      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl font-bold text-gray-800">
          Profile Information
        </h4>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Edit className="size-6 text-green-500" />
          </button>
        )}
      </div>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src={
                  formData.avatarPreview ||
                  formData.avatar ||
                  "https://thumbs.dreamstime.com/b/ld-logo-initial-letter-monogram-circle-slice-rounded-design-template-isolated-black-background-222685591.jpg"
                }
                alt=""
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
              />
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </label>
              )}
            </div>
            {isEditing && (
              <p className="text-sm text-gray-500">
                Click on the icon to change photo (Max 2MB)
              </p>
            )}
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  placeholder="leon@mail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border text-black bg-white rounded-md "
                  required
                />
              ) : (
                <p className="px-3 py-2 bg-gray-50 rounded-md">
                  {formData.email}
                </p>
              )}
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setFormData({ ...userData });
                setErrorMessage("");
                setSuccessMessage("");
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              <Cancel className="text-red-500 size-6" />
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
              disabled={isLoading}
            >
              {isLoading && (
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
              )}
              <Edit className="text-blue-500 size-6" />
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
