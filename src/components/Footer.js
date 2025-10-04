import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Peachtree Ridge TSA — All Rights Reserved.
      </p>
      <p className="text-xs mt-1 text-blue-200">
        Built with 💻 by PRHS TSA Dev Team
      </p>
    </footer>
  );
};

export default Footer;