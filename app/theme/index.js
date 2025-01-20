'use client';
import { useEffect } from 'react';

const theme = () => {
  useEffect(() => {
    // Apply custom font to the document body
    document.body.style.fontFamily = 'var(--font-roboto)';
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Your app content goes here */}
      <h1 className="text-2xl font-semibold">Welcome to My E-Commerce Site</h1>
      {/* Other content */}
    </div>
  );
};

export default theme;
