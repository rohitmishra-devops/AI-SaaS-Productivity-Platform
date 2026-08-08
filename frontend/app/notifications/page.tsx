const notifications = [
  {
    title: "AI Daily Plan Ready",
    message: "Your optimized schedule for today has been generated.",
    time: "2 min ago",
    type: "AI",
  },
  {
    title: "Task Deadline Approaching",
    message: "Django Backend API is due today at 5:00 PM.",
    time: "15 min ago",
    type: "Task",
  },
  {
    title: "Team Comment",
    message: "Aman commented on the Productivity Dashboard project.",
    time: "1 hour ago",
    type: "Team",
  },
  {
    title: "Weekly Report",
    message: "Your productivity report for this week is available.",
    time: "Yesterday",
    type: "Report",
  },
  {
    title: "Calendar Reminder",
    message: "Interview scheduled for tomorrow at 10:00 AM.",
    time: "Yesterday",
    type: "Calendar",
  },
];

export default function NotificationsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "#fff",
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <h1 style={{ fontSize: 32 }}>Notifications</h1>

        <button
          style={{
            padding: "10px 16px",
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#111827",
            color: "#fff",
          }}
        >
          Mark all as read
        </button>
      </div>

      <div style={{ display: "grid", gap: 16 }}>
        {notifications.map((n, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: 18,
              padding: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    background:
                      n.type === "AI"
                        ? "#1d4ed8"
                        : n.type === "Task"
                        ? "#dc2626"
                        : n.type === "Team"
                        ? "#7c3aed"
                        : n.type === "Report"
                        ? "#059669"
                        : "#ea580c",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {n.type}
                </span>

                <h2 style={{ fontSize: 18 }}>{n.title}</h2>
              </div>

              <p style={{ color: "#cbd5e1" }}>{n.message}</p>
            </div>

            <div style={{ color: "#94a3b8", fontSize: 14 }}>{n.time}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
