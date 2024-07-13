/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#026913",
        secondary:"#1eba0a",
        third:"#399a88",
        important:"#66b162",
      }
    },
  },
  plugins: [],
}