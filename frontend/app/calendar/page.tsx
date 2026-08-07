export default function CalendarPage() {
  const days = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <main
      style={{
        padding: 24,
        background: "#0b1020",
        minHeight: "100vh",
        color: "#fff",
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
        <h1 style={{ fontSize: 32 }}>Calendar</h1>

        <button
          style={{
            padding: "10px 16px",
            borderRadius: 12,
            border: "none",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Add Event
        </button>
      </div>

      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: 20,
          padding: 24,
        }}
      >
        <h2 style={{ marginBottom: 20 }}>September 2026</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 12,
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div
              key={d}
              style={{
                textAlign: "center",
                color: "#94a3b8",
                fontWeight: 600,
              }}
            >
              {d}
            </div>
          ))}

          {days.map((day) => (
            <div
              key={day}
              style={{
                minHeight: 90,
                borderRadius: 14,
                border: "1px solid #1f2937",
                background: day === 15 ? "#1d4ed8" : "#0f172a",
                padding: 12,
              }}
            >
              <div style={{ fontWeight: 600 }}>{day}</div>

              {day === 15 && (
                <div
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: "#2563eb",
                    fontSize: 12,
                  }}
                >
                  Product Demo
                </div>
              )}

              {day === 22 && (
                <div
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 8,
                    background: "#059669",
                    fontSize: 12,
                  }}
                >
                  Sprint Review
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
