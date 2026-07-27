"use client";

import { useDashboard } from "../../context/DashboardContext";

export default function SearchInput() {
  const {
    search,
    setSearch,
    addActivity,
  } = useDashboard();

  const handleChange = (e) => {
    setSearch(e.target.value);

    addActivity(`Searching : ${e.target.value}`);
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={handleChange}
    />
  );
}