/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#1DB954",
          600: "#18a84b",
          700: "#12863b"
        }
      }
    },
  },
  plugins: [],
};
