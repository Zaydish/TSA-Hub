import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: true });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        try {
          const docRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(docRef);
          if (userSnap.exists()) {
            setUsername(userSnap.data().username);
          }
        } catch (err) {
          console.log("Username fetch blocked by rules or unavailable.");
        }
      } else {
        setUser(null);
        setMyEvents([]);
        setUsername("");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "eventSignups"),
      where("uid", "==", user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const events = snapshot.docs.map((doc) => doc.data().eventName);
      setMyEvents(events);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-8">
      <h1
        className="text-4xl font-bold mb-2 text-center text-blue-700 dark:text-blue-300"
        data-aos="fade-down"
      >
        Welcome{username && `, ${username}`}!
      </h1>
      <p
        className="text-center mb-12 text-lg text-gray-600 dark:text-gray-300"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Your one-stop dashboard for everything TSA.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Announcements */}
        <div
          className="bg-blue-100 dark:bg-blue-800 rounded-xl p-6 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">
            📢 Announcements
          </h2>
          <ul className="list-disc list-inside text-lg">
            <li>Team meeting this Wednesday at 3 PM</li>
            <li>Officer elections open next week</li>
          </ul>
        </div>

        {/* Calendar */}
        <div
          className="bg-purple-100 dark:bg-purple-800 rounded-xl p-6 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-900 dark:text-white">
            📅 Upcoming Events
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://calendar.google.com/calendar/u/0/embed?src=ODI2YzY1NmY4ZjI5MWViM2I5N2E4MjdkNmQ5NzkxOGFkODdlNWMzZGVlOTBjMjhjYWY3ZmZmNmU5ODgwMTJkMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              style={{ border: 0 }}
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              title="PRHS TSA Calendar"
            ></iframe>
          </div>
        </div>

        {/* My Events */}
        <div
          className="bg-green-100 dark:bg-green-800 rounded-xl p-6 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-bold mb-4 text-green-900 dark:text-white">
            📋 My Events
          </h2>
          {myEvents.length > 0 ? (
            <ul className="space-y-2 text-lg">
              {myEvents.map((event, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 bg-green-200 dark:bg-green-700 rounded text-green-900 dark:text-white"
                >
                  {event}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 dark:text-gray-200 text-lg">
              You have no events signed up currently.{" "}
              <a
                href="/eventinfo"
                className="text-green-800 dark:text-green-300 underline font-semibold"
              >
                Sign Up Now
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Sign-Up CTA */}
      <div
        className="bg-yellow-100 dark:bg-yellow-700 rounded-xl p-6 shadow-lg max-w-md mx-auto"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        <h2 className="text-2xl font-bold mb-4 text-yellow-900 dark:text-white">
          🚀 New Event Sign-Up
        </h2>
        <p className="mb-4 text-lg text-gray-800 dark:text-gray-200">
          Register for current TSA competitions.
        </p>
        <a
          href="/eventinfo"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default Home;