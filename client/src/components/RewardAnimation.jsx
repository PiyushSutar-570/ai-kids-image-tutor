import { useEffect, useState } from "react";

export default function RewardAnimation({ toolAction }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toolAction?.action === "reward") {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [toolAction]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="text-6xl animate-bounce">
        🎉✨🌟
      </div>
    </div>
  );
}
