function GuestCodeForm({ onBack }) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">🎈 Invitado - Ingresa Código</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Código del evento" className="border rounded px-3 py-2" />
          <button className="bg-primary text-white py-2 rounded hover:bg-primary-dark">Entrar</button>
        </form>
        <button onClick={onBack} className="mt-4 text-sm text-blue-500 underline">
          ← Regresar
        </button>
      </div>
    );
  }
  
  export default GuestCodeForm;
  