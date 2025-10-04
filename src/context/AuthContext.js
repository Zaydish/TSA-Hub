import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const roleRef = doc(db, "roles", user.uid);
        const userRef = doc(db, "users", user.uid);

        const [roleSnap, userSnap] = await Promise.all([
          getDoc(roleRef),
          getDoc(userRef),
        ]);

        setRole(roleSnap.exists() ? roleSnap.data().role : null);
        setName(userSnap.exists() ? userSnap.data().name : "");
      } else {
        setRole(null);
        setName("");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ currentUser, role, name, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);