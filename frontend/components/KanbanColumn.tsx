import TaskCard from "./TaskCard";

type Task = {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
};

export default function KanbanColumn({
  title,
  tasks,
}: {
  title: string;
  tasks: Task[];
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1f2937",
        borderRadius: 18,
        padding: 18,
      }}
    >
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      <div style={{ display: "grid", gap: 14 }}>
        {tasks.map((task) => (
          <TaskCard
            key={task.title}
            title={task.title}
            description={task.description}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  );
}
