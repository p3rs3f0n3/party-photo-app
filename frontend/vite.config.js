// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carga las variables de entorno
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [react()],
    server: {
      host: true,
      allowedHosts: [
        "2995-2800-486-c06-4e00-15cb-1045-e26a-743d.ngrok-free.app"
      ],
      proxy: {
        '/photos': 'http://localhost:8000',
        '/reactions': 'http://localhost:8000',
      },
    },
  };
});

