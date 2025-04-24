import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set timeout to redirect if needed
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found bg-amber-300 text-white">
      <h1>404 - Page Not Found</h1>
      <p>We couldn't find the page you're looking for.</p>
      <p>Redirecting to homepage in 5 seconds...</p>
    </div>
  );
}