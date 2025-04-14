import React from "react";

const Dues = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <div className="h-full flex flex-col">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-bold text-black">Dues</h1>
        </header>

        {/* Dues */}
        <div className="flex-1 grid grid-cols-1 gap-12">
          {/* SLC Dues */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">SLC Dues</h2>
            <p className="text-xl text-gray-700">Amount: $250</p>
            <div className="mt-6">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-500 transition mb-4 w-full">
                Pay Now
              </button>
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-500 transition w-full">
                Sign Up
              </button>
            </div>
          </div>

          {/* FLC Dues */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">FLC Dues</h2>
            <p className="text-xl text-gray-700">Amount: $300</p>
            <div className="mt-6">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-500 transition mb-4 w-full">
                Pay Now
              </button>
              <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-500 transition w-full">
                Sign Up
              </button>
            </div>
          </div>

          {/* Club Dues */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Club Dues</h2>
            <p className="text-xl text-gray-700">Amount: $50</p>
            <div className="mt-6">
              <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-500 transition mb-4 w-full">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dues;

