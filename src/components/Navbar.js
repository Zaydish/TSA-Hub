// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { role, logout } = useAuth();


  return (
    <nav className="bg-blue-800 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/prhs-logo.png" alt="PRHS TSA" className="h-8 w-8" />
          <span className="text-white font-bold text-lg">PRHS TSA Hub</span>
        </Link>
        <div className="space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/eventinfo" className="hover:underline">
            Event Info
          </Link>
          <Link to="/dues" className="hover:underline">
            Dues
          </Link>
          <Link to="/awards" className="hover:underline">
            Awards
          </Link>
          <Link to="/feedback" className="hover:underline">
            Feedback
          </Link>
          <Link to="/rubrics" className="hover:underline">
            Rubrics
          </Link>
          {role === "admin" && (
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
          )}
          <a
  href="http://localhost/tsa-website/index.shtml"
  className="hover:underline text-sm md:text-base text-white"
>
  Back to Main Site
</a>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;