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
        secondary:"#b4cd02",
        third:"#399a88",
        important:"#b4cd02",
      }
    },
  },
  plugins: [],
}