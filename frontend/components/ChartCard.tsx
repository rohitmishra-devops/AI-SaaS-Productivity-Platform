export default function ChartCard() {
  const values = [42, 68, 56, 88, 74, 96, 82];

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 18,
        padding: 24,
      }}
    >
      <h3 style={{ marginBottom: 16 }}>Weekly Productivity</h3>

      <div
        style={{
          height: 240,
          display: "flex",
          alignItems: "end",
          justifyContent: "space-around",
        }}
      >
        {values.map((v, i) => (
          <div
            key={i}
            style={{
              width: 28,
              height: `${v * 2}px`,
              borderRadius: 10,
              background:
                "linear-gradient(180deg,#3b82f6,#2563eb,#1d4ed8)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
