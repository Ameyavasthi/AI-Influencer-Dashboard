import React, { useState, useEffect } from "react";
import DashboardLayout from "./layouts/DashboardLayout";

// Import Pages
import Overview from "./pages/Overview";
import Segmentation from "./pages/Segmentation";
import Regional from "./pages/Regional";
import Performance from "./pages/Performance";
import Monetisation from "./pages/Monetisation";
import Forecast from "./pages/Forecast";
import About from "./pages/About";

export default function App() {
  const [page, setPage] = useState("overview");
  const [ready, setReady] = useState(false);

  // Subtle fade-in on mount
  useEffect(() => {
    setTimeout(() => setReady(true), 80);
  }, []);

  return (
    <div 
      className={`transition-opacity duration-300 ${ready ? 'opacity-100' : 'opacity-0'}`}
    >
      <DashboardLayout page={page} setPage={setPage}>
        {page === "overview"     && <Overview />}
        {page === "segmentation" && <Segmentation />}
        {page === "regional"     && <Regional />}
        {page === "performance"  && <Performance />}
        {page === "monetisation" && <Monetisation />}
        {page === "forecast"     && <Forecast />}
        {page === "about"        && <About />}
      </DashboardLayout>
    </div>
  );
}
