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
        cetelem: {
          'green-1': '#007d51',
          'green-2': '#00a76c',
          'gray-1': '#616161',
          'gray-2': '#ebe1e1',
          'gray-3': '#edf1dd',
           red: '#fe0606',
           yellow: '#feab06',
           blue: '##03a5f0',
        }
      },
      screens: {
        fone: '360px'
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['hover']
    },
  },
  plugins: [],
}
