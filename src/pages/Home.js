import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Home = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex-1 p-8 bg-gray-100">
      {/* Header */}
      <header className="mb-8 flex items-center">
        <h1 className="text-4xl font-bold text-black mr-4">Welcome, Jace!</h1>
      </header>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-96">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Events</h2>
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="react-calendar rounded-lg"
              firstDayOfWeek={0}
            />
          </div>
            {/* Meetings */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Meetings</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600">Officer Meetings</h4>
                  <p className="text-gray-700">March 21 - 3:00 PM</p>
                </div>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition">
                  View Details
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600">General Meetings</h4>
                  <p className="text-gray-700">February 15 - 2:10 PM</p>
                </div>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Announcements and Signed Up Events Section */}
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Announcements</h2>
            <ul className="list-disc pl-6 text-gray-700 text-lg">
              <li>Team meeting on Wednesday at 3 PM</li>
              <li>Submit final project materials by Friday</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Signed Up Events</h2>
            <ul className="text-gray-700 text-lg">
              <li>✔️ Digital Video Production</li>
              <li>✔️ Robotics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Event Sign-Up Section */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Event Sign-Up</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Software Development</h3>
              <p className="text-gray-700">April 8-10</p>
            </div>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition">
              Sign Up
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Dragster Engineering</h3>
              <p className="text-gray-700">March 5-7</p>
            </div>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
