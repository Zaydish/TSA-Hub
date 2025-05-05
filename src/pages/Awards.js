import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Awards = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">TSA Awards</h1>
        <p className="text-lg text-gray-600 mt-2">Celebrating our chapter's state-level achievements</p>
      </div>

      {/* SLC 2025 */}
      <div className="bg-white p-6 rounded-xl shadow mb-8" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-3 text-blue-800">SLC 2025</h2>
        <p className="text-lg mb-4">🏅 PRHS TSA placed <strong>9th in the state</strong>!</p>
        
        <p className="font-semibold mb-2 text-blue-700">Finalists (Top 10):</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          <li>Architectural Design</li>
          <li>Audio Podcasting</li>
          <li>Biotechnology Design</li>
          <li>Chapter Team</li>
          <li>Children’s Stories</li>
          <li>CAD Engineering (Elliot)</li>
          <li>Electrical Applications (Shiloh)</li>
          <li>Engineering Design</li>
          <li>Fashion Design and Technology</li>
          <li>Photographic Technology (Sarim)</li>
          <li>Prepared Presentation (Katie)</li>
          <li>Robotics</li>
          <li>Technical Problem Solving</li>
          <li>Video Game Design</li>
        </ul>

        <p className="font-semibold mt-6 mb-2 text-green-700">🏆 Winners:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          <li><strong className="text-green-700">3rd Place</strong> – Data Science and Analytics</li>
          <li><strong className="text-green-700">2nd Place</strong> – Debating Technical Issues</li>
          <li><strong className="text-green-700">3rd Place</strong> – Electrical Applications (Aditya)</li>
          <li><strong className="text-green-700">2nd Place</strong> – Future Technology Teacher (Jennah)</li>
          <li><strong className="text-green-700">9th Place</strong> – Outstanding Chapter</li>
        </ul>
      </div>

      {/* SLC 2024 */}
      <div className="bg-white p-6 rounded-xl shadow mb-8" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-2xl font-semibold mb-3 text-blue-800">SLC 2024</h2>
        <p className="text-blue-700 text-lg">🏆 4 First Place, 3 Second Place</p>
      </div>

      {/* SLC 2022 */}
      <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-2xl font-semibold mb-3 text-blue-800">SLC 2022</h2>
        <p className="text-blue-700 text-lg">🏆 1 First Place, 1 Second Place, 2 Third Place</p>
      </div>
    </div>
  );
};

export default Awards;