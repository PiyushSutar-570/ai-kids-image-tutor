export default function VoiceButton({ isListening, onClick }) {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        className={`
          px-6 py-3 rounded-full text-white text-lg font-medium
          shadow-lg transition-all duration-300
          ${isListening
            ? "bg-red-500 animate-pulse"
            : "bg-indigo-600 hover:scale-105"}
        `}
      >
        {isListening ? "Listening..." : "🎤 Speak"}
      </button>
    </div>
  );
}