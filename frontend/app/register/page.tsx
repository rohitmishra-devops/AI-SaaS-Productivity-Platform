export default function RegisterPage() {
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
          width: 460,
          padding: 32,
          borderRadius: 20,
          background: "#111827",
          border: "1px solid #1f2937",
        }}
      >
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Create account</h1>
        <p style={{ color: "#94a3b8", marginBottom: 24 }}>
          Start organizing your work with AI.
        </p>

        <input
          placeholder="Full Name"
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
            marginBottom: 16,
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
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
          Create Account
        </button>

        <p style={{ color: "#94a3b8", marginTop: 16, textAlign: "center" }}>
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </main>
  );
}
