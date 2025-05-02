export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6ee7b7',  // verde claro (tailwind emerald-300)
          DEFAULT: '#10b981', // verde medio (tailwind emerald-500)
          dark: '#047857',   // verde oscuro (tailwind emerald-700)
        },
      },
    },
  },
  plugins: [],
}
