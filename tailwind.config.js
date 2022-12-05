/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blurWhite: '#F6F6FF',
        /* Pallet colors */
        mainBlue: '#2996E9',
        superBlu: '#769FCD',
        lightBlu: '#B9D7EA',
        superLightBlu: '#D6E6F2',
        almostWhite: '#F7FBFC'
      }
    },
  },
  plugins: [],
}
