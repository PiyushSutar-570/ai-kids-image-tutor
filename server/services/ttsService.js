import dotenv from "dotenv";
dotenv.config();

export async function generateSpeech(text) {

  const voiceId = "21m00Tcm4TlvDq8ikWAM"; // default voice

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": process.env.ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_turbo_v2"
      })
    }
  );

  if (!response.ok) {
  const err = await response.text();
  console.error("ElevenLabs Error FULL >>>", err);
  throw new Error(err);
}

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return buffer.toString("base64");
}