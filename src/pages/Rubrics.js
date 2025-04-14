import React from "react";

const Rubrics = () => {
  return (
    <div className="flex-1 p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-black">Rubrics</h1>
      </header>

      {/* Rubrics Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Event Rubrics</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Software Development</h3>
            <ul className="list-disc pl-6">
              <li>Code quality and readability</li>
              <li>Functionality and performance</li>
              <li>User interface and experience</li>
              <li>Documentation and presentation</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Digital Video Production</h3>
            <ul className="list-disc pl-6">
              <li>Creativity and originality</li>
              <li>Storytelling and pacing</li>
              <li>Visual quality and editing</li>
              <li>Audio and sound design</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rubrics;