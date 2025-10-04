import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const fetched = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(fetched);
    };

    fetchEvents();
  }, []);

  const toggleField = async (id, field) => {
    const eventRef = doc(db, "events", id);
    const event = events.find(e => e.id === id);
    const updated = { ...event, [field]: !event[field] };

    await updateDoc(eventRef, { [field]: updated[field] });
    setEvents(events.map(e => (e.id === id ? updated : e)));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map(event => (
          <div key={event.id} className="p-4 border rounded bg-white dark:bg-gray-800 shadow">
            <h2 className="text-lg font-semibold">{event.name}</h2>
            <p className="text-sm text-gray-600">Category: {event.category}</p>
            <div className="mt-2 space-x-4">
              <button
                onClick={() => toggleField(event.id, "portfolio")}
                className={`px-3 py-1 rounded ${event.portfolio ? "bg-green-500" : "bg-gray-500"} text-white`}
              >
                Portfolio: {event.portfolio ? "Yes" : "No"}
              </button>
              <button
                onClick={() => toggleField(event.id, "earlySubmission")}
                className={`px-3 py-1 rounded ${event.earlySubmission ? "bg-green-500" : "bg-gray-500"} text-white`}
              >
                Early: {event.earlySubmission ? "Yes" : "No"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;