"use client";

import { useDashboard } from "../../context/DashboardContext";

export default function Button() {
  const {
    buttonClicks,
    setButtonClicks,
    addActivity,
  } = useDashboard();

  const handleClick = () => {
    setButtonClicks(buttonClicks + 1);

    addActivity("Primary Button Clicked");
  };

  return (
    <button onClick={handleClick}>
      Click Me ({buttonClicks})
    </button>
  );
}