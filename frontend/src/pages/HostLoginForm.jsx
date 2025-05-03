import { useState } from 'react';
import axios from 'axios';

function HostLoginForm({ onBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hostId, setHostId] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    try {
      const response = await axios.post('https://mojarrastudio.com/partyphotoapp/backend/login/host', {
        username,
        password,
      });

      setHostId(response.data.host_id);
      setShowSummary(true);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Credenciales inválidas o error de conexión');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">👑 Host - Iniciar Sesión</h2>
      {!showSummary ? (
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
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
          {error && <p className="text-error">{error}</p>}
        </div>
      ) : (
        <div className="text-center bg-surface p-4 rounded-xl shadow-soft">
          <p className="mb-2 text-primary-dark font-heading">✅ Login exitoso</p>
          <p className="text-textPrimary">
            <strong>Host ID:</strong> {hostId}
          </p>
        </div>
      )}
      <button onClick={onBack} className="mt-4 text-sm text-blue-500 underline">
        ← Regresar
      </button>
    </div>
  );
}

export default HostLoginForm;



/*import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function HostLoginForm({ onBack }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventCode, setEventCode] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleCreateEvent = () => {
    if (!eventName || !eventDate) {
      alert('Por favor completa todos los campos');
      return;
    }
    const code = uuidv4().slice(0, 6); // Código corto
    setEventCode(code);
    setShowSummary(true);
    // Aquí más adelante enviaremos al backend
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">👑 Host - Crear Evento</h2>
      {!showSummary ? (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre del evento"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <button
            className="bg-primary text-white py-2 rounded hover:bg-primary-dark"
            onClick={handleCreateEvent}
          >
            Conectar Google Drive (simulado)
          </button>
        </div>
      ) : (
        <div className="text-center bg-surface p-4 rounded-xl shadow-soft">
          <p className="mb-2 text-primary-dark font-heading">✅ Evento creado:</p>
          <p className="text-textPrimary"><strong>Nombre:</strong> {eventName}</p>
          <p className="text-textPrimary"><strong>Fecha:</strong> {eventDate}</p>
          <p className="text-primary font-bold text-lg"><strong>Código:</strong> {eventCode}</p>
        </div>

      )}
      <button onClick={onBack} className="mt-4 text-sm text-blue-500 underline">
        ← Regresar
      </button>
    </div>
  );
}

export default HostLoginForm;
*/