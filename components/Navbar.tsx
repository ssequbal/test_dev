'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu toggle

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-10 z-10 fade-in">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center style={{ backgroundColor: 'rgba(0, 0, 139, 0.8)', boxShadow: '0 8px 15px -8px rgba(0, 0, 0, 1)' }}">
        <img src="logo.png" width="60" height="60" alt="Logo" />

        {/* Menu icon for mobile view */}
        <div className="block ">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
          </button>
        </div>

        {/* Navbar items */}
        <ul className={`fixed inset-y-0 left-0 bg-black bg-opacity-80 z-20 flex flex-col items-start space-y-6 py-6 px-4 w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <br>
          </br>
          <br>
          </br>
          <li>
            <a href="#hero" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#winners" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>
            Former Winners
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;