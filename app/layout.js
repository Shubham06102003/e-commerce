import { Roboto } from 'next/font/google';
import AppProviders from './_components/AppProviders';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// -----------------------------------------------------------------------------
// Metadata for the page
export const metadata = {
  title: {
    default: 'E-commerce Next.js App',
    template: '%s | E-commerce Next.js App',
  },
  description: 'E-commerce Next.js App',
};

// Viewport settings
export const viewport = {
  initialScale: 1,
  width: 'device-width',
};

// ----------------------------------------------------------------------------- 

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-white text-black">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
