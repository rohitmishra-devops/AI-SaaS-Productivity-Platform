export default function AIPage() {
  const messages = [
    {
      role: "assistant",
      content:
        "Hi Rohit! I’m your AI productivity assistant. I can help you plan your day, organize tasks, prepare for interviews, and track your goals.",
    },
    {
      role: "user",
      content:
        "Bhai, mere paas DSA, Django project aur internship task pending hai. Aaj ka schedule bana de.",
    },
    {
      role: "assistant",
      content:
        "Suggested plan:\n\n• 9:00-10:30 AM → DSA practice\n• 10:45-12:00 PM → Django backend\n• 2:00-3:30 PM → Internship task\n• 4:00-5:00 PM → Review & commit changes",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          padding: 24,
          borderBottom: "1px solid #1f2937",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: 28 }}>AI Assistant</h1>

        <button
          style={{
            padding: "10px 16px",
            borderRadius: 12,
            border: "1px solid #334155",
            background: "#111827",
            color: "#fff",
          }}
        >
          New Chat
        </button>
      </header>

      <div
        style={{
          flex: 1,
          padding: 24,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "80%",
                padding: 18,
                borderRadius: 18,
                background: m.role === "user" ? "#2563eb" : "#111827",
                border: "1px solid #1f2937",
                whiteSpace: "pre-line",
                lineHeight: 1.6,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "#cbd5e1",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {m.role === "user" ? "You" : "AI Assistant"}
              </div>

              {m.content}
            </div>
          ))}
        </div>
      </div>

      <footer
        style={{
          borderTop: "1px solid #1f2937",
          padding: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            display: "flex",
            gap: 12,
          }}
        >
          <input
            placeholder="Ask anything..."
            style={{
              flex: 1,
              padding: 16,
              borderRadius: 14,
              border: "1px solid #334155",
              background: "#111827",
              color: "#fff",
            }}
          />

          <button
            style={{
              padding: "16px 22px",
              borderRadius: 14,
              border: "none",
              background: "#2563eb",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Send
          </button>
        </div>
      </footer>
    </main>
  );
}
