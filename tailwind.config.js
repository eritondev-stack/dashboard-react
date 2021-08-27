const { colors, screens } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['"Roboto Slab"', 'serif'],
      body: ['Roboto', 'sans-serif'],
  },
    extend: {
      colors: {
        ...colors,
        tci: {
          background: '#F9FBFA',
          pos: '#00E396',
          p: '#707070',
          c: '#C6C1C1',
          backgroundTd: '#F9FBFA'
        }
      },
      screens: {
        ...screens,
        fone: '360px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
