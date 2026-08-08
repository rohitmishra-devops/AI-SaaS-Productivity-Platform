type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ children, variant = "primary" }: Props) {
  const styles = {
    primary: {
      background: "#2563eb",
      color: "#fff",
      border: "none",
    },
    secondary: {
      background: "#111827",
      color: "#fff",
      border: "1px solid #334155",
    },
    ghost: {
      background: "transparent",
      color: "#e5e7eb",
      border: "1px solid #1f2937",
    },
  };

  return (
    <button
      style={{
        padding: "12px 18px",
        borderRadius: 12,
        cursor: "pointer",
        fontWeight: 600,
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
}
