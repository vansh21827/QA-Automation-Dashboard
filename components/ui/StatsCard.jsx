"use client";

export default function StatsCard({
  icon,
  title,
  value,
  color = "#2563eb",
}) {
  return (
    <div className="stats-card">
      <div
        className="stats-icon"
        style={{
          background: `linear-gradient(135deg, ${color}, ${color}CC)`,
        }}
      >
        {icon}
      </div>

      <div className="stats-content">
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </div>
  );
}