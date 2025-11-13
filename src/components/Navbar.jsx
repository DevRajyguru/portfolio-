import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-400">
          Dev Rajyguru
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
            About
          </Link>
          <Link to="/skills" className="text-gray-300 hover:text-teal-400 transition-colors">
            Skills
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-teal-400 transition-colors">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">
            Contact
          </Link>

          {/* NEW ➜ Resume Link */}
          <Link to="/resume" className="text-gray-300 hover:text-teal-400 transition-colors">
            Resume
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-teal-400 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-900 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link to="/" onClick={closeMenu} className="text-gray-300 hover:text-teal-400">
            Home
          </Link>
          <Link to="/about" onClick={closeMenu} className="text-gray-300 hover:text-teal-400">
            About
          </Link>
          <Link to="/skills" onClick={closeMenu} className="text-gray-300 hover:text-teal-400">
            Skills
          </Link>
          <Link to="/projects" onClick={closeMenu} className="text-gray-300 hover:text-teal-400">
            Projects
          </Link>
          <Link to="/contact" onClick={closeMenu} className="text-gray-300 hover:text-teal-400">
            Contact
          </Link>

          {/* NEW ➜ Resume Link */}
          <Link to="/resume" onClick={closeMenu} className="text-gray-300 hover:text-teal-400">
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
