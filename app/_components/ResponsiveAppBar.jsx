import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import ThemeController from "./ThemeController";

// Define pages with their routes
const pages = [
  { name: "Products", link: "/" },
  { name: "Categories", link: "/category" },
  { name: "Help", link: "/help" },
  { name: "Contact us", link: "/contact" },
];

const ResponsiveAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { cartCount } = useCart();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to category page dynamically
      router.push(`/categories/${searchQuery.trim().toLowerCase()}/products`);
      setSearchQuery("");
    }
  };

  return (
    <div className="bg-gray-800 fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto flex items-center justify-between p-4 bg-gray-800 text-white">
        {/* Logo */}
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          E-Commerce
        </div>

        {/* Search Bar */}
        <form
          className="flex items-center space-x-2 bg-gray-700 p-2 rounded-md md:w-1/3"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search category..."
            className="flex-grow p-2 bg-gray-600 text-white rounded-md outline-none placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </form>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Links for Larger Screens */}
        <div className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <Link
              key={page.name}
              href={page.link}
              className="text-white hover:text-gray-400 transition"
            >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Shopping Cart and Theme Controller */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => router.push("/cart")}
            aria-label="Shopping Cart"
          >
            <span className="relative">
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </span>
          </div>

          {/* Theme Controller */}
          <ThemeController />
        </div>
      </nav>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="bg-gray-700 md:hidden flex flex-col space-y-2 p-4">
          {pages.map((page) => (
            <Link
              key={page.name}
              href={page.link}
              onClick={handleMenuClose}
              className="text-white hover:text-gray-400 transition"
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResponsiveAppBar;
