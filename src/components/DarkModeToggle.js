import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
    >
      {isDark ? <FaSun /> : <FaMoon />}
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;