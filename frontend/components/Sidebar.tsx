const items = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Tasks", href: "/tasks" },
  { label: "Calendar", href: "/calendar" },
  { label: "Analytics", href: "/analytics" },
  { label: "AI Assistant", href: "/ai" },
  { label: "Workspace", href: "/workspace" },
  { label: "Profile", href: "/profile" },
  { label: "Memory", href: "/memory" },
  { label: "Notifications", href: "/notifications" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        background: "#111827",
        borderRight: "1px solid #1f2937",
        padding: 24,
      }}
    >
      <h2 style={{ fontSize: 24, marginBottom: 32 }}>AI Productivity</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              color: "#e5e7eb",
              background: "#0f172a",
              border: "1px solid #1f2937",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
