const members = [
  { name: "Rohit Mishra", role: "Owner", status: "Online" },
  { name: "Aman Sharma", role: "Developer", status: "Online" },
  { name: "Priya Verma", role: "Designer", status: "Away" },
  { name: "Rahul Singh", role: "Product Manager", status: "Offline" },
];

const projects = [
  {
    name: "AI SaaS Productivity Platform",
    progress: 72,
    tasks: 48,
    due: "12 Sep 2026",
  },
  {
    name: "Mobile Dashboard",
    progress: 38,
    tasks: 21,
    due: "20 Sep 2026",
  },
  {
    name: "AI Assistant Integration",
    progress: 54,
    tasks: 31,
    due: "28 Sep 2026",
  },
];

export default function WorkspacePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "#fff",
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <h1 style={{ fontSize: 32 }}>Workspace</h1>
          <p style={{ color: "#94a3b8", marginTop: 6 }}>
            Manage your team, projects, and collaboration.
          </p>
        </div>

        <button
          style={{
            padding: "10px 16px",
            borderRadius: 12,
            border: "none",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Invite Member
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 24,
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
          <h2 style={{ marginBottom: 16 }}>Team Members</h2>

          <div style={{ display: "grid", gap: 14 }}>
            {members.map((member) => (
              <div
                key={member.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 14,
                  borderRadius: 14,
                  background: "#0f172a",
                  border: "1px solid #1f2937",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{member.name}</div>
                  <div style={{ color: "#94a3b8", fontSize: 14 }}>
                    {member.role}
                  </div>
                </div>

                <span
                  style={{
                    color:
                      member.status === "Online"
                        ? "#34d399"
                        : member.status === "Away"
                        ? "#f59e0b"
                        : "#64748b",
                    fontWeight: 600,
                  }}
                >
                  {member.status}
                </span>
              </div>
            ))}
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
          <h2 style={{ marginBottom: 16 }}>Workspace Stats</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {[
              { label: "Active Projects", value: "12" },
              { label: "Team Members", value: "8" },
              { label: "Open Tasks", value: "94" },
              { label: "AI Automations", value: "27" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#0f172a",
                  border: "1px solid #1f2937",
                  borderRadius: 16,
                  padding: 18,
                }}
              >
                <div style={{ color: "#94a3b8", marginBottom: 8 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 30, fontWeight: 700 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: 20,
          padding: 24,
        }}
      >
        <h2 style={{ marginBottom: 16 }}>Projects</h2>

        <div style={{ display: "grid", gap: 16 }}>
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                padding: 18,
                borderRadius: 16,
                background: "#0f172a",
                border: "1px solid #1f2937",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>
                    {project.name}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: 14 }}>
                    {project.tasks} tasks • Due {project.due}
                  </div>
                </div>

                <div style={{ color: "#34d399", fontWeight: 700 }}>
                  {project.progress}%
                </div>
              </div>

              <div
                style={{
                  height: 10,
                  borderRadius: 999,
                  background: "#1f2937",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${project.progress}%`,
                    height: "100%",
                    background:
                      "linear-gradient(90deg,#2563eb,#7c3aed,#06b6d4)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
