/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0d1117",
        secondary:"#22c55e",
        third:"#4ade80",
        important:"#16a34a",
        surface:"#161b22",
        surfaceLight:"#1f2937",
      }
    },
  },
  plugins: [],
}