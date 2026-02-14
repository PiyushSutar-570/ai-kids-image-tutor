import { useState } from "react";

export function useAudioPlayer() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const playAudio = (base64Audio) => {
    const audio = new Audio("data:audio/mpeg;base64," + base64Audio);

    setIsSpeaking(true);

    audio.onended = () => {
      setIsSpeaking(false);
    };

    audio.play();
  };

  return { isSpeaking, playAudio };
}
