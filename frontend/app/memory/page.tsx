const memories = [
  {
    title: "Career Goal",
    content: "Become a full-stack AI developer and get a software internship.",
    category: "Career",
    updated: "Today",
  },
  {
    title: "Learning Progress",
    content: "Currently learning Django, DSA in Python, and React fundamentals.",
    category: "Learning",
    updated: "2 hours ago",
  },
  {
    title: "Daily Routine",
    content: "Prefers studying in the morning and coding projects in the evening.",
    category: "Productivity",
    updated: "Yesterday",
  },
  {
    title: "Project Preference",
    content: "Interested in building real SaaS products with AI integration.",
    category: "Projects",
    updated: "Yesterday",
  },
];

const conversations = [
  {
    title: "Django roadmap discussion",
    preview: "We planned the backend architecture and internship preparation...",
    time: "10:30 AM",
  },
  {
    title: "DSA study plan",
    preview: "Arrays, strings, time complexity, and interview roadmap...",
    time: "Yesterday",
  },
  {
    title: "AI SaaS product planning",
    preview: "Discussed features, architecture, and deployment strategy...",
    time: "2 days ago",
  },
];

export default function MemoryPage() {
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
          <h1 style={{ fontSize: 32 }}>AI Memory</h1>
          <p style={{ color: "#94a3b8", marginTop: 6 }}>
            Your persistent goals, preferences, and conversation history.
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
          Add Memory
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
          <h2 style={{ marginBottom: 16 }}>Persistent Memories</h2>

          <div style={{ display: "grid", gap: 16 }}>
            {memories.map((memory) => (
              <div
                key={memory.title}
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
                    marginBottom: 10,
                  }}
                >
                  <h3>{memory.title}</h3>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "#1d4ed8",
                      fontSize: 12,
                    }}
                  >
                    {memory.category}
                  </span>
                </div>

                <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>
                  {memory.content}
                </p>

                <div
                  style={{
                    marginTop: 12,
                    color: "#94a3b8",
                    fontSize: 13,
                  }}
                >
                  Updated {memory.updated}
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
          <h2 style={{ marginBottom: 16 }}>Conversation History</h2>

          <div style={{ display: "grid", gap: 14 }}>
            {conversations.map((conversation) => (
              <div
                key={conversation.title}
                style={{
                  padding: 16,
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
                    marginBottom: 8,
                  }}
                >
                  <h3>{conversation.title}</h3>
                  <span style={{ color: "#94a3b8", fontSize: 13 }}>
                    {conversation.time}
                  </span>
                </div>

                <p style={{ color: "#cbd5e1", lineHeight: 1.5 }}>
                  {conversation.preview}
                </p>

                <button
                  style={{
                    marginTop: 12,
                    padding: "8px 14px",
                    borderRadius: 10,
                    border: "1px solid #334155",
                    background: "#111827",
                    color: "#fff",
                  }}
                >
                  Continue Chat
                </button>
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
        <h2 style={{ marginBottom: 16 }}>Memory Controls</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {[
            "Export Memory",
            "Import Memory",
            "Clear Conversation History",
          ].map((action) => (
            <button
              key={action}
              style={{
                padding: "14px 18px",
                borderRadius: 14,
                border: "1px solid #334155",
                background: "#0f172a",
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {action}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
