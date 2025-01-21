"use client"
import { CartProvider } from '../context/CartContext';
import Footer from './Footer';
import ResponsiveAppBar from './ResponsiveAppBar';

const AppProviders = ({ children }) => {
  return (
    <CartProvider>
      <ResponsiveAppBar />
      <div className="mt-40 px-4 dark:bg-gray-900 bg-white"> {/* Ensures the background is dark in dark mode and light in light mode */}
        {children}
      </div>
      <Footer />
    </CartProvider>
  );
};

export default AppProviders;
