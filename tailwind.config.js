// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,handlebars}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          light: '#cfe1e2', // light Teal
          DEFAULT: '#5F9EA0', // medium Teal
          dark: '#395e60', // dark Teal (used for text)
        },
        blue: {
          light: '#98FB98', // pastel green (similar to light blue)
          DEFAULT: '#00A3E0', // primary blue
          dark: '#005073', // dark blue
        },
        white: '#FAFAFA', // off-white for backgrounds
        coral: '#FF6F61', // coral for highlights and calls to action
        gray: {
          light: '#F5F5F5', // light gray for backgrounds
          DEFAULT: '#CCCCCC', // default gray
          dark: '#333333', // dark gray for text
        }
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Modify as needed
      },
    },
  },
  plugins: [],
}