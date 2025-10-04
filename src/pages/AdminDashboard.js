import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ADMIN_EMAIL = "tsaadmin@gmail.com";

const AdminDashboard = () => {
  const [signups, setSignups] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user && user.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!isAdmin) return;

    const unsubscribe = onSnapshot(collection(db, "eventSignups"), (snapshot) => {
      const allSignups = snapshot.docs.map((doc) => doc.data());
      setSignups(allSignups);
    });

    return () => unsubscribe();
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        You do not have permission to view this page.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Admin Sign-Up Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">User ID</th>
              <th className="py-3 px-6 text-left">Event Name</th>
            </tr>
          </thead>
          <tbody>
            {signups.map((signup, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="py-2 px-6">{signup.uid}</td>
                <td className="py-2 px-6">{signup.eventName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;