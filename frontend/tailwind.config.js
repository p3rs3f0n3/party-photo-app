export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6ee7b7',    // verde claro
          DEFAULT: '#10b981',  // verde medio
          dark: '#047857',     // verde oscuro
        },
        secondary: {
          light: '#93c5fd',    // azul claro
          DEFAULT: '#3b82f6',  // azul medio
          dark: '#1e40af',     // azul oscuro
        },
        background: '#f9fafb', // gris muy claro
        surface: '#ffffff',    // blanco
        error: '#ef4444',      // rojo
        textPrimary: '#1f2937',  // gris oscuro
        textSecondary: '#4b5563', // gris medio
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
        medium: '0 6px 10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
