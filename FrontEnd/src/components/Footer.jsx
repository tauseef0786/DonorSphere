import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="text-gray-400 mt-2">
            We are a crowdfunding platform dedicated to supporting meaningful campaigns across various causes. Join us in making a difference!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-green-400">Home</Link></li>
            <li><Link to="/campaigns" className="text-gray-400 hover:text-green-400">Campaigns</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-green-400">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media & Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold">Connect With Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Subscribe</h3>
            <form className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none w-full"
              />
              <button type="submit" className="bg-green-500 px-4 py-2 rounded-r-lg font-semibold hover:bg-green-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} DonorSphere. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link to="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-green-400">Terms & Conditions</Link>
          <span>|</span>
          <Link to="/help" className="hover:text-green-400">Help Center</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
