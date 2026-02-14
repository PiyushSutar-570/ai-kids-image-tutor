🧠🎨 AI Kids Image Tutor

An interactive AI-powered learning assistant for kids that:

📸 Understands uploaded images

💬 Talks like a friendly teacher

🎯 Highlights objects in images

🎉 Gives reward animations

🔊 Generates voice responses

Built using React + Node.js + OpenRouter (GPT-4o Vision) + ElevenLabs TTS

🚀 Features

Image upload from local device

Vision-enabled AI conversation

Context-based memory

Tool calling support:

highlight_object

add_reward

Text-to-Speech audio playback

🏗 Project Structure
ai-kids-image-tutor/
│
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.jsx
│
├── server/          # Node + Express backend
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js

🛠 Tech Stack
Frontend

React

Vite

Custom Hooks

Fetch API

Backend

Node.js

Express

Multer (file upload)

OpenRouter GPT-4o

ElevenLabs Text-to-Speech

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/PiyushSutar-570/ai-kids-image-tutor.git
cd ai-kids-image-tutor

🔹 Backend Setup
cd server
npm install


Create a .env file inside server/:

OPENROUTER_API_KEY=your_openrouter_key
ELEVENLABS_API_KEY=your_elevenlabs_key
PORT=5000


Run backend:

npm run dev


or

node server.js

🔹 Frontend Setup
cd client
npm install
npm run dev

🧪 API Testing (Postman)

Method: POST

URL: http://localhost:5000/api/chat

Body → form-data

image → Upload image file

userMessage → Text message

🎯 Future Improvements

Better UI animations

Child progress tracking

Multiple reward styles

Deployment support

Authentication

👨‍💻 Author

Piyush Sutar
CSE (AI & ML)
Building real-world AI applications 🚀
