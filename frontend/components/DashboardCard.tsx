type Props = {
  title: string;
  value: string;
  subtitle: string;
};

export default function DashboardCard({ title, value, subtitle }: Props) {
  return (
    <div
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 18,
        padding: 24,
      }}
    >
      <p style={{ color: "#9ca3af", marginBottom: 12 }}>{title}</p>
      <h3 style={{ fontSize: 36, marginBottom: 8 }}>{value}</h3>
      <p style={{ color: "#6ee7b7" }}>{subtitle}</p>
    </div>
  );
}
