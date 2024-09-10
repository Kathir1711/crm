/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Scan these files for class names
    './components/**/*.{js,ts,jsx,tsx}' // Scan components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Example primary color for your theme
        secondary: '#34d399' // Example secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example custom font
      }
    },
  },
  plugins: [],
}
