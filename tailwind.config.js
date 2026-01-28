/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'canvas': '#FDFBF7', // A warm, paper-like off-white
        'ink': '#1A1A1A',     // Softer than pure black
        'accent': '#D4A373',  // Muted gold/terracotta
      }
    },
  },
  plugins: [],
}