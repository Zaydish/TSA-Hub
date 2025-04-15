import React from 'react';

const Rubrics = () => {
  const rubrics = [
    {
      title: "Manufacturing Prototype",
      file: "HS - Manufacturing Prototype.pdf",
      description: "Design and fabricate a product using CNC/CIM technologies. Includes documentation and a functional prototype.",
    },
    {
      title: "VR Simulation",
      file: "HS - VR Simulation.pdf",
      description: "Create an immersive virtual reality experience that addresses a real-world issue or topic using simulation technology.",
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Rubrics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rubrics.map((rubric, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{rubric.title}</h2>
            <p className="mb-4 text-gray-600">{rubric.description}</p>
            <a
              href={`/rubrics/${rubric.file}`}
              download
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Download Rubric
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rubrics;