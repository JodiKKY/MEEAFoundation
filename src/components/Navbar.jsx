import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/meeafavicon.svg"; // ensure the path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-20 h-14" />
          <span className="font-semibold text-lg text-pink-400">
            MEEAFOUNDATION
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/about"
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Contact
          </Link>
          <Link
            to="/donate"
            className="bg-pink-300 text-white px-4 py-2 rounded-full hover:bg-pink-400 transition duration-200"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link
            to="/about"
            className="block text-gray-700 hover:text-gray-900"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-gray-900"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/donate"
            className="block bg-pink-300 text-white px-4 py-2 rounded-full text-center hover:bg-pink-400 transition duration-200"
            onClick={toggleMenu}
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
