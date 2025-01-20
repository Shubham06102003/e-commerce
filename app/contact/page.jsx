"use client"

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen p-10 bg-gray-50 mt-[-99px]">
      <h1 className="text-black text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="space-y-16 max-w-4xl mx-auto">
        
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">We'd Love to Hear From You!</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you have any questions, feedback, or need assistance, please don't hesitate to reach out to us. You can get in touch via the following methods:
          </p>
        </section>
        
        {/* Contact Information */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Mail className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
            <p className="text-gray-600 text-lg">
              For any inquiries, you can email us at <br />
              <a href="mailto:support@ecommerce.com" className="text-blue-500 hover:text-blue-700">
                support@ecommerce.com
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <Phone className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
            <p className="text-gray-600 text-lg">
              Speak to a representative directly at <br />
              <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">
                +1 234 567 890
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <MapPin className="text-blue-500 mb-4" size={40} />
            <h3 className="text-xl font-bold text-gray-800">Visit Us</h3>
            <p className="text-gray-600 text-lg">
              Come and see us at our physical location:
              <br />
              JSPM RSCOE, Tathawade, Pimpri Chinchwad, Pune
            </p>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Send Us a Message</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Fill out the form below, and our team will get back to you as soon as possible.
          </p>
          
          <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-lg font-semibold">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 mt-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 text-lg font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 mt-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
        
        {/* Social Media Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-700">Follow Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Stay connected with us for updates, offers, and news. Follow us on our social media platforms:
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="https://facebook.com" target="_blank">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full">
                Facebook
              </button>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full">
                Instagram
              </button>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <button className="bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded-full">
                Twitter
              </button>
            </Link>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default ContactUs;
