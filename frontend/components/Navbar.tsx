export default function Navbar() {
  return (
    <header
      style={{
        height: 72,
        borderBottom: "1px solid #1f2937",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <div>
        <h1 style={{ fontSize: 24 }}>Dashboard</h1>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          New Task
        </button>

        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#374151",
          }}
        />
      </div>
    </header>
  );
}
