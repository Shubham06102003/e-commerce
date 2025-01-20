"use client"
import { CartProvider } from '../context/CartContext';
import Footer from './Footer';
import ResponsiveAppBar from './ResponsiveAppBar';

const AppProviders = ({ children }) => {
  return (
    <CartProvider>
      <ResponsiveAppBar />
      <div className="mt-40 px-4"> {/* Using Tailwind CSS for margin and padding */}
        {children}
      </div>
      <Footer/>
    </CartProvider>
  );
};

export default AppProviders;
