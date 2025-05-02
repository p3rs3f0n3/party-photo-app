import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { uploadPhoto } from '../api/api';

function CameraCapture() {
  const webcamRef = useRef(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover"
          videoConstraints={{ facingMode: 'environment' }}
        />
      </div>

      <button
        onClick={captureAndUpload}
        disabled={loading}
        className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Subiendo...' : '📸 Tomar y Subir Foto'}
      </button>

      {message && (
        <p className={`text-center text-sm mt-2 ${message.startsWith('✅') ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default CameraCapture;


/*import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { uploadPhoto } from '../api/api';

function CameraCapture() {
  const webcamRef = useRef(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

  return (
    <div style={{ textAlign: 'center' }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={{ facingMode: 'environment' }}
      />
      <br />
      <button onClick={captureAndUpload} disabled={loading}>
        {loading ? 'Subiendo...' : '📸 Tomar y Subir Foto'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CameraCapture;*/
