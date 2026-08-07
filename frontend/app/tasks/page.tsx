export default function TasksPage() {
  const columns = {
    todo: ["Design landing page", "Write API docs", "Fix auth UI"],
    progress: ["Build dashboard", "Create task cards"],
    done: ["Project setup", "Repository structure"],
  };

  return (
    <main style={{ padding: 24, background: "#0b1020", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ fontSize: 32, marginBottom: 24 }}>Task Board</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {Object.entries(columns).map(([key, tasks]) => (
          <section
            key={key}
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: 18,
              padding: 20,
              minHeight: 420,
            }}
          >
            <h2 style={{ marginBottom: 16, textTransform: "capitalize" }}>{key}</h2>

            <div style={{ display: "grid", gap: 12 }}>
              {tasks.map((task) => (
                <div
                  key={task}
                  style={{
                    padding: 16,
                    borderRadius: 14,
                    background: "#0f172a",
                    border: "1px solid #1f2937",
                  }}
                >
                  <h3 style={{ marginBottom: 8 }}>{task}</h3>
                  <p style={{ color: "#94a3b8", fontSize: 14 }}>
                    AI-generated task description and productivity insights.
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
