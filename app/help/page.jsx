"use client"

import { Check } from "lucide-react";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <div className="w-full min-h-screen p-10 mt-[-99px] bg-gray-100 dark:bg-gray-800">
      <h1 className="text-black dark:text-white text-4xl font-bold mb-8 text-center">How It Works</h1>
      <div className="space-y-16 max-w-4xl mx-auto">
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Step 1: Browse Products</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Explore a wide variety of products across different categories. Use our intuitive search filters to find exactly what you're looking for.
          </p>
          <Link href="/">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
              Start Shopping
            </button>
          </Link>
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Step 2: Add to Cart</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Once you find a product you love, simply add it to your cart. You can view your cart anytime to review or modify your selection.
          </p>
          <Link href="">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
              View Cart
            </button>
          </Link>
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Step 3: Secure Checkout</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            When you're ready, proceed to checkout. We offer multiple payment methods, including credit/debit cards, PayPal, and other secure options.
          </p>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Fast and easy checkout process
          </div>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Multiple payment options
          </div>
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Step 4: Shipping & Delivery</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Once your order is confirmed, it will be processed and shipped to your address. We offer fast and reliable delivery services.
          </p>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Free shipping on orders above $50
          </div>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Real-time order tracking
          </div>
        </section>
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Step 5: Return & Refund</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            If you're not satisfied with your purchase, return it within 30 days for a full refund or exchange. We make the process hassle-free.
          </p>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Easy returns process
          </div>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Full refund guarantee
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Why Shop With Us?</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            We are dedicated to providing the best shopping experience. Here's why our customers love shopping with us:
          </p>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Wide selection of quality products
          </div>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Great customer service
          </div>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Competitive prices and exclusive deals
          </div>
          <div className="flex items-center gap-2 text-green-500 dark:text-green-400">
            <Check /> Secure shopping experience
          </div>
        </section>

        {/* FAQs Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Frequently Asked Questions (FAQs)</h2>

          <div className="space-y-4">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Q: How do I track my order?</div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              You will receive an email with tracking information once your order is shipped. You can also track your order in your account.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Q: Can I modify or cancel my order after placing it?</div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Orders can be modified or canceled within 24 hours of placing them. After that, we can no longer make changes to the order.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Q: Do you offer international shipping?</div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Yes, we do offer international shipping. Shipping fees will vary depending on your location.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Q: What should I do if I receive a damaged product?</div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              If you receive a damaged product, please contact our customer service team immediately. We'll arrange for a replacement or refund.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">Q: How can I contact customer support?</div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              You can contact our customer support team through the "Contact Us" page or via email at support@ecommerce.com.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HowItWorks;
