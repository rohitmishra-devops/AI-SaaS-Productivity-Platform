import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0b1020", color: "#fff" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: 24 }}>
          <h1 style={{ fontSize: 32, marginBottom: 24 }}>{title}</h1>
          {children}
        </main>
      </div>
    </div>
  );
}
