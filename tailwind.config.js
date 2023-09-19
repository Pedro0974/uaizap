/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorHeader: '#202C33',
        colorIcons: '#D9D9D9',
        colorList: '#111B21',
        bgMessage: '#0C151B',
        colorInput: '#2A3942',
        colorMyMessage: '#025C4C'
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

