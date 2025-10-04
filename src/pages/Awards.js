import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import confetti from "canvas-confetti";

const Awards = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const finalists = [
    "Architectural Design",
    "Audio Podcasting",
    "Biotechnology Design",
    "Chapter Team",
    "Children’s Stories",
    "CAD Engineering (Elliot)",
    "Electrical Applications (Shiloh)",
    "Engineering Design",
    "Fashion Design and Technology",
    "Photographic Technology (Sarim)",
    "Prepared Presentation (Katie)",
    "Robotics",
    "Technical Problem Solving",
    "Video Game Design",
  ];

  const winners = [
    { place: "3rd", event: "Data Science and Analytics" },
    { place: "2nd", event: "Debating Technical Issues" },
    { place: "3rd", event: "Electrical Applications (Aditya)" },
    { place: "2nd", event: "Future Technology Teacher (Jennah)" },
    { place: "9th", event: "Outstanding Chapter" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">TSA Awards</h1>
        <p className="text-lg text-gray-600 mt-2">Celebrating our chapter's state-level achievements</p>
      </div>

      {/* SLC 2025 */}
      <div className="bg-white p-6 rounded-xl shadow mb-12" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">SLC 2025</h2>
        <p className="text-lg mb-6 text-blue-600">🏅 PRHS TSA placed <strong>9th in the state</strong>!</p>

        <h3 className="text-xl font-semibold mb-2 text-blue-700">Top 10 Finalists</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {finalists.map((event, index) => (
            <div
              key={index}
              className="bg-blue-50 border-l-4 border-blue-500 dark:bg-gray-800 p-4 rounded shadow"
              data-aos="fade-up"
              data-aos-delay={index * 30}
            >
              <p className="text-blue-900 dark:text-white font-medium">{event}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Finalist (Top 10)</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-green-700">🏆 Winners</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {winners.map((winner, index) => {
            const placeColor =
              winner.place === "1st"
                ? "bg-yellow-100 border-yellow-500"
                : winner.place === "2nd"
                ? "bg-gray-200 border-gray-500"
                : "bg-amber-100 border-amber-500";
            return (
              <div
                key={index}
                className={`border-l-4 p-4 rounded shadow ${placeColor}`}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <p className="text-lg font-bold text-green-800">
                  {winner.place} Place – {winner.event}
                </p>
              </div>
            );
          })}
        </div>
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