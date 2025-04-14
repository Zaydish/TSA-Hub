import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tsa-logo.png'; // or wherever your logo lives

const Sidebar = () => {
  return (
    <div className="bg-blue-700 text-white h-screen w-64 flex flex-col items-center py-6">
      <img src={logo} alt="TSA Logo" className="w-32 h-auto mb-4" />

      <nav className="flex flex-col space-y-6 text-lg">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/dues" className="hover:text-gray-300">Dues</Link>
        <Link to="/event-info" className="hover:text-gray-300">Event Info</Link>
        <Link to="/rubrics" className="hover:text-gray-300">Rubrics</Link>
        <Link to="/meeting-archive" className="hover:text-gray-300">Meeting Archive</Link>
        <Link to="/quick-tips" className="hover:text-gray-300">Quick Tips</Link>

        {/* Updated Linktree link with same text size as other links */}
        <a
          href="https://linktr.ee/RidgeTSA?fbclid=PAZXh0bgNhZW0CMTEAAacvlycNChG8roIhKJNQ1Y6fHc4P-GtW-HZqTJhemUxwBPmlY_YhWQ1vL_0tdg_aem_0HRpUdJ91PP8kSF_hATIZw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 text-lg mt-4"
        >
          Linktree
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
