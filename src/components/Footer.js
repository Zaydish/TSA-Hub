import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center text-sm py-4 mt-10 text-gray-700">
      PRHS TSA &copy; {new Date().getFullYear()} | Built for Peachtree Ridge TSA
    </footer>
  );
};

export default Footer;