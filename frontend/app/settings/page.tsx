export default function SettingsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "#fff",
        padding: 24,
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 24 }}>Settings</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        <section
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 20,
            padding: 24,
          }}
        >
          <h2 style={{ marginBottom: 16 }}>Profile</h2>

          <div style={{ display: "grid", gap: 16 }}>
            <input
              placeholder="Full Name"
              defaultValue="Rohit Mishra"
              style={{
                padding: 14,
                borderRadius: 12,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#fff",
              }}
            />

            <input
              placeholder="Email"
              defaultValue="rohit@example.com"
              style={{
                padding: 14,
                borderRadius: 12,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#fff",
              }}
            />

            <button
              style={{
                padding: "12px 18px",
                borderRadius: 12,
                border: "none",
                background: "#2563eb",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Save Changes
            </button>
          </div>
        </section>

        <section
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 20,
            padding: 24,
          }}
        >
          <h2 style={{ marginBottom: 16 }}>Preferences</h2>

          <div style={{ display: "grid", gap: 16 }}>
            <label
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Dark Mode</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Email Notifications</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>AI Daily Planner</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Productivity Reminders</span>
              <input type="checkbox" defaultChecked />
            </label>
          </div>
        </section>

        <section
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 20,
            padding: 24,
          }}
        >
          <h2 style={{ marginBottom: 16 }}>AI Configuration</h2>

          <div style={{ display: "grid", gap: 16 }}>
            <select
              style={{
                padding: 14,
                borderRadius: 12,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#fff",
              }}
            >
              <option>GPT-5</option>
              <option>GPT-4.1</option>
              <option>Gemini 2.5</option>
            </select>

            <select
              style={{
                padding: 14,
                borderRadius: 12,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#fff",
              }}
            >
              <option>Balanced</option>
              <option>Creative</option>
              <option>Analytical</option>
            </select>

            <button
              style={{
                padding: "12px 18px",
                borderRadius: 12,
                border: "none",
                background: "#7c3aed",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              Test AI Connection
            </button>
          </div>
        </section>

        <section
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 20,
            padding: 24,
          }}
        >
          <h2 style={{ marginBottom: 16 }}>Workspace</h2>

          <div style={{ display: "grid", gap: 16 }}>
            <input
              placeholder="Workspace Name"
              defaultValue="Rohit Workspace"
              style={{
                padding: 14,
                borderRadius: 12,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#fff",
              }}
            />

            <button
              style={{
                padding: "12px 18px",
                borderRadius: 12,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#fff",
              }}
            >
              Invite Team Member
            </button>

            <button
              style={{
                padding: "12px 18px",
                borderRadius: 12,
                border: "1px solid #7f1d1d",
                background: "#450a0a",
                color: "#fecaca",
              }}
            >
              Delete Workspace
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
