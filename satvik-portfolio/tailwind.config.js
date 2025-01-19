/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette1: '#000B58',
        palette2: '#003161',
        palette3: '#006A67',
        palette4: '#FFF4B7',
        palette4dark: '#D2CA9D',
        background1: '#023234',
        background2: '#010B1D'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

