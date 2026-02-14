import { useState } from "react";
import { sendMessage } from "./services/api";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { useAudioPlayer } from "./hooks/useAudioPlayer";

import ImageDisplay from "./components/ImageDisplay";
import ChatBubble from "./components/ChatBubble";
import VoiceButton from "./components/VoiceButton";
import RewardAnimation from "./components/RewardAnimation";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [toolAction, setToolAction] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const { playAudio } = useAudioPlayer();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSpeechResult = async (text) => {
    if (!imageFile) {
      alert("Please upload an image first");
      return;
    }

    setMessages((prev) => [...prev, { role: "user", text }]);

    const data = await sendMessage(text, imageFile);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", text: data.reply }
    ]);

    setToolAction(data.toolAction);
    playAudio(data.audio);
  };

  const { isListening, startListening } =
    useSpeechRecognition(handleSpeechResult);

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h2>AI Kids Teacher</h2>

      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {previewUrl && (
        <ImageDisplay imageUrl={previewUrl} toolAction={toolAction} />
      )}

      <div>
        {messages.map((msg, index) => (
          <ChatBubble key={index} role={msg.role} text={msg.text} />
        ))}
      </div>

      <VoiceButton
        isListening={isListening}
        onClick={startListening}
      />

      <RewardAnimation toolAction={toolAction} />
    </div>
  );
}