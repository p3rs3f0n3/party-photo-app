import { useState } from 'react';
import HostLoginForm from './HostLoginForm';
import GuestCodeForm from './GuestCodeForm';
import HostRegisterForm from './HostRegisterForm';


function Login() {
  const [role, setRole] = useState('');
  const [showHostRegister, setShowHostRegister] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
  <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
    <h1 className="text-3xl font-bold text-primary mb-4">🎉 Acceso a la Fiesta</h1>
    {!role && !showHostRegister ? (
      <>
        <p className="text-gray-600 mb-8">Captura los mejores momentos y compartelos con los demás</p>
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary-dark"
            onClick={() => setRole('host')}
          >
            👑 Ingresar como Host
          </button>

          <button
            className="w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary-dark"
            onClick={() => setRole('guest')}
          >
            🎈 Ingresar como Invitado
          </button>

          <button
            className="w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary-dark"
            onClick={() => setShowHostRegister(true)}
          >
            Registrarse como Host
          </button>
        </div>
      </>
      ) : showHostRegister ? (
        <HostRegisterForm onBack={() => setShowHostRegister(false)} />
      ) : role === 'host' ? (
        <HostLoginForm onBack={() => setRole('')} />
      ) : (
        <GuestCodeForm onBack={() => setRole('')} />
    )}   
  </div>
</div>

  );
}

export default Login;
