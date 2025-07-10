/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B0000",
        secondary: "#111111"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}