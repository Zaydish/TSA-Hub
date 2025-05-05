import React from "react";

const events = [
  {
    name: "Architectural Design",
    description: "Create a set of architectural drawings...",
    portfolioRequired: true,
    earlySubmission: true,
    category: "Engineering",
  },
  {
    name: "Animatronics",
    description: "Design and build an animatronic device...",
    portfolioRequired: true,
    earlySubmission: false,
    category: "Engineering",
  },
  {
    name: "Code of Conduct",
    description: "Understand and apply the TSA Code...",
    portfolioRequired: false,
    earlySubmission: false,
    category: "Leadership",
  },
  {
    name: "Digital Video Production",
    description: "Produce a short digital video...",
    portfolioRequired: true,
    earlySubmission: true,
    category: "Arts",
  },
  // ... (shortened for space — include the rest of your events here)
];

const groupedEvents = events.reduce((acc, event) => {
  acc[event.category] = acc[event.category] || [];
  acc[event.category].push(event);
  return acc;
}, {});

const EventInfo = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">TSA Event Information</h2>
      {Object.entries(groupedEvents).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((event, idx) => (
              <div key={idx} className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-blue-900">{event.name}</h4>
                <p className="text-gray-800 mt-2">{event.description}</p>
                <p className="mt-2">
                  <strong>Portfolio Required:</strong> {event.portfolioRequired ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Early Submission:</strong> {event.earlySubmission ? "Yes" : "No"}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventInfo;