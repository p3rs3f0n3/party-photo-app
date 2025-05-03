import { useState } from 'react';
import axios from 'axios';

function HostRegisterForm({ onBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!username || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    try {
      const response = await axios.post('https://mojarrastudio.com/partyphotoapp/backend/register/host', {
        username,
        password,
      });
      

      setSuccess(true);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error al registrar el host');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">👑 Registrar Host</h2>
      {!success ? (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Usuario (username)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <button
            className="bg-primary text-surface py-2 rounded hover:bg-primary-dark"
            onClick={handleRegister}
          >
            Registrarse
          </button>
          {error && <p className="text-error">{error}</p>}
        </div>
      ) : (
        <div className="text-center bg-surface p-4 rounded-xl shadow-soft">
          <p className="mb-2 text-primary-dark font-heading">✅ Registro exitoso</p>
          <p className="text-textPrimary">¡Ahora puedes iniciar sesión!</p>
        </div>
      )}
      <button onClick={onBack} className="mt-4 text-sm text-blue-500 underline">
        ← Regresar
      </button>
    </div>
  );
}

export default HostRegisterForm;
