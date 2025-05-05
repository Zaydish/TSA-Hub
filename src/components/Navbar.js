import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <FaTachometerAlt /> TSA Hub
        </Link>
        <div className="space-x-6 hidden md:flex text-sm">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/eventinfo" className="hover:text-gray-300">Events</Link>
          <Link to="/dues" className="hover:text-gray-300">Dues</Link>
          <Link to="/awards" className="hover:text-gray-300">Awards</Link>
          <Link to="/feedback" className="hover:text-gray-300">Feedback</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;