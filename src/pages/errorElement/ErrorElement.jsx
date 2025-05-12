import React from 'react';
import { useRouteError } from 'react-router-dom';
import NotFound from '../not found/NotFound';

export default function ErrorBoundary() {
  const error = useRouteError();
  
  if (error.status === 404) {
    return <NotFound />;
  }

  return (
    <div className='bg-white text-black'>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
    </div>
  );
}