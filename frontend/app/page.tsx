export default function HomePage() {
  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <h1 style={{ fontSize: "4rem", lineHeight: 1.05, marginBottom: 24 }}>
        AI SaaS <span className="gradient-text">Productivity Platform</span>
      </h1>

      <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: 720 }}>
        Plan tasks, manage projects, collaborate with teams, and automate your
        workflow with an AI-powered productivity platform built for speed and scale.
      </p>

      <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
        <a
          href="/dashboard"
          style={{
            padding: "14px 22px",
            borderRadius: 12,
            background: "#2563eb",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Launch Dashboard
        </a>

        <a
          href="/login"
          style={{
            padding: "14px 22px",
            borderRadius: 12,
            border: "1px solid #334155",
            color: "#e2e8f0",
          }}
        >
          Sign In
        </a>
      </div>
    </main>
  );
}
