export default function VoiceButton({ isListening, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "15px 30px",
        fontSize: "18px",
        borderRadius: "50px",
        margin: "20px",
        background: isListening ? "red" : "#2196F3",
        color: "white",
        border: "none"
      }}
    >
      {isListening ? "Listening..." : "🎤 Speak"}
    </button>
  );
}
