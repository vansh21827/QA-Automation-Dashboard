"use client";

import { useDashboard } from "../../context/DashboardContext";

export default function ActivityLog() {
  const { activityLog } = useDashboard();

  return (
    <>
      <h2>Recent Activity</h2>

      {activityLog.length === 0 ? (
        <p>No activity yet.</p>
      ) : (
        <ul>
          {activityLog.map((item) => (
            <li key={item.id}>
              <strong>{item.time}</strong>

              <br />

              {item.message}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}