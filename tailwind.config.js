/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgVector": "url('/src/assets/vector.svg')"
      },
      fontFamily: {
        "DmSans": ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}