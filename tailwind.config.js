/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006D37', // Deep green per spesifikasi
        shopee: '#FF4A3F',  // Shopee Orange/Red
        tokped: '#00AA5B',  // Tokopedia Green
        bodylight: '#FDFBF7', // Background cream/stone
        accent: '#93C572'   // Light green
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
