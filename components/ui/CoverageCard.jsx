"use client";

export default function CoverageCard({
  title,
  percentage,
  color,
}) {
  return (
    <div className="coverage-card">
      <div className="coverage-header">
        <span>{title}</span>

        <strong>{percentage}%</strong>
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}