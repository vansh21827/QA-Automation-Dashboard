"use client";

import { useEffect, useState } from "react";
import { useDashboard } from "../../context/DashboardContext";

export default function DashboardHeader() {
  const [time, setTime] = useState("");

  const {
    totalTests = 15,
    coverage = 75,
  } = useDashboard();

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="dashboard-header">
      <div>
        <span className="badge">Sprint 11 • QA Automation</span>

        <h1>Unit & Component Testing Dashboard</h1>

        <p>
          Next.js • Jest • React Testing Library • Component &
          Integration Testing
        </p>
      </div>

      <div className="header-status">
        <div className="status-card">
          <h4>{totalTests}</h4>
          <span>Total Tests</span>
        </div>

        <div className="status-card">
          <h4>{coverage}%</h4>
          <span>Coverage</span>
        </div>

        <div className="status-card">
          <h4>{time}</h4>
          <span>Live Time</span>
        </div>
      </div>
    </header>
  );
}