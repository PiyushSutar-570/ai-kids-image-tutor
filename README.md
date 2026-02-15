# AI Kids Image Tutor

An AI-powered interactive learning assistant for children that analyzes uploaded images and conducts a voice-based conversation using Vision AI and Text-to-Speech.

---

## 🚀 Overview

AI Kids Image Tutor enables children to:

- Upload an image
- Speak to the AI teacher
- Receive child-friendly responses
- Listen to AI voice replies
- See interactive UI effects (highlight & rewards)

The system uses GPT-4o Vision for image understanding and ElevenLabs for natural speech output.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Web Speech API

### Backend
- Node.js
- Express
- Multer (image upload)
- OpenRouter (GPT-4o Vision)
- ElevenLabs (Text-to-Speech)

---

ai-kids-image-tutor/
│
├── client/ # React Frontend
├── server/ # Express Backend
└── README.md


---

## ⚙️ Prerequisites

- Node.js (v18+ recommended)
- npm
- OpenRouter API Key
- ElevenLabs API Key

---

## 📦 Clone Repository
git clone https://github.com/PiyushSutar-570/ai-kids-image-tutor.git


---

# 🔧 Backend Setup

1️⃣ Navigate to backend folder:
cd server


2️⃣ Install dependencies:
npm install


3️⃣ Create a `.env` file inside `server` folder:
PORT=5000
OPENROUTER_API_KEY=your_openrouter_api_key(openai-4o)
ELEVENLABS_API_KEY=your_elevenlabs_api_key


⚠ Do NOT commit `.env` to GitHub.

4️⃣ Start backend:
node server.js


Backend runs at:
http://localhost:5000/


---

# 🎨 Frontend Setup

1️⃣ Navigate to frontend folder:
cd client


2️⃣ Install dependencies:
npm install


3️⃣ Create a `.env` file inside `client` folder:
VITE_API_URL=http://localhost:5000


4️⃣ Start frontend:
npm run dev


Frontend runs at:
http://localhost:5173


---

## 📡 API Endpoint

### POST `/api/chat`

**Form Data:**
- `image` → image file
- `userMessage` → text message

**Response:**

{
"reply": "AI response text",
"audio": "base64_audio_string",
"toolAction": {
"action": "highlight | reward",
"target": "object_name"
}
}


---

## ✨ Features

- Image upload from local device
- GPT-4o Vision-based image analysis
- Multi-turn child-friendly conversation (~1 minute)
- Voice input using browser speech recognition
- AI voice output using ElevenLabs
- Tool calling system:
  - Object highlighting
  - Reward animation
- Modern Tailwind CSS UI
- Full-stack deployment ready

---

## 🔐 Environment Variables

Environment variables must be configured:

### Backend (.env)

OPENROUTER_API_KEY(openai-4o)
ELEVENLABS_API_KEY
PORT


### Frontend (.env)
VITE_API_URL


Never expose API keys publicly.

---

## 🌍 Deployment

### Backend
Deploy to:
- Render
- Railway

Set environment variables in hosting dashboard.

### Frontend
Deploy to:
- Vercel

Set:
VITE_API_URL=https://your-backend-url



---

## 🧠 Application Flow

1. User uploads image
2. AI analyzes image using Vision model
3. AI generates child-friendly response
4. AI may trigger:
   - Object highlight
   - Reward animation
5. ElevenLabs generates speech
6. Frontend plays audio
7. Conversation continues interactively

---

## 🎯 Assignment Fulfillment

- Displays uploaded image
- Conducts 1-minute interactive conversation
- Uses LLM with vision capability
- Includes tool-calling functionality
- Uses React frontend
- Secure environment variable handling
- Deployment-ready architecture

---

## 👨‍💻 Author

Piyush Sutar  
CSE (AI & ML)

---

## 📌 Notes

This project demonstrates:

- Multimodal AI integration (Image + Text + Voice)
- Tool calling implementation
- Real-time user interaction
- Full-stack deployment
- Secure API management

