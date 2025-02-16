/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette1: '#119DA4',
        palette2: '#0C7489',
        palette3: '#13505B',
        palette4: '#040404',
        palette5: '#D7D9CE',
        palette6: '#0F1219',
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        terminal: ["Courier Prime", "monospace"],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

