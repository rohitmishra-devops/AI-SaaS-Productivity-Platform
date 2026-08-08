export default function AnalyticsPage() {
  const metrics = [
    { title: "Focus Score", value: "92%" },
    { title: "Deep Work Hours", value: "18h" },
    { title: "Tasks Completed", value: "34" },
    { title: "AI Efficiency", value: "+28%" },
  ];

  return (
    <main
      style={{
        padding: 24,
        background: "#0b1020",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 24 }}>Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          marginBottom: 24,
        }}
      >
        {metrics.map((m) => (
          <div
            key={m.title}
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: 18,
              padding: 24,
            }}
          >
            <p style={{ color: "#94a3b8", marginBottom: 12 }}>{m.title}</p>
            <h2 style={{ fontSize: 36 }}>{m.value}</h2>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: 20,
          padding: 24,
          marginBottom: 24,
        }}
      >
        <h2 style={{ marginBottom: 16 }}>Weekly Productivity Trend</h2>

        <div
          style={{
            height: 320,
            borderRadius: 14,
            background:
              "linear-gradient(180deg, rgba(37,99,235,.25), rgba(15,23,42,1))",
            border: "1px solid #1f2937",
            display: "flex",
            alignItems: "end",
            justifyContent: "space-around",
            padding: 24,
          }}
        >
          {[48, 72, 56, 84, 92, 76, 98].map((v, i) => (
            <div
              key={i}
              style={{
                width: 32,
                height: `${v * 2}px`,
                borderRadius: 10,
                background: "#3b82f6",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: 20,
          padding: 24,
        }}
      >
        <h2 style={{ marginBottom: 16 }}>AI Insights</h2>

        <ul style={{ color: "#cbd5e1", display: "grid", gap: 12 }}>
          <li>Your most productive hours are between 9 AM and 12 PM.</li>
          <li>Meetings reduced deep work time by 18% this week.</li>
          <li>Completing high-priority tasks first could improve output by 24%.</li>
          <li>AI automation saved approximately 6.2 hours this week.</li>
        </ul>
      </div>
    </main>
  );
}
