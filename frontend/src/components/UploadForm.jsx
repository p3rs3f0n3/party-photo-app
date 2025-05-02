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
      setMessage('⚠️ Por favor selecciona una foto.');
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
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Sube tu foto 📷</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-4"
      />

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mb-2"
      >
        Subir
      </button>

      {message && (
        <p className={`text-center text-sm mt-2 ${message.startsWith('✅') ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </form>
  );
}

export default UploadForm;


// frontend/src/components/UploadForm.jsx
/*import { useState } from 'react';
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

export default UploadForm;*/
