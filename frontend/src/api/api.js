// frontend/src/api/api.js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
//const API_URL ="https://2995-2800-486-c06-4e00-15cb-1045-e26a-743d.ngrok-free.app";

export async function uploadPhoto(photoFile) {
  const formData = new FormData();
  formData.append('file', photoFile);

  const response = await fetch(`${API_URL}/photos/upload`, {
    method: 'POST',
    body: formData,
  });

  return await response.json();
}

export async function getGallery() {
  const response = await fetch(`${API_URL}/photos/gallery`);
  return await response.json();
}
