export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          px-4 py-2 rounded-2xl text-sm leading-relaxed
          ${isUser ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800"}
          max-w-[60%]
          shadow-sm
        `}
      >
        {text}
      </div>
    </div>
  );
}