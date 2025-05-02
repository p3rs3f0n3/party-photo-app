import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // 🌟 Foto seleccionada

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/photos/gallery`)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos || []);
      })
      .catch((err) => {
        console.error('Error cargando galería:', err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-primary mb-6">🎉 Galería de la Fiesta</h1>

        {photos.length === 0 ? (
          <p className="text-gray-500 text-lg">Aún no se han subido fotos 😢</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <img
                key={photo}
                src={`${import.meta.env.VITE_API_URL}/uploads/${photo}`}
                alt={photo}
                className="w-full h-40 object-cover rounded-xl shadow-md border border-primary-light cursor-pointer"
                onClick={() => setSelectedPhoto(photo)} // 📸 Al hacer click, abre modal
              />
            ))}
          </div>
        )}
      </div>

      {/* 🌟 Modal para mostrar la foto en grande */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${selectedPhoto}`}
              alt="Foto ampliada"
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black font-bold"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
