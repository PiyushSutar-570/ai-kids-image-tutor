export default function ChatBubble({ role, text }) {
  return (
    <div
      style={{
        textAlign: role === "user" ? "right" : "left",
        margin: "10px"
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "10px 15px",
          borderRadius: "20px",
          background: role === "user" ? "#4CAF50" : "#eee",
          color: role === "user" ? "white" : "black",
          maxWidth: "70%"
        }}
      >
        {text}
      </div>
    </div>
  );
}