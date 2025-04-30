import Navbar from '../components/Navbar';
import UploadForm from '../components/UploadForm';
import CameraCapture from '../components/CameraCapture';

function Upload() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <h1>📷 Subir tu foto a la fiesta 🎉</h1>
        <h3>Desde la cámara:</h3>
        <CameraCapture />
        <hr />
        <h3>Desde tu galería:</h3>
        <UploadForm />
      </div>
    </div>
  );
}

export default Upload;
