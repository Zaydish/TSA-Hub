import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Anonymous Feedback Submitted:", feedback);
    setFeedback("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-6" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-blue-900 mb-4 text-center">Anonymous Member Feedback</h1>
        <p className="text-gray-600 text-center mb-6">
          Help us improve TSA by submitting your honest and anonymous thoughts.
        </p>

        {submitted ? (
          <p className="text-green-600 text-center text-lg font-semibold">
            ✅ Thanks for your feedback!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none mb-4"
              placeholder="Write anonymously about how we can improve the club or address any issues."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;