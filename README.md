AI Kids Image Tutor

An interactive AI-powered learning assistant for kids.

Features:

Image upload from local device

Vision-based AI conversation

Friendly teacher-style responses

Object highlighting tool

Reward animations

Text-to-Speech audio playback

Tech Stack

Frontend:

React

Vite

Backend:

Node.js

Express

OpenRouter (GPT-4o Vision)

ElevenLabs TTS

Multer (file upload)

Project Structure

ai-kids-image-tutor/
client/
server/

Backend Setup

Go to server folder:
cd server

Install dependencies:
npm install

Create a .env file inside server folder and add:

OPENROUTER_API_KEY=your_key
ELEVENLABS_API_KEY=your_key
PORT=5000

Run backend:
node server.js

Frontend Setup

Go to client folder:
cd client

Install dependencies:
npm install

Run frontend:
npm run dev

API Testing (Postman)

POST http://localhost:5000/api/chat

Body → form-data:

image (file upload)

userMessage (text)

Author:
Piyush Sutar
CSE (AI & ML)
