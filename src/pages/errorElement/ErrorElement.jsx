// import React from 'react';
// import { useRouteError } from 'react-router-dom';
// import NotFound from '../not found/NotFound';

// export default function ErrorBoundary() {
//   const error = useRouteError();
  
//   if (error.status === 404) {
//     return <NotFound />;
//   }

//   return (
//     <div className='bg-white text-black'>
//       <h1>Something went wrong</h1>
//       <p>{error.message}</p>
//     </div>
//   );
// }











import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import NotFound from '../not found/NotFound';

export default function ErrorBoundary() {
  const error = useRouteError();
  
  // Check if it's a route error response (like 404)
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Error {error.status}
          </h1>
          <p className="text-gray-600 mb-4">{error.statusText || error.data}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Unexpected Error
          </h1>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  // Fallback for unknown error types
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
        <div className="text-6xl mb-4">❗</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-4">An unexpected error occurred</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}