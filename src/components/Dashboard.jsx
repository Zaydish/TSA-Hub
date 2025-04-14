// Dashboard.jsx
import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome, Alex</h1>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Calendar */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
            <p className="text-sm text-gray-500 mb-2">April 2024</p>
            {/* Calendar layout here */}
          </div>

          {/* Resources */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Resources</h2>
            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li>Competition Guide</li>
              <li>Template Documents</li>
              <li>Previous Projects</li>
            </ul>
          </div>

          {/* Announcements */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Announcements</h2>
            <p className="text-sm text-gray-700">
              <span className="font-medium text-blue-600">April 1, 2024</span><br />
              Volunteers Needed for Workshop
            </p>
          </div>
        </div>

        {/* Events with Sign-Up buttons */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Events</h2>
          {/* Event list with buttons */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
