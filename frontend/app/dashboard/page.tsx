import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import DashboardCard from "@/components/DashboardCard";
import AIChatWidget from "@/components/AIChatWidget";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <main style={{ padding: 24 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              marginBottom: 24,
            }}
          >
            <DashboardCard
              title="Total Tasks"
              value="128"
              subtitle="+12% this week"
            />
            <DashboardCard
              title="Completed"
              value="94"
              subtitle="73% completion rate"
            />
            <DashboardCard
              title="Focus Hours"
              value="42h"
              subtitle="+6h from last week"
            />
            <DashboardCard
              title="AI Suggestions"
              value="18"
              subtitle="Ready to apply"
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 20,
            }}
          >
            <div
              style={{
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: 18,
                padding: 24,
                minHeight: 420,
              }}
            >
              <h3 style={{ marginBottom: 16 }}>Productivity Overview</h3>

              <div
                style={{
                  height: 320,
                  borderRadius: 12,
                  background:
                    "linear-gradient(180deg,#1f2937,#0f172a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#64748b",
                }}
              >
                Interactive Analytics Chart
              </div>
            </div>

            <AIChatWidget />
          </div>
        </main>
      </div>
    </div>
  );
}
