const achievements = [
  "100 Tasks Completed",
  "30-Day Productivity Streak",
  "AI Power User",
  "Top Focus Performer",
];

const recentActivity = [
  "Completed Django Backend API",
  "Created 5 new AI tasks",
  "Joined Team Workspace",
  "Finished Weekly Sprint",
];

export default function ProfilePage() {
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
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: 24,
          padding: 32,
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#2563eb,#7c3aed)",
              display: "grid",
              placeItems: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            RM
          </div>

          <div>
            <h1 style={{ fontSize: 36 }}>Rohit Mishra</h1>
            <p style={{ color: "#94a3b8", marginTop: 6 }}>
              AI SaaS Productivity Platform • Full Stack Developer
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 16,
                flexWrap: "wrap",
              }}
            >
              {["Python", "Django", "React", "Next.js", "PostgreSQL"].map(
                (skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 999,
                      background: "#0f172a",
                      border: "1px solid #1f2937",
                      color: "#cbd5e1",
                      fontSize: 14,
                    }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
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
          <h2 style={{ marginBottom: 16 }}>Productivity Stats</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {[
              { label: "Focus Score", value: "92%" },
              { label: "Deep Work", value: "42h" },
              { label: "Tasks Done", value: "128" },
              { label: "AI Time Saved", value: "18h" },
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

        <section
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 20,
            padding: 24,
          }}
        >
          <h2 style={{ marginBottom: 16 }}>Achievements</h2>

          <div style={{ display: "grid", gap: 12 }}>
            {achievements.map((a) => (
              <div
                key={a}
                style={{
                  padding: 14,
                  borderRadius: 14,
                  background: "#0f172a",
                  border: "1px solid #1f2937",
                }}
              >
                🏆 {a}
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
        <h2 style={{ marginBottom: 16 }}>Recent Activity</h2>

        <div style={{ display: "grid", gap: 14 }}>
          {recentActivity.map((item) => (
            <div
              key={item}
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
              <span>{item}</span>
              <span style={{ color: "#94a3b8", fontSize: 14 }}>Today</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
