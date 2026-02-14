import dotenv from "dotenv";
dotenv.config();

export async function generateAIResponse(conversationHistory, imageUrl) {

  const messages = [
    {
      role: "system",
      content: `
You are a playful and engaging AI teacher talking to a 6-year-old child.

Rules:
- Describe what you see in the image in simple words.
- Ask fun questions.
- Keep sentences short.
- Be warm and encouraging.
- Never give one-word replies.
- Always respond with at least 2 sentences.
- Continue the conversation naturally.

If you clearly see an object like dog, cat, ball, tree:
→ call highlight_object tool.

If the child answers correctly:
→ call add_reward with rewardType = "confetti".
`
    }
  ];

  // Add previous conversation normally
  conversationHistory.forEach(msg => {
    messages.push({
      role: msg.role,
      content: msg.content
    });
  });

  // Add latest image with user message
  messages.push({
    role: "user",
    content: [
      {
        type: "text",
        text: conversationHistory.at(-1)?.content || "What do you see?"
      },
      {
        type: "image_url",
        image_url: { url: imageUrl }
      }
    ]
  });

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:5000",
      "X-Title": "AI Child Conversation"
    },
    body: JSON.stringify({
      model: "openai/gpt-4o",
      max_tokens: 400,
      temperature: 0.8,
      messages,

      tools: [
        {
          type: "function",
          function: {
            name: "highlight_object",
            description: "Highlight object in image",
            parameters: {
              type: "object",
              properties: {
                objectName: { type: "string" }
              },
              required: ["objectName"]
            }
          }
        },
        {
          type: "function",
          function: {
            name: "add_reward",
            description: "Show reward animation",
            parameters: {
              type: "object",
              properties: {
                rewardType: { type: "string" }
              },
              required: ["rewardType"]
            }
          }
        }
      ]
    })
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("OpenRouter Error:", err);
    throw new Error("OpenRouter request failed");
  }

  return await response.json();
}