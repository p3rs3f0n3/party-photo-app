import { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { uploadPhoto } from '../api/api';

function CameraCapture() {
  const webcamRef = useRef(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [facingMode, setFacingMode] = useState('environment');
  const [orientation, setOrientation] = useState('landscape');

  const captureAndUpload = async () => {
    const screenshot = webcamRef.current.getScreenshot();

    if (screenshot) {
      setLoading(true);
      const blob = await (await fetch(screenshot)).blob();
      const file = new File([blob], `photo_${Date.now()}.jpg`, { type: 'image/jpeg' });

      try {
        const response = await uploadPhoto(file);
        setMessage(`✅ Foto subida: ${response.filename}`);
      } catch (error) {
        console.error(error);
        setMessage('❌ Error al subir la foto.');
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  // 📱 Detectar orientación automática
  useEffect(() => {
    const updateOrientation = () => {
      if (window.matchMedia('(orientation: portrait)').matches) {
        setOrientation('portrait');
      } else {
        setOrientation('landscape');
      }
    };

    updateOrientation(); // detectar al cargar

    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`relative w-full ${
          orientation === 'landscape' ? 'aspect-video' : 'aspect-[3/4]'
        } bg-gray-200 rounded-lg overflow-hidden mb-4`}
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover"
          videoConstraints={{ facingMode }}
        />
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-2 mb-2">
        <button
          onClick={captureAndUpload}
          disabled={loading}
          className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Subiendo...' : '📸 Tomar y Subir Foto'}
        </button>
        <button
          onClick={toggleCamera}
          className="w-full bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          🔄 Cambiar Cámara
        </button>
      </div>

      {message && (
        <p className={`text-center text-sm mt-2 ${message.startsWith('✅') ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default CameraCapture;
