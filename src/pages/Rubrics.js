import React from "react";

const Rubrics = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-300">Competition Rubrics & Descriptions</h1>
      <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
        View official TSA rubrics and descriptions here. This Drive folder is updated annually with the latest documents.
      </p>
      <div className="w-full h-[800px] border rounded-md overflow-hidden shadow-lg">
        <iframe
          title="TSA Rubrics Google Drive"
          src="https://drive.google.com/embeddedfolderview?id=16ouRV2pQWUkAAZ6-CglK5WgviqBtq-Do#grid"
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Rubrics;