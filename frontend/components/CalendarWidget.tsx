export default function CalendarWidget() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 18,
        padding: 24,
      }}
    >
      <h3 style={{ marginBottom: 16 }}>September 2026</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gap: 8,
        }}
      >
        {days.map((day) => (
          <div
            key={day}
            style={{
              padding: 12,
              textAlign: "center",
              borderRadius: 10,
              background: day === 15 ? "#2563eb" : "#0f172a",
              border: "1px solid #1f2937",
            }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
