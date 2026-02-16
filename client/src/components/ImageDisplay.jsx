export default function ImageDisplay({ imageUrl, toolAction }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border bg-white">

      <img
        src={imageUrl}
        alt="AI Scene"
        className="w-full h-[400px] object-cover"
      />

      {toolAction?.action === "highlight" && (
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <div className="bg-yellow-400/80 text-gray-900 px-4 py-2 rounded-xl shadow-lg font-semibold text-sm">
            {toolAction.target}
          </div>
        </div>
      )}

    </div>
  );
}