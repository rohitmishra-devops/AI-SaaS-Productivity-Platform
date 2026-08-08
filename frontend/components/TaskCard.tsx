type Props = {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
};

export default function TaskCard({
  title,
  description,
  priority,
}: Props) {
  const colors = {
    High: "#dc2626",
    Medium: "#f59e0b",
    Low: "#059669",
  };

  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 16,
        padding: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <h3>{title}</h3>
        <span
          style={{
            background: colors[priority],
            color: "#fff",
            padding: "4px 10px",
            borderRadius: 999,
            fontSize: 12,
          }}
        >
          {priority}
        </span>
      </div>

      <p style={{ color: "#cbd5e1", lineHeight: 1.5 }}>{description}</p>
    </div>
  );
}
