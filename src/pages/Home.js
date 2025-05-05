import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaClipboardList,
  FaRocket,
  FaUsersCog,
} from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-10 relative">
      {/* Hero Section */}
      <div
        className="text-center mb-14 bg-white p-8 rounded-xl shadow border"
        data-aos="fade-down"
      >
        <h1 className="text-5xl font-extrabold text-blue-900">Welcome to PRHS TSA Hub</h1>
        <p className="text-lg text-gray-700 mt-3">
          Stay organized, sign up for events, and keep track of everything PRHS TSA.
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Announcements */}
        <div className="bg-white rounded-xl p-6 shadow-lg border" data-aos="fade-up">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-800 mb-3">
            <FaBullhorn /> Announcements
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Officer elections open this Friday</li>
            <li>SLC paperwork due by May 12</li>
            <li>Team photo shoot next Monday</li>
          </ul>
        </div>

        {/* Google Calendar Embed */}
        <div className="bg-white rounded-xl p-6 shadow-lg border" data-aos="fade-up">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-800 mb-3">
            <FaCalendarAlt /> Upcoming Events
          </h2>
          <div className="overflow-hidden rounded-md w-full h-[400px]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=826c656f8f291eb3b97a827d6d97918ad87e5c3dee90c28caf7fff6e988012d2%40group.calendar.google.com&ctz=America%2FNew_York"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              title="TSA Calendar"
            ></iframe>
          </div>
        </div>

        {/* Signed-Up Events */}
        <div className="bg-white rounded-xl p-6 shadow-lg border" data-aos="fade-up">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-800 mb-3">
            <FaClipboardList /> My Events
          </h2>
          <ul className="text-gray-700 space-y-1">
            <li>✔️ Digital Video Production</li>
            <li>✔️ Robotics</li>
            <li>✔️ Webmaster</li>
          </ul>
        </div>

        {/* Meetings */}
        <div className="bg-white rounded-xl p-6 shadow-lg border" data-aos="fade-up">
          <h2 className="text-xl font-bold flex items-center gap-2 text-blue-800 mb-3">
            <FaUsersCog /> Meetings
          </h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-md shadow-sm">
              <p className="font-semibold text-blue-700">Officer Meeting</p>
              <p className="text-sm text-gray-600">May 7 — 3:00 PM</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-md shadow-sm">
              <p className="font-semibold text-blue-700">General Meeting</p>
              <p className="text-sm text-gray-600">May 9 — 2:10 PM</p>
            </div>
          </div>
        </div>

        {/* CTA: Sign Up */}
        <div className="bg-white rounded-xl p-6 shadow-lg border flex flex-col justify-between" data-aos="fade-up">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 text-blue-800 mb-3">
              <FaRocket /> New Event Sign-Up
            </h2>
            <p className="text-gray-700 mb-4">
              Register for current TSA competitions. Don't miss your deadlines!
            </p>
          </div>
          <a
            href="/eventinfo"
            className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition text-center"
          >
            Sign Up Now
          </a>
        </div>
      </div>

      {/* Floating CTA Button */}
      <a
        href="/eventinfo"
        className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-200"
        data-aos="fade-left"
      >
        + Sign Up
      </a>
    </div>
  );
};

export default Home;