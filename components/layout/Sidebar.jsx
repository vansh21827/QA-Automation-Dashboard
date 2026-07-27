"use client";

const menus = [
  {
    icon: "📊",
    title: "Dashboard",
  },
  {
    icon: "🧩",
    title: "Components",
  },
  {
    icon: "🧪",
    title: "Testing",
  },
  {
    icon: "🎬",
    title: "Movies",
  },
  {
    icon: "📈",
    title: "Coverage",
  },
  {
    icon: "📋",
    title: "Activity",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">QA Dashboard</div>

      <nav>
        {menus.map((item, index) => (
          <div
            key={item.title}
            className={`menu-item ${
              index === 0 ? "active" : ""
            }`}
          >
            <span>{item.icon}</span>

            <span>{item.title}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}