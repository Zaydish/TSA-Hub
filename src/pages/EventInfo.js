import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import confetti from "canvas-confetti";
import AOS from "aos";
import "aos/dist/aos.css";

const categorizedEvents = {
  Engineering: [
    "Architectural Design",
    "Biotechnology Design",
    "Engineering Design",
    "Manufacturing Prototype",
    "Structural Engineering",
    "System Control Technology",
    "Transportation Modeling",
    "Future Technology & Engineering Teacher",
  ],
  Coding: [
    "Coding",
    "Cybersecurity",
    "Data Science & Analytics",
    "Software Development",
    "Video Game Design",
    "Webmaster",
  ],
  Leadership: [
    "Debating Technological Issues",
    "Prepared Presentation",
    "Extemporaneous Speech",
    "Technology Bowl",
    "Technology Problem Solving",
    "Leadership Strategies",
    "Chapter Team",
    "Career Prep",
    "Essays on Technology",
  ],
  Arts: [
    "Children’s Stories",
    "Digital Video Production",
    "Fashion Design & Technology",
    "Music Production",
    "Photographic Technology",
    "Promotional Design",
    "Scientific Visualization",
    "Future STEM Teacher",
    "On Demand Video",
    "Geospatial Technology",
    "Board Game Design",
    "Forensic Science",
    "Inventions and Innovations",
    "Robotics",
    "Animatronics",
  ],
};

const EventInfo = () => {
  const [signedEvents, setSignedEvents] = useState([]);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [pendingEvent, setPendingEvent] = useState("");

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true });
  }, []);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        setSignedEvents([]);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "eventSignups"),
      where("uid", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const events = snapshot.docs.map((doc) => doc.data().eventName);
      setSignedEvents(events);
    });

    return () => unsubscribe();
  }, [user]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const handleSignUp = async (eventName) => {
    if (!user || signedEvents.includes(eventName)) return;

    if (!name.trim()) {
      setPendingEvent(eventName);
      setShowNamePrompt(true);
      return;
    }

    await addDoc(collection(db, "eventSignups"), {
      uid: user.uid,
      name: name.trim(),
      eventName,
    });

    triggerConfetti();
  };

  const submitNameAndSignUp = async () => {
    if (!pendingEvent || !name.trim()) return;

    await addDoc(collection(db, "eventSignups"), {
      uid: user.uid,
      name: name.trim(),
      eventName: pendingEvent,
    });

    triggerConfetti();
    setShowNamePrompt(false);
    setPendingEvent("");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-300" data-aos="fade-down">
        TSA Events & Sign-Up
      </h1>

      {Object.entries(categorizedEvents).map(([category, events]) => (
        <div key={category} className="mb-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((eventName, idx) => {
              const isSigned = signedEvents.includes(eventName);
              return (
                <div
                  key={eventName}
                  data-aos="fade-up"
                  data-aos-delay={idx * 70}
                  className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow"
                >
                  <h3 className="text-lg font-semibold mb-2 text-blue-800 dark:text-white">
                    {eventName}
                  </h3>
                  <button
                    onClick={() => handleSignUp(eventName)}
                    disabled={isSigned}
                    className={`px-4 py-2 rounded transition font-semibold ${
                      isSigned
                        ? "bg-green-600 text-white cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {isSigned ? "Signed Up" : "Sign Up"}
                  </button>
                  {isSigned && (
                    <p className="text-sm mt-2 text-green-600 dark:text-green-400">
                      ✅ Signed Up
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {showNamePrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center text-blue-700 dark:text-white">Enter Your Name</h2>
            <input
              type="text"
              className="w-full px-4 py-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowNamePrompt(false)}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={submitNameAndSignUp}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventInfo;