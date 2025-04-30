// frontend/src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>🏠 Inicio</Link>
      <Link to="/upload">📷 Subir Foto</Link>
      <Link to="/gallery">🖼️ Galería</Link>
    </nav>
  );
}

export default Navbar;
