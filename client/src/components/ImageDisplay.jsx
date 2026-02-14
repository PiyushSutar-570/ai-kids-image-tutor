export default function ImageDisplay({ imageUrl, toolAction }) {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img
        src={imageUrl}
        alt="AI Scene"
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />

      {toolAction?.action === "highlight" && (
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            padding: "10px",
            background: "rgba(255,255,0,0.7)",
            borderRadius: "10px"
          }}
        >
          {toolAction.target}
        </div>
      )}
    </div>
  );
}
