import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/photos/gallery')
    //fetch('https://2995-2800-486-c06-4e00-15cb-1045-e26a-743d.ngrok-free.app/photos/gallery')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos || []);
      })
      .catch((err) => {
        console.error('Error cargando galería:', err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <h1>Galería de la Fiesta 🎉</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          {photos.map((photo) => (
            <img
              key={photo}
              src={`http://localhost:8000/uploads/${photo}`}
              //src={`https://2995-2800-486-c06-4e00-15cb-1045-e26a-743d.ngrok-free.app/uploads/${photo}`}
              alt={photo}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
