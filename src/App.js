// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Dues from "./pages/Dues";
import Awards from "./pages/Awards";
import Feedback from "./pages/Feedback";
import EventInfo from "./pages/EventInfo";
import Rubrics from "./pages/Rubrics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

// Context
import { MyEventsProvider } from "./context/MyEventsContext";
import { AuthProvider } from "./context/AuthContext";

// Protected route
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <MyEventsProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dues"
                  element={
                    <PrivateRoute>
                      <Dues />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/awards"
                  element={
                    <PrivateRoute>
                      <Awards />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/feedback"
                  element={
                    <PrivateRoute>
                      <Feedback />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/eventinfo"
                  element={
                    <PrivateRoute>
                      <EventInfo />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/rubrics"
                  element={
                    <PrivateRoute>
                      <Rubrics />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <PrivateRoute>
                      <AdminDashboard />
                    </PrivateRoute>
                  }
                />
                {/* Public */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </MyEventsProvider>
    </AuthProvider>
  );
};

export default App;