export default function Footer() {
  return (
    <footer className="footer">
      <h3>QA Automation Dashboard</h3>

      <p>
        Sprint 11 — Unit & Component Testing using
        Next.js, Jest and React Testing Library.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "15px",
          flexWrap: "wrap",
        }}
      >
        <span>Next.js</span>

        <span>React 19</span>

        <span>Jest</span>

        <span>RTL</span>

        <span>Version 1.0.0</span>
      </div>

      <p style={{ marginTop: "18px" }}>
        © 2026 QA Automation Dashboard
      </p>
    </footer>
  );
}