// src/components/NotFound.jsx
import { useNavigate, useLocation } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
    <div className="flex-grow flex items-center justify-center bg-white text-black">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            {location.pathname}
          </code>{" "}
          doesn't exist.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-white text-indigo-600 py-2 px-4 rounded border border-indigo-600 hover:bg-indigo-50"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
