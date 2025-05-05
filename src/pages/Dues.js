import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dues = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      {/* Page Title */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">TSA Dues</h1>
        <p className="text-gray-600 mt-2 text-lg">View and pay your event and club dues here.</p>
      </div>

      {/* Dues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* SLC Dues */}
        <div className="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">SLC Dues</h2>
          <p className="text-gray-700 text-lg mb-6">Amount: <strong>$250</strong></p>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition">
              Pay Now
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* FLC Dues */}
        <div className="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">FLC Dues</h2>
          <p className="text-gray-700 text-lg mb-6">Amount: <strong>$300</strong></p>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition">
              Pay Now
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Club Dues */}
        <div className="bg-white p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Club Dues</h2>
          <p className="text-gray-700 text-lg mb-6">Amount: <strong>$50</strong></p>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dues;