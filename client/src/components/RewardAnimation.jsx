export default function RewardAnimation({ toolAction }) {
  if (toolAction?.action !== "reward") return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        fontSize: "40px"
      }}
    >
      🎉
    </div>
  );
}