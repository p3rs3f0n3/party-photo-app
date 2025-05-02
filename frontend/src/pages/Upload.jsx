import Navbar from '../components/Navbar';
import UploadForm from '../components/UploadForm';
import CameraCapture from '../components/CameraCapture';

function Upload() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white shadow-xl rounded-2xl p-4 sm:p-6">
          <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center">
            📷 Sube tu foto a la fiesta 🎉
          </h1>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Desde la cámara:</h3>
            <div className="w-full overflow-hidden">
              <CameraCapture />
            </div>
          </div>

          <hr className="my-6 border-pink-200" />

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Desde tu galería:</h3>
            <div className="w-full overflow-hidden">
              <UploadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
