🧠 AI Kids Image Tutor

An interactive real-time AI learning assistant that engages children in a 1-minute voice conversation based on an uploaded image.

The system uses Vision AI to understand images and generates child-friendly responses with voice output and UI interactions.

🚀 Live Demo

Frontend: https://your-frontend-url.vercel.app

Backend: https://your-backend-url.onrender.com

(Replace with your deployed links)

✨ Features

📸 Image upload from local device

🧠 Vision-based image understanding (GPT-4o Vision)

🎤 Voice input using Speech Recognition API

🔊 Text-to-Speech audio responses

💬 Multi-turn child-friendly conversation

🎯 Tool calls for:

Object highlighting

Reward animation (confetti)

🎨 Modern Tailwind CSS UI

🏗 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Web Speech API

Backend

Node.js

Express

Multer (image upload)

OpenRouter (GPT-4o Vision)

ElevenLabs (Text-to-Speech)

📁 Project Structure
ai-kids-image-tutor/
│
├── client/      # React Frontend
├── server/      # Node.js Backend

⚙️ Backend Setup (Local Development)

1.Navigate to server directory:

cd server

2.Install dependencies:
npm install 

3.Create .env file in server part:

OPENROUTER_API_KEY=your_key_here

ELEVENLABS_API_KEY=your_key_here

PORT=5000

4.start the server

nodemon server.js

⚙️ Frontend Setup (Local Development)
1.Navigate to client directory:

cd client

2.Install dependencies:

npm install

3.start frontend 

npm run dev

👨‍💻 Author
Piyush Sutar
CSE (AI & ML)

📌 Notes
->This project demonstrates integration of:
->Multimodal AI (Image + Text)
->Tool calling
->Real-time voice interaction
->Full-stack deployment
->Production-ready environment variable handling
