import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dues from "./pages/Dues";
import EventInfo from "./pages/EventInfo";
import Rubrics from "./pages/Rubrics";
import MeetingArchive from "./pages/MeetingArchive"; // ✅ New
import QuickTips from "./pages/QuickTips";           // ✅ New

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dues" element={<Dues />} />
            <Route path="/event-info" element={<EventInfo />} />
            <Route path="/rubrics" element={<Rubrics />} />
            <Route path="/meeting-archive" element={<MeetingArchive />} /> {/* ✅ New */}
            <Route path="/quick-tips" element={<QuickTips />} />           {/* ✅ New */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
