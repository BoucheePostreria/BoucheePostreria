/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e11d48",   // Rosa fuerte (Bouchée)
        secondary: "#fbbf24", // Dorado elegante
        accent: "#f472b6",    // Rosa claro de apoyo
        dark: "#1f2937",      // Gris oscuro elegante
        light: "#fdf2f8",     // Fondo suave rosado
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
