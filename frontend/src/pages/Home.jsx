import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">🎉 Bienvenido a la Fiesta</h1>
        <p className="text-gray-600 mb-8">Sube tus mejores fotos y compártelas con todos.</p>

        <div className="flex flex-col gap-4">
          <Link to="/upload">
            <button className="w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary-dark transition">
              📷 Subir Foto
            </button>
          </Link>

          <Link to="/gallery">
            <button className="w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary-dark transition">
              🖼️ Ver Galería
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
