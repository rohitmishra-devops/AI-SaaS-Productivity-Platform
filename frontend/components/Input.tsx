type Props = {
  placeholder?: string;
  type?: string;
};

export default function Input({
  placeholder = "",
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: 14,
        borderRadius: 12,
        border: "1px solid #334155",
        background: "#0f172a",
        color: "#fff",
        outline: "none",
      }}
    />
  );
}
