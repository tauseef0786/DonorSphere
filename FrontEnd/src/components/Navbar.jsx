import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">

      
          <div>
            <Link to="/" className="text-green-600 text-2xl font-bold">
              DonorSphere
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-500">Home</Link>
            <Link to="/campaigns" className="text-gray-700 hover:text-green-500">Campaigns</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-500">Contact</Link>
          </div>

          {/* Auth Options */}
          <div className="hidden md:flex items-center space-x-4">
            {token ? (
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Login
                </Link>
                <Link to="/signup" className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/*Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 text-2xl focus:outline-none">
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/campaigns" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Campaigns</Link>
          <Link to="/about" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">About</Link>
          <Link to="/contact" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Contact</Link>

          {token ? (
            <button onClick={handleLogout} className="block w-full text-left px-6 py-3 text-red-500 hover:bg-gray-100">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="block px-6 py-3 text-green-500 hover:bg-gray-100">Login</Link>
              <Link to="/signup" className="block px-6 py-3 text-green-500 hover:bg-gray-100">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
