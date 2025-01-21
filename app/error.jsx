'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <p className="error-message">Something went wrong!</p>
      <button className="retry-button" onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
