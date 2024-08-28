import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 z-10 fade-in">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center style={{ backgroundColor: 'rgba(0, 0, 139, 0.8)', boxShadow: '0 8px 15px -8px rgba(0, 0, 0, 0.4)' }}">
        <img src="logo.png" width="60" height="60" alt="Logo"></img>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#hero" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#winners" className="hover:text-blue-400">
              Past Winners
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;