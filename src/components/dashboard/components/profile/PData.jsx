import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cancel, Edit, Delete } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProfileData = ({ userData, onUpdate, onCreate, onDelete }) => {
  const [formData, setFormData] = useState({
    email: "",
    avatar: "",
    ...userData,
  });
  const [isEditing, setIsEditing] = useState(!userData);
  const [isLoading, setIsLoading] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState("");

  useEffect(() => {
    if (userData) {
      setFormData((prev) => ({ ...prev, ...userData }));
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);

      // Upload to backend
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setFormData((prev) => ({
        ...prev,
        avatar: response.data.url,
      }));
      toast.success("Profile picture updated!");
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error(error.response?.data?.message || "Failed to upload image");
      setAvatarPreview("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (userData) {
        // Update existing profile
        const response = await axios.put(
          `/api/users/${userData._id}`,
          { email: formData.email, avatar: formData.avatar },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        toast.success("Profile updated successfully!");
        onUpdate(response.data);
      } else {
        // Create new profile
        const response = await axios.post('/api/users', formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        toast.success("Profile created successfully!");
        onCreate(response.data);
      }
      
      setIsEditing(false);
      setAvatarPreview("");
    } catch (error) {
      console.error("Operation failed:", error);
      toast.error(error.response?.data?.message || "Operation failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this profile?")) return;

    try {
      setIsLoading(true);
      await axios.delete(`/api/users/${userData._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      toast.success("Profile deleted successfully!");
      onDelete(userData._id);
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error(error.response?.data?.message || "Delete failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-bold text-gray-800">
          {userData ? "Profile Information" : "Create New Profile"}
        </p>
        {userData && !isEditing && (
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
              title="Edit"
            >
              <Edit className="size-6" />
            </button>
            <button
              onClick={handleDelete}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
              title="Delete"
            >
              <Delete className="size-6" />
            </button>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src={
                  avatarPreview ||
                  formData.avatar ||
                  "https://via.placeholder.com/150"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
              />
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                    disabled={isLoading}
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
                Click to change photo (Max 2MB)
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border text-black bg-white rounded-md"
                  required
                  disabled={isLoading}
                />
              ) : (
                <p className="px-3 py-2 bg-gray-50 rounded-md">
                  {formData.email || "Not set"}
                </p>
              )}
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end space-x-3">
            {userData && (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setFormData({ ...userData });
                  setAvatarPreview("");
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                <Cancel className="text-red-500 size-6" />
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
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
                  {userData ? "Saving..." : "Creating..."}
                </>
              ) : (
                <>
                  {userData ? (
                    <>
                      <Edit className="mr-1" />
                      Save
                    </>
                  ) : (
                    "Create Profile"
                  )}
                </>
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};