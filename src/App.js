import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page imports (must match file names exactly)
import Home from "./pages/Home";
import Dues from "./pages/Dues";
import EventInfo from "./pages/EventInfo";
import Awards from "./pages/Awards";
import Feedback from "./pages/Feedback";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dues" element={<Dues />} />
            <Route path="/eventinfo" element={<EventInfo />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;