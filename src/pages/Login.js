import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-300">Login to TSA Hub</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded dark:bg-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded dark:bg-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-500 transition">Login</button>
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;