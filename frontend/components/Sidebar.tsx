export default function Sidebar() {
  const items = [
    "Dashboard",
    "Tasks",
    "Projects",
    "Calendar",
    "Analytics",
    "AI Assistant",
    "Settings",
  ];

  return (
    <aside
      style={{
        width: 260,
        minHeight: "100vh",
        background: "#111827",
        borderRight: "1px solid #1f2937",
        padding: 24,
      }}
    >
      <h2 style={{ fontSize: 24, marginBottom: 32 }}>AI Productivity</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((item) => (
          <a
            key={item}
            href="#"
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              color: "#e5e7eb",
              background: item === "Dashboard" ? "#1f2937" : "transparent",
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
