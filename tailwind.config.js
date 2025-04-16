/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#002169",
        secondary:"#0645ce",
        third:"#5185f5",
        important:"#b4cd02",
      }
    },
  },
  plugins: [],
}