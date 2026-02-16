const API_BASE = "http://localhost:5000/api/chat";

export async function sendMessage(userMessage, imageFile) {
  const formData = new FormData();
  formData.append("userMessage", userMessage);
  formData.append("image", imageFile);

  const response = await fetch(API_BASE, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    throw new Error("Server error");
  }

  return response.json();
}