/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :"class",
  theme: {
    extend: {
      fontFamily:{
        Pacifico : ['Pacifico'],
        Alfa : ['Alfa Slab One'],
        Titan : ['Titan One'],
        Salsa : ['Salsa'],
        Faster : ['Faster'],
        Maamli : ['Ga Maamli']
      }
    },
  },
  plugins: [],
}

