export default function AIChatWidget() {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 18,
        padding: 24,
      }}
    >
      <h3 style={{ marginBottom: 12 }}>AI Assistant</h3>

      <div
        style={{
          background: "#0b1020",
          border: "1px solid #1f2937",
          borderRadius: 12,
          padding: 16,
          minHeight: 120,
          color: "#cbd5e1",
        }}
      >
        Today you have 8 pending tasks and 2 meetings.
        I recommend completing the high-priority project tasks before 3 PM.
      </div>

      <button
        style={{
          marginTop: 16,
          width: "100%",
          padding: "12px 16px",
          borderRadius: 12,
          background: "#2563eb",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Generate AI Plan
      </button>
    </div>
  );
}
