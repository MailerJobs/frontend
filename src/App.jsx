import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home-page";
import JobsPage from "./pages/Jobs-page";
import ScrollToTop from "./utils/scrollToTop";
import CollegePage from "./pages/College-page";
import CandidateProfilePage from "./pages/Candidate-page";
import Header from "./components/Header/Header";
import CLientPage from "./pages/Client-page";
import CollegeSection from "./components/college/college-section";
import { college } from "./Data/Colleges/college";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  return (
    <>
      {data ? (
        <>
          <Router>
            <Header />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/college" element={<CollegePage />} />
                <Route path="/candidate" element={<CandidateProfilePage />} />
                <Route path="/client" element={<CLientPage />} />
                <Route path="/college-section" element={<CollegeSection />} />
              </Routes>
            </ScrollToTop>
          </Router>
        </>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <Box sx={{ display: "flex" }}>
            <CircularProgress size={60} style={{color: "#90267A"}}/>
          </Box>
        </div>
      )}
    </>
  );
}

export default App;
