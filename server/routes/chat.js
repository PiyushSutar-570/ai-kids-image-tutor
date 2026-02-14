import express from "express";
import multer from "multer";
import fs from "fs";
import { generateAIResponse } from "../services/openrouterService.js";
import { generateSpeech } from "../services/ttsService.js";
import { handleToolCalls } from "../utils/toolHandler.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// In-memory conversation storage
let conversationHistory = [];

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { userMessage } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ error: "Image required" });
    }

    // Convert image to base64
    const imageBuffer = fs.readFileSync(imageFile.path);
    const base64Image = imageBuffer.toString("base64");
    const imageDataUrl = `data:${imageFile.mimetype};base64,${base64Image}`;

    // Delete temp file
    fs.unlinkSync(imageFile.path);

    // Save user message
    conversationHistory.push({
      role: "user",
      content: userMessage
    });

    const aiResponse = await generateAIResponse(
      conversationHistory,
      imageDataUrl
    );

    const message = aiResponse.choices[0].message;

    let aiText = message.content || "I see something interesting!";
    let toolAction = null;

    if (message.tool_calls) {
      toolAction = handleToolCalls(message.tool_calls);
    }

    // Save AI reply
    conversationHistory.push({
      role: "assistant",
      content: aiText
    });

    const audioBase64 = await generateSpeech(aiText);

    res.json({
      reply: aiText,
      audio: audioBase64,
      toolAction
    });

  } catch (err) {
    console.error("FULL ERROR >>>", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.post("/reset", (req, res) => {
  conversationHistory = [];
  res.json({ message: "Conversation reset" });
});

export default router;