// frontend/src/api/api.js
//const API_URL = process.env.REACT_APP_API_URL;
const API_URL = import.meta.env.VITE_API_URL;

console.log("API_URL:", API_URL);

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
