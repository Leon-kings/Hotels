import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const showNotification = () => {
      toast.error('Page not found! Redirecting...', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    };

    if (window.history.length <= 1) {
      showNotification();
      
      const timer = setTimeout(() => {
        navigate('/', { replace: true });
        toast.success('Welcome back to the homepage!', {
          position: "top-center",
          autoClose: 3000,
        });
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      showNotification();
      const timer = setTimeout(() => {
        navigate(-1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [navigate]);

  if (window.history.length > 1) {
    return null;
  }

  return (
    <div className="not-found bg-amber-300 text-white p-8 text-center">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2">We couldn't find the page you're looking for.</p>
      <p className="mt-2">Redirecting to homepage in 5 seconds...</p>
    </div>
  );
}