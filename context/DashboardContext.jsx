"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import moviesData from "../data/movies";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  /* ==========================================
      Search
  ========================================== */

  const [search, setSearch] = useState("");

  /* ==========================================
      Counter
  ========================================== */

  const [counter, setCounter] = useState(0);

  /* ==========================================
      Button Clicks
  ========================================== */

  const [buttonClicks, setButtonClicks] = useState(0);

  /* ==========================================
      Theme
  ========================================== */

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  /* ==========================================
      Activity Log
  ========================================== */

  const [activityLog, setActivityLog] = useState([]);

  const addActivity = (message) => {
    const activity = {
      id: Date.now(),
      message,
      time: new Date().toLocaleTimeString(),
    };

    setActivityLog((prev) => [activity, ...prev]);
  };

  /* ==========================================
      Movies
  ========================================== */

  const filteredMovies = useMemo(() => {
    return moviesData.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  /* ==========================================
      Dashboard Statistics
  ========================================== */

  const totalComponents = 12;
  const totalTests = 15;
  const passedTests = 15;
  const failedTests = 0;
  const coverage = 75;

  const dashboardStats = {
    totalComponents,
    totalTests,
    passedTests,
    failedTests,
    coverage,
    movies: filteredMovies.length,
    buttonClicks,
    counter,
    status: failedTests === 0 ? "Healthy" : "Warning",
  };

  /* ==========================================
      Context Value
  ========================================== */

  const value = {
    search,
    setSearch,

    counter,
    setCounter,

    buttonClicks,
    setButtonClicks,

    theme,
    setTheme,
    toggleTheme,

    activityLog,
    addActivity,

    filteredMovies,

    dashboardStats,

    totalComponents,
    totalTests,
    passedTests,
    failedTests,
    coverage,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboard must be used inside DashboardProvider."
    );
  }

  return context;
}