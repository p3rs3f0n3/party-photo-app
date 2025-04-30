// frontend/src/components/UploadForm.jsx
import { useState } from 'react';
import { uploadPhoto } from '../api/api';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Por favor selecciona una foto.');
      return;
    }

    try {
      const response = await uploadPhoto(file);
      setMessage(`✅ Foto subida: ${response.filename}`);
      setFile(null);
    } catch (error) {
      setMessage('❌ Error al subir la foto.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sube tu foto 📷</h2>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button type="submit">Subir</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default UploadForm;
