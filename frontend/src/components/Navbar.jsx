// frontend/src/components/Navbar.jsx

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full bg-gray-100 px-4 py-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="mr-4">🏠 Inicio</Link>
        <Link to="/upload" className="mr-4">📷 Subir Foto</Link>
        <Link to="/gallery">🖼️ Galería</Link>
      </div>
    </nav>
  );
}

export default Navbar;


/*import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>🏠 Inicio</Link>
      <Link to="/upload">📷 Subir Foto</Link>
      <Link to="/gallery">🖼️ Galería</Link>
    </nav>
  );
}

export default Navbar;*/
