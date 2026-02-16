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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-8">

      <div className="w-full max-w-[1600px] h-[92vh] bg-white rounded-3xl shadow-2xl grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 p-8">

        {/* LEFT PANEL - IMAGE */}
        <div className="bg-gray-50 rounded-3xl p-8 flex flex-col shadow-inner">

          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            📷 Upload Image
          </h2>

          <label className="cursor-pointer bg-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-indigo-700 transition mb-6 text-center">
            Choose Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <div className="flex-1 flex items-center justify-center">
            {previewUrl ? (
              <ImageDisplay
                imageUrl={previewUrl}
                toolAction={toolAction}
              />
            ) : (
              <div className="h-80 w-full border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-400 text-lg">
                No image selected
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL - CHAT */}
        <div className="flex flex-col bg-gray-50 rounded-3xl p-8 shadow-inner h-full">

          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            🤖 AI Teacher
          </h2>

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">

            {messages.length === 0 && (
              <ChatBubble
                role="assistant"
                text="Hi! Upload an image and let's explore it together!"
              />
            )}

            {messages.map((msg, index) => (
              <ChatBubble
                key={index}
                role={msg.role}
                text={msg.text}
              />
            ))}
          </div>

          {/* VOICE BUTTON */}
          <div className="mt-6 flex justify-center">
            <VoiceButton
              isListening={isListening}
              onClick={startListening}
            />
          </div>
        </div>
      </div>

      <RewardAnimation toolAction={toolAction} />
    </div>
  );
}