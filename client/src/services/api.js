const API_BASE = `${import.meta.env.VITE_API_URL}/api/chat`;
console.log(API_BASE);

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