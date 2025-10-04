import React, { useState, useEffect } from "react";

const eventsByCategory = {
  Engineering: [
    "Architectural Design",
    "Animatronics",
    "Dragster Design",
    "Engineering Design",
    "Flight",
    "CNC Milling",
    "Hydraulic Engineering",
    "Mechanical Engineering",
    "Engineering Problem Solving",
    "Structural Design and Engineering",
  ],
  Coding: [
    "Software Development",
    "Mobile App Development",
    "TSA Website Design",
    "Webmaster",
    "Video Game Design",
    "Virtual Reality Design",
  ],
  Arts: [
    "Digital Video Production",
    "Fashion Design",
    "Music Production",
    "Graphic Design",
    "Journalism",
    "3D Visualization and Animation",
  ],
  Leadership: [
    "Code of Conduct",
    "Essay on Technology",
    "Technology Bowl",
  ],
  Robotics: [
    "VEX Robotics",
    "Robotics Challenge",
    "Drone Technology",
  ],
  Science: ["Forensic Science", "Biotechnology Design", "Life Science"],
  "Other STEM": ["Problem Solving", "Technical Sketching and Application"],
};

const SignUp = () => {
  const [signedUpEvents, setSignedUpEvents] = useState(() => {
    const stored = localStorage.getItem("myEvents");
    return stored ? JSON.parse(stored) : [];
  });

  const toggleEvent = (event) => {
    let updatedEvents;
    if (signedUpEvents.includes(event)) {
      updatedEvents = signedUpEvents.filter((e) => e !== event);
    } else {
      updatedEvents = [...signedUpEvents, event];
    }
    setSignedUpEvents(updatedEvents);
    localStorage.setItem("myEvents", JSON.stringify(updatedEvents));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800 dark:text-blue-300">
        TSA Event Sign-Up
      </h1>
      <div className="space-y-8">
        {Object.entries(eventsByCategory).map(([category, events]) => (
          <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map((event) => (
                <button
                  key={event}
                  onClick={() => toggleEvent(event)}
                  className={`border p-4 rounded-lg text-left transition-all duration-200 shadow-sm
                    ${signedUpEvents.includes(event)
                      ? "bg-blue-600 text-white border-blue-700 hover:bg-blue-500"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                >
                  {event}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignUp;