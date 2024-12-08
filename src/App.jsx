import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home-page";
import JobsPage from "./pages/Jobs-page";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
