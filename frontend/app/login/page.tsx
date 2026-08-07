frontend/app/login/page.tsxexport default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0b1020",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: 420,
          padding: 32,
          borderRadius: 20,
          background: "#111827",
          border: "1px solid #1f2937",
        }}
      >
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Welcome back</h1>
        <p style={{ color: "#94a3b8", marginBottom: 24 }}>
          Sign in to continue to your AI workspace.
        </p>

        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#0f172a",
            color: "#fff",
            marginBottom: 16,
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#0f172a",
            color: "#fff",
            marginBottom: 20,
          }}
        />

        <button
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 12,
            border: "none",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Sign In
        </button>

        <p style={{ color: "#94a3b8", marginTop: 16, textAlign: "center" }}>
          Don&apos;t have an account? <a href="/register">Create one</a>
        </p>
      </div>
    </main>
  );
}
