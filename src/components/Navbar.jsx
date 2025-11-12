import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-teal-400">Dev Rajyguru</h1>

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            About
          </Link>

          {/* ✅ FIXED: now this goes to /skills, not / */}
          <Link
            to="/skills"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            Skills
          </Link>

          <Link
            to="/projects"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="text-gray-300 hover:text-teal-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
