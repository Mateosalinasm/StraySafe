/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.jsx",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': {
          100: '#ede0d4',
          200: '#e6ccb2',
          300: '#ddb892',
          400: '#b08968',
          500: '#9c6644',
          900: '#7f5539',
        }
      },
      rotate: {
        '15': '15deg',
        '17': '17deg',
        '20': '20deg',
      }
    },
  },
  plugins: [],
}

